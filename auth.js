// ===== Authentication System =====
let authMode = "signup";

const SELECTORS = {
  modal: 'auth-modal',
  username: 'auth-username',
  password: 'auth-password', // NEW
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
  return JSON.parse(localStorage.getItem('wiki_current_user') || 'null');
}
function getAllUsers() {
  return JSON.parse(localStorage.getItem('wiki_users') || '[]');
}
function saveCurrentUser(user) {
  localStorage.setItem('wiki_current_user', JSON.stringify(user));
}
function saveAllUsers(users) {
  localStorage.setItem('wiki_users', JSON.stringify(users));
}

// ===== Simple hash (not secure, just for demo)
function hash(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) - hash) + text.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString();
}

// ===== Auth Modal Control =====
function showCreateAccount() {
  authMode = "signup";
  document.getElementById(SELECTORS.title).textContent = "Create Account";
  document.getElementById(SELECTORS.username).value = "";
  document.getElementById(SELECTORS.password).value = "";
  document.getElementById(SELECTORS.modal).style.display = 'block';
  setTimeout(() => document.getElementById(SELECTORS.username)?.focus(), 50);
}

function showLogin() {
  authMode = "login";
  document.getElementById(SELECTORS.title).textContent = "Log In";
  document.getElementById(SELECTORS.username).value = "";
  document.getElementById(SELECTORS.password).value = "";
  document.getElementById(SELECTORS.modal).style.display = 'block';
  setTimeout(() => document.getElementById(SELECTORS.username)?.focus(), 50);
}

function closeAuthModal() {
  document.getElementById(SELECTORS.modal).style.display = 'none';
}

// ===== Auth Submission Logic =====
function submitAuthModal() {
  const name = document.getElementById(SELECTORS.username).value.trim();
  const password = document.getElementById(SELECTORS.password).value.trim();
  if (!name || !password) return alert("Please enter both username and password.");

  const users = getAllUsers();
  const pwHash = hash(password);

  if (authMode === "signup") {
    if (users.find(u => u.name.toLowerCase() === name.toLowerCase())) {
      return alert("Username already exists. Please log in.");
    }
    const newUser = { name, password: pwHash, joined: new Date().toISOString(), edits: [] };
    users.push(newUser);
    saveAllUsers(users);
    saveCurrentUser(newUser);
    alert(`✅ Account created for ${name}`);
  } else {
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase() && u.password === pwHash);
    if (!user) return alert("❌ Invalid username or password.");
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
  document.getElementById(SELECTORS.createLink).style.display = user ? 'none' : 'block';
  document.getElementById(SELECTORS.loginLink).style.display = user ? 'none' : 'block';
  document.getElementById(SELECTORS.logoutLink).style.display = user ? 'block' : 'none';
}

// ===== Event Handlers =====
document.addEventListener('DOMContentLoaded', () => {
  updateUserStatus();
  updateAuthUI();

  document.getElementById(SELECTORS.createLink)?.addEventListener('click', showCreateAccount);
  document.getElementById(SELECTORS.loginLink)?.addEventListener('click', showLogin);
  document.getElementById(SELECTORS.logoutLink)?.addEventListener('click', logout);
  document.getElementById(SELECTORS.submitBtn)?.addEventListener('click', submitAuthModal);
  document.getElementById(SELECTORS.cancelBtn)?.addEventListener('click', closeAuthModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAuthModal();
});
