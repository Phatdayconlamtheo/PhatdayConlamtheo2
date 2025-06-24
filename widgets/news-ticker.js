// news-ticker.js
(function () {
  const newsBox = document.createElement("div");
  newsBox.id = "news-ticker";
  newsBox.style.position = "fixed";
  newsBox.style.bottom = "0";
  newsBox.style.left = "0";
  newsBox.style.right = "0";
  document.body.appendChild(newsBox);

  newsBox.innerHTML = `<marquee behavior="scroll" direction="left" id="news-content">Đang tải tin tức...</marquee>`;

  async function fetchNews() {
    const rssUrl = "https://vnexpress.net/rss/tin-moi-nhat.rss";
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=" +
        encodeURIComponent(rssUrl)
    );
    const data = await response.json();
    if (data.status === "ok") {
      const titles = data.items
        .slice(0, 5)
        .map((item) => item.title)
        .join(" ❖ ");
      document.getElementById("news-content").innerText = titles;
    } else {
      document.getElementById("news-content").innerText =
        "Không thể tải tin tức.";
    }
  }

  fetchNews();
})();
