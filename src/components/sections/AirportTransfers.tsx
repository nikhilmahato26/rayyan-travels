import React, { useState } from 'react';
import { Plane, CalendarCheck, Clock, MapPin, Navigation, Car, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

interface AirportTransfersProps {
  onQuickBookAirport: (serviceType: string, pickup: string, destination: string) => void;
}

export const AirportTransfers: React.FC<AirportTransfersProps> = ({ onQuickBookAirport }) => {
  const [selectedService, setSelectedService] = useState('Airport Drop');
  const [pickupLocation, setPickupLocation] = useState('');
  const [airportDestination, setAirportDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [vehiclePreference, setVehiclePreference] = useState('Any Available Vehicle');
  const [contactNumber, setContactNumber] = useState('');

  const services = [
    {
      id: 'Airport Drop',
      title: 'Airport Drop',
      desc: 'Prompt cab departure from your home, office, or hotel in Navsari/Surat to the airport terminal.',
      icon: Plane,
    },
    {
      id: 'Airport Pickup',
      title: 'Airport Pickup',
      desc: 'Convenient arrivals pickup from Surat, Mumbai, or Ahmedabad airports back to your home.',
      icon: Plane,
    },
    {
      id: 'Airport Round Trip',
      title: 'Airport Round Trip',
      desc: 'Seamless two-way airport transfers arranged to accommodate your flight departure and return schedule.',
      icon: Plane,
    },
  ];

  const handleAirportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupLocation || !airportDestination || !travelDate || !contactNumber) {
      alert('Please fill in pickup location, airport destination, travel date, and contact number.');
      return;
    }

    const message = [
      `*AIRPORT TRANSFER ENQUIRY*`,
      `*${BUSINESS_CONFIG.name}*`,
      `*Service:* ${selectedService}`,
      `*Pickup Location:* ${pickupLocation}`,
      `*Airport / Destination:* ${airportDestination}`,
      `*Travel Date:* ${travelDate}`,
      pickupTime ? `*Pickup Time:* ${pickupTime}` : '',
      `*Vehicle Preference:* ${vehiclePreference}`,
      `*Contact Number:* ${contactNumber}`,
      '',
      '_Note: This is an airport transfer enquiry. Vehicle availability and applicable charges are confirmed by the business._'
    ].filter(Boolean).join('\n');

    const url = buildWhatsAppUrl(message, BUSINESS_CONFIG.phones.primaryClean);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="airport-transfers" className="py-20 md:py-28 bg-[#0F223D] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Reliable Terminal Transfers"
          title="AIRPORT TRANSFERS MADE SIMPLE"
          description="Contact Rayyan Travels & Cab Service to enquire about airport pickup, airport drop, and airport round-trip transportation."
          align="center"
          dark={true}
        />

        {/* 3 Transfer Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {services.map((srv) => {
            const isSelected = selectedService === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => {
                  setSelectedService(srv.id);
                  onQuickBookAirport(srv.id, pickupLocation, airportDestination);
                }}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/15 border-brand-gold ring-1 ring-brand-gold shadow-lg scale-102'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-4">
                    <Plane className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-brand-gold' : 'text-gray-400'}>
                    {isSelected ? 'Selected Plan' : 'Click to Select'}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Airport Mini Booking Form Layout */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
            <div className="w-10 h-10 rounded-xl bg-brand-gold text-brand-navy flex items-center justify-center font-bold">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">
                Enquire for {selectedService}
              </h3>
              <p className="text-xs text-gray-300">
                Share flight timing and pickup address for rapid WhatsApp confirmation.
              </p>
            </div>
          </div>

          <form onSubmit={handleAirportSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  Pickup Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Navsari / Taiwad"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white/20"
                />
              </div>

              {/* Airport / Destination */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-brand-gold" />
                  Airport / Destination *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Surat Airport / Mumbai T2"
                  value={airportDestination}
                  onChange={(e) => setAirportDestination(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white/20"
                />
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  Travel Date *
                </label>
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white/20"
                />
              </div>

              {/* Pickup Time (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  Pickup Time <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white/20"
                />
              </div>

              {/* Vehicle Preference */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-brand-gold" />
                  Vehicle Preference
                </label>
                <select
                  value={vehiclePreference}
                  onChange={(e) => setVehiclePreference(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-brand-navy border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <option value="Any Available Vehicle">Any Available Vehicle</option>
                  <option value="Toyota Rumion">Toyota Rumion</option>
                  <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                  <option value="Force Urbania">Force Urbania</option>
                  <option value="Kia Vehicle">Kia Vehicle</option>
                </select>
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 7048241603"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white/20"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Enquiries confirmed directly with driver allocation &amp; rate.</span>
              </div>

              <Button
                variant="gold"
                size="md"
                type="submit"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                REQUEST AIRPORT TRANSFER
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
