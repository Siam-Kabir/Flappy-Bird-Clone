import { Pipe } from '../types/game';
import { PIPE_CONFIG } from '../config/pipeConfig';
import { createPipe } from './pipeGenerator';

/**
 * Updates the positions of existing pipes and manages pipe lifecycle
 * @param {Pipe[]} pipes - Current array of pipes
 * @returns {Pipe[]} Updated array of pipes
 */
export const updatePipes = (pipes: Pipe[]): Pipe[] => {
  if (!Array.isArray(pipes)) {
    throw new Error('Invalid pipes array');
  }

  // Update positions and remove off-screen pipes
  const newPipes = pipes
    .map(updatePipePosition)
    .filter(isOnScreen);

  // Maintain minimum pipe count
  return maintainPipeCount(newPipes);
};

/**
 * Updates a single pipe's position
 * @param {Pipe} pipe - The pipe to update
 * @returns {Pipe} Updated pipe
 */
const updatePipePosition = (pipe: Pipe): Pipe => ({
  ...pipe,
  x: Math.round(pipe.x - PIPE_CONFIG.SPEED),
});

/**
 * Checks if a pipe is still visible on screen
 * @param {Pipe} pipe - The pipe to check
 * @returns {boolean} Whether the pipe is on screen
 */
const isOnScreen = (pipe: Pipe): boolean => 
  pipe.x > -PIPE_CONFIG.WIDTH;

/**
 * Ensures minimum number of pipes are present
 * @param {Pipe[]} pipes - Current array of pipes
 * @returns {Pipe[]} Updated array of pipes
 */
const maintainPipeCount = (pipes: Pipe[]): Pipe[] => {
  if (pipes.length >= PIPE_CONFIG.MIN_PIPES) {
    return pipes;
  }

  const lastPipeX = Math.max(...pipes.map(p => p.x), 0);
  return [
    ...pipes,
    createPipe(lastPipeX + PIPE_CONFIG.SPAWN_DISTANCE),
  ];
};