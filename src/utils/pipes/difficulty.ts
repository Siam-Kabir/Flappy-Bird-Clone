import { PIPE_CONFIG } from '../../config/pipeConfig';

export const calculateGapSize = (score: number): number => {
  const gapReduction = Math.floor(score / 10) * PIPE_CONFIG.DIFFICULTY.GAP_DECREASE_RATE;
  return Math.max(
    PIPE_CONFIG.GAP - gapReduction,
    PIPE_CONFIG.DIFFICULTY.MIN_GAP
  );
};

export const calculatePipeSpeed = (score: number): number => {
  const speedIncrease = Math.floor(score / 10) * PIPE_CONFIG.DIFFICULTY.SPEED_INCREASE_RATE;
  return Math.min(
    PIPE_CONFIG.SPEED + speedIncrease,
    PIPE_CONFIG.DIFFICULTY.MAX_SPEED
  );
};