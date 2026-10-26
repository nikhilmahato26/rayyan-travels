import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BUSINESS_CONFIG } from '../../config/business';
import { getCallHref, getEmailHref, getGoogleMapsHref } from '../../utils/contact';
import { buildWhatsAppUrl, getGeneralEnquiryMessage } from '../../utils/whatsapp';
import { Button } from '../ui/Button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Navigation, 
  ExternalLink, 
  MessageCircle,
  CheckCircle2 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(getGeneralEnquiryMessage(), BUSINESS_CONFIG.phones.primaryClean);

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="24/7 Booking Helpline"
          title="CONTACT RAYYAN TRAVELS & CAB SERVICE"
          description="Have questions about our All India tour packages, commercial rental cabs, Tempo Traveller, or airport transfers? Connect directly with our team."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Comprehensive Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-6 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold">
                  i
                </div>
                Booking Helpline &amp; Business Information
              </h3>

              <div className="space-y-6 text-sm">
                {/* Business Name */}
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                    Registered Business Name
                  </span>
                  <span className="text-base font-bold text-brand-navy block">
                    {BUSINESS_CONFIG.name}
                  </span>
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                    {BUSINESS_CONFIG.permitBadge}
                  </span>
                </div>

                {/* Phones (Only 2 numbers) */}
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
                    Direct Phone Numbers
                  </span>
                  <div className="space-y-3">
                    <div>
                      <a
                        href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
                        className="inline-flex items-center gap-2.5 text-base sm:text-lg font-black text-brand-blue hover:text-brand-blue-hover transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span>{BUSINESS_CONFIG.phones.primary} <span className="text-xs text-brand-gold font-bold bg-brand-navy px-2 py-0.5 rounded-full ml-1">Main Number</span></span>
                      </a>
                    </div>
                    <div>
                      <a
                        href={getCallHref(BUSINESS_CONFIG.phones.secondaryClean)}
                        className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-brand-navy hover:text-brand-blue transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <span>{BUSINESS_CONFIG.phones.secondary} <span className="text-xs text-brand-muted font-normal">(Secondary Helpline)</span></span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                    Email Address
                  </span>
                  <a
                    href={getEmailHref()}
                    className="inline-flex items-center gap-2.5 font-bold text-brand-navy hover:text-brand-blue transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue">
                      <Mail className="w-4 h-4" />
                    </div>
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>

                {/* Address */}
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                    Office Address
                  </span>
                  <div className="flex items-start gap-2.5 text-brand-navy leading-relaxed">
                    <div className="w-7 h-7 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span>{BUSINESS_CONFIG.location.fullAddress}</span>
                      <div className="mt-2">
                        <a
                          href={getGoogleMapsHref()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                    Service Coverage
                  </span>
                  <div className="flex items-center gap-2 text-brand-navy font-medium">
                    <Navigation className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>All India Tour &amp; Cab Service • Pan-India Commercial Travel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="whatsapp"
                size="md"
                href={whatsappUrl}
                external
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                WhatsApp ({BUSINESS_CONFIG.phones.primary})
              </Button>
              <Button
                variant="secondary"
                size="md"
                href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
                leftIcon={<Phone className="w-4 h-4" />}
              >
                Call Main Number
              </Button>
            </div>
          </div>

          {/* Right Column: Location & Service Region Visual Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card p-6 sm:p-8">
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-gold" />
                Office Location &amp; Directions
              </h3>

              <p className="text-sm text-brand-muted mb-6 leading-relaxed">
                Rayyan Travels is headquartered at Kolva, Taiwad Main Road, Navsari, operating with an All India Commercial Permit for interstate journeys, airport transfers (Surat, Mumbai, Ahmedabad), and long-distance tours.
              </p>

              {/* Map Direction Card Link */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100 group">
                <div className="p-6 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white font-heading">
                      Rayyan Travels Office
                    </h4>
                    <p className="text-xs text-gray-300 mt-1 max-w-sm mx-auto">
                      Office No. 581, Kolva, Taiwad Main Road, District Navsari, Gujarat – 396350
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={getGoogleMapsHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-brand-navy font-bold text-xs hover:bg-brand-gold transition-colors shadow-sm"
                    >
                      <span>Open Address in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Fleet & Permit Badges */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-brand-muted block text-[11px]">Permit Category:</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    All India Permit Taxi Passing
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-brand-muted block text-[11px]">Commercial Fleet:</span>
                  <span className="font-bold text-brand-navy">Urbania, Traveller, Crysta, Rumion, SUV, Sedan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
