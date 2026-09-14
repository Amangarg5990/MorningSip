import React from 'react';
import CurvedDivider from './CurvedDivider';

export default function BrewingRitual() {
  const brewingGuides = [
    {
      title: 'Assam Bold',
      icon: 'local_cafe',
      summary: 'Strong orthodox leaf requiring rolling boil for full amber liquor extraction.',
      temp: '95°C – 100°C',
      time: '4 – 5 Mins',
      ratio: '2.5g / 200ml',
      accents: 'Pure or Milk/Honey',
      bestFor: 'Best for Morning Awakening'
    },
    {
      title: 'Darjeeling 1st',
      icon: 'psychiatry',
      summary: 'Delicate spring shoot needing slightly cooled water to protect sweet muscatels.',
      temp: '85°C – 90°C',
      time: '3 – 3.5 Mins',
      ratio: '2g / 200ml',
      accents: 'Strictly Plain',
      bestFor: 'Best for Afternoon Clarity'
    },
    {
      title: 'Nilgiri Frost',
      icon: 'ac_unit',
      summary: 'Crisp high-altitude aromatic tea that shines served hot or flash cold brewed.',
      temp: '90°C – 92°C',
      time: '3.5 – 4 Mins',
      ratio: '2.5g / 200ml',
      accents: 'Lemon Twist / Iced',
      bestFor: 'Best for Mid-Day Elevation'
    },
    {
      title: 'Meghalaya Oolong',
      icon: 'cloud',
      summary: 'Resilient curled leaf capable of up to 4 sequential steepings with evolved notes.',
      temp: '88°C – 92°C',
      time: '3 – 4 Mins',
      ratio: '3g / 200ml',
      accents: 'Multiple Infusions',
      bestFor: 'Best for Twilight Contemplation'
    }
  ];

  return (
    <section className="pt-36 pb-36 md:pt-48 md:pb-48 bg-[#012d1d] text-on-primary w-full relative overflow-hidden" id="brewing-guide">
      {/* Top Organic Curved Wave Boundary (from #fcf9f4) */}
      <CurvedDivider position="top" fill="#fcf9f4" />

      {/* Atmospheric Background Glow */}
      <div className="absolute -right-20 top-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-gutter relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase text-xs">
            The Estate Sommelier's Method
          </span>
          <h2 className="font-headline-lg text-headline-lg text-surface-bright mt-1">
            Brewing Ritual &amp; Parameters
          </h2>
          <p className="font-body-md text-body-md text-surface-dim mt-2 leading-relaxed">
            Unlock the delicate botanical top-notes and rich malt bases with exact temperature and time alchemy.
          </p>
        </div>

        {/* 4-Terroir Brewing Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {brewingGuides.map((guide, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest/10 backdrop-blur-md p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-lowest/15 hover:border-secondary/50 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-headline-sm text-headline-sm text-surface-bright">{guide.title}</span>
                  <span className="material-symbols-outlined text-secondary-fixed">{guide.icon}</span>
                </div>

                <p className="font-body-sm text-body-sm text-surface-dim mb-space-md leading-relaxed">
                  {guide.summary}
                </p>

                <div className="space-y-space-xs font-body-sm text-body-sm">
                  <div className="flex justify-between py-1 bg-surface-container-lowest/5 px-2.5 rounded">
                    <span className="text-surface-dim">Water Temp:</span>
                    <span className="font-semibold text-surface-bright">{guide.temp}</span>
                  </div>
                  <div className="flex justify-between py-1 bg-surface-container-lowest/5 px-2.5 rounded">
                    <span className="text-surface-dim">Steep Time:</span>
                    <span className="font-semibold text-surface-bright">{guide.time}</span>
                  </div>
                  <div className="flex justify-between py-1 bg-surface-container-lowest/5 px-2.5 rounded">
                    <span className="text-surface-dim">Leaf Ratio:</span>
                    <span className="font-semibold text-surface-bright">{guide.ratio}</span>
                  </div>
                  <div className="flex justify-between py-1 bg-surface-container-lowest/5 px-2.5 rounded">
                    <span className="text-surface-dim">Accents:</span>
                    <span className="font-semibold text-surface-bright">{guide.accents}</span>
                  </div>
                </div>
              </div>

              <div className="mt-space-md pt-space-xs text-secondary-fixed font-label-caps text-label-caps text-center text-xs">
                {guide.bestFor}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Organic Curved Wave Boundary (to #fcf9f4) */}
      <CurvedDivider position="bottom" fill="#fcf9f4" />
    </section>
  );
}
