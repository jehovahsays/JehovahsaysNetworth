# 🧠 MEV: Multi-Environment Vanguard (v1.2.1-standalone)

MEV is a **Serverless, Headless CMS** and sovereign personal wiki. It functions as a local cache server where the database, logic, and interface all coexist within your browser memory.

## 🏗️ Architectural Evolution
In version 1.2.1, the "Subconscious" (`/mev/`) and "Perimeter" (`/blackhole/`) tiers have been integrated directly into the root directory. This creates a **Unified Conscious Membrane**, reducing path complexity while maintaining high-security isolation via logic-based sentinels.

## 🛡️ Core Services & Security Layers
* **Sovereign Gateway (Root)**: The unified entry point. Access to internal "Subconscious" features requires explicit Privacy/Cookie consent to initialize the session.
* **The Immune System**: Security logic is now handled in `a.js` and `purify.min.js`, featuring:
    * **The textContent Shield**: Prevention of XSS by ensuring user-generated data is never executed as HTML.
    * **Logic Sentinels**: Unauthorized attempts to bypass the gateway or manipulate hashes trigger immediate session lockouts (replacing the old `/blackhole/` folder logic).
* **No 3rd-Party Links**: 100% self-hosted; no remote entity can monitor your data or interactions.

## 🛠️ Quick Start
1.  **Clone/Host**: Host the root folder on a local server or GitHub Pages.
2.  **Initialize**: Open `index.html`.
3.  **Consent**: Accept the Sovereign Privacy Policy via the banner to unlock the core engine.
