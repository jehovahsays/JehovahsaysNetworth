// ========= wiki.js =========
// Safe section editing with login, sanitization, and feedback

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('wiki_current_user') || 'null');
  } catch {
    return null;
  }
}

// Sanitize input: escape all HTML, only allow line breaks
function sanitizeHTML(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML.replace(/\n/g, '<br>');
}

// Load saved content into .content divs on load
function restoreSectionContent() {
  document.querySelectorAll('section').forEach(section => {
    const id = section.id;
    const saved = localStorage.getItem('wiki_' + id);
    const contentDiv = section.querySelector('.content');
    if (saved && contentDiv) {
      contentDiv.innerHTML = saved;
    }
  });
}

// Main editor function (auth required)
function editSection(id) {
  const user = getCurrentUser();
  if (!user) {
    alert("You must be logged in to edit sections.");
    return;
  }

  const section = document.getElementById(id);
  if (!section) return;

  const contentDiv = section.querySelector('.content');
  if (!contentDiv) return;

  const originalHTML = contentDiv.innerHTML;

  // Prepare textarea
  const textarea = document.createElement('textarea');
  textarea.className = 'editor';
  textarea.value = originalHTML
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?[^>]+(>|$)/g, ''); // Strip all HTML tags except <br>
  contentDiv.innerHTML = '';
  contentDiv.appendChild(textarea);
  textarea.focus();

  // Create button row
  const btnRow = document.createElement('div');
  btnRow.style.marginTop = '10px';

  // Save button
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.className = 'edit-btn';
  saveBtn.onclick = () => {
    const rawInput = textarea.value.trim();
    const safeHTML = sanitizeHTML(rawInput);
    contentDiv.innerHTML = safeHTML;
    localStorage.setItem('wiki_' + id, safeHTML);

    // Update user edits
    let users;
    try {
      users = JSON.parse(localStorage.getItem('wiki_users') || '[]');
    } catch {
      users = [];
    }

    const userIndex = users.findIndex(u => u.name === user.name);
    if (userIndex !== -1) {
      if (!Array.isArray(users[userIndex].edits)) users[userIndex].edits = [];
      users[userIndex].edits.push({ section: id, time: new Date().toISOString() });
      localStorage.setItem('wiki_users', JSON.stringify(users));
      localStorage.setItem('wiki_current_user', JSON.stringify(users[userIndex]));
    }

    // Feedback
    if (typeof speak === 'function') {
      speak("Section saved!");
    } else {
      const msg = new SpeechSynthesisUtterance("Section saved!");
      msg.lang = 'en-US';
      speechSynthesis.speak(msg);
    }
  };

  // Cancel button
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.className = 'edit-btn';
  cancelBtn.style.marginLeft = '10px';
  cancelBtn.onclick = () => {
    contentDiv.innerHTML = originalHTML;
  };

  btnRow.appendChild(saveBtn);
  btnRow.appendChild(cancelBtn);
  contentDiv.appendChild(btnRow);
}

// Run on page load
window.addEventListener('DOMContentLoaded', restoreSectionContent);