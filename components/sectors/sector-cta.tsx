"use client"

import React from "react"
import Link from "next/link"
import { SectorIcon } from "@/components/shared/sector-icon"

interface SectorCtaProps {
  headline: string
  headlineAr: string
  description: string
  descriptionAr: string
  sectorSlug?: string
  accentColor: string
  accentTint?: string
  isAr?: boolean
  primaryText?: string
  primaryTextAr?: string
  secondaryText?: string
  secondaryTextAr?: string
  secondaryHref?: string
}

export function SectorCta({
  headline,
  headlineAr,
  description,
  descriptionAr,
  sectorSlug = "tech",
  accentColor,
  accentTint,
  isAr = false,
  primaryText,
  primaryTextAr,
  secondaryText,
  secondaryTextAr,
  secondaryHref = "/contact",
}: SectorCtaProps) {
  const tint = accentTint || accentColor

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#000823] text-white relative overflow-hidden">
      {/* ── Ambient Radial Sector Gradient ──────────────────────────────── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full blur-[150px] opacity-25 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, ${tint} 40%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sector Icon Lockup */}
        <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-white/[0.08] border border-white/15 mb-8 backdrop-blur-md shadow-lg">
          <SectorIcon slug={sectorSlug} size={32} color={accentColor} />
        </div>

        {/* Outcome-focused Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          {isAr ? headlineAr : headline}
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {isAr ? descriptionAr : description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs tracking-[0.14em] uppercase font-semibold text-white shadow-xl hover:opacity-90 active:scale-[0.99] transition-all duration-200"
            style={{ backgroundColor: accentColor }}
          >
            <span>{isAr ? (primaryTextAr || "ابدأ محادثة معنا") : (primaryText || "Start a Conversation")}</span>
            <span className="ltr:ml-2 rtl:mr-2 font-mono">→</span>
          </Link>

          <Link
            href={secondaryHref}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white text-xs tracking-[0.14em] uppercase font-semibold hover:bg-white/[0.08] hover:border-white/40 active:scale-[0.99] transition-all duration-200"
          >
            <span>{isAr ? (secondaryTextAr || "استكشف باقي القطاعات") : (secondaryText || "Explore Other Sectors")}</span>
            <span className="ltr:ml-2 rtl:mr-2 font-mono">↓</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
