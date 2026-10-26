import { BUSINESS_CONFIG } from '../config/business';

export interface BookingEnquiryData {
  fullName: string;
  phone: string;
  email?: string;
  serviceType: string;
  pickupLocation: string;
  destination?: string;
  travelDate: string;
  returnDate?: string;
  pickupTime?: string;
  vehiclePreference: string;
  numberOfTravellers?: string;
  rentalType?: string;
  additionalRequirements?: string;
}

/**
 * Builds a direct WhatsApp URL with URL-encoded text
 */
export function buildWhatsAppUrl(message: string, phone: string = BUSINESS_CONFIG.phones.primaryClean): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * General Enquiry WhatsApp Message
 */
export function getGeneralEnquiryMessage(): string {
  return `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about your All India Tour and cab rental services. Please share the available options and rates.`;
}

/**
 * Rental Cab Enquiry WhatsApp Message
 */
export function getRentalCabEnquiryMessage(details?: {
  pickup?: string;
  destination?: string;
  travelDate?: string;
  returnDate?: string;
  vehicle?: string;
  rentalType?: string;
}): string {
  const lines: string[] = [
    `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about your rental cab / All India tour service.`,
    '',
    `Pickup Location: ${details?.pickup || 'Pickup city / location'}`,
    `Destination: ${details?.destination || 'Outstation / All India Tour'}`,
    `Travel Date: ${details?.travelDate || 'Flexible'}`,
  ];

  if (details?.returnDate) {
    lines.push(`Return Date: ${details.returnDate}`);
  }
  lines.push(`Preferred Vehicle: ${details?.vehicle || 'Force Urbania / Tempo Traveller / Innova Crysta / Rumion'}`);
  lines.push(`Rental Type: ${details?.rentalType || 'All India Tour / Rental Cab'}`);
  lines.push('');
  lines.push('Please share the availability, rental charges, and booking terms.');

  return lines.join('\n');
}

/**
 * Airport Transfer Enquiry WhatsApp Message
 */
export function getAirportEnquiryMessage(details?: {
  pickup?: string;
  destination?: string;
  travelDate?: string;
  pickupTime?: string;
  vehicle?: string;
}): string {
  const lines: string[] = [
    `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about airport pickup/drop or round-trip service.`,
    '',
    `Pickup Location: ${details?.pickup || 'Your Location'}`,
    `Airport / Destination: ${details?.destination || 'Surat / Mumbai / Ahmedabad Airport'}`,
    `Travel Date: ${details?.travelDate || 'Flexible'}`,
  ];

  if (details?.pickupTime) {
    lines.push(`Pickup Time: ${details.pickupTime}`);
  }
  lines.push(`Preferred Vehicle: ${details?.vehicle || 'Any Available Vehicle'}`);
  lines.push('');
  lines.push('Please share the available options and charges.');

  return lines.join('\n');
}

/**
 * Tour Package & Sightseeing Enquiry WhatsApp Message
 */
export function getTourEnquiryMessage(details?: {
  destination?: string;
  travelDate?: string;
  numberOfTravellers?: string;
  vehicle?: string;
}): string {
  const lines: string[] = [
    `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about an All India tour package or outstation trip.`,
    '',
    `Preferred Destination: ${details?.destination || 'All India Tour / Holiday Destination'}`,
    `Travel Date: ${details?.travelDate || 'Flexible'}`,
  ];

  if (details?.numberOfTravellers) {
    lines.push(`Number of Travellers: ${details.numberOfTravellers}`);
  }
  lines.push(`Preferred Vehicle: ${details?.vehicle || 'Urbania / Tempo Traveller / Innova Crysta'}`);
  lines.push('');
  lines.push('Please contact me with the available options and itinerary details.');

  return lines.join('\n');
}

/**
 * Vehicle Specific Enquiry WhatsApp Message
 */
export function getVehicleEnquiryMessage(vehicleName: string, category: string): string {
  return [
    `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about booking the ${vehicleName} (${category}).`,
    '',
    'Please share the availability, All India commercial permit details, and applicable charges.',
  ].join('\n');
}

/**
 * Full Booking Enquiry Form WhatsApp Message
 * Omits optional empty fields cleanly
 */
export function formatBookingEnquiryWhatsAppMessage(data: BookingEnquiryData): string {
  const lines: string[] = [
    `*NEW CAB & ALL INDIA TOUR ENQUIRY*`,
    `*${BUSINESS_CONFIG.name}*`,
    '--------------------------------',
    `*Customer Name:* ${data.fullName}`,
    `*Contact Number:* ${data.phone}`,
  ];

  if (data.email && data.email.trim() !== '') {
    lines.push(`*Email:* ${data.email.trim()}`);
  }

  lines.push(`*Service Requested:* ${data.serviceType}`);
  lines.push(`*Vehicle Preference:* ${data.vehiclePreference}`);
  lines.push(`*Pickup Location:* ${data.pickupLocation}`);

  if (data.destination && data.destination.trim() !== '') {
    lines.push(`*Destination:* ${data.destination.trim()}`);
  }

  lines.push(`*Travel Date:* ${data.travelDate}`);

  if (data.returnDate && data.returnDate.trim() !== '') {
    lines.push(`*Return Date:* ${data.returnDate.trim()}`);
  }

  if (data.pickupTime && data.pickupTime.trim() !== '') {
    lines.push(`*Pickup Time:* ${data.pickupTime.trim()}`);
  }

  if (data.numberOfTravellers && data.numberOfTravellers.trim() !== '') {
    lines.push(`*Number of Travellers:* ${data.numberOfTravellers.trim()}`);
  }

  if (data.rentalType && data.rentalType.trim() !== '') {
    lines.push(`*Rental Plan:* ${data.rentalType.trim()}`);
  }

  if (data.additionalRequirements && data.additionalRequirements.trim() !== '') {
    lines.push(`*Notes/Requirements:* ${data.additionalRequirements.trim()}`);
  }

  lines.push('--------------------------------');
  lines.push('_Note: All taxi passing vehicles with commercial permit. Booking is subject to confirmation of vehicle availability and applicable charges._');

  return lines.join('\n');
}
