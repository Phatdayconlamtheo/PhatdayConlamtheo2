(function () {
  const positions = {
    "top-left": { top: "10px", left: "10px" },
    "top-right": { top: "36px", right: "0px" },
    "bottom-left": { bottom: "10px", left: "10px" },
    "bottom-right": { bottom: "10px", right: "10px" },
  };
  const applyPosition = (el, pos) => {
    el.style.top = el.style.bottom = el.style.left = el.style.right = "";
    Object.assign(el.style, positions[pos] || positions["top-right"]);
  };
  const weather = document.getElementById("weather-widget");
  const clock = document.getElementById("clock-widget");
  const select = document.createElement("select");
  select.innerHTML = `
    <option value="top-right">Trên phải</option>
    <option value="top-left">Trên trái</option>
    <option value="bottom-right">Dưới phải</option>
    <option value="bottom-left">Dưới trái</option>
  `;
  select.style.position = "absolute";
  select.style.top = "36px";
  select.style.left = "50%";
  select.style.transform = "translateX(-50%)";
  select.style.zIndex = "100";
  document.body.appendChild(select);
  select.addEventListener("change", () => {
    localStorage.setItem("widget-position", select.value);
    applyPosition(weather, select.value);
    applyPosition(clock, select.value);
  });
  const saved = localStorage.getItem("widget-position") || "top-right";
  select.value = saved;
  applyPosition(weather, saved);
  applyPosition(clock, saved);
})();
