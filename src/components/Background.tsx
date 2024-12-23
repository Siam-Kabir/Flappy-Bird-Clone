import React from 'react';
import { GAME_CONFIG } from '../config/gameConfig';

export const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#4EC0CA] to-[#87CEEB] overflow-hidden">
      {/* Clouds */}
      <div className="absolute inset-0 opacity-70">
        <div
          className="absolute w-20 h-10 bg-white rounded-full left-[10%] top-[15%]"
          style={{
            animation: 'moveCloud 25s linear infinite',
            animationDelay: '0s'
          }}
        />
        <div
          className="absolute w-32 h-16 bg-white rounded-full left-[30%] top-[25%]"
          style={{
            animation: 'moveCloud 30s linear infinite',
            animationDelay: '-15s'
          }}
        />
        <div
          className="absolute w-24 h-12 bg-white rounded-full left-[60%] top-[10%]"
          style={{
            animation: 'moveCloud 28s linear infinite',
            animationDelay: '-8s'
          }}
        />
      </div>

      {/* City Skyline */}
      <div className="absolute bottom-[20%] w-full">
        <div className="relative h-32 w-full">
          <div className="absolute bottom-0 w-full">
            <svg className="w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path
                d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,117.3C672,117,768,75,864,69.3C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                fill="#2d3436"
                fillOpacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-[25%] bg-[#DED895] border-t-[5px] border-[#523C2E]"
        style={{
          height: window.innerHeight * 0.25,
          backgroundImage: 'url(https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/sprites/base.png)',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          animation: 'slideGround 2s linear infinite',
          zIndex: 1
        }}
      />
    </div>
  );
}