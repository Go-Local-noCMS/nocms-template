import { Hero } from "@/components/Hero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTABanner } from "@/components/CTABanner";
import { MotionWrapper } from "@/components/MotionWrapper";
import { faqCategories } from "@/data/faq";

function FaqJsonLd() {
  const allItems = faqCategories.flatMap((cat) => cat.items);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function FaqPage() {
  return (
    <main id="main-content">
      <FaqJsonLd />
      <Hero
        headline="Frequently Asked\nQuestions"
        subheadline="Honest, straightforward answers to help you make the best decision for your family."
        badge="We're here to help"
        compact={true}
        showSearch={false}
        ctaText="Contact Us"
        ctaHref="/contact"
        secondaryCtaText="Our Communities"
        secondaryCtaHref="/communities"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {(faqCategories ?? []).map((category, i) => (
            <MotionWrapper key={category.title} entrance="fade-up" delay={i * 0.1}>
              <div className={`${i > 0 ? "mt-16" : ""}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 max-w-[40px] bg-accent" />
                  <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">{category.title}</span>
                </div>
                <FaqAccordion items={category.items} />
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Still Have Questions?"
        subheading="Our senior living advisors are ready to provide personalized guidance for your unique situation."
        ctaText="Talk to an Advisor"
      />
    </main>
  );
}
