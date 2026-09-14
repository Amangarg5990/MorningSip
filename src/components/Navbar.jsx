import React, { useState } from 'react';

export default function Navbar({
  cartCount = 0,
  onOpenCart,
  activeSection = 'home',
  onNavigate,
  searchQuery,
  setSearchQuery
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Our Teas', id: 'our-teas' },
    { label: 'Our Heritage', id: 'our-heritage' },
    { label: 'Tea Benefits', id: 'wellness-benefits' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(27,67,50,0.06)]">
      {/* Top Banner */}
      <div className="bg-primary text-on-primary py-1 px-3 sm:px-gutter text-center text-label-caps font-label-caps tracking-widest text-[10px] sm:text-[11px] leading-tight">
        <span className="hidden xs:inline">Direct from Indian Estates • </span>Free Shipping on Samplers
      </div>

      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-3 sm:px-gutter flex items-center justify-between gap-2 sm:gap-space-md">
        {/* Brand Logo */}
        <div
          className="flex items-center gap-1.5 sm:gap-space-sm cursor-pointer select-none shrink-0"
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          <span className="text-secondary text-base sm:text-title-md">✦</span>
          <div className="flex flex-col justify-center">
            <span className="font-cape text-base sm:text-xl md:text-headline-sm tracking-wide text-primary uppercase whitespace-nowrap leading-none">
              Morning Sip
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] text-secondary tracking-wider whitespace-nowrap mt-0.5 leading-none">
              Est. 2026 • Artisanal Terroirs
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`px-space-md py-space-xs transition-colors rounded-lg font-title-md text-sm ${
                  isActive
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-space-md shrink-0">
          {/* Search Trigger / Input */}
          <div className="relative flex items-center">
            {showSearch ? (
              <div className="flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-full border border-outline-variant/40 shadow-inner">
                <span className="material-symbols-outlined text-[18px] text-secondary">search</span>
                <input
                  type="text"
                  placeholder="Search terroirs or teas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent text-xs text-on-surface outline-none w-36 sm:w-48 placeholder:text-on-surface-variant/60"
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowSearch(false);
                    if (setSearchQuery) setSearchQuery('');
                  }}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
            ) : (
              <button
                className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors"
                type="button"
                onClick={() => setShowSearch(true)}
                title="Search Harvests"
              >
                <span className="material-symbols-outlined text-[20px]">search</span>
              </button>
            )}
          </div>

          {/* Cart Bag */}
          <button
            className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors relative"
            type="button"
            onClick={onOpenCart}
            title="Tasting Bag"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="font-label-sm text-label-sm text-secondary font-bold">({cartCount})</span>
          </button>

          {/* Profile Monogram / Avatar */}
          <div className="hidden sm:flex items-center pl-space-xs">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-secondary/40 shadow-sm"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UCY_9SXPo-a_JKkAELO0LBQOAj39kDbZqmg98hBzmmXojKFJNkupONrYUcXaOj0rbLNLGAXawdi3KzU089JHxJj-bC7E5_TpIeLo-vVZtHUhpvO4f43iEFfgHwTdiS-3uVH7Jm3oP9nGahfQrFxG1lE7Ky-KpkjIrJ0lUBk21QrYKqjBX_iB7I4kL5MfQbheo2eTnie-bAMPpbvexfRzcOgLuD9ueNeqqczz4XZDmPj-5WzUn6dyjBAktqv7VsoSyKkGP3vWCuj0E"
            />
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            className="lg:hidden text-primary hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-bright/95 backdrop-blur-xl border-b border-surface-container px-gutter py-space-md flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`px-space-md py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeSection === link.id
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
