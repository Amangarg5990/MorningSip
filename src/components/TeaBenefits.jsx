import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Brain, 
  Flame, 
  Activity, 
  Smile, 
  Droplets, 
  Sun, 
  Moon, 
  Clock, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ShoppingBag, 
  Leaf, 
  Zap, 
  Award, 
  Check, 
  Feather 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const TEA_BENEFITS = [
  // --- VITALITY & WELLNESS ---
  {
    id: 'antioxidants',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Potent Cellular Antioxidant Shield',
    subtitle: 'Neutralizes destructive free radicals before they damage cellular DNA',
    target: 'Cellular Immunity',
    icon: ShieldCheck,
    highlight: '300+ Active Polyphenols',
    summary: 'Environmental pollution, UV radiation, and daily stress generate unstable free radicals that degrade cell walls and DNA. The exceptional concentration of polyphenols and catechins in fresh artisan tea intercepts these oxidants, protecting your cellular health from premature degradation.',
    science: 'Tea leaves contain a dense matrix of botanical polyphenols and flavonoids that are distinct from those in fruits and vegetables. These bio-compounds neutralize Reactive Oxygen Species (ROS). Regular intake blocks mutagenic DNA oxidation and downregulates inflammatory bowel cytokines, helping maintain optimal tissue integrity throughout the body.',
    recommendedProductIds: ['meghalaya-organic-green', 'darjeeling-first-flush']
  },
  {
    id: 'cortisol-stress',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Cortisol & Visceral Stress Reduction',
    subtitle: 'Proven to lower circulating stress hormones and halt visceral fat accumulation',
    target: 'Brain & Mood',
    icon: Moon,
    highlight: '70% Faster Stress Recovery',
    summary: 'Elevated cortisol accelerates biological aging, disrupts restful sleep, and triggers stubborn visceral fat storage around the abdomen. Clinical trials confirm that habitual tea drinkers clear cortisol out of their bloodstream up to 70% faster after stressful events.',
    science: 'Two independent human clinical trials revealed that sipping 3 to 4 cups of high-grade black or green tea daily produces a decisive drop in baseline blood cortisol within 6 weeks. The soothing amino acid L-Theanine modulates the hypothalamic-pituitary-adrenal (HPA) axis, fostering inner composure without inducing drowsiness.',
    recommendedProductIds: ['nilgiri-winter-frost', 'saffron-kashmiri-kahwa']
  },
  {
    id: 'gut-digestion',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Digestive Comfort & Intestinal Health',
    subtitle: 'Therapeutic tannins soothe mucosal lining and ease digestive inflammation',
    target: 'Gut & Digestion',
    icon: Activity,
    highlight: 'Therapeutic Gut Lining Support',
    summary: 'For centuries, pure tea has served as a revered post-meal tonic. The rich natural tannins exert a mild astringent and anti-inflammatory effect on the stomach and intestinal walls, helping tame bloating and supporting comfortable gut motility.',
    science: 'Tannins and gallic acid derivatives in whole-leaf tea reduce intestinal hyper-motility and provide an antimicrobial barrier against gastric pathogens. Furthermore, research demonstrates that tea polyphenols selectively nourish beneficial Bifidobacteria while suppressing pathogenic enteric strains.',
    recommendedProductIds: ['assam-golden-tips', 'imperial-masala-chai']
  },
  {
    id: 'clean-energy',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Sustained Energy Without The Coffee Crash',
    subtitle: 'Synergistic L-theanine and theophylline deliver hours of calm, jitter-free vigor',
    target: 'Brain & Mood',
    icon: Zap,
    highlight: '70% Less Caffeine Than Coffee',
    summary: 'Unlike the rapid spike and jarring jitter-crash cycle of commercial coffee or synthetic energy drinks, fine tea provides clean, steady alertness that keeps you razor-sharp all morning long.',
    science: 'Tea possesses about 70% less caffeine than standard brewed coffee. Crucially, this caffeine is bonded with the unique amino acid L-Theanine and traces of theophylline. Theophylline gently supports respiratory volume and renal micro-circulation, while L-Theanine crosses the blood-brain barrier to promote focused alpha brain waves.',
    recommendedProductIds: ['assam-royal-ctc', 'darjeeling-second-flush']
  },
  {
    id: 'bone-density',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Bone Mineral Density & Skeletal Resilience',
    subtitle: 'Decades of longitudinal research correlate tea drinking with stronger joints & bones',
    target: 'Cellular Immunity',
    icon: Award,
    highlight: '10+ Year Longitudinal Proof',
    summary: 'Enjoying your daily cuppa is an investment in your future mobility. Long-term studies show that consistent tea drinkers maintain substantially higher bone density in both the spine and hips well into older age.',
    science: 'A landmark study evaluating adults over 10+ years of tea consumption demonstrated markedly superior bone mineral density, even after adjusting for age, tobacco use, and body mass. Flavonoid phytoestrogens inhibit osteoclastic bone resorption while stimulating osteoblast mineralization.',
    recommendedProductIds: ['meghalaya-cloud-oolong', 'nilgiri-winter-frost']
  },
  {
    id: 'immune-defense',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Immune Priming with Alkylamine Antigens',
    subtitle: 'Fortifies circulating white blood cells against seasonal viruses and pathogens',
    target: 'Cellular Immunity',
    icon: ShieldCheck,
    highlight: '5x Greater Interferon Response',
    summary: 'Keep your body prepared for seasonal bug season. The natural compounds found in whole black and green tea train your white blood cells to react swiftly when exposed to common everyday viruses.',
    science: 'Tea contains alkylamine antigens—compounds commonly found in bacteria and tumor cells. Sipping black tea primes circulating human gamma-delta T-cells. Clinical evaluations showed up to five times greater disease-fighting interferon secretion in tea consumers compared to control subjects.',
    recommendedProductIds: ['imperial-masala-chai', 'meghalaya-golden-needle']
  },
  {
    id: 'true-hydration',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Pure Hydration & Mineral Balance',
    subtitle: 'Dispels the old dehydration myth: tea counts directly toward your vital daily fluids',
    target: 'Gut & Digestion',
    icon: Droplets,
    highlight: 'Hydrates Like Water + Micronutrients',
    summary: 'Modern nutritional science has decisively disproven the archaic myth that tea dehydrates you. Quality freshly steeped tea counts ounce-for-ounce towards your daily hydration needs while providing beneficial minerals.',
    science: 'While extreme caffeine doses can trigger mild diuresis, standard cups of tea deliver net-positive cellular hydration equivalent to pure mineral water, supplemented with naturally occurring bioavailable potassium, manganese, and fluoride.',
    recommendedProductIds: ['nilgiri-aromatic-orthodox', 'darjeeling-silver-needle']
  },
  {
    id: 'brain-focus',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Cognitive Sharpness & Memory Recall',
    subtitle: 'Stimulates cerebral blood flow and enhances calm theta & alpha brain wave patterns',
    target: 'Brain & Mood',
    icon: Brain,
    highlight: 'Alpha & Theta Wave Activation',
    summary: 'Tea brings the mind into a state often called "relaxed alertness." It optimizes cerebral blood flow without overstimulating the heart, promoting hours of effortless creative concentration.',
    science: 'The combination of L-Theanine and mild caffeine activates alpha brain wave frequencies (8–14 Hz), the neural signature of relaxed yet heightened concentration. This enhances neuroplasticity, working memory recall, and reaction speed without heart strain.',
    recommendedProductIds: ['meghalaya-cloud-oolong', 'darjeeling-first-flush']
  },
  {
    id: 'metabolism-boost',
    category: 'vitality',
    categoryName: 'Vitality & Wellness',
    title: 'Metabolic Activation & Zero Empty Calories',
    subtitle: 'Naturally burns up to 70–80 extra calories daily with zero added sugars',
    target: 'Gut & Digestion',
    icon: Flame,
    highlight: 'Burns 70-80 kcal/Day Naturally',
    summary: 'Pure unsweetened tea contains practically zero calories while gently raising baseline energy expenditure, making it the perfect natural companion for weight management and metabolic vitality.',
    science: 'Green and oolong teas possess high concentrations of epigallocatechin gallate (EGCG) which inhibits catechol-O-methyltransferase (COMT), prolonging cellular norepinephrine signaling to stimulate non-shivering thermogenesis and selective fatty acid oxidation.',
    recommendedProductIds: ['meghalaya-organic-green', 'nilgiri-winter-frost']
  },

  // --- DISEASE DEFENSE & LONGEVITY ---
  {
    id: 'cardiovascular-protection',
    category: 'disease',
    categoryName: 'Disease Defense & Longevity',
    title: 'Cardiovascular Longevity & Stroke Defense',
    subtitle: 'Significantly lowers the risk of heart attacks and keeps arterial pathways flexible',
    target: 'Heart & Arteries',
    icon: Heart,
    highlight: 'Up to 70% Less Fatal Heart Risk',
    summary: 'Epidemiological studies around the globe consistently celebrate tea drinkers for having resilient, youthful arteries. Antioxidant flavonoids prevent LDL cholesterol from hardening into arterial obstructions.',
    science: 'A landmark Dutch population study demonstrated that drinking 2 to 3 cups of black tea daily correlated with a 70% reduction in fatal heart attack incidence. Flavonoids prevent LDL cholesterol oxidation, reverse endothelial vasomotor dysfunction, and inhibit harmful platelet aggregation.',
    recommendedProductIds: ['darjeeling-first-flush', 'assam-golden-tips']
  },
  {
    id: 'diabetes-balance',
    category: 'disease',
    categoryName: 'Disease Defense & Longevity',
    title: 'Glycemic Balance & Type 2 Diabetes Defense',
    subtitle: 'Moderates blood glucose spikes and improves natural insulin sensitivity',
    target: 'Heart & Arteries',
    icon: Activity,
    highlight: '70% Lower Diabetes Risk Observed',
    summary: 'Enjoying a fresh cup of tea after meals helps regulate how quickly carbohydrates are broken down into blood sugar, preventing the extreme glycemic spikes that lead to metabolic fatigue.',
    science: 'In long-term clinical assessments of mature adults, modest daily tea intake (1–2 cups) over years was linked to a 70% lower risk of developing Type 2 Diabetes. Tea polyphenols inhibit intestinal alpha-amylase and alpha-glucosidase enzymes, smoothing glucose absorption curves.',
    recommendedProductIds: ['darjeeling-second-flush', 'assam-golden-tips']
  },
  {
    id: 'oncology-cellular',
    category: 'disease',
    categoryName: 'Disease Defense & Longevity',
    title: 'Cellular Apoptosis & Oncology Research (TF-2)',
    subtitle: 'Bioactive theaflavins and EGCG trigger programmed clearance of abnormal cells',
    target: 'Cellular Immunity',
    icon: ShieldCheck,
    highlight: 'Bioactive TF-2 & EGCG Research',
    summary: 'A vast frontier of modern medical research focuses on tea catechins and unique theaflavins like TF-2, which have been shown in laboratory studies to selectively trigger programmed self-destruction in damaged cells.',
    science: 'Black tea possesses a specialized compound called Theaflavin-3\'-monogallate (TF-2). In cellular trials, TF-2 induced apoptosis (programmed death) in damaged cell lines while leaving healthy cells intact. Epidemiological data also highlights lower rates of ovarian, throat, and bladder abnormalities among consistent tea drinkers.',
    recommendedProductIds: ['assam-golden-tips', 'meghalaya-organic-green']
  },
  {
    id: 'dental-health',
    category: 'disease',
    categoryName: 'Disease Defense & Longevity',
    title: 'Botanical Dental Defense & Fresh Breath',
    subtitle: 'Natural fluoride and polyphenols eradicate cavity-causing plaque bacteria',
    target: 'Cellular Immunity',
    icon: Smile,
    highlight: '1.5mg Natural Fluoride / 2 Cups',
    summary: 'Unsweetened tea is a natural defense for your teeth and gums. Natural fluorides and tannins kill the bacteria that cause dental cavities and neutralize the compounds responsible for morning breath.',
    science: 'Dental plaque harbors over 300 bacterial strains. Polyphenols in black and green tea kill Streptococcus mutans and inhibit the bacterial glucosyltransferase enzymes that cement plaque to enamel. Two cups of brewed tea deliver approximately 1.5mg of natural organic fluoride, keeping tooth enamel mineralized.',
    recommendedProductIds: ['assam-royal-ctc', 'imperial-masala-chai']
  },
  {
    id: 'hypertension-control',
    category: 'disease',
    categoryName: 'Disease Defense & Longevity',
    title: 'Vascular Relaxation & Blood Pressure Control',
    subtitle: 'Daily sips encourage nitric oxide release to keep blood pressure in a healthy range',
    target: 'Heart & Arteries',
    icon: Heart,
    highlight: '50%+ Drop in Hypertension Risk',
    summary: 'Tea drinkers enjoy a natural shield against chronic high blood pressure. Just half a cup of oolong or green tea daily has been shown to cut the risk of hypertension by half.',
    science: 'Recent clinical trials found that participants consuming at least half a cup of high-mountain oolong or green tea daily reduced their chances of developing high blood pressure by over 50%. The polyphenols stimulate endothelial nitric oxide synthase (eNOS), dilating blood vessels and relieving peripheral vascular resistance.',
    recommendedProductIds: ['meghalaya-cloud-oolong', 'nilgiri-winter-frost']
  },
  {
    id: 'joint-arthritis',
    category: 'disease',
    categoryName: 'Disease Defense & Longevity',
    title: 'Anti-Inflammatory Joint & Arthritis Relief',
    subtitle: 'Inhibits inflammatory cytokines to preserve cartilage comfort and ease stiff joints',
    target: 'Cellular Immunity',
    icon: Feather,
    highlight: '60% Lower Rheumatoid Risk',
    summary: 'Whether recovering from athletic workouts or navigating joint stiffness, tea’s potent botanical anti-inflammatory agents help cool swelling and maintain supple mobility.',
    science: 'In comparative cohort studies, regular tea consumption was correlated with a 60% lower incidence of Rheumatoid Arthritis. Catechins suppress inflammatory prostaglandin E2 and down-regulate cyclooxygenase-2 (COX-2) enzymes that otherwise degrade articular cartilage.',
    recommendedProductIds: ['saffron-kashmiri-kahwa', 'nilgiri-aromatic-orthodox']
  },

  // --- SKIN RADIANCE & ANTI-AGING ---
  {
    id: 'skin-aging',
    category: 'skin',
    categoryName: 'Skin Radiance & Anti-Aging',
    title: 'Dermal Defense & Fine Line Smoothing',
    subtitle: 'Halts collagen breakdown and accelerates youthful cellular skin renewal',
    target: 'Skin & Beauty',
    icon: Sparkles,
    highlight: 'Protects Dermal Collagen Matrix',
    summary: 'Drinking polyphenol-rich black and green teas nourishes your dermal barrier from within, defending against premature fine lines, blemishes, and oxidative dullness.',
    science: 'Tea tannins and flavonoids act as natural collagenase and elastase inhibitors, preventing the enzymatic degradation of collagen and elastin fibers in the dermis. Drinking 1 to 2 cups daily fuels micro-capillary nutrient delivery to the skin surface.',
    recommendedProductIds: ['darjeeling-silver-needle', 'meghalaya-cloud-oolong']
  },
  {
    id: 'chilled-tea-compress',
    category: 'skin',
    categoryName: 'Skin Radiance & Anti-Aging',
    title: 'De-Puffing Eye Compress & Sunburn Coolant',
    subtitle: 'Chilled steeped tea leaves rapidly soothe swollen eyelids and sunburned skin',
    target: 'Skin & Beauty',
    icon: Droplets,
    highlight: 'Instant Botanical Eye Relief',
    summary: 'Never discard your steeped tea leaves or bags! Once chilled in the refrigerator, they make the ultimate soothing botanical compress to banish dark circles, under-eye puffiness, and skin irritation.',
    science: 'Caffeine applied topically causes immediate micro-capillary vasoconstriction, swiftly drawing out fluid trapped under delicate eyelid tissue. Simultaneously, cool tannins soothe sunburn stinging, reduce histamine redness, and speed epidermal recovery.',
    recommendedProductIds: ['darjeeling-first-flush', 'assam-royal-ctc']
  },
  {
    id: 'antioxidant-tea-bath',
    category: 'skin',
    categoryName: 'Skin Radiance & Anti-Aging',
    title: 'Rejuvenating Antioxidant Botanical Baths',
    subtitle: 'Soak your skin in aromatic tea-infused bathwater for total-body relaxation',
    target: 'Skin & Beauty',
    icon: Sparkles,
    highlight: 'Full-Body Dermal Rejuvenation',
    summary: 'Transform your evening bath into a fragrant luxury spa. Steeping loose leaves or fragrant jasmine in a warm bath infuses the water with skin-softening antioxidants and calming aromatherapy.',
    science: 'Water-soluble catechins and volatile terpenes absorb through the warm dermal pore matrix, softening skin texture, cooling body inflammation, and providing holistic sensory stress relief through natural jasmine, rosehip, and chamomile aromatherapy.',
    recommendedProductIds: ['nilgiri-aromatic-orthodox', 'darjeeling-first-flush']
  },

  // --- HAIR & SCALP VITALITY ---
  {
    id: 'dht-hair-loss',
    category: 'hair',
    categoryName: 'Hair & Scalp Vitality',
    title: 'DHT Hormone Blocking for Hair Retention',
    subtitle: 'Black tea caffeine suppresses follicle-miniaturizing scalp hormones',
    target: 'Hair & Scalp',
    icon: Feather,
    highlight: 'Natural DHT Hormone Blocker',
    summary: 'Dihydrotestosterone (DHT) is the primary hormone responsible for progressive hair thinning and shedding. The natural bio-caffeine in black tea helps suppress DHT at the scalp level, strengthening roots.',
    science: 'Clinical dermatological studies show that topically and internally bioavailable tea caffeine counteracts DHT-induced follicle miniaturization. By inhibiting local 5-alpha reductase activity, it protects active anagen hair growth cycles from premature shedding.',
    recommendedProductIds: ['assam-royal-ctc', 'assam-golden-tips']
  },
  {
    id: 'hair-growth-shine',
    category: 'hair',
    categoryName: 'Hair & Scalp Vitality',
    title: 'Follicle Stimulation & Mirror-Like Shine',
    subtitle: 'Black tea botanical rinses enhance natural hair tone, bounce, and lustrous gloss',
    target: 'Hair & Scalp',
    icon: Sparkles,
    highlight: 'Natural Gloss & Color Depth',
    summary: 'An ancient beauty secret used in Indian and East Asian heritage: rinsing freshly washed hair with brewed black tea stimulates root microcirculation and deposits natural multidimensional gloss and radiant color depth.',
    science: 'Brewing 5g of rich orthodox black tea, cooling it, and applying it as a post-shampoo rinse coats the hair cuticle with natural lustrous tannins. This seals split ends, neutralizes scalp flaking through antibacterial polyphenols, and imparts brilliant reflective sheen.',
    recommendedProductIds: ['assam-royal-ctc', 'imperial-masala-chai']
  }
];

export const DAILY_RITUALS = [
  {
    time: '7:00 AM',
    title: 'Dawn Awakening: Malty Vitality',
    teaName: 'Imperial Royal Masala Chai or Assam Royal CTC',
    benefits: ['Theophylline clean alertness', 'Metabolic kickstart', 'No coffee jitters'],
    instructions: 'Steep boldly to awaken the senses. Simmer with whole milk or enjoy black with a hint of raw jaggery.'
  },
  {
    time: '1:00 PM',
    title: 'Midday Digestif: Alpine Gut Harmony',
    teaName: 'Meghalaya Cloud Oolong or Nilgiri Orthodox',
    benefits: ['Digestive tannin soothing', 'Blood sugar spike modulation', 'Post-meal lightness'],
    instructions: 'Sip slowly 20 minutes after lunch to stimulate gastric balance and avoid the afternoon food slump.'
  },
  {
    time: '4:00 PM',
    title: 'Afternoon Radiance: Muscatel Focus',
    teaName: 'Darjeeling Champagne First Flush',
    benefits: ['L-Theanine creative flow', 'Antioxidant cellular shield', 'Clean mental focus'],
    instructions: 'Brew with pure 85°C water to release exquisite muscatel grape notes and alpha brain wave clarity.'
  },
  {
    time: '8:30 PM',
    title: 'Nightfall Reset: Saffron Calm',
    teaName: 'Royal Kashmiri Saffron Kahwa or Darjeeling Silver Needle',
    benefits: ['Cortisol hormone decrease', 'Deep cellular repair', 'Restorative sleep'],
    instructions: 'Gentle low-caffeine brew infused with saffron and green cardamom to calm the nervous system before sleep.'
  }
];

export default function TeaBenefits({ onSelectProduct, onAddToCart, onExploreCollection }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTarget, setSelectedTarget] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const targets = ['All', 'Brain & Mood', 'Heart & Arteries', 'Gut & Digestion', 'Skin & Beauty', 'Hair & Scalp', 'Cellular Immunity'];

  const filteredBenefits = useMemo(() => {
    return TEA_BENEFITS.filter((benefit) => {
      const matchesCategory = activeTab === 'all' || benefit.category === activeTab;
      const matchesTarget = selectedTarget === 'All' || benefit.target === selectedTarget;
      const matchesSearch = !searchQuery || 
        benefit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        benefit.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        benefit.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        benefit.science.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesTarget && matchesSearch;
    });
  }, [activeTab, selectedTarget, searchQuery]);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="tea-benefits-page">
      {/* Hero Header */}
      <section className="benefits-hero">
        <div className="container">
          <div className="benefits-hero-content">
            <div className="benefits-badge">
              <Sparkles size={14} /> Living Botanical Science
            </div>
            <h1 className="benefits-title font-serif">
              Over 15 Extraordinary Benefits of Drinking Tea
            </h1>
            <p className="benefits-subtitle">
              Long celebrated as an art of tranquil living, pure unadulterated tea is a profound natural medicine. 
              Sourced directly from heritage misty gardens, our single-origin leaves concentrate over 300 bioactive polyphenols, 
              flavonoids, catechins, L-theanine, and trace minerals that shield your body against modern cellular stress.
            </p>

            {/* Quick Metrics Counter Grid */}
            <div className="benefits-metrics-grid">
              <div className="metric-card">
                <div className="metric-number">18+</div>
                <div className="metric-label">Clinically Studied Benefits</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">0</div>
                <div className="metric-label">Calories in Pure Brews</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">300+</div>
                <div className="metric-label">Bioactive Polyphenols</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">-70%</div>
                <div className="metric-label">Cortisol & Stress Shield</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Navigation Category Tabs */}
          <div className="benefits-category-tabs">
            <button
              className={`category-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All 18 Benefits
            </button>
            <button
              className={`category-tab-btn ${activeTab === 'vitality' ? 'active' : ''}`}
              onClick={() => setActiveTab('vitality')}
            >
              Vitality & Wellness
            </button>
            <button
              className={`category-tab-btn ${activeTab === 'disease' ? 'active' : ''}`}
              onClick={() => setActiveTab('disease')}
            >
              Disease Defense
            </button>
            <button
              className={`category-tab-btn ${activeTab === 'skin' ? 'active' : ''}`}
              onClick={() => setActiveTab('skin')}
            >
              Skin Radiance
            </button>
            <button
              className={`category-tab-btn ${activeTab === 'hair' ? 'active' : ''}`}
              onClick={() => setActiveTab('hair')}
            >
              Hair & Scalp
            </button>
            <button
              className={`category-tab-btn ${activeTab === 'rituals' ? 'active' : ''}`}
              onClick={() => setActiveTab('rituals')}
            >
              <Clock size={15} style={{ display: 'inline', marginRight: '6px' }} />
              Daily Tea Prescriptions
            </button>
          </div>

          {/* If Daily Rituals tab is active */}
          {activeTab === 'rituals' ? (
            <div className="daily-rituals-container">
              <div className="section-header" style={{ marginBottom: '2.5rem' }}>
                <div className="section-subtitle">Chronobiological Wellness</div>
                <h2 className="section-title">Your Optimal Daily Tea Schedule</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  Align your tea consumption with your circadian rhythm to maximize cognitive focus, digestive ease, and restorative evening sleep.
                </p>
              </div>

              <div className="ritual-timeline">
                {DAILY_RITUALS.map((ritual, idx) => (
                  <div key={idx} className="ritual-card">
                    <div className="ritual-time-badge">{ritual.time}</div>
                    <div className="ritual-body">
                      <h3 className="ritual-title font-serif">{ritual.title}</h3>
                      <div className="ritual-tea-name">
                        <Leaf size={14} color="var(--color-gold)" /> {ritual.teaName}
                      </div>
                      <div className="ritual-benefits-tags">
                        {ritual.benefits.map((b, bIdx) => (
                          <span key={bIdx} className="benefit-tag">
                            <Check size={12} /> {b}
                          </span>
                        ))}
                      </div>
                      <p className="ritual-instruction">{ritual.instructions}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button className="btn-primary" onClick={onExploreCollection}>
                  Explore Harvests for Your Daily Ritual
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Target Filters & Search Bar */}
              <div className="benefits-filter-bar">
                <div className="target-pills-scroll">
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600', marginRight: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    Focus Area:
                  </span>
                  {targets.map((tgt) => (
                    <button
                      key={tgt}
                      className={`target-pill ${selectedTarget === tgt ? 'active' : ''}`}
                      onClick={() => setSelectedTarget(tgt)}
                    >
                      {tgt}
                    </button>
                  ))}
                </div>

                {/* Search Input */}
                <div className="benefits-search-box">
                  <Search size={16} color="var(--color-gold)" />
                  <input
                    type="text"
                    placeholder="Search benefits (e.g., Cortisol, Heart, Hair, EGCG)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Benefits Result Counter */}
              <div style={{ marginBottom: '1.5rem', fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>
                  Showing <strong style={{ color: 'var(--color-gold)' }}>{filteredBenefits.length}</strong> scientific benefits
                </span>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'none', border: 'none', color: 'var(--color-gold)', cursor: 'pointer', fontSize: '0.82rem' }}
                  >
                    Clear search
                  </button>
                )}
              </div>

              {/* Benefits Grid */}
              {filteredBenefits.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No benefits matched your filters.</p>
                  <button 
                    className="btn-secondary" 
                    onClick={() => { setSelectedTarget('All'); setSearchQuery(''); setActiveTab('all'); }}
                    style={{ marginTop: '1rem' }}
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="benefits-cards-grid">
                  {filteredBenefits.map((item) => {
                    const IconComp = item.icon;
                    const isExpanded = expandedId === item.id;
                    const recommendedTeas = PRODUCTS.filter((p) => item.recommendedProductIds.includes(p.id));

                    return (
                      <div key={item.id} className="benefit-card">
                        {/* Top Header */}
                        <div className="benefit-card-header">
                          <div className="benefit-icon-wrapper">
                            <IconComp size={22} color="var(--color-gold)" />
                          </div>
                          <div style={{ flexGrow: 1 }}>
                            <div className="benefit-category-label">{item.categoryName}</div>
                            <h3 className="benefit-card-title font-serif">{item.title}</h3>
                          </div>
                          <div className="benefit-highlight-badge">{item.highlight}</div>
                        </div>

                        {/* Subtitle */}
                        <div className="benefit-card-subtitle">{item.subtitle}</div>

                        {/* Summary */}
                        <p className="benefit-card-summary">{item.summary}</p>

                        {/* Expandable Science Deep Dive */}
                        <div className={`benefit-science-expandable ${isExpanded ? 'open' : ''}`}>
                          <button 
                            className="science-toggle-btn"
                            onClick={() => toggleExpand(item.id)}
                            aria-expanded={isExpanded}
                          >
                            <span>Biochemical & Clinical Mechanism</span>
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>

                          {isExpanded && (
                            <div className="science-content-box">
                              <p>{item.science}</p>
                            </div>
                          )}
                        </div>

                        {/* Recommended Teas Link Box */}
                        <div className="recommended-teas-section">
                          <div className="recommended-title">
                            <Leaf size={12} color="var(--color-emerald)" /> Best Handcrafted Harvests for This:
                          </div>
                          <div className="recommended-teas-list">
                            {recommendedTeas.map((tea) => (
                              <div key={tea.id} className="tea-recommendation-chip">
                                <span 
                                  className="tea-chip-name"
                                  onClick={() => onSelectProduct(tea)}
                                  title="View details"
                                >
                                  {tea.name}
                                </span>
                                <button
                                  className="tea-chip-add-btn"
                                  onClick={() => onAddToCart(tea)}
                                  title={`Add ${tea.name} to bag`}
                                >
                                  <ShoppingBag size={12} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* Key Bioactive Phytochemicals Reference Banner */}
          <div className="tea-phytochemicals-banner">
            <div className="phytochemicals-header">
              <div className="section-subtitle">Bioactive Matrix</div>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--color-gold)' }}>
                The Healing Chemistry Behind Every Leaf
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '750px', margin: '0 auto' }}>
                Unlike synthetic vitamin supplements, artisanal tea provides an intricate matrix of naturally evolved plant compounds working in harmonious synergy.
              </p>
            </div>

            <div className="phytochemicals-grid">
              <div className="compound-card">
                <h4 className="compound-name">Flavonoids (Quercetin & Myricetin)</h4>
                <p className="compound-desc">
                  Potent plant pigments that defend against arterial plaque accumulation, lower seasonal allergy sensitivities, and protect cardiovascular tone.
                </p>
              </div>

              <div className="compound-card">
                <h4 className="compound-name">Catechins & EGCG</h4>
                <p className="compound-desc">
                  Extraordinary free-radical destroyers concentrated in unoxidized tea leaves, clinically proven to boost metabolic thermogenesis and cellular defense.
                </p>
              </div>

              <div className="compound-card">
                <h4 className="compound-name">L-Theanine Amino Acid</h4>
                <p className="compound-desc">
                  Crosses the blood-brain barrier to trigger tranquil alpha waves, smoothing caffeine absorption for hours of uninterrupted, jitter-free mental focus.
                </p>
              </div>

              <div className="compound-card">
                <h4 className="compound-name">Theaflavins & TF-2</h4>
                <p className="compound-desc">
                  Unique to whole-leaf oxidized black teas, theaflavins give black tea its signature amber liquor and trigger programmed apoptosis in aberrant cells.
                </p>
              </div>

              <div className="compound-card">
                <h4 className="compound-name">Natural Fluoride & Tannins</h4>
                <p className="compound-desc">
                  Leaves naturally accumulate bio-fluoride and astringent tannins that kill cavity-causing Streptococcus bacteria and fortify tooth enamel naturally.
                </p>
              </div>

              <div className="compound-card">
                <h4 className="compound-name">Theophylline & Trace Minerals</h4>
                <p className="compound-desc">
                  Gently expands bronchial pathways and supports kidney filtration, paired with bioavailable potassium and manganese for electrolyte balance.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="benefits-cta-banner">
            <div style={{ maxWidth: '600px' }}>
              <div className="section-subtitle">Taste the Purity</div>
              <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>
                Begin Your Daily Healing Tea Ritual
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Experience the authentic difference of fresh single-origin harvests. Sourced directly from family tea gardens with zero artificial additives or dust fillers.
              </p>
            </div>
            <button 
              className="btn-primary" 
              onClick={onExploreCollection}
              style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
            >
              Explore Curated Harvests
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
