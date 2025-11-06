function editSection(id) {
  const section = document.getElementById(id);
  const contentDiv = section.querySelector('.content');
  const oldContent = contentDiv.innerHTML;

  const textarea = document.createElement('textarea');
  textarea.value = oldContent.replace(/<br>/g, '\n').replace(/<\/?[^>]+(>|$)/g, '');

  contentDiv.innerHTML = '';
  contentDiv.appendChild(textarea);

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.className = 'edit-btn';
  saveBtn.style.marginTop = '10px';

  saveBtn.onclick = () => {
    const html = textarea.value.trim().replace(/\n/g, '<br>');
    contentDiv.innerHTML = html;

    // Save to localStorage
    localStorage.setItem('wiki_' + id, html);

    // Update currentUser edits
    const user = JSON.parse(localStorage.getItem('mevUser') || 'null');
    if (user) {
      if (!user.edits) user.edits = [];
      user.edits.push({ section: id, time: new Date().toISOString() });
      localStorage.setItem('mevUser', JSON.stringify(user));
    }

    // Feedback voice
    const msg = new SpeechSynthesisUtterance("Section saved!");
    msg.lang = 'en-US';
    msg.pitch = 1;
    msg.rate = 1;
    speechSynthesis.speak(msg);
  };

  contentDiv.appendChild(saveBtn);
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(sec => {
    const savedContent = localStorage.getItem('wiki_' + sec.id);
    if (savedContent && sec.querySelector('.content')) {
      sec.querySelector('.content').innerHTML = savedContent;
    }
  });
});