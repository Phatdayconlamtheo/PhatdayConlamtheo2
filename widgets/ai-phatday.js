(function () {
  const box = document.createElement("div");
  box.style.position = "fixed";
  box.style.bottom = "120px";
  box.style.right = "10px";
  box.style.background = "rgba(255,255,255,0.95)";
  box.style.padding = "10px";
  box.style.borderRadius = "12px";
  box.style.zIndex = 999;
  box.style.width = "300px";
  box.innerHTML = \`
    <div style="font-weight:bold;margin-bottom:5px;">💬 Hỏi Phật:</div>
    <textarea id="phat-input" rows="2" style="width:100%;resize:none;"></textarea>
    <button id="phat-send" style="margin-top:5px;width:100%;">Hỏi ngay</button>
    <div id="phat-reply" style="margin-top:10px;font-style:italic;font-size:14px;"></div>
  \`;
  document.body.appendChild(box);

  document.getElementById("phat-send").onclick = async () => {
    const input = document.getElementById("phat-input").value;
    const replyEl = document.getElementById("phat-reply");
    if (!input.trim()) return;
    replyEl.innerText = "⏳ Đang suy nghiệm...";
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer YOUR_OPENAI_API_KEY"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "Bạn là một vị thiền sư, trả lời ngắn gọn bằng lời Phật dạy, nhẹ nhàng, mang thiền vị." },
            { role: "user", content: input }
          ],
          temperature: 0.7
        })
      });
      const data = await res.json();
      const text = data.choices?.[0]?.message?.content?.trim();
      replyEl.innerText = text || "🙏 Không rõ lời.";
    } catch (e) {
      replyEl.innerText = "❌ Lỗi kết nối AI.";
    }
  };
})();