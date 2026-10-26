import React from 'react';
import { FLEET_VEHICLES } from '../../data/vehicles';
import { SectionHeading } from '../ui/SectionHeading';
import { VehicleCard } from '../ui/VehicleCard';
import { CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

interface FleetProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fleet" className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Commercial Fleet • All India Permit"
          title="ALL TAXI PASSING VEHICLES AVAILABLE"
          description="We provide 100% taxi passing vehicles with All India commercial permits. Whether you need a luxury Force Urbania, high-capacity Tempo Traveller, executive Innova Crysta, family Rumion MPV, compact SUV (Hyundai Venue), or comfortable Sedan, we have the right vehicle for your journey."
          align="center"
        />

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {FLEET_VEHICLES.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={onSelectVehicle}
            />
          ))}
        </div>

        {/* Policy & Permit Disclaimer Banner */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-4 text-xs sm:text-sm text-brand-muted">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-brand-navy block mb-0.5 text-sm sm:text-base">
              All Taxi Passing Vehicles • All India Commercial Permit
            </span>
            <span>
              All our fleet vehicles operate under valid commercial taxi permits for seamless travel across Gujarat, Maharashtra, Rajasthan, and Pan-India. 
              Vehicle availability and applicable rental charges are confirmed by Rayyan Travels at the time of enquiry. 
              Contact helpline: <strong className="text-brand-navy">{BUSINESS_CONFIG.phones.primary}</strong> / <strong className="text-brand-navy">{BUSINESS_CONFIG.phones.secondary}</strong>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
