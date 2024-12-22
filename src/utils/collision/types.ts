export interface Hitbox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CollisionConfig {
  tolerance: number;
  debug: boolean;
}