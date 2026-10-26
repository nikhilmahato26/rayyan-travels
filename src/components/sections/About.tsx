import React from 'react';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../utils/contact';
import { BUSINESS_CONFIG } from '../../config/business';
import { MapPin, Phone, Car, CheckCircle2, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Side showcasing genuine fleet authenticity */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-slate-200 bg-white p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/images/vehicles/urbania/urbania-outdoor.jpg"
                  alt="Rayyan Travels Force Urbania Commercial All India Permit Fleet"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-navy/90 text-brand-gold text-xs font-bold px-3 py-1.5 rounded-full border border-brand-gold/30 flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  All India Commercial Fleet
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl mt-3 space-y-2 border border-slate-100 text-xs">
                <div className="flex items-start gap-2 text-brand-navy font-semibold">
                  <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span>{BUSINESS_CONFIG.location.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-muted">
                  <Car className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Force Urbania, Tempo Traveller, Innova Crysta, Rumion, SUV &amp; Sedan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue-light text-brand-blue text-xs font-bold uppercase tracking-wider border border-brand-blue/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              All India Tour &amp; Cab Service
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight leading-tight">
              YOUR TRUSTED ALL INDIA TOUR &amp; CAB PARTNER
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Rayyan Travels &amp; Cab Service provides dependable All India Tour and cab services with complete commercial taxi passing vehicles. 
              Serving customers with airport transfers, local city cab services, rental cabs, outstation trips, sightseeing, holiday tour packages, corporate rides, and group transportation across India.
            </p>

            <p className="text-sm text-brand-muted leading-relaxed">
              Our comprehensive commercial fleet includes <strong className="text-brand-navy">Force Urbania</strong>, <strong className="text-brand-navy">Force Tempo Traveller</strong>, <strong className="text-brand-navy">Toyota Innova Crysta</strong>, <strong className="text-brand-navy">Toyota Rumion</strong>, <strong className="text-brand-navy">SUVs (Hyundai Venue &amp; more)</strong>, and <strong className="text-brand-navy">Comfort Sedans</strong>, all equipped with valid commercial permits for pan-India travel.
            </p>

            {/* Service & Operational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-navy">All Taxi Passing Commercial Fleet</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-navy">All India Permit Interstate Tours</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-navy">Urbania &amp; Tempo Traveller Specialists</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-navy">Helpline: +91 8469429773 / 7048241603</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('contact')}
                leftIcon={<Phone className="w-4 h-4" />}
              >
                CONTACT OUR TEAM
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => scrollToSection('booking-form')}
              >
                Request a Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
