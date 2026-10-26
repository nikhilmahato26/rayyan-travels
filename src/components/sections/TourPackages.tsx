import React from 'react';
import { TOUR_CATEGORIES } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Compass, ArrowRight, CalendarCheck, Phone, CheckCircle2 } from 'lucide-react';
import { scrollToSection, getCallHref } from '../../utils/contact';
import { BUSINESS_CONFIG } from '../../config/business';

interface TourPackagesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({ onSelectCategory }) => {
  return (
    <section id="tour-packages" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pan-India Tour Packages"
          title="ALL INDIA TOURS &amp; TRAVEL EXPERIENCES"
          description="Looking to plan a holiday trip, interstate tour, regional pilgrimage, or a family vacation across India? Share your travel dates and passenger details with us to arrange the ideal vehicle and custom tour itinerary."
          align="center"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TOUR_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-white text-lg font-bold font-heading drop-shadow-sm block">
                      {category.title}
                    </span>
                    <span className="text-brand-gold text-xs font-semibold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" /> All Taxi Passing Vehicle
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="p-5">
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => onSelectCategory(category.title)}
                  rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                >
                  {category.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Tour CTA Box */}
        <div className="text-center bg-brand-blue-light/50 border border-brand-blue/20 rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto shadow-sm">
          <Compass className="w-10 h-10 text-brand-blue mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading mb-2">
            Planning a custom outstation route or interstate tour?
          </h3>
          <p className="text-sm text-brand-muted mb-6 max-w-xl mx-auto leading-relaxed">
            Contact Rayyan Travels directly to discuss vehicle arrangement, driver allocation, and travel schedule tailored to your party. All vehicles feature commercial taxi passing with All India permit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="secondary"
              size="md"
              onClick={() => scrollToSection('booking-form')}
              leftIcon={<CalendarCheck className="w-4 h-4" />}
            >
              PLAN YOUR TOUR
            </Button>
            <Button
              variant="outline"
              size="md"
              href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
              leftIcon={<Phone className="w-4 h-4" />}
            >
              Call {BUSINESS_CONFIG.phones.primary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
