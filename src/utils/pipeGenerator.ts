import { Pipe } from '../types/game';
import { PIPE_CONFIG } from '../config/pipeConfig';

let pipeIdCounter = 0;

/**
 * Generates a unique ID for each pipe
 */
const generatePipeId = (): number => ++pipeIdCounter;

/**
 * Generates a random height within the configured bounds
 * @returns {number} The calculated height
 */
const generateRandomHeight = (): number => {
  const screenHeight = window.innerHeight;
  const minHeight = Math.floor(screenHeight * 0.1); // Minimum height as 10% of screen height
  const maxHeight = Math.floor(screenHeight * 0.6); // Maximum height as 60% of screen height
  return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
};

/**
 * Creates a new pipe instance
 * @param {number} x - The x-coordinate for the pipe
 * @returns {Pipe} A new pipe object
 */
export const createPipe = (x: number): Pipe => {
  if (x < 0) {
    throw new Error('Pipe x-coordinate must be positive');
  }

  return {
    id: generatePipeId(),
    x: Math.round(x),
    height: generateRandomHeight(),
    passed: false,
  };
};