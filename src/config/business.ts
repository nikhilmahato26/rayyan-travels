export interface BusinessInfo {
  name: string;
  tagline: string;
  wordmark: {
    primary: string;
    secondary: string;
  };
  phones: {
    primary: string;
    primaryClean: string; // for tel: and wa.me (8469429773)
    secondary: string;
    secondaryClean: string; // (7048241603)
  };
  email: string;
  location: {
    city: string;
    state: string;
    country: string;
    fullAddress: string;
    serviceAreas: string[];
    googleMapsUrl: string;
  };
  services: string[];
  vehicles: string[];
  permitBadge: string;
  disclaimerNote: string;
}

export const BUSINESS_CONFIG: BusinessInfo = {
  name: "Rayyan Travels & Cab Service",
  tagline: "All India Tour & Cab Service — Your Journey, Our Priority",
  wordmark: {
    primary: "RAYYAN TRAVELS",
    secondary: "ALL INDIA CAB & TOUR SERVICE",
  },
  phones: {
    primary: "+91 8469429773",
    primaryClean: "918469429773",
    secondary: "+91 7048241603",
    secondaryClean: "917048241603",
  },
  email: "jazbisheikh@gmail.com",
  location: {
    city: "Navsari",
    state: "Gujarat",
    country: "India",
    fullAddress: "Office No. 581, Kolva, Taiwad Main Road, District Navsari, Gujarat – 396350.",
    serviceAreas: [
      "All India Tour & Travel",
      "Gujarat Outstation & Intercity",
      "Navsari & Surat Local Pickups",
      "All Major Airport Transfers (Surat, Mumbai, Ahmedabad)",
    ],
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Office No. 581, Kolva, Taiwad Main Road, District Navsari, Gujarat 396350")}`,
  },
  permitBadge: "All Taxi Passing Vehicles • All India Commercial Permit",
  services: [
    "All India Tour Packages",
    "Rental Cab Service",
    "Outstation Round Trips & One Way",
    "Airport Pickup & Drop",
    "Airport Round Trips",
    "Local City Cab Service",
    "Sightseeing & Heritage Tours",
    "Corporate & Business Travel",
    "Weddings & Event Fleets",
    "Group Transportation (Urbania & Tempo Traveller)",
  ],
  vehicles: [
    "Force Urbania",
    "Force Tempo Traveller",
    "Toyota Innova Crysta",
    "Toyota Rumion",
    "SUV (Hyundai Venue & More)",
    "Comfort Sedan",
    "Kia Vehicles",
    "Any Available Vehicle",
  ],
  disclaimerNote: "All taxi passing vehicles with All India Permit. Vehicle availability and rental charges are confirmed by the business at the time of enquiry.",
};
