(function () {
  const quotes = [
    "Tâm bình thế giới bình.",
    "Giữ tâm như nước lặng, soi rõ muôn điều.",
    "Thấy lỗi mình, đừng thấy lỗi người.",
    "Người tu là người buông bỏ, không phải người bỏ cuộc.",
    "Chánh niệm là chìa khóa giải thoát.",
    "Không có con đường dẫn đến hạnh phúc. Hạnh phúc chính là con đường.",
    "Buông bỏ không phải là yếu đuối, mà là dũng khí.",
    "Người biết đủ là người giàu có nhất.",
    "Một niệm thiện có thể hóa giải nghìn niệm ác.",
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const box = document.createElement("div");
  box.innerText = `📿 ${quote}`;
  box.style.position = "absolute";
  box.style.bottom = "50px";
  box.style.left = "0px";
  box.style.background = "rgba(145, 132, 132, 0.53)";
  box.style.color = "RGB(255, 255, 255, 0.9)";
  box.style.padding = "8px 12px";
  box.style.borderRadius = "10px";
  box.style.fontSize = "14px";
  box.style.maxWidth = "80%";
  box.style.zIndex = 9;
  box.style.pointerEvents = "none";
  box.style.fontStyle = "italic";
  document.body.appendChild(box);
  if (document.body.classList.contains("dark-mode")) {
    box.style.background = "rgba(0,0,0,0.7)";
    box.style.color = "#eee";
  }
})();
