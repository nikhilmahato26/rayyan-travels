import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getCallHref, scrollToSection } from '../../utils/contact';
import { buildWhatsAppUrl, getGeneralEnquiryMessage } from '../../utils/whatsapp';

export const MobileActionBar: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(getGeneralEnquiryMessage(), BUSINESS_CONFIG.phones.primaryClean);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-3 py-2">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 active:bg-slate-200 text-brand-navy transition-colors text-center"
        >
          <Phone className="w-5 h-5 text-brand-blue mb-1" />
          <span className="text-xs font-bold leading-none">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white active:bg-[#20ba5a] transition-colors text-center shadow-sm"
        >
          <MessageCircle className="w-5 h-5 fill-current mb-1" />
          <span className="text-xs font-bold leading-none">WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={() => scrollToSection('booking-form')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-gold text-brand-navy-dark active:bg-brand-gold-hover transition-colors text-center font-bold shadow-sm"
        >
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-xs font-bold leading-none">Book Ride</span>
        </button>
      </div>
    </div>
  );
};
