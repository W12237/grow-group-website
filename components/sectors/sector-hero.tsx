"use client"

import React from "react"
import Link from "next/link"
import { SectorIcon } from "@/components/shared/sector-icon"

interface SectorHeroProps {
  sectorSlug: string
  sectorNumber: string
  sectorName: string
  sectorNameAr: string
  headline: string
  headlineAr: string
  description: string
  descriptionAr: string
  accentColor: string
  accentTint: string
  isAr?: boolean
  heroImage?: string
  heroImageAlt?: string
  contextTag?: string
  contextTagAr?: string
  primaryCtaText?: string
  primaryCtaTextAr?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaTextAr?: string
  secondaryCtaHref?: string
  secondaryHref?: string
  visualType?: string
  children?: React.ReactNode
}

export function SectorHero({
  sectorSlug,
  sectorNumber,
  sectorName,
  sectorNameAr,
  headline,
  headlineAr,
  description,
  descriptionAr,
  accentColor,
  accentTint,
  isAr = false,
  heroImage,
  heroImageAlt,
  contextTag,
  contextTagAr,
  primaryCtaText,
  primaryCtaTextAr,
  primaryCtaHref = "/contact",
  secondaryCtaText,
  secondaryCtaTextAr,
  secondaryCtaHref,
  secondaryHref,
  visualType,
  children,
}: SectorHeroProps) {
  const secondaryActionTarget = secondaryCtaHref || secondaryHref || "#capabilities"
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white overflow-hidden">
      {/* ── Ambient Controlled Sector Glow ────────────────────────────── */}
      <div
        className="absolute -top-40 -right-40 w-[540px] h-[540px] rounded-full blur-[130px] opacity-15 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, ${accentTint} 50%, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Breadcrumb back to Sectors ─────────────────────────────────── */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#000823]/50 mb-8">
          <Link
            href="/sectors"
            className="hover:text-[#000823] transition-colors flex items-center gap-1.5"
          >
            <span>{isAr ? "القطاعات" : "Sectors"}</span>
          </Link>
          <span>/</span>
          <span className="text-[#000823]/80 font-medium truncate">
            {isAr ? sectorNameAr : sectorName}
          </span>
        </div>

        {/* ── Header Eyebrow with Official Sector Icon ─────────────────── */}
        <div className="flex flex-wrap items-center gap-3.5 mb-6">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs border transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: `${accentColor}12`,
              borderColor: `${accentColor}30`,
            }}
          >
            <SectorIcon slug={sectorSlug} size={24} color={accentColor} />
          </div>

          <div className="flex items-center gap-2">
            <span
              className="text-[11px] font-mono tracking-[0.2em] font-bold uppercase px-2.5 py-1 rounded-md"
              style={{
                backgroundColor: `${accentColor}15`,
                color: accentColor,
              }}
            >
              {isAr ? `قطاع ${sectorNumber}` : `SECTOR ${sectorNumber}`}
            </span>
            <span className="text-xs tracking-[0.16em] uppercase font-bold text-[#000823]/60 font-mono">
              {isAr ? sectorNameAr : sectorName}
            </span>
          </div>
        </div>

        {/* ── Editorial Split Layout ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Sector Identity & CTAs */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold tracking-tight leading-[1.12] mb-5 text-[#000823] break-words">
              {isAr ? headlineAr : headline}
            </h1>

            <p className="text-base sm:text-lg text-[#525866] leading-[1.6] font-normal mb-8 max-w-xl">
              {isAr ? descriptionAr : description}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-xs tracking-[0.14em] uppercase font-bold text-white transition-all duration-200 hover:opacity-90 shadow-md active:scale-[0.99]"
                style={{ backgroundColor: accentColor }}
              >
                <span>{isAr ? (primaryCtaTextAr || "ناقش مشروعك معنا") : (primaryCtaText || "Discuss Your Project")}</span>
                <span className="ltr:ml-2 rtl:mr-2 font-mono">→</span>
              </Link>

              <a
                href={secondaryActionTarget}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-xs tracking-[0.14em] uppercase font-semibold text-[#000823] border border-[#000823]/20 bg-white hover:bg-[#F8F8F8] transition-all duration-200"
              >
                <span>{isAr ? (secondaryCtaTextAr || "استكشف القدرات") : (secondaryCtaText || "Explore Capabilities")}</span>
                <span className="ltr:ml-2 rtl:mr-2 font-mono">↓</span>
              </a>
            </div>

            {/* Institutional Single-MSA Tag */}
            <div className="pt-6 border-t border-[#000823]/[0.08] flex items-center gap-4 text-[11px] font-mono text-[#000823]/50">
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
              <span>
                {isAr
                  ? "مجموعة جرول القابضة · عقد موحد (MSA) ودعم تشغيلي مباشر"
                  : "Growl Holding Group · Single Master Services Agreement (MSA)"}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Photograph with Architectural Growl Geometry */}
          <div className="lg:col-span-5">
            {heroImage ? (
              <div className="relative group">
                {/* Restrained Sector Architectural Shape derived from Growl's chamfer geometry */}
                <div
                  className="absolute -inset-2.5 rounded-3xl opacity-25 blur-xs transition-opacity group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor} 0%, ${accentTint} 60%, transparent 100%)`,
                  }}
                  aria-hidden="true"
                />

                <div className="relative rounded-2xl overflow-hidden border border-[#000823]/10 bg-[#000823] shadow-xl aspect-[4/3] sm:aspect-[16/11]">
                  {/* Authentic Photography */}
                  <img
                    src={heroImage}
                    alt={heroImageAlt || `${sectorName} in practice`}
                    className="w-full h-full object-cover filter contrast-[1.03] brightness-[0.98] transition-transform duration-500 group-hover:scale-102"
                    loading="eager"
                    width={800}
                    height={550}
                  />

                  {/* Restrained Architectural Angle Trim */}
                  <div
                    className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
                    style={{
                      background: `linear-gradient(225deg, ${accentColor} 0%, ${accentColor} 45%, transparent 46%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Caption & Context Badge */}
                  {(contextTag || contextTagAr) && (
                    <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-[#000823]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono text-white">
                      <span className="truncate">{isAr ? contextTagAr : contextTag}</span>
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
                    </div>
                  )}
                </div>
              </div>
            ) : children ? (
              <div className="relative rounded-2xl border border-[#000823]/[0.08] bg-[#F8F8F8] p-6 shadow-sm overflow-hidden">
                {children}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
