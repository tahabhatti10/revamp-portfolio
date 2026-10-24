# Portfolio Website (Muhammad Taha Abid)

A modern, high-fidelity portfolio website for **Muhammad Taha Abid** with interactive **tshootthatLM** AI assistant, built with clean Vanilla HTML5, CSS3, and JavaScript.

## Features

- **Design System & Typography**: Exact typography (`Google Sans Flex` and `Google Sans Code`), HSL color tokens, and responsive layout.
- **Theme Switcher**: Seamless Dark and Light mode toggling with memory persistence (`localStorage`/`sessionStorage`).
- **tshootthatLM Interactive AI Assistant Drawer**: Complete with pixel-art crowned avatar, prompt suggestion chips, live chat interaction engine, disclaimer tooltip, and chat reset.
- **Selected Work Section**: Responsive project grid with 16:9 aspect-ratio cards and hover effects.
- **Experience Timeline**: Career history with year, company link, and position.
- **Guides Page (`guides.html`)**: All 10 curated guides from the original website.
- **Mobile Responsive Drawer**: Smooth slide-over navigation menu on smaller screens.

---

## How to Run & Preview Locally

### Option 1: Direct File Opening (Zero Install)
You can directly open `index.html` or `guides.html` in your favorite web browser (Chrome, Edge, Firefox, Brave).

### Option 2: Local Web Server (Recommended)
Run the included PowerShell static server:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
This serves the portfolio on `http://localhost:3000` and automatically opens your browser.

---

## File Structure

```
d:\portfolio\
├── index.html            # Main portfolio page (Hero, Experience, Work, Footer)
├── guides.html           # Guides page ("What are you stuck on?")
├── serve.ps1             # Zero-dependency local web server
├── README.md             # Guide & documentation
├── styles/
│   ├── fonts.css         # Local woff2 font faces for Google Sans Flex & Code
│   ├── main.css          # Design system, layout, colors, and utility classes
│   └── interactions.css  # Drawer animations, chat bubbles, and transitions
├── scripts/
│   ├── icons.js          # Universal vector SVG icon injector
│   ├── theme.js          # Light / Dark mode switcher with persistence
│   ├── drawer.js         # Mobile navigation drawer handler
│   └── tahaalm.js        # tshootthatLM / TahaaLM AI chat assistant engine
├── icons/                # All original SVG icons
├── covers/               # Project cover images (e.g. imagineart-apps.png)
└── media/                # Exact woff2 font files
```

---

## How to Put In Your Own Information

When you are ready to personalize the site:

1. **Your Name & Tagline**:
   - In `index.html`, update the header title:
     ```html
     <span class="text-content-primary">Your Name</span>
     <span class="text-content-tertiary"> • Product Designer & Builder</span>
     ```
   - In the hero section (`<section aria-label="Introduction">`):
     ```html
     <h1 class="font-mono text-hero-sm text-content-primary md:text-hero-lg">
       I’m [Your Name], a designer who loves to build <em class="not-italic text-content-brand">products</em>.
     </h1>
     ```

2. **Your Experience Timeline**:
   - In `index.html` under `<section id="experience">`, edit or add your years, company names, URLs, and roles.

3. **Your Projects (Work Section)**:
   - In `index.html` under `<section id="work">`, replace the cover image in `covers/`, the project title, and the subtitle/year.

4. **Your Social Links & Resume**:
   - Update the footer navigation links for LinkedIn, Email, X (Twitter), and GitHub.
   - Update the Resume link in the header nav and mobile drawer.

5. **Customize AI Assistant (YourLM)**:
   - In `scripts/tahaalm.js`, customize the `KNOWLEDGE` object with your own background, projects, process, and answers!
