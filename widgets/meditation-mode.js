(function () {
  const btn = document.createElement("button");
  btn.innerText = "🧘 Vào thiền 5 phút";
  btn.style.position = "absolute";
  btn.style.bottom = "80px";
  btn.style.left = "0px";
  btn.style.zIndex = 20;
  btn.style.padding = "8px 12px";
  btn.style.background = "#444";
  btn.style.color = "#fff";
  btn.style.borderRadius = "8px";
  btn.style.border = "none";
  btn.style.cursor = "pointer";

  btn.onclick = () => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0, 0, 0, 0.9)";
    overlay.style.zIndex = 9999;
    overlay.innerHTML =
      "<center style='margin-top:40vh; color:white; font-size:24px;'>🧘 Đang thiền định...</center>";
    document.body.appendChild(overlay);
    const video = document.getElementById("my-video");
    const music = document.getElementById("bg-music");
    if (video) video.pause();
    if (music) music.pause();
    const bell = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_9c8c6128d2.mp3"
    ); // chuông thiền
    bell.play();
    setTimeout(() => {
      document.body.removeChild(overlay);
      if (video) video.play();
      if (music && document.getElementById("toggle-music").checked)
        music.play();
    }, 300000); // 5 phút
  };
  document.body.appendChild(btn);
})();
