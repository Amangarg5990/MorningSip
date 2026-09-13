import React from 'react';

export default function TeaBenefits() {
  const benefits = [
    {
      icon: 'shield',
      title: 'Cellular & Antioxidant Defense',
      description: 'Combats free radical oxidative stress through theaflavins and high catechin concentrations. Helps maintain cellular longevity and enhances intrinsic immune resilience.',
      terroir: 'Assam & Darjeeling Reserves'
    },
    {
      icon: 'psychology_alt',
      title: 'Cognitive Focus & Serenity',
      description: 'The natural synergy of L-Theanine with gentle caffeine crosses the blood-brain barrier to trigger tranquil alertness, sharpening memory and sustained deep focus.',
      terroir: 'Nilgiri Frost & First Flush'
    },
    {
      icon: 'favorite',
      title: 'Cardiovascular Blood Flow',
      description: 'Regular steeped black tea consumption supports endothelial function, assists in healthy arterial elasticity, and maintains balanced lipid profiles.',
      terroir: 'Golden Assam Orthodox'
    },
    {
      icon: 'local_fire_department',
      title: 'Metabolic & Gut Harmony',
      description: 'Aids natural digestive enzyme activity, nourishes beneficial microbiome flora, and gently encourages metabolic thermogenesis after wholesome meals.',
      terroir: 'Meghalaya Cloud Oolong'
    },
    {
      icon: 'water_drop',
      title: 'Skin Radiance & Hydration',
      description: 'Supplies skin tissues with bio-available moisture, vitamins E and C precursors, diminishing fine line photo-aging and promoting a calm, radiant complexion.',
      terroir: 'Darjeeling Spring White/Green'
    },
    {
      icon: 'self_improvement',
      title: 'Mindful Stress Reduction',
      description: 'Clinical trials demonstrate lower salivary cortisol levels post-stress when engaging in intentional hot tea ritual, restoring circadian calm naturally.',
      terroir: 'All Morning Sip Terroirs'
    }
  ];

  return (
    <section className="py-space-xl md:py-24 bg-surface max-w-7xl mx-auto px-gutter w-full" id="wellness-benefits">
      <div className="text-center max-w-3xl mx-auto mb-space-xl">
        <div className="inline-flex items-center gap-space-xs text-secondary font-label-caps text-label-caps tracking-widest uppercase text-xs">
          <span>The Pure Alchemy of Camellia Sinensis</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
          15+ Holistic Benefits: The Daily Ritual of Vitality &amp; Longevity
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
          Indian orthodox teas are revered globally not only for their muscatel and malty flavor, but as one of nature's densest sources of bio-active theaflavins, thearubigins, and L-Theanine.
        </p>
      </div>

      {/* The Halmari Benchmark Science Highlight */}
      <div className="bg-primary text-on-primary rounded-2xl p-space-lg md:p-space-xl mb-space-xl relative overflow-hidden shadow-xl border border-primary-container">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-8 flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase text-xs">
              The Orthodox Standard
            </span>
            <h3 className="font-headline-sm text-headline-md text-surface-bright">
              Why Whole Leaf Outperforms Industrial Tea Dust
            </h3>
            <p className="font-body-md text-body-md text-surface-container-highest leading-relaxed">
              Unlike commercial tea bags containing pulverized dust that oxidizes rapidly and loses antioxidants, whole orthodox leaves protect their cellular membrane until steeped in your teapot. This retains up to <strong>3.4x more active EGCG polyphenols</strong>, offering sustained cellular protection and steady mental alertness without jittery crashes.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm bg-surface-container-lowest/10 p-space-md rounded-xl backdrop-blur-sm border border-surface-container-lowest/10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-[28px]">biotech</span>
              <div>
                <div className="font-title-md text-label-md text-surface-bright">840mg Polyphenols</div>
                <div className="font-body-sm text-label-sm text-surface-dim">Per 300ml steeped whole leaf cup</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-[28px]">psychology</span>
              <div>
                <div className="font-title-md text-label-md text-surface-bright">Alpha-Wave Activation</div>
                <div className="font-body-sm text-label-sm text-surface-dim">High concentration of pure L-Theanine</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Categorized Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-space-sm shadow-sm border border-outline-variant/20"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            </div>

            <h4 className="font-title-md text-title-md text-primary font-bold">{item.title}</h4>

            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>

            <div className="mt-auto pt-space-xs font-label-caps text-label-caps text-secondary text-xs">
              {item.terroir}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
