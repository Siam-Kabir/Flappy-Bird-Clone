import React from 'react';
import { BIRD_CONFIG } from '../../config/birdConfig';

export const BirdEye: React.FC = () => {
  const { EYE } = BIRD_CONFIG.COLORS;
  
  return (
    <div className={`absolute w-3 h-3 ${EYE.OUTER} rounded-full`}>
      <div className={`absolute inset-1/4 ${EYE.INNER} rounded-full`}>
        {/* Eye highlight */}
        <div 
          className={`absolute w-1 h-1 ${EYE.HIGHLIGHT} rounded-full`}
          style={{ top: '10%', left: '10%' }}
        />
      </div>
    </div>
  );
};