# MEV Offline Wiki AI

![Website](https://img.shields.io/website?url=https%3A%2F%2Fjehovahsays.github.io%2Fmev%2F)
![Last Commit](https://img.shields.io/github/last-commit/jehovahsays/mev)
![Repo Size](https://img.shields.io/github/repo-size/jehovahsays/mev)
![License](https://img.shields.io/github/license/jehovahsays/mev)

# MEV Offline Wiki AI

## 📘 What is MEV

**[span_0](start_span)MEV** is a fully offline, self-contained wiki / personal knowledge-management (PKM) tool that runs entirely in the browser — no server, no database, no external dependencies[span_0](end_span).  
[span_1](start_span)It is designed around an **“offline-first, self-defending”** philosophy[span_1](end_span).

[span_2](start_span)This makes MEV ideal for users who want privacy, portability, and resilience[span_2](end_span).

---

## 🚀 Why Use MEV

- **[span_3](start_span)Offline‑first & Portable** — Once loaded, the application works completely offline, making it portable across devices[span_3](end_span).
- **Encrypted Storage** — Optional PIN-based encryption using Web Crypto API (AES-GCM) ensures your data remains private even in local storage.
- **[span_4](start_span)Progressive Web App (PWA)** — Installable on desktop and mobile (iOS/Android) for a seamless, app-like experience[span_4](end_span).
- **[span_5](start_span)Secure and minimal** — No CDNs, no trackers, no third-party scripts[span_5](end_span).
- **[span_6](start_span)Simple Deployment** — Just static files, easy to host anywhere (including your local PHP server via PHPwin)[span_6](end_span).

---

## 🏗️ Architecture & Security Posture

### Multi-File PWA Architecture

- [span_7](start_span)The application is a Progressive Web App (PWA) distributed as static files (`index.html`, `assets/js/sw.js`, `manifest.json`, `css.html`)[span_7](end_span).
- [span_8](start_span)The **Service Worker (`assets/js/sw.js`)** pre-caches all critical assets, guaranteeing instant loading even when offline[span_8](end_span).
- [span_9](start_span)No dependencies, no build step required[span_9](end_span).

### Storage Model: `localStorage` with Encryption

- [span_10](start_span)Stores content entirely in the browser's local storage[span_10](end_span).
- **Client-Side Encryption:** If a PIN is set, data is encrypted using PBKDF2 key derivation and AES-GCM before saving.
- **[span_11](start_span)No data leaves the client**[span_11](end_span).
- [span_12](start_span)Works offline by design[span_12](end_span).
- *[span_13](start_span)Note: Data may be lost if browser storage is explicitly cleared by the user.*[span_13](end_span)

### Security Hardened

- **Strict Content Security Policy (CSP):** Styles and scripts are loaded from local assets only; inline execution is minimized.
- [span_14](start_span)No dynamic JS injection (e.g. `eval` is blocked)[span_14](end_span).
- [span_15](start_span)No external code is loaded[span_15](end_span).

---

## 🧩 Project Structure

- [span_16](start_span)`index.html` — The core wiki application[span_16](end_span).
- [span_17](start_span)`css.html` — The CSS-only fallback/anchor page[span_17](end_span).
- `404.html` — Offline fallback page.
- [span_18](start_span)`manifest.json` — Essential file for PWA installation[span_18](end_span).
- `assets/`
    - `css/index.css` — Main stylesheet.
    - `js/app.js` — Core application logic and crypto functions.
    - `js/sw.js` — Service Worker for offline caching.
    - [span_19](start_span)`icons/` — Directory containing the required PWA icons[span_19](end_span).
- [span_20](start_span)`bin/index.bat` — CLI launcher for Windows users to manage settings via URL parameters[span_20](end_span).
- [span_21](start_span)`.nojekyll` — Disables GitHub Jekyll processing[span_21](end_span).
- [span_22](start_span)`CHANGELOG.md`, `CONTRIBUTING.md`, `LICENSE`, `SECURITY.md`, `MOTIVATION.md` — Metadata and documentation[span_22](end_span).

---

## 🛠️ Getting Started

### Option A: Use Locally

1. [span_23](start_span)Download or clone the repo[span_23](end_span).
2. [span_24](start_span)Open `index.html` in your browser[span_24](end_span).
3. [span_25](start_span)Start editing and writing — content is auto-saved[span_25](end_span).
4. **[span_26](start_span)Windows Users:** Run `bin/index.bat` to quickly launch the wiki or update settings via the command line interface[span_26](end_span).

### Option B: Host Online (e.g. GitHub Pages)

1. [span_27](start_span)Push the files to your GitHub repository[span_27](end_span).
2. [span_28](start_span)Enable GitHub Pages in repo settings[span_28](end_span).
3. [span_29](start_span)Access via: [https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)[span_29](end_span)

### Option C: Install as a PWA

1. [span_30](start_span)Visit the URL on a compatible device (like your iPhone)[span_30](end_span).
2. [span_31](start_span)Use the browser's "Install App" or "Add to Home Screen" feature[span_31](end_span).
3. [span_32](start_span)The app will be available on your home screen, runnable offline[span_32](end_span).

---

## 🎯 Who Is This For

- [span_33](start_span)Developers and users needing a highly secure, simple offline wiki[span_33](end_span).
- [span_34](start_span)Those who prioritize privacy and resilience over cloud-based storage[span_34](end_span).
- [span_35](start_span)Anyone wanting a fully operational, installable PWA knowledge system[span_35](end_span).

---

## 🔎 Live Demo

Try the live demo:  
[https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)  
- [span_36](start_span)Fully functional with or without JavaScript[span_36](end_span).

---

## 🤝 Contributing

1. [span_37](start_span)Fork the repo[span_37](end_span)
2. [span_38](start_span)Make a branch and your changes[span_38](end_span)
3. [span_39](start_span)Submit a pull request[span_39](end_span)

[span_40](start_span)See: [`CONTRIBUTING.md`](CONTRIBUTING.md)[span_40](end_span)

---

## 📃 License

[span_41](start_span)Licensed under the MIT License — see [`LICENSE`](LICENSE)[span_41](end_span)

---

## 🧠 Project Philosophy

[span_42](start_span)MEV stands for minimal, efficient, verifiable[span_42](end_span). It aims to be:

- [span_43](start_span)Easy to understand and modify[span_43](end_span)
- [span_44](start_span)Resistant to interference (no servers)[span_44](end_span)
- [span_45](start_span)Private by design[span_45](end_span)
- [span_46](start_span)Compatible with low-resource environments[span_46](end_span)

---

_Last updated: 2025-12-02_
