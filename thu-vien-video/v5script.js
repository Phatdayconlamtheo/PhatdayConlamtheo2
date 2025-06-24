document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
  const video = wrapper.querySelector("video");
  const playBtn = wrapper.querySelector(".play");
  const volumeSlider = wrapper.querySelector(".volume");

  // Khi click nút Play/Pause
  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "⏸️";
    } else {
      video.pause();
      playBtn.textContent = "▶️";
    }
  });

  // Điều chỉnh âm lượng
  volumeSlider.addEventListener("input", () => {
    video.volume = volumeSlider.value;
    video.muted = false;
  });

  // Tự đổi nút khi video tự phát lại
  video.addEventListener("play", () => (playBtn.textContent = "⏸️"));
  video.addEventListener("pause", () => (playBtn.textContent = "▶️"));
});
