import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, CalendarCheck, Shield } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getCallHref, scrollToSection } from '../../utils/contact';
import { Button } from '../ui/Button';

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
    { label: 'Home', href: 'hero' },
    { label: 'Our Services', href: 'services' },
    { label: 'Rental Cabs', href: 'rental-cabs' },
    { label: 'Our Fleet', href: 'fleet' },
    { label: 'Tour Packages', href: 'tour-packages' },
    { label: 'Airport Transfers', href: 'airport-transfers' },
    { label: 'About Us', href: 'about' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* Top Notification Bar for Service Coverage */}
      <div className="bg-brand-navy-dark text-white text-xs py-2 px-4 border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
            <span className="font-semibold text-brand-gold">NAVSARI &amp; SURAT</span>
            <span className="text-gray-300 hidden md:inline">• Local Cabs, Airport Transfers &amp; Outstation Travel Enquiries</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <span className="hidden lg:inline text-xs flex items-center gap-1 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-brand-gold" />
              Verified Fleet: Toyota Rumion, Innova Crysta, Urbania &amp; Kia
            </span>
            <a
              href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
              className="font-bold text-white hover:text-brand-gold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-gold" />
              {BUSINESS_CONFIG.phones.primary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-card border-b border-slate-200/80 py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Clean Wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1"
            aria-label="Rayyan Travels & Cab Service Homepage"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center font-extrabold text-xl shadow-md group-hover:bg-brand-blue transition-colors">
                R
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-extrabold text-brand-navy font-heading tracking-tight leading-none group-hover:text-brand-blue transition-colors">
                  {BUSINESS_CONFIG.wordmark.primary}
                </span>
                <span className="block text-[11px] font-bold text-brand-gold tracking-widest uppercase mt-0.5">
                  {BUSINESS_CONFIG.wordmark.secondary}
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  link.href === 'rental-cabs'
                    ? 'text-brand-blue font-bold hover:bg-brand-blue-light'
                    : 'text-brand-navy hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
              className="flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-blue px-3 py-2 rounded-xl transition-colors bg-slate-50 border border-slate-200"
            >
              <div className="w-7 h-7 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-brand-muted uppercase font-semibold">24/7 Enquiries</span>
                <span className="text-xs font-extrabold">{BUSINESS_CONFIG.phones.primary}</span>
              </div>
            </a>

            <Button
              variant="gold"
              size="sm"
              onClick={() => handleNavClick('booking-form')}
              leftIcon={<CalendarCheck className="w-4 h-4" />}
            >
              Book a Cab
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="gold"
              size="sm"
              onClick={() => handleNavClick('booking-form')}
              className="text-xs px-3 py-1.5"
            >
              Book
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-base font-semibold px-4 py-2.5 rounded-xl transition-colors ${
                    link.href === 'rental-cabs'
                      ? 'bg-brand-blue-light text-brand-blue font-bold'
                      : 'text-brand-navy hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 text-brand-navy font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                Call {BUSINESS_CONFIG.phones.primary}
              </a>

              <Button
                variant="gold"
                size="md"
                fullWidth
                onClick={() => handleNavClick('booking-form')}
                leftIcon={<CalendarCheck className="w-4 h-4" />}
              >
                Book a Cab Now
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
