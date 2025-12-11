# MEV — Minimal Efficient Verifiable Wiki

MEV (Multi Edit Vandalism) is a fully offline, browser-based personal wiki designed around three core principles: **Minimal**, **Efficient**, and **Verifiable**. It runs entirely in the browser without any backend or database, storing all content locally with optional encryption.

🧠 Ideal for personal knowledge management, writing, journaling, planning, and visualizing ideas — all while ensuring your data remains private and self-contained.

---

## 🚀 Features

- ✅ **Offline-First** — Runs with zero internet after first load.
- 🔐 **Optional Encryption** — AES-GCM local encryption with PIN/passphrase.
- 📦 **LocalStorage** — Stores all wiki data in your browser only.
- 📱 **Installable PWA** — Add to your home screen or desktop.
- 🗺️ **3D Wiki Map** — Explore your wiki visually via Three.js interface.
- 🎙️ **Voice Support** — Navigate and edit with voice input.
- 🧾 **Change Log View** — View and audit page history visually.
- 🧩 **Modular Pages** — Includes loaders, maps, logs, plays, and more.

---

## 🌐 Live Demo

You can try the hosted version here:  
👉 [https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)

> Once loaded, it works fully offline!

---

## 🛠 How to Use

1. **Download or clone this repo:**
   ```bash
   git clone https://github.com/jehovahsays/mev
   cd mev
   ```

2. **Open the app:**
   Open `index.html` in any modern browser. All features will work offline.

3. **Create & edit pages:**
   - Use the top bar to search or navigate.
   - Click to create new entries.
   - Format with simple markdown-style syntax.

4. **Optional: Install as a PWA**
   - Click “Install” or “Add to Home Screen” in your browser.
   - You can now launch MEV like a native app.

---

## 🔒 Encryption

- You can set a **PIN or passphrase** to encrypt your local wiki content.
- Uses AES-GCM and PBKDF2 for client-side encryption.
- Data never leaves your browser.

---

## 📁 File Overview

| File | Purpose |
|------|---------|
| `index.html` | Main application interface |
| `sw.js` | Service worker for offline access |
| `manifest.json` | Enables installable PWA |
| `map.html`, `map-loader.html`, `maps.html` | 3D visualization of wiki content |
| `find.html` | Advanced search interface |
| `log.html` | Page history / audit log viewer |
| `voice.html`, `voice.js` | Voice command interface |
| `plays.html`, `play.html` | Interactive view or walkthroughs |
| `README.md` | This documentation |
| `MOTIVATION.md` | Project philosophy |
| `CHANGELOG.md` | Version history |
| `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` | Governance and policies |

---

## 🧭 Navigation Links

These appear in the footer of `index.html`:

- 🧭 **3D Data Log** — `log.html`
- 🔎 **Find** — `find.html`
- 🎙️ **Voice** — `voice.html`
- 🌐 **Map Loader** — `map-loader.html`
- 🗺️ **Maps** — `maps.html`
- 🎮 **Plays** — `plays.html`

---

## 🤝 Contributing

We welcome contributions that align with MEV's principles. See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md) before submitting PRs.

---

## 📜 License

MIT License — use it freely, modify it, share it.