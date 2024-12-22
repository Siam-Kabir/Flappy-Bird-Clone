import React from 'react';

interface MedalProps {
  score: number;
}

export const Medal: React.FC<MedalProps> = ({ score }) => {
  const getMedalType = () => {
    if (score >= 40) return 'platinum';
    if (score >= 30) return 'gold';
    if (score >= 20) return 'silver';
    if (score >= 10) return 'bronze';
    return null;
  };

  const medalType = getMedalType();
  if (!medalType) return null;

  const medalColors = {
    platinum: 'from-blue-200 to-blue-400 border-blue-600',
    gold: 'from-yellow-200 to-yellow-400 border-yellow-600',
    silver: 'from-gray-200 to-gray-400 border-gray-600',
    bronze: 'from-orange-200 to-orange-400 border-orange-600',
  };

  return (
    <div className={`
      w-16 h-16 mx-auto
      rounded-full
      border-4
      bg-gradient-to-b
      ${medalColors[medalType]}
      shadow-lg
      flex items-center justify-center
      transform rotate-12
    `}>
      <div className="w-8 h-8 bg-white/20 rounded-full transform -rotate-45" />
    </div>
  );
};