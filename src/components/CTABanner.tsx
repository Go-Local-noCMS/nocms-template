import { MotionWrapper } from "@/components/MotionWrapper";
import { GrovePattern } from "@/components/GrovePattern";
import { ArrowRight, Phone } from "lucide-react";

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  phone?: string;
  variant?: "warm" | "accent";
}

export function CTABanner({
  heading = "Ready to Discover Your Perfect Community?",
  subheading = "Schedule a personal tour and experience the warmth, care, and vibrant lifestyle that sets Golden Grove apart.",
  ctaText = "Schedule Your Tour",
  ctaHref = "/contact",
  phone = "(800) 555-0123",
  variant = "warm",
}: CTABannerProps) {
  return (
    <section className={`relative py-24 lg:py-32 overflow-hidden ${
      variant === "accent"
        ? "bg-accent"
        : "bg-gradient-to-br from-primary via-primary to-primary/90"
    }`}>
      <GrovePattern opacity={0.05} className={variant === "accent" ? "text-primary" : "text-background"} />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <MotionWrapper entrance="fade-up">
          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 ${
              variant === "accent" ? "text-primary" : "text-background"
            }`}
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {heading}
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto leading-relaxed font-body mb-10 ${
              variant === "accent" ? "text-primary/70" : "text-background/80"
            }`}
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ctaHref}
              className={
                variant === "accent"
                  ? "inline-flex items-center gap-2 bg-primary text-background font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
                  : "inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-0.5 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              }
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className={`inline-flex items-center gap-2 border font-medium px-8 py-4 rounded-xl text-lg transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 ${
                variant === "accent"
                  ? "border-primary/20 text-primary/80 hover:bg-primary/10 focus-visible:ring-primary/50"
                  : "border-background/20 text-background/80 hover:bg-background/10 focus-visible:ring-background/50"
              }`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {phone}
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
