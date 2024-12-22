import { useState, useEffect, useRef } from 'react';
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

function App() {
  const { gameState, bird, pipes, jump, config } = useGameLogic();
  const [isJumping, setIsJumping] = useState(false);
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);
  const crashAudioRef = useRef<HTMLAudioElement>(null);
  const coinAudioRef = useRef<HTMLAudioElement>(null);

  useInput(() => {
    jump();
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 100);
  });

  useEffect(() => {
    if (gameState.isGameOver) {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 200);
        if (crashAudioRef.current) {
            crashAudioRef.current.volume = 0.5;
            crashAudioRef.current.play().catch(err => {
                console.error('Crash audio playback failed:', err);
            });
            // Trim audio to half its duration
            crashAudioRef.current.onloadedmetadata = () => {
                const halfDuration = (crashAudioRef.current!.duration / 2) * 1000;
                setTimeout(() => {
                    crashAudioRef.current!.pause();
                    crashAudioRef.current!.currentTime = 0;
                }, halfDuration);
            };
        }
    }
}, [gameState.isGameOver]);

  useEffect(() => {
    if (gameState.score > 0) {
      setShowScorePopup(true);
      setTimeout(() => setShowScorePopup(false), 800);
      if (coinAudioRef.current) { // Add this block
        coinAudioRef.current.play().catch(err => {
            console.error('Coin audio playback failed:', err);
        });
    }
    }
  }, [gameState.score]);

  useEffect(() => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = 0.3;
      backgroundAudioRef.current.play().catch(err => {
        console.error('Background audio playback failed:', err);
      });
    }
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${isShaking ? 'animate-screenShake' : ''}`}>
      <audio ref={backgroundAudioRef} src="/background-music.mp3" loop />
      <audio ref={crashAudioRef} src="/crash-sound.mp3" />
      <audio ref={coinAudioRef} src="/coin-sound.mp3" /> 
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