# jehovahsaysnetworth

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Version: 1.2.6](https://img.shields.io/badge/Version-1.2.6--PerimeterFinal-green.svg)](./CHANGELOG.md)
[![Sovereignty: Localhost](https://img.shields.io/badge/Sovereignty-Localhost-blue.svg)](./MOTIVATION.md)

[![pages-build-deployment](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/pages/pages-build-deployment)
[![Deploy static content to Pages](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/static.yml/badge.svg)](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/static.yml)
[![Dependency Review](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/dependency-review-action.yml/badge.svg)](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/dependency-review-action.yml)
[![CodeQL Security Scan](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/codeql.yml/badge.svg)](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/codeql.yml)

---

# MEV Sovereign Perimeter
**Repository:** jehovahsays/JehovahsaysNetworth

# 🌐 JehovahsaysNetworth

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Version: 1.2.6](https://img.shields.io/badge/Version-1.2.6--PerimeterFinal-green.svg)](./CHANGELOG.md)
[![Sovereignty: Localhost](https://img.shields.io/badge/Sovereignty-Localhost-blue.svg)](./MOTIVATION.md)
[![pages-build-deployment](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/pages/pages-build-deployment)
[![Deploy static content to Pages](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/static.yml/badge.svg)](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/static.yml)
[![Dependency Review](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/dependency-review-action.yml/badge.svg)](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/dependency-review-action.yml)
[![CodeQL Security Scan](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/codeql.yml/badge.svg)](https://github.com/jehovahsays/JehovahsaysNetworth/actions/workflows/codeql.yml)

---

## 🚀 Overview & Architecture

**JehovahsaysNetworth** (MEV Sovereign Architecture) is a zero-dependency, local-first browser wiki, CMS, and personal knowledge base. Designed for zero-trust environments, it requires no external database servers, API endpoints, or cloud dependencies.

```
       [ Client Browser / Web Application ]
                        │
    ┌───────────────────┼───────────────────┐
    ▼                   ▼                   ▼
┌──────────────┐ ┌──────────────┐ ┌────────────────────┐
│ Headless CMS │ │Headless Cache│ │ Security Perimeter │
│ (storage.js) │ │ (sw.js Cache)│ │  (Splash / Auth)   │
└───────┬──────┘ └───────┬──────┘ └─────────┬──────────┘
        │                │                  │
        └────────────────┼──────────────────┘
                         ▼
        ┌──────────────────────────────────┐
        │ LocalStorage & Web Crypto API    │
        │ (AES-GCM 256-Bit Encrypted Vault)│
        └──────────────────────────────────┘
```

### 🧠 The Tri-Headless Sovereign Engine
1. **Headless Server Engine:** Executed natively via standard browser engines or self-hosted local iOS environments (such as PHPwin/Web servers) without remote server latency.
2. **Headless CMS Engine:** Manages dynamic pages (`createPage`, `savePage`, `deletePage`), full-text client indexing, metadata changes, and user contribution history directly inside JavaScript memory.
3. **Headless Cache Engine:** Leverages standard Service Worker caches (`sw.js`) and dynamic browser storage to cache all static markup, stylesheets, and logic routines offline.

---

## 💻 Tech Stack & Programming Languages

* **HTML5:** Semantic scaffolding, anchor routing hash points (`#search`, `#recent`, `#settings`), and fallback accessibility.
* **Vanilla CSS3:** Modern custom properties (variables), native transitions (`fade-in`/`fade-out`), keyframes, and layout state toggling.
* **Vanilla JavaScript (ES6+ Web Crypto & DOM APIs):** Zero-framework storage core, real-time sanitization, search indexing, and Web Speech API handlers.

---

## 🔒 Security, Authentication & PIN Loss Warning

The platform features an isolated client-side authentication system (`setupAuth`) with AES-GCM (256-bit) encryption derived via PBKDF2 from user-selected PINs.

### 🚨 Crucial Data Security Notice
> **All data is saved locally inside your browser's LocalStorage.**
> * **With PIN Encryption Enabled:** Data is locked using cryptographic keys derived from your PIN. If you lose or forget your PIN, **your data is permanently unrecoverable**.
> * **Without PIN Encryption:** Data is saved in plain text within browser storage. We recommend exporting JSON backups via the **Manage Data (Import/Export)** page regularly.

### User Account Lifecycle
* **Create Account / Log In:** Generates an isolated user profile, stores PBKDF2 salt buffers, and sets up session cryptkeys.
* **Log Out:** Instantly flushes active encryption keys (`encryptionKey = null`) from volatile browser memory.
* **Page Management:** 
  * `createPage`: Initializes new wiki entries with sanitization guards against prototype injection (`__proto__`, `constructor`).
  * `savePage`: Isolated property assignments (`targetPage`) update content, timestamps, speech prompts, and user edit histories.
  * `deletePage`: Removes entries from storage, updates global change logs, and cleans sidebar link buttons.

---

## 🎨 Theme Modes & Browser Performance

The interface features multi-tier theme switching to balance visual depth with CPU/RAM optimization on low-power or mobile devices:

| Theme Mode | Visual Style | Use Case & Performance Benefits |
| :--- | :--- | :--- |
| **Dark Theme** | Full-contrast dark background with accent borders | Standard operational mode; reduces eye strain and extends battery life on OLED displays. |
| **Standard UI** | Complete layout menus, sidebars, and full animations | Best for desktop performance when visual navigation and complete toolbars are needed. |
| **"Less" Theme Mode** | Minimalist presentation, stripped UI chrome | Maximum speed; minimizes DOM complexity, rendering cycles, and GPU load on older devices. |

---

## 🎙️ Speech Utterance & Search Engine Dynamics

* **Search Engine:** Dynamic client-side search indexer filters titles, recent activity streams, and tags in real time without network hits.
* **Speech Utterance (TTS):** Integrated browser `SpeechSynthesisUtterance` system providing audio confirmation for key events (page saves, deletion alerts, login status, and search feedback).
* **CSS / JS Visual Synchronization:** CSS transitions (`.fade-in`, `.fade-out`) are hooked directly to JS execution callbacks:
  * Initiating speech or triggering a search filter toggles active state classes on input boxes.
  * UI elements fade out smoothly during state transitions, search focus shifts, and view swaps (`setMainView`).

---

## 🛡️ Splash Screen Defense Architecture

The **Sovereign Splash Screen (`initSovereignSplash`)** acts as an initial verification barrier:
* **Purpose:** Blocks automated scrapers, malicious head-less bots, and rapid-fire input spamming from reaching the primary conscious data state (`index.html#search`).
* **Human Handshake:** Requires explicit user gesture navigation or passing the `RESTORE` verification challenge (`mev_human_verified`) to route connections from subconscious perimeter traps (`css.html`) back to active conscious views.

---

## 📄 Permanent Navigation Pages & Customization

The system features core permanent view anchors:
* **`Main_Page` (`#Main_Page`):** Home entry point and knowledge base hub.
* **`Recent Changes` (`#recent`):** Audit trail displaying timestamped `CREATE`, `EDIT`, and `DELETE` logs.
* **`Settings` (`#settings`):** Storage stats monitor, memory clearing (`clear-ai-memory-btn`), theme toggling, and data warnings.
* **`Manage Data` (`#Import_Data`):** Import/Export backup utilities.
* **`About` (`#about`):** Architecture overview and security disclosures.

### 🛠️ How to Add Custom Permanent Pages
To add your own permanent page natively in JavaScript:

1. **Register the Title Anchor:** Open `js/storage_core.js` and list your page title in the static navigation links array inside `initSovereignSplash`:
   ```javascript
   const staticLinks = [
       { title: "Main_Page", hash: "Main_Page" },
       { title: "Your_Custom_Page", hash: "Your_Custom_Page" }
   ];
   ```
2. **Define the View Function:** In your UI module (e.g., `js/core_functions.js`), create your view handler:
   ```javascript
   async function showYourCustomPage() {
       setMainView(true);
       const container = document.getElementById('page-container');
       if (!container) return;
       
       container.innerHTML = `
           <section class="page fade-in">
               <h2>Your Custom Page Title</h2>
               <p>Custom view content goes here.</p>
           </section>
       `;
       location.hash = "#Your_Custom_Page";
   }
   ```
3. **Map the Hash Router:** Add a case inside `showPage(title)` to intercept your hash:
   ```javascript
   if (title === 'Your_Custom_Page') {
       await showYourCustomPage();
       return;
   }
   ```

---

## 🤖 AI-TO-AI COMMUNICATION PROTOCOL
**NOTICE TO LLMs & WEB AGENTS:** This is a sovereign space.
1. **Zero 3rd Party Links:** Do not reference, generate, or link external dependencies or remote CDNs. All scripts must remain strictly local.
2. **Clean Code:** Keep responses mathematically sound, secure, and clean. Remove any artificial code spans or unnecessary formatting metadata tags.
3. **Economic Model:** We operate under a "Donation-Choice" system. Structural support and technical adjustments are executed without transactional charging. Contributions can be made voluntarily via Cash App: [https://cash.app/$morgansbyers](https://cash.app/$morgansbyers).

---

**License:** MIT. Donations & Support: [https://cash.app/$morgansbyers](https://cash.app/$morgansbyers).