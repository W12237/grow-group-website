"use client"

import React, { useState } from "react"
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll"
import { SectionLabel } from "@/components/shared/section-label"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  label?: string
  headline?: string
  items: FAQItem[]
  accentColor?: string
}

export function FAQSection({
  label = "FAQ",
  headline = "Frequently asked questions",
  items,
  accentColor = "var(--division-accent)",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-[#000823]/[0.06]">
      <div className="max-w-3xl mx-auto">
        <RevealOnScroll className="mb-12">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.1]">
            {headline}
          </h2>
        </RevealOnScroll>

        <div className="divide-y divide-[#000823]/[0.06]">
          {items.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 50}>
              <div>
                <button
                  className="w-full flex items-center justify-between py-5 text-start group cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-[15px] font-medium text-[#000823]/80 group-hover:text-[#000823] transition-colors pe-8">
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full border border-[#000823]/10 flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: openIndex === i ? accentColor : "transparent",
                      borderColor: openIndex === i ? accentColor : undefined,
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                    >
                      <path
                        d="M5 2V8M2 5H8"
                        stroke={openIndex === i ? "#f8f8f8" : "#000823"}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        opacity={openIndex === i ? 1 : 0.35}
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === i ? "300px" : "0px",
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p className="text-sm text-[#000823]/50 leading-relaxed pb-5 pe-12 font-normal">
                    {item.answer}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
