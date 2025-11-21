# MEV Offline Wiki AI – v1.2.0-standalone

**MEV AI Wiki** is a fully offline, secure, self-contained encyclopedia designed for personal knowledge management. It runs entirely in your browser, requires no server, and stores all data locally using `localStorage`.

> 🧱 **Version 1.2.0-standalone** fully embeds all scripts and styles into `index.html` — no external files required!

---

## 🧩 Features

- ✅ **Single-file HTML** (portable, standalone `index.html`)
- ✅ **Offline-first** with integrated Service Worker
- ✅ **Wiki-style markup**:
  - `== Headings ==`
  - `'''Bold'''`, `''Italic''`
  - `* Bullet Lists`
  - `[[Internal Links]]`
- ✅ Semantic HTML + [schema.org](https://schema.org) microdata
- ✅ In-browser account creation (no passwords, no backend)
- ✅ Local page editing, creation, and deletion
- ✅ Auto-generated Formatting Help page
- ✅ Sidebar with AI search, theme toggle, and navigation
- ✅ Light and dark mode support
- ✅ Real-time offline/online detection banner
- ✅ Strong client-side security (blocked `eval`, `Function`, `setTimeout(string)`)

---

## 📦 How to Use

### Option 1: No Setup Required
1. Download or clone the repository.
2. Open `index.html` in any modern browser.
3. You're done — it works offline out of the box.

### Option 2: Local Hosting (for serving with a local server)
```bash
python3 -m http.server
# Visit http://localhost:8000

Icons and images are located in the root or /assets folders.

⸻

🚧 Developer Notes
	•	All logic and rendering are bundled into index.html.
	•	Previous modules (index.js, parser.js, etc.) are deprecated.
	•	manifest.json and sw.js support installability and offline caching.
	•	No telemetry, tracking, or analytics — privacy-first by design.

⸻

🧠 Credits
	•	Created by Morgan Shatee Byers
	•	Inspired by the IndieWeb and PKM community
	•	Built using plain HTML, CSS, and JavaScript

⸻

📣 Join the Community
	•	💬 GitHub Discussions￼
	•	📥 Pull requests welcome! See CONTRIBUTING.md￼

⸻

🚀 Deployment (GitHub Pages)
	•	Push index.html to your main branch
	•	Enable GitHub Pages
	•	Your MEV Offline Wiki AI is live and ready!

	✅ License

Licensed under the MIT License￼