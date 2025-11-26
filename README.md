
![Website](https://img.shields.io/website?url=https%3A%2F%2Fjehovahsays.github.io%2Fmev%2F)
![Last Commit](https://img.shields.io/github/last-commit/jehovahsays/mev)
![Repo Size](https://img.shields.io/github/repo-size/jehovahsays/mev)
![License](https://img.shields.io/github/license/jehovahsays/mev)

---
# MEV Offline Wiki AI – v1.2.0-standalone

**MEV AI Wiki** is a fully offline, secure, self-contained encyclopedia designed for personal knowledge management. It runs entirely in your browser, requires no server, and stores all data locally using `localStorage`.

> 🧱 **Version 1.2.0-standalone** fully embeds all scripts and styles into `index.html` — no external files required!

---

## 🧩 Features

- ✅ **Single-file HTML** (`index.html` is fully standalone)
- ✅ **Offline-first PWA** with Service Worker & `manifest.json`
- ✅ **Wiki-style markup**:
  - `== Headings ==`
  - `'''Bold'''`, `''Italic''`
  - `* Bullet Lists`, `[[Internal Links]]`
- ✅ **Semantic HTML + schema.org microdata**
- ✅ **Voice + AI Search UI**
- ✅ **JS & No-JS graceful fallbacks**
- ✅ **Light and dark mode**
- ✅ **Client-side account creation (no passwords, no backend)**
- ✅ **Local page editing, creation, and deletion**
- ✅ **Formatting Help, Settings, and Profile UI**
- ✅ **Sidebar with navigation and voice filters**
- ✅ **Offline/online detection with banner UI**

---

## 🔐 Security Model

This app uses a strict client-side security model:

- `eval`, `Function`, and `setTimeout(string)` are **blocked**
- `<meta http-equiv>` headers set:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: no-referrer`
  - `Permissions-Policy: microphone=(), camera=(), geolocation=()`
- Context menu, text selection, and drag-start events are disabled
- Scripts and styles are **inlined** — no external requests

---

## ⚙️ How to Use

### Option 1: No Setup Required (recommended)

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. You're done — it works 100% offline

### Option 2: Local Server (for testing as PWA)

```bash
python3 -m http.server
# Visit http://localhost:8000

To test installability and Service Worker caching, serve over http://localhost or deploy to GitHub Pages.

⸻

📡 Online/Offline Behavior
	•	When online, fetches fall back to the network
	•	When offline, the app loads from Service Worker cache
	•	If any non-cached file is requested offline, /index.html is returned as fallback
	•	Displays a banner when offline

⸻

💡 Graceful Degradation

This site works with and without JavaScript:

Feature
JS Required
Fallback Behavior
Search + AI input
✅ Yes
No voice/text input
Wiki editing
✅ Yes
View-only
Theme toggle
✅ Yes
Light mode default
Offline fallback
✅ Yes (SW)
Browser-level fallback


⸻

📦 Service Worker

See sw.js￼ for caching behavior:
	•	Versioned cache: mev-wiki-v8
	•	Files cached: /index.html, /, /sw.js
	•	Reclaims old caches on activation
	•	Fallback to /index.html for offline

⸻

🤖 Robots.txt

The app ships with a hardened robots.txt:

User-agent: *
Disallow: /#*
Disallow: /?*
Disallow: /recent
Disallow: /settings
Disallow: /profile
Disallow: /edit
Allow: /

Only allows indexing of homepage (/). Blocks all dynamic routes, querystrings, and user-generated pages ￼ ￼.

⸻

🧠 Credits
	•	Created by Morgan Shatee Byers
	•	Inspired by the IndieWeb and PKM community
	•	Built using plain HTML, CSS, and JavaScript

⸻

📣 Community & Contribution
	•	💬 Join GitHub Discussions
	•	📥 Pull requests welcome! See CONTRIBUTING.md

⸻

🚀 GitHub Pages Deployment

To publish:
	1.	Push index.html to your repo’s main branch
	2.	Enable GitHub Pages in settings
	3.	Your wiki is now live!

⸻

📄 License

Licensed under the MIT License￼

---

### 🔄 CHANGELOG.md

No changes needed — it's already correctly reflecting:

- The standalone switch
- Removal of legacy scripts
- Security and offline features [oai_citation:2‡CHANGELOG.md](sediment://file_00000000ff18722f98c4f69d476bb424)

---

### ✅ robots.txt

Already properly limits indexing to only `/` and blocks dynamic routes and query parameters [oai_citation:3‡robots.txt](sediment://file_00000000216c722f91c13ea83f198c58).

---

