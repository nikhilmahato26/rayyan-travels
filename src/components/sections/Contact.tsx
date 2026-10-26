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
  MessageCircle 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(getGeneralEnquiryMessage(), BUSINESS_CONFIG.phones.primaryClean);

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="CONTACT RAYYAN TRAVELS & CAB SERVICE"
          description="Have questions about our rental cabs, airport transfers, or tour packages? Reach out to us through any of our direct contact channels."
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
                Business Contact Information
              </h3>

              <div className="space-y-6 text-sm">
                {/* Business Name */}
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                    Registered Business Name
                  </span>
                  <span className="text-base font-bold text-brand-navy">
                    {BUSINESS_CONFIG.name}
                  </span>
                </div>

                {/* Phones */}
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-2">
                    Direct Phone Numbers
                  </span>
                  <div className="space-y-2">
                    <div>
                      <a
                        href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
                        className="inline-flex items-center gap-2.5 text-base font-extrabold text-brand-blue hover:text-brand-blue-hover transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue">
                          <Phone className="w-4 h-4" />
                        </div>
                        {BUSINESS_CONFIG.phones.primary} (Primary Enquiries)
                      </a>
                    </div>
                    {BUSINESS_CONFIG.phones.additional.map((phone, idx) => (
                      <div key={idx}>
                        <a
                          href={getCallHref(BUSINESS_CONFIG.phones.additionalClean[idx])}
                          className="inline-flex items-center gap-2.5 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          {phone}
                        </a>
                      </div>
                    ))}
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
                          <span>View on Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
                    Primary Service Areas
                  </span>
                  <div className="flex items-center gap-2 text-brand-navy font-medium">
                    <Navigation className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>Navsari and Surat, Gujarat (with outstation travel enquiries)</span>
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
                WhatsApp Rayyan Travels
              </Button>
              <Button
                variant="secondary"
                size="md"
                href={getCallHref(BUSINESS_CONFIG.phones.primaryClean)}
                leftIcon={<Phone className="w-4 h-4" />}
              >
                Call Primary Number
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
                Rayyan Travels is conveniently located at Kolva, Taiwad Main Road, Navsari, serving customers across both Navsari and Surat districts with point-to-point pickups, airport drop-offs, and intercity trips.
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

              {/* Verified Fleet badges */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-brand-muted block text-[11px]">Local Bases:</span>
                  <span className="font-bold text-brand-navy">Navsari &amp; Surat City</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-brand-muted block text-[11px]">Fleet Vehicles:</span>
                  <span className="font-bold text-brand-navy">Rumion, Innova, Urbania, Kia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
