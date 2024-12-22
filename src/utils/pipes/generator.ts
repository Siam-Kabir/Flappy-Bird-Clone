import { Pipe } from '../../types/game';
import { PIPE_CONFIG } from '../../config/pipeConfig';
import { GAME_CONFIG } from '../../config/gameConfig';

let pipeIdCounter = 0;

const generatePipeId = (): number => ++pipeIdCounter;

export const calculatePipeHeight = (): number => {
  const availableHeight = GAME_CONFIG.CANVAS.HEIGHT - GAME_CONFIG.CANVAS.GROUND_HEIGHT;
  const minHeight = Math.min(PIPE_CONFIG.MIN_HEIGHT, availableHeight * 0.3);
  const maxHeight = Math.min(PIPE_CONFIG.MAX_HEIGHT, availableHeight * 0.7);
  
  return Math.round(
    minHeight + (Math.random() * (maxHeight - minHeight))
  );
};

export const createPipe = (x: number): Pipe => ({
  id: generatePipeId(),
  x: Math.round(x),
  height: calculatePipeHeight(),
  passed: false,
});