import React, { useState } from 'react';
import CurvedDivider from './CurvedDivider';

export default function Footer({ onNavigate, onToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    if (onToast) {
      onToast('Welcome to The Planter’s Ledger! Expect our seasonal harvest dispatch.');
    }
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#012d1d] text-surface-container-highest pt-36 pb-space-lg relative overflow-hidden">
      {/* Top Organic Curved Wave Boundary (from #fcf9f4 of Contact section) */}
      <CurvedDivider position="top" fill="#fcf9f4" />

      {/* Atmospheric Background Glow */}
      <div className="absolute -right-20 bottom-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl relative z-10 pt-4">
        {/* Brand Info */}
        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="text-secondary-fixed text-title-md font-title-md">✦</span>
            <span className="font-headline-sm text-headline-sm tracking-wide text-surface-bright uppercase">
              Morning Sip
            </span>
          </div>

          <p className="font-body-sm text-body-sm text-surface-dim pr-space-md leading-relaxed">
            Sourcing single-origin whole leaf teas directly from the mountain mists of Darjeeling, the fertile plains of Assam, the fragrant Nilgiri crests, and Meghalaya highlands.
          </p>

          <div className="flex items-center gap-space-sm pt-space-xs flex-wrap">
            <span className="font-label-caps text-label-caps text-secondary-fixed bg-surface-container-lowest/10 px-space-sm py-space-xs rounded ring-1 ring-secondary/30 text-[10px]">
              100% Certified Organic
            </span>
            <span className="font-label-caps text-label-caps text-secondary-fixed bg-surface-container-lowest/10 px-space-sm py-space-xs rounded ring-1 ring-secondary/30 text-[10px]">
              Direct Terroir Trade
            </span>
          </div>
        </div>

        {/* Estate Origins */}
        <div className="lg:col-span-2 flex flex-col gap-space-sm">
          <span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold text-xs tracking-wider">
            Estate Origins
          </span>
          <a
            className="font-body-sm text-body-sm text-surface-dim hover:text-surface-bright transition-colors cursor-pointer"
            onClick={(e) => scrollTo(e, 'our-teas')}
            href="#our-teas"
          >
            Assam Valley
          </a>
          <a
            className="font-body-sm text-body-sm text-surface-dim hover:text-surface-bright transition-colors cursor-pointer"
            onClick={(e) => scrollTo(e, 'our-teas')}
            href="#our-teas"
          >
            Darjeeling Hills
          </a>
          <a
            className="font-body-sm text-body-sm text-surface-dim hover:text-surface-bright transition-colors cursor-pointer"
            onClick={(e) => scrollTo(e, 'our-teas')}
            href="#our-teas"
          >
            Nilgiri Blue Mountain
          </a>
          <a
            className="font-body-sm text-body-sm text-surface-dim hover:text-surface-bright transition-colors cursor-pointer"
            onClick={(e) => scrollTo(e, 'our-teas')}
            href="#our-teas"
          >
            Meghalaya Cloud Crest
          </a>
        </div>

        {/* Ritual & Lore */}
        <div className="lg:col-span-2 flex flex-col gap-space-sm">
          <span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold text-xs tracking-wider">
            Ritual &amp; Lore
          </span>
          <a
            className="font-body-sm text-body-sm text-surface-dim hover:text-surface-bright transition-colors cursor-pointer"
            onClick={(e) => scrollTo(e, 'brewing-guide')}
            href="#brewing-guide"
          >
            Brewing Guide
          </a>
          <a
            className="font-body-sm text-body-sm text-surface-dim hover:text-surface-bright transition-colors cursor-pointer"
            onClick={(e) => scrollTo(e, 'wellness-benefits')}
            href="#wellness-benefits"
          >
            Health &amp; Terroir
          </a>
          <a
            className="font-body-sm text-body-sm text-surface-dim hover:text-surface-bright transition-colors cursor-pointer"
            onClick={(e) => scrollTo(e, 'our-heritage')}
            href="#our-heritage"
          >
            Estates &amp; Planters
          </a>
          <a
            className="font-body-sm text-body-sm text-surface-dim hover:text-surface-bright transition-colors cursor-pointer"
            onClick={(e) => scrollTo(e, 'contact')}
            href="#contact"
          >
            Tea Concierge
          </a>
        </div>

        {/* The Planter's Ledger */}
        <div className="lg:col-span-4 flex flex-col gap-space-sm">
          <span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold text-xs tracking-wider">
            The Planter's Ledger
          </span>
          <p className="font-body-sm text-body-sm text-surface-dim">
            Receive harvest dispatches, first flush allocations, and seasonal steep guides.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex items-center gap-space-xs mt-space-xs">
              <input
                className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest/10 text-surface-bright font-body-sm text-body-sm placeholder:text-surface-dim/60 border border-surface-container-lowest/20 focus:outline-none focus:ring-2 focus:ring-secondary-fixed/50"
                placeholder="Your email address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="px-space-md py-2.5 bg-secondary text-on-secondary rounded-lg font-label-md text-label-sm hover:bg-secondary/90 transition-colors shrink-0 cursor-pointer font-bold shadow"
                type="submit"
              >
                Join
              </button>
            </form>
          ) : (
            <div className="mt-2 p-2.5 bg-surface-container-lowest/10 text-secondary-fixed rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-secondary/30">
              <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
              Subscribed to seasonal estate dispatches
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-gutter pt-space-md border-t border-surface-container-lowest/10 flex flex-col md:flex-row items-center justify-between gap-space-sm text-xs relative z-10">
        <span className="font-body-sm text-surface-dim">
          © 2026 Morning Sip Artisanal Estate Teas. Crafted with reverence for the harvest.
        </span>
        <div className="flex items-center gap-space-lg font-body-sm text-surface-dim">
          <a className="hover:text-surface-bright transition-colors cursor-pointer" href="#transparency">
            Harvest Transparencies
          </a>
          <a className="hover:text-surface-bright transition-colors cursor-pointer" href="#privacy">
            Privacy &amp; Ritual
          </a>
          <a className="hover:text-surface-bright transition-colors cursor-pointer" href="#terms">
            Terms of Estate
          </a>
        </div>
      </div>
    </footer>
  );
}
