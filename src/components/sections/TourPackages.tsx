import React from 'react';
import { TOUR_CATEGORIES } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Compass, ArrowRight, CalendarCheck } from 'lucide-react';
import { scrollToSection } from '../../utils/contact';

interface TourPackagesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({ onSelectCategory }) => {
  return (
    <section id="tour-packages" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tours & Experiences"
          title="DISCOVER MORE WITH RAYYAN TRAVELS"
          description="Looking to plan a holiday trip, regional pilgrimage, or a weekend escape? Share your travel dates and group details with us to arrange the ideal vehicle and custom tour itinerary."
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-white text-lg font-bold font-heading drop-shadow-sm">
                      {category.title}
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
        <div className="text-center bg-brand-blue-light/50 border border-brand-blue/20 rounded-2xl p-8 max-w-3xl mx-auto">
          <Compass className="w-10 h-10 text-brand-blue mx-auto mb-3" />
          <h3 className="text-xl font-bold text-brand-navy font-heading mb-2">
            Have a custom destination or specific itinerary in mind?
          </h3>
          <p className="text-sm text-brand-muted mb-6 max-w-xl mx-auto">
            Contact Rayyan Travels directly to discuss vehicle arrangement, driver allocation, and travel schedule tailored to your party.
          </p>
          <Button
            variant="secondary"
            size="md"
            onClick={() => scrollToSection('booking-form')}
            leftIcon={<CalendarCheck className="w-4 h-4" />}
          >
            PLAN YOUR TOUR
          </Button>
        </div>
      </div>
    </section>
  );
};
