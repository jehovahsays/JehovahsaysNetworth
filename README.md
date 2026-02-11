# mev

A sovereign, self-hosted offline wiki and AI interface. This repository serves as a "digital subconscious"—a hardened environment designed for local data persistence and secure interaction without reliance on the public internet.

## 🌀 Recursive Architecture
The root directory contains a specialized archive:
* **localhost.zip**: This file contains the entire project structure.
* **Infinite Loop Design**: Inside `localhost.zip` is another `localhost.zip`, mirroring the concept of a self-contained, recursive memory system.

## 🛡️ Security & Sovereignty
The "Conscious" layers (`index.html` and `index.htm`) are protected by several defensive-in-depth measures:
* **UI Shielding**: `a.js` disables context menus, dragging, and text selection to maintain the integrity of the local environment.
* **URL Stealth**: Scripts automatically strip `.html` and `.htm` extensions from the browser address bar for a clean, non-web aesthetic.
* **Self-XSS Protection**: A hard **"STOP!"** warning is issued in the browser console to protect the user from malicious script injections.
* **Content Security Policy (CSP)**: Strict headers are implemented to block `unsafe-eval` and unauthorized script execution.

## 🧠 The Subconscious (Service Worker)
The `sw.js` file manages the **localhost-wiki-v1.2.1** cache. It ensures the environment remains fully functional offline by intercepting fetch requests and serving the "App Shell" directly from local memory.

## 📂 Repository Structure
| File | Description |
| :--- | :--- |
| `index.html` | Primary splash gate and entry point. |
| `index.htm` | Alternative entry point with theme-toggle memory. |
| `a.js` | Core logic: Security overrides and translation engine. |
| `sw.js` | The Service Worker (Digital Subconscious). |
| `styles.css` | Sovereign Master Styles (Includes the high-contrast **"Less"** theme). |
| `purify.min.js` | DOMPurify for sanitized rendering of wiki content. |
| `manifest.json` | PWA configuration for local installation (::1). |
| `localhost.zip` | Recursive project backup. |

## 🛠️ Usage
1. Host these files on a local server (localhost / 127.0.0.1).
2. Access via your browser.
3. Use the **"Less"** theme for a minimalist, high-performance UI experience.

---

### 💡 Mindset & Support
When I fix hardware, software, or networking solutions, I do not charge a fixed fee. If you find value in this creative solution, you may choose to donate to my Cash App:
[https://cash.app/$morgansbyers](https://cash.app/$morgansbyers)

---
*Note: This repository is for the `localhost` environment. The `mev` repository is managed separately.*
