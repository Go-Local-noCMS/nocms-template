"use client";

import { useState, useCallback } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface NavbarProps {
  logo?: string;
  links?: NavLink[];
  phone?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Navbar({
  logo = "Golden Grove",
  links = [],
  phone = "(800) 555-0123",
  ctaText = "Schedule a Tour",
  ctaHref = "/contact",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent, label: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(label);
    } else if (e.key === "Escape") {
      setOpenDropdown(null);
    }
  }, [toggleDropdown]);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-text/5">
      {/* Skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
        Skip to main content
      </a>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-background font-heading text-lg font-bold">G</span>
            </div>
            <span className="font-heading text-xl font-semibold text-text tracking-tight">
              {logo}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {(links ?? []).map((link) =>
              link.children && link.children.length > 0 ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-text/80 hover:text-text transition-colors rounded-lg hover:bg-surface"
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown(link.label)}
                    onKeyDown={(e) => handleDropdownKeyDown(e, link.label)}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 opacity-50 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-background border border-text/10 shadow-xl shadow-text/5 py-2">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-text/80 hover:text-text hover:bg-surface transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-text/80 hover:text-text transition-colors rounded-lg hover:bg-surface"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 text-sm text-text/70 hover:text-text transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{phone}</span>
            </a>
            <a
              href={ctaHref}
              className="bg-primary text-background font-semibold px-6 py-2.5 rounded-xl text-sm shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-[transform,box-shadow,color,opacity,gap] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {ctaText}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6 text-text" /> : <Menu className="h-6 w-6 text-text" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-text/5 py-4 space-y-1">
            {(links ?? []).map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-text/80 hover:text-text hover:bg-surface rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && link.children.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    className="block pl-8 pr-4 py-2.5 text-sm text-text/70 hover:text-text hover:bg-surface rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
            <div className="pt-4 px-4 space-y-3 border-t border-text/5 mt-4">
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-sm text-text/70"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {phone}
              </a>
              <a
                href={ctaHref}
                className="block text-center bg-primary text-background font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary/15"
              >
                {ctaText}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
