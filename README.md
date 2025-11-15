# MEV Offline Wiki AI – v1.2.0-standalone

**MEV AI Wiki** is a fully offline, secure, self-contained encyclopedia designed for personal knowledge management. It runs entirely in your browser, requires no server, and stores all data locally using `localStorage`.  

This version (v1.2.0-standalone) merges all critical logic and assets into a single `index.html` file, making it portable, simple to host, and easy to maintain.

---

## 🧩 Features

- ✅ Fully **standalone HTML** (no external JS/CSS required)
- ✅ **Offline-first** with Service Worker support
- ✅ **Wiki-style markup** with support for:
  - `== Headings ==`
  - `'''Bold'''`, `''Italic''`
  - `* Bullet Lists`
  - `[[Internal Links]]`
- ✅ Semantic HTML and [schema.org](https://schema.org) annotations
- ✅ Account creation via localStorage (no passwords)
- ✅ Page creation, editing, and deletion
- ✅ Auto-generated "Formatting Help" page
- ✅ Sidebar with navigation, theme toggle, and AI input bar
- ✅ Dark mode support
- ✅ Offline/online status banner
- ✅ Secure client runtime with hardened JS restrictions

---

## 🧪 Experimental / In-Development

The following features are **available in the UI** but are still under **active development**:

### Chat (`chat.html`)
- Interactive chat interface
- Currently supports local input/output
- LLM integration not finalized
- Behavior may change or be disabled in future updates

### Stream (`stream.html`)
- Local video playback (non-live)
- Being tested for future **real-time streaming**
- May be replaced or expanded based on testing feedback

### Play (Under Construction)
- Planned for multimedia interactivity
- Currently unavailable

---

## 📦 Installation

To use the wiki:

1. Clone or download the repo.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
3. On first launch, you will be redirected to `installer.html` to configure:
   - Wiki name
   - Admin user
4. Once configured, it works fully offline.

### Optional: Local Hosting
To run it on a local web server:

```bash
python3 -m http.server

Then navigate to http://localhost:8000/

⸻

🧾 Project Structure

/
├── index.html          # 🔗 Main self-contained app
├── installer.html      # Installer for initial configuration
├── chat.html           # Experimental chat feature
├── stream/             # Streaming test files
│   ├── stream.html
│   ├── app.js
│   └── config.json
├── sw.js               # Service worker
├── manifest.json       # PWA manifest
├── main.css            # Optional legacy stylesheet
├── robots.txt          # Crawling rules
├── LICENSE
├── CHANGELOG.md
└── README.md


⸻

🚧 Development Notes
	•	All major logic and styling are embedded in index.html.
	•	Some legacy files (index.js, parser.js, semantic-editor.js) have been deprecated.
	•	The installer remains temporarily due to redirect dependencies.
	•	The app is privacy-first: no tracking, no servers, no telemetry.

⸻

🧠 Credits
	•	Developed by Morgan Shatee Byers
	•	Offline-first principles inspired by the IndieWeb and personal knowledge management tools
	•	Built with pure JavaScript, HTML, and CSS—no frameworks

⸻

## 💡 Why Offline?

- Works without internet access  
- Safer in sensitive or restricted environments  
- No data leaks — 100% stored in your browser  

---

## 📣 Community & Contributions

- 🗨️ Use [GitHub Discussions](https://github.com/jehovahsays/mev/discussions) for:
  - General announcements
  - Ideas & feedback
  - Q&A
  - Show and Tell
- 📥 Pull requests welcome! See [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines.  


📢 **Join the conversation:**  
👉 [📌 Release Discussion (Announcements)](https://github.com/jehovahsays/mev/discussions)

---

## 🚀 Deployment

This project is designed for [GitHub Pages](https://pages.github.com/):

- Push to the `main` branch  
- Enable GitHub Pages in your repository settings  
- Your offline AI Wiki is live!  

---

## ✅ License

This project is licensed under the [MIT License](LICENSE).
---

