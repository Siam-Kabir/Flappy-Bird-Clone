import { useState, useEffect } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import { useInput } from './hooks/useInput';
import { Background } from './components/Background';
import { Bird } from './components/Bird';
import { Pipe } from './components/Pipe';
import { GameUI } from './components/GameUI';
import { Debug } from './components/Debug';
import { Particles } from './components/effects/Particles';
import { ScorePopup } from './components/effects/ScorePopup';
import './styles/animations.css';
import backgroundAudio from '/sounds/background.mp3';
function App() {
  const { gameState, bird, pipes, jump, config } = useGameLogic();
  const [isJumping, setIsJumping] = useState(false);
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);

  useEffect(() => {
    const playAudio = () => {
      if (!isAudioPlayed) {
        const audio = new Audio(backgroundAudio);
        audio.play();
        setIsAudioPlayed(true);
      }
    };

    window.addEventListener('click', playAudio);
    window.addEventListener('touchstart', playAudio);

    return () => {
      window.removeEventListener('click', playAudio);
      window.removeEventListener('touchstart', playAudio);
    };
  }, [isAudioPlayed]);

  useInput(() => {
    jump();
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 100);
  });

  useEffect(() => {
    if (gameState.isGameOver) {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 200);
    }
}, [gameState.isGameOver]);

  useEffect(() => {
    if (gameState.score > 0) {
      setShowScorePopup(true);
      setTimeout(() => setShowScorePopup(false), 800);
    }
  }, [gameState.score]);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${isShaking ? 'animate-screenShake' : ''}`}>
      <Background />
      <div className="relative w-full h-full">
        <Particles bird={bird} isJumping={isJumping} />
        {pipes.map(pipe => (
          <Pipe
            key={pipe.id}
            pipe={pipe}
            score={gameState.score}
          />
        ))}
        <Bird bird={bird} />
        <ScorePopup
          score={gameState.score}
          show={showScorePopup}
        />
      </div>
      <GameUI gameState={gameState} />
      {config.debug && (
        <Debug
          isEnabled={config.debug}
          bird={bird}
          pipes={pipes}
        />
      )}
    </div>
  );
}

export default App;