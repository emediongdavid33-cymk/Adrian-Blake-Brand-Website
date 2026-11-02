import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, Sparkles, Layers, Eye } from 'lucide-react';

interface BookMockupProps {
  title?: string;
  subtitle?: string;
  author?: string;
  palette?: {
    bg: string;
    text: string;
    accent: string;
    spine: string;
    foil: string;
  };
  graphicStyle?: 'astronomical' | 'gothic' | 'botanical' | 'brutalist' | 'fantasy' | 'thriller';
  interactive?: boolean;
  className?: string;
}

export const BookMockup3D: React.FC<BookMockupProps> = ({
  title = 'The Obsidian Horizon',
  subtitle = 'A Novel of the Deep Void',
  author = 'E. V. Vance',
  palette = {
    bg: '#0B0D14',
    text: '#F5F2EB',
    accent: '#C5A880',
    spine: '#10141F',
    foil: '#E5D3B8',
  },
  graphicStyle = 'astronomical',
  interactive = true,
  className = '',
}) => {
  // 3D rotation angles
  const [rotateX, setRotateX] = useState<number>(10);
  const [rotateY, setRotateY] = useState<number>(-24);
  const [finish, setFinish] = useState<'foil' | 'matte' | 'cloth'>('foil');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive || !isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    setRotateY((prev) => Math.max(-65, Math.min(45, prev + deltaX * 0.45)));
    setRotateX((prev) => Math.max(-25, Math.min(25, prev - deltaY * 0.45)));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!interactive) return;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if capture already released
    }
  };

  const setPresetAngle = (x: number, y: number) => {
    setRotateX(x);
    setRotateY(y);
  };

  // Graphic ornament based on style
  const renderCoverArt = () => {
    switch (graphicStyle) {
      case 'gothic':
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 200 280" fill="none" stroke="currentColor">
            <rect x="20" y="20" width="160" height="240" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="30" y="30" width="140" height="220" strokeWidth="1.5" />
            <circle cx="100" cy="140" r="45" strokeWidth="1" />
            <circle cx="100" cy="140" r="40" strokeWidth="0.75" />
            <path d="M100 85 L100 195 M55 140 L145 140" strokeWidth="0.75" />
            <path d="M75 115 L125 165 M75 165 L125 115" strokeWidth="0.5" />
            <polygon points="100,70 106,86 122,92 106,98 100,114 94,98 78,92 94,86" fill="currentColor" fillOpacity="0.2" />
          </svg>
        );
      case 'botanical':
        return (
          <svg className="w-full h-full opacity-55" viewBox="0 0 200 280" fill="none" stroke="currentColor">
            <path d="M100 240 C100 180, 70 150, 70 90 C70 50, 100 30, 100 30 C100 30, 130 50, 130 90 C130 150, 100 180, 100 240" strokeWidth="1.2" />
            <circle cx="100" cy="90" r="28" strokeWidth="0.8" />
            <path d="M50 140 Q100 110 150 140" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="100" y1="40" x2="100" y2="230" strokeWidth="0.5" />
            <circle cx="100" cy="40" r="3" fill="currentColor" />
            <circle cx="70" cy="120" r="2.5" fill="currentColor" />
            <circle cx="130" cy="120" r="2.5" fill="currentColor" />
          </svg>
        );
      case 'brutalist':
        return (
          <svg className="w-full h-full opacity-40" viewBox="0 0 200 280" fill="none" stroke="currentColor">
            <rect x="25" y="40" width="150" height="18" strokeWidth="1" />
            <line x1="25" y1="80" x2="175" y2="80" strokeWidth="2" />
            <line x1="25" y1="120" x2="175" y2="120" strokeWidth="1" />
            <line x1="25" y1="160" x2="175" y2="160" strokeWidth="1" />
            <line x1="25" y1="200" x2="175" y2="200" strokeWidth="0.5" />
            <circle cx="100" cy="140" r="30" strokeWidth="1.5" />
          </svg>
        );
      case 'thriller':
        return (
          <svg className="w-full h-full opacity-50" viewBox="0 0 200 280" fill="none" stroke="currentColor">
            <path d="M30 220 L70 120 L100 180 L130 90 L170 220" strokeWidth="1.5" />
            <line x1="20" y1="220" x2="180" y2="220" strokeWidth="2" />
            <line x1="100" y1="40" x2="100" y2="90" strokeWidth="1" strokeDasharray="4 2" />
            <circle cx="100" cy="35" r="4" fill="currentColor" />
          </svg>
        );
      case 'fantasy':
        return (
          <svg className="w-full h-full opacity-60" viewBox="0 0 200 280" fill="none" stroke="currentColor">
            <polygon points="100,45 145,130 100,215 55,130" strokeWidth="1.5" />
            <circle cx="100" cy="130" r="36" strokeWidth="1" />
            <path d="M100 45 L100 215 M55 130 L145 130" strokeWidth="0.75" />
            <circle cx="100" cy="70" r="3" fill="currentColor" />
            <circle cx="100" cy="190" r="3" fill="currentColor" />
          </svg>
        );
      case 'astronomical':
      default:
        return (
          <svg className="w-full h-full opacity-70" viewBox="0 0 200 280" fill="none" stroke="currentColor">
            <ellipse cx="100" cy="140" rx="65" ry="24" strokeWidth="1.2" transform="rotate(-20 100 140)" />
            <ellipse cx="100" cy="140" rx="55" ry="16" strokeWidth="0.75" transform="rotate(-20 100 140)" />
            <circle cx="100" cy="140" r="28" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="140" r="2" fill="currentColor" />
            <line x1="100" y1="35" x2="100" y2="95" strokeWidth="0.75" strokeDasharray="3 2" />
            <line x1="100" y1="185" x2="100" y2="245" strokeWidth="0.75" strokeDasharray="3 2" />
            <circle cx="100" cy="30" r="3" fill="currentColor" />
            <circle cx="100" cy="250" r="3" fill="currentColor" />
          </svg>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* 3D Scene Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`relative w-[280px] sm:w-[320px] md:w-[350px] h-[440px] sm:h-[480px] flex items-center justify-center perspective-1200 cursor-grab active:cursor-grabbing ${
          interactive ? 'touch-none' : ''
        }`}
      >
        {/* Soft realistic cast shadow beneath the book */}
        <div
          className="absolute -bottom-6 w-[260px] sm:w-[300px] h-[36px] rounded-full blur-xl pointer-events-none transition-all duration-300"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 50%, transparent 80%)',
            transform: `translate(${rotateY * 0.8}px, 0px) scale(${1 - Math.abs(rotateX) * 0.01})`,
          }}
        />

        {/* 3D Book Assembly */}
        <div
          className="relative w-[220px] sm:w-[250px] h-[330px] sm:h-[375px] transform-style-3d transition-transform duration-100 ease-out"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          {/* FRONT COVER */}
          <div
            className="absolute inset-0 rounded-r-md rounded-l-xs overflow-hidden transform-style-3d border border-black/20"
            style={{
              backgroundColor: palette.bg,
              color: palette.accent,
              transform: 'translateZ(18px)',
              boxShadow:
                finish === 'foil'
                  ? 'inset 0 0 100px rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.35)'
                  : 'inset 0 0 40px rgba(0,0,0,0.25), 0 20px 30px rgba(0,0,0,0.3)',
            }}
          >
            {/* Subtle paper grain / cloth weave texture */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage:
                  finish === 'cloth'
                    ? 'repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, #000, #000 1px, transparent 1px, transparent 3px)'
                    : 'radial-gradient(#fff 1px, transparent 1px)',
                backgroundSize: finish === 'cloth' ? '4px 4px' : '3px 3px',
              }}
            />

            {/* Foil light reflection sweep */}
            {finish === 'foil' && (
              <div
                className="absolute inset-0 pointer-events-none opacity-40 transition-opacity"
                style={{
                  background: `linear-gradient(${120 + rotateY}deg, transparent 20%, rgba(255,235,200,0.45) 45%, rgba(255,255,255,0.7) 50%, rgba(255,235,200,0.45) 55%, transparent 75%)`,
                }}
              />
            )}

            {/* Cover Layout */}
            <div className="relative h-full p-5 sm:p-6 flex flex-col justify-between z-10">
              {/* Header / Imprint */}
              <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em] font-medium border-b border-current/20 pb-2">
                <span>Collector’s Edition</span>
                <span>Vol. I</span>
              </div>

              {/* Cover Art Emblem */}
              <div className="w-28 h-36 mx-auto flex items-center justify-center my-2 text-current">
                {renderCoverArt()}
              </div>

              {/* Title & Author Block */}
              <div className="text-center space-y-2 pt-2 border-t border-current/20">
                <p className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase opacity-75">
                  {subtitle}
                </p>
                <h3
                  className={`text-xl sm:text-2xl font-serif font-medium tracking-wide leading-tight ${
                    finish === 'foil' ? 'gold-foil-text' : ''
                  }`}
                  style={{ color: finish === 'foil' ? undefined : palette.text }}
                >
                  {title}
                </h3>
                <div className="pt-1">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium" style={{ color: palette.text }}>
                    {author}
                  </span>
                </div>
              </div>

              {/* Studio Colophon at Base */}
              <div className="pt-2 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] opacity-60">
                <span>Adrian Blake Direction</span>
                <span>First Edition</span>
              </div>
            </div>

            {/* Hardcover Outer Bevel Highlight */}
            <div className="absolute top-0 right-0 bottom-0 w-[3px] bg-gradient-to-l from-white/30 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
          </div>

          {/* BOOK SPINE */}
          <div
            className="absolute top-0 bottom-0 left-0 w-[36px] transform-style-3d origin-left border-y border-black/30"
            style={{
              backgroundColor: palette.spine,
              color: palette.accent,
              transform: 'rotateY(-90deg) translateX(-18px)',
              boxShadow: 'inset -3px 0 10px rgba(0,0,0,0.6), inset 3px 0 8px rgba(255,255,255,0.08)',
            }}
          >
            {/* Spine Content (Rotated 90 degrees) */}
            <div className="h-full flex flex-col justify-between items-center py-4 px-1 text-center">
              <span className="text-[8px] tracking-[0.2em] uppercase font-medium">AB</span>
              <div className="transform -rotate-90 origin-center whitespace-nowrap text-[11px] font-serif tracking-widest font-medium" style={{ color: palette.text }}>
                {title.toUpperCase()}
              </div>
              <span className="text-[8px] tracking-[0.2em] uppercase font-sans font-medium">{author.split(' ').pop()}</span>
            </div>
          </div>

          {/* BOOK PAGES BLOCK (Right Edge) */}
          <div
            className="absolute top-[3px] bottom-[3px] right-0 w-[34px] transform-style-3d origin-right"
            style={{
              backgroundColor: '#EDE7DC',
              transform: 'rotateY(90deg) translateX(17px)',
              backgroundImage: 'repeating-linear-gradient(90deg, #DFD8CB 0px, #DFD8CB 1px, #EFE9DE 1px, #EFE9DE 2px)',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
            }}
          />

          {/* TOP PAGES BLOCK */}
          <div
            className="absolute top-0 left-[2px] right-[2px] h-[34px] transform-style-3d origin-top"
            style={{
              backgroundColor: '#ECE5D7',
              transform: 'rotateX(90deg) translateZ(17px)',
              backgroundImage: 'repeating-linear-gradient(0deg, #DFD8CB 0px, #DFD8CB 1px, #EDE7DB 1px, #EDE7DB 2px)',
              boxShadow: 'inset 0 0 8px rgba(0,0,0,0.25)',
            }}
          />

          {/* BOTTOM PAGES BLOCK */}
          <div
            className="absolute bottom-0 left-[2px] right-[2px] h-[34px] transform-style-3d origin-bottom"
            style={{
              backgroundColor: '#ECE5D7',
              transform: 'rotateX(-90deg) translateZ(17px)',
              backgroundImage: 'repeating-linear-gradient(0deg, #DFD8CB 0px, #DFD8CB 1px, #EDE7DB 1px, #EDE7DB 2px)',
              boxShadow: 'inset 0 0 8px rgba(0,0,0,0.25)',
            }}
          />

          {/* BACK COVER */}
          <div
            className="absolute inset-0 rounded-l-md rounded-r-xs overflow-hidden"
            style={{
              backgroundColor: palette.bg,
              transform: 'translateZ(-18px) rotateY(180deg)',
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.6)',
            }}
          >
            <div className="h-full p-6 flex flex-col justify-between text-left" style={{ color: palette.accent }}>
              <div className="space-y-3 pt-4">
                <div className="w-6 h-0.5 bg-current opacity-40 mb-3" />
                <p className="text-[10px] leading-relaxed opacity-80 font-sans" style={{ color: palette.text }}>
                  “A masterclass in tension and atmospheric depth. Transforms the genre into an existential symphony.”
                </p>
                <p className="text-[8px] uppercase tracking-wider font-semibold">— Literary Chronicle Review</p>
              </div>

              <div className="space-y-2 border-t border-current/20 pt-4">
                {/* Simulated Barcode */}
                <div className="w-28 h-9 bg-white/90 p-1 rounded-xs flex items-center justify-between">
                  <div className="flex gap-0.5 h-full items-end">
                    {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3].map((w, i) => (
                      <div key={i} className="bg-black h-full" style={{ width: `${w}px` }} />
                    ))}
                  </div>
                  <span className="text-[7px] text-black font-mono font-bold">$34.00</span>
                </div>
                <div className="flex justify-between items-center text-[7px] tracking-wider uppercase opacity-50">
                  <span>ISBN 978-0-99214-01-2</span>
                  <span>ADRIAN BLAKE STUDIOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      {interactive && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
          {/* Preset Angles */}
          <div className="flex items-center gap-1 bg-[#F0ECE2] p-1 rounded-sm border border-[#E3DC CE]/50">
            <button
              type="button"
              onClick={() => setPresetAngle(10, -24)}
              className={`px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors rounded-xs ${
                rotateX === 10 && rotateY === -24 ? 'bg-[#121212] text-[#F5F2EB]' : 'text-[#5A554E] hover:text-black'
              }`}
            >
              Perspective
            </button>
            <button
              type="button"
              onClick={() => setPresetAngle(0, 0)}
              className={`px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors rounded-xs ${
                rotateX === 0 && rotateY === 0 ? 'bg-[#121212] text-[#F5F2EB]' : 'text-[#5A554E] hover:text-black'
              }`}
            >
              Front
            </button>
            <button
              type="button"
              onClick={() => setPresetAngle(4, -60)}
              className={`px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors rounded-xs ${
                rotateX === 4 && rotateY === -60 ? 'bg-[#121212] text-[#F5F2EB]' : 'text-[#5A554E] hover:text-black'
              }`}
            >
              Spine
            </button>
            <button
              type="button"
              onClick={() => setPresetAngle(0, 180)}
              className={`px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors rounded-xs ${
                rotateX === 0 && rotateY === 180 ? 'bg-[#121212] text-[#F5F2EB]' : 'text-[#5A554E] hover:text-black'
              }`}
            >
              Back
            </button>
          </div>

          {/* Finish Selector */}
          <div className="flex items-center gap-1 bg-[#F0ECE2] p-1 rounded-sm border border-[#E3DCCE]/50">
            <button
              type="button"
              onClick={() => setFinish('foil')}
              className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors rounded-xs ${
                finish === 'foil' ? 'bg-[#121212] text-[#F5F2EB]' : 'text-[#5A554E] hover:text-black'
              }`}
              title="Gold foil stamping on cloth"
            >
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              Foil
            </button>
            <button
              type="button"
              onClick={() => setFinish('matte')}
              className={`px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors rounded-xs ${
                finish === 'matte' ? 'bg-[#121212] text-[#F5F2EB]' : 'text-[#5A554E] hover:text-black'
              }`}
              title="Soft touch matte laminate"
            >
              Matte
            </button>
            <button
              type="button"
              onClick={() => setFinish('cloth')}
              className={`px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors rounded-xs ${
                finish === 'cloth' ? 'bg-[#121212] text-[#F5F2EB]' : 'text-[#5A554E] hover:text-black'
              }`}
              title="Buckram library cloth"
            >
              Cloth
            </button>
          </div>

          <div className="text-[11px] text-[#7A746B] italic hidden sm:inline">
            Drag to rotate in 3D
          </div>
        </div>
      )}
    </div>
  );
};
