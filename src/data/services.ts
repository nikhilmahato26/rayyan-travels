export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  ctaText: string;
  serviceTypeParam: string;
  iconName: string;
  featured?: boolean;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "airport-pickup-drop",
    title: "Airport Pickup & Drop",
    shortDescription: "Convenient airport transfer enquiries for arrivals and departures.",
    ctaText: "BOOK AIRPORT TRANSFER",
    serviceTypeParam: "Airport Pickup",
    iconName: "Plane",
    featured: true,
  },
  {
    id: "airport-round-trips",
    title: "Airport Round Trips",
    shortDescription: "Enquire about round-trip transportation connected to airport travel.",
    ctaText: "ENQUIRE NOW",
    serviceTypeParam: "Airport Round Trip",
    iconName: "Repeat",
  },
  {
    id: "rental-cab-service",
    title: "Rental Cab Service",
    shortDescription: "Looking for a cab for your travel plans? Enquire about rental cab options, suitable vehicles, duration, and applicable charges.",
    ctaText: "ENQUIRE ABOUT RENTAL CABS",
    serviceTypeParam: "Rental Cab",
    iconName: "Car",
    featured: true,
  },
  {
    id: "local-city-cab",
    title: "Local City Cab Service",
    shortDescription: "Cab enquiries for local travel in Navsari, Surat, and nearby areas, subject to availability.",
    ctaText: "BOOK A CITY CAB",
    serviceTypeParam: "Local City Cab",
    iconName: "Compass",
  },
  {
    id: "outstation-trips",
    title: "Outstation Trips",
    shortDescription: "Plan intercity journeys and enquire about outstation cab options.",
    ctaText: "PLAN YOUR JOURNEY",
    serviceTypeParam: "Outstation Trip",
    iconName: "MapPin",
    featured: true,
  },
  {
    id: "local-sightseeing",
    title: "Local Sightseeing",
    shortDescription: "Enquire about cab arrangements for sightseeing and local attractions.",
    ctaText: "PLAN SIGHTSEEING",
    serviceTypeParam: "Sightseeing",
    iconName: "Camera",
  },
  {
    id: "tour-packages",
    title: "Tour Packages",
    shortDescription: "Contact the team to discuss vehicle arrangements for planned tours and holiday travel.",
    ctaText: "EXPLORE TOUR OPTIONS",
    serviceTypeParam: "Tour Package",
    iconName: "Palmtree",
  },
  {
    id: "corporate-rides",
    title: "Corporate Rides",
    shortDescription: "Cab enquiries for business travel and corporate transportation requirements.",
    ctaText: "CORPORATE ENQUIRY",
    serviceTypeParam: "Corporate Ride",
    iconName: "Briefcase",
  },
  {
    id: "weddings-parties-events",
    title: "Weddings, Parties & Events",
    shortDescription: "Enquire about vehicle arrangements for weddings, parties, and other events.",
    ctaText: "BOOK EVENT TRANSPORT",
    serviceTypeParam: "Wedding or Event Transportation",
    iconName: "Gift",
  },
  {
    id: "group-transportation",
    title: "Group Transportation",
    shortDescription: "Explore suitable vehicle options for group travel and special journeys.",
    ctaText: "ENQUIRE FOR GROUP TRAVEL",
    serviceTypeParam: "Group Travel",
    iconName: "Users",
    featured: true,
  },
];

export interface TourCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  serviceTypeParam: string;
}

export const TOUR_CATEGORIES: TourCategory[] = [
  {
    id: "gujarat-getaways",
    title: "Gujarat Getaways",
    description: "Enquire about scenic road trips and heritage routes across Gujarat.",
    image: "/images/destinations/gujarat-tour.jpg",
    ctaText: "PLAN GUJARAT TOUR",
    serviceTypeParam: "Tour Package",
  },
  {
    id: "family-tours",
    title: "Family Tours",
    description: "Comfortable travel arrangements for your family vacations and weekend trips.",
    image: "/images/destinations/family-tour.jpg",
    ctaText: "ENQUIRE FAMILY TOUR",
    serviceTypeParam: "Tour Package",
  },
  {
    id: "outstation-journeys",
    title: "Outstation Journeys",
    description: "Reliable intercity cab services tailored for long-distance travel plans.",
    image: "/images/destinations/outstation-drive.jpg",
    ctaText: "PLAN OUTSTATION TRIP",
    serviceTypeParam: "Outstation Trip",
  },
  {
    id: "group-tours",
    title: "Group Tours",
    description: "Spacious vehicle options for group travel, pilgrimages, and social journeys.",
    image: "/images/destinations/group-tour.jpg",
    ctaText: "ENQUIRE GROUP TOUR",
    serviceTypeParam: "Group Travel",
  },
  {
    id: "sightseeing-trips",
    title: "Sightseeing Trips",
    description: "Arrange dedicated cab travel for sightseeing and exploring regional highlights.",
    image: "/images/destinations/sightseeing.jpg",
    ctaText: "PLAN SIGHTSEEING",
    serviceTypeParam: "Sightseeing",
  },
  {
    id: "customized-travel",
    title: "Customized Travel Enquiries",
    description: "Have unique stops or custom travel dates? Share your journey plans directly with our team.",
    image: "/images/destinations/outstation-drive.jpg",
    ctaText: "CUSTOM TRAVEL ENQUIRY",
    serviceTypeParam: "Tour Package",
  },
];
