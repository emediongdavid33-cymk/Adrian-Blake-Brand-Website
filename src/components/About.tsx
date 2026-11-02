import React from 'react';
import { BookOpen, Compass, Eye, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F2EB] border-y border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7A746B] font-sans font-medium">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span>About Adrian Blake</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#121212] leading-tight tracking-tight [text-wrap:balance]">
            Where Stories Meet Strategy.
          </h2>

          <p className="text-base sm:text-lg text-[#524D46] font-sans leading-relaxed pt-2">
            Adrian Blake works at the intersection of storytelling, creative design, and book
            promotion.
          </p>
        </div>

        {/* Editorial 2-Column Split: Philosophy & Visual Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Philosophy Prose */}
          <div className="lg:col-span-7 space-y-6 text-[#38342E] leading-relaxed font-sans text-sm sm:text-base">
            <p className="font-serif text-xl sm:text-2xl text-[#121212] leading-snug italic">
              “A great book deserves more than simply being published. It deserves thoughtful
              positioning, compelling presentation, and promotional materials that help it connect
              with its intended audience.”
            </p>

            <p>
              In modern publishing, thousands of remarkable titles launch into the world each week.
              Even extraordinary writing can remain undiscovered if its visual presentation does
              not command attention or if its promotional strategy fails to articulate why it
              matters to a reader.
            </p>

            <p>
              Adrian Blake was founded on a singular conviction: that book promotion should be as
              carefully crafted as the manuscript itself. We do not apply generic templates or
              cookie-cutter marketing tactics. Instead, we read between the lines, dissect the core
              emotional hook of the book, and build custom visual assets that honor the author’s
              literary universe.
            </p>

            <p>
              Whether partnering with independent novelists, debut fiction writers, nonfiction
              thinkers, or boutique publishers, our objective remains constant: to elevate your
              book’s presence so readers stop scrolling, take notice, and immerse themselves in
              your story.
            </p>

            {/* Studio Identity Card */}
            <div className="pt-6 border-t border-[#DFD8CC] flex items-center gap-5">
              <div className="w-14 h-14 bg-white p-2 rounded-xs border border-[#DFD8CC] shadow-xs shrink-0 flex items-center justify-center">
                <img
                  src="/assets/aistudio/Adrian_Blake_logo_ab62667a.png"
                  alt="Adrian Blake Monogram"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <span className="font-serif text-base font-medium text-[#121212] block">
                  Adrian Blake Studio
                </span>
                <span className="text-xs text-[#7A746B] font-sans">
                  Creative Direction & Strategic Book Marketing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Architecture Vignette */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF8F5] p-7 sm:p-9 rounded-sm border border-[#E3DCCE] shadow-xs space-y-6">
              <div className="border-b border-[#E8E2D7] pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold block font-sans">
                  Our Guiding Standard
                </span>
                <h3 className="font-serif text-xl text-[#121212] mt-1">
                  The Three Pillars of Book Presence
                </h3>
              </div>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-serif font-medium text-[#121212]">
                    <span className="text-[#C5A880] font-sans font-bold">I.</span>
                    <span>Narrative Fidelity</span>
                  </div>
                  <p className="text-xs text-[#635E55] leading-relaxed pl-4 font-sans">
                    Every trailer, quote card, and banner reflects the author’s authentic prose,
                    preserving the integrity of the world they spent months or years creating.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-serif font-medium text-[#121212]">
                    <span className="text-[#C5A880] font-sans font-bold">II.</span>
                    <span>Editorial Craftsmanship</span>
                  </div>
                  <p className="text-xs text-[#635E55] leading-relaxed pl-4 font-sans">
                    We adhere to the aesthetic rigor of high-end publishing houses—balanced typography,
                    intentional color grading, and tactile 3D finishes.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-serif font-medium text-[#121212]">
                    <span className="text-[#C5A880] font-sans font-bold">III.</span>
                    <span>Targeted Strategic Reach</span>
                  </div>
                  <p className="text-xs text-[#635E55] leading-relaxed pl-4 font-sans">
                    Visuals are structured not just for beauty, but for commercial utility: stopping
                    scrollers, sparking reader word-of-mouth, and converting casual interest into
                    book sales.
                  </p>
                </div>
              </div>

              {/* Quiet Note on Authentic Collaboration */}
              <div className="p-4 bg-[#F2EDE3] rounded-xs border border-[#E5DECF] text-xs text-[#524D46]">
                <p className="italic font-serif leading-relaxed">
                  “We treat every manuscript as an original work of art. No recycled layouts. No
                  algorithmic shortcuts. Pure, intentional creative direction.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
