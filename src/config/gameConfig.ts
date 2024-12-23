export const GAME_CONFIG = {
  CANVAS: {
    WIDTH: window.innerWidth,
    HEIGHT: window.innerHeight,
    GROUND_HEIGHT: Math.floor(window.innerHeight * 0.2), // 20% of screen height
  },
  PHYSICS: {
    GRAVITY: 0.4,
    JUMP_FORCE: -7,
    MAX_VELOCITY: 10,
    MIN_ROTATION: -30,
    MAX_ROTATION: 90,
  },
} as const;