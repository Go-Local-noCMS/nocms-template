"use client";

import { useState, useCallback } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  relationship: string;
  community: string;
  rating: number;
}

interface TestimonialsSectionProps {
  heading?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
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

export function TestimonialsSection({
  heading = "Stories From Our Family",
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  const [active, setActive] = useState(0);
  const items = testimonials ?? [];
  if (items.length === 0) return null;

  const current = items[active];

  const goNext = useCallback(() => setActive((p) => (p === items.length - 1 ? 0 : p + 1)), [items.length]);
  const goPrev = useCallback(() => setActive((p) => (p === 0 ? items.length - 1 : p - 1)), [items.length]);

  return (
    <section className="bg-primary py-24 lg:py-32 relative overflow-hidden" role="region" aria-roledescription="carousel" aria-label="Testimonials">
      {/* Decorative large quote mark */}
      <div className="absolute top-12 right-12 font-heading text-[20rem] leading-none text-background/[0.03] select-none pointer-events-none" aria-hidden="true">
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned, minimal */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-[40px] bg-accent" />
          <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
            {heading}
          </span>
        </div>

        {/* Quote — oversized serif */}
        <div className="min-h-[280px] flex flex-col justify-between" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl text-background leading-snug font-medium mb-10">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div>
                <p className="font-heading font-semibold text-background text-lg">{current.author}</p>
                <p className="text-background/75 text-sm">{current.relationship}</p>
                <p className="text-accent text-sm font-medium mt-1">{current.community}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation — bottom row */}
        {items.length > 1 && (
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-background/10">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-11 w-11 flex items-center justify-center rounded-full transition-[transform,box-shadow,color,opacity,gap] ${
                    i === active ? "" : "hover:bg-background/5"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className={`block rounded-full transition-[transform,box-shadow,color,opacity,gap] duration-300 ${
                    i === active ? "h-3 w-8 bg-accent" : "h-2 w-2 bg-background/25"
                  }`} />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="h-11 w-11 rounded-full border border-background/25 flex items-center justify-center text-background/75 hover:text-background hover:border-background/30 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                className="h-11 w-11 rounded-full border border-background/25 flex items-center justify-center text-background/75 hover:text-background hover:border-background/30 transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
