// ====== Dark Mode Handling ======
function applyThemeFromStorage() {
  const mode = localStorage.getItem('wiki_theme');
  if (mode === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('wiki_theme', isDark ? 'dark' : 'light');
}

// ====== Sidebar Toggle Handling ======
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  if (!sidebar || !main) return;

  const isOpen = sidebar.style.display === 'block';
  if (isOpen) {
    sidebar.style.display = 'none';
    main.style.flex = '1 1 100%';
    localStorage.setItem('wiki_sidebar', 'closed');
  } else {
    sidebar.style.display = 'block';
    main.style.flex = '1';
    localStorage.setItem('wiki_sidebar', 'open');
  }
}

function restoreSidebarState() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  if (!sidebar || !main) return;

  const state = localStorage.getItem('wiki_sidebar');
  if (state === 'open') {
    sidebar.style.display = 'block';
    main.style.flex = '1';
  } else {
    sidebar.style.display = 'none';
    main.style.flex = '1 1 100%';
  }
}

// ====== Storage Keys ======
const STORAGE_KEYS = {
  pages: 'wiki_pages',
  users: 'wiki_users',
  currentUser: 'wiki_current_user',
  changes: 'wiki_changes',
  knowledge: 'wiki_knowledge'
};

// ====== Utilities ======
function speak(text) {
  if ('speechSynthesis' in window) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    msg.pitch = 1;
    msg.rate = 1;
    window.speechSynthesis.speak(msg);
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, match => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[match]));
}

function linkify(content) {
  const safe = escapeHTML(content);
  return safe.replace(/\[\[([^\]]+)\]\]/g, (_, title) => {
    return `<a href="#" onclick="showPage('${title}')">${title}</a>`;
  });
}

function loadData(key, defaultVal) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : defaultVal;
  } catch {
    return defaultVal;
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ====== Page System and Other Controls ======
// (… include your showAbout, showSettings, showRecent, showProfile, createPage, deletePage, showPage, editPage, savePage, answerAI, updateConnectionStatus …)
// // For brevity, assume these are unchanged from your last version, but ensure they call restoreSidebarState and applyThemeFromStorage in init.

// ====== Init ======
document.addEventListener('DOMContentLoaded', () => {
  applyThemeFromStorage();
  restoreSidebarState();
  updateConnectionStatus();

  document.getElementById('menu-btn')?.addEventListener('click', toggleSidebar);
  document.getElementById('ai-button')?.addEventListener('click', () => {
    const input = document.getElementById('ai-input');
    if (input.value) {
      answerAI(input.value);
      input.value = '';
    }
  });

  document.getElementById('ai-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('ai-button')?.click();
    }
  });

  document.getElementById('recent-link')?.addEventListener('click', e => { e.preventDefault(); showRecent(); });
  document.getElementById('settings-link')?.addEventListener('click', e => { e.preventDefault(); showSettings(); });
  document.getElementById('about-link')?.addEventListener('click', e => { e.preventDefault(); showAbout(); });
  document.getElementById('profile-link')?.addEventListener('click', e => { e.preventDefault(); showProfile(); });
  document.getElementById('create-page-btn')?.addEventListener('click', e => { e.preventDefault(); createPage(); });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log("✅ Service Worker registered"))
      .catch(err => console.error("❌ SW registration failed:", err));
  }
});
