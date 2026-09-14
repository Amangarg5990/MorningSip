import React, { useState, useEffect } from 'react';
import EstateLoader from './components/EstateLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TerroirCollection from './components/TerroirCollection';
import BrandHeritage from './components/BrandHeritage';
import TeaBenefits from './components/TeaBenefits';
import BrewingRitual from './components/BrewingRitual';
import CustomerReviews from './components/CustomerReviews';
import ContactConcierge from './components/ContactConcierge';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Toast from './components/Toast';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Scroll spy to update active navbar link automatically
  useEffect(() => {
    const sectionIds = ['home', 'our-teas', 'our-heritage', 'wellness-benefits', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          title: product.title || product.name,
          price: product.price,
          caddySize: product.caddySize || '100g Caddy',
          regionLabel: product.regionLabel || 'Single Estate',
          image: product.image,
          quantity
        }
      ];
    });
    addToast(`Added "${product.title || product.name}" to your Tasting Bag`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
    } else {
      setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)));
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      {/* Opening Estate Loader */}
      {isLoading && <EstateLoader onComplete={() => setIsLoading(false)} />}

      {/* Fixed Luxury Navigation */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Page Flow Matching the Template */}
      <main className="w-full pt-28 bg-surface min-h-screen flex-1">
        <div className="flex flex-col w-full">
          {/* Top Estate Ambient Hero */}
          <Hero
            onExplore={() => handleNavigate('our-teas')}
            onWellness={() => handleNavigate('wellness-benefits')}
          />

          {/* Interactive Regional Terroir Collection */}
          <TerroirCollection
            onAddToCart={handleAddToCart}
            searchQuery={searchQuery}
          />

          {/* Brand Heritage & Living Terroir */}
          <BrandHeritage />

          {/* 15+ Holistic Benefits & Polyphenols Science */}
          <TeaBenefits />

          {/* Tasting Ritual & Sommelier Brewing Masterclass */}
          <BrewingRitual />

          {/* Connoisseur Accolades & Sommelier Endorsements */}
          <CustomerReviews />

          {/* Contact Us & Estate Concierge Module */}
          <ContactConcierge onToast={addToast} />
        </div>
      </main>

      {/* Master Estate Footer */}
      <Footer onNavigate={handleNavigate} onToast={addToast} />

      {/* Cart Drawer */}
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

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onClearCart={handleClearCart}
      />

      {/* Notifications */}
      <Toast toasts={toasts} />
    </div>
  );
}
