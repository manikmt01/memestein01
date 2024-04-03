const video = document.querySelector('#introVideo');
const startBtn = document.querySelector('#startVideoBtn');
const overlay = document.querySelector('#overlay');

startBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  video.play();
});

video.addEventListener('ended', () => {
  location.href = './page1.html';
});
