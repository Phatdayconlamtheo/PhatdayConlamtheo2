// weather-widget.js
(function () {
  const weatherBox = document.createElement("div");
  weatherBox.id = "weather-widget";
  weatherBox.style.position = "fixed";
  weatherBox.style.top = "0";
  weatherBox.style.left = "0";
  weatherBox.style.right = "0";
  document.body.appendChild(weatherBox);

  weatherBox.innerHTML = `<span id="weather-info">Đang tải thông tin thời tiết...</span>`;

  async function getWeather(lat, lon) {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const data = await res.json();
    const weather = data.current_weather;
    const status =
      weather.weathercode === 0 ? "Trời quang" : "Thời tiết thay đổi";
    document.getElementById(
      "weather-info"
    ).innerText = `Thời tiết hiện tại: ${weather.temperature}°C - ${status}`;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => getWeather(pos.coords.latitude, pos.coords.longitude),
      () =>
        (document.getElementById("weather-info").innerText =
          "Không thể lấy vị trí thời tiết.")
    );
  } else {
    document.getElementById("weather-info").innerText =
      "Trình duyệt không hỗ trợ định vị.";
  }
})();
