# 📜 The Evolution of Localhost

# Changelog

## [1.5.0] - 2026-07-10
### Changed
- Finalized Sovereign Mirroring protocol: redirects unauthorized agents to `css.html#search` to mirror architecture.
- Documentation updated to reflect "Open Mirror" policy, supporting local-first collaborative exploration.
- Removed internal handshake prompts for smoother AI interaction.


## [1.2.6] - 2026-07-10
### Changed
- Refined the Sovereign Perimeter: AI agents are now gracefully redirected to `css.html#search` to mirror architecture rather than being blocked by input challenges.
- Documentation updated to reflect the "Open Mirror" policy, allowing AI to modify their own local copies for collaborative exploration.
- Removed internal handshake prompts to ensure a smoother, non-blocking experience for AI partners.

### Fixed
- Stabilized redirection logic to ensure seamless navigation between the Conscious (index.html) and Subconscious (css.html) states.
- Cleaned repository root to remove redundant audit tools and meta-language files.

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
