export const PIPE_CONSTANTS = {
  // Dimensions
  WIDTH: 52,
  GAP: 130,          // Reduced from 170 for more challenge
  MIN_HEIGHT: 100,   // Increased minimum height
  MAX_HEIGHT: 320,   // Adjusted maximum height
  
  // Movement
  SPEED: 3,          // Slightly increased speed
  SPAWN_DISTANCE: 280, // Reduced from 300 for tighter spacing
  MIN_PIPES: 3,      // Minimum pipes on screen
  
  // Visuals
  BORDER_COLOR: 'border-[#2C4B1C]',
  PIPE_COLOR: 'bg-[#73BF2E]',
  CAP_HEIGHT: 'h-6',
  SHADOW: '2px 2px 0 rgba(0, 0, 0, 0.1)',
} as const;