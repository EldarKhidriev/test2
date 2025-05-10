const video = document.getElementById('video');
const overlay = document.getElementById('videoOverlay');

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  video.play();
});
