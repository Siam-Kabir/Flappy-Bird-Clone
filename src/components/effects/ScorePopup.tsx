import React from 'react';
import '../../styles/typography.css';

interface ScorePopupProps {
  score: number;
  show: boolean;
}

export const ScorePopup: React.FC<ScorePopupProps> = ({ score, show }) => {
  if (!show) return null;

  return (
    <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2
                    score-popup animate-scorePopup pointer-events-none">
      +1
    </div>
  );
};