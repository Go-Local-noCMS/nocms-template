import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CareTypesGrid } from "@/components/CareTypesGrid";
import { StatsBar } from "@/components/StatsBar";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTABanner } from "@/components/CTABanner";
import { GoldenDivider } from "@/components/GoldenDivider";
import { GrovePattern } from "@/components/GrovePattern";
import { CommunityCard } from "@/components/CommunityCard";
import { MotionWrapper } from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "Golden Grove Senior Living | Independent, Assisted & Memory Care Communities",
  description: "Discover thoughtfully designed senior living communities where warmth, dignity, and vibrant living come together. Independent living, assisted living, and memory care across 40+ locations.",
  openGraph: {
    title: "Golden Grove Senior Living",
    description: "Where every chapter is golden. Find your perfect senior living community.",
    type: "website",
  },
};
import { ArrowRight, Utensils, Activity, Palette, TreePine } from "lucide-react";
import { communities } from "@/data/communities";
import { blogPosts } from "@/data/blog-posts";

export default function HomePage() {
  const featuredCommunities = communities.slice(0, 3);

  return (
    <main id="main-content">
      <Hero />
      <StatsBar />
      <CareTypesGrid />

      {/* Featured Communities */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionWrapper entrance="fade-up" className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight" style={{ textWrap: "balance" } as React.CSSProperties}>
              Find Your Place to Thrive
            </h2>
            <p className="mt-4 text-lg text-text/70 max-w-2xl mx-auto leading-relaxed font-body" style={{ textWrap: "balance" } as React.CSSProperties}>
              Each Golden Grove community reflects its neighborhood, designed to feel like home from day one.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredCommunities.map((community, i) => (
              <MotionWrapper key={community.name} entrance="fade-up" delay={i * 0.1}>
                <CommunityCard {...community} />
              </MotionWrapper>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/communities"
              className="inline-flex items-center gap-2 border-2 border-text/10 text-text font-semibold px-8 py-4 rounded-xl hover:bg-surface hover:border-text/20 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-primary"
            >
              View All Communities
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* Lifestyle — ASYMMETRIC split layout instead of uniform grid */}
      <section className="bg-surface py-24 lg:py-32 relative overflow-hidden">
        <GrovePattern opacity={0.03} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: content */}
            <MotionWrapper entrance="slide-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 max-w-[40px] bg-accent" />
                <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
                  Life at Golden Grove
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight leading-tight mb-6">
                More Than a Home &mdash;<br />A Lifestyle
              </h2>
              <p className="text-text/70 leading-relaxed font-body mb-10 max-w-lg">
                From farm-to-table dining to art studios and nature trails, every day offers new ways to engage, grow, and connect.
              </p>

              {/* Features as horizontal rows instead of grid cards */}
              <div className="space-y-4">
                {[
                  { icon: Utensils, title: "Chef-Crafted Dining", desc: "Seasonal menus by executive chefs with dietary accommodations." },
                  { icon: Activity, title: "Wellness & Fitness", desc: "Fitness centers, yoga, aquatics, and personalized programs." },
                  { icon: Palette, title: "Arts & Culture", desc: "Studios, music, lectures, book clubs, and cultural outings." },
                  { icon: TreePine, title: "Nature & Gardens", desc: "Walking paths, gardens, courtyards, and outdoor living." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-background transition-colors duration-200">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-text">{item.title}</h3>
                      <p className="text-sm text-text/65 font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>

            {/* Right: image placeholder with editorial frame */}
            <MotionWrapper entrance="slide-right">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 via-surface to-accent/10 border border-text/5 overflow-hidden">
                  {/* Image slot — editorial photography of community life */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                        <TreePine className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="text-sm text-text/30 font-body">Community lifestyle photo</p>
                    </div>
                  </div>
                </div>
                {/* Offset accent card */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-primary rounded-2xl p-5 shadow-lg shadow-accent/20 max-w-[200px]">
                  <p className="font-heading text-3xl font-bold" style={{ fontVariantNumeric: "tabular-nums" }}>200+</p>
                  <p className="text-sm text-primary/70 font-medium">Activities each month</p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Blog Preview — horizontal card layout */}
      {blogPosts.length > 0 && (
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MotionWrapper entrance="fade-up" className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 max-w-[40px] bg-accent" />
                  <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">Resources</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text tracking-tight">
                  Helpful Insights for Families
                </h2>
              </div>
              <a
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-[transform,box-shadow,color,opacity,gap]"
              >
                View All
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </MotionWrapper>

            {/* First post: horizontal feature card. Rest: standard cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {blogPosts.slice(0, 1).map((post) => (
                <MotionWrapper key={post.slug} entrance="fade-up">
                  <a href={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row bg-surface rounded-2xl border border-text/5 overflow-hidden hover:shadow-lg transition-[transform,box-shadow,color,opacity,gap] duration-300 h-full">
                    {post.coverImage ? (
                      <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden shrink-0">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover motion-safe:group-hover:scale-105 transition-transform duration-500" width={400} height={300} loading="lazy" />
                      </div>
                    ) : null}
                    <div className="p-6 flex flex-col justify-center">
                      <p className="text-xs text-primary font-medium mb-2">{post.date}</p>
                      <h3 className="font-heading text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">{post.title}</h3>
                      <p className="text-sm text-text/65 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                  </a>
                </MotionWrapper>
              ))}

              <div className="grid grid-cols-1 gap-6">
                {blogPosts.slice(1, 3).map((post, i) => (
                  <MotionWrapper key={post.slug} entrance="fade-up" delay={(i + 1) * 0.1}>
                    <a href={`/blog/${post.slug}`} className="group flex items-center gap-5 bg-surface rounded-2xl border border-text/5 p-5 hover:shadow-md transition-[transform,box-shadow,color,opacity,gap] duration-300">
                      <div className="shrink-0 h-20 w-20 rounded-xl bg-primary/8 flex items-center justify-center overflow-hidden">
                        {post.coverImage ? (
                          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" width={80} height={80} loading="lazy" />
                        ) : (
                          <span className="text-2xl text-primary/30 font-heading font-bold">{i + 2}</span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-primary font-medium mb-1">{post.date}</p>
                        <h3 className="font-heading text-base font-bold text-text group-hover:text-primary transition-colors truncate">{post.title}</h3>
                        <p className="text-sm text-text/65 line-clamp-1">{post.excerpt}</p>
                      </div>
                    </a>
                  </MotionWrapper>
                ))}
              </div>
            </div>

            <div className="sm:hidden text-center mt-8">
              <a href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                View All Articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </main>
  );
}
