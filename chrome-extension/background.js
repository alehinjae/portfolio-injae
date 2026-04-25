chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "badge") {
    const text = msg.count > 0 ? String(msg.count) : "";
    chrome.action.setBadgeText({ text });
    chrome.action.setBadgeBackgroundColor({ color: "#dc2626" });
  }
});
