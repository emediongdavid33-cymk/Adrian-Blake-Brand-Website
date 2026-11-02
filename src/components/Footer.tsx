import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Why Adrian Blake', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#121212] text-[#F5F2EB] pt-16 sm:pt-20 pb-12 border-t border-black/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Top Row: Brand & Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-white/10">
          {/* Brand Identity with Official Logo */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-white rounded-xs p-1 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/assets/aistudio/Adrian_Blake_logo_ab62667a.png"
                  alt="Adrian Blake Monogram Logo"
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wider text-[#F5F2EB] uppercase">
                  Adrian Blake
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-sans font-medium">
                  Book Promotion & Creative Direction Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-white/60 font-sans max-w-sm leading-relaxed">
              We help authors transform their books into compelling visual experiences through
              thoughtful promotion, creative storytelling, and strategic marketing.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-sans font-semibold block">
              Studio Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-white/70 font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Inquiries Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-sans font-semibold block">
              Direct Inquiries
            </span>
            <a
              href="mailto:clement.bookmakerter@gmail.com"
              className="font-serif text-base text-white/90 hover:text-[#C5A880] transition-colors block break-all"
            >
              clement.bookmakerter@gmail.com
            </a>
            <p className="text-[11px] text-white/50 font-sans leading-relaxed">
              Available for debut novels, backlist revivals, and publisher campaign direction.
            </p>
          </div>
        </div>

        {/* Bottom Row: Philosophy & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <div className="flex items-center gap-2">
            <span className="font-serif italic text-white/60">Where Stories Meet Strategy.</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} Adrian Blake. All rights reserved.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
