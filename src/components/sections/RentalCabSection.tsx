import React, { useState } from 'react';
import { MessageCircle, CalendarCheck, ArrowRight, Shield } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, getRentalCabEnquiryMessage } from '../../utils/whatsapp';

interface RentalCabSectionProps {
  onSelectRentalCab: (rentalType: string, vehicleName?: string) => void;
}

export const RentalCabSection: React.FC<RentalCabSectionProps> = ({ onSelectRentalCab }) => {
  const [selectedRentalType, setSelectedRentalType] = useState('Local Rental');

  const rentalTypes = [
    { id: 'Local Rental', label: 'Local Rental', desc: 'Navsari & Surat city rides and local travel' },
    { id: 'Outstation Rental', label: 'Outstation Rental', desc: 'Intercity and round trips across Gujarat' },
    { id: 'Airport Rental', label: 'Airport Rental', desc: 'Dedicated cabs for airport transfers' },
    { id: 'Event Rental', label: 'Event Rental', desc: 'Weddings, functions & social gatherings' },
    { id: 'Group Rental', label: 'Group Rental', desc: 'Spacious transport for family and group tours' },
  ];

  const rentalCategories = [
    {
      title: "Family & Everyday Travel",
      vehicle: "Toyota Rumion",
      badge: "Verified Fleet Car",
      description: "An ideal choice for family journeys, city commutes, and everyday rental travel.",
      image: "/images/vehicles/rumion/rumion-front.jpg",
    },
    {
      title: "Premium Travel",
      vehicle: "Toyota Innova Crysta",
      badge: "Executive Comfort",
      description: "Superior comfort and relaxed seating for executive trips and outstation travel.",
      image: "/images/vehicles/innova-crysta.jpg",
    },
    {
      title: "Group Transportation",
      vehicle: "Force Urbania",
      badge: "Group Specialist",
      description: "High-roof spacious travel van tailored for large groups, wedding parties, and group tours.",
      image: "/images/vehicles/force-urbania.jpg",
    },
    {
      title: "Kia Vehicles",
      vehicle: "Kia Vehicle Options",
      badge: "Modern Style",
      description: "Modern, refined ride options. Contact our team to confirm current model availability.",
      image: "/images/vehicles/kia-vehicle.jpg",
    },
  ];

  const handleEnquireCategory = (vehicleName: string) => {
    onSelectRentalCab(selectedRentalType, vehicleName);
  };

  const whatsappUrl = buildWhatsAppUrl(
    getRentalCabEnquiryMessage({
      rentalType: selectedRentalType,
      vehicle: 'Toyota Rumion / Innova Crysta',
    }),
    BUSINESS_CONFIG.phones.primaryClean
  );

  return (
    <section id="rental-cabs" className="py-20 md:py-28 bg-white relative overflow-hidden border-y border-slate-200">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="RENTAL CAB SERVICE"
          title="THE RIGHT CAB FOR YOUR NEXT JOURNEY"
          description="Rayyan Travels & Cab Service offers rental cab enquiries for customers travelling from Navsari, Surat, and surrounding areas. Choose your preferred vehicle and contact the team to discuss your journey, rental duration, availability, and charges."
          align="center"
        />

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

        {/* 4 Visual Category Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                  <div className="absolute top-2.5 left-2.5 bg-brand-navy/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
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
              Transparent Enquiries
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Contact Us For Rental Rates &amp; Availability
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Every trip is unique. Contact our team to discuss your pickup location, journey plan, vehicle preference, and get personalized rental details.
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
