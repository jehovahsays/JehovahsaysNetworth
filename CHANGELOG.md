## [1.1.0-alpha3] – 2025-11-08

- 📱 Optimized iOS home screen icon (180×180)
- 🔧 Removed redundant icon links

### 🔄 Backup & Restore
- Export local wiki data to JSON file
- Import JSON file to restore wiki state
- Added to Settings page

### 🌙 Dark Mode Support
- Added dark mode styles in `style.css`
- Toggle button in Settings page
- User theme saved in `localStorage`

### 🧠 Core Features
- Smart AI search with local keyword matching and link suggestions
- Page linking using `[[Page Title]]` format
- Offline-first editing and browsing via `localStorage`
- Clean content sanitization and section editing (`wiki.js` refactored)

### 🔐 Authentication & Security
- Local-only user auth system (create/login/logout)
- Per-user edit tracking and local session
- Secure storage keys and CSP enforced in `index.html`
- Escaped HTML for safe input (prevents injection)

### 🧹 UI / UX Improvements
- Responsive sidebar menu with auto-close on link click
- Auth modal with input focus and cancel button
- Page delete with confirmation prompt
- Edit view includes "Save" and "Cancel" buttons
- AI input responds to **Enter** key press
- Updated visual styles and accessible buttons

### 🛠 Developer Experience
- CSP (`Content-Security-Policy`) header configured
- Modular architecture with `main.js`, `wiki.js`, `auth.js`
- Added `README.md`, `SECURITY.md`, and `test.html`
- App version added to `manifest.json`