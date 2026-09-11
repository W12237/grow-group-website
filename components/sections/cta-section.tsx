"use client"

import React from "react"
import Link from "next/link"
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll"
import { SectionLabel } from "@/components/shared/section-label"

interface CTASectionProps {
  label?: string
  headline: string
  description: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  buttonText?: string
  buttonHref?: string
  accentColor?: string
}

export function CTASection({
  label,
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  buttonText,
  buttonHref,
  accentColor,
}: CTASectionProps) {
  const resolvedPrimary = primaryCTA || {
    label: buttonText || "Get in touch",
    href: buttonHref || "/contact",
  }

  return (
    <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-[#000823]/[0.06]">
      <div className="max-w-3xl mx-auto text-center">
        <RevealOnScroll>
          {label && (
            <div className="mb-4">
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6 text-[#000823]">
            {headline}
          </h2>
          <p className="text-[15px] text-[#000823]/60 leading-relaxed mb-10 max-w-xl mx-auto font-normal">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={resolvedPrimary.href}
              className="px-7 py-3.5 rounded-xl text-[12px] tracking-[0.12em] uppercase font-semibold transition-all duration-200 hover:opacity-85 shadow-sm"
              style={{
                backgroundColor: accentColor || "#000823",
                color: "#f8f8f8",
              }}
            >
              {resolvedPrimary.label}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="px-7 py-3.5 rounded-xl border border-[#000823]/10 bg-white text-[12px] tracking-[0.12em] uppercase font-medium text-[#000823]/60 hover:text-[#000823] hover:border-[#000823]/20 transition-all duration-200"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
