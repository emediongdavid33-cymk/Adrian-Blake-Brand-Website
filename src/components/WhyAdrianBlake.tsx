import React from 'react';
import { ShieldCheck, BookMarked, Sparkles, Target, Compass, Feather } from 'lucide-react';

export const WhyAdrianBlake: React.FC = () => {
  const differentiators = [
    {
      title: 'Book-Focused Creative Direction',
      icon: <BookMarked className="w-5 h-5 text-[#C5A880]" />,
      description:
        'We specialize strictly in the literary and publishing sphere. We understand comps, tropes, reader demographics, and genre expectations from literary fiction to speculative worlds.',
    },
    {
      title: 'Story-Driven Promotional Concepts',
      icon: <Feather className="w-5 h-5 text-[#C5A880]" />,
      description:
        'We don’t treat books like commodities. Every promotional graphic and teaser trailer is built from the core emotional truth and narrative tension of your actual text.',
    },
    {
      title: 'Professional Visual Presentation',
      icon: <Sparkles className="w-5 h-5 text-[#C5A880]" />,
      description:
        'From high-resolution 3D foil mockups to Amazon A+ banner suites, our visual standard matches the polish and authority of legacy publishing houses.',
    },
    {
      title: 'Attention to Each Book’s Unique Identity',
      icon: <ShieldCheck className="w-5 h-5 text-[#C5A880]" />,
      description:
        'No pre-made templates or recycled layouts. Every color palette, typographic pairing, and motion pacing is crafted specifically for your title.',
    },
    {
      title: 'Strategic Approach to Audience Engagement',
      icon: <Target className="w-5 h-5 text-[#C5A880]" />,
      description:
        'Visual beauty backed by tactical utility: identifying reader micro-communities, optimizing retail storefronts, and pacing campaigns for sustained momentum.',
    },
    {
      title: 'Creative Solutions Tailored to Individual Projects',
      icon: <Compass className="w-5 h-5 text-[#C5A880]" />,
      description:
        'Whether you need a standalone cinematic book trailer or a full 90-day launch marketing roadmap, we shape the scope around your specific publication goals.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7A746B] font-sans font-medium">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span>Why Adrian Blake</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#121212] leading-tight tracking-tight [text-wrap:balance]">
            Thoughtful Strategy. Compelling Creativity. Stronger Book Presence.
          </h2>

          <p className="text-sm sm:text-base text-[#524D46] font-sans leading-relaxed pt-1">
            Built for authors, indie writers, and publishers who believe that presentation is not an
            afterthought—it is the gateway to being read.
          </p>
        </div>

        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-8 rounded-sm border border-[#E3DCCE] hover:border-[#121212] transition-all duration-300 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xs bg-[#F3EFE7] border border-[#DFD8CC] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="font-serif text-xl text-[#121212] font-medium leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#524D46] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE4D8] text-[10px] uppercase tracking-widest text-[#96764B] font-sans font-semibold">
                Studio Standard · 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Editorial Quote Banner */}
        <div className="mt-16 bg-[#EDE7DC] p-8 sm:p-10 rounded-sm border border-[#DFD8CC] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#96764B] font-semibold font-sans">
              Our Commitment
            </span>
            <p className="font-serif text-lg sm:text-xl text-[#121212] italic">
              “Every book deserves to find its people. Our work ensures your story is heard above the
              noise.”
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 bg-[#121212] text-[#F5F2EB] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#252525] transition-colors"
          >
            Discuss Your Title
          </a>
        </div>
      </div>
    </section>
  );
};
