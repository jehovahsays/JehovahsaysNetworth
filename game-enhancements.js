// Add these variables to your existing code (at the top of your script)
let playerScore = 0;
let playerHealth = 3;
let playerSize = 1.0;
let bullets = [];
let boss = null;
let bossHealth = 5;
let bossAttackTimer = 0;
let gameActive = true;

// Create a boss entity
function createBoss() {
  const geometry = new THREE.BoxGeometry(5, 5, 5);
  const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  boss = new THREE.Mesh(geometry, material);
  boss.position.set(0, 5, -20);
  scene.add(boss);
  bossHealth = 5;
}

// Create bullet function
function createBullet(position, direction) {
  const geometry = new THREE.SphereGeometry(0.5, 8, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const bullet = new THREE.Mesh(geometry, material);
  
  // Set bullet position to player position
  bullet.position.copy(position);
  
  // Add direction and speed properties
  bullet.direction = direction;
  bullet.speed = 2.0;
  bullet.isPlayerBullet = true;
  
  scene.add(bullet);
  bullets.push(bullet);
}

// Create boss bullet function
function createBossBullet() {
  if (!boss || !gameActive) return;
  
  const geometry = new THREE.SphereGeometry(0.8, 8, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0xff4500 });
  const bullet = new THREE.Mesh(geometry, material);
  
  // Set bullet position to boss position
  bullet.position.copy(boss.position);
  
  // Calculate direction towards player
  const direction = new THREE.Vector3();
  direction.subVectors(camera.position, boss.position).normalize();
  
  bullet.direction = direction;
  bullet.speed = 1.0;
  bullet.isPlayerBullet = false;
  
  scene.add(bullet);
  bullets.push(bullet);
}

// Update bullets function
function updateBullets(deltaTime) {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
    
    // Move bullet
    bullet.position.x += bullet.direction.x * bullet.speed;
    bullet.position.y += bullet.direction.y * bullet.speed;
    bullet.position.z += bullet.direction.z * bullet.speed;
    
    // Check for out of bounds
    if (bullet.position.distanceTo(camera.position) > 100) {
      scene.remove(bullet);
      bullets.splice(i, 1);
      continue;
    }
    
    // Check for collisions
    if (bullet.isPlayerBullet) {
      // Player bullet hitting boss
      if (boss && bullet.position.distanceTo(boss.position) < 3) {
        bossHealth--;
        scene.remove(bullet);
        bullets.splice(i, 1);
        
        // Boss defeated
        if (bossHealth <= 0) {
          scene.remove(boss);
          boss = null;
          playerScore += 10;
          playerSize += 0.2;
          updatePlayerSize();
          showNotification("You defeated the boss! +10 points");
          
          // Respawn boss after 5 seconds
          setTimeout(createBoss, 5000);
        }
      }
    } else {
      // Boss bullet hitting player
      if (bullet.position.distanceTo(camera.position) < 2) {
        playerHealth--;
        scene.remove(bullet);
        bullets.splice(i, 1);
        
        if (playerHealth <= 0) {
          gameActive = false;
          playerScore -= 5;
          showNotification("You died! -5 points");
          showRespawnButton();
        }
      }
    }
  }
}

// Update boss movement and attacks
function updateBoss(deltaTime) {
  if (!boss || !gameActive) return;
  
  // Simple boss movement - float around
  boss.position.y = 5 + Math.sin(Date.now() * 0.001) * 2;
  boss.position.x = Math.sin(Date.now() * 0.0005) * 10;
  
  // Boss looking at player
  boss.lookAt(camera.position);
  
  // Boss attack timer
  bossAttackTimer += deltaTime;
  if (bossAttackTimer > 2) { // Attack every 2 seconds
    createBossBullet();
    bossAttackTimer = 0;
  }
}

// Update player size
function updatePlayerSize() {
  if (player) { // Assuming you have a player model
    player.scale.set(playerSize, playerSize, playerSize);
  }
}

// Create UI elements
function createUI() {
  // Score display
  const scoreElement = document.createElement('div');
  scoreElement.id = 'scoreDisplay';
  scoreElement.style.position = 'absolute';
  scoreElement.style.top = '10px';
  scoreElement.style.left = '10px';
  scoreElement.style.color = 'white';
  scoreElement.style.fontFamily = 'Arial, sans-serif';
  scoreElement.style.fontSize = '18px';
  scoreElement.style.fontWeight = 'bold';
  document.body.appendChild(scoreElement);
  
  // Health display
  const healthElement = document.createElement('div');
  healthElement.id = 'healthDisplay';
  healthElement.style.position = 'absolute';
  healthElement.style.top = '40px';
  healthElement.style.left = '10px';
  healthElement.style.color = 'white';
  healthElement.style.fontFamily = 'Arial, sans-serif';
  healthElement.style.fontSize = '18px';
  healthElement.style.fontWeight = 'bold';
  document.body.appendChild(healthElement);
  
  // Notification area
  const notificationElement = document.createElement('div');
  notificationElement.id = 'notification';
  notificationElement.style.position = 'absolute';
  notificationElement.style.top = '50%';
  notificationElement.style.left = '50%';
  notificationElement.style.transform = 'translate(-50%, -50%)';
  notificationElement.style.color = 'white';
  notificationElement.style.fontFamily = 'Arial, sans-serif';
  notificationElement.style.fontSize = '24px';
  notificationElement.style.fontWeight = 'bold';
  notificationElement.style.textAlign = 'center';
  notificationElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  notificationElement.style.padding = '20px';
  notificationElement.style.borderRadius = '10px';
  notificationElement.style.display = 'none';
  document.body.appendChild(notificationElement);
}

// Update UI
function updateUI() {
  const scoreElement = document.getElementById('scoreDisplay');
  const healthElement = document.getElementById('healthDisplay');
  
  if (scoreElement) {
    scoreElement.textContent = `Score: ${playerScore}`;
  }
  
  if (healthElement) {
    healthElement.textContent = `Health: ${playerHealth}`;
  }
}

// Show notification
function showNotification(message) {
  const notificationElement = document.getElementById('notification');
  if (notificationElement) {
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';
    
    // Hide after 3 seconds
    setTimeout(() => {
      notificationElement.style.display = 'none';
    }, 3000);
  }
}

// Show respawn button
function showRespawnButton() {
  const respawnButton = document.createElement('button');
  respawnButton.id = 'respawnButton';
  respawnButton.textContent = 'Respawn';
  respawnButton.style.position = 'absolute';
  respawnButton.style.top = '60%';
  respawnButton.style.left = '50%';
  respawnButton.style.transform = 'translate(-50%, -50%)';
  respawnButton.style.padding = '10px 20px';
  respawnButton.style.fontSize = '20px';
  respawnButton.style.backgroundColor = '#4CAF50';
  respawnButton.style.color = 'white';
  respawnButton.style.border = 'none';
  respawnButton.style.borderRadius = '5px';
  respawnButton.style.cursor = 'pointer';
  
  respawnButton.addEventListener('click', respawnPlayer);
  
  document.body.appendChild(respawnButton);
}

// Respawn player
function respawnPlayer() {
  playerHealth = 3;
  gameActive = true;
  
  // Remove respawn button
  const respawnButton = document.getElementById('respawnButton');
  if (respawnButton) {
    respawnButton.remove();
  }
  
  // Reset player position if needed
  // camera.position.set(0, 2, 0);
}

// Add keyboard event listener for shooting
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && gameActive) {
    // Create bullet from player position in the direction they're looking
    const bulletPosition = camera.position.clone();
    
    // Get direction from camera
    const bulletDirection = new THREE.Vector3();
    camera.getWorldDirection(bulletDirection);
    
    createBullet(bulletPosition, bulletDirection);
  }
});

// Add mouse click for shooting (alternative control)
document.addEventListener('click', () => {
  if (gameActive) {
    const bulletPosition = camera.position.clone();
    
    const bulletDirection = new THREE.Vector3();
    camera.getWorldDirection(bulletDirection);
    
    createBullet(bulletPosition, bulletDirection);
  }
});

// Initialize game elements
function initGameEnhancements() {
  createUI();
  createBoss();
}

// Add this to your existing animation/render loop
function updateGame(deltaTime) {
  updateBullets(deltaTime);
  updateBoss(deltaTime);
  updateUI();
}

// Add these function calls to your initialization code
initGameEnhancements();

// Modify your existing animation loop to include:
// Inside your animate or render function:
// const deltaTime = clock.getDelta(); // If you already have a clock
// updateGame(deltaTime);