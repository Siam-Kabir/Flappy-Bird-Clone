export const playSound = async (type: 'score' | 'hit') => {
  try {
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.addEventListener('error', (event) => {
      console.warn(`Sound '${type}' failed to load:`, event);
    });
    await audio.play();
  } catch (error) {
    console.warn(`Sound '${type}' failed to play:`, error);
  }
};