import React from 'react';
import { GameState } from '../types/game';
import { HomeButton } from './ui/HomeButton';
import '../styles/typography.css';

interface GameUIProps {
  gameState: GameState;
}

export const GameUI: React.FC<GameUIProps> = ({ gameState }) => {
  const resetGame = () => {
    window.location.reload();
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Score */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <span className="score-display">
          {gameState.score}
        </span>
      </div>

      {/* Start Screen */}
      {!gameState.isPlaying && !gameState.isGameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="game-title mb-8">
            FLAPPY BIRD
          </h1>
          <div className="animate-bounce-subtle">
            <p className="instructions">
              Press SPACE to start
            </p>
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {gameState.isGameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="game-over mb-8">
            GAME OVER
          </h2>
          <div className="bg-[#DED895] border-4 border-[#523C2E] rounded-lg p-6 flex flex-col items-center gap-4">
            <div className="space-y-4 text-center">
              <div>
                <p className="instructions mb-1">Score</p>
                <p className="score-display text-2xl">{gameState.score}</p>
              </div>
              <div>
                <p className="instructions mb-1">Best</p>
                <p className="score-display text-2xl">{gameState.highScore}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
              <p className="instructions animate-bounce-subtle">
                Press SPACE to retry
              </p>
              <HomeButton onClick={resetGame} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};