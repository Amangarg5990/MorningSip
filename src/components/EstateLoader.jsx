import React, { useState, useEffect } from 'react';

export default function EstateLoader({ onComplete }) {
  // stage 0: 0 - 2000ms: Heroic Emblem & Rising Sunrise Aura
  // stage 1: 2000ms - 3900ms: "Every cup has a story" Poetic Reveal
  // stage 2: 3900ms - 4500ms: Smooth Luxury Curtain Dissolve
  const [stage, setStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during loader
    document.body.style.overflow = 'hidden';

    // Progress counter animation
    const startTime = Date.now();
    const duration = 3900;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct >= 100) clearInterval(interval);
    }, 40);

    // Stage 0 -> 1 at exactly 2000ms
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 2000);

    // Stage 1 -> 2 (Curtain exit) at 3900ms
    const timer2 = setTimeout(() => {
      setIsExiting(true);
    }, 3900);

    // Complete & unmount at 4500ms
    const timer3 = setTimeout(() => {
      document.body.style.overflow = 'unset';
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: `radial-gradient(ellipse at 50% 40%, #fefcf8 0%, #f6f1e6 55%, #ede6d6 100%)`
      }}
    >
      {/* Ambient Moving Sunlight Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-secondary/15 via-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      {/* Main Center Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto w-full">
        
        {/* Emblem Wrapper */}
        <div
          className={`relative flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            stage === 0
              ? 'scale-100 translate-y-0 opacity-100'
              : 'scale-90 -translate-y-2 opacity-95'
          }`}
        >
          {/* Animated Steam SVG Rising from the Center Cup */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none w-24 h-20 opacity-80">
            <svg viewBox="0 0 100 80" className="w-full h-full">
              <path
                d="M45,70 Q40,45 52,30 T48,5"
                fill="none"
                stroke="#D49B35"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="40"
                strokeDashoffset="0"
                className="animate-pulse opacity-70"
              />
              <path
                d="M56,70 Q62,48 52,28 T58,8"
                fill="none"
                stroke="#3f6653"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="35"
                strokeDashoffset="0"
                className="animate-pulse opacity-60"
                style={{ animationDelay: '0.4s' }}
              />
            </svg>
          </div>

          {/* Glowing Sunburst Halo */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-[#fcbf55]/30 via-[#D49B35]/15 to-transparent rounded-full blur-2xl pointer-events-none -z-10"></div>

          {/* Clean Transparent Logo Emblem (No black borders, no card edges) */}
          <div className="relative max-w-[220px] xs:max-w-[280px] sm:max-w-[360px] md:max-w-[410px] mx-auto filter drop-shadow-[0_14px_28px_rgba(1,45,29,0.12)]">
            <img
              src="/images/morning-sip-clean.png"
              alt="Morning Sip - Single Estate Indian Teas Since 2026"
              className="w-full h-auto object-contain transition-transform duration-1000 ease-out"
            />
          </div>
        </div>

        {/* Phase 2 (After 2 Seconds): "Every cup has a story" */}
        <div
          className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center mt-3 sm:mt-5 ${
            stage >= 1
              ? 'opacity-100 translate-y-0 max-h-56'
              : 'opacity-0 translate-y-6 max-h-0 pointer-events-none overflow-hidden'
          }`}
        >
          {/* Gilded Ribbon Filigree */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D49B35] to-transparent"></div>
            <span className="text-secondary text-[11px] sm:text-sm font-serif italic">ESTATE TERROIR</span>
            <div className="w-10 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D49B35] to-transparent"></div>
          </div>

          {/* High-Fashion Editorial Tagline in Cape Font */}
          <h2 className="font-cape text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-primary font-bold tracking-tight leading-tight drop-shadow-sm">
            “Every cup has a story”
          </h2>

          <p className="font-sans text-xs sm:text-sm text-on-surface-variant font-light tracking-wide max-w-md mx-auto mt-2 leading-relaxed">
            Direct orthodox harvests from the mist-veiled estates of Assam, Darjeeling & Nilgiri.
          </p>
        </div>

        {/* Cinematic Golden Loading Indicator */}
        <div className="flex flex-col items-center gap-2 mt-8 sm:mt-10 w-60 sm:w-72">
          <div className="w-full h-[2.5px] bg-secondary/15 rounded-full overflow-hidden relative p-[0.5px]">
            <div
              className="h-full bg-gradient-to-r from-[#1b4332] via-[#D49B35] to-[#fcbf55] rounded-full transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(212,155,53,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between w-full text-[11px] font-mono tracking-[0.2em] text-secondary uppercase font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
              Steeping Harvest
            </span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* Luxury Estate Skip Action */}
      <button
        onClick={handleSkip}
        className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 text-[11px] font-mono tracking-[0.25em] text-[#012d1d]/60 hover:text-primary transition-all py-1.5 px-4 rounded-full border border-secondary/25 hover:border-secondary/60 bg-surface/40 backdrop-blur-sm shadow-sm cursor-pointer hover:scale-105 active:scale-95 uppercase flex items-center gap-1.5"
        aria-label="Skip to main page"
      >
        <span>Enter Estate</span>
        <span className="text-xs">→</span>
      </button>
    </div>
  );
}
