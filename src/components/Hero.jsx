import React from 'react';

export default function Hero({ onExplore, onWellness }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden -mt-28 pt-44 pb-24 md:pb-32 bg-primary text-on-primary">
      {/* Atmospheric Visual Layer */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNM6cB_MeJr3DdID8P26W-ZW0Th5ZAfxddSArMU5dfJJW4M1wGq7Edipf3sheOElZQF8DconkIk2N5t2kCqzVBF58wRwqhFrx0YAgOYzQ34G5XWeLY8q6wYGFPN5rW2yNZVA_iRMAj9ivhmdadRvYUCfNoZ4Pe1PFMBIcggklno-3b5N6qrhHEJGCrfxHQYCzzZ2sSsu4R3JmdK9CB36K4MV7sDfdEDp5ojVNwGpJNvW5S2r7mk3eqJQ')`
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent z-0"></div>
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-gutter flex flex-col items-center text-center">
        {/* Terroir Monogram & Stamp */}
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed mb-space-md shadow-sm border border-secondary/20">
          <span className="text-secondary text-sm">✦</span>
          <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary-fixed">
            Master Terroirs of the Subcontinent
          </span>
          <span className="text-secondary text-sm">✦</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display-hero text-headline-lg md:text-display-hero max-w-4xl text-surface-bright tracking-tight mb-space-md">
          Pure Terroir. Single Estate Indian Teas Crafted for the Connoisseur.
        </h1>

        <p className="font-body-lg text-body-md md:text-body-lg text-surface-container-highest max-w-2xl mx-auto mb-space-lg leading-relaxed font-light">
          Handpicked tender two leaves and a bud across the mist-cloaked hills of Assam, Darjeeling, Nilgiri, and Meghalaya. Directly packaged at source within hours of plucking.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-space-md mb-space-xl">
          <a
            href="#our-teas"
            onClick={(e) => {
              e.preventDefault();
              if (onExplore) onExplore();
              else scrollTo('our-teas');
            }}
            className="px-space-lg py-3.5 bg-secondary text-on-secondary rounded-lg font-title-md text-label-md hover:bg-secondary/90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-secondary/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Curated Harvests</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </a>

          <a
            href="#wellness-benefits"
            onClick={(e) => {
              e.preventDefault();
              if (onWellness) onWellness();
              else scrollTo('wellness-benefits');
            }}
            className="px-space-lg py-3.5 bg-surface-container-lowest/10 backdrop-blur-md text-surface-bright rounded-lg font-title-md text-label-md hover:bg-surface-container-lowest/20 transition-all flex items-center gap-2 cursor-pointer border border-surface-container-lowest/20"
          >
            <span>Discover Tea Wellness</span>
            <span className="material-symbols-outlined text-[18px]">spa</span>
          </a>
        </div>

        {/* Quick Estate Badges Bar */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-space-sm bg-surface-container-lowest/5 backdrop-blur-lg rounded-xl p-space-md text-left border border-surface-container-lowest/10">
          <div className="flex items-center gap-space-sm p-space-xs">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary-fixed">
              <span className="material-symbols-outlined text-[20px]">filter_vintage</span>
            </div>
            <div>
              <div className="font-title-md text-label-md text-surface-bright">100% Single Origin</div>
              <div className="font-body-sm text-label-sm text-surface-dim">Zero blended lots</div>
            </div>
          </div>

          <div className="flex items-center gap-space-sm p-space-xs">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary-fixed">
              <span className="material-symbols-outlined text-[20px]">eco</span>
            </div>
            <div>
              <div className="font-title-md text-label-md text-surface-bright">1st & 2nd Flush</div>
              <div className="font-body-sm text-label-sm text-surface-dim">Prime seasonal lots</div>
            </div>
          </div>

          <div className="flex items-center gap-space-sm p-space-xs">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary-fixed">
              <span className="material-symbols-outlined text-[20px]">verified</span>
            </div>
            <div>
              <div className="font-title-md text-label-md text-surface-bright">Garden-Fresh Seal</div>
              <div className="font-body-sm text-label-sm text-surface-dim">Nitrogen purged caddy</div>
            </div>
          </div>

          <div className="flex items-center gap-space-sm p-space-xs">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary-fixed">
              <span className="material-symbols-outlined text-[20px]">handshake</span>
            </div>
            <div>
              <div className="font-title-md text-label-md text-surface-bright">Direct Fair Trade</div>
              <div className="font-body-sm text-label-sm text-surface-dim">Direct planter returns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
