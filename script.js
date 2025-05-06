document.addEventListener('DOMContentLoaded', () => {
    loadSearchHistory();

    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('filterInput');
        const searchQuery = input.value.trim();
        if (searchQuery) {
            speakText(searchQuery);
            saveSearch(searchQuery);
            input.value = '';
        }
    });
});

function speakText(text) {
    try {
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    } catch (e) {
        console.error('Speech synthesis not supported:', e);
    }
}

function saveSearch(text) {
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    history.unshift({ text, timestamp: new Date().toISOString() });
    if (history.length > 50) history = history.slice(0, 50);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    loadSearchHistory();
}

function loadSearchHistory() {
    const historyContainer = document.getElementById('searchHistory');
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

    if (history.length === 0) {
        historyContainer.innerHTML = '<div class="empty-message">No comment history yet</div>';
        return;
    }

    historyContainer.innerHTML = '';
    history.forEach((item, index) => {
        const date = new Date(item.timestamp);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        const itemElement = document.createElement('div');
        itemElement.className = 'search-item';
        itemElement.innerHTML = `
            <div>${escapeHTML(item.text)}</div>
            <div style="font-size: 12px; color: #666;">${formattedDate}</div>
            <div class="controls">
                <button data-index="${index}" class="speak">Speak</button>
                <button data-index="${index}" class="delete">Delete</button>
            </div>
        `;
        historyContainer.appendChild(itemElement);
    });

    historyContainer.querySelectorAll('.speak').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            speakText(history[index].text);
        });
    });

    historyContainer.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            removeHistoryItem(index);
        });
    });
}

function removeHistoryItem(index) {
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    history.splice(index, 1);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    loadSearchHistory();
}

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Security measures
document.addEventListener("paste", (event) => {
    event.preventDefault();
    alert("Pasting is disabled for security reasons.");
});

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && ["U", "S", "H"].includes(event.key)) {
        event.preventDefault();
        alert("Keyboard shortcuts are disabled for security.");
    }
});

        // Disable right-click (optional)
        document.addEventListener("contextmenu", (event) => event.preventDefault());

        // Prevent keystroke logging attempts
        document.addEventListener("keydown", function(event) {
            if (event.ctrlKey && (event.key === "U" || event.key === "S" || event.key === "H")) {
                event.preventDefault();
                alert("Keyboard shortcuts are disabled for security.");
            }
        });
