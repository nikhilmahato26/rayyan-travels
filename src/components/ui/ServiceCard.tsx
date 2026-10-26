import React from 'react';
import { 
  Plane, 
  Repeat, 
  Car, 
  Compass, 
  MapPin, 
  Camera, 
  Palmtree, 
  Briefcase, 
  Gift, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import type { ServiceItem } from '../../data/services';
import { Button } from './Button';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceType: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" };
    switch (iconName) {
      case 'Plane': return <Plane {...iconProps} />;
      case 'Repeat': return <Repeat {...iconProps} />;
      case 'Car': return <Car {...iconProps} />;
      case 'Compass': return <Compass {...iconProps} />;
      case 'MapPin': return <MapPin {...iconProps} />;
      case 'Camera': return <Camera {...iconProps} />;
      case 'Palmtree': return <Palmtree {...iconProps} />;
      case 'Briefcase': return <Briefcase {...iconProps} />;
      case 'Gift': return <Gift {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      default: return <Car {...iconProps} />;
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group hover:shadow-card-hover ${
      service.featured ? 'border-brand-blue/30 ring-1 ring-brand-blue/20' : 'border-slate-200'
    }`}>
      <div>
        {/* Icon & Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-brand-blue-light group-hover:bg-brand-blue flex items-center justify-center transition-colors duration-300 shadow-sm">
            {getIcon(service.iconName)}
          </div>
          {service.featured && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-light px-2.5 py-1 rounded-full border border-brand-blue/20">
              Popular Service
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-navy mb-2.5 font-heading group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-muted leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* Action Button */}
      <div className="pt-3 border-t border-slate-100">
        <Button
          variant={service.featured ? "primary" : "secondary"}
          size="sm"
          fullWidth
          onClick={() => onSelectService(service.serviceTypeParam)}
          rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        >
          {service.ctaText}
        </Button>
      </div>
    </div>
  );
};
