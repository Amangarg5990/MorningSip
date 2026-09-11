import React, { useState } from 'react';
import { Leaf, Search, ShoppingBag, Heart, Sparkles, Clock, Sliders, X } from 'lucide-react';

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery
}) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); setActiveTab('shop'); }}>
          <div className="brand-icon">
            <Leaf size={20} />
          </div>
          <div>
            <span className="font-serif">Morning Sip</span>
            <span style={{ fontSize: '0.75rem', display: 'block', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '-4px' }}>
              Artisanal Indian Teas
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="nav-links">
          <button
            className={`nav-link ${activeTab === 'shop' ? 'active' : ''}`}
            onClick={() => setActiveTab('shop')}
          >
            Collection
          </button>
          <button
            className={`nav-link ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setActiveTab('quiz')}
          >
            <Sparkles size={14} style={{ display: 'inline', marginRight: '4px' }} />
            Tea Matcher Quiz
          </button>
          <button
            className={`nav-link ${activeTab === 'blender' ? 'active' : ''}`}
            onClick={() => setActiveTab('blender')}
          >
            <Sliders size={14} style={{ display: 'inline', marginRight: '4px' }} />
            Custom Tea Lab
          </button>
          <button
            className={`nav-link ${activeTab === 'timer' ? 'active' : ''}`}
            onClick={() => setActiveTab('timer')}
          >
            <Clock size={14} style={{ display: 'inline', marginRight: '4px' }} />
            Steep Timer
          </button>
          <button
            className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`}
            onClick={() => setActiveTab('benefits')}
          >
            <Heart size={14} style={{ display: 'inline', marginRight: '4px' }} />
            Tea Benefits
          </button>
          <button
            className={`nav-link ${activeTab === 'story' ? 'active' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            Our Origin
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          {/* Live Search Toggle */}
          <div style={{ position: 'relative' }}>
            {showSearch ? (
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '999px', padding: '0.3rem 0.8rem' }}>
                <Search size={16} color="var(--color-gold)" style={{ marginRight: '6px' }} />
                <input
                  type="text"
                  placeholder="Search Assam, Darjeeling, Nilgiri, Meghalaya..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    outline: 'none',
                    fontSize: '0.85rem',
                    width: '180px'
                  }}
                />
                <button
                  onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button className="icon-btn" onClick={() => setShowSearch(true)} title="Search Teas">
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Wishlist Icon */}
          <button className="icon-btn" onClick={onOpenWishlist} title="Wishlist">
            <Heart size={18} />
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </button>

          {/* Cart Drawer Toggle */}
          <button className="icon-btn" onClick={onOpenCart} title="Shopping Cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
