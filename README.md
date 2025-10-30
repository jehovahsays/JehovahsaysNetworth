# 🧠 MEV – Offline Voice AI & Voice Search Leaderboard

A private, fully offline web app that learns from what you type and speaks answers aloud — built to demonstrate **local AI memory**, **speech synthesis**, and **secure offline operation**.  

Originally designed as a **voice search leaderboard**, MEV has evolved into an intelligent **offline assistant** that can both **learn** and **answer** user-taught information — with optional online syncing and payout leaderboard modes.

No backend. No tracking. 100% browser-based.

---

## 🚀 Quick Start

### 🔹 Open Locally
Run MEV from your computer:
```bash
python3 -m http.server

Then visit:
👉 http://localhost:8000/index.html

🔹 Host Online

Deploy using GitHub Pages (as done here):
🔗 https://jehovahsays.github.io/mev

All files are static and require no server — everything runs in your browser.

⸻

🎮 How It Works
	1.	Open MEV AI￼
	2.	Teach the AI a fact:
	
	1+1 is 2
	
	What is 1+1?
	
	➤ It replies aloud: “2” ✅

	4.	Works offline and remembers everything in your browser until cleared.
	5.	When online, status changes automatically from “Offline” to “Online.”

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
Automatically learns when you type sentences like “X is Y”
🧩 Offline Operation
Works without any internet connection
🕹️ Leaderboard Mode
(Legacy) Tracks most searched or spoken terms
🧱 Manual Payout Mode
(Optional) Top player can send $1 to $morgansbyers and win pot
🔐 Security Headers
Enforced for privacy, integrity, and sandboxing
💾 Service Worker
Caches app files for offline startup


⸻

📴 Offline Capabilities

Capability
Supported
Local Storage (Memory)
✅
Speech Synthesis
✅
Offline Launch (via sw.js)
✅
Persistent Data (Until Cleared)
✅
Microphone / Camera Access
❌
External Network Requests
❌
PWA Installation (Manual)
✅

Works 100% offline once loaded — even with “Airplane Mode” enabled.

⸻

🌐 Online Capabilities

Feature
Description
🟢 Dynamic Status
Footer changes between “Online” and “Offline” in real time
🧠 Sync Ready
Future versions may allow cloud sync or leaderboard upload
💰 Cash Game
Optional payout mode (manual verification)
📈 GitHub Hosting
Fully compatible with GitHub Pages for public demo


⸻

🔐 Privacy & Security

Category
Status
Network Requests
✅ Only for optional leaderboard.json
Data Storage
✅ localStorage (browser-only)
Microphone Access
❌ Disabled by Permissions Policy
Webcam Access
❌ Disabled by Permissions Policy
Audio Output
✅ Client-side only
Permissions Policy
✅ Strict (geolocation=(), camera=(), microphone=())
Cross-Origin Policies
✅ COEP / COOP / CORP enforced
HSTS
✅ GitHub Pages HTTPS enforced

Security Grade: A
Privacy Grade: A
Data Ownership: 100% user-controlled (stored locally in your browser)

⸻

⚙️ Technical Architecture
	•	Frontend: HTML5, CSS3, Vanilla JavaScript
	•	Data Storage: Browser localStorage
	•	Voice Engine: Web Speech API (SpeechSynthesisUtterance)
	•	Offline Cache: Service Worker (sw.js)
	•	Hosting: GitHub Pages
	•	Network Calls: None (except optional leaderboard fetch)

⸻

🧱 Repository File Structure

mev/
├── index.html         # User Manual / README page
├── ai.html            # Offline AI App
├── sw.js              # Service Worker for offline caching
├── leaderboard.json   # Optional for leaderboard demo
└── README.md          # Documentation (this file)


⸻

⚖️ Strengths & Weaknesses

✅ Strengths
	•	100% offline operation — no internet needed after first load
	•	Learns facts and answers them intelligently
	•	Fast and lightweight (under 100 KB total)
	•	Privacy-by-design — no data leaves your device
	•	Secure headers and sandboxed browser policies
	•	Works across Chrome, Firefox, Safari, and Edge
	•	Expandable for future leaderboard and voice input

⚠️ Weaknesses
	•	Facts must follow “X is Y” structure
	•	Cannot interpret logic or math beyond stored facts
	•	Knowledge is local (not synced across devices)
	•	Speech recognition may vary by browser
	•	No authentication or multiplayer data sharing

⸻

🧪 Browser Tests & Compliance

Test
Result
Mixed Content
✅ Passed
Content Security Policy
✅ Safe inline use only
Offline Test (DevTools → Offline Mode)
✅ Passed
Local Storage Persistence
✅ Verified
Speech Synthesis Test
✅ Chrome / Edge / Firefox
Permissions Policy Enforcement
✅ Confirmed
COEP / COOP Headers
✅ Passed via Meta
Cache Storage Inspection
✅ Service Worker verified


⸻

🧠 Offline AI Command Examples

You can teach, ask, and clear knowledge using natural language.
Here are examples of commands you can try:

Type
Example Input
Expected Response
🧩 Teach
1+1 is 2
Learns the fact
🧩 Teach
The sky is blue
Learns “sky = blue”
❓ Ask
What is 1+1?
Speaks: “2”
❓ Ask
What color is the sky?
Speaks: “blue”
🔄 Update
The sky is gray
Updates stored fact
🗑️ Clear
clear memory
Removes all learned facts
🔊 Repeat
say hello
Speaks “hello”
💬 Test
MEV is smart
Learns and repeats fact

💡 Tip: Punctuation and capitalization don’t matter — MEV matches key terms in lowercase.
All learning is stored securely in your browser’s localStorage until manually cleared.

⸻

🛠 Developer Mode
	•	Local Testing: http://localhost:8000/ai.html
	•	Live Deployment: https://jehovahsays.github.io/mev/ai.html
	•	Code Editing: Any text editor (VS Code, Sublime, etc.)

⸻

📦 Tech Stack
	•	HTML5 + CSS3
	•	Vanilla JavaScript (no frameworks)
	•	Web Speech API
	•	Web Storage API
	•	Service Worker
	•	GitHub Pages (static host)

⸻

🤝 Creator & Support

Creator: Morgan Shatee Byers
GitHub: @jehovahsays￼
YouTube: @jehovahsaysnetworth￼
Donate: Cash App $morgansbyers￼

⸻

💡 “MEV demonstrates that intelligent, interactive, voice-driven applications can run fully offline — private, secure, and owned by the user.”

---

	
	