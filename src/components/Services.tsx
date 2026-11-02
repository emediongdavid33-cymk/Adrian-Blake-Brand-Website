import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData.ts';
import { ArrowRight, Check, Film, Layers, Palette, Target, X } from 'lucide-react';

interface ServicesProps {
  onSelectProject?: (projectId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectProject }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'book-promotional-videos':
        return <Film className="w-5 h-5 text-[#C5A880]" />;
      case 'book-marketing-strategy':
        return <Target className="w-5 h-5 text-[#C5A880]" />;
      case 'book-banners-and-promotional-graphics':
        return <Palette className="w-5 h-5 text-[#C5A880]" />;
      case 'book-mockups-and-visual-presentation':
      default:
        return <Layers className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  const handleOpenProject = (projectId: string) => {
    setSelectedService(null);
    if (onSelectProject) {
      onSelectProject(projectId);
    } else {
      const el = document.querySelector('#portfolio');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8E2D7]">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7A746B] font-sans font-medium">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Studio Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#121212] leading-tight tracking-tight [text-wrap:balance]">
              Comprehensive Book Promotion & Visual Services
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#5E5951] font-sans leading-relaxed">
            From cinematic trailers to retail graphics and launch roadmaps, we build the visual and
            strategic ecosystem authors need to thrive.
          </p>
        </div>

        {/* 4 Dedicated Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FAF8F5] p-8 sm:p-10 rounded-sm border border-[#E3DCCE] hover:border-[#121212] transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between border-b border-[#EAE4D8] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xs bg-[#F3EFE7] flex items-center justify-center border border-[#DFD8CC]">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="font-serif text-2xl text-[#121212] font-medium">
                      {service.title}
                    </span>
                  </div>
                  <span className="font-sans text-xs tracking-[0.2em] font-semibold text-[#A89E90]">
                    {service.number}
                  </span>
                </div>

                {/* Persuasive Tagline */}
                <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-sans font-semibold">
                  {service.tagline}
                </p>

                {/* Summary */}
                <p className="text-sm text-[#524D46] font-sans leading-relaxed">
                  {service.summary}
                </p>

                {/* Sub-Offerings List */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#7A746B] font-semibold block font-sans">
                    Core Specializations:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2E2B26]">
                    {service.subOfferings.map((sub, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C5A880] mt-0.5">·</span>
                        <span className="font-medium">{sub.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-8 mt-6 border-t border-[#EAE4D8] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-sans font-semibold text-[#121212] hover:text-[#C5A880] transition-colors"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenProject(service.sampleProjectRefId)}
                  className="text-[11px] text-[#7A746B] hover:text-black underline underline-offset-4 font-serif italic"
                >
                  View Showcase Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] rounded-sm border border-[#DCD5C7] shadow-2xl p-6 sm:p-10 space-y-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-xs hover:bg-[#EAE4D8] text-[#121212] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 border-b border-[#E8E2D7] pb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-sans font-semibold">
                <span>{selectedService.number}</span>
                <span>/</span>
                <span>Studio Service Line</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#121212]">
                {selectedService.title}
              </h3>
              <p className="text-sm text-[#7A746B] font-sans">{selectedService.tagline}</p>
            </div>

            {/* Deep Description */}
            <div className="space-y-4 text-sm text-[#4A453E] font-sans leading-relaxed">
              <p>{selectedService.deepDescription}</p>
            </div>

            {/* Sub-Offerings Detailed Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-[#121212] font-sans font-bold">
                Detailed Scope of Offerings
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.subOfferings.map((sub, idx) => (
                  <div key={idx} className="p-4 bg-[#F3EFE7] rounded-xs border border-[#E3DCCE]">
                    <span className="font-serif text-sm font-semibold text-[#121212] block mb-1">
                      {sub.name}
                    </span>
                    <p className="text-xs text-[#5E5951] leading-relaxed">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-3 bg-[#F5F2EB] p-5 rounded-xs border border-[#E3DCCE]">
              <h4 className="text-xs uppercase tracking-wider text-[#121212] font-sans font-bold">
                Standard Project Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#38342E]">
                {selectedService.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A880] mt-0.5 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Impact & Ideal For */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#E8E2D7] text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7A746B] block font-semibold mb-1">
                  Strategic Return for Authors
                </span>
                <p className="text-[#38342E] leading-relaxed">{selectedService.strategicImpact}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7A746B] block font-semibold mb-1">
                  Ideal Profile
                </span>
                <ul className="text-[#38342E] space-y-1">
                  {selectedService.clientProfiles.map((cp, idx) => (
                    <li key={idx}>· {cp}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8E2D7]">
              <button
                type="button"
                onClick={() => handleOpenProject(selectedService.sampleProjectRefId)}
                className="text-xs tracking-wider uppercase font-semibold text-[#121212] hover:text-[#C5A880] transition-colors"
              >
                Inspect Visual Project Example →
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2.5 bg-[#121212] text-[#F5F2EB] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#252525] transition-colors"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
