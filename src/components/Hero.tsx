import * as motion from "motion/react-client";
import { Search, ArrowRight, ChevronRight } from "lucide-react";
import { GrovePattern } from "@/components/GrovePattern";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  backgroundImage?: string;
  badge?: string;
  compact?: boolean;
}

export function Hero({
  headline = "Where Every Chapter\nIs Golden",
  subheadline = "Discover thoughtfully designed senior living communities where warmth, dignity, and vibrant living come together.",
  ctaText = "Find Your Community",
  ctaHref = "/communities",
  secondaryCtaText = "Schedule a Tour",
  secondaryCtaHref = "/contact",
  showSearch = true,
  searchPlaceholder = "Enter city, state, or zip code\u2026",
  backgroundImage,
  badge = "Trusted by 2,000+ families",
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative ${compact ? "py-20 lg:py-28" : "min-h-[85vh]"} flex items-center overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <>
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          </>
        ) : (
          <>
            <div className="w-full h-full bg-gradient-to-br from-background via-surface/80 to-primary/8" />
            <GrovePattern opacity={0.04} />
          </>
        )}
      </div>

      {/* Decorative — asymmetric warm wash instead of circles */}
      <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[120%] bg-gradient-to-bl from-accent/4 via-transparent to-transparent rounded-full" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className={`${compact ? "max-w-2xl" : "max-w-3xl"}`}>
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
                {badge}
              </span>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            className={`font-heading ${compact ? "text-4xl sm:text-5xl lg:text-6xl" : "text-5xl sm:text-6xl lg:text-7xl"} font-bold text-text tracking-tight leading-[0.95] whitespace-pre-line`}
            style={{ textWrap: "balance" } as React.CSSProperties}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-text/70 leading-relaxed max-w-2xl font-body"
            style={{ textWrap: "balance" } as React.CSSProperties}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {subheadline}
          </motion.p>

          {/* Search bar */}
          {showSearch && (
            <motion.div
              className="mt-10 max-w-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-background border border-text/10 rounded-2xl shadow-xl shadow-text/5 p-2 gap-2 sm:gap-0 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary/30 transition-[transform,box-shadow,color,opacity,gap]">
                <div className="flex items-center flex-1 min-w-0">
                  <Search className="h-5 w-5 text-text/55 ml-4 shrink-0 hidden sm:block" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="flex-1 min-w-0 px-4 py-3 text-text placeholder:text-text/55 bg-transparent border-none outline-none font-body"
                    aria-label="Search for communities by city, state, or zip code"
                    autoComplete="off"
                  />
                </div>
                <button
                  className="w-full sm:w-auto bg-primary text-background font-semibold px-6 py-3 rounded-xl text-sm shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0"
                >
                  Search
                </button>
              </div>
            </motion.div>
          )}

          {/* CTAs (when no search) */}
          {!showSearch && (
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-primary text-background font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {ctaText}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 border-2 border-accent/30 text-accent font-semibold px-8 py-4 rounded-xl text-lg hover:bg-accent/8 hover:border-accent/50 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {secondaryCtaText}
                <ChevronRight className="h-5 w-5 opacity-60" aria-hidden="true" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
