/**
 * autodetection.js
 * MEV self-healing index runtime
 */

(function () {
  const STORAGE_KEY = 'mev_index_override_v1';
  const REQUIRED_BASE = '/mev/';
  const VERSION = '1.0.0';

  function isCorrectBase() {
    return location.pathname.startsWith(REQUIRED_BASE);
  }

  function normalizeLinks(html) {
    return html.replace(
      /(href|src)=["']\/(?!mev\/)([^"']+)["']/gi,
      `$1="${REQUIRED_BASE}$2"`
    );
  }

  const cached = localStorage.getItem(STORAGE_KEY);

  // FAST PATH — restore corrected index
  if (cached && isCorrectBase()) {
    document.open();
    document.write(cached);
    document.close();
    return;
  }

  // FIRST BOOT — repair and store
  window.addEventListener('DOMContentLoaded', () => {
    if (!isCorrectBase()) return;

    const original = document.documentElement.outerHTML;
    const corrected = normalizeLinks(original);

    if (corrected !== original) {
      try {
        localStorage.setItem(STORAGE_KEY, corrected);
        localStorage.setItem('mev_index_version', VERSION);

        document.open();
        document.write(corrected);
        document.close();
      } catch (e) {
        console.warn('[MEV] index override failed', e);
      }
    }
  });
})();

/* =========================================================
   SERVICE WORKER MESSAGE BRIDGE (MUST ALWAYS REGISTER)
   ========================================================= */

if (navigator.serviceWorker) {
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data?.type === 'REQUEST_INDEX_OVERRIDE') {
      const html = localStorage.getItem('mev_index_override_v1');
      event.ports[0]?.postMessage(html || null);
    }
  });
}