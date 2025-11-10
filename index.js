// ====== MEV SECURITY LAYER ======
// Harden DOM interaction, enforce CSP-like policies, and disable risky features
(function secureClientApp() {
  document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("dragstart", e => e.preventDefault());
  document.addEventListener("selectstart", e => e.preventDefault());

  window.eval = () => console.warn('eval blocked');
  window.Function = function() { console.warn('Function constructor blocked'); };

  const originalSetTimeout = window.setTimeout;
  window.setTimeout = function(fn, delay) {
    if (typeof fn === 'string') {
      console.warn('setTimeout(string) blocked');
      return;
    }
    return originalSetTimeout(fn, delay);
  };

  document.head.insertAdjacentHTML("beforeend", `
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-Frame-Options" content="DENY">
    <meta http-equiv="Referrer-Policy" content="no-referrer">
    <meta http-equiv="Permissions-Policy" content="microphone=(), camera=(), geolocation=()">
  `);

  // Suppress console logs in production
  if (!location.hostname.includes('localhost')) {
    console.log = console.warn = console.error = () => {};
  }
})();

// ====== INDEX.JS (Merged Logic with Storage Bar & Fixes) ======

const STORAGE_KEYS = {
  pages: 'wiki_pages',
  users: 'wiki_users',
  currentUser: 'wiki_current_user',
  changes: 'wiki_changes',
  theme: 'wiki_theme',
  sidebar: 'wiki_sidebar',
  knowledge: 'wiki_knowledge'
};

// Utility
function loadData(key, defaultVal) {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : defaultVal;
}
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  updateStorageBar();
}
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.currentUser) || 'null');
  } catch {
    return null;
  }
}
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
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[match]));
}
function linkify(content) {
  const safe = escapeHTML(content);
  return safe.replace(/\[\[([^\]]+)\]\]/g, (_, t) => `<a href="#" onclick="showPage('${t}')">${t}</a>`);
}

function updateStorageBar() {
  const bar = document.getElementById('storage-bar-inner');
  if (!bar) return;
  if (navigator.storage && navigator.storage.estimate) {
    navigator.storage.estimate().then(est => {
      const usage = est.usage || 0;
      const quota = est.quota || 1;
      const percent = Math.min((usage / quota) * 100, 100).toFixed(1);
      bar.style.width = percent + '%';
      bar.title = `Used: ${(usage / 1024).toFixed(1)} KB / ${(quota / 1024).toFixed(1)} KB`;
    });
  } else {
    let totalBytes = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key) || '';
      totalBytes += (key.length + value.length) * 2;
    }
    const usedKB = (totalBytes / 1024).toFixed(1);
    bar.style.width = '100%';
    bar.title = `Approx. ${usedKB} KB used`;
  }
}

function applyThemeFromStorage() {
  const mode = localStorage.getItem(STORAGE_KEYS.theme);
  document.body.classList.toggle('dark', mode === 'dark');
}
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem(STORAGE_KEYS.theme, isDark ? 'dark' : 'light');
}
function restoreSidebarState() {
  const open = localStorage.getItem(STORAGE_KEYS.sidebar) === 'open';
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  if (sidebar && main) {
    sidebar.style.display = open ? 'block' : 'none';
    main.style.flex = open ? '1' : '1 1 100%';
  }
}
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  if (!sidebar || !main) return;
  const isOpen = sidebar.style.display === 'block';
  if (isOpen) {
    sidebar.style.display = 'none';
    main.style.flex = '1 1 100%';
    localStorage.setItem(STORAGE_KEYS.sidebar, 'closed');
  } else {
    sidebar.style.display = 'block';
    main.style.flex = '1';
    localStorage.setItem(STORAGE_KEYS.sidebar, 'open');
  }
}
function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  if (sidebar && main) {
    sidebar.style.display = 'none';
    main.style.flex = '1 1 100%';
  }
}

// Authentication
function setupAuth() {
  const s = {
    modal: 'auth-modal',
    username: 'auth-username',
    title: 'auth-modal-title',
    createLink: 'create-account-link',
    loginLink: 'login-link',
    logoutLink: 'logout-link',
    userStatus: 'user-status',
    submitBtn: 'submit-auth',
    cancelBtn: 'cancel-auth'
  };

  function getAllUsers() {
    return loadData(STORAGE_KEYS.users, []);
  }
  function saveAllUsers(users) {
    saveData(STORAGE_KEYS.users, users);
  }

  function updateUserStatus() {
    const user = getCurrentUser();
    const el = document.getElementById(s.userStatus);
    if (el) el.textContent = user ? `Logged in as ${user.name}` : 'Not logged in';
  }
  function updateAuthUI() {
    const user = getCurrentUser();
    const createLink = document.getElementById(s.createLink);
    const loginLink = document.getElementById(s.loginLink);
    const logoutLink = document.getElementById(s.logoutLink);
    if (createLink) createLink.style.display = user ? 'none' : 'block';
    if (loginLink) loginLink.style.display = user ? 'none' : 'block';
    if (logoutLink) logoutLink.style.display = user ? 'block' : 'none';
  }
  function showModal() {
    const modal = document.getElementById(s.modal);
    const usernameInput = document.getElementById(s.username);
    document.getElementById(s.title).textContent = "Enter Username";
    if (usernameInput) usernameInput.value = "";
    if (modal) modal.style.display = 'block';
    setTimeout(() => document.getElementById(s.username)?.focus(), 50);
  }
  function closeModal() {
    const modal = document.getElementById(s.modal);
    if (modal) modal.style.display = 'none';
  }
  function submitAuth() {
    const input = document.getElementById(s.username);
    const name = input ? input.value.trim() : '';
    if (!name) {
      alert("Please enter a username.");
      return;
    }
    let users = getAllUsers();
    let user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    if (!user) {
      user = { name, joined: new Date().toISOString(), edits: [] };
      users.push(user);
      saveAllUsers(users);
      alert(`✅ Account created for ${name}`);
    } else {
      alert(`👋 Welcome back, ${user.name}`);
    }
    localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
    closeModal();
    updateAuthUI();
    updateUserStatus();
    updateStorageBar();

    // Immediately show a default page or the first page
    const pages = loadData(STORAGE_KEYS.pages, {});
    const firstTitle = Object.keys(pages)[0];
    if (firstTitle) {
      showPage(firstTitle);
    } else {
      showAbout();
    }
  }
  function logout() {
    localStorage.removeItem(STORAGE_KEYS.currentUser);
    alert("Logged out.");
    updateAuthUI();
    updateUserStatus();
    updateStorageBar();
    showAbout();
  }

  document.getElementById(s.createLink)?.addEventListener('click', e => { e.preventDefault(); showModal(); });
  document.getElementById(s.loginLink)?.addEventListener('click', e => { e.preventDefault(); showModal(); });
  document.getElementById(s.logoutLink)?.addEventListener('click', e => { e.preventDefault(); logout(); });
  document.getElementById(s.submitBtn)?.addEventListener('click', e => { e.preventDefault(); submitAuth(); });
  document.getElementById(s.cancelBtn)?.addEventListener('click', e => { e.preventDefault(); closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  updateUserStatus();
  updateAuthUI();
}

// Wiki / Page Logic
function sanitizeContent(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML.replace(/\n/g, '<br>');
}
function restoreSectionContent() {
  document.querySelectorAll('section').forEach(section => {
    const id = section.id;
    const contentDiv = section.querySelector('.content');
    const saved = localStorage.getItem('wiki_' + id);
    if (saved && contentDiv) {
      contentDiv.innerHTML = saved;
    }
  });
}
function showAbout() {
  console.log("Navigating to About");
  closeSidebar();
  const container = document.getElementById('page-container');
  if (!container) {
    console.error("page-container element not found!");
    return;
  }
  container.innerHTML = `<section class="page"><h2>About</h2>
    <p><strong>MEV AI Wiki</strong> is an offline‑first encyclopedia powered by your browser. No tracking, no server.</p></section>`;
}
function showSettings() {
  console.log("Navigating to Settings");
  closeSidebar();
  const c = document.getElementById('page-container');
  if (!c) {
    console.error("page-container element not found!");
    return;
  }
  const section = document.createElement('section');
  section.className = 'page';
  section.innerHTML = `<h2>Settings</h2>`;
  const themeToggle = document.createElement('button');
  themeToggle.textContent = '🌗 Toggle Dark Mode';
  themeToggle.onclick = toggleTheme;
  section.appendChild(themeToggle);

  const exportBtn = document.createElement('button');
  exportBtn.textContent = '🡇 Export Backup';
  exportBtn.onclick = () => {
    const data = {
      pages: loadData(STORAGE_KEYS.pages, {}),
      users: loadData(STORAGE_KEYS.users, []),
      currentUser: getCurrentUser(),
      changes: loadData(STORAGE_KEYS.changes, {}),
      knowledge: loadData(STORAGE_KEYS.knowledge, {})
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mev‑backup‑${Date.now()}.mev.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  section.appendChild(exportBtn);

  const importInput = document.createElement('input');
  importInput.type = 'file';
  importInput.accept = 'application/json';
  importInput.style.display = 'none';
  importInput.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const d = JSON.parse(reader.result);
        saveData(STORAGE_KEYS.pages, d.pages || {});
        saveData(STORAGE_KEYS.users, d.users || []);
        saveData(STORAGE_KEYS.currentUser, d.currentUser || null);
        saveData(STORAGE_KEYS.changes, d.changes || []);
        saveData(STORAGE_KEYS.knowledge, d.knowledge || {});
        alert("✅ Backup imported successfully. Reloading...");
        location.reload();
      } catch {
        alert("❌ Invalid JSON");
      }
    };
    reader.readAsText(file);
  };
  const importBtn = document.createElement('button');
  importBtn.textContent = '🡅 Import Backup';
  importBtn.onclick = () => importInput.click();
  section.appendChild(importBtn);
  section.appendChild(importInput);

  const storageStats = document.createElement('pre');
  section.appendChild(storageStats);

  const clearBtn = document.createElement('button');
  clearBtn.textContent = '🧠 Clear AI Memory';
  clearBtn.onclick = () => {
    localStorage.removeItem(STORAGE_KEYS.knowledge);
    alert('AI memory cleared.');
    updateStats();
  };
  section.appendChild(clearBtn);

  function updateStats() {
    let totalBytes = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key) || '';
      totalBytes += (key.length + value.length) * 2;
    }
    const usedKB = Math.round(totalBytes / 1024);
    const quotaKB = 5120;
    storageStats.textContent = `Used: ${usedKB} KB\nQuota: ~${quotaKB} KB`;
  }
  updateStats();

  c.innerHTML = '';
  c.appendChild(section);
}
function showRecent() {
  console.log("Navigating to Recent Changes");
  closeSidebar();
  const changes = loadData(STORAGE_KEYS.changes, []);
  const c = document.getElementById('page-container');
  if (!c) {
    console.error("page-container element not found!");
    return;
  }
  const section = document.createElement('section');
  section.className = 'page';
  section.innerHTML = '<h2>Recent Changes</h2>';
  const ul = document.createElement('ul');
  changes.slice(0,50).forEach(ch => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = ch.title;
    link.addEventListener('click', e => { e.preventDefault(); showPage(ch.title); });
    li.innerHTML = `<strong>${ch.type}</strong> — `;
    li.appendChild(link);
    li.append(` by ${ch.user} at ${new Date(ch.time).toLocaleString()}`);
    ul.appendChild(li);
  });
  section.appendChild(ul);
  c.innerHTML = '';
  c.appendChild(section);
}
function showProfile() {
  console.log("Navigating to Profile");
  closeSidebar();
  const user = getCurrentUser();
  const c = document.getElementById('page-container');
  if (!c) {
    console.error("page-container element not found!");
    return;
  }
  if (!user) {
    alert("Not logged in.");
    return;
  }
  c.innerHTML = `<section class="page"><h2>My Profile</h2>
    <p>👤 <strong>Username:</strong> ${user.name}<br>
    📅 <strong>Joined:</strong> ${new Date(user.joined).toLocaleString()}</p></section>`;
}
function createPage(titleFromSearch = null) {
  console.log("Creating page:", titleFromSearch);
  const title = titleFromSearch || prompt("Enter new page title:");
  if (!title) return;
  const pages = loadData(STORAGE_KEYS.pages, {});
  const changes = loadData(STORAGE_KEYS.changes, []);
  const user = getCurrentUser();
  if (pages[title]) {
    alert("Page already exists.");
    showPage(title);
    return;
  }
  pages[title] = {
    title,
    content: "This is your new page. Click Edit to customize it.",
    lastEdited: new Date().toISOString(),
    createdBy: user ? user.name : 'Guest'
  };
  saveData(STORAGE_KEYS.pages, pages);
  changes.unshift({ type:'create', title, time:new Date().toISOString(), user:user?user.name:'Guest'});
  saveData(STORAGE_KEYS.changes, changes);
  alert(`✅ Page "${title}" created!`);
  showPage(title);
}
function deletePage(title) {
  console.log("Deleting page:", title);
  const pages = loadData(STORAGE_KEYS.pages, {});
  const changes = loadData(STORAGE_KEYS.changes, []);
  const user = getCurrentUser();
  if (!pages[title]) {
    alert("Page not found.");
    return;
  }
  if (!confirm(`Are you sure you want to delete the page "${title}"? This cannot be undone.`)) {
    return;
  }
  delete pages[title];
  saveData(STORAGE_KEYS.pages, pages);
  changes.unshift({ type:'delete', title, time:new Date().toISOString(), user:user?user.name:'Guest'});
  saveData(STORAGE_KEYS.changes, changes);
  alert(`✅ Page "${title}" deleted.`);
  showRecent();
}
function showPage(title) {
  console.log("Showing page:", title);
  closeSidebar();
  const pages = loadData(STORAGE_KEYS.pages, {});
  const page = pages[title];
  const c = document.getElementById('page-container');
  if (!c) {
    console.error("page-container element not found!");
    return;
  }
  if (!page) {
    const allTitles = Object.keys(pages);
    const suggestions = allTitles.filter(t => t.toLowerCase().includes(title.toLowerCase()));
    let html = `<section class="page"><h2>No page found for "${title}"</h2>`;
    if (suggestions.length) {
      html += `<p>Did you mean: ${suggestions.map(t => `<a href="#" onclick="showPage('${t}')">${t}</a>`).join(', ')}</p>`;
    }
    html += `<p>Would you like to create it?</p><button onclick="createPage('${title}')">Create Page</button></section>`;
    c.innerHTML = html;
    speak(`No page found for ${title}.`);
    return;
  }
  c.innerHTML = `<section class="page"><h2>${escapeHTML(page.title)}</h2>
    <div class="content">${linkify(page.content)}</div>
    <button class="edit-btn" id="edit-btn">Edit</button>
    <button class="delete-btn" id="delete-btn">Delete Page</button>
    </section>`;
  document.getElementById('edit-btn')?.addEventListener('click', () => editPage(title));
  document.getElementById('delete-btn')?.addEventListener('click', () => deletePage(title));
}
function editPage(title) {
  console.log("Editing page:", title);
  const user = getCurrentUser();
  if (!user) {
    alert("You must be logged in to edit sections.");
    return;
  }
  const pages = loadData(STORAGE_KEYS.pages, {});
  const page = pages[title];
  const c = document.getElementById('page-container');
  if (!c) {
    console.error("page-container element not found!");
    return;
  }
  c.innerHTML = `<section class="page"><h2>${escapeHTML(title)}</h2>
    <textarea class="editor">${page.content.replace(/<br\s*\/?>/gi, "\n")}</textarea>
    <button id="save-page-btn">Save</button>
    <button id="cancel-edit-btn">Cancel</button></section>`;
  document.getElementById('save-page-btn')?.addEventListener('click', () => savePage(title));
  document.getElementById('cancel-edit-btn')?.addEventListener('click', () => showPage(title));
}
function savePage(title) {
  console.log("Saving page:", title);
  const pages = loadData(STORAGE_KEYS.pages, {});
  const changes = loadData(STORAGE_KEYS.changes, []);
  const user = getCurrentUser();
  const raw = document.querySelector('.editor').value.trim();
  const safe = sanitizeContent(raw);
  pages[title].content = safe;
  pages[title].lastEdited = new Date().toISOString();
  saveData(STORAGE_KEYS.pages, pages);
  changes.unshift({ type:'edit', title, time:new Date().toISOString(), user:user?user.name:'Guest'});
  saveData(STORAGE_KEYS.changes, changes);
  alert("✅ Page saved.");
  showPage(title);
}
function answerAI(query) {
  console.log("AI query:", query);
  const txt = query.trim();
  if (!txt) return;
  const pages = loadData(STORAGE_KEYS.pages, {});
  if (pages[txt]) {
    showPage(txt);
    return;
  }
  const all = Object.keys(pages);
  const suggest = all.filter(t => t.toLowerCase().includes(txt.toLowerCase()));
  const c = document.getElementById('page-container');
  if (!c) {
    console.error("page-container element not found!");
    return;
  }
  if (suggest.length) {
    c.innerHTML = `<section class="page"><h2>Closest matches for "${txt}"</h2>
      <ul>${suggest.map(t => `<li><a href="#" onclick="showPage('${t}')">${t}</a></li>`).join('')}</ul>
      <p>Or you can create the page.</p>
      <button onclick="createPage('${txt}')">Create Page "${txt}"</button></section>`;
    speak(`Found similar pages for ${txt}.`);
    return;
  }
  c.innerHTML = `<section class="page"><h2>No page found for "${txt}"</h2>
    <p>Would you like to create it?</p>
    <button onclick="createPage('${txt}')">Create Page "${txt}"</button></section>`;
  speak(`No local page found for ${txt}.`);
}

function updateConnectionStatus() {
  const el = document.getElementById('status-indicator');
  const banner = document.getElementById('offline-message');
  const online = navigator.onLine;

  if (el) el.textContent = online ? '🟢 Online' : '🔴 Offline';
  if (banner) banner.style.display = online ? 'none' : 'block';
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  applyThemeFromStorage();
  restoreSidebarState();
  setupAuth();
  restoreSectionContent();
  updateConnectionStatus();
  updateStorageBar();

  // ✅ Add live online/offline listeners
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);

  const updated = document.getElementById('last-updated');
if (updated) {
  updated.textContent = new Date(document.lastModified).toLocaleString();
}
  
  document.getElementById('menu-btn')?.addEventListener('click', toggleSidebar);
  document.getElementById('ai-button')?.addEventListener('click', () => {
    const inp = document.getElementById('ai-input');
    if (inp && inp.value.trim()) {
      answerAI(inp.value.trim());
      inp.value = '';
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
  document.getElementById('create-page-btn')?.addEventListener('click', e => { e.preventDefault(); createPage(); });
  document.getElementById('profile-link')?.addEventListener('click', e => { e.preventDefault(); showProfile(); });

 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    alert('🆕 A new version is now active. Please refresh the page.');
  });
}
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('✅ Service Worker registered'))
      .catch(err => console.error('❌ SW registration failed:', err));
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => {
      console.log('✅ Service Worker registered');

      // NEW: Show cache updating status in footer
      const statusEl = document.getElementById('app-version');
      if (statusEl && reg.installing) {
        statusEl.textContent += ' (Updating cache…)';
      }
    })
    .catch(err => console.error('❌ SW registration failed:', err));
}