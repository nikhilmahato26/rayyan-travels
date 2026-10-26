import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  MapPin, 
  Navigation, 
  Calendar, 
  Car, 
  Phone, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, formatBookingEnquiryWhatsAppMessage } from '../../utils/whatsapp';

const quickBookingSchema = z.object({
  pickupLocation: z.string().min(2, 'Pickup location is required'),
  destination: z.string().min(2, 'Destination is required'),
  travelDate: z.string().min(1, 'Travel date is required'),
  returnDate: z.string().optional(),
  vehiclePreference: z.string().min(1, 'Vehicle preference is required'),
  serviceType: z.string().min(1, 'Service type is required'),
  numberOfTravellers: z.string().optional(),
  phone: z.string().min(10, 'Valid 10-digit mobile number required').regex(/^[0-9+\s-]{10,15}$/, 'Invalid phone number format'),
});

type QuickBookingFormValues = z.infer<typeof quickBookingSchema>;

interface BookingPanelProps {
  initialService?: string;
  initialVehicle?: string;
}

export const BookingPanel: React.FC<BookingPanelProps> = ({ 
  initialService = 'Rental Cab', 
  initialVehicle = 'Any Available Vehicle' 
}) => {
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const serviceOptions = [
    "Rental Cab",
    "Airport Pickup",
    "Airport Drop",
    "Airport Round Trip",
    "Local City Cab",
    "Outstation Trip",
    "Sightseeing",
    "Tour Package",
    "Corporate Ride",
    "Wedding or Event Transportation",
    "Group Travel"
  ];

  const vehicleOptions = [
    "Toyota Rumion",
    "Force Urbania",
    "Toyota Innova Crysta",
    "Kia Vehicle",
    "Any Available Vehicle"
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuickBookingFormValues>({
    resolver: zodResolver(quickBookingSchema),
    defaultValues: {
      pickupLocation: '',
      destination: '',
      travelDate: today,
      returnDate: '',
      vehiclePreference: initialVehicle,
      serviceType: initialService,
      numberOfTravellers: '',
      phone: '',
    },
  });

  const onSubmit = (data: QuickBookingFormValues) => {
    const formattedMessage = formatBookingEnquiryWhatsAppMessage({
      fullName: 'Customer via Quick Booking',
      phone: data.phone,
      serviceType: data.serviceType,
      pickupLocation: data.pickupLocation,
      destination: data.destination,
      travelDate: data.travelDate,
      returnDate: data.returnDate,
      vehiclePreference: data.vehiclePreference,
      numberOfTravellers: data.numberOfTravellers,
      additionalRequirements: 'Quick Booking Panel Enquiry',
    });

    const whatsappUrl = buildWhatsAppUrl(formattedMessage, BUSINESS_CONFIG.phones.primaryClean);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14">
      <div className="bg-white rounded-3xl shadow-elevated border border-slate-200/90 p-5 sm:p-7 lg:p-9">
        {/* Header of the quick panel */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              Direct Cab Enquiry
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-navy font-heading">
              Quick Cab Booking &amp; Rental Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              Serving Navsari, Surat and outstation destinations. Direct response on WhatsApp &amp; Call.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-brand-navy bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl">
            <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span>Fast response: <strong>+91 7048241603</strong></span>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-bold text-brand-navy">
              Enquiry Opened on WhatsApp!
            </h3>
            <p className="text-sm text-brand-muted max-w-xl mx-auto">
              Your booking details have been prepared for WhatsApp. Please press "Send" in WhatsApp to dispatch your enquiry directly to Rayyan Travels.
            </p>
            <div className="p-3 bg-white rounded-xl border border-emerald-100 text-xs text-slate-600 max-w-lg mx-auto">
              <strong>Please Note:</strong> This is an enquiry request. Vehicle availability, pickup timing, and applicable rental charges will be confirmed by the business upon receipt.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                reset();
              }}
              className="text-xs font-bold text-brand-blue hover:underline pt-2 inline-block"
            >
              ← Submit Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* 8-field grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                  Pickup Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Navsari / Surat Railway Stn"
                  {...register('pickupLocation')}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 ${
                    errors.pickupLocation ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                  }`}
                />
                {errors.pickupLocation && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.pickupLocation.message}</span>
                )}
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-brand-blue" />
                  Destination <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Surat Airport / Mumbai / Local"
                  {...register('destination')}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 ${
                    errors.destination ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                  }`}
                />
                {errors.destination && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.destination.message}</span>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-brand-blue" />
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('serviceType')}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.serviceType && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.serviceType.message}</span>
                )}
              </div>

              {/* Vehicle Preference */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-brand-gold" />
                  Vehicle Preference <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('vehiclePreference')}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                >
                  {vehicleOptions.map((veh) => (
                    <option key={veh} value={veh}>{veh}</option>
                  ))}
                </select>
                {errors.vehiclePreference && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.vehiclePreference.message}</span>
                )}
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                  Travel Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  min={today}
                  {...register('travelDate')}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 ${
                    errors.travelDate ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                  }`}
                />
                {errors.travelDate && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.travelDate.message}</span>
                )}
              </div>

              {/* Return Date (Optional) */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Return Date <span className="text-xs text-brand-muted font-normal">(Optional)</span>
                </label>
                <input
                  type="date"
                  min={today}
                  {...register('returnDate')}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                />
              </div>

              {/* Number of Travellers (Optional) */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  Travellers <span className="text-xs text-brand-muted font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 4 Passengers"
                  {...register('numberOfTravellers')}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 7048241603"
                  {...register('phone')}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-slate-50 focus:bg-white transition-colors focus:outline-none focus:ring-2 ${
                    errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                  }`}
                />
                {errors.phone && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.phone.message}</span>
                )}
              </div>
            </div>

            {/* Disclaimer & Submit Button */}
            <div className="pt-3 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-start gap-2 text-xs text-brand-muted max-w-xl">
                <AlertCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Important Note:</strong> This is a booking enquiry. Vehicle availability and applicable rental charges are confirmed by the business upon receipt of your request.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-navy-dark font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 flex-shrink-0 active:scale-98"
              >
                <span>REQUEST A CAB</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
