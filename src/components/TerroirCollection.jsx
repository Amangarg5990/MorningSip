import React, { useState } from 'react';
import { TERROIR_TEAS } from '../data/terroirs';

export default function TerroirCollection({ onAddToCart, searchQuery = '' }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTeas = TERROIR_TEAS.filter((tea) => {
    const matchesRegion = activeFilter === 'all' || tea.region === activeFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      tea.title.toLowerCase().includes(query) ||
      tea.regionLabel.toLowerCase().includes(query) ||
      tea.description.toLowerCase().includes(query) ||
      tea.tastingNotes.some((note) => note.toLowerCase().includes(query));

    return matchesRegion && matchesSearch;
  });

  const filterButtons = [
    { label: 'All Terroirs', key: 'all' },
    { label: 'Assam', key: 'assam' },
    { label: 'Darjeeling', key: 'darjeeling' },
    { label: 'Nilgiri', key: 'nilgiri' },
    { label: 'Meghalaya', key: 'meghalaya' }
  ];

  return (
    <section className="py-space-xl md:py-24 bg-surface max-w-7xl mx-auto px-gutter w-full" id="our-teas">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
            The Four Terroirs of India
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
            Exclusive Estate Harvests
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Each valley, river basin, and mountain peak imbues the tender Camellia sinensis leaf with an unmistakable regional thumbprint of soil, rain, and artisan rolling.
          </p>
        </div>

        {/* Terroir Filter Tabs */}
        <div className="flex items-center gap-space-xs bg-surface-container p-1 rounded-xl shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.key;
            return (
              <button
                key={btn.key}
                type="button"
                onClick={() => setActiveFilter(btn.key)}
                className={`px-space-md py-1.5 rounded-lg font-label-md text-label-sm transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Bespoke Estate Cards */}
      {filteredTeas.length === 0 ? (
        <div className="text-center py-16 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant/40 mb-2">search_off</span>
          <p className="font-title-md text-primary">No estate harvests matched your search</p>
          <button
            onClick={() => setActiveFilter('all')}
            className="mt-4 px-space-md py-2 bg-primary text-on-primary rounded-lg text-sm"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg" id="teas-grid">
          {filteredTeas.map((tea) => (
            <article
              key={tea.id}
              className="tea-card flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fadeIn border border-outline-variant/20"
              data-region={tea.region}
            >
              <div className="relative h-60 w-full overflow-hidden bg-primary-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={tea.image}
                  alt={tea.title}
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-primary/80 backdrop-blur-sm text-on-primary font-label-caps text-label-caps tracking-wider uppercase text-[10px]">
                  {tea.regionLabel}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-title-md text-label-sm shadow text-xs">
                  {tea.gradeBadge}
                </div>
              </div>

              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps mb-1 text-[11px]">
                    <span>{tea.elevation}</span>
                    <span className="text-secondary font-semibold">{tea.harvest}</span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                    {tea.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                    {tea.description}
                  </p>

                  {/* Tasting Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-space-md">
                    {tea.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-[11px] text-on-surface-variant"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-space-lg mt-space-md flex items-center justify-between border-t border-outline-variant/20">
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block text-[10px]">
                      {tea.caddySize}
                    </span>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      {tea.priceFormatted}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onAddToCart && onAddToCart(tea)}
                    className="px-space-md py-2 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-md text-label-sm transition-all flex items-center gap-1 active:scale-95 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    <span>Tasting Box</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
