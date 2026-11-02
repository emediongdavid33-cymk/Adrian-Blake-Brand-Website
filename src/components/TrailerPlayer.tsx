import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Clapperboard, Sparkles } from 'lucide-react';

interface TrailerScene {
  timestamp: string;
  sceneDescription: string;
  voiceoverOrText: string;
}

interface TrailerPlayerProps {
  title: string;
  author: string;
  genre: string;
  scenes: TrailerScene[];
  aspectRatio?: '16:9' | '9:16';
  className?: string;
}

export const TrailerPlayer: React.FC<TrailerPlayerProps> = ({
  title,
  author,
  genre,
  scenes,
  aspectRatio = '16:9',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSceneIdx, setCurrentSceneIdx] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  // Web Audio Context for subtle atmospheric drone
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const initAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();

        const gainNode = audioCtxRef.current.createGain();
        gainNode.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
        gainNode.connect(audioCtxRef.current.destination);
        gainNodeRef.current = gainNode;

        // Low cinematic drone
        const osc1 = audioCtxRef.current.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(65.41, audioCtxRef.current.currentTime); // C2

        const osc2 = audioCtxRef.current.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(98.0, audioCtxRef.current.currentTime); // G2

        // Soft low-pass filter
        const filter = audioCtxRef.current.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(280, audioCtxRef.current.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(isMuted ? 0 : 0.08, audioCtxRef.current.currentTime, 0.4);
      }
    } catch {
      // Audio autoplay restrictions or unsupported
    }
  };

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (!audioCtxRef.current) {
      initAudio();
    }
    if (audioCtxRef.current && gainNodeRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(nextMuted ? 0 : 0.08, audioCtxRef.current.currentTime, 0.2);
    }
  };

  // Timeline progression
  useEffect(() => {
    if (!isPlaying) return;

    const totalSeconds = 24; // 24s full demo loop
    const intervalMs = 100;
    const step = 100 / ((totalSeconds * 1000) / intervalMs);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          setCurrentSceneIdx(0);
          return 0;
        }

        // Calculate active scene based on progress
        const sceneCount = scenes.length;
        const segment = 100 / sceneCount;
        const calculatedScene = Math.min(sceneCount - 1, Math.floor(next / segment));
        setCurrentSceneIdx(calculatedScene);

        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, scenes.length]);

  const togglePlay = () => {
    if (!hasStarted) {
      setHasStarted(true);
      initAudio();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setProgress(0);
    setCurrentSceneIdx(0);
    setIsPlaying(true);
  };

  const currentScene = scenes[currentSceneIdx] || scenes[0];

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Screen Frame */}
      <div
        className={`relative w-full rounded-md overflow-hidden bg-[#0A0B0E] border border-white/10 shadow-2xl ${
          aspectRatio === '9:16' ? 'max-w-[340px] mx-auto aspect-[9/16]' : 'aspect-video'
        }`}
      >
        {/* Dynamic Atmospheric Canvas Background */}
        <div className="absolute inset-0 bg-radial from-[#1E2330]/40 via-[#0A0B0E] to-[#050608]" />

        {/* Cinematic Film Grain & Dust Particles Simulation */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(197, 168, 128, 0.15) 0%, transparent 60%)',
          }}
        />

        {/* Atmospheric Moving Rings */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-1000 ${
            isPlaying ? 'scale-105' : 'scale-100'
          }`}
        >
          <div className="w-64 h-64 border border-[#C5A880]/20 rounded-full animate-spin [animation-duration:40s]" />
          <div className="absolute w-96 h-96 border border-white/5 rounded-full animate-spin [animation-duration:60s] [animation-direction:reverse]" />
        </div>

        {/* Top Header Overlay */}
        <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between text-xs text-white/70 bg-gradient-to-b from-black/80 to-transparent z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
            <span className="tracking-widest uppercase text-[10px] font-sans">
              Adrian Blake Cinema Studio
            </span>
          </div>
          <div className="font-mono text-[11px] text-white/60">
            {currentScene?.timestamp || '00:00'} · 4K UHD
          </div>
        </div>

        {/* Center Content / Active Scene Voiceover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 text-center z-10">
          <div className="max-w-xl space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C5A880] font-sans font-medium">
              Scene {currentSceneIdx + 1} of {scenes.length}
            </span>

            <blockquote className="text-lg sm:text-2xl md:text-3xl font-serif text-[#F5F2EB] leading-relaxed italic tracking-wide">
              {currentScene?.voiceoverOrText}
            </blockquote>

            <p className="text-xs text-white/50 font-sans tracking-wider uppercase pt-2">
              Visual Direction: {currentScene?.sceneDescription}
            </p>
          </div>
        </div>

        {/* Bottom Playback HUD */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20 space-y-3">
          {/* Progress Bar */}
          <div
            className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newProgress = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
              setProgress(newProgress);
              const segment = 100 / scenes.length;
              setCurrentSceneIdx(Math.min(scenes.length - 1, Math.floor(newProgress / segment)));
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-[#C5A880] to-[#E5D3B8] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-white/90">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-[#F5F2EB]"
                aria-label={isPlaying ? 'Pause teaser' : 'Play teaser'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white"
                title="Restart"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={toggleSound}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs text-white/80 transition-colors"
                title={isMuted ? 'Unmute atmospheric audio' : 'Mute audio'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/50" /> : <Volume2 className="w-3.5 h-3.5 text-[#C5A880]" />}
                <span className="text-[10px] uppercase tracking-wider">{isMuted ? 'Ambient: Off' : 'Ambient: On'}</span>
              </button>
            </div>

            <div className="text-right">
              <span className="text-xs font-serif font-medium text-[#F5F2EB]">{title}</span>
              <span className="text-[10px] text-white/50 block font-sans">{author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Storyboard Script Breakout */}
      <div className="bg-[#F3EFE7] p-4 rounded-sm border border-[#E6DFD3] text-xs space-y-2">
        <div className="flex items-center justify-between text-[#7A746B] border-b border-[#E6DFD3] pb-2">
          <span className="uppercase tracking-widest font-semibold text-[10px] text-[#121212]">
            Cinematic Storyboard Breakdown
          </span>
          <span>{scenes.length} Curated Beats</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
          {scenes.map((scene, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setCurrentSceneIdx(idx);
                setProgress((idx / scenes.length) * 100);
              }}
              className={`p-2.5 text-left rounded-xs transition-colors border ${
                currentSceneIdx === idx
                  ? 'bg-[#121212] text-[#F5F2EB] border-black shadow-sm'
                  : 'bg-white text-[#4A453E] border-[#E6DFD3] hover:border-[#121212]'
              }`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono opacity-60 mb-1">
                <span>Beat {idx + 1}</span>
                <span>{scene.timestamp}</span>
              </div>
              <p className="text-[11px] line-clamp-2 leading-tight font-serif italic">
                {scene.voiceoverOrText}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
