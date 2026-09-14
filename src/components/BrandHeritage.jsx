import React from 'react';
import CurvedDivider from './CurvedDivider';

export default function BrandHeritage() {
  return (
    <section className="pt-36 pb-36 md:pt-48 md:pb-48 bg-[#012d1d] text-on-primary w-full relative overflow-hidden" id="our-heritage">
      {/* Top Organic Curved Wave Boundary (from #fcf9f4) */}
      <CurvedDivider position="top" fill="#fcf9f4" />

      {/* Atmospheric Background Glow */}
      <div className="absolute -left-20 top-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        {/* Storytelling Left */}
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps tracking-widest uppercase text-xs">
            <span>Rooted in Heritage</span>
            <span>•</span>
            <span>Est. 2026 Master Lineage</span>
          </div>

          <h2 className="font-headline-lg text-headline-lg md:text-display-hero-mobile text-surface-bright leading-tight">
            A Legacy of Living Terroir &amp; Master Craftsmanship
          </h2>

          <span className="font-headline-sm text-headline-sm text-secondary-fixed italic -mt-2">
            From the fertile riverbeds of the Brahmaputra to the Himalayan ridge
          </span>

          <p className="font-body-md text-body-md text-surface-dim leading-relaxed">
            Inspired by the century-old discipline of Assam's finest gardens like Halmari, Morning Sip honors the sacred contract between planter and plant. True excellence is never rushed: our leaves are hand-plucked during the dewy morning twilight, transported to estate withering troughs within sixty minutes, and traditionally orthodox rolled.
          </p>

          <p className="font-body-md text-body-md text-surface-dim leading-relaxed">
            We reject commodity blending. By shipping exclusively whole leaf orthodox teas directly from single estate batches, we retain the volatile aromatic oils that give Indian terroirs their undisputed world-class distinction.
          </p>

          {/* Key Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-sm pt-space-md">
            <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl shadow-sm border border-surface-container-lowest/15">
              <div className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">100+</div>
              <div className="font-label-caps text-label-caps text-surface-bright uppercase mt-1 text-[11px]">Years of Tradition</div>
              <div className="font-body-sm text-body-sm text-surface-dim mt-1">Preserved artisanal orthodox roller methods.</div>
            </div>

            <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl shadow-sm border border-surface-container-lowest/15">
              <div className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">0%</div>
              <div className="font-label-caps text-label-caps text-surface-bright uppercase mt-1 text-[11px]">Middlemen</div>
              <div className="font-body-sm text-body-sm text-surface-dim mt-1">Estate direct to cup in fresh nitrogen sealed caddies.</div>
            </div>

            <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl shadow-sm border border-surface-container-lowest/15">
              <div className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">Top 1%</div>
              <div className="font-label-caps text-label-caps text-surface-bright uppercase mt-1 text-[11px]">Estate Plucking</div>
              <div className="font-body-sm text-body-sm text-surface-dim mt-1">Only the pristine terminal bud and two tender leaves.</div>
            </div>
          </div>
        </div>

        {/* Visual Collage Right */}
        <div className="lg:col-span-6 relative flex flex-col gap-space-md">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-container-lowest/20">
            <img
              className="w-full h-96 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQxvtqgT-Jhxhq_5fNo2h4Tee_VXBdWH2d5ywawKq5kXInN0M09Pm-o65PuFp96azXzvxJO6MW8s50HU1Re8VmEqycQc0UDLXRpyjE-y10vqOJuWR-Cw2XxdkGtIHhoE1Wdwo1b0Yx_600ED4ma3X1s2fxfIpe9CCCbeeOgpQtBYfs_u7pKftWAWxTeQgAtOnJAmTU0YX_HF4jNi6zTg48fr2jIjqPDfyWoy27GE6tCbbb6upnlfmADA"
              alt="Experienced Indian female tea plucker hand-selecting tender two leaves and bud in Darjeeling morning light"
            />
            <div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-[#012d1d]/95 via-[#012d1d]/60 to-transparent text-on-primary">
              <span className="font-label-caps text-label-caps text-secondary-fixed block text-xs">Direct Community Terroir Trade</span>
              <span className="font-body-sm text-body-sm text-surface-container-highest">
                100% fair wages and healthcare for tea planter communities across Assam and Bengal.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-space-md">
            <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest/10 border border-surface-container-lowest/15 backdrop-blur-md">
              <img
                className="w-full h-44 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwyFVyA37VDMLj3HRhZpqR1vvC-8Az6S70yxD_-6Rw1FwJo2n0oX8-ieLpVo1nVTc45w2W53eZe41XjivEQWAhvQmTWgQBHPNKxMIKByrMc9U-3Ro-Npz2WofCBSieHuJ17ZaDYmTbyVR2UzQbmupyMfYh4Wd1ZuOepKoECFMh_6DsLGrIKBg20bdEz4umGXsM9GmmvDZLD_iOYQtkYKRFkRgb5nvYn1spxAHSOAh5gUl1IZ12kgOVTw"
                alt="Master Sommelier Cupping Session"
              />
              <div className="p-space-sm">
                <span className="font-label-caps text-label-caps text-surface-bright block text-xs font-bold">Master Sommelier Cupping</span>
                <span className="font-body-sm text-label-sm text-surface-dim">Every batch tested for 28 aroma notes.</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest/10 border border-surface-container-lowest/15 backdrop-blur-md">
              <img
                className="w-full h-44 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7JbAaMDdbhBOI_g88PiEk4-ahSxQqL7fJnGDN8ll4on6wFQullUcxg__8nF32klgshKst7amDVeVRM7_qHk1CaSTd2hrZ9GVZ_MAVJ3bCohMJTNPn4aM-NvUhZfDK__2DihQk8L16zh82RjQX-Qtr4OI4Ax5zvKZt0hxMxLMytkcRa3C5yzRw6aFdJlz_uptWHbWQtsK5zK9yOvuFOL0u5e1DaJKu33DN9RJEgJ0Nky-9srVmVggLlA"
                alt="Orthodox Gentle Rolling table"
              />
              <div className="p-space-sm">
                <span className="font-label-caps text-label-caps text-surface-bright block text-xs font-bold">Orthodox Gentle Rolling</span>
                <span className="font-body-sm text-label-sm text-surface-dim">Zero CTC crush-tear-curl pulverization.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Organic Curved Wave Boundary (to #fcf9f4) */}
      <CurvedDivider position="bottom" fill="#fcf9f4" />
    </section>
  );
}
