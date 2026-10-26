import React from 'react';
import { CalendarCheck, Car, Plane, MapPin, Users, Shield, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { scrollToSection, getCallHref } from '../../utils/contact';
import { BUSINESS_CONFIG } from '../../config/business';

export const Hero: React.FC = () => {
  const highlights = [
    { title: "All India Tour Service", icon: MapPin, isFeatured: true },
    { title: "Urbania & Tempo Traveller", icon: Users, isFeatured: true },
    { title: "Innova Crysta, Rumion & SUVs", icon: Car },
    { title: "Airport Pickup & Drop", icon: Plane },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#0a182c] via-[#102747] to-[#14325a] text-white pt-10 pb-20 md:pt-16 md:pb-28">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E7B44A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              ALL INDIA TOUR &amp; CAB SERVICE • COMMERCIAL PERMIT
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-white">
              YOUR JOURNEY, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-white">
                OUR PRIORITY
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From All India holiday tours and outstation journeys to airport transfers and group travel, 
              <strong className="text-white font-semibold"> Rayyan Travels &amp; Cab Service</strong> provides all taxi passing vehicles with All India commercial permits. 
              Choose from Force Urbania, Tempo Traveller, Toyota Innova Crysta, Toyota Rumion, SUVs (Hyundai Venue), and comfortable Sedans.
            </p>

            {/* Permit Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs sm:text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>All Taxi Passing Vehicles • All India Commercial Permit</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="gold"
                size="lg"
                onClick={() => scrollToSection('booking-form')}
                leftIcon={<CalendarCheck className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto text-base"
              >
                BOOK ALL INDIA CAB
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('fleet')}
                leftIcon={<Car className="w-5 h-5" />}
                className="w-full sm:w-auto text-white border-white/50 hover:bg-white hover:text-brand-navy"
              >
                EXPLORE OUR FLEET
              </Button>

              <a
                href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-brand-gold py-2 px-3 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Call {BUSINESS_CONFIG.phones.primary}</span>
              </a>
            </div>

            {/* Key Service Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl backdrop-blur-md border transition-all ${
                      item.isFeatured
                        ? 'bg-brand-gold/15 border-brand-gold/40 text-brand-gold'
                        : 'bg-white/5 border-white/10 text-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-1.5 opacity-90" />
                    <span className="text-xs font-semibold block leading-tight">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Visual Feature showcasing real fleet vehicle */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-blue to-yellow-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-3 sm:p-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-navy-dark">
                  <img
                    src="/images/vehicles/rumion/rumion-front.jpg"
                    alt="Rayyan Travels Toyota Rumion Commercial Fleet Car"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md text-brand-gold text-xs font-bold px-3 py-1.5 rounded-full border border-brand-gold/30 flex items-center gap-1.5 shadow-md">
                    <Shield className="w-3.5 h-3.5 text-brand-gold" />
                    Toyota Rumion • Commercial Fleet
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 rounded-xl backdrop-blur-[2px]">
                    <div className="text-white font-bold text-base sm:text-lg font-heading">
                      Toyota Rumion &amp; All India Fleet
                    </div>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Available for Pan-India tours, family travel, outstation trips &amp; airport transfers.
                    </p>
                  </div>
                </div>

                {/* Sub-features ticker */}
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                    <span className="block text-brand-gold font-extrabold text-sm sm:text-base">All India</span>
                    <span className="block text-[10px] text-gray-300 uppercase tracking-wide">Tour Permit</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                    <span className="block text-brand-gold font-extrabold text-sm sm:text-base">Taxi Passing</span>
                    <span className="block text-[10px] text-gray-300 uppercase tracking-wide">Commercial</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                    <span className="block text-brand-gold font-extrabold text-sm sm:text-base">24/7 Service</span>
                    <span className="block text-[10px] text-gray-300 uppercase tracking-wide">Pan India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
