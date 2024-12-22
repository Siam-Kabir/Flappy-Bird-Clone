export interface GameState {
  isPlaying: boolean;
  isGameOver: boolean;
  score: number;
  highScore: number;
}

export interface Bird {
  y: number;
  velocity: number;
  rotation: number;
}

export interface Pipe {
  id: number;
  x: number;
  height: number;
  passed: boolean;
}

export interface GameConfig {
  gravity: number;
  jumpForce: number;
  pipeGap: number;
  pipeWidth: number;
  pipeSpeed: number;
  birdSize: number;
  minPipeHeight: number;
  maxPipeHeight: number;
}