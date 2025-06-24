(function () {
  const quotes = [
    "Tâm là chủ, tâm tạo tác. Nếu nói hay hành động với tâm thanh tịnh, hạnh phúc theo sau như bóng với hình.",
    "Sống trong đời, đừng tìm lỗi người. Tìm lỗi mình trước đã.",
    "Không ai cứu được bạn ngoài chính bạn. Hãy tự mình tinh tấn.",
    "Người sống chánh niệm là người sống hai lần.",
    "Không làm điều ác, siêng làm việc lành, giữ tâm ý trong sạch – đó là lời chư Phật dạy.",
    "Thắng người khác là mạnh, thắng chính mình là vĩ đại.",
    "Chỉ có hiện tại là sự sống. Quá khứ đã qua, tương lai chưa tới.",
    "Thà sống một ngày có chánh niệm, còn hơn sống trăm năm vô minh.",
  ];
  const today = new Date();
  const index = today.getDate() % quotes.length;
  const quote = quotes[index];
  const el = document.createElement("div");
  el.innerText = `📖 ${quote}`;
  el.style.position = "absolute";
  el.style.bottom = "100px";
  el.style.right = "50px";
  el.style.background = "rgba(255,255,255,0.9)";
  el.style.color = "#222";
  el.style.padding = "10px";
  el.style.borderRadius = "12px";
  el.style.maxWidth = "300px";
  el.style.zIndex = 10;
  el.style.fontStyle = "italic";
  el.style.fontSize = "14px";
  el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  document.body.appendChild(el);
})();
