import React, { useState } from 'react';
import { MessageCircle, CalendarCheck, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, getRentalCabEnquiryMessage } from '../../utils/whatsapp';

interface RentalCabSectionProps {
  onSelectRentalCab: (rentalType: string, vehicleName?: string) => void;
}

export const RentalCabSection: React.FC<RentalCabSectionProps> = ({ onSelectRentalCab }) => {
  const [selectedRentalType, setSelectedRentalType] = useState('All India Tour Rental');

  const rentalTypes = [
    { id: 'All India Tour Rental', label: 'All India Tour', desc: 'Interstate holiday packages & tours' },
    { id: 'Group Tour Rental', label: 'Urbania & Traveller', desc: 'Large groups, wedding parties & pilgrimages' },
    { id: 'Outstation Rental', label: 'Outstation Trips', desc: 'One way & round trips across India' },
    { id: 'Airport Rental', label: 'Airport Transfers', desc: 'Surat, Mumbai & Ahmedabad airport runs' },
    { id: 'Local Rental', label: 'Local City Rental', desc: 'Point-to-point and full-day city rides' },
  ];

  const rentalCategories = [
    {
      title: "Luxury Group Van",
      vehicle: "Force Urbania",
      badge: "Taxi Passing • All India Permit",
      description: "Spacious luxury passenger van tailored for VIP group travel, family holidays, and wedding transportation.",
      image: "/images/vehicles/urbania/urbania-outdoor.jpg",
    },
    {
      title: "All India Group Travel",
      vehicle: "Tempo Traveller",
      badge: "Commercial Permit",
      description: "High-capacity Force Tempo Traveller for long-distance group tours, pilgrimages, and outstation trips.",
      image: "/images/vehicles/traveller/tempo-traveller.jpg",
    },
    {
      title: "Executive MPV",
      vehicle: "Toyota Innova Crysta",
      badge: "Executive Comfort",
      description: "Top-tier comfort and relaxed seating for family tours, executive trips, and outstation journeys.",
      image: "/images/vehicles/innova/innova-crysta-real.jpg",
    },
    {
      title: "Family Travel MPV",
      vehicle: "Toyota Rumion",
      badge: "Verified Fleet Car",
      description: "Rayyan Travels signature commercial MPV for family vacations, airport transfers, and outstation travel.",
      image: "/images/vehicles/rumion/rumion-front.jpg",
    },
    {
      title: "Compact SUV",
      vehicle: "SUV (Hyundai Venue & More)",
      badge: "SUV Comfort",
      description: "Modern, comfortable compact SUV for city commutes, weekend road trips, and airport drop-offs.",
      image: "/images/vehicles/suv/hyundai-venue.jpg",
    },
    {
      title: "Sedan Cab Service",
      vehicle: "Comfort Sedan",
      badge: "Economy & Style",
      description: "Air-conditioned smooth sedans for prompt airport pickups, business meetings, and intercity routes.",
      image: "/images/vehicles/sedan/sedan-cab.jpg",
    },
  ];

  const handleEnquireCategory = (vehicleName: string) => {
    onSelectRentalCab(selectedRentalType, vehicleName);
  };

  const whatsappUrl = buildWhatsAppUrl(
    getRentalCabEnquiryMessage({
      rentalType: selectedRentalType,
      vehicle: 'Force Urbania / Tempo Traveller / Innova Crysta / Rumion / SUV',
    }),
    BUSINESS_CONFIG.phones.primaryClean
  );

  return (
    <section id="rental-cabs" className="py-20 md:py-28 bg-white relative overflow-hidden border-y border-slate-200">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ALL INDIA CAB & RENTAL SERVICE"
          title="THE RIGHT CAB FOR YOUR NEXT ALL INDIA JOURNEY"
          description="Rayyan Travels & Cab Service offers commercial taxi passing rental cabs for All India tours, outstation trips, airport transfers, and local journeys. Choose from our luxury Force Urbania, Tempo Traveller, Toyota Innova Crysta, Toyota Rumion, SUVs (Hyundai Venue), and Sedans."
          align="center"
        />

        {/* Permit Assurance Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-brand-navy text-xs sm:text-sm font-bold shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-600" />
            <span>All Taxi Passing Vehicles • All India Commercial Permit • 24/7 Service</span>
          </div>
        </div>

        {/* Rental Types Tabs Selector */}
        <div className="mb-12">
          <div className="text-center mb-4">
            <span className="text-xs font-bold text-brand-muted uppercase tracking-wider">
              Select Your Travel Requirement:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {rentalTypes.map((type) => {
              const isSelected = selectedRentalType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedRentalType(type.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                    isSelected
                      ? 'bg-brand-navy text-brand-gold border-brand-navy shadow-md scale-105'
                      : 'bg-slate-50 text-brand-navy border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>

          <div className="text-center mt-3 text-xs text-brand-muted">
            Currently viewing options for: <strong className="text-brand-navy">{selectedRentalType}</strong>
          </div>
        </div>

        {/* 6 Visual Category Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rentalCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-brand-navy/90 text-brand-gold text-[11px] font-bold px-2.5 py-1 rounded-full border border-brand-gold/30">
                    {cat.badge}
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider block mb-1">
                    {cat.title}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy font-heading mb-2">
                    {cat.vehicle}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => handleEnquireCategory(cat.vehicle)}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="text-xs"
                >
                  Enquire {cat.vehicle}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with policy compliance and direct CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-brand-navy via-[#173a67] to-brand-navy p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-brand-gold/30">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider">
              <Shield className="w-4 h-4 text-brand-gold" />
              All Taxi Passing Vehicles • Pan-India Permit
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Contact Us For Rental Rates &amp; Availability
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Every trip is unique. Contact our team at <strong className="text-brand-gold">{BUSINESS_CONFIG.phones.primary}</strong> to discuss your journey route, vehicle requirement, and get tailored rental packages.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <Button
              variant="gold"
              size="lg"
              onClick={() => onSelectRentalCab(selectedRentalType)}
              leftIcon={<CalendarCheck className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              ENQUIRE ABOUT RENTAL CABS
            </Button>

            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl}
              external
              leftIcon={<MessageCircle className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
