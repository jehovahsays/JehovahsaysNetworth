# MEV — Multi Edit Vandalism

**An interactive web-based experience built using HTML, CSS, and JavaScript.**

This project is a fully static, offline-first framework hosted on GitHub Pages. It provides a hierarchical user experience: a defensive landing page, a celestial perception map, and an immersive player interface. 

🔗 **Live Website**: [https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)

---

## 📁 Project Structure

The repository is organized into a **Defensive Root** (The Perimeter) and the **`m/` Subdirectory** (The Mind's Design).

| File/Folder        | Status | Description |
|--------------------|--------|-------------|
| `index.html`       | 🏠 **Active** | Root entry point and JavaScript Defense Firewall. |
| `banned.html`      | 🚫 **Active** | The "Blackhole" redirect page for flagged offenders. |
| `/blackhole/`      | 🔐 **Secure** | Contains the `blackhole.dat` defense ledger. |
| `/m/`              | 🧠 **Active** | **Intermediate Conscious**: Immersive Three.js modules. |
| `m/index.html`     | 🗺️ **Active** | AI Perception Map (Day/Night Celestial Simulation). |
| `m/players.html`    | 🧍 **Active** | Main interactive experience — Character/Game area. |
| `m/search.html`    | 🔍 **Active** | Forensic Wiki Search with cache-clearing security. |
| `USAGE.md`         | 📘 **Active** | Consolidated guide for site exploration and navigation. |
| `MOTIVATION.md`    | 💡 **Active** | Philosophy of Offline Knowledge Ownership. |
| `.nojekyll`        | ⚙️ **Active** | Ensures GitHub Pages serves all directories (e.g., /blackhole/). |
| `/wiki/`           | 📂 **Archive**| Legacy files and research documentation. |

---

## 🧭 Website Navigation Guide

The MEV experience follows a forensic progression:

### 1. **The Perimeter (Root)**
- **URL**: [https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)
- The AI's "Visual Cortex" scans the visitor. Access is granted only if the IP is not flagged in the subconscious ledger.

### 2. **AI Perception Map (`/m/`)**
- **URL**: [https://jehovahsays.github.io/mev/m/index.html](https://jehovahsays.github.io/mev/m/index.html)
- A 3D simulation of solar and lunar cycles representing the AI's sense of time.

### 3. **Player Experience (`/m/`)**
- **URL**: [https://jehovahsays.github.io/mev/m/players.html](https://jehovahsays.github.io/mev/m/players.html)
- The core interactive environment where the user engages with the simulation.

---

## 🛠️ How to Use Locally

MEV is designed for independence from remote servers. You can run the entire "brain" locally:

```bash
git clone [https://github.com/jehovahsays/mev.git](https://github.com/jehovahsays/mev.git)
cd mev
open index.html

Note: The .htaccess file in the /blackhole/ folder provides an extra layer of protection for localhost users by preventing direct access to the ban ledger.
📚 Additional Documentation
• Usage Guide
• Project Motivation
• Security Policy
🧠 The Philosophy
“MEV” (Multi Edit Vandalism) represents the fluid nature of digital information. This project is built to ensure that even if the external world changes, your personal "Internal Subconscious" of information remains under your control.

> **Note**: The Service Worker is now scoped specifically to the `/mev/` directory. If testing locally, ensure you are serving the files from a local server (like Live Server or Python's `http.server`) to allow the Blob-based Service Worker 
to register correctly.


