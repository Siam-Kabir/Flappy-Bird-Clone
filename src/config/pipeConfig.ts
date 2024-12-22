export const PIPE_CONFIG = {
  // Dimensions
  WIDTH: 52,
  GAP: 140,          // Increased gap for better playability
  MIN_HEIGHT: 150,   // Increased minimum height
  MAX_HEIGHT: 400,   // Adjusted maximum height for better distribution
  
  // Movement
  SPEED: 2.5,        // Slightly reduced for better control
  SPAWN_DISTANCE: 300,
  MIN_PIPES: 3,
  
  // Difficulty scaling
  DIFFICULTY: {
    GAP_DECREASE_RATE: 0.5,    // How much to decrease gap per 10 points
    MIN_GAP: 120,              // Minimum possible gap
    SPEED_INCREASE_RATE: 0.1,  // How much to increase speed per 10 points
    MAX_SPEED: 4,             // Maximum possible speed
  },
} as const;