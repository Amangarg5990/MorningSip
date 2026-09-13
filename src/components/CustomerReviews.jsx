import React from 'react';

export default function CustomerReviews() {
  const reviews = [
    {
      initials: 'VK',
      avatarBg: 'bg-primary text-on-primary',
      name: 'Vikramaditya K.',
      title: 'Certified Tea Taster, Kolkata Auctions',
      quote:
        '“Morning Sip’s Assam Reserve has that unmistakable Halmari-caliber golden tip ratio. The malt sweetness lingers for ten minutes after the cup is emptied. Absolutely supreme.”'
    },
    {
      initials: 'SG',
      avatarBg: 'bg-secondary text-on-secondary',
      name: 'Sylvie G.',
      title: 'Luxury Hospitality Sommelier, Paris',
      quote:
        '“The spring Darjeeling first flush lot captures the crispness of high Himalayan dawn. No astringency, just pure wildflower nectar and muscatel brilliance.”'
    },
    {
      initials: 'AM',
      avatarBg: 'bg-primary-container text-on-primary',
      name: 'Ananya Malhotra',
      title: 'Private Wealth Advisory Partner, Mumbai',
      quote:
        '“We shifted our corporate holiday gifting exclusively to Morning Sip’s sealed caddies. The packaging is heirloom-grade, and the leaf freshness is unmatched in modern retail.”'
    }
  ];

  return (
    <section className="py-space-xl md:py-24 bg-surface max-w-7xl mx-auto px-gutter w-full">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
        <div className="flex items-center gap-1 text-secondary mb-space-xs">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Revered by Tea Masters &amp; Estheticians
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          From Michelin-starred tables to generational planters, hear why our single-origin lots set the benchmark.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-space-lg bg-surface-container-low rounded-xl flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow"
          >
            <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
              {rev.quote}
            </p>

            <div className="mt-space-lg flex items-center gap-space-sm pt-space-sm border-t border-outline-variant/15">
              <div
                className={`w-10 h-10 rounded-full ${rev.avatarBg} flex items-center justify-center font-title-md text-label-md shrink-0 shadow-sm`}
              >
                {rev.initials}
              </div>
              <div>
                <div className="font-title-md text-label-md text-primary font-bold">{rev.name}</div>
                <div className="font-body-sm text-label-sm text-on-surface-variant">{rev.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
