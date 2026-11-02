import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Compass, Film, Layers, Sparkles } from 'lucide-react';
import { BookMockup3D } from './BookMockup3D.tsx';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData.ts';

export const Hero: React.FC = () => {
  const [selectedHeroBookIdx, setSelectedHeroBookIdx] = useState<number>(0);
  const heroBooks = PORTFOLIO_PROJECTS.slice(0, 3);
  const activeBook = heroBooks[selectedHeroBookIdx];

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Editorial Decorative Grid Hairlines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full border-x border-[#E8E2D7] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 divide-x divide-[#E8E2D7]/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-8 z-10 text-left">
            {/* Editorial Brand Kicker */}
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7A746B] font-sans font-medium">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Book Promotion & Creative Direction Studio</span>
            </div>

            {/* Hero Display Headline (text-wrap: balance) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-serif font-normal text-[#121212] leading-[1.08] tracking-tight [text-wrap:balance]">
              Every Book Has a Story.{' '}
              <span className="italic font-normal block sm:inline text-[#2B2824]">
                Give Yours a Stronger Presence.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#524D46] font-sans leading-relaxed max-w-2xl [text-wrap:balance]">
              We help authors transform their books into compelling visual experiences through
              thoughtful promotion, creative storytelling, and strategic marketing.
            </p>

            {/* Dual CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleScrollTo('#portfolio')}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#121212] text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-sans font-medium rounded-xs hover:bg-[#252525] transition-all shadow-md active:translate-y-0.5"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C5A880] transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('#contact')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent hover:bg-[#EFECE5] text-[#121212] text-xs uppercase tracking-[0.2em] font-sans font-medium rounded-xs border border-[#121212]/30 hover:border-[#121212] transition-all"
              >
                <span>Let’s Work Together</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7A746B] group-hover:text-black transition-colors" />
              </button>
            </div>

            {/* Author Quick Segment Selector */}
            <div className="pt-6 border-t border-[#E8E2D7] max-w-xl">
              <div className="flex items-center justify-between text-[11px] text-[#7A746B] font-sans mb-2.5">
                <span className="uppercase tracking-widest font-medium">Interactive Studio Mockup Preview</span>
                <span className="italic">Switch demo showcase:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {heroBooks.map((book, idx) => (
                  <button
                    key={book.id}
                    type="button"
                    onClick={() => setSelectedHeroBookIdx(idx)}
                    className={`px-3 py-1.5 text-xs font-serif transition-colors rounded-xs border ${
                      selectedHeroBookIdx === idx
                        ? 'bg-[#121212] text-[#F5F2EB] border-black shadow-xs'
                        : 'bg-white/80 text-[#524D46] border-[#E0D9CD] hover:border-black'
                    }`}
                  >
                    {book.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Book Mockup Composition */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Warm studio glow behind the book */}
            <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full bg-radial from-[#EFE8DD] via-[#FAF8F5]/50 to-transparent blur-2xl -z-10 pointer-events-none" />

            <div className="w-full bg-[#F3EFE7]/60 p-6 sm:p-8 rounded-sm border border-[#E6DFD3] shadow-xs">
              <div className="flex items-center justify-between text-xs text-[#7A746B] pb-3 mb-2 border-b border-[#E6DFD3]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span className="uppercase tracking-widest text-[10px] font-medium text-black">
                    3D Volume Composition
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-mono">
                  {activeBook.category}
                </span>
              </div>

              {/* 3D Component */}
              <BookMockup3D
                key={activeBook.id}
                title={activeBook.title}
                subtitle={activeBook.subtitle}
                author={activeBook.authorName}
                palette={activeBook.coverPalette}
                graphicStyle={activeBook.graphicStyle}
                interactive={true}
              />
            </div>
          </div>
        </div>

        {/* 4-Pillar Full-Width Row Below the Split */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E8E2D7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-sans font-semibold">
              01 · Vision
            </span>
            <h2 className="font-serif text-lg text-[#121212]">Book-Focused Creative Direction</h2>
            <p className="text-xs text-[#5E5951] leading-relaxed">
              Every design element is tailored to the book’s specific genre, voice, and thematic resonance.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-sans font-semibold">
              02 · Narrative
            </span>
            <h2 className="font-serif text-lg text-[#121212]">Story-Driven Promotion</h2>
            <p className="text-xs text-[#5E5951] leading-relaxed">
              We translate pages of prose into memorable hooks, cinematic trailers, and sharable moments.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-sans font-semibold">
              03 · Craft
            </span>
            <h2 className="font-serif text-lg text-[#121212]">Prestige Visual Presentation</h2>
            <p className="text-xs text-[#5E5951] leading-relaxed">
              Editorial typography, photorealistic 3D mockups, and retail banners that rival major publishing houses.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-sans font-semibold">
              04 · Impact
            </span>
            <h2 className="font-serif text-lg text-[#121212]">Strategic Audience Engagement</h2>
            <p className="text-xs text-[#5E5951] leading-relaxed">
              Actionable launch roadmaps engineered to reach high-intent readers where they naturally discover books.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
