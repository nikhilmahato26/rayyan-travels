import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { MousePointerClick, Car, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../utils/contact';

export const HowToBook: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description: "Select airport travel, city cab, rental cab, outstation trip, or group transportation based on your journey plan.",
      icon: MousePointerClick,
    },
    {
      number: "02",
      title: "Choose a Vehicle",
      description: "Select your preferred vehicle like Toyota Rumion, Innova Crysta, Force Urbania, or choose any available vehicle.",
      icon: Car,
    },
    {
      number: "03",
      title: "Send Your Enquiry",
      description: "Share your pickup location, destination, travel dates, passenger details, and special requirements.",
      icon: Send,
    },
    {
      number: "04",
      title: "Confirm Your Booking",
      description: "Discuss vehicle availability, charges, and applicable terms directly with the business via WhatsApp or phone call.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple 4-Step Process"
          title="HOW TO BOOK YOUR RIDE"
          description="Booking your travel with Rayyan Travels is straightforward and transparent. Follow these simple steps to enquire and confirm your trip."
          align="center"
        />

        {/* 4 Steps Grid with connecting elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center font-black font-heading text-lg shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black font-heading text-slate-300 group-hover:text-brand-gold transition-colors">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-brand-navy mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center text-xs font-bold text-brand-blue">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-70 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Button
            variant="gold"
            size="lg"
            onClick={() => scrollToSection('booking-form')}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            START YOUR ENQUIRY NOW
          </Button>
        </div>
      </div>
    </section>
  );
};
