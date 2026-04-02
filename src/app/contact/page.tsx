"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="main-content">
      <Hero
        headline="Schedule a Tour"
        subheadline="Experience the Golden Grove difference in person. Our team will guide you through our community and answer every question."
        badge="Tours available 7 days a week"
        compact={true}
        showSearch={false}
        ctaText="Call Us Now"
        ctaHref="tel:+18005550123"
        secondaryCtaText="Our Communities"
        secondaryCtaHref="/communities"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info — stacked vertically */}
            <MotionWrapper entrance="slide-left" className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 max-w-[40px] bg-accent" />
                  <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">Get in Touch</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-text mb-4">We're Here to Help</h2>
                <p className="text-text/70 leading-relaxed font-body">
                  Choosing senior living is a significant decision. Our advisors listen, answer questions, and help you explore options without pressure.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Call Us", value: "(800) 555-0123", href: "tel:+18005550123" },
                  { icon: Mail, label: "Email", value: "hello@goldengrove.com", href: "mailto:hello@goldengrove.com" },
                  { icon: MapPin, label: "Main Office", value: "123 Serenity Lane\nMeadowbrook, CA 90210" },
                  { icon: Clock, label: "Tour Hours", value: "Mon\u2013Sun: 9:00 AM \u2013 5:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-background transition-colors duration-200">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary tracking-wide uppercase mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-text hover:text-primary transition-colors font-body whitespace-pre-line">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text font-body whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>

            {/* Contact form */}
            <MotionWrapper entrance="slide-right" className="lg:col-span-3">
              <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-text/5">
                <h3 className="font-heading text-2xl font-bold text-text mb-2">Request a Tour</h3>
                <p className="text-sm text-text/65 mb-8 font-body">Fill out the form and we'll reach out within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                      <Send className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <h4 className="font-heading text-2xl font-bold text-text mb-2">Thank You!</h4>
                    <p className="text-text/70 font-body">We'll contact you within 24 hours to schedule your tour.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-text mb-1.5">First Name</label>
                        <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text placeholder:text-text/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30 transition font-body" placeholder="Jane\u2026" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-text mb-1.5">Last Name</label>
                        <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text placeholder:text-text/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30 transition font-body" placeholder="Smith\u2026" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email</label>
                        <input id="email" name="email" type="email" required autoComplete="email" spellCheck={false} className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text placeholder:text-text/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30 transition font-body" placeholder="jane@example.com\u2026" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">Phone</label>
                        <input id="phone" name="phone" type="tel" autoComplete="tel" className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text placeholder:text-text/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30 transition font-body" placeholder="(555) 123-4567\u2026" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="careType" className="block text-sm font-medium text-text mb-1.5">Care Type of Interest</label>
                      <select id="careType" name="careType" className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30 transition font-body" defaultValue="">
                        <option value="" disabled>Select a care type\u2026</option>
                        <option value="independent">Independent Living</option>
                        <option value="assisted">Assisted Living</option>
                        <option value="memory">Memory Care</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Message (Optional)</label>
                      <textarea id="message" name="message" rows={4} className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text placeholder:text-text/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30 transition font-body resize-none" placeholder="Tell us about your needs or questions\u2026" />
                    </div>
                    <button type="submit" className="w-full bg-primary text-background font-semibold py-4 rounded-xl text-lg shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                      Request My Tour
                    </button>
                    <p className="text-xs text-text/55 text-center">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
