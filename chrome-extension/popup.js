const SERVER = "http://localhost:3001";

function render(comments) {
  const badge = document.getElementById("badge");
  const list = document.getElementById("list");
  const send = document.getElementById("send");

  badge.textContent = comments.length;
  badge.className = "badge" + (comments.length === 0 ? " empty" : "");
  send.disabled = comments.length === 0;

  if (comments.length === 0) {
    list.innerHTML = `<div class="empty">Nenhum comentário ainda.<br />Clique em 💬 na página para<br />ativar o modo de revisão.</div>`;
    return;
  }

  list.innerHTML = comments
    .map(
      (c, i) => `
      <div class="item" data-id="${c.id}">
        <span class="item-num">${i + 1}.</span>
        <div class="item-body">
          <div class="item-path">${c.element?.tag || c.page || "?"}</div>
          <div class="item-text">${c.comment}</div>
        </div>
        <button class="item-del" data-id="${c.id}" title="Remover">✕</button>
      </div>
    `
    )
    .join("");

  // Delete individual
  list.querySelectorAll(".item-del").forEach((btn) => {
    btn.addEventListener("click", () => {
      chrome.storage.local.get(["pfComments"], (res) => {
        const updated = (res.pfComments || []).filter((c) => c.id !== Number(btn.dataset.id));
        chrome.storage.local.set({ pfComments: updated });
        chrome.runtime.sendMessage({ type: "badge", count: updated.length });
        render(updated);
      });
    });
  });
}

function setStatus(msg, type = "", ms = 4000) {
  const el = document.getElementById("status");
  el.textContent = msg;
  el.className = "status " + type;
  if (ms) setTimeout(() => { el.textContent = ""; el.className = "status"; }, ms);
}

// Load on open
chrome.storage.local.get(["pfComments"], (res) => render(res.pfComments || []));

// Send
document.getElementById("send").addEventListener("click", () => {
  chrome.storage.local.get(["pfComments"], async (res) => {
    const comments = res.pfComments || [];
    if (!comments.length) return;

    setStatus("Enviando…", "", 0);

    try {
      const r = await fetch(`${SERVER}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comments),
      });

      if (!r.ok) throw new Error(`HTTP ${r.status}`);

      chrome.storage.local.set({ pfComments: [] });
      chrome.runtime.sendMessage({ type: "badge", count: 0 });
      render([]);
      setStatus(`✓ ${comments.length} comentário(s) enviado(s)! Avise o Claude.`, "ok");
    } catch {
      setStatus("✗ Servidor offline. Rode: node review-server/index.js", "err", 6000);
    }
  });
});

// Clear all
document.getElementById("clear").addEventListener("click", () => {
  chrome.storage.local.set({ pfComments: [] });
  chrome.runtime.sendMessage({ type: "badge", count: 0 });
  render([]);
});
