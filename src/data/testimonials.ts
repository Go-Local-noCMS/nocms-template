export interface Testimonial {
  quote: string;
  author: string;
  relation: string;
  photo: string;
  rating: number;
  careType?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Moving Mom to this community was the best decision our family ever made. The staff treats every resident like family, and she has never been happier.",
    author: "Sarah Mitchell",
    relation: "Daughter of Resident",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    careType: "assisted-living",
  },
  {
    quote: "I was nervous about giving up my home, but this community has given me a richer life than I ever imagined. The activities, the friendships, the care — it is truly exceptional.",
    author: "Robert Chen",
    relation: "Resident since 2022",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    careType: "independent-living",
  },
  {
    quote: "The memory care program gave us peace of mind we had not felt in years. Knowing Dad is safe, engaged, and cared for by trained professionals means everything.",
    author: "Jennifer Park",
    relation: "Daughter of Memory Care Resident",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    careType: "memory-care",
  },
  {
    quote: "What surprised me most was how vibrant life is here. Between the fitness classes, art workshops, and social events, my calendar is fuller than it was ten years ago.",
    author: "Margaret Torres",
    relation: "Independent Living Resident",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
    careType: "independent-living",
  },
  {
    quote: "The nursing staff goes above and beyond. They know my husband by name, know his preferences, and treat him with such dignity. We could not ask for more.",
    author: "Linda Kowalski",
    relation: "Wife of Resident",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: 5,
    careType: "assisted-living",
  },
  {
    quote: "We used respite care while I recovered from surgery. The experience was so positive that Dad decided to move in permanently. He says it was the best choice he ever made.",
    author: "David Okafor",
    relation: "Son of Resident",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    careType: "respite-care",
  },
];
