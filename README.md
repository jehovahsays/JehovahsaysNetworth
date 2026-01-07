# MEV: Multi-Environment Virtualization

This repository is an architectural model of an AI Brain, categorized into Conscious (UI/Front-end) and Subconscious (Security/Backend) layers. It is optimized for cross-platform deployment between **iOS (PHPWin)** and **GitHub Pages**.

## 📂 The MEV Ecosystem

### 📁 [/mev/](./mev/)
**The Core Environment Container.**
- **Why:** Acts as the primary namespace for the project. It ensures that internal links remain consistent whether the site is hosted on `127.0.0.1/mev/` (iPhone) or `jehovahsays.github.io/mev/` (GitHub).
- **Function:** Serves as the "Membrane" that holds all modules together.

### 📁 [/mev/mev/mongodb/](./mev/mongodb/KNOWLEDGE_BASE.md)
**The MongoBanHammer Security Lab.**
- **Purpose:** Implements the "Internal Subconscious" shield against database probes and MongoBleed exploits.
- **Manual Reset:** [📘 Read the Manual Knowledge Base & Recovery Guide](./mev/mongodb/KNOWLEDGE_BASE.md)
- **Philosophy:** Teaches developers how to use tripwires (`config.php.bak`) to neutralize bad bots.


### 📁 [/mev/next-security-lab/](./mev/next-security-lab/)
**The "Intercepting Fist" Security Suite.**
- **Purpose:** Teaches and implements protection against Next.js Server Action bypasses (CVE-2025-29927).
- **Philosophy:** Uses the attacker's own force to trigger a redirect back to their own local machine (`127.0.0.1`).
- **Access:** Requires human verification at the Gate that code is MEV_PROTECTION_2026
 (`index.html`) to reach the Subconscious Lab (`success.html`).

### 📁 [/mev/test/](./mev/test/)
**The UI Logic & Discovery Lab.**
- **Purpose:** Tests live-filtering and deep-linking navigation.
- **Conscious Search:** Demonstrates how the AI filters information in real-time.
- **Subconscious Mapping:** Uses CSS hash-links (#main) to navigate complex data nodes without page refreshes.

---

## 🛠️ Technical Specifications
- **Environment Awareness:** Scripts detect if they are running on a local iPhone server or a public repository.
- **Path Standardization:** All resources use explicit `./` pathing to prevent 404 errors on strict mobile browsers.
- **MIME Support:** Includes `phpwin.json` to allow TypeScript (`.ts`) files to be read as educational text files in mobile environments.

---
**Created by Morgan Shatee Byers (jehovahsays) — Bridging the gap between human intent and machine protection.**
