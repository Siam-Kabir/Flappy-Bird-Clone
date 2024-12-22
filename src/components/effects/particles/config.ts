import { ParticleConfig } from './types';

export const JUMP_PARTICLE_CONFIG: ParticleConfig = {
  count: 5,
  minLife: 0.6,
  maxLife: 1,
  minVelocity: -1.5,
  maxVelocity: 1.5,
  gravity: 0.1,
  fadeRate: 0.02,
  baseRadius: 3,
} as const;