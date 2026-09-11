"use client"

import React from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SectionLabel } from "@/components/shared/section-label"
import { SectorIcon } from "@/components/shared/sector-icon"
import { useLanguage } from "@/components/language-context"
import { SECTORS } from "@/lib/sectors-data"

export default function SectorsDirectoryPage() {
  const { isAr } = useLanguage()

  return (
    <div className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased">
      <SiteHeader />

      {/* ── Page Hero ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#000823]/[0.05] text-[#000823]/70">
              {isAr ? "دليل القطاعات المؤسسي" : "SECTOR DIRECTORY"}
            </span>
            <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              {isAr ? `${SECTORS.length} قطاعات متخصصة` : `${SECTORS.length} Specialized Sectors`}
            </span>
          </div>

          <h1 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight leading-[1.08] mb-6 text-[#000823] max-w-4xl">
            {isAr ? (
              <>مجموعة تكنولوجية واحدة.<br />خمسة محركات للنمو والابتكار.</>
            ) : (
              <>One Technical Group.<br />Five Specialized Engines of Growth.</>
            )}
          </h1>

          <p className="text-[17px] md:text-[19px] text-[#000823]/70 leading-relaxed max-w-3xl font-normal mb-8">
            {isAr
              ? "تعمل جرول كمجموعة قابضة تنشط حصرياً عبر خمسة قطاعات تقنية وتجارية متخصصة. يمتلك كل قطاع هويته المستقلة وكوادره المتخصصة، وتتكامل جميعها تحت عقد تشغيلي موحد (Single MSA)."
              : "Growl operates exclusively across five focused commercial sectors. Each sector possesses dedicated domain engineering, proprietary workflows, and strict SLA commitments, united under a single master services agreement."}
          </p>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#000823]/60">
            <span className="px-3 py-1.5 rounded-lg bg-[#F8F8F8] border border-[#000823]/[0.06]">
              Single Master Services Agreement (MSA)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F8F8F8] border border-[#000823]/[0.06]">
              Dedicated Technical Directors
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F8F8F8] border border-[#000823]/[0.06]">
              Zero Cross-Tenant Risk
            </span>
          </div>
        </div>
      </section>

      {/* ── Five Sectors Detailed Grid ─────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08]">
        <div className="max-w-6xl mx-auto space-y-12">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="p-8 md:p-12 rounded-3xl bg-white border border-[#000823]/[0.08] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Sector Ambient Gradient */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
                style={{ background: sector.color }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left: Sector Identity & Copy */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{
                        backgroundColor: `${sector.color}15`,
                        border: `1px solid ${sector.color}35`,
                      }}
                    >
                      <SectorIcon slug={sector.slug} size={26} color={sector.color} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: `${sector.color}18`,
                            color: sector.color,
                          }}
                        >
                          {isAr ? `القطاع ${sector.index}` : `SECTOR ${sector.index}`}
                        </span>
                        <span className="text-xs font-mono text-[#000823]/50">
                          Growl Sector Unit
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#000823] mt-0.5">
                        {isAr ? sector.fullNameAr : sector.fullName}
                      </h2>
                    </div>
                  </div>

                  <div className="text-lg md:text-xl font-bold text-[#000823] pt-2">
                    {isAr ? sector.headlineAr : sector.headline}
                  </div>

                  <p className="text-sm md:text-base text-[#000823]/70 leading-relaxed max-w-2xl font-normal">
                    {isAr ? sector.descriptionAr : sector.description}
                  </p>
                </div>

                {/* Right: Direct Navigation CTA Card */}
                <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#000823]/[0.08]">
                  <Link
                    href={sector.canonicalHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-sm hover:opacity-90 transition-all duration-200"
                    style={{ backgroundColor: sector.color }}
                  >
                    <span>{isAr ? "استكشف تفاصيل القطاع" : "Explore Sector Page"}</span>
                    <span className="ltr:ml-2 rtl:mr-2 font-mono">→</span>
                  </Link>

                  <span className="text-[11px] font-mono text-[#000823]/50">
                    {sector.canonicalHref}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Governance & Cross-Sector Synergy ───────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
        <div className="max-w-6xl mx-auto text-center max-w-3xl">
          <SectionLabel>{isAr ? "الحوكمة والتعاقد" : "ENTERPRISE GOVERNANCE"}</SectionLabel>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#000823]">
            {isAr
              ? "تعاقد واحد يمنحك وصولاً مباشراً إلى خمسة تخصصات عميقة."
              : "A single commercial engagement giving you deep, multi-sector capability."}
          </h2>
          <p className="mt-3 text-sm text-[#000823]/65 leading-relaxed">
            {isAr
              ? "استفد من تكامل التخصصات الخمسة دون الحاجة لإدارة بائعين متعددين أو عقود متباينة. كل مشروع يخضع لمعايير حوكمة صارمة تضمن تسليم العمل بأعلى جودة."
              : "Engage Growl across one or multiple sectors under a unified legal and procurement structure, eliminating vendor fragmentation and project delays."}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
