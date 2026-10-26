import React from 'react';
import { ALL_SERVICES } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';

interface ServicesProps {
  onSelectService: (serviceType: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comprehensive Travel Solutions"
          title="TRAVEL SERVICES FOR EVERY OCCASION"
          description="Whether you need a daily rental cab, timely airport transfers, outstation travel across Gujarat, or transportation for family events, Rayyan Travels delivers comfortable travel with dedicated vehicle options."
          align="center"
        />

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
