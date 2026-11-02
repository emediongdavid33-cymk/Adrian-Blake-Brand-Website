/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { CreativeProcess } from './components/CreativeProcess.tsx';
import { WhyAdrianBlake } from './components/WhyAdrianBlake.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSelectProjectFromService = (projectId: string) => {
    setSelectedProjectId(projectId);
    const portfolioEl = document.querySelector('#portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121212] selection:bg-[#C5A880]/30 selection:text-black">
      {/* Intelligently Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Interactive 3D Book Presentation */}
        <Hero />

        {/* About Section: Where Stories Meet Strategy */}
        <About />

        {/* Services Section: 4 Core Disciplines */}
        <Services onSelectProject={handleSelectProjectFromService} />

        {/* Portfolio / Selected Work: Filterable Grid & Deep Case Modals */}
        <Portfolio
          initialSelectedProjectId={selectedProjectId}
          onClearInitialSelection={() => setSelectedProjectId(null)}
        />

        {/* Our Creative Process: 01 Discover · 02 Strategize · 03 Create · 04 Deliver */}
        <CreativeProcess />

        {/* Why Adrian Blake: Grounded Editorial Differentiators */}
        <WhyAdrianBlake />

        {/* Contact / Work With Us: Form & Direct Email */}
        <Contact />
      </main>

      {/* Editorial Studio Footer */}
      <Footer />
    </div>
  );
}
