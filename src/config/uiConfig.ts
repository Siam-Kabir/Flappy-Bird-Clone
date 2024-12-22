/**
 * Configuration for game UI elements
 */
export const UI_CONFIG = {
  FONTS: {
    SCORE: "'Press Start 2P', system-ui",
  },
  COLORS: {
    SCORE: "text-white",
    TITLE: "text-yellow-300",
    SHADOW: "drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]",
    PANEL: "bg-gradient-to-b from-yellow-500 to-yellow-600",
    BORDER: "border-4 border-brown-700",
  },
  MESSAGES: {
    START: "Press SPACE to start",
    GAME_OVER: "Game Over",
    TRY_AGAIN: "Press SPACE to try again",
  },
} as const;