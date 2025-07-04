<?php
function modifyHeaders($buffer) {
    header_remove("X-Powered-By");
    header("X-Content-Type-Options: nosniff");
    header("X-XSS-Protection: 1; mode=block");
    header("X-Frame-Options: DENY");
    //header("Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;");
    header("Referrer-Policy: strict-origin-when-cross-origin");
    header("Permissions-Policy: geolocation=(), microphone=(), camera=()");
    header("Cross-Origin-Resource-Policy: same-site");
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Pragma: no-cache");
    header("Expires: 0");
    header("Vary: Accept-Encoding");
    header("Connection: Keep-alive");
	//include(realpath(getenv('DOCUMENT_ROOT')) .'/blackhole/blackhole.php');
    return $buffer;
}
ob_start("modifyHeaders");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="Voice Search Leaderboard" />
  <meta name="keywords" content="MEV" />

  <title>Voice Search Leaderboard</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f7f7f7;
    }
    .marquee-container {
      background: #222;
      color: gold;
      overflow: hidden;
      white-space: nowrap;
      padding: 8px 0;
      font-size: 16px;
      font-weight: bold;
    }
    .marquee-text {
      display: inline-block;
      padding-left: 100%;
      animation: scroll-left 20s linear infinite;
    }
    @keyframes scroll-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }

    .search-container {
      padding: 80px 20px 20px;
      text-align: center;
    }

    input[type="text"] {
      width: 90%;
      max-width: 500px;
      padding: 12px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 25px;
    }

    .history {
      margin-top: 20px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .entry {
      background: white;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .controls {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
    }

    .footer {
      position: fixed;
      bottom: 0;
      background: #eee;
      width: 100%;
      text-align: center;
      padding: 10px;
      font-size: 14px;
    }

    .star {
      font-size: 22px;
      cursor: pointer;
    }
    .star.selected {
      color: gold;
    }

    video#webcam {
      position: fixed;
       top: 50px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 60px;
      object-fit: cover;
      z-index: 1;
      border: 2px solid black;
      border-radius: 50%;
    }
  /* Additional styles for filtering effect */
  .titleInput {
    background: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    opacity: 1;
    transition: opacity 0.3s ease;
    display: list-item;
  }
  .titleInput.hidden {
    display: none;
    opacity: 0;
  }
  
  </style>

     <!-- Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "MEV",
        "description": "Voice Search Leaderboard",
        "url": "https://jehovahsays.github.io/mev/"
    }
    </script> 
  
</head>
<body>

<div class="marquee-container">
  <div id="marquee" class="marquee-text">Loading leaderboard...</div>
</div>

<video id="webcam" autoplay playsinline muted></video>

<div class="search-container">
<form id="searchForm">
  <input type="text" 
  id="searchInput" 
                 autocomplete="on"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="true"
  placeholder="Search something..." 
  required onkeyup="titleInput()"/>
</form>
</div>

<div class="history" id="history"></div>

<div class="footer">
  Rate this app:
  <span class="star" data-value="1">☆</span>
  <span class="star" data-value="2">☆</span>
  <span class="star" data-value="3">☆</span>
  <span class="star" data-value="4">☆</span>
  <span class="star" data-value="5">☆</span>
  <br /><br />
   <a href="https://cash.app/$morgansbyers">Send $1</a>
</div>

<script>
function titleInput() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let items = document.getElementsByClassName('titleInput');

  for (let i = 0; i < items.length; i++) {
    const content = items[i].textContent.toLowerCase();
    if (!content.includes(input)) {
      items[i].classList.add('hidden');
    } else {
      items[i].classList.remove('hidden');
    }
  }
}
</script>

<script>
(async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById('webcam').srcObject = stream;
  } catch (e) {
    console.warn("Webcam blocked or unavailable.");
  }

  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const historyDiv = document.getElementById('history');
  const marquee = document.getElementById('marquee');

  let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

  function saveSearch(text) {
    const entry = { text, timestamp: new Date().toISOString() };
    history.unshift(entry);
    history = history.slice(0, 50);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    updateHistory();
    updateLeaderboard();
  }

  searchForm.onsubmit = (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      saveSearch(query);
      window.speak(query);
      searchInput.value = '';
    }
  };

  // Star rating
  document.querySelectorAll('.star').forEach(star => {
    star.onclick = () => {
      const rating = parseInt(star.dataset.value);
      localStorage.setItem('rating', rating);
      updateStars(rating);
    };
  });

  function updateStars(rating) {
    document.querySelectorAll('.star').forEach(star => {
      star.classList.toggle('selected', parseInt(star.dataset.value) <= rating);
    });
  }

  const savedRating = parseInt(localStorage.getItem('rating'));
  if (savedRating) updateStars(savedRating);

  updateHistory();
  updateLeaderboard();
})();

// ✅ Make speak and removeEntry globally accessible
window.speak = function(text) {
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
};

// Replace location.reload()
window.removeEntry = function(index) {
  let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  history.splice(index, 1);
  localStorage.setItem('searchHistory', JSON.stringify(history));
  updateHistory(); // instead of reload
  updateLeaderboard();
};
</script>

<script>
function updateHistory() {
  const historyDiv = document.getElementById('history');
  let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  historyDiv.innerHTML = '';
  if (history.length === 0) {
    historyDiv.innerHTML = '<p>No searches yet.</p>';
    return;
  }
  history.forEach((entry, index) => {
    const div = document.createElement('div');
    div.className = 'entry titleInput';
    div.innerHTML = `
      <strong>${entry.text}</strong><br>
      <small>${new Date(entry.timestamp).toLocaleString()}</small>
      <div class="controls">
        <button onclick="window.speak('${entry.text.replace(/'/g, "\\'")}')">Speak</button>
        <button onclick="window.removeEntry(${index})">Delete</button>
      </div>
    `;
    historyDiv.appendChild(div);
  });
}

function updateLeaderboard() {
  const marquee = document.getElementById('marquee');
  let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  const counts = {};
  for (const entry of history) {
    const term = entry.text.toLowerCase();
    counts[term] = (counts[term] || 0) + 1;
  }
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  marquee.textContent = sorted.length
    ? '🏆 Leaderboard: ' + sorted.map(([term, count], i) => `${i + 1}. ${term} (${count})`).join(' • ')
    : 'No searches yet.';
}
</script>


</body>
</html>
<?php
ob_end_flush();
?>