// ===== Authentication System =====
let authMode = "signup";

const SELECTORS = {
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

// ===== Storage Utilities =====
function getUser() {
  try {
    return JSON.parse(localStorage.getItem('wiki_current_user') || 'null');
  } catch {
    return null;
  }
}
function getAllUsers() {
  try {
    return JSON.parse(localStorage.getItem('wiki_users') || '[]');
  } catch {
    return [];
  }
}
function saveCurrentUser(user) {
  localStorage.setItem('wiki_current_user', JSON.stringify(user));
}
function saveAllUsers(users) {
  localStorage.setItem('wiki_users', JSON.stringify(users));
}

// ===== Auth Modal Control =====
function showCreateAccount() {
  authMode = "signup";
  document.getElementById(SELECTORS.title).textContent = "Create Account";
  document.getElementById(SELECTORS.username).value = "";
  document.getElementById(SELECTORS.modal).style.display = 'block';
  setTimeout(() => document.getElementById(SELECTORS.username)?.focus(), 50);
}

function showLogin() {
  authMode = "login";
  document.getElementById(SELECTORS.title).textContent = "Log In";
  document.getElementById(SELECTORS.username).value = "";
  document.getElementById(SELECTORS.modal).style.display = 'block';
  setTimeout(() => document.getElementById(SELECTORS.username)?.focus(), 50);
}

function closeAuthModal() {
  document.getElementById(SELECTORS.modal).style.display = 'none';
}

// ===== Auth Submission Logic =====
function submitAuthModal() {
  const name = document.getElementById(SELECTORS.username).value.trim();
  if (!name) return alert("Please enter a username.");

  let users = getAllUsers();

  if (authMode === "signup") {
    if (users.find(u => u.name.toLowerCase() === name.toLowerCase())) {
      return alert("Username already exists. Please log in.");
    }
    const newUser = { name, joined: new Date().toISOString(), edits: [] };
    users.push(newUser);
    saveAllUsers(users);
    saveCurrentUser(newUser);
    alert(`✅ Account created for ${name}`);
  } else {
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    if (!user) return alert("User not found. Try creating an account.");
    saveCurrentUser(user);
    alert(`👋 Welcome back, ${user.name}`);
  }

  closeAuthModal();
  updateAuthUI();
  updateUserStatus();
}

function logout() {
  localStorage.removeItem('wiki_current_user');
  alert("Logged out.");
  updateAuthUI();
  updateUserStatus();
}

// ===== UI Update Functions =====
function updateUserStatus() {
  const user = getUser();
  const el = document.getElementById(SELECTORS.userStatus);
  if (el) {
    el.textContent = user ? `Logged in as ${user.name}` : 'Not logged in';
  }
}

function updateAuthUI() {
  const user = getUser();
  const create = document.getElementById(SELECTORS.createLink);
  const login = document.getElementById(SELECTORS.loginLink);
  const logoutBtn = document.getElementById(SELECTORS.logoutLink);

  if (create) create.style.display = user ? 'none' : 'block';
  if (login) login.style.display = user ? 'none' : 'block';
  if (logoutBtn) logoutBtn.style.display = user ? 'block' : 'none';
}

// ===== Event Handlers =====
document.addEventListener('DOMContentLoaded', () => {
  updateUserStatus();
  updateAuthUI();

  document.getElementById(SELECTORS.createLink)?.addEventListener('click', e => {
    e.preventDefault();
    showCreateAccount();
  });

  document.getElementById(SELECTORS.loginLink)?.addEventListener('click', e => {
    e.preventDefault();
    showLogin();
  });

  document.getElementById(SELECTORS.logoutLink)?.addEventListener('click', e => {
    e.preventDefault();
    logout();
  });

  document.getElementById(SELECTORS.submitBtn)?.addEventListener('click', e => {
    e.preventDefault();
    submitAuthModal();
  });

  document.getElementById(SELECTORS.cancelBtn)?.addEventListener('click', e => {
    e.preventDefault();
    closeAuthModal();
  });

  // Submit on Enter key
  document.getElementById(SELECTORS.username)?.addEventListener('keydown', e => {
    if (e.key === 'Enter') submitAuthModal();
  });
});

// Escape key closes modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAuthModal();
  }
});