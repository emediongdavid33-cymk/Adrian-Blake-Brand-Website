import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Why Adrian Blake', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D7] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Official Brand Logo & Monogram */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-3.5 group shrink-0"
          aria-label="Adrian Blake — Creative Studio Home"
        >
          {/* Logo with proper proportions preserved */}
          <div className="h-10 w-10 sm:h-12 sm:w-12 bg-white rounded-xs p-1 shadow-xs border border-[#E8E2D7] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src="/assets/aistudio/Adrian_Blake_logo_ab62667a.png"
              alt="Adrian Blake Monogram Logo"
              className="h-full w-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg sm:text-xl font-medium tracking-wider text-[#121212] leading-none uppercase">
              Adrian Blake
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#7A746B] uppercase font-sans font-medium mt-1">
              Book Promotion & Strategy
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide font-medium text-[#4A453E]">
          {navLinks.slice(1, 6).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-black transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Standout 'START A PROJECT' Primary Action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#121212] text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-sans font-medium rounded-xs hover:bg-[#252525] transition-all duration-300 shadow-sm active:translate-y-0.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="sm:hidden px-3 py-1.5 bg-[#121212] text-[#F5F2EB] text-[10px] uppercase tracking-widest font-sans rounded-xs"
          >
            Start
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#121212] hover:text-[#C5A880] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D7] px-6 py-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-serif">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base text-[#2E2B26] hover:text-[#C5A880] transition-colors py-1.5 border-b border-[#EFECE5]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#121212] text-[#F5F2EB] text-xs uppercase tracking-widest font-medium rounded-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
