import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  CarFront, 
  MapPin, 
  KeyRound, 
  Users, 
  MessageSquare, 
  SlidersHorizontal 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Multiple Vehicle Options",
      description: "Enquire about Toyota Rumion, Innova Crysta, Force Urbania, and Kia vehicles.",
      icon: CarFront,
    },
    {
      title: "Multiple Travel Services",
      description: "Airport transfers, city cabs, rental cabs, outstation trips, and more.",
      icon: MapPin,
    },
    {
      title: "Rental Cab Enquiries",
      description: "Discuss the vehicle and rental arrangement suitable for your journey.",
      icon: KeyRound,
    },
    {
      title: "Group Travel Options",
      description: "Enquire about vehicles for group transportation and events.",
      icon: Users,
    },
    {
      title: "Direct Communication",
      description: "Contact the team by phone, WhatsApp, or email.",
      icon: MessageSquare,
    },
    {
      title: "Flexible Travel Enquiries",
      description: "Share your travel requirements to discuss available options.",
      icon: SlidersHorizontal,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust & Reliability"
          title="WHY CHOOSE RAYYAN TRAVELS?"
          description="We take pride in delivering honest communication, well-maintained vehicles, and adaptable travel arrangements tailored to your schedule."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light group-hover:bg-brand-blue flex items-center justify-center text-brand-blue group-hover:text-white transition-colors duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-navy mb-2.5">
                  {reason.title}
                </h3>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
