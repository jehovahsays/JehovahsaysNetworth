# 📜 Changelog

## [1.2.1-standalone] - 2026-01-29
### 🏗️ Unified Architectural Flattening
- **Directory Consolidation**: Removed the `/mev/` and `/blackhole/` subdirectories to create a single-tier "folder-blind" root environment.
- **Logic-Based Sentinels**: Migrated the "Blackhole" perimeter defense from a directory-based trap to integrated logic within `a.js`.
- **PWA Scope Update**: Service Worker (`sw.js`) now registers at the absolute root level instead of the `/mev/` scope, ensuring the entire repository is cached for offline sovereignty.
- **Path Simplification**: Updated all internal links and references to use direct root-level relative paths (`./`), ensuring maximum portability across localhost and GitHub environments.
- **Security Hardening**: Re-synchronized the "Humanity Handshake" and `textContent` shields to operate directly at the entry gate.
