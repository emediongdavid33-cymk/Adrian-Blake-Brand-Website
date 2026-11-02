import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/portfolioData.ts';
import { BookMockup3D } from './BookMockup3D.tsx';
import { TrailerPlayer } from './TrailerPlayer.tsx';
import {
  ArrowUpRight,
  Eye,
  Film,
  Layers,
  Sparkles,
  X,
  CheckCircle,
  FileText,
  Share2,
} from 'lucide-react';

interface PortfolioProps {
  initialSelectedProjectId?: string | null;
  onClearInitialSelection?: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  initialSelectedProjectId,
  onClearInitialSelection,
}) => {
  type CategoryFilter =
    | 'All Projects'
    | 'Book Trailers'
    | 'Book Mockups'
    | 'Promotional Graphics'
    | 'Banners'
    | 'Campaign Concepts';

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All Projects');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Sync if opened externally via Service card
  React.useEffect(() => {
    if (initialSelectedProjectId) {
      const found = PORTFOLIO_PROJECTS.find((p) => p.id === initialSelectedProjectId);
      if (found) {
        setActiveProject(found);
      }
      if (onClearInitialSelection) {
        onClearInitialSelection();
      }
    }
  }, [initialSelectedProjectId, onClearInitialSelection]);

  const categories: CategoryFilter[] = [
    'All Projects',
    'Book Trailers',
    'Book Mockups',
    'Promotional Graphics',
    'Banners',
    'Campaign Concepts',
  ];

  const filteredProjects =
    activeCategory === 'All Projects'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F5F2EB] border-t border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7A746B] font-sans font-medium">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Selected Works & Visual Directions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#121212] leading-tight tracking-tight [text-wrap:balance]">
              Curated Book Presentations
            </h2>
            <p className="text-sm text-[#5E5951] font-sans pt-1">
              Explore our studio showcases across trailers, physical mockups, promotional graphics,
              and strategic launch campaigns.
            </p>
          </div>

          {/* Studio Sample Notice */}
          <div className="bg-[#FAF8F5] px-4 py-2.5 rounded-xs border border-[#DFD8CC] text-xs text-[#7A746B] max-w-xs">
            <span className="font-semibold text-[#121212] block">Studio Showcase Notice:</span>
            <span>
              All works below represent official Adrian Blake demo concepts and creative direction
              templates.
            </span>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-[#E8E2D7]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-sans tracking-wide transition-all rounded-xs uppercase font-medium whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#121212] text-[#F5F2EB] shadow-xs'
                  : 'bg-[#FAF8F5] text-[#555047] hover:text-black border border-[#DFD8CC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-[#FAF8F5] rounded-sm border border-[#E3DCCE] hover:border-[#121212] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden"
            >
              {/* Visual Thumbnail Presentation */}
              <div
                className="relative h-64 sm:h-72 w-full flex items-center justify-center p-6 overflow-hidden transition-colors"
                style={{ backgroundColor: project.coverPalette.bg }}
              >
                {/* Subtle paper grain */}
                <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-radial from-white to-black pointer-events-none" />

                {/* Cover graphic preview */}
                <div className="relative w-36 sm:w-40 h-52 sm:h-56 shadow-2xl rounded-xs p-4 flex flex-col justify-between border border-white/10 group-hover:scale-105 transition-transform duration-500">
                  <div className="flex justify-between items-center text-[7px] tracking-widest uppercase opacity-60 text-white">
                    <span>Adrian Blake</span>
                    <span>{project.category}</span>
                  </div>

                  <div className="text-center my-auto">
                    <span className="text-[8px] uppercase tracking-wider block opacity-70 text-white">
                      {project.subtitle}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium tracking-wide">
                      {project.title}
                    </h3>
                  </div>

                  <div className="text-center text-[8px] tracking-wider uppercase font-sans text-white/80 border-t border-white/10 pt-1.5">
                    {project.authorName}
                  </div>
                </div>

                {/* Category & Demo Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-medium px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white/90 rounded-xs">
                    {project.category}
                  </span>
                </div>

                {/* Inspect Button on Hover */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold bg-white text-[#121212] px-3 py-1.5 rounded-xs shadow-md">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Text Information Container */}
              <div className="p-6 space-y-3 bg-[#FAF8F5]">
                {/* Metadata with separators (Zero-pill compliant) */}
                <div className="flex items-center gap-2 text-xs text-[#7A746B] font-sans">
                  <span>{project.genre}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#96764B]">Studio Showcase</span>
                </div>

                <h3 className="text-xl font-serif text-[#121212] group-hover:text-[#96764B] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#5E5951] font-sans leading-relaxed line-clamp-2">
                  {project.shortSummary}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-[#EAE4D8]">
                  <span className="font-serif italic text-[#7A746B]">By {project.authorName}</span>
                  <span className="font-sans text-[11px] font-semibold text-[#121212] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Case File →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Presentation Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs">
          <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FAF8F5] rounded-sm border border-[#DCD5C7] shadow-2xl p-6 sm:p-10 space-y-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Modal Button */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xs hover:bg-[#EAE4D8] text-[#121212] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 border-b border-[#E8E2D7] pb-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A746B] font-sans">
                <span className="uppercase tracking-[0.25em] font-semibold text-[#96764B]">
                  {activeProject.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.genre}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-[11px] text-[#7A746B]">
                  Adrian Blake Studio Concept Showcase
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-3xl sm:text-4xl font-serif text-[#121212]">
                  {activeProject.title}
                </h3>
                <span className="font-serif italic text-base text-[#5E5951]">
                  Author: {activeProject.authorName}
                </span>
              </div>

              {activeProject.subtitle && (
                <p className="text-sm text-[#7A746B] font-sans tracking-wide">
                  {activeProject.subtitle}
                </p>
              )}
            </div>

            {/* Visual Presentation Area: Dynamic depending on Category */}
            <div className="bg-[#EDE7DC] p-6 sm:p-8 rounded-sm border border-[#DFD8CC]">
              <div className="flex items-center justify-between text-xs text-[#7A746B] mb-4 pb-2 border-b border-[#DFD8CC]">
                <span className="uppercase tracking-widest font-semibold text-[#121212]">
                  Visual Presentation & Asset Prototype
                </span>
                <span className="font-mono text-[11px]">{activeProject.specs.resolution}</span>
              </div>

              {/* If Video: Render Trailer Player */}
              {activeProject.category === 'Book Trailers' && activeProject.trailerScript && (
                <TrailerPlayer
                  title={activeProject.title}
                  author={activeProject.authorName}
                  genre={activeProject.genre}
                  scenes={activeProject.trailerScript}
                />
              )}

              {/* If Mockup: Render 3D Mockup */}
              {activeProject.category === 'Book Mockups' && (
                <div className="flex justify-center py-6">
                  <BookMockup3D
                    title={activeProject.title}
                    subtitle={activeProject.subtitle}
                    author={activeProject.authorName}
                    palette={activeProject.coverPalette}
                    graphicStyle={activeProject.graphicStyle}
                    interactive={true}
                  />
                </div>
              )}

              {/* If Promotional Graphics / Quote Cards */}
              {activeProject.category === 'Promotional Graphics' && (
                <div className="space-y-6">
                  {activeProject.quoteExcerpt && (
                    <div className="max-w-2xl mx-auto p-8 sm:p-12 bg-white text-[#121212] rounded-xs shadow-md border border-[#E0D9CD] text-center space-y-4">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#96764B] font-sans block">
                        Editorial Quote Card Artwork
                      </span>
                      <blockquote className="font-serif text-2xl sm:text-3xl leading-relaxed italic text-[#1A1A1A]">
                        {activeProject.quoteExcerpt.quote}
                      </blockquote>
                      <div className="pt-2 text-xs font-sans text-[#7A746B]">
                        <span className="block font-medium text-[#121212]">
                          {activeProject.title}
                        </span>
                        <span>{activeProject.quoteExcerpt.speaker}</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center text-xs text-[#7A746B]">
                    Included formats: Instagram Square (1:1), Stories (9:16), Print-Ready Bookmark &
                    Speaking Flyer.
                  </div>
                </div>
              )}

              {/* If Banners */}
              {activeProject.category === 'Banners' && activeProject.bannerVariants && (
                <div className="space-y-4">
                  <span className="text-xs font-medium text-[#121212] block">
                    Amazon A+ & Storefront Module Suite:
                  </span>
                  <div className="space-y-3">
                    {activeProject.bannerVariants.map((ban, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white rounded-xs border border-[#DFD8CC] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <span className="font-serif text-sm font-semibold text-[#121212] block">
                            {ban.name}
                          </span>
                          <p className="text-xs text-[#5E5951]">{ban.description}</p>
                          <span className="text-[10px] text-[#7A746B] italic block">
                            Placement: {ban.placement}
                          </span>
                        </div>
                        <div className="shrink-0 font-mono text-xs bg-[#F5F2EB] px-3 py-1.5 rounded-xs border border-[#DFD8CC] text-[#121212]">
                          {ban.dimensions}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* If Campaign Concepts */}
              {activeProject.category === 'Campaign Concepts' && activeProject.campaignPhases && (
                <div className="space-y-4">
                  <span className="text-xs font-medium text-[#121212] block">
                    Strategic 3-Phase Rollout Architecture:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeProject.campaignPhases.map((phase, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white rounded-xs border border-[#DFD8CC] space-y-2"
                      >
                        <span className="text-[10px] tracking-wider uppercase font-semibold text-[#96764B] block font-sans">
                          {phase.timing}
                        </span>
                        <h4 className="font-serif text-sm font-semibold text-[#121212]">
                          {phase.phase}
                        </h4>
                        <p className="text-xs text-[#5E5951] leading-relaxed">{phase.focus}</p>
                        <div className="pt-2 border-t border-[#EFECE5]">
                          <span className="text-[10px] text-[#7A746B] uppercase font-semibold block mb-1">
                            Assets:
                          </span>
                          <ul className="text-[11px] text-[#333] space-y-0.5">
                            {phase.assets.map((a, i) => (
                              <li key={i}>· {a}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Strategic Notes Grid: Creative Concept & Promotional Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#121212] font-sans block">
                  Creative Concept & Aesthetic Rationale
                </span>
                <p className="text-[#4A453E] leading-relaxed font-sans text-xs sm:text-sm">
                  {activeProject.creativeConcept}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#121212] font-sans block">
                  Promotional Objective & Market Positioning
                </span>
                <p className="text-[#4A453E] leading-relaxed font-sans text-xs sm:text-sm">
                  {activeProject.promotionalObjective}
                </p>
              </div>
            </div>

            {/* Deliverables & Turnaround Details */}
            <div className="p-5 bg-[#F3EFE7] rounded-xs border border-[#E3DCCE] space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#121212] font-sans block">
                Packaged Production Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#38342E]">
                {activeProject.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#96764B] mt-0.5 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#7A746B] border-t border-[#DFD8CC]">
                <span>
                  <strong>Turnaround:</strong> {activeProject.specs.turnaround}
                </span>
                <span>
                  <strong>Format:</strong> {activeProject.specs.format}
                </span>
              </div>
            </div>

            {/* Bottom Modal CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E8E2D7]">
              <span className="text-xs text-[#7A746B] italic font-serif">
                Interested in a custom visual package tailored for your book?
              </span>

              <button
                type="button"
                onClick={() => {
                  setActiveProject(null);
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3 bg-[#121212] text-[#F5F2EB] text-xs uppercase tracking-widest font-sans font-medium rounded-xs hover:bg-[#252525] transition-colors"
              >
                Inquire For Your Book
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
