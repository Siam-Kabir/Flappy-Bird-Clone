import React from 'react';
import { Pipe as PipeType } from '../types/game';
import { PIPE_CONFIG } from '../config/pipeConfig';
import { GAME_CONFIG } from '../config/gameConfig';
import { calculateGapSize } from '../utils/pipes/difficulty';

interface PipeProps {
  pipe: PipeType;
  score: number;
}

export const Pipe: React.FC<PipeProps> = ({ pipe, score }) => {
  const gapSize = calculateGapSize(score);
  const bottomPipeHeight = window.innerHeight - pipe.height - gapSize;

  return (
    <>
      {/* Top pipe */}
      <div
        className="absolute"
        style={{
          left: `${pipe.x}px`,
          top: 0,
          width: `${PIPE_CONFIG.WIDTH}px`,
          height: `${pipe.height}px`,
          backgroundImage: 'url(https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/pipe-green.png)',
          backgroundSize: '100% auto',
          transform: 'rotate(180deg)',
          imageRendering: 'pixelated'
        }}
      />
      
      {/* Bottom pipe */}
      {/* Bottom pipe */}
<div
  className="absolute"
  style={{
    left: `${pipe.x}px`,
    top: `${pipe.height + gapSize}px`,
    width: `${PIPE_CONFIG.WIDTH}px`,
    height: `${bottomPipeHeight}px`,
    backgroundImage: 'url(https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/pipe-green.png)',
    backgroundSize: '100% auto',
    imageRendering: 'pixelated',
    // zIndex: -1
  }}
/>
    </>
  );
};