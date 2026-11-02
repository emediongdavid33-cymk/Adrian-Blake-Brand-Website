/**
 * Adrian Blake Studio — Portfolio Data Repository
 * 
 * NOTE FOR ADRIAN BLAKE:
 * You can easily add, edit, or replace projects in this array.
 * Each project includes creative concept notes, promotional objectives,
 * and presentation parameters.
 */

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  authorName: string;
  category: 'Book Trailers' | 'Book Mockups' | 'Promotional Graphics' | 'Banners' | 'Campaign Concepts';
  genre: string;
  isDemo: boolean;
  featured: boolean;
  coverPalette: {
    bg: string;
    text: string;
    accent: string;
    spine: string;
    foil: string;
  };
  graphicStyle: 'astronomical' | 'gothic' | 'botanical' | 'brutalist' | 'fantasy' | 'thriller';
  shortSummary: string;
  creativeConcept: string;
  promotionalObjective: string;
  deliverables: string[];
  specs: {
    format: string;
    resolution: string;
    turnaround: string;
  };
  // Detailed assets for the interactive project modal
  trailerScript?: Array<{
    timestamp: string;
    sceneDescription: string;
    voiceoverOrText: string;
  }>;
  bannerVariants?: Array<{
    name: string;
    dimensions: string;
    description: string;
    placement: string;
  }>;
  quoteExcerpt?: {
    quote: string;
    speaker?: string;
    theme: string;
  };
  campaignPhases?: Array<{
    phase: string;
    timing: string;
    focus: string;
    assets: string[];
  }>;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'the-obsidian-horizon',
    title: 'The Obsidian Horizon',
    subtitle: 'A Novel of the Deep Void',
    authorName: 'E. V. Vance',
    category: 'Book Trailers',
    genre: 'Hard Science Fiction & Cosmic Suspense',
    isDemo: true,
    featured: true,
    coverPalette: {
      bg: '#0A0B10',
      text: '#F3EFE7',
      accent: '#C5A880',
      spine: '#12141F',
      foil: '#DFCDAF',
    },
    graphicStyle: 'astronomical',
    shortSummary: 'Cinematic book trailer and widescreen teaser campaign engineered for pre-order momentum across YouTube and Instagram.',
    creativeConcept:
      'We juxtaposed the claustrophobic silence of deep space with bold, gold-foil kinetic typography. Instead of generic starfields, we utilized high-contrast gravitational lens rings, low-frequency atmospheric sound design, and stark title reveals to evoke immense existential stakes without spoiling narrative twists.',
    promotionalObjective:
      'Generate anticipation 60 days prior to global publication, driving high-intent readers to the pre-order landing page and book community discussion threads.',
    deliverables: [
      '60-second 4K cinematic trailer with soundscape design',
      '30-second vertical social cutdown for Instagram Reels & TikTok',
      '15-second animated quote teasers for author stories',
      'High-resolution theatrical title card stills',
    ],
    specs: {
      format: '4K ProRes / MP4 H.265 (16:9 & 9:16)',
      resolution: '3840 × 2160 & 1080 × 1920',
      turnaround: 'Conceptualized & delivered in 14 days',
    },
    trailerScript: [
      {
        timestamp: '00:00 - 00:14',
        sceneDescription: 'Silence. A single faint beacon pulses in the absolute black of deep space.',
        voiceoverOrText: '“At the boundary of charted space, signal telemetry does not decay. It adapts.”',
      },
      {
        timestamp: '00:15 - 00:32',
        sceneDescription: 'The silhouette of an expedition vessel emerges against a golden gravitational ring.',
        voiceoverOrText: '“Seven hundred light-years from Earth, the crew discovered humanity was never the observer.”',
      },
      {
        timestamp: '00:33 - 00:48',
        sceneDescription: 'Rapid heartbeat montage: failing instrumentation, an ancient geometric artifact waking.',
        voiceoverOrText: '“Some horizons were never meant to be crossed.”',
      },
      {
        timestamp: '00:49 - 01:00',
        sceneDescription: 'Full 3D book cover emergence with gold foil refraction and global release date.',
        voiceoverOrText: 'THE OBSIDIAN HORIZON. Pre-Order the Hardcover Edition Now.',
      },
    ],
  },
  {
    id: 'whispers-of-the-antiquary',
    title: 'Whispers of the Antiquary',
    subtitle: 'A London Curio Mystery',
    authorName: 'Arthur Sterling',
    category: 'Book Mockups',
    genre: 'Historical Gothic Mystery',
    isDemo: true,
    featured: true,
    coverPalette: {
      bg: '#141D17',
      text: '#F5F2EB',
      accent: '#C5A880',
      spine: '#0F1612',
      foil: '#ECCF9B',
    },
    graphicStyle: 'gothic',
    shortSummary: 'Ultra-realistic 3D clothbound hardcover presentation with tactile blind debossing and gold foil embellishments.',
    creativeConcept:
      'To establish the premium tactile weight of this limited collector’s edition, we rendered physical hardcover mockups featuring British library buckram cloth textures, realistic light bounce on foil stamping, and authentic paper deckle edges. The visuals allow potential buyers to immediately perceive the craftsmanship of the physical volume.',
    promotionalObjective:
      'Elevate perceived book value to justify a premium collector’s edition retail price, enhancing sales conversion on author shopfronts and crowdfunding reward tiers.',
    deliverables: [
      'Photorealistic 3D Hardcover Mockup (Straight Angle & 45° Perspective)',
      'Foil-stamped book spine and dust jacket presentation',
      'Open-book interior layout showcase with vintage ribbon bookmark',
      'Layered source presentation kit for future marketing materials',
    ],
    specs: {
      format: 'Ultra-high-definition 3D render files & transparent PNGs',
      resolution: '4000 × 5000 px @ 300 DPI',
      turnaround: 'Designed & rendered in 7 days',
    },
  },
  {
    id: 'letters-to-the-cartographer',
    title: 'Letters to the Cartographer',
    subtitle: 'Dispatches from an Uncharted Shore',
    authorName: 'Camilla Hayes',
    category: 'Promotional Graphics',
    genre: 'Literary Fiction & Epistolary',
    isDemo: true,
    featured: true,
    coverPalette: {
      bg: '#F5F1E8',
      text: '#1C1917',
      accent: '#9A7B4F',
      spine: '#EBE4D5',
      foil: '#B38F5B',
    },
    graphicStyle: 'botanical',
    shortSummary: 'Curated suite of editorial quote cards and social media graphics designed for book clubs and literary tastemakers.',
    creativeConcept:
      'We took inspiration from early 20th-century maritime maps, aged handmade deckle paper, and letterpress typography. Pull quotes were treated as typographic art pieces rather than social media noise, allowing the author’s prose to take center stage in reader feeds.',
    promotionalObjective:
      'Cultivate organic reader-to-reader sharing, stimulate discussion in literary book club communities, and enhance author brand recognition across social channels.',
    deliverables: [
      'Series of 8 bespoke typographic quote cards (square & vertical formats)',
      'Author speaking-event announcement banner and digital flyer',
      'Printable collector bookmark artwork for packaging with early orders',
      'Instagram carousel suite presenting opening chapter highlights',
    ],
    specs: {
      format: 'Optimized WebP, PNG, and print-ready PDF with bleed',
      resolution: '2160 × 2160 px & 1080 × 1920 px',
      turnaround: 'Curated and produced in 6 days',
    },
    quoteExcerpt: {
      quote:
        '“We map not what is permanent in this world, but what we are most terrified of losing to the fog.”',
      speaker: 'From Chapter IV: The Northern Archipelago',
      theme: 'Memory, Cartography & Longing',
    },
  },
  {
    id: 'a-kingdom-of-ash-and-silk',
    title: 'A Kingdom of Ash and Silk',
    subtitle: 'The Embers of Oakhaven',
    authorName: 'Rhiannon Thorne',
    category: 'Campaign Concepts',
    genre: 'Epic Romantic Fantasy',
    isDemo: true,
    featured: true,
    coverPalette: {
      bg: '#181116',
      text: '#FDFCF9',
      accent: '#C5A880',
      spine: '#241720',
      foil: '#DFCDAF',
    },
    graphicStyle: 'fantasy',
    shortSummary: 'End-to-end 3-phase launch roadmap and visual campaign system designed to drive high-conversion viral excitement.',
    creativeConcept:
      'Built around a narrative of luxury juxtaposed with ruin. The visual campaign was divided into three curated phases: Phase 1 (Whispers — anonymous character quotes and heraldic seals), Phase 2 (The Court — cover reveal with cinematic motion graphics), and Phase 3 (The Coronation — launch day countdowns and retail badges).',
    promotionalObjective:
      'Build a self-sustaining wave of pre-launch buzz among fantasy readers, BookTok creators, and street-team influencers to achieve Top 10 category rank on launch day.',
    deliverables: [
      'Comprehensive 4-week launch timeline with daily asset checklist',
      'ARC (Advance Reader Copy) promotional graphics and digital welcome kit',
      '5-part character aesthetic cards highlighting key romantic interests',
      'Retail countdown stories (7 Days, 3 Days, 24 Hours, Available Now)',
    ],
    specs: {
      format: 'Strategic Campaign Playbook + 24 Multi-Platform Design Assets',
      resolution: 'Full-Resolution Source & Web-Optimized Packages',
      turnaround: 'Comprehensive 3-week strategic development',
    },
    campaignPhases: [
      {
        phase: 'Phase 01: The Whispers (4 Weeks Out)',
        timing: 'Days 1 - 10',
        focus: 'Atmospheric world-building without revealing the plot. Sparking reader intrigue.',
        assets: ['Heraldic seal motion reveal', 'Cryptic quote teasers', 'Mailing list invite card'],
      },
      {
        phase: 'Phase 02: The Unveiling (2 Weeks Out)',
        timing: 'Days 11 - 21',
        focus: 'The official visual cover presentation and opening sample chapter distribution.',
        assets: ['3D Animated Cover Reveal', 'Influencer ARC unboxing graphic', 'Character moodboards'],
      },
      {
        phase: 'Phase 03: The Coronation (Launch Week)',
        timing: 'Days 22 - 28',
        focus: 'Direct conversion, retail badges, and immediate celebration of reader reviews.',
        assets: ['Launch Day hero banner', 'Retail order badges', 'Early acclaim quote cards'],
      },
    ],
  },
  {
    id: 'the-quiet-architect',
    title: 'The Quiet Architect',
    subtitle: 'Principles of Timeless Leadership',
    authorName: 'Marcus H. Vance, Ph.D.',
    category: 'Banners',
    genre: 'Business Strategy & Architecture',
    isDemo: true,
    featured: false,
    coverPalette: {
      bg: '#EAE6DF',
      text: '#0D0D0D',
      accent: '#9A7B4F',
      spine: '#D9D3C8',
      foil: '#6E5531',
    },
    graphicStyle: 'brutalist',
    shortSummary: 'Amazon A+ content banner system and executive digital banners reinforcing the author’s institutional authority.',
    creativeConcept:
      'Drawing on modernist architectural principles—honest materials, clean grid alignment, and rigorous sans-serif typography. Every banner was designed to communicate gravitas, intellectual substance, and timeless executive clarity rather than sensationalist self-help tropes.',
    promotionalObjective:
      'Significantly improve page dwell time and purchase conversion rates on Amazon and Barnes & Noble storefronts by presenting premium A+ visual modules.',
    deliverables: [
      'Full Amazon A+ Content Suite (3 standard modules + 1 brand story hero banner)',
      'LinkedIn Author Profile Banner & featured article promotional card',
      'Substack publication header & newsletter feature visuals',
      'Keynote speaking-event backdrop and digital program advertisement',
    ],
    specs: {
      format: 'Amazon A+ spec compliant (970 × 300 px & 970 × 600 px)',
      resolution: 'High-density retina exports with crisp typographic rendering',
      turnaround: 'Delivered in 8 days',
    },
    bannerVariants: [
      {
        name: 'Amazon A+ Brand Story Hero',
        dimensions: '970 × 600 px',
        description: 'Large architectural panoramic banner introducing the core thesis of the book.',
        placement: 'Directly below the fold on retail product detail pages',
      },
      {
        name: 'Three Pillars Infographic Module',
        dimensions: '970 × 300 px',
        description: 'Structured 3-column breakdown of the leadership framework outlined in Part II.',
        placement: 'Middle section of Amazon enhanced product description',
      },
      {
        name: 'Author Credibility & Keynote Banner',
        dimensions: '1584 × 396 px',
        description: 'Clean executive banner for LinkedIn and personal speaking portfolio.',
        placement: 'Executive personal brand profiles and speaker bureau listings',
      },
    ],
  },
  {
    id: 'echoes-in-the-pine',
    title: 'Echoes in the Pine',
    subtitle: 'A Cascade Mountain Thriller',
    authorName: 'Declan Cole',
    category: 'Book Trailers',
    genre: 'Psychological Suspense & Wilderness Noir',
    isDemo: true,
    featured: false,
    coverPalette: {
      bg: '#0F1514',
      text: '#F5F5F3',
      accent: '#C5A880',
      spine: '#182421',
      foil: '#DFCDAF',
    },
    graphicStyle: 'thriller',
    shortSummary: 'High-retention 9:16 vertical video trailer engineered to arrest attention in the first 2 seconds on mobile feeds.',
    creativeConcept:
      'We designed this trailer specifically for vertical mobile consumption. Fast-paced visual cuts between isolated mountain topography, handwritten forensic logs, and an ominous flashlight beam create an immediate visceral hook that stops scrolling fingers within 1.5 seconds.',
    promotionalObjective:
      'Achieve high algorithmic completion rates on TikTok and Instagram Reels, converting scrollers directly to Amazon Kindle or audiobook pre-orders.',
    deliverables: [
      '20-second Vertical Hook Teaser with burned-in cinematic captions',
      'Audio-first version with binaural ambient wilderness sound design',
      'Square social media post variant for author feed and publisher ads',
      'End-screen call-to-action cards tailored for Kindle Unlimited readers',
    ],
    specs: {
      format: 'Vertical MP4 (9:16) 1080 × 1920 px @ 60fps',
      resolution: 'Crisp mobile-optimized rendering with high-contrast text',
      turnaround: 'Completed in 10 days',
    },
    trailerScript: [
      {
        timestamp: '00:00 - 00:04',
        sceneDescription: 'A flickering flashlight beam sweeping across deep pine trees in driving rain.',
        voiceoverOrText: '“The search party gave up five years ago. Tonight, her radio started broadcasting again.”',
      },
      {
        timestamp: '00:05 - 00:12',
        sceneDescription: 'Rapid heartbeat sound effect; coordinates typed rapidly into an old field terminal.',
        voiceoverOrText: '“Some secrets aren’t buried under the earth. They’re listening.”',
      },
      {
        timestamp: '00:13 - 00:20',
        sceneDescription: 'Abrupt silence. The book cover snaps into full focus with sharp rain droplets.',
        voiceoverOrText: 'ECHOES IN THE PINE. Declan Cole’s New Thriller. Read It With The Lights On.',
      },
    ],
  },
  {
    id: 'the-art-of-solitude',
    title: 'The Art of Solitude',
    subtitle: 'Meditations on Stillness in a Loud Era',
    authorName: 'Julian Sterling',
    category: 'Book Mockups',
    genre: 'Philosophical Nonfiction & Essays',
    isDemo: true,
    featured: false,
    coverPalette: {
      bg: '#FAF8F4',
      text: '#1C1917',
      accent: '#9A7B4F',
      spine: '#EFEBE1',
      foil: '#8A6D42',
    },
    graphicStyle: 'botanical',
    shortSummary: 'Quiet, tactile slipcase and deckle-edge hardcover mockup reflecting Japanese wabi-sabi aesthetics.',
    creativeConcept:
      'We embraced extreme minimalism: warm textured washi paper tones, blind deboss impressions, and asymmetrical typographic balance. The mockup emphasizes the serenity of the physical object, framing the book as an antidote to digital noise.',
    promotionalObjective:
      'Attract indie bookstore buyers, art gallery gift shops, and design-minded readers seeking physical books as contemplative lifestyle objects.',
    deliverables: [
      'Hardcover slipcase presentation mockups with textured paper grain',
      'Flat lay with coffee cup, reading glasses, and natural linen background',
      'Digital reading tablet mockup with paired typography',
    ],
    specs: {
      format: 'Layered high-resolution renders & web transparency',
      resolution: '3840 × 2560 px @ 300 DPI',
      turnaround: 'Delivered in 5 days',
    },
  },
  {
    id: 'the-starlit-alchemist',
    title: 'The Starlit Alchemist',
    subtitle: 'Book One of the Celestial Guild',
    authorName: 'Mira St. Claire',
    category: 'Promotional Graphics',
    genre: 'Young Adult Fantasy & Adventure',
    isDemo: true,
    featured: false,
    coverPalette: {
      bg: '#111726',
      text: '#F8F9FA',
      accent: '#C5A880',
      spine: '#19233B',
      foil: '#DFCDAF',
    },
    graphicStyle: 'astronomical',
    shortSummary: 'Dynamic constellation countdown cards and illustrated character graphics built for high-engagement community sharing.',
    creativeConcept:
      'Drawing from medieval astrology charts and luminous celestial gold foil. Each graphic highlighted a unique alchemical symbol tied to a character, creating collectible anticipation as launch week approached.',
    promotionalObjective:
      'Energize young adult readers and street-team ambassadors to share countdown graphics daily on Instagram and Pinterest.',
    deliverables: [
      'Set of 5 Character Reveal Cards with gold constellation borders',
      'Launch Week Countdown Badges (7, 5, 3, 1 Days to Launch)',
      'Illustrated World Map reveal card for social media',
    ],
    specs: {
      format: 'RGB WebP & PNG for Instagram, Pinterest & Twitter',
      resolution: '2000 × 2000 px square & 1080 × 1920 px story size',
      turnaround: 'Produced in 6 days',
    },
  },
];
