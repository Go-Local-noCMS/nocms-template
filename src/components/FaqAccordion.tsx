"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items?: FaqItem[];
}

export function FaqAccordion({ items = [] }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {(items ?? []).map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`bg-background rounded-2xl border transition-colors duration-200 ${
              isOpen ? "border-primary/20 shadow-sm" : "border-text/5"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg font-semibold text-text pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-primary" : "text-text/30"
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-200"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6">
                  <p className="text-text/70 leading-relaxed font-body">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
