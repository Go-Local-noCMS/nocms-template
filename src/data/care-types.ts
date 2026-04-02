export interface CareType {
  icon: "home" | "heart" | "brain";
  title: string;
  description: string;
  href: string;
  features: string[];
}

export const careTypes: CareType[] = [
  {
    icon: "home",
    title: "Independent Living",
    description: "Vibrant, maintenance-free living for active seniors who want to enjoy life fully.",
    href: "/independent-living",
    features: ["Private residences", "Chef-prepared dining", "Social activities", "Fitness & wellness"],
  },
  {
    icon: "heart",
    title: "Assisted Living",
    description: "Personalized support in a warm environment that preserves independence and dignity.",
    href: "/assisted-living",
    features: ["24/7 care team", "Medication management", "Personal care", "Life enrichment"],
  },
  {
    icon: "brain",
    title: "Memory Care",
    description: "Specialized care for those living with Alzheimer's or dementia.",
    href: "/memory-care",
    features: ["Evidence-based programs", "Secure neighborhoods", "Trained partners", "Family support"],
  },
];
