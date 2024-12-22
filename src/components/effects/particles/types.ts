export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

export interface ParticleConfig {
  count: number;
  minLife: number;
  maxLife: number;
  minVelocity: number;
  maxVelocity: number;
  gravity: number;
  fadeRate: number;
  baseRadius: number;
}