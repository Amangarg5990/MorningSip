import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function IntroQuote({ onScrollDown }) {
  const handleScroll = () => {
    if (onScrollDown) {
      onScrollDown();
    } else {
      const nextSection = document.getElementById('hero-showcase') || document.getElementById('collection');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="intro-quote-section" id="intro-quote">
      {/* Subtle ambient lighting */}
      <div className="intro-ambient-glow" />

      <div className="container intro-quote-container">
        {/* Subtitle tag */}
        <div className="intro-brand-tag">
          M O R N I N G &nbsp; S I P
        </div>

        {/* Main Quote Title */}
        <h1 className="intro-quote-title">
          <span className="quote-line-1">Let's make your</span>
          <span className="quote-line-2">next cup special.</span>
        </h1>

        {/* Scroll down trigger */}
        <div className="intro-scroll-wrapper">
          <button
            onClick={handleScroll}
            className="intro-scroll-btn"
            aria-label="Scroll down to explore collection"
          >
            <span className="intro-scroll-text">Scroll to explore</span>
            <div className="intro-mouse-pill">
              <div className="intro-mouse-wheel" />
            </div>
            <ChevronDown size={20} className="intro-chevron" />
          </button>
        </div>
      </div>
    </section>
  );
}
