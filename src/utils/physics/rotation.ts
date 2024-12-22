import { PHYSICS_CONSTANTS } from './constants';

export const calculateRotation = (velocity: number, currentRotation: number): number => {
  const targetRotation = velocity > 0 
    ? Math.min(PHYSICS_CONSTANTS.MAX_ROTATION, velocity * 7)
    : PHYSICS_CONSTANTS.MIN_ROTATION;
  
  const rotationSpeed = velocity > 0 ? 0.2 : 0.1;
  return currentRotation + (targetRotation - currentRotation) * rotationSpeed;
};