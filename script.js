const sections   = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.nav-btn');

function showSection(id) {
  sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.section === id));
}

navButtons.forEach(btn => btn.addEventListener('click', () => showSection(btn.dataset.section)));

function updateTime() {
  const clock = document.getElementById('time');
  if (clock) clock.textContent = new Date().toLocaleTimeString('en-US', {
    hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

updateTime();
setInterval(updateTime, 1000);