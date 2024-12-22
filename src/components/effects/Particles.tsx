import React, { useEffect, useRef } from 'react';
import { Bird } from '../../types/game';
import { Particle } from './particles/types';
import { JUMP_PARTICLE_CONFIG } from './particles/config';
import { createParticle, updateParticle, drawParticle } from './particles/particleSystem';

interface ParticlesProps {
  bird: Bird;
  isJumping: boolean;
}

export const Particles: React.FC<ParticlesProps> = ({ bird, isJumping }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (isJumping) {
      for (let i = 0; i < JUMP_PARTICLE_CONFIG.count; i++) {
        particlesRef.current.push(
          createParticle(100, bird.y + 20, JUMP_PARTICLE_CONFIG)
        );
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current = particlesRef.current
        .filter(p => p.life > 0)
        .map(p => updateParticle(p, JUMP_PARTICLE_CONFIG));

      particlesRef.current.forEach(p => drawParticle(ctx, p, JUMP_PARTICLE_CONFIG));

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [bird.y, isJumping]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};