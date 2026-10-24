// Vector SVG Icon Provider for Universal Browser & Local File Compatibility
(function () {
  const ICONS = {
    moon: `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`,
    sun: `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    sparkle: `<svg class="size-full" viewBox="-1.3343 -1.3327 15.9992 15.9992" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.29032 9.00017C5.2308 8.76945 5.11054 8.5589 4.94206 8.39042C4.77358 8.22194 4.56303 8.10168 4.33232 8.04217L0.242317 6.9875C0.172537 6.96769 0.111123 6.92567 0.0673917 6.8678C0.0236606 6.80993 0 6.73937 0 6.66683C0 6.5943 0.0236606 6.52374 0.0673917 6.46587C0.111123 6.408 0.172537 6.36597 0.242317 6.34617L4.33232 5.29083C4.56295 5.23137 4.77344 5.11122 4.94192 4.94286C5.11039 4.7745 5.23069 4.56409 5.29032 4.3335L6.34498 0.2435C6.36459 0.173445 6.40657 0.111727 6.46453 0.0677625C6.52249 0.0237977 6.59324 0 6.66598 0C6.73873 0 6.80948 0.0237977 6.86744 0.0677625C6.92539 0.111727 6.96738 0.173445 6.98698 0.2435L8.04098 4.3335C8.1005 4.56421 8.22076 4.77476 8.38924 4.94324C8.55772 5.11173 8.76827 5.23198 8.99898 5.2915L13.089 6.3455C13.1593 6.3649 13.2213 6.40684 13.2655 6.46488C13.3097 6.52293 13.3337 6.59387 13.3337 6.66683C13.3337 6.73979 13.3097 6.81074 13.2655 6.86878C13.2213 6.92683 13.1593 6.96877 13.089 6.98817L8.99898 8.04217C8.76827 8.10168 8.55772 8.22194 8.38924 8.39042C8.22076 8.5589 8.1005 8.76945 8.04098 9.00017L6.98632 13.0902C6.96671 13.1602 6.92473 13.2219 6.86677 13.2659C6.80881 13.3099 6.73806 13.3337 6.66532 13.3337C6.59257 13.3337 6.52182 13.3099 6.46386 13.2659C6.40591 13.2219 6.36392 13.1602 6.34432 13.0902L5.29032 9.00017Z" fill="currentColor"/></svg>`,
    'panel-open': `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m10 15-3-3 3-3"/></svg>`,
    'arrow-up-right': `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`,
    'arrow-up': `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>`,
    'arrow-down': `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
    'refresh-cw': `<svg class="size-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.516 3.00947 16.931 3.99122 18.74 5.74L21 8M16 8H21V3M21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.48395 20.9905 7.06897 20.0088 5.26 18.26L3 16M3 21V16H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    close: `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    'info-12': `<svg class="size-full" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 5.5v3.5M6 3.5v.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    shell: `<svg class="size-full" viewBox="-2.099 -3.0618 25.198 25.325" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 8.59758C12.5 9.12802 12.2893 9.63672 11.9142 10.0118C11.5392 10.3869 11.0304 10.5976 10.5 10.5976C9.96958 10.5976 9.46087 10.3869 9.0858 10.0118C8.71073 9.63672 8.50001 9.12802 8.50001 8.59758C8.50001 7.53672 8.92144 6.5193 9.67159 5.76916C10.4217 5.01901 11.4391 4.59758 12.5 4.59758C13.5609 4.59758 14.5783 5.01901 15.3284 5.76916C16.0786 6.5193 16.5 7.53672 16.5 8.59758C16.5 10.1889 15.8679 11.715 14.7427 12.8402C13.6174 13.9654 12.0913 14.5976 10.5 14.5976C8.90871 14.5976 7.38259 13.9654 6.25737 12.8402C5.13215 11.715 4.50001 10.1889 4.50001 8.59758C4.50001 6.47585 5.34287 4.44102 6.84316 2.94073C8.34345 1.44044 10.3783 0.597583 12.5 0.597583C14.6217 0.597583 16.6566 1.44044 18.1569 2.94073C19.6572 4.44102 20.5 6.47585 20.5 8.59758C20.5 11.2497 19.4464 13.7933 17.5711 15.6687C15.6957 17.544 13.1522 18.5976 10.5 18.5976C7.84785 18.5976 5.30431 17.544 3.42894 15.6687C1.55358 13.7933 0.500012 11.2497 0.500012 8.59758C0.496325 5.99118 1.34631 3.45528 2.92001 1.37758C3.07324 1.15161 3.27111 0.959393 3.50144 0.812787C3.73177 0.666181 3.98967 0.568288 4.25927 0.525137C4.52887 0.481986 4.80444 0.494491 5.06902 0.561883C5.3336 0.629275 5.58158 0.750125 5.79769 0.916989C6.01379 1.08385 6.19344 1.2932 6.32557 1.53213C6.4577 1.77105 6.5395 2.0345 6.56595 2.30625C6.5924 2.57799 6.56293 2.85227 6.47936 3.1122C6.39579 3.37212 6.25988 3.61218 6.08001 3.81758" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    linkedin: `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>`,
    twitter: `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    github: `<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`
  };

  window.TahaaIcons = {
    get: (name) => ICONS[name] || "",
    injectAll: function () {
      const iconSlots = document.querySelectorAll("[data-slot=icon]");
      iconSlots.forEach((slot) => {
        // Determine icon name from style mask-image or data-icon attribute
        let iconName = slot.getAttribute("data-icon");
        if (!iconName) {
          const style = slot.getAttribute("style") || "";
          const match = style.match(/icons\/([a-zA-Z0-9_-]+)\.svg/);
          if (match && match[1]) {
            iconName = match[1];
          }
        }
        if (iconName && ICONS[iconName]) {
          slot.innerHTML = ICONS[iconName];
          slot.style.maskImage = "none";
          slot.style.webkitMaskImage = "none";
          slot.style.backgroundColor = "transparent";
          slot.setAttribute("data-icon", iconName);
        }
      });
    },
    updateThemeIcon: function (mode) {
      const themeButtons = document.querySelectorAll(".theme-toggle-btn");
      themeButtons.forEach((btn) => {
        const slot = btn.querySelector("[data-slot=icon]");
        if (slot) {
          const iconName = mode === "dark" ? "sun" : "moon";
          slot.setAttribute("data-icon", iconName);
          slot.innerHTML = ICONS[iconName];
          slot.style.maskImage = "none";
          slot.style.webkitMaskImage = "none";
          slot.style.backgroundColor = "transparent";
        }
      });
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.TahaaIcons.injectAll();
  });
})();
