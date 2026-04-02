"use client";

import { useState, useMemo } from "react";
import { Hero } from "@/components/Hero";
import { CommunityCard } from "@/components/CommunityCard";
import { CTABanner } from "@/components/CTABanner";
import { MotionWrapper } from "@/components/MotionWrapper";
import { communities } from "@/data/communities";

const CARE_FILTERS = ["All", "Independent Living", "Assisted Living", "Memory Care"] as const;

export default function CommunitiesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return communities.filter((c) => {
      const matchesFilter = activeFilter === "All" || c.careTypes.includes(activeFilter);
      const matchesSearch = searchQuery === "" || c.location.toLowerCase().includes(searchQuery.toLowerCase()) || c.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <main id="main-content">
      <Hero
        headline="Our Communities"
        subheadline="Find a Golden Grove community near you. Each location offers a unique blend of care, comfort, and connection."
        badge={`${communities.length} communities nationwide`}
        compact={true}
        showSearch={false}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-3 flex-wrap">
              {CARE_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary ${
                    activeFilter === filter
                      ? "bg-primary text-background shadow-sm"
                      : "bg-surface text-text/70 hover:text-text hover:bg-surface/80"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or location\u2026"
                className="w-full sm:w-72 bg-surface border border-text/10 rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30 transition font-body"
                aria-label="Search communities"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-text/65 mb-8 font-body">
            {filtered.length} {filtered.length === 1 ? "community" : "communities"} found
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((community, i) => (
                <MotionWrapper key={community.name} entrance="fade-up" delay={Math.min(i * 0.05, 0.3)}>
                  <CommunityCard {...community} />
                </MotionWrapper>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-heading text-xl font-semibold text-text mb-2">No communities found</p>
              <p className="text-text/65 font-body">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        heading="Can't Find What You're Looking For?"
        subheading="Our senior living advisors are here to help you find the perfect community for your family."
        ctaText="Talk to an Advisor"
      />
    </main>
  );
}
