// Shop Now - sync dark mode with the rest of the site
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const btn = document.getElementById("shopThemeToggle");
  if (!btn) return;

  // Match the theme saved by the other pages (nav.js uses "velmora-theme")
  const wantDark = localStorage.getItem("velmora-theme") === "dark";
  const isDark = html.dataset.theme === "dark";
  if (wantDark !== isDark) btn.click();

  // Save every toggle to the shared key
  btn.addEventListener("click", () => {
    localStorage.setItem(
      "velmora-theme",
      html.dataset.theme === "dark" ? "dark" : "light"
    );
  });
});
