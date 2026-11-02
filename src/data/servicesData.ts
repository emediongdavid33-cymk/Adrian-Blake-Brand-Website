/**
 * Adrian Blake Studio — Services Repository
 * 
 * Detailed definitions for the studio's 4 core service lines:
 * 1. Book Promotional Videos
 * 2. Book Marketing Strategy
 * 3. Book Banners and Promotional Graphics
 * 4. Book Mockups and Visual Presentation
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  deepDescription: string;
  subOfferings: Array<{
    name: string;
    description: string;
  }>;
  deliverables: string[];
  strategicImpact: string;
  clientProfiles: string[];
  sampleProjectRefId: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'book-promotional-videos',
    number: '01',
    title: 'Book Promotional Videos',
    tagline: 'Cinematic Visuals That Arrest Attention in the First Three Seconds',
    summary:
      'High-impact trailers and short-form video content that translate the emotional stakes and narrative atmosphere of your book into moving images.',
    deepDescription:
      'In a crowded digital marketplace, static text rarely captures the imagination alone. We produce cinematic, story-first promotional videos tailored specifically for books—combining bespoke typography, atmospheric pacing, high-fidelity soundscapes, and tension-driven storytelling that leaves readers eager to turn the page.',
    subOfferings: [
      {
        name: 'Cinematic Book Trailers',
        description:
          'Theatrical-quality 60- to 90-second widescreen previews featuring custom motion typography, moody pacing, and immersive soundscapes.',
      },
      {
        name: 'Story-Driven Promotional Videos',
        description:
          'Narrative character vignettes and atmospheric scene-setting teasers that introduce the central conflict without spoiling the plot.',
      },
      {
        name: 'Short-Form Promotional Content',
        description:
          'High-retention 15- to 30-second vertical videos engineered specifically for TikTok, Instagram Reels, and YouTube Shorts algorithms.',
      },
      {
        name: 'Social Media Video Campaigns',
        description:
          'Structured multi-video rollout sequences that build escalating anticipation throughout pre-order, launch week, and review cycles.',
      },
    ],
    deliverables: [
      'Master 4K Widescreen Trailer (16:9) for YouTube & Author Website',
      'Vertical Reel/TikTok Cutdowns (9:16) with burned-in cinematic captions',
      'High-Resolution Title Stills for digital press kits',
      'Sound Design master with licensed cinematic audio',
    ],
    strategicImpact:
      'Converts passive social scrollers into intrigued readers by communicating the core atmosphere of your book faster than reading a back-cover blurb.',
    clientProfiles: [
      'Debut fiction authors seeking cinematic buzz',
      'Thriller & Fantasy novelists launching major releases',
      'Publishers seeking hero assets for digital ad spend',
    ],
    sampleProjectRefId: 'the-obsidian-horizon',
  },
  {
    id: 'book-marketing-strategy',
    number: '02',
    title: 'Book Marketing Strategy',
    tagline: 'Connecting Your Narrative With Its Most Dedicated Audience',
    summary:
      'Comprehensive positioning, audience mapping, and launch roadmaps that ensure your book launch is structured, intentional, and memorable.',
    deepDescription:
      'Great promotion begins long before the first graphic is exported. We establish your book’s unique market positioning, define exactly where your readers congregate, and build a cohesive launch trajectory that transforms release day from an isolated event into sustained momentum.',
    subOfferings: [
      {
        name: 'Book Positioning',
        description:
          'Articulating what makes your book irreplaceable in its category, defining your comparative titles (comps), and sharpening your core elevator pitch.',
      },
      {
        name: 'Audience Identification',
        description:
          'Pinpointing specific reader demographics, micro-communities, book clubs, and cultural niches where your book will resonate most deeply.',
      },
      {
        name: 'Promotional Campaign Planning',
        description:
          'Crafting a calendarized, phased campaign schedule spanning 60 days before launch through 30 days post-publication.',
      },
      {
        name: 'Creative Marketing Direction',
        description:
          'Unifying the visual, linguistic, and emotional tone across every touchpoint—from social announcements to retail storefronts.',
      },
      {
        name: 'Book Launch Promotional Concepts',
        description:
          'Developing memorable, story-themed campaign ideas (e.g., street team hunts, ARC reveal events, exclusive bonus content campaigns).',
      },
    ],
    deliverables: [
      'Bespoke Book Positioning & Comparative Analysis Brief',
      'Target Audience & Reader Persona Blueprint',
      'Step-by-step 90-Day Campaign Timeline & Action Checklist',
      'Core Messaging Matrix (Loglines, Hooks & Elevator Pitches)',
    ],
    strategicImpact:
      'Eliminates guesswork, prevents wasted marketing spend, and gives authors a clear, calm roadmap to execute with absolute confidence.',
    clientProfiles: [
      'Self-published authors seeking professional marketing rigor',
      'Nonfiction authors building a commercial platform',
      'Authors with backlist titles ready for strategic repositioning',
    ],
    sampleProjectRefId: 'a-kingdom-of-ash-and-silk',
  },
  {
    id: 'book-banners-and-promotional-graphics',
    number: '03',
    title: 'Book Banners and Promotional Graphics',
    tagline: 'Cohesive Visual Identity Across Every Reader Touchpoint',
    summary:
      'High-craft retail banners, quote cards, and social media graphics designed with editorial typography and luxury restraint.',
    deepDescription:
      'Every time a reader encounters your book—on Amazon, social media, your newsletter, or at a speaking engagement—the visual presentation should look authoritative. We craft coordinated graphic suites that reflect the sophistication of traditional prestige publishing.',
    subOfferings: [
      {
        name: 'Professional Book Banners',
        description:
          'Amazon A+ content banner suites, bookstore hero carousels, website banners, and newsletter headers designed to retail specifications.',
      },
      {
        name: 'Author Promotional Graphics',
        description:
          'Keynote speaker slides, personal author brand collateral, podcast interview feature cards, and press kit visual assets.',
      },
      {
        name: 'Social Media Campaign Graphics',
        description:
          'Launch countdown cards, preorder announcement graphics, milestone celebrations, and review acclaim carousels.',
      },
      {
        name: 'Quote Cards',
        description:
          'Elegantly typeset passage excerpts and dialogue highlights formatted for viral sharing across Instagram, Pinterest, and Twitter/X.',
      },
      {
        name: 'Speaking-Event Promotional Visuals',
        description:
          'Podium banners, conference nameboard slides, roll-up displays, and signing-table tabletop signage.',
      },
    ],
    deliverables: [
      'Full Amazon A+ Content Module Suite (standard & brand story sizes)',
      'Social Banner Suite (X/Twitter, LinkedIn, Facebook & YouTube)',
      'Editorial Quote Card Collection (Square & Vertical Story formats)',
      'Print-ready high-DPI event signage and bookmark files',
    ],
    strategicImpact:
      'Elevates your retail conversion rate by turning casual page visitors into convinced buyers through polished, credible presentation.',
    clientProfiles: [
      'Authors launching Amazon A+ content to boost conversions',
      'Nonfiction writers & speakers with live event appearances',
      'Literary novelists who prioritize typographic elegance',
    ],
    sampleProjectRefId: 'letters-to-the-cartographer',
  },
  {
    id: 'book-mockups-and-visual-presentation',
    number: '04',
    title: 'Book Mockups and Visual Presentation',
    tagline: 'Giving Physical Tangibility to Your Digital Book Presence',
    summary:
      'Realistic 3D physical book renders, luxury foil-stamped editions, and advertising mockups that make your book feel immediate and coveted.',
    deepDescription:
      'Before a reader ever holds your book in their hands, they must be able to feel its physical presence on screen. We render meticulous 3D book mockups with authentic lighting, realistic spine curves, foil-stamped reflections, and paper textures that make your title look like a treasured collector’s item.',
    subOfferings: [
      {
        name: '3D Book Mockups',
        description:
          'Photorealistic renders of hardcovers, paperbacks, dust jackets, naked foil-stamped boards, and open interior spread layouts.',
      },
      {
        name: 'Promotional Book Displays',
        description:
          'Multi-device reading ecosystem displays pairing physical hardbacks alongside e-readers and tablet editions.',
      },
      {
        name: 'Digital Product Presentations',
        description:
          'Audiobook box set renders, collector slipcase displays, special edition edge-gilded volumes, and merchandise bundles.',
      },
      {
        name: 'Creative Book Advertising Concepts',
        description:
          'Editorial lifestyle flat lays featuring organic backgrounds, studio lighting, and context-specific aesthetic props.',
      },
    ],
    deliverables: [
      'Multi-Angle 3D Hardcover & Paperback Mockups (Front, 45°, Spine)',
      'High-Resolution Transparent PNG exports for effortless marketing use',
      'Device Ecosystem Presentation (Hardcover + Kindle + Smartphone)',
      'Social Flat Lay composition with custom surface textures',
    ],
    strategicImpact:
      'Creates instant physical desire for the book, signaling top-tier production quality before the customer makes their purchase.',
    clientProfiles: [
      'Self-published writers wanting traditional prestige appearance',
      'Authors offering special or deluxe Kickstarter editions',
      'Hybrid publishers seeking consistent brand presentation',
    ],
    sampleProjectRefId: 'whispers-of-the-antiquary',
  },
];
