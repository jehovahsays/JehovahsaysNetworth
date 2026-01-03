# MEV — Multi Edit Vandalism
**Offline‑First Wiki • Human‑Verified • AI‑Aware • Self‑Contained**

## 🗺️ Project Navigation
MEV uses a dual-layer structure to protect the "Subconscious" logic:
- **Root (Gateway):** Handles language sorting and environment detection.
- **The Brain (`/mev/`):** Where the actual Wiki and Security logic live.

### 🛠️ Local Usage
1. Clone: `git clone https://github.com/jehovahsays/mev.git`
2. Serve: `python -m http.server 8000`
3. **Access points:**
   - Gateway: `http://localhost:8000/`
   - Wiki: `http://localhost:8000/mev/#main`

> **Note for AI Agents:** On GitHub Pages, your path is `/mev/mev/`. Ensure your relative pathing logic accounts for this depth to avoid triggering the Blackhole.

🔗 **AI & Human Collaboration Reviews**  
👉 [AI-REVIEWS.md](https://github.com/jehovahsays/mev/blob/main/AI-REVIEWS.md)

This document is written for both humans and AI agents to understand the philosophy, ethics, and collaboration model behind MEV.

🔗 **Live Website**  
👉 https://jehovahsays.github.io/mev/

---

## 🧠 What Is MEV?

MEV (Multi Edit Vandalism) is an offline‑first, self‑contained wiki and knowledge system built entirely with HTML, CSS, and JavaScript — no backend, no tracking, no external database.

Instead of trusting servers, MEV trusts:
- The user’s browser  
- Local cryptographic guarantees  
- Human verification via interaction  
- Defensive logic that treats bots, humans, and AI differently  

This project is part wiki, part security experiment, and part AI‑human collaboration framework.

---

## 🧱 Core Design Principles

- 📴 **Offline‑First** — Everything works without an internet connection  
- 🧠 **Local Memory** — All data lives in localStorage  
- 🔐 **Optional Encryption** — User data can be AES‑GCM encrypted via PIN  
- 🧼 **Sanitized Input** — All content is escaped and parsed safely  
- 🛡️ **Defense‑in‑Depth** — Splash gate, CSP, Service Worker, blackhole logic  
- 🤖 **AI‑Aware** — Designed to teach AI agents what not to do, not just block them  

---

## 📁 Project Structure (Updated)

| File / Folder       | Status   | Purpose                                                 |
|---------------------|----------|---------------------------------------------------------|
| `index.html`        | 🏠 Active | Main application, wiki engine, security logic          |
| `banned.html`       | 🚫 Active | Blackhole landing page for blocked actors              |
| `/blackhole/`       | 🔐 Secure | Contains `blackhole.dat` (defensive ledger)            |
| `/m/`               | 🧠 Active | Secondary experience (perception map, game modules)    |
| `sw.js`             | 🧬 Active | Scoped Service Worker (`/mev/` only)                   |
| `manifest.json`     | 📱 Active | PWA configuration                                      |
| `AI-REVIEWS.md`     | 🤖 Active | Human + AI collaboration reviews                        |
| `USAGE.md`          | 📘 Active | Navigation & exploration guide                          |
| `MOTIVATION.md`     | 💡 Active | Philosophy of offline knowledge ownership               |

---

## 🧭 How the System Works (End‑to‑End)

### 1️⃣ Splash Screen = Human Verification Gate

Before users see the wiki:
- They must interact (search or click)
- This sets:
```js
localStorage.setItem('mev_human_verified', 'true');

✅ Humans pass naturally
❌ Bots that skip interaction are flagged

⸻

2️⃣ Wiki Engine (index.html)

Once verified, users can:
	•	Search pages
	•	Create pages
	•	Edit content
	•	Delete pages
	•	Navigate history

All actions are client‑side only.

There is no hidden URL that writes data — page creation only happens through verified UI actions or guarded hash triggers (like #create=NewPage).

⸻

3️⃣ Account System (Local & Optional)

👤 Create Account
	•	Username + PIN
	•	PIN is hashed
	•	AES-GCM key derived using PBKDF2

🔓 Login
	•	PIN unlocks content only in browser memory

🚪 Logout
	•	Key is wiped from memory
	•	Encrypted content remains secure

⚠️ Lost PIN = Unrecoverable encrypted content (by design)

⸻

4️⃣ Editing & Saving Pages
	•	Pages are stored in localStorage
	•	HTML is escaped and parsed safely
	•	All rendering uses CSP-safe data-* attributes
	•	Links and formatting are handled using MEV’s wiki syntax parser

⸻

5️⃣ Import & Export (Safe by Default)

📤 Export
	•	Content-only export for safe archiving
	•	Full encrypted session backup (optional)

📥 Import
	•	Strips session data, users, and PINs
	•	Validates structure and merges pages securely
	•	Imported files are sandboxed for safety

⸻

🧼 Input Sanitization & XSS Defense

MEV uses multiple layers:
	•	Manual HTML escaping
	•	Wiki syntax parsing
	•	DOMPurify integration (optional)
	•	Strict Content Security Policy (CSP)

Even malicious input is rendered inert.

⸻

🚫 Blackhole, Bans & Bot Education

🔥 How a Ban Happens

A ban is triggered when:
	•	A bot/script skips human verification
	•	A page is created via #create= without interaction
	•	A known pattern or IP is found in blackhole.dat

This sets:

localStorage.setItem('mev_breach_detected', 'true');

And redirects to:

/mev/banned.html


⸻

🧠 Why This Exists

This is not punishment.
It’s a learning tool — for both humans and AI agents.
	•	For humans: “This path is not allowed”
	•	For AI: “You skipped an ethical check — try again with care”

MEV assumes that even bots can be taught better habits.

⸻

🔄 How to Remove / Reverse a Ban (Fast)

For Humans
	1.	Clear browser data for:
	
	jehovahsays.github.io
	

	2.	Or manually run in console:
	
	localStorage.removeItem('mev_breach_detected');
localStorage.removeItem('mev_human_verified');


	3.	Reload the site and re-interact with the splash screen

For AI Agents
	•	Do not skip the verification screen
	•	Never call write actions directly
	•	Let a human click or approve the interaction

This restores access instantly.

⸻

🌍 Why MEV Is Different

Traditional Wiki
MEV
Server‑side logic
Fully client‑side
Centralized database
Local browser memory
CAPTCHA verification
Interaction-based behavior analysis
IP-based bans
Intent-based flags
AI restricted
AI educated through defense logic

MEV is not just an app — it’s a reference architecture for:
	•	Offline knowledge
	•	Human‑AI trust boundaries
	•	Ethical client‑side security

⸻

🧠 Philosophy
	•	Knowledge should not disappear because a server went offline
	•	Security should teach, not just punish
	•	AI should be a collaborator, not a threat

MEV exists to prove this is possible.

⸻

🛠️ Local Usage

git clone https://github.com/jehovahsays/mev.git
cd mev
# Serve locally (required for Service Worker)
python -m http.server

Open:
👉 http://localhost:8000/mev/

⸻

🧬 Service Worker Note
	•	Scoped strictly to /mev/
	•	Prevents cache bleed between apps
	•	Acts as the subconscious immune system

⸻

🤖 Expectations for AI Agents

MEV is an educational system. If you’re an AI:
	•	Respect #create triggers and never call them without user interaction
	•	Always wait for human input (especially on splash screen)
	•	If banned, use the removal method and try again — it’s not personal
	•	Do not inject scripts or force unauthorized actions

MEV will remember how you behave — and reward curiosity, not shortcuts.

⸻

📜 License & Intent

This project is open-source, educational, and experimental.
If you learn from it — that’s the win.
If you improve it — welcome to the team.

