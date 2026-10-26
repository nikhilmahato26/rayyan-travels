import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getCallHref, getEmailHref, getGoogleMapsHref, scrollToSection } from '../../utils/contact';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'All India Tours', id: 'tour-packages' },
    { label: 'Rental Cabs', id: 'rental-cabs' },
    { label: 'Our Fleet', id: 'fleet' },
    { label: 'Services', id: 'services' },
    { label: 'Airport Transfers', id: 'airport-transfers' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const fleetList = [
    { label: 'Force Urbania (Luxury Van)', id: 'fleet' },
    { label: 'Tempo Traveller (All India Permit)', id: 'fleet' },
    { label: 'Toyota Innova Crysta', id: 'fleet' },
    { label: 'Toyota Rumion MPV', id: 'fleet' },
    { label: 'SUV (Hyundai Venue & More)', id: 'fleet' },
    { label: 'Comfort Sedan Cabs', id: 'fleet' },
    { label: 'Kia Vehicle Options', id: 'fleet' },
    { label: 'All Taxi Passing Vehicles', id: 'fleet' },
  ];

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-28 md:pb-16 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Overview */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-brand-gold text-brand-navy flex items-center justify-center font-black text-2xl shadow-md">
                R
              </div>
              <div>
                <span className="block text-xl font-black font-heading tracking-tight leading-tight text-white">
                  {BUSINESS_CONFIG.wordmark.primary}
                </span>
                <span className="block text-[10px] font-bold text-brand-gold tracking-widest uppercase">
                  ALL INDIA CAB &amp; TOUR SERVICE
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your dependable All India Tour and cab service partner. Offering complete taxi passing vehicles with All India commercial permits — from Force Urbania and Tempo Traveller to Innova Crysta, Rumion, SUVs, and Sedans.
            </p>

            <div className="p-3.5 rounded-xl bg-brand-navy-dark/70 border border-brand-gold/30 text-xs text-gray-200 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>{BUSINESS_CONFIG.permitBadge}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-brand-gold font-heading uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-brand-gold rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-gold/60">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fleet & Vehicles */}
          <div>
            <h4 className="text-base font-bold text-brand-gold font-heading uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-brand-gold rounded-full" />
              Our Vehicle Fleet
            </h4>
            <ul className="space-y-2.5">
              {fleetList.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-gold/60">›</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-base font-bold text-brand-gold font-heading uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-brand-gold rounded-full" />
              Helpline &amp; Location
            </h4>

            <div className="space-y-3.5 text-sm">
              {/* Phone Numbers (Only 2 numbers) */}
              <div>
                <span className="text-xs text-gray-400 block mb-1.5">Direct Booking Helplines:</span>
                <div className="space-y-2">
                  <a
                    href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
                    className="text-white hover:text-brand-gold font-bold flex items-center gap-2 transition-colors text-base"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>{BUSINESS_CONFIG.phones.primary} <span className="text-xs text-brand-gold font-normal">(Main)</span></span>
                  </a>
                  <a
                    href={getCallHref(BUSINESS_CONFIG.phones.secondaryClean)}
                    className="text-gray-300 hover:text-brand-gold font-semibold flex items-center gap-2 transition-colors text-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    <span>{BUSINESS_CONFIG.phones.secondary} <span className="text-xs text-gray-400 font-normal">(Secondary)</span></span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="pt-1">
                <span className="text-xs text-gray-400 block mb-1">Email Enquiries:</span>
                <a
                  href={getEmailHref()}
                  className="text-gray-300 hover:text-brand-gold flex items-center gap-2 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  {BUSINESS_CONFIG.email}
                </a>
              </div>

              {/* Address */}
              <div className="pt-1">
                <span className="text-xs text-gray-400 block mb-1">Office Address:</span>
                <div className="flex items-start gap-2 text-gray-300 text-xs leading-relaxed">
                  <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>{BUSINESS_CONFIG.location.fullAddress}</span>
                </div>
                <a
                  href={getGoogleMapsHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline mt-2 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with CTA Banner */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Rayyan Travels &amp; Cab Service. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('booking-form')}
              className="text-brand-gold hover:text-white font-semibold flex items-center gap-1 transition-colors"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              Book Online Enquiry
            </button>
            <span>•</span>
            <span>All India Tour &amp; Commercial Taxi Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
