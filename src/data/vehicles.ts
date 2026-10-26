export interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  additionalImages?: string[];
  featured?: boolean;
  tag?: string;
}

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: "toyota-rumion",
    name: "Toyota Rumion",
    category: "Family Travel",
    description: "An option to consider for family and everyday travel requirements.",
    image: "/images/vehicles/rumion/rumion-front.jpg",
    additionalImages: [
      "/images/vehicles/rumion/rumion-front-angle.jpg",
      "/images/vehicles/rumion/rumion-side.jpg",
      "/images/vehicles/rumion/rumion-rear.jpg",
      "/images/vehicles/rumion/rumion-rear-angle.jpg",
    ],
    featured: true,
    tag: "Our Fleet Spotlight",
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium MPV",
    description: "An option for comfortable family and outstation travel enquiries.",
    image: "/images/vehicles/innova-crysta.jpg",
    featured: true,
    tag: "Comfort & Executive",
  },
  {
    id: "force-urbania",
    name: "Force Urbania",
    category: "Group Transportation",
    description: "Enquire about group travel and transportation arrangements.",
    image: "/images/vehicles/force-urbania.jpg",
    featured: true,
    tag: "Group & Event Special",
  },
  {
    id: "kia-vehicle",
    name: "Kia Vehicles",
    category: "Kia Vehicle Options",
    description: "Contact the team to confirm the available Kia model and rental details.",
    image: "/images/vehicles/kia-vehicle.jpg",
    featured: false,
    tag: "Modern Comfort",
  },
];
