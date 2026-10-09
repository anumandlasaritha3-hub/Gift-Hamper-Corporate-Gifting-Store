
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
  document.querySelectorAll(".nav-dropdown").forEach(dropdown => {
    const link = dropdown.querySelector(".nav-link");

    link.addEventListener("click", event => {
      if (window.innerWidth <= 1100) {
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

// HOME DROPDOWN - MOBILE & TABLET
const homeDropdown = document.querySelector(".home-dropdown");
const homeLink = homeDropdown?.querySelector(".nav-link");

if (homeDropdown && homeLink) {
  homeLink.addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault();
      homeDropdown.classList.toggle("dropdown-open");
    }
  });
}
