function updateClock() {
  const now = new Date();
  const el = document.getElementById("clock-widget");
  const time = now.toLocaleTimeString("vi-VN");
  const date = now.toLocaleDateString("vi-VN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  el.innerText = `🕒 ${time} – ${date}`;
}
setInterval(updateClock, 1000);
updateClock();