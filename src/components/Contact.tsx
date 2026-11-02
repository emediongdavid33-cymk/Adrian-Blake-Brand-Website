import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Send, Copy, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const officialEmail = 'clement.bookmakerter@gmail.com';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [service, setService] = useState('Book Promotional Videos');
  const [projectDescription, setProjectDescription] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
    inquiryId?: string;
  }>({ type: null, text: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const servicesList = [
    'Book Promotional Videos',
    'Book Marketing Strategy',
    'Book Banners and Promotional Graphics',
    'Book Mockups and Visual Presentation',
    'Comprehensive Launch Package (All Services)',
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(officialEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage({ type: null, text: '' });

    // Client Validation
    if (!fullName.trim() || fullName.trim().length < 2) {
      setStatusMessage({
        type: 'error',
        text: 'Please enter your full name (at least 2 characters).',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setStatusMessage({
        type: 'error',
        text: 'Please provide a valid email address so we can reply to you.',
      });
      return;
    }

    if (!bookTitle.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please provide the title of your book or current working title.',
      });
      return;
    }

    if (!projectDescription.trim() || projectDescription.trim().length < 10) {
      setStatusMessage({
        type: 'error',
        text: 'Please provide a brief description of your project (at least 10 characters).',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          bookTitle: bookTitle.trim(),
          service,
          projectDescription: projectDescription.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: 'success',
          text: data.message || 'Your inquiry has been successfully registered.',
          inquiryId: data.inquiryId,
        });
        // Clear inputs upon confirmed receipt
        setFullName('');
        setEmail('');
        setBookTitle('');
        setProjectDescription('');
      } else {
        setStatusMessage({
          type: 'error',
          text: data.error || 'Failed to submit inquiry. Please try again or email directly.',
        });
      }
    } catch (err) {
      // Network error or local dev fallback
      setStatusMessage({
        type: 'error',
        text: `Network transmission error. Please reach out directly to ${officialEmail}.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Pre-filled mailto fallback
  const mailtoUrl = `mailto:${officialEmail}?subject=${encodeURIComponent(
    `Book Promotion Inquiry: ${bookTitle || 'New Book Project'}`
  )}&body=${encodeURIComponent(
    `Full Name: ${fullName}\nEmail: ${email}\nBook Title: ${bookTitle}\nService Interested In: ${service}\n\nProject Summary:\n${projectDescription}\n`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline, Official Email & Studio Ethos */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7A746B] font-sans font-medium">
                <span className="w-6 h-[1px] bg-[#C5A880]" />
                <span>Work With Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#121212] leading-tight tracking-tight [text-wrap:balance]">
                Let’s Give Your Book the Attention It Deserves.
              </h2>

              <p className="text-sm sm:text-base text-[#524D46] font-sans leading-relaxed pt-1">
                Have a book that deserves a stronger visual presence? Let’s discuss how creative
                promotion and thoughtful strategy can help bring your book closer to its intended
                audience.
              </p>
            </div>

            {/* Official Contact Email Highlight Card */}
            <div className="p-6 bg-[#F3EFE7] rounded-sm border border-[#DFD8CC] space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#96764B] font-semibold font-sans block">
                Official Studio Email
              </span>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${officialEmail}`}
                  className="font-serif text-lg sm:text-xl text-[#121212] hover:text-[#96764B] transition-colors break-all"
                >
                  {officialEmail}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xs bg-white border border-[#DFD8CC] hover:bg-[#FAF8F5] text-[#121212] transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <span className="text-[10px] font-sans font-semibold text-emerald-700">Copied</span>
                  ) : (
                    <Copy className="w-4 h-4 text-[#7A746B]" />
                  )}
                </button>
              </div>

              <p className="text-xs text-[#7A746B] font-sans">
                Direct inquiries receive a response within 24 to 48 business hours.
              </p>
            </div>

            {/* Direct Email Link Button */}
            <div>
              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-semibold text-[#121212] hover:text-[#96764B] transition-colors underline underline-offset-4"
              >
                <span>Launch Direct Email Client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Brand Assurance */}
            <div className="pt-6 border-t border-[#E8E2D7] text-xs text-[#7A746B] space-y-1">
              <p>
                <strong>Confidentiality Assured:</strong> Manuscripts, synopses, and pre-release
                materials are kept strictly confidential.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-sm border border-[#E3DCCE] shadow-xs">
              <div className="border-b border-[#E8E2D7] pb-4 mb-6">
                <h3 className="font-serif text-2xl text-[#121212]">Project Inquiry Form</h3>
                <p className="text-xs text-[#7A746B] font-sans mt-1">
                  Share details regarding your upcoming release or current promotional needs.
                </p>
              </div>

              {/* Status Banner */}
              {statusMessage.type === 'success' && (
                <div className="mb-6 p-5 bg-emerald-50 border border-emerald-200 rounded-xs text-xs text-emerald-900 space-y-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Inquiry Registered Successfully</span>
                  </div>
                  <p>{statusMessage.text}</p>
                  {statusMessage.inquiryId && (
                    <div className="text-[11px] font-mono text-emerald-800 pt-1 border-t border-emerald-200">
                      Reference ID: <strong>{statusMessage.inquiryId}</strong>
                    </div>
                  )}
                </div>
              )}

              {statusMessage.type === 'error' && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xs text-xs text-rose-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="text-xs uppercase tracking-wider font-semibold text-[#121212] font-sans block"
                    >
                      Full Name <span className="text-[#96764B]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Arthur Conan Doyle"
                      className="w-full px-4 py-2.5 bg-white rounded-xs border border-[#DFD8CC] focus:border-[#121212] focus:ring-1 focus:ring-[#121212] outline-none text-xs text-[#121212] font-sans transition-colors placeholder:text-[#A89E90]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-wider font-semibold text-[#121212] font-sans block"
                    >
                      Email Address <span className="text-[#96764B]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="author@example.com"
                      className="w-full px-4 py-2.5 bg-white rounded-xs border border-[#DFD8CC] focus:border-[#121212] focus:ring-1 focus:ring-[#121212] outline-none text-xs text-[#121212] font-sans transition-colors placeholder:text-[#A89E90]"
                    />
                  </div>
                </div>

                {/* Book Title & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="bookTitle"
                      className="text-xs uppercase tracking-wider font-semibold text-[#121212] font-sans block"
                    >
                      Book Title <span className="text-[#96764B]">*</span>
                    </label>
                    <input
                      id="bookTitle"
                      type="text"
                      required
                      value={bookTitle}
                      onChange={(e) => setBookTitle(e.target.value)}
                      placeholder="Title or Working Title"
                      className="w-full px-4 py-2.5 bg-white rounded-xs border border-[#DFD8CC] focus:border-[#121212] focus:ring-1 focus:ring-[#121212] outline-none text-xs text-[#121212] font-sans transition-colors placeholder:text-[#A89E90]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="service"
                      className="text-xs uppercase tracking-wider font-semibold text-[#121212] font-sans block"
                    >
                      Service Interested In <span className="text-[#96764B]">*</span>
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white rounded-xs border border-[#DFD8CC] focus:border-[#121212] focus:ring-1 focus:ring-[#121212] outline-none text-xs text-[#121212] font-sans transition-colors"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="projectDescription"
                    className="text-xs uppercase tracking-wider font-semibold text-[#121212] font-sans block"
                  >
                    Project Description <span className="text-[#96764B]">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    required
                    rows={5}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Tell us about your book: genre, release timeline, promotional objectives, and what assets you envision..."
                    className="w-full px-4 py-2.5 bg-white rounded-xs border border-[#DFD8CC] focus:border-[#121212] focus:ring-1 focus:ring-[#121212] outline-none text-xs text-[#121212] font-sans transition-colors placeholder:text-[#A89E90] leading-relaxed resize-y"
                  />
                </div>

                {/* SEND INQUIRY Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#121212] hover:bg-[#252525] text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-sans font-medium rounded-xs transition-all shadow-md active:translate-y-0.5 disabled:opacity-50 inline-flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
