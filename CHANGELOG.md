# 📜 Changelog

## [1.2.1-standalone] - 2026-01-23
### 🏗️ Architectural Centralization
- **Gateway Logic**: Implemented root-level entry with mandatory Privacy/Cookie consent.
- **Perimeter Hardening**: Synchronized the Blackhole trap to protect the root-to-subfolder flow.
- **UI Lift**: Optimized root Gateway CSS for mobile viewports (lifted content alignment).
- **PWA Sync**: Service Worker now registers from root with a `/mev/` scope for full-site offline support.
- **Environment Preservation**: Integrated `localhost.zip` into the `/mev/` directory for full auditability.
