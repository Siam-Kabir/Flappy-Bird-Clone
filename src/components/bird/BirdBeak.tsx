import React from 'react';
import { BIRD_CONFIG } from '../../config/birdConfig';

export const BirdBeak: React.FC = () => {
  return (
    <div 
      className={`absolute w-4 h-2.5 ${BIRD_CONFIG.COLORS.BEAK} rounded-sm transform rotate-[-15deg]`}
      style={{
        clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
      }}
    />
  );
};