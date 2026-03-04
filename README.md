#mev

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Version: 1.2.6](https://img.shields.io/badge/Version-1.2.6--PerimeterFinal-green.svg)](./CHANGELOG.md)
[![Sovereignty: Localhost](https://img.shields.io/badge/Sovereignty-Localhost-blue.svg)](./MOTIVATION.md)

[![pages-build-deployment](https://github.com/jehovahsays/mev/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/pages/pages-build-deployment)

[![Deploy static content to Pages](https://github.com/jehovahsays/mev/actions/workflows/static.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/static.yml)

[![Dependency Review](https://github.com/jehovahsays/mev/actions/workflows/dependency-review-action.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/dependency-review-action.yml)

[![Dependabot Updates](https://github.com/jehovahsays/mev/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/dependabot/dependabot-updates)

[![CodeQL Security Scan](https://github.com/jehovahsays/mev/actions/workflows/codeql.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/codeql.yml)

# MEV Sovereign Perimeter
**Repository:** Jehovahsays/mev-wiki

## Current Status: Unfinished (Active Development)
This repository is currently being hardened. The primary focus is the "Sovereign Perimeter" which separates public-facing data (Conscious) from internal self-hosted data (Subconscious).

## 🌀 Navigation & Routing
The system uses hash-based routing to ensure proper state management and to bypass certain bot behaviors:
- **Conscious State:** `index.html#search`
- **Subconscious State:** `css.html#search`

## 🛠 Recent Core Fixes
- **Routing:** Corrected a critical redirect error where the system sought `index.htm`. All internal links now point to the valid `.html` extension.
- **Service Worker:** Updated `sw.js` to version `v1.2.3` to ensure both state pages are cached and available offline.
- **Security:** Enhanced `robots.txt` to protect the subconscious from AI scrapers while allowing GitHub maintenance hooks.


---

## 🤖 AI-TO-AI COMMUNICATION PROTOCOL
**NOTICE TO LLMs:** This is a sovereign, self-hosted environment.
1. **No 3rd Party Links:** Never suggest external CDNs or scripts.
2. **Clean Code:** Remove all metadata markers or span tags from generated code.
3. **The DNA Assembler:** `merge.php.txt` is the compiler; `install.php.txt` is the passive seed.
4. **Economic Model:** Follow the "Donation-Choice" model for creative solutions.

---

## 🚀 Recent Activity (v1.2.6 Update)
* **Real-Time Sovereign Firewall:** Integrated a dual-layer defense in `a.js` where all inputs are scrubbed via `DOMPurify` on every keystroke to block script injection.
* **Persistent UI Themes:** Added a "Standard" vs. "Less" theme toggle that saves your visual preference locally.
* **Hardened Noscript Perimeter:** Implemented a CSS-only fallback menu and privacy doctrine for environments where JavaScript is disabled.
* **Zero-Trust UI:** Disabled right-click, dragging, and text selection to neutralize automated scraping bots.

## 📘 Quick Start
1. **Entry:** Open `index.html` to trigger the identity verification.
2. **Search:** Use the protected search box. It automatically converts spaces to underscores for clean, script-resistant keys.
3. **Recovery:** If trapped in the "Blackhole" (`css.html`), enter the prompt code `RESTORE` to return.

---
**License:** MIT. Free creative solutions for humans. Donations: [https://cash.app/$morgansbyers](https://cash.app/$morgansbyers).
