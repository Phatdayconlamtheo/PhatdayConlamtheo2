(function () {
  const btn = document.createElement("button");
  btn.innerText = "📷 Chia sẻ niềm an lạc";
  btn.style.position = "absolute";
  btn.style.bottom = "10px";
  btn.style.right = "120px";
  btn.style.zIndex = 20;
  btn.style.padding = "8px 12px";
  btn.style.background = "#228";
  btn.style.color = "#fff";
  btn.style.borderRadius = "8px";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  document.body.appendChild(btn);

  btn.onclick = async () => {
    const html2canvasURL = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
    if (!window.html2canvas) {
      const script = document.createElement("script");
      script.src = html2canvasURL;
      script.onload = capture;
      document.body.appendChild(script);
    } else {
      capture();
    }

    function capture() {
      html2canvas(document.body).then(canvas => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "tam-an.png";
        a.click();
      });
    }
  };
})();