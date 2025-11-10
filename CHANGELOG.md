# Changelog – MEV Offline Wiki AI

## [1.1.0-alpha3] – 2025-11-10

### Added
- Hardened security with inline meta policies and blocked unsafe functions
- Full integration of service worker caching for offline use
- Profile page with joined date and username display
- Storage usage bar with visual quota feedback
- Sanitization and linkification of page content

### Changed
- Merged script logic into single `index.js` for better performance
- Replaced dynamic login system with localStorage-based username auth
- Improved CSP and removed external service access

### Removed
- Sitemap and indexing of dynamic user content for privacy
- Passwords and third-party connections to minimize risks

---

## [1.0.0] – Initial Release

- Local wiki page creation, editing, and deletion
- Basic localStorage account management
- Offline page loading
- Mobile-friendly layout and theme toggle