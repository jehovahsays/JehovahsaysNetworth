# 🧠 MEV – Offline Voice AI & Voice Search Leaderboard

A private, fully offline web app that learns from what you type and speaks answers aloud — built to demonstrate **local AI memory**, **speech synthesis**, and **secure offline operation**.

Originally designed as a **voice search leaderboard**, MEV has evolved into an intelligent **offline assistant** that can both **learn** and **answer** user-taught information — with optional online syncing and payout leaderboard modes.

> **No backend. No tracking. 100% browser-based.**

---

## 🚀 Quick Start

### 🔹 Run Locally

```bash
python3 -m http.server

Then visit:
👉 http://localhost:8000/index.html

🔹 Host Online

Deploy using GitHub Pages:
🔗 https://jehovahsays.github.io/mev

All files are static and require no server — everything runs in your browser.

⸻

🎮 How It Works
	1.	Open MEV AI
	2.	Teach the AI a fact:
1+1 is 2
	3.	Ask it:
What is 1+1?
	4.	It replies aloud: “2” ✅
	5.	Works offline and remembers everything in your browser until cleared
	6.	Status updates from “Offline” to “Online” automatically when connected

⸻

✨ Features

Feature
Description
🧠 Offline Memory
Learns and stores facts in localStorage
🔊 Voice Output
Speaks answers aloud using browser SpeechSynthesis
🔍 Smart Matching
Recognizes questions related to stored facts
💬 Self-Teaching
Automatically learns when you type “X is Y”
🧩 Offline Operation
Works without any internet connection
🕹️ Leaderboard Mode
(Legacy) Tracks most searched/spoken terms
🧱 Manual Payout
(Optional) $1 payout to winner via Cash App
🔐 Secure Headers
Privacy, sandboxing, and permission enforcement
💾 Service Worker
Caches all files for offline startup


⸻

📴 Offline Capabilities

Capability
Supported
Local Storage (Memory)
✅
Speech Synthesis
✅
Offline Launch (sw.js)
✅
Persistent Data
✅
Microphone / Camera
❌
External Network Requests
❌
PWA Installation
✅

Works 100% offline once loaded — even in Airplane Mode ✈️

⸻

🌐 Online Capabilities

Feature
Description
🟢 Dynamic Status
Footer shows “Online” or “Offline” in real time
🧠 Sync Ready
Future versions may support optional cloud syncing
💰 Cash Game
Optional payout mode (manual)
📈 GitHub Hosting
Works with GitHub Pages for public deployment


⸻

🔐 Privacy & Security

Category
Status
Network Requests
✅ None (except optional leaderboard fetch)
Data Storage
✅ Local only (localStorage)
Microphone Access
❌ Disabled by Permissions Policy
Webcam Access
❌ Disabled by Permissions Policy
Audio Output
✅ Speech synthesis only
Permissions Policy
✅ Strict (no geolocation, camera, mic)
Cross-Origin Policies
✅ COEP / COOP / CORP enforced
HSTS / HTTPS
✅ GitHub Pages HTTPS

Security Grade: A
Privacy Grade: A
Data Ownership: 100% user-controlled (local only)

⸻

⚙️ Technical Architecture
	•	Frontend: HTML5, CSS3, Vanilla JavaScript
	•	Data Storage: localStorage (browser only)
	•	Voice Engine: Web Speech API (SpeechSynthesis)
	•	Offline Cache: Service Worker (sw.js)
	•	Hosting: GitHub Pages
	•	Network Calls: Optional (DuckDuckGo API or leaderboard fetch)

⸻

📁 File Structure

mev/
├── index.html         # Main entry / documentation
├── wiki.html          # AI-powered offline wiki
├── auth.js            # Local login/signup system
├── sw.js              # Service worker (offline cache)
├── manifest.json      # PWA metadata
├── icon-192.png       # PWA icon (small)
├── icon-512.png       # PWA icon (large)
├── README.md          # GitHub project info
└── leaderboard.json   # Optional file for leaderboard


⸻

✅ Strengths & ⚠️ Weaknesses

✅ Strengths
	•	100% offline-capable
	•	Learns facts and answers naturally
	•	Lightweight (~100KB total)
	•	Fully private and secure (no server)
	•	Mobile-friendly and cross-browser
	•	Service Worker + Voice AI support

⚠️ Limitations
	•	Only supports “X is Y” fact formats
	•	Doesn’t compute or reason beyond facts
	•	Data is not synced across devices
	•	No multiplayer or collaborative mode (yet)
	•	Voice input not available (yet)

⸻

🧪 Browser Compatibility & Tests

Test
Result
Mixed Content Security
✅ Passed
Offline Mode (DevTools)
✅ Passed
localStorage Persistence
✅ Verified
Speech Synthesis API
✅ Chrome / Edge / Firefox
Permissions Policy Enforcement
✅ Confirmed
Cross-Origin Isolation
✅ COEP / COOP
Service Worker Cache Storage
✅ Verified


⸻

🧠 AI Examples (Teach & Ask)

Type
Example Input
Expected Response
🧩 Teach
1+1 is 2
Learns 1+1 = 2
🧩 Teach
The sky is blue
Learns sky = blue
❓ Ask
What is 1+1?
Speaks: “2”
❓ Ask
What color is the sky?
Speaks: “blue”
🔄 Update
The sky is gray
Updates existing fact
🗑️ Clear
clear memory
Removes all data
🔊 Repeat
say hello
Speaks: “hello”
💬 Test
MEV is smart
Learns and replies

💡 Tip: Capitalization and punctuation don’t matter — MEV matches based on keywords.

⸻

🛠 Developer Mode
	•	Local Dev: http://localhost:8000/wiki.html
	•	Live Demo: https://jehovahsays.github.io/mev/wiki.html
	•	Editor: Any (VS Code, Sublime, Notepad++, etc.)

⸻

📦 Tech Stack
	•	HTML5 + CSS3
	•	Vanilla JavaScript (no libraries)
	•	Web Speech API
	•	Web Storage API (localStorage)
	•	Service Workers (offline caching)
	•	GitHub Pages (static hosting)

⸻

🤝 Creator & Support

Creator: Morgan Shatee Byers
GitHub: @jehovahsays￼
YouTube: @jehovahsaysnetworth￼
Donate: Cash App $morgansbyers

⸻

💡 “MEV proves that intelligent, interactive, voice‑driven apps can run fully offline — private, secure, and owned by the user.”

---
