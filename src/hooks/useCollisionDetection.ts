import { useCallback } from 'react';
import { Bird, Pipe } from '../types/game';
import { getBirdHitbox, getPipeHitboxes } from '../utils/collision/hitbox';
import { checkHitboxCollision } from '../utils/collision/detector';
import { CollisionConfig } from '../utils/collision/types';
import { GAME_CONFIG } from '../config/gameConfig';
export const useCollisionDetection = (config: CollisionConfig) => {
  const checkCollision = useCallback((bird: Bird, pipes: Pipe[]): boolean => {
    const birdHitbox = getBirdHitbox(bird);

    // Check floor collision
    if (birdHitbox.y + birdHitbox.height >= window.innerHeight -200) {
      return true;
    }

    // Check ceiling collision
    if (birdHitbox.y <= 0) {
      return true;
    }


// Check pipe collisions
return pipes.some(pipe => {
  const [topPipe, bottomPipe] = getPipeHitboxes(pipe);
  return (
    checkHitboxCollision(birdHitbox, topPipe, config) ||
    checkHitboxCollision(birdHitbox, bottomPipe, config)
  );
});
  }, [config]);

  return { checkCollision };
};