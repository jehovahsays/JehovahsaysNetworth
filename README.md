# MEV AI Wiki – Offline Encyclopedia (1.1.0-alpha1)

An offline-first, browser-powered personal wiki with AI search, editable pages, and no server dependencies.

## 🌐 Features

- 📄 Local editable wiki pages
- 🤖 AI-style search and page suggestion
- 🛡️ Secure by default (CSP, no network storage)
- 📶 Works offline (Service Worker)

## 🚀 Usage

1. Clone or download the repo
2. Open `index.html` in your browser
3. Create or edit wiki pages
4. Install as a PWA for full offline use

## 🔐 Security

- No server: all user data is in your browser
- CSP blocks inline scripts
- Auth is local-only using `localStorage`
- Works offline by default

/
├── index.html
├── main.js
├── wiki.js
├── auth.js
├── style.css
├── sw.js
├── manifest.json
├── test.html
├── README.md
├── SECURITY.md
├── CHANGELOG.md