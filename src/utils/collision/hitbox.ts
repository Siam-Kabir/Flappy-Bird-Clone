import { Hitbox } from './types';
import { Bird, Pipe } from '../../types/game';
import { BIRD_CONFIG } from '../../config/birdConfig';
import { PIPE_CONFIG } from '../../config/pipeConfig';
import { GAME_CONFIG } from '../../config/gameConfig';
// Constants for fine-tuning hitbox sizes
const HITBOX_ADJUSTMENT = {
  BIRD: {
    WIDTH_SCALE: 0.8,   // Bird hitbox is 80% of sprite width
    HEIGHT_SCALE: 0.8,  // Bird hitbox is 80% of sprite height
    X_OFFSET: 10,       // Shift hitbox right from sprite edge
    Y_OFFSET: 5,        // Shift hitbox down from sprite top
  },
  PIPE: {
    WIDTH_SCALE: 0.95,  // Pipe hitbox is 95% of visual width
    X_OFFSET: 2,        // Small offset from visual edge
  },
};

export const getBirdHitbox = (bird: Bird): Hitbox => {
  const width = BIRD_CONFIG.SIZE.WIDTH * HITBOX_ADJUSTMENT.BIRD.WIDTH_SCALE;
  const height = BIRD_CONFIG.SIZE.HEIGHT * HITBOX_ADJUSTMENT.BIRD.HEIGHT_SCALE;
  
  return {
    x: 100 + HITBOX_ADJUSTMENT.BIRD.X_OFFSET, // Bird's fixed X position
    y: bird.y + HITBOX_ADJUSTMENT.BIRD.Y_OFFSET,
    width,
    height,
  };
};

export const getPipeHitboxes = (pipe: Pipe): [Hitbox, Hitbox] => {
  const width = PIPE_CONFIG.WIDTH * HITBOX_ADJUSTMENT.PIPE.WIDTH_SCALE;
  const x = pipe.x + HITBOX_ADJUSTMENT.PIPE.X_OFFSET;

// Top pipe hitbox
const topPipe: Hitbox = {
  x,
  y: 0,
  width,
  height: pipe.height,
};

// Bottom pipe hitbox
const bottomPipe: Hitbox = {
  x,
  y: pipe.height + PIPE_CONFIG.GAP,
  width,
  height: window.innerHeight - (pipe.height + PIPE_CONFIG.GAP) - GAME_CONFIG.CANVAS.GROUND_HEIGHT,
};

return [topPipe, bottomPipe];
};