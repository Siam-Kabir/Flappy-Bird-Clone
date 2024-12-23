import { Hitbox, CollisionConfig } from './types';

const DEFAULT_CONFIG: CollisionConfig = {
  tolerance: 2,  // 2px tolerance for better gameplay feel
  debug: false,
};

export const checkHitboxCollision = (
  box1: Hitbox,
  box2: Hitbox,
  config: CollisionConfig = DEFAULT_CONFIG
): boolean => {
  // Apply tolerance to make collision detection more forgiving
  const tolerance = config.tolerance;
  
  return (
    box1.x + tolerance < box2.x + box2.width &&
    box1.x + box1.width - tolerance > box2.x &&
    box1.y + tolerance < box2.y + box2.height &&
    box1.y + box1.height - tolerance > box2.y
  );
};
