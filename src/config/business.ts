export interface BusinessInfo {
  name: string;
  tagline: string;
  wordmark: {
    primary: string;
    secondary: string;
  };
  phones: {
    primary: string;
    primaryClean: string; // for tel: and wa.me
    additional: string[];
    additionalClean: string[];
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
  disclaimerNote: string;
}

export const BUSINESS_CONFIG: BusinessInfo = {
  name: "Rayyan Travels & Cab Service",
  tagline: "Your Journey, Our Priority",
  wordmark: {
    primary: "RAYYAN TRAVELS",
    secondary: "CAB SERVICE",
  },
  phones: {
    primary: "+91 7048241603",
    primaryClean: "917048241603",
    additional: [
      "+91 8469429773",
      "+91 9510955516",
    ],
    additionalClean: [
      "918469429773",
      "919510955516",
    ],
  },
  email: "jazbisheikh@gmail.com",
  location: {
    city: "Navsari",
    state: "Gujarat",
    country: "India",
    fullAddress: "Office No. 581, Kolva, Taiwad Main Road, District Navsari, Gujarat – 396350.",
    serviceAreas: [
      "Navsari",
      "Surat",
      "South Gujarat",
      "Outstation enquiries across India",
    ],
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Office No. 581, Kolva, Taiwad Main Road, District Navsari, Gujarat 396350")}`,
  },
  services: [
    "Airport Pickup & Drop",
    "Airport Round Trips",
    "Rental Cab Service",
    "Local City Cab Service",
    "Outstation Trips",
    "Local Sightseeing",
    "Tour Packages",
    "Corporate Rides",
    "Weddings, Parties & Events",
    "Group Transportation",
  ],
  vehicles: [
    "Toyota Rumion",
    "Force Urbania",
    "Toyota Innova Crysta",
    "Kia Vehicle",
    "Any Available Vehicle",
  ],
  disclaimerNote: "Vehicle availability and applicable rental charges are confirmed by the business at the time of enquiry.",
};
