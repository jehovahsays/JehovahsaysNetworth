// ====== Theme & Sidebar Handling ======
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

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const isOpen = sidebar.style.display === 'block';

  sidebar.style.display = isOpen ? 'none' : 'block';
  main.style.flex = isOpen ? '1 1 100%' : '1';
  localStorage.setItem('wiki_sidebar', isOpen ? 'closed' : 'open');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  sidebar.style.display = 'none';
  main.style.flex = '1 1 100%';
}

function restoreSidebarState() {
  const show = localStorage.getItem('wiki_sidebar') === 'open';
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  sidebar.style.display = show ? 'block' : 'none';
  main.style.flex = show ? '1' : '1 1 100%';
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
    speechSynthesis.speak(msg);
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
  const safeContent = escapeHTML(content);
  return safeContent.replace(/\[\[([^\]]+)\]\]/g, (_, title) => {
    return `<a href="#" onclick="showPage('${title}')">${title}</a>`;
  });
}

function loadData(key, defaultVal) {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : defaultVal;
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ====== Page System ======
function showAbout() {
  closeSidebar();
  document.getElementById('page-container').innerHTML = `
    <section class="page">
      <h2>About</h2>
      <p><strong>MEV AI Wiki</strong> is an offline-first encyclopedia powered by your browser. No tracking, no server.</p>
    </section>`;
}

function showSettings() {
  closeSidebar();
  const c = document.getElementById('page-container');
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
      currentUser: loadData(STORAGE_KEYS.currentUser, null),
      changes: loadData(STORAGE_KEYS.changes, []),
      knowledge: loadData(STORAGE_KEYS.knowledge, {})
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mev-backup-${Date.now()}.mev.json`;
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
        const data = JSON.parse(reader.result);
        saveData(STORAGE_KEYS.pages, data.pages || {});
        saveData(STORAGE_KEYS.users, data.users || []);
        saveData(STORAGE_KEYS.currentUser, data.currentUser || null);
        saveData(STORAGE_KEYS.changes, data.changes || []);
        saveData(STORAGE_KEYS.knowledge, data.knowledge || {});
        alert("✅ Backup imported successfully. Reloading...");
        location.reload();
      } catch (err) {
        alert("❌ Import failed. Invalid JSON.");
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

  c.innerHTML = '';
  c.appendChild(section);

  function updateStats() {
    if (navigator.storage && navigator.storage.estimate) {
      navigator.storage.estimate().then(est => {
        storageStats.textContent = `Used: ${Math.round(est.usage / 1024)} KB\nQuota: ${Math.round(est.quota / 1024)} KB`;
      });
    } else {
      storageStats.textContent = `LocalStorage keys: ${Object.keys(localStorage).length}`;
    }
  }

  updateStats();
}

function showRecent() {
  closeSidebar();
  const changes = loadData(STORAGE_KEYS.changes, []);
  const c = document.getElementById('page-container');

  const section = document.createElement('section');
  section.className = 'page';
  section.innerHTML = '<h2>Recent Changes</h2>';
  const ul = document.createElement('ul');

  changes.slice(0, 50).forEach(ch => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = ch.title;
    link.onclick = () => {
      showPage(ch.title);
      return false;
    };
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
  closeSidebar();
  const user = loadData(STORAGE_KEYS.currentUser, null);
  if (!user) return alert("You're not logged in.");
  document.getElementById('page-container').innerHTML = `
    <section class="page">
      <h2>My Profile</h2>
      <p>👤 <strong>Username:</strong> ${user.name}<br>
      📅 <strong>Joined:</strong> ${new Date(user.joined).toLocaleString()}</p>
    </section>`;
}

function createPage(titleFromSearch = null) {
  const title = titleFromSearch || prompt("Enter new page title:");
  if (!title) return;

  const pages = loadData(STORAGE_KEYS.pages, {});
  const changes = loadData(STORAGE_KEYS.changes, []);
  const user = loadData(STORAGE_KEYS.currentUser, null);

  if (pages[title]) {
    alert("Page already exists.");
    showPage(title);
    return;
  }

  const newPage = {
    title,
    content: "This is your new page. Click Edit to customize it.",
    lastEdited: new Date().toISOString(),
    createdBy: user ? user.name : 'Guest'
  };
  pages[title] = newPage;
  saveData(STORAGE_KEYS.pages, pages);

  changes.unshift({
    type: 'create',
    title,
    time: new Date().toISOString(),
    user: user ? user.name : 'Guest'
  });
  saveData(STORAGE_KEYS.changes, changes);

  alert(`✅ Page "${title}" created!`);
  showPage(title);
}

function deletePage(title) {
  const pages = loadData(STORAGE_KEYS.pages, {});
  const changes = loadData(STORAGE_KEYS.changes, []);
  const user = loadData(STORAGE_KEYS.currentUser, null);

  if (!pages[title]) {
    alert("Page not found.");
    return;
  }
  if (!confirm(`Are you sure you want to delete the page "${title}"? This cannot be undone.`)) {
    return;
  }

  delete pages[title];
  saveData(STORAGE_KEYS.pages, pages);

  changes.unshift({
    type: 'delete',
    title,
    time: new Date().toISOString(),
    user: user ? user.name : 'Guest'
  });
  saveData(STORAGE_KEYS.changes, changes);

  alert(`✅ Page "${title}" deleted.`);
  showRecent();
}

function showPage(title) {
  closeSidebar();
  const pages = loadData(STORAGE_KEYS.pages, {});
  const page = pages[title];
  const c = document.getElementById('page-container');

  if (!page) {
    const allTitles = Object.keys(pages);
    const suggestions = allTitles.filter(t => t.toLowerCase().includes(title.toLowerCase()));
    let suggestionHtml = '';
    if (suggestions.length) {
      suggestionHtml = `<p>Did you mean: ${suggestions.map(t => `<a href="#" onclick="showPage('${t}')">${t}</a>`).join(', ')}?</p>`;
    }
    c.innerHTML = `
      <section class="page">
        <h2>No page found for "${title}"</h2>
        ${suggestionHtml}
        <p>Would you like to create it?</p>
        <button onclick="createPage('${title}')">Create Page</button>
      </section>`;
    speak(`No page found for ${title}.`);
    return;
  }

  c.innerHTML = `
    <section class="page">
      <h2>${title}</h2>
      <div class="content">${linkify(page.content)}</div>
      <button class="edit-btn" id="edit-btn">Edit</button>
      <button class="delete-btn" id="delete-btn">Delete Page</button>
    </section>`;

  document.getElementById('edit-btn')?.addEventListener('click', () => editPage(title));
  document.getElementById('delete-btn')?.addEventListener('click', () => deletePage(title));
}

function editPage(title) {
  const pages = loadData(STORAGE_KEYS.pages, {});
  const page = pages[title];
  const c = document.getElementById('page-container');

  c.innerHTML = `
    <section class="page">
      <h2>${title}</h2>
      <textarea class="editor">${page.content.replace(/<br>/g, '\n')}</textarea>
      <button id="save-page-btn">Save</button>
      <button id="cancel-edit-btn">Cancel</button>
    </section>`;

  document.getElementById('save-page-btn')?.addEventListener('click', () => savePage(title));
  document.getElementById('cancel-edit-btn')?.addEventListener('click', () => showPage(title));
}

function savePage(title) {
  const pages = loadData(STORAGE_KEYS.pages, {});
  const changes = loadData(STORAGE_KEYS.changes, []);
  const user = loadData(STORAGE_KEYS.currentUser, null);
  const textarea = document.querySelector('.editor');
  const newContent = textarea.value.trim().replace(/\n/g, '<br>');

  pages[title].content = newContent;
  pages[title].lastEdited = new Date().toISOString();
  saveData(STORAGE_KEYS.pages, pages);

  changes.unshift({
    type: 'edit',
    title,
    time: new Date().toISOString(),
    user: user ? user.name : 'Guest'
  });
  saveData(STORAGE_KEYS.changes, changes);

  alert("✅ Page saved.");
  showPage(title);
}

// ====== AI Input & Smart Lookup ======
function answerAI(query) {
  const text = query.trim();
  if (!text) return;

  const pages = loadData(STORAGE_KEYS.pages, {});
  if (pages[text]) {
    showPage(text);
    return;
  }

  const allTitles = Object.keys(pages);
  const suggestions = allTitles.filter(t => t.toLowerCase().includes(text.toLowerCase()));
  const c = document.getElementById('page-container');

  if (suggestions.length) {
    c.innerHTML = `
      <section class="page">
        <h2>Closest matches for "${text}"</h2>
        <ul>
          ${suggestions.map(t => `<li><a href="#" onclick="showPage('${t}')">${t}</a></li>`).join('')}
        </ul>
        <p>Or you can create the page.</p>
        <button onclick="createPage('${text}')">Create Page "${text}"</button>
      </section>`;
    speak(`Found similar pages for ${text}.`);
    return;
  }

  c.innerHTML = `
    <section class="page">
      <h2>No page found for "${text}"</h2>
      <p>Would you like to create it?</p>
      <button onclick="createPage('${text}')">Create Page "${text}"</button>
    </section>`;
  speak(`No local page found for ${text}.`);
}

// ====== Online Status Indicator ======
function updateConnectionStatus() {
  const indicator = document.getElementById('status-indicator');
  indicator.textContent = navigator.onLine ? '🟢 Online' : '🔴 Offline';
}
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

// ====== Initialization ======
document.addEventListener('DOMContentLoaded', () => {
  applyThemeFromStorage();
  restoreSidebarState();
  updateConnectionStatus();

  document.getElementById('menu-btn')?.addEventListener('click', toggleSidebar);
  document.getElementById('ai-input')?.focus();

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
