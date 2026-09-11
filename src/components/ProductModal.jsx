import React, { useState, useEffect } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Check, 
  Layers, 
  Droplets, 
  Flame, 
  Compass, 
  Calendar, 
  Sparkles,
  Coffee
} from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [vesselSize, setVesselSize] = useState('cup'); // 'cup' (250ml), 'mug' (350ml), 'pot' (600ml)
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Reset active photo index when opened or product changes
  useEffect(() => {
    setSelectedImageIdx(0);
    setQuantity(1);
  }, [product]);

  if (!product) return null;

  const gallery = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [{ label: 'Full View', url: product.image, caption: product.name }];

  const activeImage = gallery[selectedImageIdx] || gallery[0];

  // Dynamic dosage calculations based on vessel size
  const vesselConfigs = {
    cup: { name: 'Gaiwan / Cup (250ml)', volumeMl: 250, multiplier: 1.0, icon: '🍵' },
    mug: { name: 'Morning Mug (350ml)', volumeMl: 350, multiplier: 1.4, icon: '☕' },
    pot: { name: 'Artisan Teapot (600ml)', volumeMl: 600, multiplier: 2.4, icon: '🫖' }
  };

  const currentVessel = vesselConfigs[vesselSize];
  const baseGrams = parseFloat(product.steepGuide?.ratio?.match(/([0-9.]+)\s*g/)?.[1] || '2.5');
  const calculatedGrams = (baseGrams * currentVessel.multiplier).toFixed(1);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-coder" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-grid-layout">
          {/* Left Column: Interactive Multi-Photo Gallery */}
          <div className="modal-gallery-col">
            <div className="modal-main-image-wrap">
              <img
                src={activeImage.url}
                alt={activeImage.caption || product.name}
                className="modal-main-image"
              />
              <div className="image-caption-tag">
                <span>{activeImage.label}</span> • {activeImage.caption}
              </div>
            </div>

            {/* Thumbnails Row */}
            {gallery.length > 1 && (
              <div className="modal-thumbnails-strip">
                {gallery.map((item, idx) => (
                  <button
                    key={idx}
                    className={`modal-thumb-btn ${selectedImageIdx === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImageIdx(idx)}
                    title={item.label}
                  >
                    <img src={item.url} alt={item.label} />
                    <span className="thumb-label">{item.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Quick Provenance Badges */}
            <div className="modal-provenance-chips">
              <div className="provenance-chip">
                <Compass size={14} className="text-emerald" />
                <span>Terroir: <strong>{product.origin}</strong></span>
              </div>
              {product.elevation && (
                <div className="provenance-chip">
                  <Flame size={14} className="text-gold" />
                  <span>Altitude: <strong>{product.elevation}</strong></span>
                </div>
              )}
              {product.lotNumber && (
                <div className="provenance-chip">
                  <code className="text-gold">{product.lotNumber}</code>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Specifications & Interaction */}
          <div className="modal-details-col">
            <div className="modal-header-meta">
              <div className="rating-pill">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span>{product.rating}</span>
                <span className="reviews-dim">({product.reviewsCount} verified sommelier reviews)</span>
              </div>

              <button
                className={`wishlist-pill-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => onToggleWishlist(product.id)}
              >
                <Heart size={16} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : 'currentColor'} />
                <span>{isWishlisted ? 'Saved' : 'Save'}</span>
              </button>
            </div>

            <h2 className="modal-product-title font-serif">
              {product.name}
            </h2>
            
            <p className="modal-product-tagline">
              {product.tagline}
            </p>

            <p className="modal-product-desc">
              {product.description}
            </p>

            {/* Sommelier Tasting Notes */}
            <div className="modal-section-box">
              <div className="section-label-coder">
                <span>TASTING PROFILE & VOLATILES</span>
              </div>
              <div className="flavor-pills">
                {product.flavorNotes.map((note, idx) => (
                  <span key={idx} className="flavor-pill flavor-pill-lg">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="modal-specs-table">
              <div className="specs-row">
                <span className="specs-key">Harvest Season</span>
                <span className="specs-val">{product.harvestSeason || 'Peak Flush 2026'}</span>
              </div>
              <div className="specs-row">
                <span className="specs-key">Oxidation Level</span>
                <span className="specs-val">{product.oxidationLevel || 'Artisanal Reserve'}</span>
              </div>
              <div className="specs-row">
                <span className="specs-key">Cultivar / Clone</span>
                <span className="specs-val">{product.cultivar || 'Heritage Single Origin'}</span>
              </div>
              <div className="specs-row">
                <span className="specs-key">Caffeine Grade</span>
                <span className="specs-val">{product.caffeine} Level</span>
              </div>
            </div>

            {/* Interactive Steeping Dosage Calculator */}
            <div className="modal-steep-calculator">
              <div className="calculator-header">
                <div className="calc-title">
                  <Clock size={16} /> Precision Steeping & Ratio Calculator
                </div>
                <div className="vessel-selector">
                  {Object.entries(vesselConfigs).map(([key, cfg]) => (
                    <button
                      key={key}
                      className={`vessel-btn ${vesselSize === key ? 'active' : ''}`}
                      onClick={() => setVesselSize(key)}
                    >
                      <span>{cfg.icon}</span>
                      <span>{key.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="calculator-readout-grid">
                <div className="calc-metric">
                  <div className="metric-label">Leaf Dosage</div>
                  <div className="metric-value">{calculatedGrams}g</div>
                  <div className="metric-sub">for {currentVessel.volumeMl}ml water</div>
                </div>
                <div className="calc-metric">
                  <div className="metric-label">Water Temp</div>
                  <div className="metric-value">{product.steepGuide?.temp?.split('(')[0] || '95°C'}</div>
                  <div className="metric-sub">Pure mountain spring water</div>
                </div>
                <div className="calc-metric">
                  <div className="metric-label">Infusion Time</div>
                  <div className="metric-value">{product.steepGuide?.time || '3 mins'}</div>
                  <div className="metric-sub">{product.steepGuide?.tools || 'Fine Gaiwan or Pot'}</div>
                </div>
              </div>
            </div>

            {/* Price & Cart Actions */}
            <div className="modal-actions-bar">
              <div className="price-container">
                <div className="current-price-huge">${product.price}</div>
                {product.originalPrice && (
                  <div className="original-price-strike">${product.originalPrice}</div>
                )}
                <div className="pouch-size-note">100g Vacuum Foil Pouch</div>
              </div>

              {/* Quantity Counter */}
              <div className="qty-counter-coder">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-display">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add Button */}
              <button
                className="btn-primary modal-add-btn"
                onClick={handleAdd}
              >
                {added ? (
                  <>
                    <Check size={18} /> Added ({quantity}) to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} /> Add to Bag • ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
