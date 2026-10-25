// Theme Switcher Engine (Light / Dark Mode)
(function () {
  const THEME_KEY = "tahaa_portfolio_mode";

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY) || sessionStorage.getItem("mode");
    if (saved) return saved;
    return "light";
  }

  function applyTheme(mode) {
    document.documentElement.dataset.mode = mode;
    document.documentElement.setAttribute("data-theme", "tahaa");
    localStorage.setItem(THEME_KEY, mode);
    try { sessionStorage.setItem("mode", mode); } catch (e) {}

    // Update all theme toggle buttons
    if (window.TahaaIcons && window.TahaaIcons.updateThemeIcon) {
      window.TahaaIcons.updateThemeIcon(mode);
    }
    const themeButtons = document.querySelectorAll(".theme-toggle-btn");
    themeButtons.forEach((btn) => {
      const icon = btn.querySelector("[data-slot=icon]");
      if (mode === "dark") {
        btn.setAttribute("aria-label", "Switch to light mode");
        if (icon && !icon.querySelector("svg")) {
          icon.style.maskImage = "url(icons/sun.svg)";
          icon.style.webkitMaskImage = "url(icons/sun.svg)";
        }
      } else {
        btn.setAttribute("aria-label", "Switch to dark mode");
        if (icon && !icon.querySelector("svg")) {
          icon.style.maskImage = "url(icons/moon.svg)";
          icon.style.webkitMaskImage = "url(icons/moon.svg)";
        }
      }
    });
  }

  // Initialize immediately
  const initialMode = getPreferredTheme();
  applyTheme(initialMode);

  window.toggleTheme = function () {
    const currentMode = document.documentElement.dataset.mode === "dark" ? "dark" : "light";
    const nextMode = currentMode === "dark" ? "light" : "dark";
    applyTheme(nextMode);
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(document.documentElement.dataset.mode || initialMode);

    const themeButtons = document.querySelectorAll(".theme-toggle-btn");
    themeButtons.forEach((btn) => {
      btn.addEventListener("click", window.toggleTheme);
    });
  });
})();
