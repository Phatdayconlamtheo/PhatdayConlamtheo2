(function () {
  const now = new Date();
  const d = now.getDate(), m = now.getMonth() + 1;
  const list = {
    "1-1": "🕯 Hôm nay là mồng 1 đầu tháng – giữ tâm thanh tịnh.",
    "15-1": "🌕 Hôm nay là Rằm tháng Giêng – lễ nguyện bình an.",
    "15-7": "🏮 Vu Lan báo hiếu – nghĩ về cha mẹ.",
    "15-12": "🕯 Rằm tháng Chạp – chuẩn bị năm mới với tâm hoan hỷ."
  };
  const key = d + "-" + m;
  if (list[key]) {
    const el = document.createElement("div");
    el.innerText = list[key];
    el.style.position = "fixed";
    el.style.top = "0";
    el.style.left = "50%";
    el.style.transform = "translateX(-50%)";
    el.style.background = "#fffbe7";
    el.style.color = "#222";
    el.style.padding = "8px 16px";
    el.style.fontSize = "14px";
    el.style.borderBottom = "1px solid #ccc";
    el.style.zIndex = 1000;
    document.body.appendChild(el);
  }
})();