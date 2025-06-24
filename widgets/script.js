<script>
(function () {
  const hour = new Date().getHours();
  const isDark = (hour >= 18 || hour < 5);
  if (isDark) document.body.classList.add("dark-mode");
  else document.body.classList.remove("dark-mode");
})();
</script>
