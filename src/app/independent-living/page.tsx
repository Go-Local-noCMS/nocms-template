import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GoldenDivider } from "@/components/GoldenDivider";
import { GrovePattern } from "@/components/GrovePattern";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Check, ArrowRight } from "lucide-react";

const features = [{"title":"Spacious Residences","desc":"Studios, one-bedroom, and two-bedroom floor plans with full kitchens, walk-in closets, and private patios."},{"title":"Fine Dining","desc":"Restaurant-style dining with seasonal menus crafted by executive chefs. Bistro and private dining available."},{"title":"Active Social Calendar","desc":"Over 200 monthly activities including fitness, art, day trips, entertainment, and lectures."},{"title":"Wellness Programs","desc":"On-site fitness centers, heated pools, yoga studios, personal training, and health screenings."},{"title":"Concierge Services","desc":"Housekeeping, linen service, transportation, maintenance, and 24/7 concierge support."},{"title":"Peace of Mind","desc":"Emergency response systems, on-site care coordination, and the option to add services as needs change."}];

export default function IndependentLivingPage() {
  return (
    <main id="main-content">
      <Hero
        headline="Live Life on\nYour Terms"
        subheadline="Maintenance-free living with resort-style amenities, vibrant social programming, and the freedom to enjoy every day exactly as you choose."
        badge="Our most popular option"
        compact={true}
        showSearch={false}
        ctaText="Schedule a Tour"
        ctaHref="/contact"
        secondaryCtaText="Find a Community"
        secondaryCtaHref="/communities"
      />

      {/* Features — alternating two-column layout instead of uniform grid */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionWrapper entrance="fade-up" className="mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-[40px] bg-accent" />
              <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">What We Offer</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight" style={{ textWrap: "balance" } as React.CSSProperties}>
              Independent Living at Golden Grove
            </h2>
          </MotionWrapper>

          <div className="space-y-6">
            {features.map((feature: { title: string; desc: string }, i: number) => (
              <MotionWrapper key={feature.title} entrance={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 0.06}>
                <div className={`flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-2xl border border-text/5 transition-colors duration-200 hover:bg-surface/50 ${
                  i % 2 === 0 ? "" : "sm:flex-row-reverse sm:text-right"
                }`}>
                  <div className={`h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0`}>
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text mb-2">{feature.title}</h3>
                    <p className="text-text/70 leading-relaxed font-body">{feature.desc}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* Journey steps — horizontal timeline instead of vertical cards */}
      <section className="bg-surface py-24 lg:py-32 relative overflow-hidden">
        <GrovePattern opacity={0.03} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MotionWrapper entrance="fade-up" className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-text tracking-tight">
              Your Journey Starts Here
            </h2>
          </MotionWrapper>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[
                { step: "01", title: "Schedule a Tour", desc: "Visit a community and experience the warmth firsthand." },
                { step: "02", title: "Personal Assessment", desc: "Our team creates a plan tailored to unique needs." },
                { step: "03", title: "Welcome Home", desc: "We handle every detail so you can focus on settling in." },
              ].map((item, i) => (
                <MotionWrapper key={item.step} entrance="fade-up" delay={i * 0.15}>
                  <div className="text-center relative">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-background border-2 border-accent/30 text-accent font-heading text-lg font-bold mb-4 shadow-sm">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-text mb-2">{item.title}</h3>
                    <p className="text-sm text-text/65 leading-relaxed font-body max-w-xs mx-auto">{item.desc}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-background font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner variant="accent" />
    </main>
  );
}
