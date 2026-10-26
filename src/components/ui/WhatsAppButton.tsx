import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, getGeneralEnquiryMessage } from '../../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = buildWhatsAppUrl(getGeneralEnquiryMessage(), BUSINESS_CONFIG.phones.primaryClean);

  return (
    <div className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-40 flex items-end flex-col gap-2">
      {/* Floating greeting bubble on desktop */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-white text-brand-navy p-3 rounded-2xl shadow-elevated border border-slate-200 text-xs font-medium max-w-xs animate-bounce">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Chat with us on WhatsApp for fast cab booking</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rayyan Travels on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-elevated hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
