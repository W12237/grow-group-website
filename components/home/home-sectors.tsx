"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"
import { SectorIcon } from "@/components/shared/sector-icon"
import { SECTORS } from "@/lib/sectors-data"

export function HomeSectors() {
  const { isAr } = useLanguage()
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS[0].id)

  const activeSector = SECTORS.find((s) => s.id === activeSectorId) || SECTORS[0]

  return (
    <section id="sectors" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel>
            {isAr ? "قطاعاتنا المتخصصة" : "Our Sectors"}
          </SectionLabel>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.08]">
            {isAr ? "فرق متخصصة. بمعيار جرول الموحد." : "Specialist teams. One Growl standard."}
          </h2>

          <p className="mt-5 text-base md:text-lg text-[#000823]/70 font-normal leading-relaxed">
            {isAr
              ? "صُمم كل قطاع ليلبي احتياجاً عملياً مستقلاً، مع بقاء الاستراتيجية والحوكمة والمسؤولية متصلة عبر المجموعة بالكامل."
              : "Each sector is built for a different business need, while strategy, delivery and accountability remain connected across the group."}
          </p>
        </div>

        {/* ── Structured Editorial Layout: Interactive List & Focus Panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial 5-Sector Rows */}
          <div className="lg:col-span-7 space-y-3">
            {SECTORS.map((sector) => {
              const isSelected = sector.id === activeSectorId
              return (
                <div
                  key={sector.id}
                  onMouseEnter={() => setActiveSectorId(sector.id)}
                  onClick={() => setActiveSectorId(sector.id)}
                  className={`group relative p-6 md:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${isSelected
                      ? "bg-white shadow-lg border-transparent ring-2"
                      : "bg-white/60 hover:bg-white border-[#000823]/[0.08] hover:border-[#000823]/20 shadow-xs"
                    }`}
                  style={{
                    // @ts-expect-error custom ring color
                    "--tw-ring-color": isSelected ? sector.color : "transparent",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Sector Number */}
                      <span
                        className="font-mono text-xs md:text-sm font-bold tracking-widest px-2.5 py-1 rounded-lg shrink-0 mt-0.5"
                        style={{
                          backgroundColor: `${sector.color}15`,
                          color: sector.color,
                        }}
                      >
                        {sector.index}
                      </span>

                      <div>
                        {/* Official Sector Name */}
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div
                            className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: `${sector.color}20`,
                            }}
                          >
                            <SectorIcon slug={sector.slug} size={14} color={sector.color} />
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-[#000823]">
                            {isAr ? sector.nameAr : sector.name}
                          </h3>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs md:text-sm text-[#000823]/70 leading-relaxed max-w-xl">
                          {isAr ? sector.descriptionAr : sector.description}
                        </p>

                        {/* Selected Services Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-3.5">
                          {(isAr ? sector.servicesAr : sector.services).slice(0, 4).map((service, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#000823]/[0.04] text-[#000823]/75 border border-[#000823]/[0.06]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sector Link Arrow */}
                    <Link
                      href={sector.canonicalHref}
                      className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-transform group-hover:translate-x-1 duration-200"
                      style={{
                        backgroundColor: `${sector.color}12`,
                        color: sector.color,
                      }}
                      aria-label={`View ${sector.name}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="font-mono text-sm font-bold">→</span>
                    </Link>
                  </div>

                  {/* Direct Mobile Link */}
                  <div className="mt-4 pt-3 border-t border-[#000823]/[0.06] flex sm:hidden items-center justify-between">
                    <Link
                      href={sector.canonicalHref}
                      className="text-xs font-semibold flex items-center gap-1.5"
                      style={{ color: sector.color }}
                    >
                      <span>{isAr ? "زيارة صفحة القطاع" : "Explore Sector Capabilities"}</span>
                      <span className="font-mono">→</span>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Panel for Active Sector */}
          <div className="lg:col-span-5 sticky top-28">
            <div
              className="rounded-3xl p-8 bg-white border shadow-xl relative overflow-hidden transition-all duration-300"
              style={{
                borderColor: `${activeSector.color}35`,
              }}
            >
              {/* Subtle Sector Ambient Glow */}
              <div
                className="absolute -top-24 -right-24 w-60 h-60 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ backgroundColor: activeSector.color }}
                aria-hidden="true"
              />

              {/* Spec Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#000823]/[0.08] mb-6">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: activeSector.color }}
                  />
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#000823]/70 uppercase">
                    {isAr ? `نظرة تفصيلية // قطاع ${activeSector.index}` : `SECTOR DOSSIER // ${activeSector.index}`}
                  </span>
                </div>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                  style={{
                    backgroundColor: `${activeSector.color}15`,
                    color: activeSector.color,
                  }}
                >
                  {activeSector.tagline}
                </span>
              </div>

              {/* Sector Name & Headline */}
              <h4 className="text-xl md:text-2xl font-bold text-[#000823] mb-3">
                {isAr ? activeSector.headlineAr : activeSector.headline}
              </h4>

              <p className="text-xs md:text-sm text-[#000823]/70 leading-relaxed mb-6">
                {isAr ? activeSector.descriptionAr : activeSector.description}
              </p>

              {/* Core Deliverables Breakdown */}
              <div className="space-y-2.5 mb-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/50 font-bold block">
                  {isAr ? "القدرات والخدمات المعتمدة:" : "Core Capabilities & Deliverables:"}
                </span>
                {(isAr ? activeSector.servicesAr : activeSector.services).map((srv, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-xs text-[#000823]/80 font-medium py-1 px-2.5 rounded-lg bg-[#F8F8F8] border border-[#000823]/[0.05]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: activeSector.color }}
                    />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>

              {/* Action Link to Full Sector Page */}
              <Link
                href={activeSector.canonicalHref}
                className="flex items-center justify-between w-full px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-md hover:opacity-90 transition-opacity"
                style={{ backgroundColor: activeSector.color }}
              >
                <span>
                  {isAr
                    ? `استكشف ${activeSector.nameAr}`
                    : `View ${activeSector.name} In Detail`}
                </span>
                <span className="font-mono text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
