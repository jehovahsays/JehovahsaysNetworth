// ========= wiki.js =========
// Safe section editing with login, sanitization, and feedback

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('wiki_current_user') || 'null');
  } catch {
    return null;
  }
}

function sanitizeHTML(input) {
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

function editSection(id) {
  const user = getCurrentUser();
  if (!user) {
    alert("You must be logged in to edit sections.");
    return;
  }

  const section = document.getElementById(id);
  const contentDiv = section?.querySelector('.content');
  if (!section || !contentDiv) return;

  const originalHTML = contentDiv.innerHTML;

  const textarea = document.createElement('textarea');
  textarea.className = 'editor';
  textarea.value = originalHTML
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?[^>]+(>|$)/g, '');

  contentDiv.innerHTML = '';
  contentDiv.appendChild(textarea);
  textarea.focus();

  const btnRow = document.createElement('div');
  btnRow.style.marginTop = '10px';

  const saveBtn = document.createElement('button');
  saveBtn.className = 'edit-btn';
  saveBtn.textContent = 'Save';
  saveBtn.onclick = () => {
    const raw = textarea.value.trim();
    const safe = sanitizeHTML(raw);
    contentDiv.innerHTML = safe;
    localStorage.setItem('wiki_' + id, safe);

    let users = [];
    try {
      users = JSON.parse(localStorage.getItem('wiki_users') || '[]');
    } catch {
      users = [];
    }
    const idx = users.findIndex(u => u.name === user.name);
    if (idx !== -1) {
      if (!Array.isArray(users[idx].edits)) users[idx].edits = [];
      users[idx].edits.push({ section: id, time: new Date().toISOString() });
      localStorage.setItem('wiki_users', JSON.stringify(users));
      localStorage.setItem('wiki_current_user', JSON.stringify(users[idx]));
    }

    if (typeof speak === 'function') {
      speak("Section saved!");
    } else if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance("Section saved!");
      msg.lang = 'en-US';
      window.speechSynthesis.speak(msg);
    }
  };

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'edit-btn';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.style.marginLeft = '10px';
  cancelBtn.onclick = () => {
    contentDiv.innerHTML = originalHTML;
  };

  btnRow.appendChild(saveBtn);
  btnRow.appendChild(cancelBtn);
  contentDiv.appendChild(btnRow);
}

window.addEventListener('DOMContentLoaded', restoreSectionContent);
