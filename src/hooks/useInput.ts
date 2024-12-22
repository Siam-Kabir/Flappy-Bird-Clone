import { useEffect, useCallback } from 'react';

export const useInput = (onJump: () => void) => {
  const handleInput = useCallback((event: KeyboardEvent | MouseEvent | TouchEvent) => {
    // Prevent default space bar scrolling
    if (event instanceof KeyboardEvent && event.code === 'Space') {
      event.preventDefault();
    }
    
    // Handle jump for all input types
    onJump();
  }, [onJump]);

  useEffect(() => {
    // Keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') handleInput(e);
    };

    // Mouse/Touch events
    const handlePointer = (e: MouseEvent | TouchEvent) => handleInput(e);

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handlePointer);
    window.addEventListener('touchstart', handlePointer);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handlePointer);
      window.removeEventListener('touchstart', handlePointer);
    };
  }, [handleInput]);
};