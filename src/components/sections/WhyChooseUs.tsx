import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  CarFront, 
  MapPin, 
  ShieldCheck, 
  Users, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "All Taxi Passing Vehicles",
      description: "100% commercial permit fleet with All India permits for hassle-free interstate and state border travel.",
      icon: ShieldCheck,
    },
    {
      title: "Complete Vehicle Range",
      description: "Enquire about Force Urbania, Tempo Traveller, Innova Crysta, Toyota Rumion, SUVs (Hyundai Venue), and Sedans.",
      icon: CarFront,
    },
    {
      title: "All India Tour Service",
      description: "Customized holiday packages, religious pilgrimages, and outstation round-trip journeys across India.",
      icon: MapPin,
    },
    {
      title: "Specialist Group Transportation",
      description: "High-capacity Force Urbania and commercial Tempo Travellers for large family tours and wedding parties.",
      icon: Users,
    },
    {
      title: "Direct 24/7 Communication",
      description: "Contact the team directly via phone (+91 8469429773 / +91 7048241603) or instant WhatsApp.",
      icon: MessageSquare,
    },
    {
      title: "Honest & Reliable Service",
      description: "Discuss vehicle availability, driver allocation, and terms upfront with complete transparency.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Commercial Fleet & Experience"
          title="WHY CHOOSE RAYYAN TRAVELS?"
          description="We take pride in delivering honest communication, well-maintained commercial vehicles, and adaptable travel arrangements for All India tours and local rides."
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
