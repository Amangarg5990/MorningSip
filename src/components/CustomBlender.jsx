import React, { useState } from 'react';
import { BLENDER_BASES, BLENDER_BOTANICALS, BLENDER_SPICES } from '../data/products';
import { Sliders, Sparkles, Check, ShoppingBag, Plus, RefreshCw } from 'lucide-react';

export default function CustomBlender({ onAddCustomToCart }) {
  const [selectedBase, setSelectedBase] = useState(BLENDER_BASES[0]);
  const [selectedBotanicals, setSelectedBotanicals] = useState([BLENDER_BOTANICALS[0]]);
  const [selectedSpices, setSelectedSpices] = useState([BLENDER_SPICES[0]]);
  const [blendName, setBlendName] = useState('My Signature Artisanal Blend');
  const [added, setAdded] = useState(false);

  const toggleBotanical = (botanical) => {
    if (selectedBotanicals.find(b => b.id === botanical.id)) {
      if (selectedBotanicals.length > 1) {
        setSelectedBotanicals(selectedBotanicals.filter(b => b.id !== botanical.id));
      }
    } else {
      if (selectedBotanicals.length < 3) {
        setSelectedBotanicals([...selectedBotanicals, botanical]);
      }
    }
  };

  const toggleSpice = (spice) => {
    if (selectedSpices.find(s => s.id === spice.id)) {
      setSelectedSpices(selectedSpices.filter(s => s.id !== spice.id));
    } else {
      if (selectedSpices.length < 2) {
        setSelectedSpices([...selectedSpices, spice]);
      }
    }
  };

  const handleAddToCart = () => {
    const customProduct = {
      id: `custom-blend-${Date.now()}`,
      name: blendName || 'Custom Reserve Blend',
      tagline: `Base: ${selectedBase.name} + ${selectedBotanicals.map(b=>b.name).join(', ')}`,
      price: 29,
      origin: 'Custom Artisan Creation',
      category: 'Bespoke Blend',
      rating: 5.0,
      reviewsCount: 1,
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
      flavorNotes: [selectedBase.type, ...selectedBotanicals.map(b=>b.note), ...selectedSpices.map(s=>s.name)],
      steepGuide: {
        temp: '85°C - 90°C',
        time: '3 - 4 mins',
        ratio: '3g per 250ml',
        tools: 'Infuser Mug'
      }
    };

    onAddCustomToCart(customProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Bespoke DIY Mixology</div>
          <h2 className="section-title">Craft Your Signature Tea Blend</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Select your master tea base, infuse with floral botanicals, and warm with freshly milled spices. We will hand-blend and tin your recipe.
          </p>
        </div>

        <div className="blender-container">
          {/* Controls */}
          <div>
            {/* Step 1: Base */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="blender-section-title">1. Choose Tea Base</div>
              <div className="blender-options">
                {BLENDER_BASES.map((b) => (
                  <div
                    key={b.id}
                    className={`blender-chip ${selectedBase.id === b.id ? 'active' : ''}`}
                    onClick={() => setSelectedBase(b)}
                  >
                    {b.name} ({b.type})
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Botanicals */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="blender-section-title">2. Add Floral & Botanical Notes (Up to 3)</div>
              <div className="blender-options">
                {BLENDER_BOTANICALS.map((bot) => {
                  const isSelected = selectedBotanicals.some(b => b.id === bot.id);
                  return (
                    <div
                      key={bot.id}
                      className={`blender-chip ${isSelected ? 'active' : ''}`}
                      onClick={() => toggleBotanical(bot)}
                    >
                      {bot.name}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Spices */}
            <div style={{ marginBottom: '2rem' }}>
              <div className="blender-section-title">3. Add Warming Spices (Up to 2)</div>
              <div className="blender-options">
                {BLENDER_SPICES.map((sp) => {
                  const isSelected = selectedSpices.some(s => s.id === sp.id);
                  return (
                    <div
                      key={sp.id}
                      className={`blender-chip ${isSelected ? 'active' : ''}`}
                      onClick={() => toggleSpice(sp)}
                    >
                      {sp.name}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Name your Creation */}
            <div>
              <div className="blender-section-title">4. Name Your Personal Blend</div>
              <input
                type="text"
                value={blendName}
                onChange={(e) => setBlendName(e.target.value)}
                placeholder="e.g. Royal Emperor's Secret"
                style={{
                  width: '100%',
                  background: 'var(--bg-dark)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.8rem 1rem',
                  color: 'white',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-serif)',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Visual Preview */}
          <div className="blender-preview-card">
            <div className="tea-jar-visual">
              <div className="jar-lid"></div>
              <div
                className="jar-leaves"
                style={{
                  height: '75%',
                  background: `linear-gradient(to top, ${selectedBase.color}, ${selectedBotanicals[0]?.color || '#e6c594'})`
                }}
              ></div>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              100g Artisan Loose Tin
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.6rem', margin: '0.5rem 0', color: 'var(--text-main)' }}>
              {blendName || 'Unnamed Creation'}
            </h3>

            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              <strong>Base:</strong> {selectedBase.name}<br />
              <strong>Botanicals:</strong> {selectedBotanicals.map(b => b.name).join(', ') || 'None'}<br />
              <strong>Spices:</strong> {selectedSpices.map(s => s.name).join(', ') || 'None'}
            </div>

            <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
              $29.00
            </div>

            <button className="btn-primary" onClick={handleAddToCart} style={{ width: '100%', justifyContent: 'center' }}>
              {added ? <Check size={18} /> : <ShoppingBag size={18} />}
              {added ? 'Custom Tin Added!' : 'Order Custom Tin ($29)'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
