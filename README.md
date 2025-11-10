# MEV Offline Wiki AI 📚🧠  
**An offline-first, privacy-respecting AI-powered wiki platform built for the browser.**

## 🌐 Features

- 🧠 Local AI Search and Suggestion Engine
- 💾 Offline-first with Service Worker caching
- 🔐 No server, no tracking, no analytics
- 🧑‍💻 Fully browser-based editing and account management
- 🔧 Backup/Import/Export wiki content as `.json`
- 🌗 Dark/Light mode toggle
- 📦 Visual storage usage bar
- ⚠️ Hardened security layer against common browser attacks

## 📁 Structure

- `index.html` – Main webpage interface
- `index.js` – Full application logic (authentication, page editor, AI, security)
- `index.css` – Styles for layout and dark/light modes
- `sw.js` – Service Worker for offline support
- `manifest.json` – PWA metadata
- `.nojekyll` – Prevents GitHub Pages from ignoring `_` folders

## 🛠️ How to Use

1. **Clone or fork** this repository.
2. **Open `index.html`** in a browser (or serve locally).
3. **Create a username** to start editing pages.
4. All changes are stored in `localStorage` — nothing is sent to any server.

## 💡 Why Offline?

- Works without internet access
- Safer in sensitive or restricted environments
- No data leaks — 100% stored in your browser

## 🚀 Deployment

This project is designed for [GitHub Pages](https://pages.github.com/). Just push your changes to the `main` branch and enable GitHub Pages in your repo settings.

## ✅ License

[MIT License](LICENSE)