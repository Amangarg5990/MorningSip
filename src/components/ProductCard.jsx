import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, MapPin, Sparkles, Layers } from 'lucide-react';

export default function ProductCard({ product, onSelect, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [isHovered, setIsHovered] = useState(false);
  const secondaryImage = product.gallery && product.gallery.length > 1 ? product.gallery[1].url : null;

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-img-container" onClick={() => onSelect(product)} style={{ cursor: 'pointer' }}>
        <img 
          src={isHovered && secondaryImage ? secondaryImage : product.image} 
          alt={product.name} 
          className="product-img"
          loading="lazy" 
        />
        
        {/* Technical Provenance Header Monospace Tag */}
        <div className="product-batch-tag">
          <code>{product.lotNumber || 'RES-2026'}</code>
          {product.elevation && <span className="batch-sep">• {product.elevation.split(' ')[0]} ft</span>}
        </div>

        {/* Coder Badges */}
        <div className="product-tag-group">
          {product.isBestseller && <span className="tag-badge tag-bestseller">Top Harvest</span>}
          {product.isNew && <span className="tag-badge tag-new">New Flush</span>}
          {product.organic && <span className="tag-badge tag-organic">100% Bio</span>}
        </div>

        {/* Gallery count indicator */}
        {product.gallery && product.gallery.length > 1 && (
          <div className="gallery-indicator" title={`${product.gallery.length} photos available`}>
            <Layers size={12} />
            <span>{product.gallery.length}</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => { 
            e.stopPropagation(); 
            onToggleWishlist(product.id); 
          }}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          aria-label="Wishlist"
        >
          <Heart size={16} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : 'currentColor'} />
        </button>
      </div>

      <div className="product-content">
        <div className="product-meta-row">
          <span className="product-origin">
            <MapPin size={11} />
            {product.origin.split(',')[0]}
          </span>
          {product.oxidationLevel && (
            <span className="product-oxidation">
              {product.oxidationLevel.split(' ')[0]}
            </span>
          )}
        </div>

        <h3 className="product-name" onClick={() => onSelect(product)}>
          {product.name}
        </h3>

        <p className="product-tagline">{product.tagline}</p>

        {/* Flavor Profile Pills */}
        <div className="flavor-pills">
          {product.flavorNotes.slice(0, 3).map((note, idx) => (
            <span key={idx} className="flavor-pill">
              {note}
            </span>
          ))}
        </div>

        <div className="product-footer">
          <div className="price-stack">
            <div className="product-price">
              ${product.price}
              <span className="price-unit">/ 100g</span>
            </div>
            {product.originalPrice && (
              <span className="product-original-price">${product.originalPrice}</span>
            )}
          </div>

          <div className="product-actions-group">
            <button
              className="icon-btn"
              onClick={() => onSelect(product)}
              title="Inspect Specs & Gallery"
              aria-label="Quick View"
            >
              <Eye size={15} />
            </button>

            <button
              className="add-cart-btn"
              onClick={() => onAddToCart(product)}
              title="Add to Bag"
            >
              <ShoppingBag size={14} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
