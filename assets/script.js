// filepath: /assets/script.js
document.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('/sounds/background.mp3'); // Path to the audio file in the assets/sounds folder
  audio.loop = true;
  audio.play().catch(err => {
    console.error('Audio playback failed:', err);
  });
});