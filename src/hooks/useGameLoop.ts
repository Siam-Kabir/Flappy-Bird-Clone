import { useCallback, useRef } from 'react';

const TARGET_FPS = 60;
const FRAME_TIME = 1000 / TARGET_FPS;

export const useGameLoop = (callback: () => void) => {
  const frameRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const accumulatorRef = useRef<number>(0);

  const loop = useCallback((currentTime: number) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = currentTime;
      frameRef.current = requestAnimationFrame(loop);
      return;
    }

    const deltaTime = currentTime - previousTimeRef.current;
    previousTimeRef.current = currentTime;
    
    // Accumulate time since last frame
    accumulatorRef.current += deltaTime;

    // Update game state in fixed time steps
    while (accumulatorRef.current >= FRAME_TIME) {
      callback();
      accumulatorRef.current -= FRAME_TIME;
    }

    frameRef.current = requestAnimationFrame(loop);
  }, [callback]);

  const startLoop = useCallback(() => {
    if (!frameRef.current) {
      accumulatorRef.current = 0;
      previousTimeRef.current = undefined;
      frameRef.current = requestAnimationFrame(loop);
    }
  }, [loop]);

  const stopLoop = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
      previousTimeRef.current = undefined;
      accumulatorRef.current = 0;
    }
  }, []);

  return { startLoop, stopLoop };
};