export interface Testimonial {
  quote: string;
  author: string;
  relationship: string;
  community: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Moving my mother to Golden Grove was the best decision our family ever made. The care team treats her like their own family, and she's more active and joyful than she's been in years.",
    author: "Sarah Mitchell",
    relationship: "Daughter of Resident",
    community: "Golden Grove at Meadowbrook",
    rating: 5,
  },
  {
    quote: "I was hesitant about leaving my home, but from the moment I walked in, I knew this was where I belonged. The dining is restaurant-quality, and I've never felt more alive.",
    author: "Robert Chen",
    relationship: "Resident, Independent Living",
    community: "Golden Grove at Riverside",
    rating: 5,
  },
  {
    quote: "The memory care program gave us our dad back. The specialized activities engage him in ways we couldn't manage at home. The staff truly understands dementia care.",
    author: "Maria Santos",
    relationship: "Daughter of Resident",
    community: "Golden Grove at Harbor View",
    rating: 5,
  },
];
