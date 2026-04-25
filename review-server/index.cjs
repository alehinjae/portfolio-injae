const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const COMMENTS_FILE = path.join(__dirname, "..", "review-comments.json");

function readComments() {
  if (!fs.existsSync(COMMENTS_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(COMMENTS_FILE, "utf8")); }
  catch { return []; }
}

function writeComments(comments) {
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2), "utf8");
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") { res.writeHead(200); res.end(); return; }

  const json = (data, status = 200) => {
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data, null, 2));
  };

  if (req.url === "/comments") {
    if (req.method === "GET") {
      json(readComments());

    } else if (req.method === "POST") {
      let body = "";
      req.on("data", (c) => (body += c));
      req.on("end", () => {
        try {
          const incoming = JSON.parse(body);
          const comments = Array.isArray(incoming) ? incoming : [incoming];
          const existing = readComments();
          const updated = [...existing, ...comments];
          writeComments(updated);

          console.log(`\n✅ ${comments.length} comentário(s) recebido(s). Total: ${updated.length}`);
          comments.forEach((c, i) => {
            console.log(`  ${i + 1}. [${c.element?.tag || "?"}] ${c.comment}`);
          });
          console.log('\n💡 Diga ao Claude: "tem comentários novos"\n');

          json({ ok: true, received: comments.length, total: updated.length });
        } catch (e) {
          json({ error: e.message }, 400);
        }
      });

    } else if (req.method === "DELETE") {
      writeComments([]);
      console.log("🗑  Comentários limpos.\n");
      json({ ok: true });

    } else {
      json({ error: "Method not allowed" }, 405);
    }
  } else {
    json({ error: "Not found" }, 404);
  }
});

server.listen(PORT, () => {
  console.log("╔══════════════════════════════════════╗");
  console.log("║     Portfolio Review Server          ║");
  console.log(`║     http://localhost:${PORT}           ║`);
  console.log("╚══════════════════════════════════════╝");
  console.log(`\n📝 Comentários salvos em: review-comments.json`);
  console.log("🎨 Aguardando comentários da extensão Chrome...\n");
});
