import { Phone, Mail, MapPin, Heart, ArrowUpRight } from "lucide-react";
import { GrovePattern } from "@/components/GrovePattern";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  companyName?: string;
  tagline?: string;
  phone?: string;
  email?: string;
  address?: string;
  columns?: FooterColumn[];
}

export function Footer({
  companyName = "Golden Grove Senior Living",
  tagline = "Where every chapter is golden",
  phone = "(800) 555-0123",
  email = "hello@goldengrove.com",
  address = "123 Serenity Lane, Meadowbrook, CA 90210",
  columns = [],
}: FooterProps) {
  const defaultColumns: FooterColumn[] = columns.length > 0 ? columns : [
    {
      title: "Our Communities",
      links: [
        { label: "Find a Community", href: "/communities" },
        { label: "Independent Living", href: "/independent-living" },
        { label: "Assisted Living", href: "/assisted-living" },
        { label: "Memory Care", href: "/memory-care" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Guides", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "For Families",
      links: [
        { label: "Schedule a Tour", href: "/contact" },
        { label: "Care Assessment", href: "/contact" },
        { label: "Pricing Guide", href: "/faq" },
        { label: "Careers", href: "/about" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-background relative overflow-hidden">
      {/* Golden accent line */}
      <div className="h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />

      {/* Grove pattern background */}
      <GrovePattern opacity={0.06} className="text-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center">
                  <span className="text-primary font-heading text-lg font-bold">G</span>
                </div>
                <span className="font-heading text-xl font-semibold tracking-tight">
                  {companyName}
                </span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed max-w-xs font-body italic">
                {tagline}
              </p>
            </div>

            <div className="space-y-3">
              <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 text-sm text-background/80 hover:text-accent transition-colors group">
                <Phone className="h-4 w-4 text-accent/70 group-hover:text-accent transition-colors" aria-hidden="true" />
                {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-background/80 hover:text-accent transition-colors group">
                <Mail className="h-4 w-4 text-accent/70 group-hover:text-accent transition-colors" aria-hidden="true" />
                {email}
              </a>
              <div className="flex items-start gap-3 text-sm text-background/80">
                <MapPin className="h-4 w-4 text-accent/70 mt-0.5 shrink-0" aria-hidden="true" />
                {address}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {defaultColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="font-heading text-sm font-semibold text-background tracking-wide uppercase mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/80 hover:text-background transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-50 transition-[transform,box-shadow,color,opacity,gap]" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA column */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-semibold text-background tracking-wide uppercase mb-4">
              Get Started
            </h3>
            <p className="text-sm text-background/80 mb-4 leading-relaxed">
              Discover the community that feels like home. Schedule your personal tour today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-accent/90 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Schedule a Tour
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-background/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/75">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <p className="text-xs text-background/75 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent/80 fill-accent/80" aria-hidden="true" /> for families who care
          </p>
        </div>
      </div>
    </footer>
  );
}
