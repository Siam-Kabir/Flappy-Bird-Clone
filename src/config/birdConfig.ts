/**
 * Configuration for bird appearance and animation
 */
export const BIRD_CONFIG = {
  SIZE: {
    WIDTH: 60,
    HEIGHT: 44,
  },
  SPRITE: {
    URL: 'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/yellowbird-midflap.png',
    FRAMES: {
      DOWNFLAP: 'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/yellowbird-downflap.png',
      MIDFLAP: 'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/yellowbird-midflap.png',
      UPFLAP: 'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/yellowbird-upflap.png',
    },
  },
  ANIMATION: {
    FRAME_DURATION: 100,
    ROTATION_SMOOTHING: 0.15,
  },
} as const;