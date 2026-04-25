let commentMode = false;
let activePopup = null;

// ── Element info ─────────────────────────────────────────────────────────────

function getElementInfo(el) {
  const tag = el.tagName.toLowerCase();
  const id = el.id ? `#${el.id}` : "";
  const cls = Array.from(el.classList)
    .filter((c) => !c.startsWith("pf-"))
    .slice(0, 2)
    .map((c) => `.${c}`)
    .join("");
  const text = (el.innerText || "").slice(0, 60).trim().replace(/\s+/g, " ");
  const rect = el.getBoundingClientRect();

  // CSS path (up to 4 ancestors)
  const parts = [];
  let cur = el;
  while (cur && cur !== document.body && parts.length < 4) {
    let seg = cur.tagName.toLowerCase();
    if (cur.id) seg += `#${cur.id}`;
    else if (cur.className)
      seg += `.${[...cur.classList].filter((c) => !c.startsWith("pf-"))[0] || ""}`;
    parts.unshift(seg);
    cur = cur.parentElement;
  }

  return {
    tag: `${tag}${id}${cls}`,
    text,
    path: parts.join(" > "),
    position: {
      x: Math.round(rect.left + window.scrollX),
      y: Math.round(rect.top + window.scrollY),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    },
  };
}

// ── Hover highlight ───────────────────────────────────────────────────────────

function onMouseOver(e) {
  if (!commentMode || activePopup) return;
  if (e.target.closest(".pf-comment-popup, .pf-review-toggle")) return;
  e.target.classList.add("pf-highlight");
}

function onMouseOut(e) {
  e.target.classList.remove("pf-highlight");
}

// ── Comment popup ─────────────────────────────────────────────────────────────

function onPageClick(e) {
  if (!commentMode) return;
  if (e.target.closest(".pf-comment-popup, .pf-review-toggle")) return;
  e.preventDefault();
  e.stopPropagation();

  e.target.classList.remove("pf-highlight");
  const info = getElementInfo(e.target);
  showPopup(info, e.clientX, e.clientY);
}

function showPopup(info, cx, cy) {
  if (activePopup) { activePopup.remove(); activePopup = null; }

  const popup = document.createElement("div");
  popup.className = "pf-comment-popup";
  popup.innerHTML = `
    <div class="pf-popup-header">
      <code class="pf-popup-tag">${info.tag}</code>
      <button class="pf-popup-x" title="Fechar">✕</button>
    </div>
    ${info.text ? `<p class="pf-popup-ctx">"${info.text.slice(0, 50)}${info.text.length > 50 ? "…" : ""}"</p>` : ""}
    <textarea class="pf-popup-input" placeholder="Descreva o ajuste ou problema…" rows="3"></textarea>
    <div class="pf-popup-actions">
      <button class="pf-popup-cancel">Cancelar</button>
      <button class="pf-popup-save">Salvar comentário</button>
    </div>
  `;

  // Position near click, keep inside viewport
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;
  popup.style.top = `${Math.min(cy + scrollY + 12, document.documentElement.scrollHeight - 220)}px`;
  popup.style.left = `${Math.max(8, Math.min(cx + scrollX + 8, window.innerWidth - 320))}px`;

  document.body.appendChild(popup);
  activePopup = popup;
  popup.querySelector("textarea").focus();

  const close = () => { popup.remove(); activePopup = null; };

  popup.querySelector(".pf-popup-x").addEventListener("click", close);
  popup.querySelector(".pf-popup-cancel").addEventListener("click", close);
  popup.querySelector(".pf-popup-save").addEventListener("click", () => {
    const text = popup.querySelector("textarea").value.trim();
    if (!text) return;

    const comment = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      url: window.location.href,
      page: window.location.pathname,
      element: info,
      comment: text,
    };

    chrome.storage.local.get(["pfComments"], (res) => {
      const list = [...(res.pfComments || []), comment];
      chrome.storage.local.set({ pfComments: list });
      chrome.runtime.sendMessage({ type: "badge", count: list.length });
    });

    popup.innerHTML = `<div class="pf-popup-saved">✓ Comentário salvo!</div>`;
    setTimeout(close, 900);
  });
}

// ── Toggle button ─────────────────────────────────────────────────────────────

function createToggle() {
  const btn = document.createElement("button");
  btn.className = "pf-review-toggle";
  btn.textContent = "💬";
  btn.title = "Ativar modo de comentários";

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    commentMode = !commentMode;
    btn.classList.toggle("pf-active", commentMode);
    btn.title = commentMode
      ? "Modo ativo — clique em qualquer elemento"
      : "Ativar modo de comentários";
    document.body.classList.toggle("pf-mode", commentMode);
    if (!commentMode && activePopup) { activePopup.remove(); activePopup = null; }
  });

  return btn;
}

// ── Init ──────────────────────────────────────────────────────────────────────

function init() {
  document.body.appendChild(createToggle());
  document.addEventListener("mouseover", onMouseOver, true);
  document.addEventListener("mouseout", onMouseOut, true);
  document.addEventListener("click", onPageClick, true);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
