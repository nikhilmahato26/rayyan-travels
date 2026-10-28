import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  User, 
  Phone, 
  Mail, 
  Car, 
  MapPin, 
  Navigation, 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { TimePicker } from '../ui/TimePicker';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, formatBookingEnquiryWhatsAppMessage } from '../../utils/whatsapp';

const bookingFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required (at least 2 characters)'),
  phone: z.string().min(10, 'Valid mobile number required').regex(/^[0-9+\s-]{10,15}$/, 'Invalid phone number format'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  serviceType: z.string().min(1, 'Please select a service type'),
  pickupLocation: z.string().min(2, 'Pickup location is required'),
  destination: z.string().optional().or(z.literal('')),
  travelDate: z.string().min(1, 'Travel date is required'),
  returnDate: z.string().optional().or(z.literal('')),
  pickupTime: z.string().optional().or(z.literal('')),
  vehiclePreference: z.string().min(1, 'Please select a vehicle preference'),
  numberOfTravellers: z.string().optional().or(z.literal('')),
  additionalRequirements: z.string().optional().or(z.literal('')),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  preselectedService?: string;
  preselectedVehicle?: string;
  preselectedRentalType?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedService = 'All India Tour',
  preselectedVehicle = 'Any Available Vehicle',
  preselectedRentalType = '',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const serviceOptions = [
    "All India Tour",
    "Rental Cab",
    "Group Travel (Urbania / Traveller)",
    "Outstation Trip",
    "Airport Pickup",
    "Airport Drop",
    "Airport Round Trip",
    "SUV / Sedan Cab",
    "Local City Cab",
    "Sightseeing",
    "Wedding / Event",
    "Corporate Ride",
    "Other"
  ];

  const vehicleOptions = [
    "Force Urbania",
    "Tempo Traveller",
    "Toyota Innova Crysta",
    "Toyota Rumion",
    "SUV (Hyundai Venue & More)",
    "Comfort Sedan",
    "Kia Vehicle",
    "Any Available Vehicle"
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      serviceType: preselectedService,
      pickupLocation: '',
      destination: '',
      travelDate: today,
      returnDate: '',
      pickupTime: '',
      vehiclePreference: preselectedVehicle,
      numberOfTravellers: '',
      additionalRequirements: preselectedRentalType ? `Plan: ${preselectedRentalType}` : '',
    },
  });

  const pickupTimeValue = watch('pickupTime');

  useEffect(() => {
    if (preselectedService) {
      setValue('serviceType', preselectedService);
    }
  }, [preselectedService, setValue]);

  useEffect(() => {
    if (preselectedVehicle) {
      setValue('vehiclePreference', preselectedVehicle);
    }
  }, [preselectedVehicle, setValue]);

  useEffect(() => {
    if (preselectedRentalType) {
      setValue('additionalRequirements', `Plan: ${preselectedRentalType}`);
    }
  }, [preselectedRentalType, setValue]);

  const onSubmit = (data: BookingFormValues) => {
    const formattedMessage = formatBookingEnquiryWhatsAppMessage({
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      serviceType: data.serviceType,
      pickupLocation: data.pickupLocation,
      destination: data.destination,
      travelDate: data.travelDate,
      returnDate: data.returnDate,
      pickupTime: data.pickupTime,
      vehiclePreference: data.vehiclePreference,
      numberOfTravellers: data.numberOfTravellers,
      additionalRequirements: data.additionalRequirements,
    });

    const whatsappUrl = buildWhatsAppUrl(formattedMessage, BUSINESS_CONFIG.phones.primaryClean);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="booking-form" className="py-20 md:py-28 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Direct Reservation Enquiry"
          title="LET'S PLAN YOUR ALL INDIA RIDE"
          description="Fill in your journey requirements below. We will receive your details directly on WhatsApp to check fleet availability and confirm your booking terms."
          align="center"
        />

        <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-elevated">
          {submitted ? (
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-brand-navy font-heading">
                Booking Enquiry Prepared!
              </h3>
              <p className="text-sm text-brand-muted max-w-lg mx-auto leading-relaxed">
                Your enquiry has been formatted and opened in WhatsApp. If your WhatsApp did not open automatically, click the button below to send your details directly to our helpline.
              </p>

              <div className="p-4 bg-white rounded-xl border border-emerald-100 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                <span className="font-bold text-emerald-800 block">Status: Enquiry Submitted for Review</span>
                <span>• All Taxi Passing commercial vehicles with All India Permit.</span>
                <span>• Primary Helpline: <strong>{BUSINESS_CONFIG.phones.primary}</strong></span>
                <span>• Secondary Phone: <strong>{BUSINESS_CONFIG.phones.secondary}</strong></span>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    reset();
                  }}
                >
                  Send Another Enquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-blue" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register('fullName')}
                    className={`w-full text-sm px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.fullName.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-blue" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    {...register('phone')}
                    className={`w-full text-sm px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.phone.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    Email Address <span className="text-xs text-brand-muted font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register('email')}
                    className={`w-full text-sm px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.email.message}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Service and Vehicle Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-brand-blue" />
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('serviceType')}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.serviceType.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-brand-gold" />
                    Vehicle Preference <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('vehiclePreference')}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  >
                    {vehicleOptions.map((veh) => (
                      <option key={veh} value={veh}>{veh}</option>
                    ))}
                  </select>
                  {errors.vehiclePreference && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.vehiclePreference.message}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Pickup & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                    Pickup Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter pickup address or city"
                    {...register('pickupLocation')}
                    className={`w-full text-sm px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                      errors.pickupLocation ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                    }`}
                  />
                  {errors.pickupLocation && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.pickupLocation.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-slate-400" />
                    Destination / Tour Route <span className="text-xs text-brand-muted font-normal">(Optional for local)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Outstation Tour / City / Airport"
                    {...register('destination')}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                </div>
              </div>

              {/* Row 4: Date, Return Date, Time & Travellers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    Travel Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={today}
                    {...register('travelDate')}
                    className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                      errors.travelDate ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-blue/30 focus:border-brand-blue'
                    }`}
                  />
                  {errors.travelDate && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.travelDate.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Return Date <span className="text-xs text-brand-muted font-normal">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    min={today}
                    {...register('returnDate')}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Pickup Time <span className="text-xs text-brand-muted font-normal">(Optional)</span>
                  </label>
                  <TimePicker
                    value={pickupTimeValue}
                    onChange={(val) => setValue('pickupTime', val, { shouldValidate: true, shouldDirty: true })}
                    placeholder="Select pickup time (e.g. 06:45 AM)"
                    variant="light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    No. of Travellers <span className="text-xs text-brand-muted font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 6 Passengers / Group"
                    {...register('numberOfTravellers')}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                  />
                </div>
              </div>

              {/* Additional Requirements / Rental Details */}
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  Tour Requirements / Rental Duration <span className="text-xs text-brand-muted font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your tour itinerary, interstate stops, luggage requirements..."
                  {...register('additionalRequirements')}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                />
              </div>

              {/* Form Note & Submit CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-2.5 text-xs text-brand-muted max-w-md">
                  <AlertCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>
                    Submitting this form creates a direct WhatsApp enquiry to Rayyan Travels. All vehicles operate with commercial taxi permits and All India authorization.
                  </span>
                </div>

                <Button
                  variant="gold"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  leftIcon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto px-10"
                >
                  SEND BOOKING ENQUIRY
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
