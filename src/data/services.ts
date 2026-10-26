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
    id: "all-india-tours",
    title: "All India Tour Packages",
    shortDescription: "Customized holiday tours, interstate road trips, and pilgrimage journeys across India with all taxi passing vehicles.",
    ctaText: "PLAN ALL INDIA TOUR",
    serviceTypeParam: "All India Tour",
    iconName: "Palmtree",
    featured: true,
  },
  {
    id: "rental-cab-service",
    title: "Rental Cab Service",
    shortDescription: "Daily, weekly, or multi-day commercial rental cabs with experienced drivers for local and outstation travel.",
    ctaText: "ENQUIRE RENTAL CABS",
    serviceTypeParam: "Rental Cab",
    iconName: "Car",
    featured: true,
  },
  {
    id: "group-transportation",
    title: "Tempo Traveller & Urbania",
    shortDescription: "Spacious luxury Force Urbania and commercial Tempo Travellers with All India Permit for group journeys.",
    ctaText: "BOOK GROUP TRAVEL",
    serviceTypeParam: "Group Travel",
    iconName: "Users",
    featured: true,
  },
  {
    id: "airport-pickup-drop",
    title: "Airport Transfers (Surat / Mumbai / Ahmedabad)",
    shortDescription: "Timely airport drops and arrivals pickup in comfortable Sedans, SUVs, and Crysta MPVs.",
    ctaText: "BOOK AIRPORT CAB",
    serviceTypeParam: "Airport Pickup",
    iconName: "Plane",
    featured: true,
  },
  {
    id: "outstation-trips",
    title: "Outstation Journeys (One Way & Round Trip)",
    shortDescription: "Reliable intercity cabs for Maharashtra, Rajasthan, Madhya Pradesh, and across Gujarat.",
    ctaText: "PLAN OUTSTATION TRIP",
    serviceTypeParam: "Outstation Trip",
    iconName: "MapPin",
  },
  {
    id: "suv-sedan-cabs",
    title: "SUV & Sedan Cabs",
    shortDescription: "Clean, air-conditioned Sedans and compact SUVs (Hyundai Venue & more) for business or family travel.",
    ctaText: "ENQUIRE SUV / SEDAN",
    serviceTypeParam: "SUV / Sedan Cab",
    iconName: "Compass",
  },
  {
    id: "local-city-cab",
    title: "Local City Cab Service",
    shortDescription: "Convenient local point-to-point and full-day cab services, subject to availability.",
    ctaText: "BOOK A CITY CAB",
    serviceTypeParam: "Local City Cab",
    iconName: "Repeat",
  },
  {
    id: "sightseeing-trips",
    title: "Sightseeing & Heritage Tours",
    shortDescription: "Explore iconic landmarks, beaches, temples, and cultural sites with dedicated vehicles.",
    ctaText: "PLAN SIGHTSEEING",
    serviceTypeParam: "Sightseeing",
    iconName: "Camera",
  },
  {
    id: "corporate-rides",
    title: "Corporate & Executive Travel",
    shortDescription: "Dependable transportation for corporate meetings, delegations, and executive airport transfers.",
    ctaText: "CORPORATE ENQUIRY",
    serviceTypeParam: "Corporate Ride",
    iconName: "Briefcase",
  },
  {
    id: "weddings-parties-events",
    title: "Weddings & Event Fleets",
    shortDescription: "Coordinated vehicle arrangements for wedding baraats, guest pickups, and family celebrations.",
    ctaText: "BOOK EVENT FLEET",
    serviceTypeParam: "Wedding or Event Transportation",
    iconName: "Gift",
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
    id: "all-india-tours",
    title: "All India Grand Tours",
    description: "Pan-India holiday packages and interstate tours with All India Permit commercial vehicles.",
    image: "/images/destinations/outstation-drive.jpg",
    ctaText: "ENQUIRE ALL INDIA TOUR",
    serviceTypeParam: "All India Tour",
  },
  {
    id: "group-tours",
    title: "Urbania & Traveller Group Tours",
    description: "Luxury group tours in Force Urbania & Tempo Traveller with ample luggage space and pushback seats.",
    image: "/images/vehicles/traveller/tempo-traveller.jpg",
    ctaText: "ENQUIRE GROUP TOUR",
    serviceTypeParam: "Group Travel",
  },
  {
    id: "gujarat-getaways",
    title: "Gujarat Scenic Getaways",
    description: "Statue of Unity, Gir Forest, Somnath, Dwarka, Saputara, and Kutch road trips.",
    image: "/images/destinations/gujarat-tour.jpg",
    ctaText: "PLAN GUJARAT TOUR",
    serviceTypeParam: "Tour Package",
  },
  {
    id: "family-tours",
    title: "Family Vacation Trips",
    description: "Comfortable Toyota Innova Crysta and Rumion MPVs tailored for family vacations.",
    image: "/images/destinations/family-tour.jpg",
    ctaText: "ENQUIRE FAMILY TOUR",
    serviceTypeParam: "Tour Package",
  },
  {
    id: "outstation-journeys",
    title: "Interstate Outstation Journeys",
    description: "Direct highway journeys to Mumbai, Pune, Shirdi, Goa, Udaipur, Jaipur, and beyond.",
    image: "/images/destinations/outstation-drive.jpg",
    ctaText: "PLAN OUTSTATION TRIP",
    serviceTypeParam: "Outstation Trip",
  },
  {
    id: "customized-travel",
    title: "Customized Pilgrimage & Leisure",
    description: "Share your specific route, multi-city stops, and passenger count for a tailored quote.",
    image: "/images/destinations/sightseeing.jpg",
    ctaText: "CUSTOM TRAVEL ENQUIRY",
    serviceTypeParam: "Tour Package",
  },
];
