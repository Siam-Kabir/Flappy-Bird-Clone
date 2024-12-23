export const PHYSICS = {
  GRAVITY: 0.8,
  JUMP_FORCE: -8.5,        // Increased from -7.2 for higher jumps
  TERMINAL_VELOCITY: 12,
  MAX_JUMP_HEIGHT: -14,    // Increased from -12 for higher maximum height
  MAX_ROTATION: 90,
  MIN_ROTATION: -30,
  ROTATION_SPEED: 3,
} as const;

export const calculateVelocity = (currentVelocity: number): number => {
  const newVelocity = currentVelocity + PHYSICS.GRAVITY;
  return Math.min(newVelocity, PHYSICS.TERMINAL_VELOCITY);
};

export const calculateJumpVelocity = (time: number): number => {
  // Enhanced jump curve using sine for smoother motion
  const baseJump = PHYSICS.JUMP_FORCE * Math.sin((1 - time) * Math.PI / 2);
  return Math.max(baseJump, PHYSICS.MAX_JUMP_HEIGHT);
};

export const calculateRotation = (velocity: number, currentRotation: number): number => {
  const targetRotation = velocity > 0 
    ? Math.min(PHYSICS.MAX_ROTATION, velocity * 8)
    : PHYSICS.MIN_ROTATION;
  
  // Smoother rotation transition
  const rotationSpeed = velocity > 0 ? 0.15 : 0.1;
  return currentRotation + (targetRotation - currentRotation) * rotationSpeed;
};