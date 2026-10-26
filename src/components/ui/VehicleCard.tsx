import React, { useState } from 'react';
import { Phone, MessageCircle, CalendarCheck, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { Vehicle } from '../../data/vehicles';
import { Button } from './Button';
import { buildWhatsAppUrl, getVehicleEnquiryMessage } from '../../utils/whatsapp';
import { getCallHref } from '../../utils/contact';
import { BUSINESS_CONFIG } from '../../config/business';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectVehicle }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const allImages = [vehicle.image, ...(vehicle.additionalImages || [])];

  const handleEnquire = () => {
    onSelectVehicle(vehicle.name);
  };

  const whatsappUrl = buildWhatsAppUrl(
    getVehicleEnquiryMessage(vehicle.name, vehicle.category),
    BUSINESS_CONFIG.phones.primaryClean
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group">
      {/* Vehicle Image Container */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img
          src={allImages[activeImageIndex]}
          alt={`${vehicle.name} - ${vehicle.category}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
          {vehicle.category}
        </div>

        {/* Spotlight Tag */}
        {vehicle.tag && (
          <div className="absolute top-3 right-3 bg-brand-gold text-brand-navy font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
            {vehicle.tag}
          </div>
        )}

        {/* Thumbnail Selector if multiple photos available */}
        {allImages.length > 1 && (
          <div className="absolute bottom-2 inset-x-2 flex items-center justify-center gap-1.5 p-1 bg-black/40 backdrop-blur-sm rounded-lg">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`View photo ${idx + 1}`}
                className={`w-10 h-7 rounded overflow-hidden border transition-all ${
                  activeImageIndex === idx ? 'border-brand-gold ring-1 ring-brand-gold scale-105' : 'border-white/50 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-brand-navy font-heading">
              {vehicle.name}
            </h3>
            <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md font-semibold">
              Taxi Passing
            </span>
          </div>

          <p className="text-sm text-brand-muted leading-relaxed mb-4">
            {vehicle.description}
          </p>

          {/* Passing Type Badge */}
          {vehicle.passingType && (
            <div className="flex items-center gap-1.5 text-xs text-brand-navy font-semibold bg-amber-50 border border-amber-200/80 p-2 rounded-xl mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span>{vehicle.passingType}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-brand-blue font-medium bg-brand-blue-light/60 p-2.5 rounded-xl mb-5">
            <ShieldCheck className="w-4 h-4 text-brand-blue flex-shrink-0" />
            <span>Contact us for rental rates &amp; availability</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={handleEnquire}
            leftIcon={<CalendarCheck className="w-4 h-4" />}
            rightIcon={<ChevronRight className="w-4 h-4" />}
          >
            Enquire About This Vehicle
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="whatsapp"
              size="sm"
              href={whatsappUrl}
              external
              leftIcon={<MessageCircle className="w-3.5 h-3.5" />}
            >
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
              leftIcon={<Phone className="w-3.5 h-3.5" />}
            >
              Call Direct
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
