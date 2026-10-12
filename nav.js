
// ==========================================
// VELMORA - HEADER FUNCTIONALITY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const themeToggle = document.getElementById("themeToggle");
  const rtlToggle = document.getElementById("rtlToggle");

  // THEME: restore saved preference
  const savedTheme = localStorage.getItem("velmora-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  function updateThemeIcon() {
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.innerHTML = isDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';

    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  updateThemeIcon();

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "velmora-theme",
      document.body.classList.contains("dark-mode")
        ? "dark"
        : "light"
    );

    updateThemeIcon();
  });

  // RTL/LTR
  const savedDirection = localStorage.getItem("velmora-direction");

  if (savedDirection === "rtl") {
    document.documentElement.setAttribute("dir", "rtl");
  }

  rtlToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("dir");
    const next = current === "rtl" ? "ltr" : "rtl";

    document.documentElement.setAttribute("dir", next);
    localStorage.setItem("velmora-direction", next);
  });

  // MOBILE MENU
  function closeMenu() {
    mainNav.classList.remove("mobile-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("mobile-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // MOBILE DROPDOWNS
// ==========================================
// MOBILE & TABLET DROPDOWNS - FIXED
// ==========================================

document.querySelectorAll(".nav-dropdown").forEach(dropdown => {

 const link = dropdown.querySelector(".nav-link");
if (!link || !dropdown.querySelector(".dropdown-menu")) return;

  link.addEventListener("click", function(event) {

    if (window.innerWidth <= 1200) {

      event.preventDefault();

      const wasOpen = dropdown.classList.contains("dropdown-open");

      document.querySelectorAll(".nav-dropdown").forEach(item => {
        item.classList.remove("dropdown-open");
      });

      if (!wasOpen) {
        dropdown.classList.add("dropdown-open");
      }

    }

  });

});

  // ACTIVE PAGE HIGHLIGHT
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".main-nav .nav-link").forEach(link => {
    link.classList.remove("active");

    const targetPage = link.getAttribute("href").split("#")[0];

    if (targetPage === currentPage) {
      link.classList.add("active");
    }
  });

  // CLOSE MENU ON RESIZE
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
      closeMenu();

      document.querySelectorAll(".nav-dropdown").forEach(item => {
        item.classList.remove("dropdown-open");
      });
    }
  });

  // CLOSE MENU WITH ESCAPE
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});














// ==========================================
// VELMORA - MOBILE NAVIGATION LINK FIX
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  const mainNav = document.getElementById("mainNav");

  if (!mainNav) return;

  mainNav.querySelectorAll("a.nav-link").forEach(link => {

    // Skip dropdown toggle links
    if (link.closest(".nav-dropdown")) return;

    link.addEventListener("click", function () {

      if (window.innerWidth <= 1200) {

        const href = this.getAttribute("href");

        if (href && href !== "#") {
          window.location.assign(this.href);
        }

      }

    });

  });

});















// ==========================================
// VELMORA - FIX: DROPDOWN-WRAPPED LINKS WITHOUT SUBMENU
// (Products, Corporate Bulk Gifting, Custom Gifting)
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".main-nav .nav-dropdown").forEach(dropdown => {

    // Only handle dropdowns that have NO submenu
    if (dropdown.querySelector(".dropdown-menu")) return;

    const link = dropdown.querySelector(".nav-link");
    if (!link) return;

    link.addEventListener("click", function () {
      if (window.innerWidth <= 1200) {
        const href = link.getAttribute("href");

        if (href && href !== "#") {
          window.location.assign(link.href);
        }
      }
    });

  });

});



















// ==========================================
// VELMORA - FIX: ACTIVE LINK AFTER HOSTING
// Works with /about, /about.html, /about/ and sub-folder hosting
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  function normalize(path) {
    let p = (path || "").split("#")[0].split("?")[0];
    const endsWithSlash = p.endsWith("/");
    p = p.replace(/\/+$/, "").split("/").pop().toLowerCase();
    p = p.replace(/\.html?$/, "");
    return { name: p === "" ? "index" : p, endsWithSlash };
  }

  const current = normalize(window.location.pathname);
  const homePages = ["index", "home2"];   // both highlight "Home"
  const links = document.querySelectorAll(".main-nav .nav-link");
  let matched = false;

  links.forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const target = normalize(href).name;

    if (
      target === current.name ||
      (target === "index" && homePages.includes(current.name))
    ) {
      link.classList.add("active");
      matched = true;
    }
  });

  // Fallback: site hosted in a sub-folder (e.g. /velmora/) → treat as Home
  if (!matched && current.endsWithSlash) {
    const homeLink = document.querySelector('.main-nav .nav-link[href="index.html"]');
    if (homeLink) homeLink.classList.add("active");
  }
});