import React from 'react';
import { FLEET_VEHICLES } from '../../data/vehicles';
import { SectionHeading } from '../ui/SectionHeading';
import { VehicleCard } from '../ui/VehicleCard';
import { Info } from 'lucide-react';

interface FleetProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fleet" className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Modern & Well-Maintained"
          title="EXPLORE OUR VEHICLE FLEET"
          description="Choose from our versatile fleet serving Navsari, Surat, and beyond. From comfortable family MPVs to spacious group travel vans, we provide dependable vehicles for all your journey needs."
          align="center"
        />

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {FLEET_VEHICLES.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={onSelectVehicle}
            />
          ))}
        </div>

        {/* Policy Disclaimer Banner */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-3.5 text-xs sm:text-sm text-brand-muted">
          <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-brand-navy block mb-0.5">Fleet Booking Terms:</span>
            <span>Vehicle availability and applicable rental charges are confirmed by the business at the time of enquiry. Real vehicle photos shown above represent Rayyan Travels fleet options.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
