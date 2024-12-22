import React, { useEffect, useRef } from 'react';
import { Bird, Pipe } from '../types/game';
import { getBirdHitbox, getPipeHitboxes } from '../utils/collision/hitbox';
import { drawHitbox } from '../utils/collision/debug';

interface DebugProps {
  isEnabled: boolean;
  bird: Bird;
  pipes: Pipe[];
}

export const Debug: React.FC<DebugProps> = ({ isEnabled, bird, pipes }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isEnabled || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bird hitbox
    const birdHitbox = getBirdHitbox(bird);
    drawHitbox(ctx, birdHitbox);

    // Draw pipe hitboxes
    pipes.forEach(pipe => {
      const [topPipe, bottomPipe] = getPipeHitboxes(pipe);
      drawHitbox(ctx, topPipe);
      drawHitbox(ctx, bottomPipe);
    });
  }, [isEnabled, bird, pipes]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};