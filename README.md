# MEV Offline Wiki AI

![Website](https://img.shields.io/website?url=https%3A%2F%2Fjehovahsays.github.io%2Fmev%2F)
![Last Commit](https://img.shields.io/github/last-commit/jehovahsays/mev)
![Repo Size](https://img.shields.io/github/repo-size/jehovahsays/mev)
![License](https://img.shields.io/github/license/jehovahsays/mev)

# MEV Offline Wiki AI

## 📘 What is MEV

**MEV** is a fully offline, self-contained wiki / personal knowledge-management (PKM) tool that runs entirely in the browser — no server, no database, no external dependencies.  
It is designed around an **“offline-first, self-defending”** philosophy.

This makes MEV ideal for users who want privacy, portability, and resilience.

---

## 🚀 Why Use MEV

- **Offline‑first & portable** — once loaded, works with no internet.
- **Simple deployment** — just static files, easy to host anywhere.
- **Secure and minimal** — no CDNs, no trackers, no third-party scripts.
- **Ideal for personal wikis** — notes, journaling, docs, etc.

---

## 🏗️ Architecture & Security Posture

### Single-File Deployment

- All code is in `index.html`, with optional `sw.js` for PWA support.
- No dependencies, no build step required.

### Storage Model: `localStorage`

- Stores content in browser's local storage.
- No data leaves the client.
- Works offline by design.
- Data may be lost if storage is cleared.

### Security Hardened

- Strong Content Security Policy (CSP).
- No dynamic JS injection (e.g. `eval` is blocked).
- No external code is loaded.

---

## 🧩 Project Structure

- `index.html` — the wiki app
- `sw.js`, `manifest.json` — for optional PWA support
- `.nojekyll` — disables GitHub Jekyll processing
- `CHANGELOG.md`, `CONTRIBUTING.md`, `LICENSE`, `SECURITY.md`, `MOTIVATION.md` — metadata and docs

---

## 🛠️ Getting Started

### Option A: Use Locally

1. Download or clone the repo.
2. Open `index.html` in your browser.
3. Start editing and writing — content is auto-saved.

### Option B: Host Online (e.g. GitHub Pages)

1. Push to GitHub.
2. Enable GitHub Pages in repo settings.
3. Access via: [https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)

---

## 🎯 Who Is This For

- Webmasters and devs needing a simple offline wiki
- Designers who want minimal tools for documentation
- Anyone wanting a privacy-first PKM system

---

## 🔎 Live Demo

Try the live demo:  
[https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)  
- Fully functional with or without JavaScript

---

## 🤝 Contributing

1. Fork the repo
2. Make a branch and your changes
3. Submit a pull request

See: [`CONTRIBUTING.md`](CONTRIBUTING.md)

---

## 📃 License

Licensed under the MIT License — see [`LICENSE`](LICENSE)

---

## 🧠 Project Philosophy

MEV stands for minimal, efficient, verifiable. It aims to be:

- Easy to understand and modify
- Resistant to interference (no servers)
- Private by design
- Compatible with low-resource environments

---

_Last updated: 2025-11-29_