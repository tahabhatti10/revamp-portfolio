// tshootthatLM / TahaaLM Interactive AI Assistant Drawer
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const triggerBtn = document.getElementById("tahaalm-trigger-btn");
    const drawer = document.getElementById("tahaalm-drawer");
    const backdrop = document.getElementById("tahaalm-backdrop");
    const closeBtn = document.getElementById("tahaalm-close-btn");
    const resetBtn = document.getElementById("tahaalm-reset-btn");
    const chatForm = document.getElementById("tahaalm-form");
    const chatInput = document.getElementById("tahaalm-input");
    const sendBtn = document.getElementById("tahaalm-send-btn");
    const suggestionsContainer = document.getElementById("tahaalm-suggestions");
    const introSection = document.getElementById("tahaalm-intro");
    const messagesContainer = document.getElementById("tahaalm-messages");

    if (!triggerBtn || !drawer || !backdrop) return;

    // AI Knowledge Base for Muhammad Taha Abid (Tahaa)
    const KNOWLEDGE = {
      "what are you working on now?":
        "Currently, I’m at Cricktop leading Product Design & Growth + Engineering, building high-throughput creator workflows and scalable digital systems. I'm also writing in-depth design engineering guides and exploring local AI agents.",
      "show me your best work":
        "A few highlights:\n\n• Cricktop: Product Design & Growth + Engineering (2026)\n• Cure & Co.: Brand Identity & Digital Presence (2026)\n• Parhlai: Product Design & Marketing lead (2025)\n• Norenztech: Product Design & Graphics Designer (2025)\n• Zellmont: Graphics & Brand Designer (2025)\n• Sxtudios: Founder & operations manager (2024)",
      "what's your design process":
        "My process centers on building fast, high-fidelity prototypes rather than static mockups. I work directly in code and Figma, identify edge cases early, maintain clean design token architectures, and validate with real usage metrics.",
      "how do you use ai in design":
        "I view AI as a force multiplier across three core layers:\n1. Exploration: rapidly generating concept directions and visual motifs.\n2. Production: automating repetitive token, variant, and CSS setup.\n3. Synthesis: extracting clear behavioral insights from user interviews and telemetry.",
    };

    function openChatLM() {
      if (typeof hideSelectionPopup === "function") hideSelectionPopup();
      drawer.classList.add("drawer-open");
      drawer.classList.remove("invisible", "translate-x-full");
      drawer.removeAttribute("inert");
      backdrop.classList.add("backdrop-open");
      document.body.style.overflow = "hidden";
      setTimeout(() => chatInput?.focus(), 250);
    }

    function closeChatLM() {
      drawer.classList.remove("drawer-open");
      drawer.classList.add("invisible", "translate-x-full");
      drawer.setAttribute("inert", "");
      backdrop.classList.remove("backdrop-open");
      document.body.style.overflow = "";
    }

    triggerBtn.addEventListener("click", openChatLM);
    if (closeBtn) closeBtn.addEventListener("click", closeChatLM);
    backdrop.addEventListener("click", closeChatLM);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("drawer-open")) {
        closeChatLM();
      }
    });

    // Auto resize textarea & toggle send button
    if (chatInput) {
      chatInput.addEventListener("input", () => {
        chatInput.style.height = "auto";
        chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + "px";
        const hasText = chatInput.value.trim().length > 0;
        if (sendBtn) {
          sendBtn.disabled = !hasText;
        }
      });

      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          if (chatInput.value.trim().length > 0) {
            handleSendMessage(chatInput.value.trim());
          }
        }
      });
    }

    if (chatForm) {
      chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (chatInput && chatInput.value.trim().length > 0) {
          handleSendMessage(chatInput.value.trim());
        }
      });
    }

    // Question Suggestion Chips
    const promptButtons = suggestionsContainer?.querySelectorAll("button");
    promptButtons?.forEach((btn) => {
      btn.addEventListener("click", () => {
        const questionText = btn.textContent.trim();
        handleSendMessage(questionText);
      });
    });

    // Reset Chat
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        messagesContainer.innerHTML = "";
        messagesContainer.classList.add("hidden");
        if (introSection) introSection.classList.remove("hidden");
        if (suggestionsContainer) suggestionsContainer.classList.remove("hidden");
        resetBtn.disabled = true;
        if (chatInput) {
          chatInput.value = "";
          chatInput.style.height = "auto";
        }
        if (sendBtn) sendBtn.disabled = true;
      });
    }

    function handleSendMessage(question) {
      if (!messagesContainer) return;

      // Hide intro and suggestions
      if (introSection) introSection.classList.add("hidden");
      if (suggestionsContainer) suggestionsContainer.classList.add("hidden");
      messagesContainer.classList.remove("hidden");
      if (resetBtn) resetBtn.disabled = false;

      // Append user bubble
      const userBubble = document.createElement("div");
      userBubble.className = "chat-bubble-user";
      userBubble.textContent = question;
      messagesContainer.appendChild(userBubble);

      // Clear input
      if (chatInput) {
        chatInput.value = "";
        chatInput.style.height = "auto";
      }
      if (sendBtn) sendBtn.disabled = true;

      // Append thinking bubble
      const thinkingBubble = document.createElement("div");
      thinkingBubble.className = "chat-bubble-ai";
      thinkingBubble.innerHTML = `
        <div class="chat-bubble-ai-content flex items-center gap-1.5 py-3">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      `;
      messagesContainer.appendChild(thinkingBubble);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      // Generate response
      setTimeout(() => {
        thinkingBubble.remove();

        const lowerQ = question.toLowerCase().trim();
        let answer = "";

        if (KNOWLEDGE[lowerQ]) {
          answer = KNOWLEDGE[lowerQ];
        } else if (lowerQ.includes("process") || lowerQ.includes("method")) {
          answer = KNOWLEDGE["what's your design process"];
        } else if (lowerQ.includes("ai") || lowerQ.includes("artificial intelligence")) {
          answer = KNOWLEDGE["how do you use ai in design"];
        } else if (lowerQ.includes("work") || lowerQ.includes("project") || lowerQ.includes("portfolio")) {
          answer = KNOWLEDGE["show me your best work"];
        } else if (lowerQ.includes("now") || lowerQ.includes("current") || lowerQ.includes("doing")) {
          answer = KNOWLEDGE["what are you working on now?"];
        } else if (lowerQ.includes("cure") || lowerQ.includes("nail")) {
          answer = "Cure & Co. (2026) is a bespoke nail tech & artistry studio brand. I worked on their brand identity and digital presence. Check them out on Instagram at https://www.instagram.com/cure.and.co!";
        } else if (lowerQ.includes("contact") || lowerQ.includes("email") || lowerQ.includes("reach")) {
          answer = "You can reach out via LinkedIn (https://www.linkedin.com/in/tshootthat/) or email directly at Tah.bhati302@gmail.com!";
        } else if (lowerQ.includes("resume") || lowerQ.includes("cv")) {
          answer = "You can review my full interactive resume at https://taha-resume.vercel.app/";
        } else {
          answer = `Thanks for asking! I’m Tahaa, a product designer and builder focusing on creating end-to-end digital experiences, design systems, and software. Feel free to explore my selected work or check out my guides on design careers and product building!`;
        }

        const aiBubble = document.createElement("div");
        aiBubble.className = "chat-bubble-ai";
        aiBubble.innerHTML = `
          <div class="chat-bubble-ai-content whitespace-pre-wrap">${answer}</div>
        `;
        messagesContainer.appendChild(aiBubble);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 550);
    }

    // Floating Selection "Ask TshootthatLM" Popup
    let activeSelectionText = "";
    const popup = document.createElement("button");
    popup.id = "tahaalm-selection-popup";
    popup.type = "button";
    popup.className = "selection-lm-popup";
    popup.setAttribute("aria-label", "Ask TshootthatLM");
    popup.innerHTML = `
      <span class="selection-lm-icon" aria-hidden="true">
        <svg width="13" height="13" viewBox="-1.3343 -1.3327 15.9992 15.9992" fill="none">
          <path d="M5.29032 9.00017C5.2308 8.76945 5.11054 8.5589 4.94206 8.39042C4.77358 8.22194 4.56303 8.10168 4.33232 8.04217L0.242317 6.9875C0.172537 6.96769 0.111123 6.92567 0.0673917 6.8678C0.0236606 6.80993 0 6.73937 0 6.66683C0 6.5943 0.0236606 6.52374 0.0673917 6.46587C0.111123 6.408 0.172537 6.36597 0.242317 6.34617L4.33232 5.29083C4.56295 5.23137 4.77344 5.11122 4.94192 4.94286C5.11039 4.7745 5.23069 4.56409 5.29032 4.3335L6.34498 0.2435C6.36459 0.173445 6.40657 0.111727 6.46453 0.0677625C6.52249 0.0237977 6.59324 0 6.66598 0C6.73873 0 6.80948 0.0237977 6.86744 0.0677625C6.92539 0.111727 6.96738 0.173445 6.98698 0.2435L8.04098 4.3335C8.1005 4.56421 8.22076 4.77476 8.38924 4.94324C8.55772 5.11173 8.76827 5.23198 8.99898 5.2915L13.089 6.3455C13.1593 6.3649 13.2213 6.40684 13.2655 6.46488C13.3097 6.52293 13.3337 6.59387 13.3337 6.66683C13.3337 6.73979 13.3097 6.81074 13.2655 6.86878C13.2213 6.92683 13.1593 6.96877 13.089 6.98817L8.99898 8.04217C8.76827 8.10168 8.55772 8.22194 8.38924 8.39042C8.22076 8.5589 8.1005 8.76945 8.04098 9.00017L6.98632 13.0902C6.96671 13.1602 6.92473 13.2219 6.86677 13.2659C6.80881 13.3099 6.73806 13.3337 6.66532 13.3337C6.59257 13.3337 6.52182 13.3099 6.46386 13.2659C6.40591 13.2219 6.36392 13.1602 6.34432 13.0902L5.29032 9.00017Z" fill="currentColor"/>
        </svg>
      </span>
      <span class="selection-lm-text">Ask TshootthatLM</span>
    `;
    document.body.appendChild(popup);

    function hideSelectionPopup() {
      popup.classList.remove("visible");
      activeSelectionText = "";
    }

    function updateSelectionPopup() {
      // Don't show if drawer is already open
      if (drawer.classList.contains("drawer-open")) {
        hideSelectionPopup();
        return;
      }

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        hideSelectionPopup();
        return;
      }

      const text = selection.toString().trim();
      if (!text || text.length < 2) {
        hideSelectionPopup();
        return;
      }

      // Check if selection is inside drawer or input/textarea
      const anchorNode = selection.anchorNode;
      const focusNode = selection.focusNode;
      if (
        (anchorNode && drawer.contains(anchorNode)) ||
        (focusNode && drawer.contains(focusNode)) ||
        (anchorNode && anchorNode.parentElement?.closest("input, textarea, [contenteditable='true']")) ||
        (focusNode && focusNode.parentElement?.closest("input, textarea, [contenteditable='true']"))
      ) {
        hideSelectionPopup();
        return;
      }

      if (selection.rangeCount === 0) {
        hideSelectionPopup();
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        hideSelectionPopup();
        return;
      }

      activeSelectionText = text;

      const popupWidth = popup.offsetWidth || 165;
      const popupHeight = popup.offsetHeight || 34;

      let top = rect.top + window.scrollY - popupHeight - 8;
      if (rect.top < popupHeight + 12) {
        top = rect.bottom + window.scrollY + 8;
      }

      // Place floating above the right side of the selection (as shown in design)
      let left = rect.right + window.scrollX - popupWidth;
      const minLeft = window.scrollX + 12;
      const maxLeft = window.scrollX + window.innerWidth - popupWidth - 12;
      left = Math.max(minLeft, Math.min(left, maxLeft));

      popup.style.top = `${top}px`;
      popup.style.left = `${left}px`;
      popup.classList.add("visible");
    }

    // Prevent clearing selection when user clicks on popup
    popup.addEventListener("mousedown", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    popup.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!activeSelectionText) return;

      const selectedQuery = activeSelectionText;
      hideSelectionPopup();
      openChatLM();

      if (chatInput) {
        chatInput.value = selectedQuery;
        chatInput.style.height = "auto";
        chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + "px";
        if (sendBtn) sendBtn.disabled = false;
        setTimeout(() => {
          chatInput.focus();
          chatInput.setSelectionRange(chatInput.value.length, chatInput.value.length);
        }, 260);
      }

      window.getSelection()?.removeAllRanges();
    });

    document.addEventListener("mouseup", (e) => {
      if (popup.contains(e.target)) return;
      setTimeout(updateSelectionPopup, 20);
    });

    document.addEventListener("keyup", (e) => {
      if (["Shift", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        setTimeout(updateSelectionPopup, 20);
      }
    });

    document.addEventListener("mousedown", (e) => {
      if (!popup.contains(e.target)) {
        hideSelectionPopup();
      }
    });

    window.addEventListener("resize", hideSelectionPopup);
  });
})();
