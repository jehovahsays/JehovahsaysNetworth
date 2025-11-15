# Changelog – MEV Offline Wiki AI

## [1.2.0-standalone] – 2025-11-14

### Added
- Fully standalone `index.html` with embedded styles, scripts, and semantic rendering logic
- Semantic wiki markup parsing including headings (`==`), bold (`'''bold'''`), italic (`''italic''`), internal links (`[[Page]]`), and lists (`* Item`)
- Auto-generated example page demonstrating formatting features
- Semantic HTML and [schema.org](https://schema.org) microdata in page structure
- Offline detection banner with improved UX messaging
- “Wiki Formatting Help” button linking directly to example page

### Changed
- Removed external file dependencies (`index.js`, `parser.js`, `semantic-editor.js`, etc.)
- Consolidated logic and rendering into a single self-contained HTML file
- Strengthened security policies with locked `eval`, `Function`, and setTimeout-string calls

### Experimental Features
- `Chat`, `Stream`, and `Play` features are visible in the navigation but currently in testing
  - `Chat` allows basic interactive input/output but is still under evaluation
  - `Stream` supports local video playback but not true live streaming yet
  - `Play` is being prepared for future multimedia interactivity

### Removed
- Redundant external JS and CSS files
- Unused script and legacy editor modules

---

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