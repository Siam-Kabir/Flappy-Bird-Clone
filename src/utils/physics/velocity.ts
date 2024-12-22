import { PHYSICS_CONSTANTS } from './constants';

export const calculateVelocity = (currentVelocity: number): number => {
  const newVelocity = currentVelocity + PHYSICS_CONSTANTS.GRAVITY;
  return Math.min(newVelocity, PHYSICS_CONSTANTS.TERMINAL_VELOCITY);
};

export const calculateJumpVelocity = (): number => {
  return PHYSICS_CONSTANTS.JUMP_FORCE;
};