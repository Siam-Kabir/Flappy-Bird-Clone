import { Hitbox } from './types';

export const drawHitbox = (ctx: CanvasRenderingContext2D, hitbox: Hitbox) => {
  ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
  ctx.lineWidth = 2;
  ctx.strokeRect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
  
  // Draw hitbox center point
  ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
  ctx.beginPath();
  ctx.arc(
    hitbox.x + hitbox.width / 2,
    hitbox.y + hitbox.height / 2,
    3,
    0,
    Math.PI * 2
  );
  ctx.fill();
};