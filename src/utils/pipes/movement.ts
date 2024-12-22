import { Pipe } from '../../types/game';
import { PIPE_CONSTANTS } from './constants';
import { createPipe } from './generator';
import { calculatePipeSpeed } from './speed';

const isOnScreen = (pipe: Pipe): boolean => 
  pipe.x > -PIPE_CONSTANTS.WIDTH;

const updatePipePosition = (pipe: Pipe, speed: number): Pipe => ({
  ...pipe,
  x: Math.round(pipe.x - speed),
});

export const updatePipes = (pipes: Pipe[], score: number): Pipe[] => {
  const currentSpeed = calculatePipeSpeed(score);
  
  const activePipes = pipes
    .map(pipe => updatePipePosition(pipe, currentSpeed))
    .filter(isOnScreen);

  if (activePipes.length < PIPE_CONSTANTS.MIN_PIPES) {
    const lastPipeX = Math.max(...activePipes.map(p => p.x), 0);
    const newPipe = createPipe(lastPipeX + PIPE_CONSTANTS.SPAWN_DISTANCE);
    activePipes.push(newPipe);
  }

  return activePipes;
};

// Re-export createPipe from generator
export { createPipe } from './generator';