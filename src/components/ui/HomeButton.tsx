import React from 'react';
import { Home } from 'lucide-react';

interface HomeButtonProps {
  onClick: () => void;
}

export const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 bg-[#DED895] border-4 border-[#523C2E] 
                 rounded-lg shadow-lg transform transition-all duration-200 
                 hover:scale-105 active:scale-95 pointer-events-auto"
    >
      <Home className="w-6 h-6 text-[#523C2E]" />
      <span className="font-['VT323'] text-xl text-[#523C2E]">Home</span>
    </button>
  );
};