import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

export default function Hero({ onExplore, onBenefits }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left Column: Editorial & Technical Content */}
        <div className="hero-content-col">
          {/* Terroir Coordinates Telemetry Pill */}
          <div className="hero-telemetry-badge">
            <Compass size={13} className="text-emerald" />
            <span className="telemetry-text">TERROIRS 2026 // 26.75°N ASSAM • 27.04°N DARJEELING • 11.41°N NILGIRI</span>
          </div>
          
          <h1 className="hero-title font-serif">
            India's Legendary Teas. <br />
            <span className="hero-title-accent">Direct from Heritage Terroirs.</span>
          </h1>

          <p className="hero-description">
            Single-estate orthodox whole leaf harvests plucked at dawn across Upper Assam, high-altitude Darjeeling ridges, Nilgiri Blue Mountains, and the cloud rainforests of Meghalaya. Unblended, chemical-free, and fully traceable.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={onExplore}>
              <span>Explore 2026 Collection</span>
              <ArrowRight size={17} />
            </button>
            <button className="btn-secondary" onClick={onBenefits}>
              <Sparkles size={16} />
              <span>Tea Benefits & Science</span>
            </button>
          </div>

          {/* Technical Provenance Metrics */}
          <div className="hero-stats-bar">
            <div className="stat-cell">
              <div className="stat-number">4 Iconic</div>
              <div className="stat-label">Terroirs of India</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-cell">
              <div className="stat-number">6,800 ft</div>
              <div className="stat-label">Peak Pluck Elevation</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-cell">
              <div className="stat-number">100%</div>
              <div className="stat-label">Single-Garden Traceable</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Craft Showcase */}
        <div className="hero-image-wrapper">
          <div className="hero-card-frame">
            <img
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85"
              alt="Artisanal Indian Whole Leaf Tea Pouring"
              className="hero-main-img"
            />
            
            {/* Coder-style Technical Spec Overlay */}
            <div className="hero-spec-overlay">
              <div className="spec-indicator-dot" />
              <div className="spec-text-group">
                <div className="spec-headline">FIRST FLUSH & GOLDEN TIPS RESERVE</div>
                <div className="spec-subline">Hand-plucked tender shoots • Vacuum sealed at origin</div>
              </div>
              <code className="spec-lot-code">LOT: 2026-IND</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
