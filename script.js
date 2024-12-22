document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('/assets/background-music.mp3'); // Path to the audio file in the public folder
    audio.loop = true;
    audio.play().catch(err => {
      console.error('Audio playback failed:', err);
    });
  });