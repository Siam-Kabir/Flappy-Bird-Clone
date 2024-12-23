const isMobile = window.innerWidth <= 400;

export const GAME_CONFIG = {
  CANVAS: {
    WIDTH: window.innerWidth,
    HEIGHT: window.innerHeight,
    GROUND_HEIGHT: isMobile ? Math.floor(window.innerHeight * 0.15) : Math.floor(window.innerHeight * 0.2), // 15% of screen height on mobile, 20% otherwise
  },
  PHYSICS: {
    GRAVITY: 0.4,
    JUMP_FORCE: -7,
    MAX_VELOCITY: 10,
    MIN_ROTATION: -30,
    MAX_ROTATION: 90,
  },
} as const;