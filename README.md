
# 🏆 MEV – Voice Search Leaderboard

A private, fully offline web app that lets users search, save, filter, and listen to terms — while tracking the most searched words on a live leaderboard. No backend. No tracking. 100% client-side.

---

## 🚀 Quick Start

### 🔹 Open Locally
Serve with a simple Python server:
```bash
python3 -m http.server
```
Then visit: [http://localhost:8000/index.html](http://localhost:8000/index.html)

### 🔹 Host Online
Deploy using GitHub Pages, Netlify, or any static host:  
**Example:** `https://yourdomain.com/index.html`

---

## ✨ Features

| Feature              | Description                                                        |
|----------------------|--------------------------------------------------------------------|
| 🔍 **Search Input**     | Users enter search terms, which are spoken aloud and saved locally |
| 🎯 **Live Filtering**   | Filters previous entries in real time as user types              |
| 🏆 **Leaderboard**      | Top 5 most searched terms, updated dynamically                   |
| 🗣️ **Speech Output**    | Uses browser's speech synthesis to speak each term               |
| 📷 **Webcam View**      | Displays user's webcam in a circular view (permission-based)     |
| ⭐ **Star Rating**      | Users can rate the page from 1–5 stars (stored locally)           |
| 💾 **Offline Support** | Entire app runs in-browser via `localStorage`                    |

---

## 🔐 Privacy & Security

| Category           | Status              |
|--------------------|---------------------|
| Network Requests   | ❌ None              |
| Data Storage       | ✅ `localStorage` only |
| Microphone Access  | ❌ Not used          |
| Webcam Access      | ✅ Requires permission |
| Audio Output       | ✅ Client-side only   |
| Encryption         | ❌ Not applicable    |

> **Security Grade:** A • **Privacy Grade:** A

---

## 🛠 Developer Mode

- **Full editing**: [http://localhost/index.html](http://localhost/index.html)  
- **Deployed view**: [https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)

---

## 📦 Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- No frameworks, analytics, or external dependencies
- Works on Chrome, Firefox, Safari, Edge

---

## ✅ Build & CI Status

[![PHPMD](https://github.com/jehovahsays/mev/actions/workflows/phpmd.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/phpmd.yml)
[![PHP CI](https://github.com/jehovahsays/mev/actions/workflows/php.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/php.yml)
[![CodeQL](https://github.com/jehovahsays/mev/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/github-code-scanning/codeql)
[![Dependabot Updates](https://github.com/jehovahsays/mev/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/dependabot/dependabot-updates)
[![Pages Deploy](https://github.com/jehovahsays/mev/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/pages/pages-build-deployment)
[![Jekyll CI](https://github.com/jehovahsays/mev/actions/workflows/jekyll-docker.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/jekyll-docker.yml)

---

## 🤝 Creator & Support

**Webmaster:** Morgan Shatee Byers  
**GitHub:** [@jehovahsays](https://github.com/jehovahsays/mev)  
**YouTube:** [@jehovahsaysnetworth](https://youtube.com/@jehovahsaysnetworth)  
**Donate:** [CashApp $morgansbyers](https://cash.app/$morgansbyers)

---
