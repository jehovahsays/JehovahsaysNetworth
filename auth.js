// ======== Authentication System for MEV Wiki ========

// Utility: Get current user
function getUser() {
  return JSON.parse(localStorage.getItem('mevUser') || 'null');
}

// Utility: Get all users (stored as array)
function getAllUsers() {
  return JSON.parse(localStorage.getItem('mevUsers') || '[]');
}

// Utility: Save user list
function saveAllUsers(users) {
  localStorage.setItem('mevUsers', JSON.stringify(users));
}

// ====== Show Modal for Signup/Login ======
let authAction = "signup";

function showCreateAccount() {
  authAction = "signup";
  document.getElementById('auth-modal-title').textContent = "Create Account";
  document.getElementById('auth-username').value = "";
  document.getElementById('auth-modal').style.display = 'block';
}

function showLogin() {
  authAction = "login";
  document.getElementById('auth-modal-title').textContent = "Log In";
  document.getElementById('auth-username').value = "";
  document.getElementById('auth-modal').style.display = 'block';
}

function closeAuthModal() {
  document.getElementById('auth-modal').style.display = 'none';
}

// ====== Submit Modal (Create or Login) ======
function submitAuthModal() {
  const name = document.getElementById('auth-username').value.trim();
  if (!name) return alert("Please enter a username.");

  let users = getAllUsers();

  if (authAction === "signup") {
    // Check if username already exists
    if (users.find(u => u.name.toLowerCase() === name.toLowerCase())) {
      return alert("Username already exists. Please log in.");
    }

    const newUser = {
      name,
      joined: new Date().toISOString(),
      edits: []
    };
    users.push(newUser);
    saveAllUsers(users);
    localStorage.setItem('mevUser', JSON.stringify(newUser));
    alert(`✅ Account created for ${name}`);
  } else if (authAction === "login") {
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    if (!user) return alert("User not found. Try creating an account first.");
    localStorage.setItem('mevUser', JSON.stringify(user));
    alert(`👋 Welcome back, ${user.name}`);
  }

  updateUserStatus();
  updateAuthUI();
  closeAuthModal();
}

// ====== Log Out ======
function logout() {
  localStorage.removeItem('mevUser');
  alert("Logged out.");
  updateUserStatus();
  updateAuthUI();
}

// ====== Update UI Status Text ======
function updateUserStatus() {
  const user = getUser();
  const status = document.getElementById('user-status');
  if (status) {
    status.textContent = user ? `Logged in as ${user.name}` : 'Not logged in';
  }
}

// ====== Show/Hide Auth Links ======
function updateAuthUI() {
  const user = getUser();
  const createLink = document.getElementById('create-account-link');
  const loginLink = document.getElementById('login-link');
  const logoutLink = document.getElementById('logout-link');

  if (user) {
    if (createLink) createLink.style.display = 'none';
    if (loginLink) loginLink.style.display = 'none';
    if (logoutLink) logoutLink.style.display = 'block';
  } else {
    if (createLink) createLink.style.display = 'block';
    if (loginLink) loginLink.style.display = 'block';
    if (logoutLink) logoutLink.style.display = 'none';
  }
}

// ====== Show Profile Info ======
function showProfile() {
  const user = getUser();
  if (!user) return alert("You're not logged in.");
  alert(`👤 Username: ${user.name}\n📅 Joined: ${new Date(user.joined).toLocaleString()}`);
}

// ====== Init on Load ======
document.addEventListener('DOMContentLoaded', () => {
  updateUserStatus();
  updateAuthUI();
});