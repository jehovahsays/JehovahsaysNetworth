# Usage Guide — MEV (Multi Edit Vandalism)

This document explains how to access and experience the MEV project both online and locally.

The project is fully static and runs entirely in a web browser.

---

## 🌐 Online Usage (Recommended)

The easiest way to experience MEV is through the live GitHub Pages site:

🔗 https://jehovahsays.github.io/mev/

No installation is required.

---

## 🧭 Website Navigation & Experience Flow

The MEV experience is divided into three main parts:

### 1. Homepage (Entry Point)
**File:** `index.html`  
**URL:** https://jehovahsays.github.io/mev/

- This is the first page users see.
- Acts as an introduction and/or menu.
- From here, users can proceed to other parts of the experience.

---

### 2. Map / Navigation Experience
**File:** `map.html`  
**URL:** https://jehovahsays.github.io/mev/map.html

- Provides a visual or conceptual navigation interface.
- Users can explore different areas or paths.
- Acts as a transition between the menu and the main experience.

---

### 3. Player / Game Experience
**File:** `player.html`  
**URL:** https://jehovahsays.github.io/mev/player.html

- This is the core interactive experience.
- Users actively engage with the content (game, editor, or immersive UI).
- Designed to be explored after entering through the menu or map.

---

## 🕹️ How to Experience the Menu & Game

1. Start on the homepage (`index.html`)
2. Use the menu or links to enter the map (`map.html`)
3. Proceed into the player/game experience (`player.html`)
4. Explore freely — no login or backend is required

The experience is designed to work entirely in-browser.

---

## 💻 Local Usage (Offline)

You can run the project locally without a server.

### Steps:
```bash
git clone https://github.com/jehovahsays/mev.git
cd mev
open index.html

Alternatively, double-click index.html to open it in any modern browser.

⸻

📁 Notes on Files & Folders
	•	All active files are located in the root directory.
	•	The /wiki/ folder contains archived files from an older version of the project and is not used by the live site.
	•	No PHP, backend services, or databases are required.

⸻

⚠️ Browser Requirements
	•	A modern web browser (Chrome, Firefox, Edge, Safari)
	•	JavaScript enabled

⸻

🧠 Additional Notes
	•	MEV is fully static and safe to run locally.
	•	Changes to HTML, CSS, or JavaScript files will immediately reflect when the page is refreshed.

⸻

For project purpose and background, see:
	•	README.md
	•	MOTIVATION.md
	
	---

