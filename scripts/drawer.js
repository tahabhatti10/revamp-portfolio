// Mobile Navigation Drawer
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggleBtn = document.getElementById("menu-toggle-btn");
    const menuCloseBtn = document.getElementById("menu-close-btn");
    const menuDrawer = document.getElementById("menu-drawer");
    const menuBackdrop = document.getElementById("menu-backdrop");

    if (!menuToggleBtn || !menuDrawer || !menuBackdrop) return;

    function openMenu() {
      menuDrawer.classList.add("drawer-open");
      menuDrawer.classList.remove("invisible", "translate-x-full");
      menuDrawer.removeAttribute("inert");
      menuBackdrop.classList.add("backdrop-open");
      menuToggleBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      menuDrawer.classList.remove("drawer-open");
      menuDrawer.classList.add("invisible", "translate-x-full");
      menuDrawer.setAttribute("inert", "");
      menuBackdrop.classList.remove("backdrop-open");
      menuToggleBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    menuToggleBtn.addEventListener("click", () => {
      const isOpen = menuDrawer.classList.contains("drawer-open");
      if (isOpen) closeMenu();
      else openMenu();
    });

    if (menuCloseBtn) {
      menuCloseBtn.addEventListener("click", closeMenu);
    }

    menuBackdrop.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuDrawer.classList.contains("drawer-open")) {
        closeMenu();
      }
    });
  });
})();
