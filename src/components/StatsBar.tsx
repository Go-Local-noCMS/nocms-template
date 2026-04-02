import { MotionWrapper } from "@/components/MotionWrapper";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: "25+", label: "Years of Excellence" },
  { value: "40+", label: "Communities" },
  { value: "5,000+", label: "Residents Served" },
  { value: "98%", label: "Satisfaction" },
];

export function StatsBar({ stats = defaultStats }: StatsBarProps) {
  return (
    <section className="bg-text py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {(stats ?? []).map((stat, i) => (
            <MotionWrapper key={stat.label} entrance="fade-up" delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <p className="font-heading text-4xl sm:text-5xl font-bold text-accent tracking-tight" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-background/65 font-medium">
                  {stat.label}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
