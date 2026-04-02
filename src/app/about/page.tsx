import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { CTABanner } from "@/components/CTABanner";
import { GoldenDivider } from "@/components/GoldenDivider";
import { GrovePattern } from "@/components/GrovePattern";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Heart, Users, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main id="main-content">
      <Hero
        headline="Our Story"
        subheadline="For over 25 years, Golden Grove has been guided by a simple belief: every person deserves to age with dignity, purpose, and joy."
        badge="Established 1999"
        compact={true}
        showSearch={false}
        ctaText="Join Our Family"
        ctaHref="/contact"
        secondaryCtaText="Our Communities"
        secondaryCtaHref="/communities"
      />

      <StatsBar />

      {/* Mission — full-bleed image on right, content on left */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <MotionWrapper entrance="slide-left" className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 max-w-[40px] bg-accent" />
                <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">Our Mission</span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight leading-tight mb-8">
                Redefining What It Means to Age Well
              </h2>
              <div className="space-y-5 text-text/70 leading-relaxed font-body text-lg">
                <p>
                  Golden Grove was founded on the conviction that senior living should feel less like a facility and more like a five-star community you choose to call home.
                </p>
                <p>
                  Today, with over 40 communities across the country, we remain family-owned and mission-driven. Every decision &mdash; from the meals our chefs prepare to the care programs we develop &mdash; is guided by one question: <em className="text-text font-medium not-italic">would this be good enough for our own family?</em>
                </p>
              </div>
            </MotionWrapper>

            {/* Image placeholder — tall editorial crop */}
            <MotionWrapper entrance="slide-right" className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-primary/8 via-surface to-accent/8 border border-text/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="h-10 w-10 text-primary/20 mx-auto mb-2" aria-hidden="true" />
                      <p className="text-sm text-text/20 font-body">Founder portrait</p>
                    </div>
                  </div>
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-background rounded-2xl p-5 shadow-lg">
                  <p className="font-heading text-3xl font-bold" style={{ fontVariantNumeric: "tabular-nums" }}>25+</p>
                  <p className="text-sm text-background/75">Years of care</p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* Values — 2x2 grid with unique styling per card */}
      <section className="bg-surface py-24 lg:py-32 relative overflow-hidden">
        <GrovePattern opacity={0.03} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionWrapper entrance="fade-up" className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight">
              What We Stand For
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: "Compassion First", desc: "Every interaction is rooted in empathy, patience, and genuine care for the whole person.", bg: "bg-accent/8", iconColor: "text-accent" },
              { icon: Users, title: "Community Driven", desc: "We foster belonging through shared experiences, meaningful connection, and mutual respect.", bg: "bg-primary/8", iconColor: "text-primary" },
              { icon: Shield, title: "Trusted & Safe", desc: "Industry-leading safety protocols with transparency families can count on, every single day.", bg: "bg-primary/8", iconColor: "text-primary" },
              { icon: Sparkles, title: "Enriched Living", desc: "We believe every day should hold something to look forward to — a reason to get out of bed smiling.", bg: "bg-accent/8", iconColor: "text-accent" },
            ].map((value, i) => (
              <MotionWrapper key={value.title} entrance="fade-up" delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 border border-text/5 h-full group hover:shadow-lg transition-[transform,box-shadow,color,opacity,gap] duration-300">
                  <div className={`h-12 w-12 rounded-xl ${value.bg} flex items-center justify-center ${value.iconColor} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text mb-2">{value.title}</h3>
                  <p className="text-text/70 leading-relaxed font-body">{value.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionWrapper entrance="fade-up" className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-text tracking-tight">
              Led by People Who Care
            </h2>
            <p className="mt-4 text-lg text-text/70 max-w-2xl mx-auto font-body" style={{ textWrap: "balance" } as React.CSSProperties}>
              Decades of experience in senior care, hospitality, and healthcare &mdash; united by shared passion.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Eleanor Graves", role: "CEO & Co-Founder", initials: "EG" },
              { name: "James Whitfield", role: "Chief Operating Officer", initials: "JW" },
              { name: "Dr. Lisa Chen", role: "Chief Medical Officer", initials: "LC" },
              { name: "Marcus Rivera", role: "VP of Resident Experience", initials: "MR" },
            ].map((person, i) => (
              <MotionWrapper key={person.name} entrance="fade-up" delay={i * 0.1}>
                <div className="group text-center">
                  {/* Photo placeholder — square with rounded top */}
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/8 to-surface border border-text/5 overflow-hidden flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <span className="font-heading text-3xl font-bold text-primary/30">{person.initials}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-text">{person.name}</h3>
                  <p className="text-sm text-text/65 mt-0.5">{person.role}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
