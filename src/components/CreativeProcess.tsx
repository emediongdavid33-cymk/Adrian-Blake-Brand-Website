import React, { useState } from 'react';
import { Compass, Lightbulb, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';

export const CreativeProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understanding the Book & The Reader',
      icon: <Compass className="w-5 h-5 text-[#C5A880]" />,
      summary:
        'Understand the book, its story, target audience, and promotional objectives.',
      details:
        'We begin by diving into your manuscript or synopsis. We examine the core themes, character motivations, comparative titles (comps), and author aspirations. We map out who your target readers are, where they hang out online, and what emotional triggers will inspire them to pick up the book.',
      deliverables: [
        'Manuscript theme & comp audit',
        'Target reader demographic profile',
        'Key narrative hook definitions',
        'Promotional objectives roadmap',
      ],
      duration: 'Week 1',
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      subtitle: 'Developing the Creative Direction',
      icon: <Lightbulb className="w-5 h-5 text-[#C5A880]" />,
      summary:
        'Develop a creative direction and promotional concept that fits the book.',
      details:
        'Before rendering a single pixel, we formulate a coherent visual language. We establish typography hierarchies, color palettes, motion pacing, and aesthetic motifs that honor your story. We prepare storyboard concepts for trailers, layout options for banners, and 3D mockup angles that reflect your genre.',
      deliverables: [
        'Creative direction moodboard & color grading',
        'Trailer storyboards & script drafts',
        'Multi-platform campaign asset architecture',
        'Author approval on core visual direction',
      ],
      duration: 'Week 2',
    },
    {
      num: '03',
      title: 'CREATE',
      subtitle: 'Crafting the Promotional Assets',
      icon: <PenTool className="w-5 h-5 text-[#C5A880]" />,
      summary:
        'Produce the promotional visuals, videos, mockups, or graphics.',
      details:
        'Our studio enters production. We render high-definition 3D hardcovers, produce cinematic book trailers with custom soundscapes, typeset editorial quote cards, and build retail Amazon A+ banner suites. Every asset is carefully calibrated to ensure pristine legibility and visual prestige.',
      deliverables: [
        '4K cinematic video edits & vertical cutdowns',
        'High-resolution 3D book mockups & transparent PNGs',
        'Formatted quote cards & social announcement suites',
        'Print-ready event banners and marketing collateral',
      ],
      duration: 'Weeks 2 – 3',
    },
    {
      num: '04',
      title: 'DELIVER',
      subtitle: 'Handover & Launch Readiness',
      icon: <CheckCircle2 className="w-5 h-5 text-[#C5A880]" />,
      summary:
        'Present the finished creative materials, ready for the author’s promotional use.',
      details:
        'We deliver organized, production-ready asset packages formatted for immediate deployment across web, retail storefronts, social platforms, and print. Alongside the files, we provide a structured deployment schedule guiding when and where to release each piece for maximum momentum.',
      deliverables: [
        'Master cloud download vault with organized folders',
        'Recommended posting & deployment calendar',
        'Format-specific guidelines for Amazon, Instagram & TikTok',
        'Ongoing creative support throughout your launch week',
      ],
      duration: 'Week 4',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7A746B] font-sans font-medium">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span>How We Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#121212] leading-tight tracking-tight [text-wrap:balance]">
            Our Creative Process
          </h2>

          <p className="text-sm sm:text-base text-[#524D46] font-sans leading-relaxed pt-1">
            How a project moves from initial manuscript immersion to a finished, high-impact
            promotional asset ready for readers.
          </p>
        </div>

        {/* 4-Step Numbered Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-6 sm:p-7 rounded-sm border transition-all duration-300 flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-[#F2ECE1] border-[#121212] shadow-sm'
                  : 'bg-white/80 border-[#E5DECF] hover:border-[#121212]/40'
              }`}
            >
              <div className="space-y-4">
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-3">
                  <span className="font-serif text-2xl font-semibold text-[#121212]">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-xs bg-[#FAF8F5] border border-[#DFD8CC] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#96764B] font-bold font-sans">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[#121212] font-medium tracking-wide">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-[#524D46] font-sans leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E8E2D7] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#7A746B] font-mono">{step.duration}</span>
                <span className={`text-[11px] font-semibold uppercase tracking-wider ${activeStep === idx ? 'text-[#121212]' : 'text-[#7A746B]'}`}>
                  {activeStep === idx ? 'Active View' : 'Explore →'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Active Step Detail Box */}
        <div className="mt-8 bg-[#F3EFE7] p-8 sm:p-10 rounded-sm border border-[#DFD8CC] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#96764B]">
                  Phase {steps[activeStep].num} Deep Dive
                </span>
                <span className="text-[#96764B]">·</span>
                <span className="text-xs text-[#7A746B] font-sans font-medium">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-serif text-[#121212]">
                {steps[activeStep].title} — In Detail
              </h4>

              <p className="text-sm text-[#4A453E] font-sans leading-relaxed">
                {steps[activeStep].details}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/90 p-6 rounded-xs border border-[#DFD8CC] space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#121212] block font-sans">
                Key Deliverables for {steps[activeStep].title}
              </span>
              <ul className="space-y-2 text-xs text-[#38342E]">
                {steps[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#96764B] font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
