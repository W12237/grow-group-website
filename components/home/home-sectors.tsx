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
    <section id="sectors" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionLabel>
            {isAr ? "قطاعاتنا المتخصصة" : "Our Sectors"}
          </SectionLabel>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.15]">
            {isAr ? "فرق متخصصة. بمعيار جرول الموحد." : "Specialist teams. One Growl standard."}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#000823]/70 font-normal leading-relaxed max-w-2xl">
            {isAr
              ? "صُمم كل قطاع ليلبي احتياجاً عملياً مستقلاً، مع بقاء الاستراتيجية والحوكمة والمسؤولية متصلة عبر المجموعة بالكامل."
              : "Each sector is built for a distinct business need, while strategy, delivery and accountability remain connected across the group."}
          </p>
        </div>

        {/* ── Structured Editorial Layout: Interactive List & Focus Panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial 5-Sector Rows */}
          <div className="lg:col-span-7 space-y-3.5">
            {SECTORS.map((sector) => {
              const isSelected = sector.id === activeSectorId
              return (
                <div
                  key={sector.id}
                  onMouseEnter={() => setActiveSectorId(sector.id)}
                  onClick={() => setActiveSectorId(sector.id)}
                  className={`group relative p-4 sm:p-5 md:p-6 rounded-2xl border transition-all duration-300 ease-out cursor-pointer ${isSelected
                    ? "bg-white shadow-xl border-transparent ring-2 -translate-y-0.5"
                    : "bg-white/70 hover:bg-white hover:-translate-y-1 border-[#000823]/[0.08] hover:border-[#000823]/20 shadow-xs hover:shadow-lg"
                    }`}
                  style={{
                    // @ts-expect-error custom ring color
                    "--tw-ring-color": isSelected ? sector.color : "transparent",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      {/* Sector Number */}
                      <span
                        className="font-mono text-xs font-bold tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105"
                        style={{
                          backgroundColor: `${sector.color}15`,
                          color: sector.color,
                        }}
                      >
                        {sector.index}
                      </span>

                      <div className="min-w-0">
                        {/* Official Sector Name */}
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: `${sector.color}20`,
                            }}
                          >
                            <SectorIcon slug={sector.slug} size={14} color={sector.color} />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-[#000823] truncate">
                            {isAr ? sector.nameAr : sector.name}
                          </h3>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs sm:text-[13px] text-[#000823]/70 leading-relaxed line-clamp-2 sm:line-clamp-none max-w-xl">
                          {isAr ? sector.descriptionAr : sector.description}
                        </p>

                        {/* Selected Services Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-2.5 sm:mt-3">
                          {(isAr ? sector.servicesAr : sector.services).slice(0, 3).map((service, idx) => (
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
                      className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
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
                  <div className="mt-3 pt-2.5 border-t border-[#000823]/[0.06] flex sm:hidden items-center justify-between">
                    <Link
                      href={sector.canonicalHref}
                      className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                      style={{ color: sector.color }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{isAr ? "استكشف القطاع" : "Explore Sector"}</span>
                      <span>→</span>
                    </Link>
                    <span className="text-[10px] font-mono text-[#000823]/40">
                      0{sector.index}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Panel for Active Sector */}
          <div className="lg:col-span-5 sticky top-28">
            <div
              className="rounded-3xl p-5 sm:p-6 md:p-7 bg-white border shadow-xl relative overflow-hidden transition-all duration-300"
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
              <div className="flex items-center justify-between pb-3.5 border-b border-[#000823]/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
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
              <h4 className="text-lg sm:text-xl font-bold text-[#000823] mb-2.5">
                {isAr ? activeSector.headlineAr : activeSector.headline}
              </h4>

              <p className="text-xs sm:text-[13px] text-[#000823]/70 leading-relaxed mb-5">
                {isAr ? activeSector.descriptionAr : activeSector.description}
              </p>

              {/* Core Deliverables Breakdown */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/50 font-bold block">
                  {isAr ? "القدرات والخدمات المعتمدة:" : "Core Capabilities & Deliverables:"}
                </span>
                {(isAr ? activeSector.servicesAr : activeSector.services).map((srv, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-[#000823]/80 font-medium py-1 px-2.5 rounded-lg bg-[#F8F8F8] border border-[#000823]/[0.05]"
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
                className="group/btn flex items-center justify-between w-full px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-md hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                style={{ backgroundColor: activeSector.color }}
              >
                <span>
                  {isAr
                    ? `استكشف ${activeSector.nameAr}`
                    : `View ${activeSector.name} In Detail`}
                </span>
                <span className="font-mono text-sm transition-transform duration-200 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
