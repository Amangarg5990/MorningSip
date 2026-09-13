export const PRODUCTS = [
  // --- ASSAM TEAS ---
  {
    id: "assam-golden-tips",
    name: "Assam Estate Golden Tips Orthodox",
    lotNumber: "ASM-2026-T01",
    tagline: "Single-estate clonal black tea with rich golden tips from Upper Assam",
    category: "Assam Valley",
    price: 34,
    originalPrice: 40,
    rating: 4.9,
    reviewsCount: 178,
    isBestseller: true,
    isNew: false,
    caffeine: "High",
    organic: true,
    origin: "Upper Assam Valley, India",
    elevation: "350 ft (Alluvial Valley)",
    harvestSeason: "Second Flush (June 2026)",
    oxidationLevel: "100% Full Orthodox",
    cultivar: "Camellia Sinensis var. Assamica (P126 Clonal)",
    flavorNotes: ["Malty Sweetness", "Dark Cocoa", "Wild Honey", "Warm Toast"],
    description: "Handcrafted from elite clonal tea bushes in the sun-drenched floodplains of Upper Assam. Brimming with velvety golden tips that yield a radiant copper cup, pronounced natural maltiness, and notes of rich cocoa and wild honey without harsh bitterness.",
    steepGuide: {
      temp: "95°C - 100°C (203°F - 212°F)",
      time: "3 - 4 mins",
      ratio: "2.5g per 250ml",
      tools: "Porcelain Teapot or Gaiwan"
    },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Brewed Cup",
        url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85",
        caption: "Radiant copper liquor with natural malt warmth"
      },
      {
        label: "Dry Leaf",
        url: "https://images.unsplash.com/photo-1563822249510-7521e1e075e7?auto=format&fit=crop&w=1200&q=85",
        caption: "Orthodox whole leaf with abundant golden clonal tips"
      },
      {
        label: "Garden Terroir",
        url: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=85",
        caption: "Upper Assam Brahmaputra river basin tea estate"
      }
    ],
    inStock: true
  },
  {
    id: "assam-royal-ctc",
    name: "Assam Heritage Royal CTC",
    lotNumber: "ASM-2026-CTC4",
    tagline: "Bold, brisk, and full-bodied traditional Assam CTC for the classic breakfast cup",
    category: "Assam Valley",
    price: 22,
    rating: 4.8,
    reviewsCount: 245,
    isBestseller: true,
    isNew: false,
    caffeine: "High",
    organic: true,
    origin: "Dibrugarh, Assam, India",
    elevation: "320 ft",
    harvestSeason: "Mid-Monsoon Harvest",
    oxidationLevel: "100% CTC Granular",
    cultivar: "Assamica Native",
    flavorNotes: ["Rich Malt", "Toffee", "Bold Body", "Dark Amber"],
    description: "Premium orthodox-grade CTC granules from legendary tea gardens along the Brahmaputra River. Robust, deeply aromatic, and intensely malty. Brews a lively dark liquor that stands up magnificently to steamed milk and raw cane jaggery.",
    steepGuide: {
      temp: "100°C (212°F)",
      time: "3 - 5 mins",
      ratio: "3g per 250ml",
      tools: "Tea Infuser or Chai Saucepan"
    },
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Brewed Cup",
        url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85",
        caption: "Dark, brisk breakfast liquor with rich crema"
      },
      {
        label: "Dry Leaf",
        url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=85",
        caption: "Evenly rolled high-density CTC granules"
      },
      {
        label: "Chai Preparation",
        url: "https://images.unsplash.com/photo-1571934811356-5cc561d6821f?auto=format&fit=crop&w=1200&q=85",
        caption: "Traditional slow milk simmer with cardamom"
      }
    ],
    inStock: true
  },

  // --- DARJEELING TEAS ---
  {
    id: "darjeeling-first-flush",
    name: "Darjeeling Champagne First Flush",
    lotNumber: "DJ-2026-FF03",
    tagline: "The Champagne of Teas harvested in early spring mist at 6,000 feet altitude",
    category: "Darjeeling Reserves",
    price: 38,
    originalPrice: 44,
    rating: 5.0,
    reviewsCount: 192,
    isBestseller: true,
    isNew: false,
    caffeine: "Medium",
    organic: true,
    origin: "Darjeeling, West Bengal (6,000 ft)",
    elevation: "6,000 ft MSL",
    harvestSeason: "Spring First Flush (March 2026)",
    oxidationLevel: "35% Light Fermentation",
    cultivar: "Pure Camellia Sinensis (China Bush)",
    flavorNotes: ["Muscatel Grape", "Spring Blossom", "White Peach", "Crisp Citrus"],
    description: "Plucked in early spring as the tender young shoots awaken from winter slumber beneath Himalayan snow peaks. Produces a luminous pale golden liquor renowned worldwide for its brisk floral perfume and ethereal muscatel grape complexity.",
    steepGuide: {
      temp: "85°C - 90°C (185°F - 195°F)",
      time: "3 mins",
      ratio: "2.5g per 250ml",
      tools: "Fine Glass or Porcelain Teapot"
    },
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Brewed Cup",
        url: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=85",
        caption: "Luminous pale champagne liquor with floral bouquet"
      },
      {
        label: "Tender Leaf",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=85",
        caption: "Green-tipped spring two leaves and a bud"
      },
      {
        label: "Himalayan Ridge",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
        caption: "Misty terraced slopes facing Kanchenjunga"
      }
    ],
    inStock: true
  },
  {
    id: "darjeeling-second-flush",
    name: "Darjeeling Imperial Muscatel Second Flush",
    lotNumber: "DJ-2026-SF12",
    tagline: "Sun-drenched summer harvest with deep amber liquor and signature ripe muscatel notes",
    category: "Darjeeling Reserves",
    price: 36,
    rating: 4.9,
    reviewsCount: 114,
    isBestseller: false,
    isNew: true,
    caffeine: "High",
    organic: true,
    origin: "Kurseong Valley, Darjeeling (5,400 ft)",
    elevation: "5,400 ft MSL",
    harvestSeason: "Summer Second Flush (May-June 2026)",
    oxidationLevel: "75% Well-Oxidized",
    cultivar: "Heritage China & Clonal AV2",
    flavorNotes: ["Ripe Muscat Grape", "Wild Flower Honey", "Toasted Walnut", "Sun-Dried Wood"],
    description: "Harvested in May and June when intense mountain sunshine concentrates natural essential oils in the mature leaves. Possesses a deeper golden-amber hue, velvety mouthfeel, and the quintessential ripe muscat grape sweetness prized by tea sommeliers.",
    steepGuide: {
      temp: "90°C - 95°C (195°F - 203°F)",
      time: "3.5 mins",
      ratio: "2.5g per 250ml",
      tools: "Classic Ceramic Teapot"
    },
    image: "https://images.unsplash.com/photo-1563822249510-7521e1e075e7?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Brewed Liquor",
        url: "https://images.unsplash.com/photo-1563822249510-7521e1e075e7?auto=format&fit=crop&w=1200&q=85",
        caption: "Deep amber liquor with honey ring"
      },
      {
        label: "Twisted Leaf",
        url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=85",
        caption: "Dark wiry leaves with visible silver flecks"
      },
      {
        label: "Garden View",
        url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85",
        caption: "Kurseong valley sun-ripened tea bushes"
      }
    ],
    inStock: true
  },
  {
    id: "darjeeling-silver-needle",
    name: "Darjeeling Himalayan Silver Needle White",
    lotNumber: "DJ-2026-SN01",
    tagline: "Exquisite unoxidized downy buds harvested by moonlight in high Himalayan fog",
    category: "Darjeeling Reserves",
    price: 42,
    rating: 4.9,
    reviewsCount: 86,
    isBestseller: false,
    isNew: true,
    caffeine: "Low",
    organic: true,
    origin: "Mirik Valley, Darjeeling (6,800 ft)",
    elevation: "6,800 ft MSL",
    harvestSeason: "Dawn Harvest (April 2026)",
    oxidationLevel: "0% Unoxidized White",
    cultivar: "Special Clonal AV2 Velvet Buds",
    flavorNotes: ["Sweet Alpine Meadow", "Velvet Orchid", "Fresh Pear", "Subtle Dew"],
    description: "Composed entirely of unopened, silvery-white downy terminal buds hand-plucked during cool morning dew. Air-dried naturally without heat rolling. Imparts an ethereal champagne-pale liquor, silken texture, and whisper-soft orchid sweetness.",
    steepGuide: {
      temp: "75°C - 80°C (167°F - 176°F)",
      time: "4 - 5 mins (re-steep up to 4x)",
      ratio: "3g per 250ml",
      tools: "Glass Gaiwan or Infuser Cup"
    },
    image: "https://images.unsplash.com/photo-1571934811356-5cc561d6821f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Silvery Buds",
        url: "https://images.unsplash.com/photo-1571934811356-5cc561d6821f?auto=format&fit=crop&w=1200&q=85",
        caption: "Downy terminal buds with silvery-white trichomes"
      },
      {
        label: "Glass Infusion",
        url: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=85",
        caption: "Ethereal crystal-clear pale golden infusion"
      },
      {
        label: "High Mirik",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
        caption: "Perpetual high altitude Himalayan fog garden"
      }
    ],
    inStock: true
  },

  // --- NILGIRI TEAS (BLUE MOUNTAINS) ---
  {
    id: "nilgiri-winter-frost",
    name: "Nilgiri Blue Mountain Winter Frost Tea",
    lotNumber: "NLG-2026-WF08",
    tagline: "Rare frost-harvest black tea grown at 6,500+ ft in the misty Western Ghats",
    category: "Nilgiri Blue Mountain",
    price: 32,
    rating: 4.9,
    reviewsCount: 135,
    isBestseller: true,
    isNew: false,
    caffeine: "Medium",
    organic: true,
    origin: "Nilgiri Hills, Tamil Nadu (6,500 ft)",
    elevation: "6,500 ft MSL",
    harvestSeason: "January Winter Frost 2026",
    oxidationLevel: "80% Crisp Mountain Oxidation",
    cultivar: "High-Altitude Nilgiri Clonal",
    flavorNotes: ["Sweet Citrus Blossom", "Alpine Mint", "Golden Plum", "Crisp Floral"],
    description: "Harvested during the peak chill of January when morning ground frost kisses the tea bushes of the Blue Mountains. The cold stress traps concentrated sugars in the leaf, resulting in a luminous rosy cup with remarkable floral clarity, crisp fruitiness, and zero astringency.",
    steepGuide: {
      temp: "90°C (194°F)",
      time: "3 mins",
      ratio: "2.5g per 250ml",
      tools: "Glass Teapot (Superb Iced as well)"
    },
    image: "https://images.unsplash.com/photo-1531969177552-b883017cf7b5?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Brewed Cup",
        url: "https://images.unsplash.com/photo-1531969177552-b883017cf7b5?auto=format&fit=crop&w=1200&q=85",
        caption: "Bright rosy-amber cup with clean citrus finish"
      },
      {
        label: "Whole Leaf",
        url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85",
        caption: "Dark aromatic leaves with crisp floral aroma"
      },
      {
        label: "Blue Mountains",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
        caption: "Shola cloud forest high above Coonoor"
      }
    ],
    inStock: true
  },
  {
    id: "nilgiri-aromatic-orthodox",
    name: "Nilgiri Twirl Orthodox Black",
    lotNumber: "NLG-2026-OR02",
    tagline: "Bright, fragrant orthodox tea with high-mountain eucalyptus breeze and apricot undertones",
    category: "Nilgiri Blue Mountain",
    price: 26,
    rating: 4.7,
    reviewsCount: 78,
    isBestseller: false,
    isNew: false,
    caffeine: "Medium",
    organic: true,
    origin: "Coonoor, Nilgiri Mountains (6,200 ft)",
    elevation: "6,200 ft MSL",
    harvestSeason: "Spring Harvest (March 2026)",
    oxidationLevel: "85% Orthodox Twirl",
    cultivar: "Heritage Nilgiri Clonal",
    flavorNotes: ["Eucalyptus Air", "Ripe Apricot", "Fragrant Orange", "Smooth Malt"],
    description: "Artisanal hand-rolled orthodox leaf from heritage mountain gardens nestled beside shola cloud forests. Clean, bright golden liquor with notes of mountain wildflower honey and eucalyptus breeze. Exceptionally versatile for pure drinking or cold brewing.",
    steepGuide: {
      temp: "90°C - 95°C (195°F - 203°F)",
      time: "3 mins",
      ratio: "3g per 250ml",
      tools: "Ceramic Teapot"
    },
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Brewed Cup",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=85",
        caption: "Clean golden liquor with natural fruit aromatics"
      },
      {
        label: "Twirled Leaf",
        url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=85",
        caption: "Artisanally twisted long black orthodox leaves"
      },
      {
        label: "Coonoor Ridge",
        url: "https://images.unsplash.com/photo-1531969177552-b883017cf7b5?auto=format&fit=crop&w=1200&q=85",
        caption: "Eucalyptus lined ridges of the Western Ghats"
      }
    ],
    inStock: true
  },

  // --- MEGHALAYAN TEAS (ABODE OF THE CLOUDS) ---
  {
    id: "meghalaya-cloud-oolong",
    name: "Meghalaya Cloud Forest Highland Oolong",
    lotNumber: "MEG-2026-OL05",
    tagline: "Rare high-elevation artisanal semi-oxidized tea from the pristine Khasi Hills",
    category: "Meghalayan Highlands",
    price: 36,
    originalPrice: 42,
    rating: 5.0,
    reviewsCount: 94,
    isBestseller: true,
    isNew: true,
    caffeine: "Medium",
    organic: true,
    origin: "Khasi Hills, Meghalaya (5,200 ft)",
    elevation: "5,200 ft MSL",
    harvestSeason: "Spring Pre-Monsoon Pluck",
    oxidationLevel: "30% Light Semi-Fermented",
    cultivar: "Wild Forest Indigenous & Taiwanese Clonal",
    flavorNotes: ["Sweet Apricot", "Pine Forest", "Mountain Orchid", "Smooth Butter"],
    description: "Grown in Meghalaya—the famed 'Abode of the Clouds'—where perpetual mountain mist, rich virgin forest soil, and pesticide-free indigenous farming produce an enchanting semi-fermented oolong. Features sweet stone-fruit nectar, a buttery finish, and multi-steep longevity.",
    steepGuide: {
      temp: "85°C - 90°C (185°F - 195°F)",
      time: "3 - 4 mins (re-steep up to 5x)",
      ratio: "3.5g per 250ml",
      tools: "Gaiwan or Clay Pot"
    },
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Oolong Cup",
        url: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=1200&q=85",
        caption: "Honey-golden oolong liquor with stone-fruit note"
      },
      {
        label: "Rolled Leaf",
        url: "https://images.unsplash.com/photo-1563822249510-7521e1e075e7?auto=format&fit=crop&w=1200&q=85",
        caption: "Tightly curled artisanal oolong pearls"
      },
      {
        label: "Khasi Hills",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
        caption: "Perpetual cloud canopy of Meghalaya sacred forests"
      }
    ],
    inStock: true
  },
  {
    id: "meghalaya-golden-needle",
    name: "Meghalaya Khasi Reserve Golden Needle",
    lotNumber: "MEG-2026-GN01",
    tagline: "Micro-batch boutique black tea with lush golden pubescence and wildflower honey liquor",
    category: "Meghalayan Highlands",
    price: 38,
    rating: 4.9,
    reviewsCount: 62,
    isBestseller: false,
    isNew: true,
    caffeine: "High",
    organic: true,
    origin: "Ri-Bhoi & Khasi Hills, Meghalaya (4,800 ft)",
    elevation: "4,800 ft MSL",
    harvestSeason: "Spring Flavour Harvest",
    oxidationLevel: "100% Boutique Black",
    cultivar: "Single Bud & Top Leaf Clonal",
    flavorNotes: ["Wild Mountain Honey", "Roasted Pecan", "Ripe Fig", "Caramelized Malt"],
    description: "An extraordinary boutique harvest handcrafted by tribal smallholder growers in Meghalaya. Only the single bud and top leaf are selected, resulting in long golden needles that produce a nectar-rich mahogany cup with notes of roasted pecans and mountain honey.",
    steepGuide: {
      temp: "95°C (203°F)",
      time: "3.5 mins",
      ratio: "2.5g per 250ml",
      tools: "Glass Server or Teapot"
    },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Mahogany Cup",
        url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85",
        caption: "Rich mahogany cup with wildflower honey essence"
      },
      {
        label: "Golden Needles",
        url: "https://images.unsplash.com/photo-1563822249510-7521e1e075e7?auto=format&fit=crop&w=1200&q=85",
        caption: "Long golden buds covered in natural trichomes"
      },
      {
        label: "Tribal Farm",
        url: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=85",
        caption: "Organic indigenous smallholder garden in Ri-Bhoi"
      }
    ],
    inStock: true
  },
  {
    id: "meghalaya-organic-green",
    name: "Meghalaya Misty Peak Organic Green",
    lotNumber: "MEG-2026-GR09",
    tagline: "Pan-fired high-altitude green tea brimming with L-theanine and clean alpine vitality",
    category: "Meghalayan Highlands",
    price: 28,
    rating: 4.8,
    reviewsCount: 71,
    isBestseller: false,
    isNew: false,
    caffeine: "Low",
    organic: true,
    origin: "Mawlyngot, East Khasi Hills (5,500 ft)",
    elevation: "5,500 ft MSL",
    harvestSeason: "Spring Awakening Pluck",
    oxidationLevel: "0% Pan-Fired Green",
    cultivar: "High-Theanine Forest Green",
    flavorNotes: ["Sweet Mountain Dew", "Alpine Grass", "Toasted Sesame", "Mellow Umami"],
    description: "Cultivated in the pristine rainforest highlands of East Khasi Hills. Whole tender green shoots are pan-roasted gently to preserve natural chlorophyll, EGCG catechins, and high L-theanine amino acids. Delicate, sweet, and soothing without vegetal bitterness.",
    steepGuide: {
      temp: "80°C (176°F)",
      time: "2 mins",
      ratio: "2.5g per 250ml",
      tools: "Glass Teapot"
    },
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Jade Liquor",
        url: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=85",
        caption: "Luminous pale jade green infusion with sweet finish"
      },
      {
        label: "Whole Green Leaf",
        url: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=85",
        caption: "Intact pan-roasted green leaves"
      },
      {
        label: "Rainforest Mist",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
        caption: "Mawlyngot village high cloud canopy"
      }
    ],
    inStock: true
  },

  // --- ARTISANAL MASALA CHAI ---
  {
    id: "imperial-masala-chai",
    name: "Imperial Royal Masala Chai",
    lotNumber: "CHAI-2026-ROYAL",
    tagline: "Lush Assam CTC & Orthodox black tea crushed with Kerala cardamom, ginger, cinnamon & clove",
    category: "Artisanal Masala Chai",
    price: 26,
    originalPrice: 32,
    rating: 5.0,
    reviewsCount: 388,
    isBestseller: true,
    isNew: false,
    caffeine: "High",
    organic: true,
    origin: "Assam Valley & Malabar Coast, India",
    elevation: "Assam Valley & Western Ghats",
    harvestSeason: "Hand-blended Batch 2026",
    oxidationLevel: "100% Spiced Black Blend",
    cultivar: "Orthodox Assamica + Malabar Organic Spices",
    flavorNotes: ["Kerala Green Cardamom", "Sun-Dried Ginger", "Sweet Cinnamon", "Pungent Clove"],
    description: "The crown jewel of Indian tea culture. Strong orthodox & CTC Assam black tea harmoniously crushed with whole organic Malabar spices: green cardamom pods, sharp dried ginger root, Ceylon cinnamon bark, pungent cloves, and black peppercorns. Simmer with whole milk and jaggery for authentic Indian chai heaven.",
    steepGuide: {
      temp: "100°C (212°F) + Milk Simmer",
      time: "5 - 7 mins boil",
      ratio: "4g per cup (water + milk)",
      tools: "Saucepan & Fine Mesh Strainer"
    },
    image: "https://images.unsplash.com/photo-1571934811356-5cc561d6821f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Brewed Chai",
        url: "https://images.unsplash.com/photo-1571934811356-5cc561d6821f?auto=format&fit=crop&w=1200&q=85",
        caption: "Simmered whole milk chai with cardamom foam"
      },
      {
        label: "Crushed Whole Spices",
        url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=85",
        caption: "Green cardamom pods, cinnamon bark, cloves & CTC leaf"
      },
      {
        label: "Chai Ritual",
        url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85",
        caption: "Traditional clay kulhad pouring ritual"
      }
    ],
    inStock: true
  },
  {
    id: "saffron-kashmiri-kahwa",
    name: "Royal Kashmiri Saffron Kahwa",
    lotNumber: "KASH-2026-KHW01",
    tagline: "Imperial Kashmiri green tea infused with whole saffron threads, cardamom & crushed almonds",
    category: "Artisanal Masala Chai",
    price: 34,
    rating: 4.9,
    reviewsCount: 165,
    isBestseller: true,
    isNew: true,
    caffeine: "Low",
    organic: true,
    origin: "Kashmir Valley, India (5,200 ft)",
    elevation: "5,200 ft MSL",
    harvestSeason: "Spring Kashmir Harvest",
    oxidationLevel: "0% Saffron Infused Green",
    cultivar: "Highland Green + Pampore Saffron Mongra Grade",
    flavorNotes: ["Kashmiri Saffron", "Green Cardamom", "Sweet Almond", "Gentle Cinnamon"],
    description: "An ancient celebration tea of the Kashmir Valley. Unfermented green tea leaves simmered with pure Pampore saffron stigmas, fragrant green cardamom pods, cinnamon bark, and blanched almond slivers. Brews an alluring golden liquor that warms the soul and soothes digestion.",
    steepGuide: {
      temp: "85°C - 90°C (185°F - 195°F)",
      time: "4 mins",
      ratio: "3g per 250ml",
      tools: "Glass Teapot or Traditional Samovar"
    },
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        label: "Saffron Cup",
        url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85",
        caption: "Alluring golden saffron liquor with floating almond slivers"
      },
      {
        label: "Saffron & Almonds",
        url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=85",
        caption: "Deep crimson Pampore saffron stigmas & green tea leaf"
      },
      {
        label: "Kashmir Valley",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
        caption: "Snow-draped Pir Panjal mountain valley"
      }
    ],
    inStock: true
  }
];

export const CATEGORIES = [
  "All Teas",
  "Assam Valley",
  "Darjeeling Reserves",
  "Nilgiri Blue Mountain",
  "Meghalayan Highlands",
  "Artisanal Masala Chai"
];

