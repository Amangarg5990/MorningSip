import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import IntroQuote from './components/IntroQuote';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import TeaBenefits from './components/TeaBenefits';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import BrandStory from './components/BrandStory';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import Toast from './components/Toast';

import { PRODUCTS, CATEGORIES } from './data/products';
import { Filter, X, Heart } from 'lucide-react';

export default function App() {
  const getInitialTab = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#benefits' || hash === '#tea-benefits') return 'benefits';
    if (hash === '#story') return 'story';
    return 'shop';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#benefits' || hash === '#tea-benefits') {
        setActiveTab('benefits');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [selectedCategory, setSelectedCategory] = useState('All Teas');
  const [searchQuery, setSearchQuery] = useState('');
  const [caffeineFilter, setCaffeineFilter] = useState('All');
  
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  
  const [toasts, setToasts] = useState([]);

  const addToast = (msg) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message: msg }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    addToast(`Added "${product.name}" to cart`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
      addToast('Removed item from Wishlist');
    } else {
      setWishlist([...wishlist, productId]);
      addToast('Saved to Wishlist');
    }
  };

  // Filtering products
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All Teas' || p.category === selectedCategory;

    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.flavorNotes.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCaffeine =
      caffeineFilter === 'All' || p.caffeine === caffeineFilter;

    return matchesCategory && matchesSearch && matchesCaffeine;
  });

  const cartCount = cart.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <main style={{ flexGrow: 1 }}>
        {/* Starting Quote Section with Scroll Down feature */}
        {activeTab === 'shop' && (
          <IntroQuote
            onScrollDown={() => {
              const el = document.getElementById('hero-showcase') || document.getElementById('collection');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}

        {/* Render Hero showcase */}
        {activeTab === 'shop' && (
          <div id="hero-showcase">
            <Hero
              onExplore={() => {
                const el = document.getElementById('collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onBenefits={() => handleTabChange('benefits')}
            />
          </div>
        )}

        {/* Collection Section */}
        {activeTab === 'shop' && (
          <section id="collection" className="section">
            <div className="container">
              <div className="section-header">
                <div className="section-subtitle">Curated Harvests</div>
                <h2 className="section-title">Artisanal Tea Collection</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  Hand-picked single-origin teas, stone-ground ceremonial matcha, and botanical infusions.
                </p>
              </div>

              {/* Category Filters */}
              <div className="category-tabs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Secondary Caffeine Filter Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem', background: 'var(--bg-card)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Showing <strong style={{ color: 'var(--color-gold)' }}>{filteredProducts.length}</strong> artisanal teas
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Filter size={14} /> Caffeine Level:
                  </span>
                  {['All', 'High', 'Medium', 'Low', 'Caffeine-Free'].map((caff) => (
                    <button
                      key={caff}
                      onClick={() => setCaffeineFilter(caff)}
                      style={{
                        background: caffeineFilter === caff ? 'rgba(230,197,148,0.15)' : 'transparent',
                        border: caffeineFilter === caff ? '1px solid var(--color-gold)' : '1px solid transparent',
                        color: caffeineFilter === caff ? 'var(--color-gold)' : 'var(--text-muted)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.8rem'
                      }}
                    >
                      {caff}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Cards Grid */}
              {filteredProducts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
                  <h3>No teas found matching your filters</h3>
                  <button
                    className="btn-secondary"
                    onClick={() => { setSelectedCategory('All Teas'); setSearchQuery(''); setCaffeineFilter('All'); }}
                    style={{ marginTop: '1rem' }}
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="product-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelect={setSelectedProduct}
                      onAddToCart={handleAddToCart}
                      isWishlisted={wishlist.includes(product.id)}
                      onToggleWishlist={handleToggleWishlist}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Tea Benefits Tab */}
        {activeTab === 'benefits' && (
          <TeaBenefits
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            onExploreCollection={() => handleTabChange('shop')}
          />
        )}

        {/* Brand Story Tab */}
        {activeTab === 'story' && <BrandStory />}

        {/* Reviews Section on main shop page */}
        {activeTab === 'shop' && <CustomerReviews />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleTabChange} />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Modal */}
      {isWishlistModalOpen && (
        <div className="modal-overlay" onClick={() => setIsWishlistModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <button className="close-modal-btn" onClick={() => setIsWishlistModalOpen(false)}>
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Heart size={24} fill="#ef4444" color="#ef4444" />
              <h3 className="font-serif" style={{ fontSize: '2rem' }}>Saved Wishlist Teas</h3>
            </div>

            {wishlist.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', textCenter: 'center', padding: '2rem 0' }}>
                You have not saved any teas yet. Click the heart icon on any product card!
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {PRODUCTS.filter((p) => wishlist.includes(p.id)).map((product) => (
                  <div
                    key={product.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      background: 'var(--bg-dark)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>{product.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-emerald)' }}>{product.origin}</div>
                      <div style={{ fontWeight: '700', color: 'var(--color-gold)' }}>${product.price}</div>
                    </div>
                    <button
                      className="add-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Bag
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Notifications */}
      <Toast toasts={toasts} />
    </div>
  );
}
