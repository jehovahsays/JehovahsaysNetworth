# 🧠 MEV: Multi-Environment Vanguard (v1.2.1-standalone)

MEV is a **Serverless, Headless CMS** and personal wiki architecture. It operates as a sovereign "Internal Brain," functioning similarly to a **Serverless Cache Server** where the database, logic, and interface all coexist within the user's browser environment.

## 🚀 The Architectural Philosophy
* **Headless & Serverless**: There is no back-end server. The "Head" (UI) and the "Body" (Data) are decoupled, allowing the system to be served from any static host (GitHub Pages, iOS local server, or USB drive).
* **Cache-Centric Design**: Like a serverless cache server, MEV uses a v1.2.1 Service Worker to intercept requests and serve content directly from the local cache, ensuring 100% offline uptime.
* **Zero External Dependencies**: To protect user privacy, **no 3rd-party links or remote dependency scripts** are allowed. All security libraries (DOMPurify) are self-hosted.



## ⚖️ Open-Source Sovereignty & Licensing
MEV is released under the **MIT License**. This is a permissive license designed to give webmasters and developers the absolute courage to:
1. **Fork & Rebuild**: Dismantle the core and adapt it to your own custom security needs.
2. **Sovereign Linkage**: The P2P Chat utilizes the **Open-Source WebRTC Standard**. There are no proprietary licenses or tracking; it is native browser technology.
3. **No Hidden Hooks**: Because there are zero 3rd-party links, you are guaranteed that no remote entity is monitoring your implementation.

**Note to Developers**: This is a "High-Sovereignty" core. If you have the experience and knowledge to rebuild this responsibly and securely, you are encouraged to do so. We only ask that you maintain the "Internal Subconscious" integrity by keeping logic encapsulated in IIFEs and sanitizing all inputs at the gate.



## 📂 The MEV Ecosystem
* **Conscious Layer**: Root `index.html` gatekeeper with human verification.
* **Subconscious Layer**: `/mev/` directory, the high-security core of the CMS.
* **Sovereign Link**: Secure, ephemeral P2P Chat via WebRTC (`/mev/chat.html`).
* **Perimeter Security**: `/mev/blackhole/` tripwire for unauthorized bot automation.

## 🛡️ Security & Integrity
* **Strict Scoping**: All logic is wrapped in IIFEs to block remote CLI/Console interference.
* **Sovereign Data**: Content is sanitized via `DOMPurify` and rendered using the `textContent` shield.
* **Folder-Blind Mobility**: Uses strictly relative pathing (`./`) to ensure the CMS can move between environments seamlessly.

## 🛠️ Quick Start
1. Clone the repository.
2. Open the root `index.html`.
3. Complete the Humanity Handshake to unlock the `/mev/` headless engine.
