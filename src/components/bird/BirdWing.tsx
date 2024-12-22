import React from 'react';
import { BIRD_CONFIG } from '../../config/birdConfig';

export const BirdWing: React.FC = () => {
  return (
    <div 
      className={`absolute w-5 h-4 ${BIRD_CONFIG.COLORS.WING} rounded-full transform-origin-top`}
      style={{
        animation: `flapWing ${BIRD_CONFIG.ANIMATION.WING_DURATION} infinite alternate ease-in-out`,
      }}
    />
  );
};