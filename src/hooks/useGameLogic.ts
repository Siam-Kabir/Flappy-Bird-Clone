import { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, Bird, Pipe } from '../types/game';
import { calculateVelocity, calculateJumpVelocity } from '../utils/physics/velocity';
import { calculateRotation } from '../utils/physics/rotation';
import { updatePipes, createPipe } from '../utils/pipes/movement';
import { useCollisionDetection } from './useCollisionDetection';
import { playSound } from '../utils/sound';
import { useGameLoop } from './useGameLoop';

// Collision detection configuration
const COLLISION_CONFIG = {
  tolerance: 2,
  debug: false, // Set to true to enable hitbox visualization
};

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    isGameOver: false,
    score: 0,
    highScore: 0,
  });

  const [bird, setBird] = useState<Bird>({
    y: 250,
    velocity: 0,
    rotation: 0,
  });

  const [pipes, setPipes] = useState<Pipe[]>([]);
  const jumpTimeRef = useRef<number>(0);
  
  const { checkCollision } = useCollisionDetection(COLLISION_CONFIG);

  const initGame = useCallback(() => {
    setBird({ y: 250, velocity: 0, rotation: 0 });
    setPipes([
      createPipe(400),
      createPipe(700),
      createPipe(1000),
    ]);
    setGameState(prev => ({
      ...prev,
      isPlaying: true,
      isGameOver: false,
      score: 0,
    }));
    jumpTimeRef.current = 0;
  }, []);

  const jump = useCallback(() => {
    if (!gameState.isPlaying || gameState.isGameOver) {
      initGame();
      return;
    }
    
    jumpTimeRef.current = 0;
    setBird(prev => ({
      ...prev,
      velocity: calculateJumpVelocity(),
    }));
    // playSound('jump');
  }, [gameState.isPlaying, gameState.isGameOver, initGame]);

  const updateGame = useCallback(() => {
    if (!gameState.isPlaying || gameState.isGameOver) return;

    setBird(prev => {
      const newVelocity = calculateVelocity(prev.velocity);
      const newY = prev.y + newVelocity;
      const newRotation = calculateRotation(newVelocity, prev.rotation);

      return {
        y: newY,
        velocity: newVelocity,
        rotation: newRotation,
      };
    });

    setPipes(prev => {
      const newPipes = updatePipes(prev, gameState.score);
      
      newPipes.forEach(pipe => {
        if (!pipe.passed && pipe.x < 100 - 52) {
          setGameState(prev => ({
            ...prev,
            score: prev.score + 1,
            highScore: Math.max(prev.score + 1, prev.highScore),
          }));
          playSound('score');
          pipe.passed = true;
        }
      });

      return newPipes;
    });

    if (checkCollision(bird, pipes)) {
      setGameState(prev => ({ ...prev, isGameOver: true, isPlaying: false }));
      playSound('hit');
    }
  }, [gameState.isPlaying, gameState.isGameOver, gameState.score, bird, pipes, checkCollision]);

  const { startLoop, stopLoop } = useGameLoop(updateGame);

  useEffect(() => {
    if (gameState.isPlaying && !gameState.isGameOver) {
      startLoop();
    } else {
      stopLoop();
    }
    return () => stopLoop();
  }, [gameState.isPlaying, gameState.isGameOver, startLoop, stopLoop]);

  return {
    gameState,
    bird,
    pipes,
    jump,
    config: {
      WIDTH: 52,
      GAP: 130,
      debug: COLLISION_CONFIG.debug,
    },
  };
};