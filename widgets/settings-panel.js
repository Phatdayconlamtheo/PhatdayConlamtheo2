const panel = document.getElementById("settings-panel");
document.getElementById("toggle-settings").addEventListener("click", () => {
  panel.classList.toggle("hidden");
});
["weather", "news", "clock"].forEach(widget => {
  const checkbox = document.getElementById(`toggle-${widget}`);
  checkbox.addEventListener("change", () => {
    const el = document.getElementById(`${widget}-widget`);
    el.style.display = checkbox.checked ? "block" : "none";
  });
});
const darkSelect = document.getElementById("dark-mode-select");
function applyDarkModeSetting(mode) {
  if (mode === "dark") document.body.classList.add("dark-mode");
  else if (mode === "light") document.body.classList.remove("dark-mode");
  else {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;
    document.body.classList.toggle("dark-mode", isNight);
  }
}
darkSelect.addEventListener("change", () => {
  const mode = darkSelect.value;
  localStorage.setItem("dark-mode-setting", mode);
  applyDarkModeSetting(mode);
});
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("dark-mode-setting") || "auto";
  darkSelect.value = saved;
  applyDarkModeSetting(saved);
});