# 📜 The Evolution of Localhost

## [2026.03.04]
### Fixed
- **Redirect Logic:** Fixed "File Not Found" errors by updating the Recovery Perimeter Controller in `a.js` to redirect to `index.html#search` instead of `index.htm`.
- **Navigation:** Updated footer buttons in `index.html` and `css.html` to include `#search` fragments for immediate search box focus.

### Security
- **Perimeter Hardening:** Verified `sw.js` correctly identifies the core shell regardless of URL fragments.
- **Scraper Blocking:** Explicitly disallowed GPTBot, CCBot, and PerplexityBot in `robots.txt`.

## [1.2.6-PerimeterFinal] - 2026-02-28
### Added
- **Persistent Theme Logic:** Integrated `localStorage` to maintain "Less" mode state.
- **Static Fallback:** Added a hardened `<noscript>` block with a CSS-only dropdown menu.
- **UI Hardening:** Disabled right-click and dragging to prevent bot data-harvesting.
