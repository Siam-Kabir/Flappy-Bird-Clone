import { Particle, ParticleConfig } from './types';

export const createParticle = (x: number, y: number, config: ParticleConfig): Particle => ({
  x: x + Math.random() * 20,
  y: y + Math.random() * 10,
  vx: config.minVelocity + Math.random() * (config.maxVelocity - config.minVelocity),
  vy: config.minVelocity + Math.random() * (config.maxVelocity - config.minVelocity),
  life: config.minLife + Math.random() * (config.maxLife - config.minLife),
  color: `hsla(${45 + Math.random() * 30}, 100%, 75%, 1)`,
});

export const updateParticle = (particle: Particle, config: ParticleConfig): Particle => ({
  ...particle,
  x: particle.x + particle.vx,
  y: particle.y + particle.vy,
  life: Math.max(0, particle.life - config.fadeRate),
  vy: particle.vy + config.gravity,
});

export const drawParticle = (
  ctx: CanvasRenderingContext2D,
  particle: Particle,
  config: ParticleConfig
) => {
  // Ensure radius is always positive and above minimum threshold
  const radius = Math.max(0.5, config.baseRadius * particle.life);
  
  // Only draw if particle is visible
  if (radius > 0 && particle.life > 0) {
    ctx.fillStyle = particle.color.replace('1)', `${particle.life})`);
    ctx.beginPath();
    ctx.arc(
      Math.round(particle.x), 
      Math.round(particle.y), 
      radius, 
      0, 
      Math.PI * 2
    );
    ctx.fill();
  }
};