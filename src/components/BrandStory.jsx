import React, { useState } from 'react';
import { MapPin, Globe, Leaf, Heart, Compass, ShieldCheck, Award } from 'lucide-react';

const GARDENS = [
  {
    id: 'meghalaya',
    region: 'Khasi Hills, Meghalaya, India',
    coordinates: '25.57° N, 91.89° E',
    teaType: 'Cloud Forest Oolong & Golden Needle',
    elevation: '5,200 ft Altitude',
    harvest: 'Spring Mountain Mist Harvest',
    story: 'Nestled in the pristine sacred forests of the Khasi Hills—the world-renowned "Abode of the Clouds". Nurtured by pure Himalayan rainfall and perpetual cloud cover, smallholder tribal growers handcraft rare artisan oolongs with sweet apricot notes and clean mountain energy.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'assam',
    region: 'Upper Assam Valley, India',
    coordinates: '26.75° N, 94.21° E',
    teaType: 'Estate Golden Tips & Royal Malty CTC',
    elevation: '350 ft Tropical Floodplain',
    harvest: 'Peak Second Flush Harvest',
    story: 'Flanked by the mighty Brahmaputra River with nutrient-dense alluvial soil. Intense tropical rainfall and high humidity create the richest, deeply malty black teas on earth, laden with precious golden tips and deep amber warmth.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'darjeeling',
    region: 'Darjeeling, West Bengal, India',
    coordinates: '27.04° N, 88.26° E',
    teaType: 'Champagne First Flush & Imperial Muscatel',
    elevation: '6,000 ft Himalayan Ridge',
    harvest: 'Early Spring Dawn Harvest',
    story: 'Perched along misty Himalayan ridges directly beneath snow-capped peaks. Cold mountain nights and springtime dawn mist yield the celebrated "Champagne of Teas"—renowned for its refined muscatel grape bouquet and floral delicacy.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'nilgiri',
    region: 'Nilgiri Blue Mountains, Tamil Nadu, India',
    coordinates: '11.41° N, 76.70° E',
    teaType: 'Winter Frost Harvest & Aromatic Orthodox',
    elevation: '6,500 ft High Ridge',
    harvest: 'January Frost Harvest',
    story: 'Cultivated in the majestic Western Ghats where morning ground frost meets high-altitude sunshine. The cold stress concentrates sweet essential oils in the tender leaves, producing an exquisitely fragrant, brisk, and non-bitter amber liquor.',
    image: 'https://images.unsplash.com/photo-1531969177552-b883017cf7b5?auto=format&fit=crop&w=1200&q=85'
  }
];

export default function BrandStory() {
  const [activeGarden, setActiveGarden] = useState(GARDENS[0]);

  return (
    <section className="section brand-story-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">TERROIR EXPEDITIONS // 100% SINGLE-ORIGIN</div>
          <h2 className="section-title">From India's Pristine Terroirs to Your Cup</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto' }}>
            We trade directly with heritage smallholder tea gardens across Meghalaya, Upper Assam, Darjeeling, and the Nilgiri Blue Mountains.
          </p>
        </div>

        {/* Garden selector grid */}
        <div className="story-explorer-grid">
          <div className="garden-nav-list">
            <div className="coder-sublabel">
              <span>EXPLORE SOURCE TERROIR</span>
            </div>

            <div className="garden-buttons-stack">
              {GARDENS.map((g) => {
                const isActive = activeGarden.id === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setActiveGarden(g)}
                    className={`garden-nav-card ${isActive ? 'active' : ''}`}
                  >
                    <div className="garden-card-top">
                      <div className="garden-region">
                        <MapPin size={16} className="text-emerald" />
                        <span>{g.region}</span>
                      </div>
                      <code className="garden-coord">{g.coordinates}</code>
                    </div>
                    <div className="garden-meta-sub">
                      <span>{g.teaType}</span> • <span>{g.elevation}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Garden Highlight Box */}
          <div className="garden-active-display">
            <div className="garden-image-frame">
              <img 
                src={activeGarden.image} 
                alt={activeGarden.region} 
                className="garden-hero-img" 
              />
              <div className="garden-badge-float">
                <Compass size={14} className="text-gold" />
                <span>{activeGarden.coordinates}</span>
              </div>
            </div>
            
            <div className="garden-info-body">
              <div className="garden-harvest-tag">
                {activeGarden.harvest} • {activeGarden.elevation}
              </div>
              <h3 className="garden-title font-serif">
                {activeGarden.region}
              </h3>
              <p className="garden-story-text">
                {activeGarden.story}
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability & Direct Trade Badges */}
        <div className="sustainability-grid">
          <div className="coder-feature-card">
            <div className="feature-icon-bubble bubble-emerald">
              <Leaf size={22} />
            </div>
            <h4 className="feature-card-title">100% Compostable Pouch</h4>
            <p className="feature-card-desc">Zero foil waste. Plant-derived non-GMO sugarcane barrier pouches that break down cleanly in 90 days.</p>
          </div>

          <div className="coder-feature-card">
            <div className="feature-icon-bubble bubble-gold">
              <Heart size={22} />
            </div>
            <h4 className="feature-card-title">Direct Artisan Premium</h4>
            <p className="feature-card-desc">We bypass colonial middleman auction houses, paying 3.5x above standard market prices directly to growers.</p>
          </div>

          <div className="coder-feature-card">
            <div className="feature-icon-bubble bubble-blue">
              <Globe size={22} />
            </div>
            <h4 className="feature-card-title">Carbon Neutral Logistics</h4>
            <p className="feature-card-desc">Every shipment is verified carbon-neutral through indigenous tea estate rainforest restoration projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
