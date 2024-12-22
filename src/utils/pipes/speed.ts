import { PIPE_CONSTANTS } from './constants';

const SPEED_CONFIG = {
  BASE_SPEED: PIPE_CONSTANTS.SPEED,
  INCREASE_INTERVAL: 5,    // Points needed for speed increase
  SPEED_INCREMENT: 0.2,    // Speed increase per interval
  MAX_SPEED: 6,           // Maximum possible speed
} as const;

export const calculatePipeSpeed = (score: number): number => {
  const speedIncrease = Math.floor(score / SPEED_CONFIG.INCREASE_INTERVAL) * SPEED_CONFIG.SPEED_INCREMENT;
  return Math.min(
    SPEED_CONFIG.BASE_SPEED + speedIncrease,
    SPEED_CONFIG.MAX_SPEED
  );
};