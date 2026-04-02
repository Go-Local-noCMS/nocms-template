export interface Community {
  name: string;
  location: string;
  image?: string;
  careTypes: string[];
  rating?: number;
  reviewCount?: number;
  startingPrice?: string;
  href: string;
}

export const communities: Community[] = [
  {
    name: "Golden Grove at Meadowbrook",
    location: "Meadowbrook, CA",
    careTypes: ["Independent Living", "Assisted Living", "Memory Care"],
    rating: 4.9,
    reviewCount: 127,
    startingPrice: "$3,200",
    href: "/communities",
  },
  {
    name: "Golden Grove at Riverside",
    location: "Riverside, OR",
    careTypes: ["Independent Living", "Assisted Living"],
    rating: 4.8,
    reviewCount: 89,
    startingPrice: "$2,800",
    href: "/communities",
  },
  {
    name: "Golden Grove at Harbor View",
    location: "Harbor View, WA",
    careTypes: ["Assisted Living", "Memory Care"],
    rating: 4.9,
    reviewCount: 156,
    startingPrice: "$3,500",
    href: "/communities",
  },
  {
    name: "Golden Grove at Willowbrook",
    location: "Willowbrook, TX",
    careTypes: ["Independent Living", "Assisted Living", "Memory Care"],
    rating: 4.7,
    reviewCount: 73,
    startingPrice: "$2,600",
    href: "/communities",
  },
  {
    name: "Golden Grove at Silver Lake",
    location: "Silver Lake, AZ",
    careTypes: ["Independent Living"],
    rating: 4.8,
    reviewCount: 94,
    startingPrice: "$2,400",
    href: "/communities",
  },
  {
    name: "Golden Grove at Pinecrest",
    location: "Pinecrest, CO",
    careTypes: ["Assisted Living", "Memory Care"],
    rating: 4.9,
    reviewCount: 112,
    startingPrice: "$3,100",
    href: "/communities",
  },
];
