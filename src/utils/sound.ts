const audioCache = new Map<string, AudioBuffer>();

export const playSound = async (type: 'jump' | 'score' | 'hit') => {
  try {
    const audio = new Audio(`/sounds/${type}.mp3`);
    await audio.play();
  } catch (error) {
    console.warn(`Sound '${type}' failed to play:`, error);
  }
};