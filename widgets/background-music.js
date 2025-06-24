const music = document.getElementById("bg-music");
music.volume = 0.1;
const video = document.getElementById("my-video");
const observer = new MutationObserver(() => {
  if (!video.muted) music.pause();
  else if (document.getElementById("toggle-music").checked) music.play();
});
observer.observe(video, { attributes: true, attributeFilter: ["muted"] });
document.getElementById("toggle-music").addEventListener("change", function () {
  if (this.checked && video.muted) music.play();
  else music.pause();
});