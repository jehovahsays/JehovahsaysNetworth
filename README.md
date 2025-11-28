# MEV Offline Wiki AI

![Website](https://img.shields.io/website?url=https%3A%2F%2Fjehovahsays.github.io%2Fmev%2F)
![Last Commit](https://img.shields.io/github/last-commit/jehovahsays/mev)
![Repo Size](https://img.shields.io/github/repo-size/jehovahsays/mev)
![License](https://img.shields.io/github/license/jehovahsays/mev)

## 💡 Project Overview: The Self-Defending Wiki

**MEV Offline Wiki AI** is a fully offline, secure, and self-contained encyclopedia designed for **Personal Knowledge Management (PKM)**. It embodies the Offline-First philosophy, running entirely in your web browser with no external server or database connection required.

The core motivation is resilience: **Your data is stored locally and cannot be vandalized or censored by external actors.** Any changes made by others only affect their local browser copy, providing a unique "self-defending" architecture against online abuse.

---

## 🧱 Core Architecture & Security Posture

MEV Wiki is intentionally designed to be minimal, hardened, and server-less. This architecture dictates its security and deployment model.

### Single-File Deployment (v1.2.0-standalone)

The application is engineered for maximum simplicity:
* **Self-Contained:** Version `v1.2.0-standalone` fully embeds all necessary HTML, CSS, and JavaScript into a single file: `index.html`.
* **Zero-Dependency:** There are no external scripts, CDNs, analytics, or server calls, eliminating the entire class of supply-chain attacks.
* **Simple Hosting:** Deployment only requires a static file server (like GitHub Pages or a simple Python server) to serve `index.html` and, optionally, `sw.js`.

### Data Storage Deep Dive: `localStorage`

The choice of `localStorage` defines the app's performance and security trade-offs:

| Aspect | Summary | Security & Performance Rationale |
| :--- | :--- | :--- |
| **Resilience** | Persistent, tied to the specific browser/origin. | Data survives browser/system restarts. It is *not* guaranteed to survive browser data clears or storage eviction due to low disk space. |
| **Performance** | Near-instant, synchronous access. | Zero network latency. Data retrieval is virtually instantaneous, resulting in a fluid, native-like User Experience (UX). |
| **Security** | Immune to Network Interception, Vulnerable to XSS. | Data **never** leaves the client, securing it from Man-in-the-Middle (MITM) attacks. However, any successful **Cross-Site Scripting (XSS)** attack could read and exfiltrate all wiki content. This makes client-side sanitation the **most critical** security component. |

### Hardened Defenses

* **Strict CSP:** A strict Content Security Policy (`meta` tag) is enforced to block dynamic code execution (`eval`) and external script loading.
* **Robots.txt:** The included `robots.txt` actively blocks search engine indexing of all dynamic content and user routes (`/#*`, `/edit`, `/profile`, etc.), ensuring user data and private pages are not exposed via search results.
* **Service Worker (`sw.js`):** Uses a versioned, cache-only strategy for core files (`/index.html`, `/sw.js`), ensuring users receive security patches quickly and guaranteeing reliable offline access.

---

## ⚙️ Getting It Running

The application requires a basic HTTP server to function correctly (opening `index.html` directly from the file system may cause browser security policies to block `localStorage` access and Service Worker registration).

### Requirements

* A basic static HTTP server (e.g., Python's `http.server`, Node's `serve`, Nginx, Apache, or GitHub Pages).

### Quickstart Example (Using Python)

1.  **Navigate** to the repository directory:
    ```bash
    cd /path/to/mev
    ```
2.  **Start** the simple Python HTTP server on port 8000:
    ```bash
    python -m http.server 8000
    ```
3.  The application will be accessible at: **`http://localhost:8000`**

### Note on PWA Experience

For the full Progressive Web App (PWA) experience (deep offline caching and "Add to Home Screen" functionality), the **`sw.js`** file must be present alongside `index.html` and served at the root of the domain. If omitted, the core application remains functional via `localStorage`, but the robust offline features will be disabled.

---

## 🧩 Key Features

The following functionalities are fully implemented using only client-side browser APIs:

* ✅ **Wiki Core:** Local page editing, creation, and deletion (via `localStorage`).
* ✅ **Offline PWA:** Offline-first functionality with Service Worker & manifest.json.
* ✅ **Markup Support:** Wiki-style formatting: `== Headings ==`, `'''Bold'''`, `[[Internal Links]]`.
* ✅ **Search:** Voice + AI Search UI.
* ✅ **Accessibility:** WCAG 2.1 AA Compliance (color contrast, semantic structure) and view-only keyboard navigation.
* ✅ **Theming:** Light and dark mode support.
* ✅ **Fallbacks:** Graceful fallbacks for users with JavaScript disabled (`<noscript>`).
* ✅ **Authentication:** Client-side account creation (no passwords, no backend required).

---

## 📣 Community & Contribution

We welcome contributions that uphold the project's values of **simplicity, security, and offline privacy.**

* **View our Contribution Guide:** [CONTRIBUTING.md](CONTRIBUTING.md)
* **Review our Security Policy:** [SECURITY.md](SECURITY.md)
* **Join the discussion:** Open a GitHub Issue or a Discussion thread.

### 🧠 Credits

* **Creator:** Morgan Shatee Byers
* **Inspiration:** The IndieWeb and Personal Knowledge Management (PKM) communities.
* **Built With:** Plain HTML, CSS, and JavaScript.

### 📄 License

MEV Wiki is licensed under the **MIT License**.
