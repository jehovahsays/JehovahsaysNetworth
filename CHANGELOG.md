## [1.3.0] – 2026-01-03
### 📂 The Universal Migration
- **Restructured** the repository to use the root as a "Translation Gateway."
- **Implemented** environment detection in `index.html` to handle the `github.io/mev/mev/` path vs `localhost/mev/`.
- **Added** Accessibility Recovery instructions to `USAGE.md` to help users and bots learn from perimeter breaches.
- **Standardized** all 10 core files to use Relative Pathing, making the "Brain" folder-blind.


## [1.2.2] – 2025-12-24
### 🛡️ Human Verification & AI-Aware Security Layer
- **Introduced** splash screen gate using localStorage `mev_human_verified` to block bots from triggering unauthorized write functions (e.g., `#create=`).
- **Integrated** `/banned.html` redirect logic tied to `blackhole.dat` ledger and `mev_breach_detected` flag.
- **Hardened** all hash-based entry points (like `#create=PageName`) with passive firewall logic to prevent bot bypassing.
- **Enhanced** user experience by allowing re-verification after a ban (via `localStorage` reset).
- **Documented** the full behavior in `USAGE.md`, `MOTIVATION.md`, and `CONTRIBUTING.md`.

### 📚 Documentation Overhaul
- **Rewrote** `USAGE.md` with clear instructions on creating, editing, exporting, encrypting, and restoring sessions.
- **Expanded** `MOTIVATION.md` with philosophical and architectural reasoning — including digital boundaries, offline sovereignty, and bot ethics.
- **Updated** `CONTRIBUTING.md` with precise coding standards, AI collaboration guidelines, and secure PR handling procedures.

---

## [1.2.1] – 2025-12-22
### 🔧 PWA & Service Worker Optimization
- **Fixed** Service Worker registration to use the explicit `/mev/` scope.
- **Updated** fetch listener logic to support subfolder-based path matching for `index.html`.
- **Improved** caching reliability for offline use by transitioning to relative paths in the `FILES` array.
- **Refined** the automatic update trigger to ensure the "Visual Cortex" (UI) refreshes immediately upon Service Worker activation.

---

## [1.2.0] – 2025-12-21
### 🚀 Immersive Layer Deployment
- **Added** `/m/` subdirectory to house interactive Three.js modules.
- **Deployed** `m/index.html` (Map), `m/players.html` (Player), and `m/search.html` (Search).
- **Synchronized** root documentation to reflect the new hierarchical structure.
- **Hardened** search forensics with mandatory no-cache headers.