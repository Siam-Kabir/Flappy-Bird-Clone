import { Pipe } from '../types/game';

export const PIPE_CONFIG = {
  SPAWN_DISTANCE: 300,  // Reset to original value
  MIN_HEIGHT: 50,
  MAX_HEIGHT: 300,
  WIDTH: 52,
  GAP: 170,           // Reset to original value
  SPEED: 2.5,
} as const;

let pipeIdCounter = 0;

const generatePipeId = () => {
  pipeIdCounter += 1;
  return pipeIdCounter;
};

export const createPipe = (x: number): Pipe => {
  const height = Math.random() * (PIPE_CONFIG.MAX_HEIGHT - PIPE_CONFIG.MIN_HEIGHT) + PIPE_CONFIG.MIN_HEIGHT;
  return {
    id: generatePipeId(),
    x: Math.round(x),
    height: Math.round(height),
    passed: false,
  };
};

export const updatePipes = (pipes: Pipe[]): Pipe[] => {
  const newPipes = pipes
    .map(pipe => ({
      ...pipe,
      x: Math.round(pipe.x - PIPE_CONFIG.SPEED),
    }))
    .filter(pipe => pipe.x > -PIPE_CONFIG.WIDTH);

  if (newPipes.length < 3) {
    const lastPipeX = Math.max(...newPipes.map(p => p.x));
    newPipes.push(createPipe(lastPipeX + PIPE_CONFIG.SPAWN_DISTANCE));
  }

  return newPipes;
};