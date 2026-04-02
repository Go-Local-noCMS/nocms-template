import { MotionWrapper } from "@/components/MotionWrapper";
import { Home, Heart, Brain, ArrowRight } from "lucide-react";

interface CareType {
  icon: "home" | "heart" | "brain";
  title: string;
  description: string;
  href: string;
  features: string[];
}

interface CareTypesGridProps {
  heading?: string;
  subheading?: string;
  careTypes?: CareType[];
}

const iconMap = {
  home: Home,
  heart: Heart,
  brain: Brain,
};

const defaultCareTypes: CareType[] = [
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
    description: "Personalized support in a warm, home-like environment that preserves dignity.",
    href: "/assisted-living",
    features: ["24/7 care team", "Medication management", "Personal care", "Life enrichment"],
  },
  {
    icon: "brain",
    title: "Memory Care",
    description: "Specialized, compassionate care for those living with Alzheimer's or dementia.",
    href: "/memory-care",
    features: ["Evidence-based programs", "Secure neighborhoods", "Trained partners", "Family support"],
  },
];

export function CareTypesGrid({
  heading = "Find the Right Level of Care",
  subheading = "Every journey is unique. Our communities offer a continuum of care that adapts to evolving needs.",
  careTypes = defaultCareTypes,
}: CareTypesGridProps) {
  return (
    <section className="bg-surface py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Left-aligned header with golden rule */}
        <MotionWrapper entrance="fade-up" className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[40px] bg-accent" />
            <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
              Levels of Care
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight" style={{ textWrap: "balance" } as React.CSSProperties}>
            {heading}
          </h2>
          <p className="mt-4 text-lg text-text/70 leading-relaxed font-body" style={{ textWrap: "balance" } as React.CSSProperties}>
            {subheading}
          </p>
        </MotionWrapper>

        {/* Cards — asymmetric heights, staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {(careTypes ?? []).map((care, i) => {
            const Icon = iconMap[care.icon] || Heart;
            return (
              <MotionWrapper key={care.title} entrance="fade-up" delay={i * 0.12}>
                <a
                  href={care.href}
                  className={`group block rounded-2xl border border-text/5 overflow-hidden transition-[transform,box-shadow,color,opacity,gap] duration-300 h-full ${
                    i === 1
                      ? "bg-primary text-background shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2"
                      : "bg-background hover:shadow-xl hover:shadow-text/5 hover:-translate-y-1"
                  }`}
                >
                  {/* Accent bar at top */}
                  <div className={`h-1 ${i === 1 ? "bg-accent" : "bg-gradient-to-r from-accent/40 via-accent/20 to-transparent"}`} />

                  <div className="p-8 lg:p-10">
                    {/* Icon */}
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                      i === 1
                        ? "bg-accent/20 text-accent"
                        : "bg-primary/8 text-primary group-hover:bg-primary group-hover:text-background"
                    }`}>
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>

                    <h3 className={`font-heading text-2xl font-bold mb-3 ${i === 1 ? "" : "text-text"}`}>
                      {care.title}
                    </h3>
                    <p className={`leading-relaxed mb-6 font-body ${i === 1 ? "text-background/80" : "text-text/70"}`}>
                      {care.description}
                    </p>

                    {/* Features as inline pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {(care.features ?? []).map((feature) => (
                        <span key={feature} className={`text-xs font-medium px-3 py-1 rounded-full ${
                          i === 1
                            ? "bg-background/10 text-background/80"
                            : "bg-surface text-text/70"
                        }`}>
                          {feature}
                        </span>
                      ))}
                    </div>

                    <span className={`inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-[transform,box-shadow,color,opacity,gap] ${
                      i === 1 ? "text-accent" : "text-primary"
                    }`}>
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
