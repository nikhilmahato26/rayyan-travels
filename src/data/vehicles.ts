export interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  additionalImages?: string[];
  featured?: boolean;
  tag?: string;
  passingType?: string;
}

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: "force-urbania",
    name: "Force Urbania",
    category: "Luxury Group Transportation",
    description: "Spacious luxury passenger van with premium seating. Available for All India tours, wedding fleets, and VIP group travel.",
    image: "/images/vehicles/urbania/urbania-outdoor.jpg",
    additionalImages: [
      "/images/vehicles/urbania/urbania-grey.jpg",
    ],
    featured: true,
    tag: "Luxury Group Van",
    passingType: "Taxi Passing • All India Permit",
  },
  {
    id: "force-tempo-traveller",
    name: "Tempo Traveller",
    category: "All India Group Travel",
    description: "Commercial Force Tempo Traveller with All India Permit for comfortable group travel, pilgrimages, and outstation holiday tours.",
    image: "/images/vehicles/traveller/tempo-traveller.jpg",
    featured: true,
    tag: "All India Permit",
    passingType: "Commercial Taxi Passing",
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium Executive MPV",
    description: "The gold standard for comfortable family travel, executive transfers, and smooth long-distance journeys across India.",
    image: "/images/vehicles/innova/innova-crysta-real.jpg",
    additionalImages: [
      "/images/vehicles/innova-crysta.jpg",
    ],
    featured: true,
    tag: "Comfort & Executive",
    passingType: "Taxi Passing • Commercial Plate",
  },
  {
    id: "toyota-rumion",
    name: "Toyota Rumion",
    category: "Family & Everyday Travel",
    description: "Rayyan Travels' signature MPV with commercial permit for family trips, outstation travel, and quick airport drops.",
    image: "/images/vehicles/rumion/rumion-front.jpg",
    additionalImages: [
      "/images/vehicles/rumion/rumion-front-angle.jpg",
      "/images/vehicles/rumion/rumion-side.jpg",
      "/images/vehicles/rumion/rumion-rear.jpg",
      "/images/vehicles/rumion/rumion-rear-angle.jpg",
    ],
    featured: true,
    tag: "Verified Fleet",
    passingType: "Taxi Passing • GJ-21 Commercial",
  },
  {
    id: "hyundai-venue-suv",
    name: "SUV (Hyundai Venue & More)",
    category: "Compact SUV Cab",
    description: "Sporty, comfortable compact SUV for city travel, weekend getaways, and highway tours with ample boot space.",
    image: "/images/vehicles/suv/hyundai-venue.jpg",
    featured: true,
    tag: "SUV Travel",
    passingType: "Taxi Passing Available",
  },
  {
    id: "comfort-sedan",
    name: "Comfort Sedan",
    category: "Sedan Cab Service",
    description: "Smooth, air-conditioned sedans for prompt airport pickups, business meetings, and intercity outstation routes.",
    image: "/images/vehicles/sedan/sedan-cab.jpg",
    featured: true,
    tag: "Popular Choice",
    passingType: "Taxi Passing • Commercial Permit",
  },
  {
    id: "kia-vehicles",
    name: "Kia Vehicles",
    category: "Kia Vehicle Options",
    description: "Contact the team to confirm available Kia model and rental details for your travel dates.",
    image: "/images/vehicles/kia-vehicle.jpg",
    featured: false,
    tag: "Modern Comfort",
    passingType: "Taxi Passing Available",
  },
];
