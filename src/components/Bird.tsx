import React, { useState, useEffect } from 'react';
import { Bird as BirdType } from '../types/game';
import { BIRD_CONFIG } from '../config/birdConfig';

interface BirdProps {
  bird: BirdType;
}

export const Bird: React.FC<BirdProps> = ({ bird }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    BIRD_CONFIG.SPRITE.FRAMES.DOWNFLAP,
    BIRD_CONFIG.SPRITE.FRAMES.MIDFLAP,
    BIRD_CONFIG.SPRITE.FRAMES.UPFLAP,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, BIRD_CONFIG.ANIMATION.FRAME_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute transition-transform"
      style={{
        width: BIRD_CONFIG.SIZE.WIDTH,
        height: BIRD_CONFIG.SIZE.HEIGHT,
        transform: `translateY(${bird.y}px) rotate(${bird.rotation}deg)`,
        left: '100px',
      }}
    >
      <img
        src={frames[currentFrame]}
        alt="Bird"
        className="w-full h-full"
        style={{
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
};