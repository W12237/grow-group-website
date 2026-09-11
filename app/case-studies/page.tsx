"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SectionLabel } from "@/components/shared/section-label"
import { SectorIcon } from "@/components/shared/sector-icon"
import { useLanguage } from "@/components/language-context"
import { CASE_STUDIES_DATA, CaseStudyItem } from "@/lib/case-studies-data"
import { SECTORS } from "@/lib/sectors-data"

export default function CaseStudiesPage() {
  const { isAr } = useLanguage()
  const [selectedSector, setSelectedSector] = useState<string>("all")

  const filteredCaseStudies = useMemo(() => {
    if (selectedSector === "all") return CASE_STUDIES_DATA
    return CASE_STUDIES_DATA.filter((c) => c.sectorId === selectedSector)
  }, [selectedSector])

  return (
    <div className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased selection:bg-[#7135E5] selection:text-white">
      <SiteHeader />

      {/* ── Page Hero: Refined, Confident Editorial Scale ──────────────── */}
      <section className="pt-32 pb-14 sm:pt-36 sm:pb-18 md:pt-40 md:pb-20 px-5 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7135E5]" />
            <SectionLabel>{isAr ? "دراسات الحالة والنتائج" : "PROVEN SUCCESS STORIES"}</SectionLabel>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold tracking-tight leading-[1.12] mb-5 text-[#000823] max-w-3xl">
            {isAr ? (
              <>
                أعمال حقيقية ونتائج موثقة.
                <br />
                أثر تشغيلي وتجاري ملموس في بيئة الإنتاج.
              </>
            ) : (
              <>
                Real Scopes. Measurable Impact.
                <br />
                Engineered for Commercial Yield.
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#525866] leading-[1.6] max-w-2xl font-normal mb-7">
            {isAr
              ? "نحن لا نكتفي بتسليم الشيفرة أو التصاميم، بل نقيس نجاحنا بالنتائج التشغيلية والعوائد التي نحققها لعملائنا عبر قطاعاتنا الخمسة المتخصصة."
              : "We measure technical delivery by operational uptime, latency reduction, ROAS growth, and billable realization. Explore verified anonymized case studies across our five sectors."}
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] max-w-2xl text-xs sm:text-[13px] text-[#525866] leading-relaxed">
            <span className="font-semibold text-[#000823]">
              {isAr ? "معايير النزاهة والموثوقية: " : "Integrity & Verification Note: "}
            </span>
            {isAr
              ? "نلتزم باتفاقيات سرية صارمة لحماية خصوصية عملائنا التجاريين. تُعرض دراسات الحالة التالية بأسماء قطاعية محايدة مع الحفاظ التام على دقة المؤشرات والحلول التقنية المنفذة."
              : "Under strict enterprise NDAs, client identities are anonymized by industry sector while maintaining exact technical architectures, metrics, and production outcomes."}
          </div>
        </div>
      </section>

      {/* ── Sector Filter Tabs: Clean, Ergonomic, Sticky ────────────────── */}
      <section className="py-4 px-5 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white/95 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedSector("all")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
              selectedSector === "all"
                ? "bg-[#000823] text-white shadow-xs"
                : "bg-[#F8F8F8] text-[#525866] hover:text-[#000823] hover:bg-[#000823]/[0.05]"
            }`}
          >
            {isAr ? "جميع القطاعات" : "All Sectors"}
          </button>

          {SECTORS.map((s) => {
            const isSelected = selectedSector === s.slug
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSector(s.slug)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#000823] text-white shadow-xs"
                    : "bg-[#F8F8F8] text-[#525866] hover:text-[#000823] hover:bg-[#000823]/[0.05]"
                }`}
              >
                <SectorIcon slug={s.slug} size={20} color={isSelected ? "#FFF" : s.color} />
                <span>{isAr ? s.nameAr : s.name}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Case Studies Detailed List ─────────────────────────────────── */}
      <section className="py-14 sm:py-18 md:py-24 px-5 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          {filteredCaseStudies.map((cs) => {
            const sectorDef = SECTORS.find((s) => s.slug === cs.sectorId)
            return (
              <div
                key={cs.id}
                className="rounded-2xl bg-white border border-[#000823]/[0.08] p-5 sm:p-8 md:p-10 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10 items-start">
                  
                  {/* Left: Metadata, Title, Challenge, Solution */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#000823]/[0.06]">
                      <div className="flex items-center gap-3">
                        {sectorDef && (
                          <SectorIcon slug={sectorDef.slug} size={38} className="shrink-0" />
                        )}
                        <span
                          className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block"
                          style={{
                            backgroundColor: `${cs.accentColor}18`,
                            color: cs.accentColor,
                          }}
                        >
                          {isAr ? cs.sectorNameAr : cs.sectorName}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-[#525866] uppercase tracking-wider truncate max-w-[160px]">
                        {isAr ? cs.clientIndustryAr : cs.clientIndustry}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[#000823] leading-snug">
                      {isAr ? cs.titleAr : cs.title}
                    </h2>

                    <div className="space-y-3 pt-1">
                      {/* Business Challenge (Hidden on mobile to decrease dense text) */}
                      <div className="hidden sm:block">
                        <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#000823]/60 mb-1">
                          {isAr ? "التحدي التجاري والتقني" : "BUSINESS CHALLENGE"}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#525866] leading-relaxed font-normal">
                          {isAr ? cs.challengeAr : cs.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#000823]/60 mb-1">
                          {isAr ? "الحل المنفذ من جرول" : "THE GROWL SOLUTION"}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#525866] leading-relaxed font-normal">
                          {isAr ? cs.solutionAr : cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Technologies Tag Array: Hidden on mobile */}
                    <div className="hidden sm:block pt-3 border-t border-[#000823]/[0.06]">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#000823]/50 mb-2">
                        {isAr ? "التقنيات المستخدمة" : "TECHNOLOGY DEPLOYED"}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cs.technologyUsed.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#F8F8F8] border border-[#000823]/[0.06] text-[#000823]/80 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Metric and Action (NO nested card on mobile!) */}
                  <div className="lg:col-span-4 flex flex-col justify-between pt-5 mt-2 border-t border-[#000823]/[0.08] lg:border-t-0 lg:mt-0 lg:pt-0 lg:p-6 lg:rounded-xl lg:bg-[#F8F8F8] lg:border lg:border-[#000823]/[0.08] h-full">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#000823]/50 mb-1">
                        {isAr ? "النتيجة المقاسة" : "MEASURED RESULT"}
                      </div>

                      <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1.5 font-mono tracking-tight"
                        style={{ color: cs.accentColor }}
                      >
                        {cs.metricsBadge}
                      </div>

                      <p className="text-xs sm:text-sm text-[#000823] font-semibold leading-snug mb-4">
                        {isAr ? cs.measurableResultAr : cs.measurableResult}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#000823]/[0.06]">
                      <Link
                        href={sectorDef ? sectorDef.canonicalHref : "/contact"}
                        className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#000823] hover:text-[#7135E5] transition-colors"
                      >
                        <span>{isAr ? "استكشف خدمات القطاع" : "View Division Scope"}</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Briefing CTA ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 px-5 sm:px-6 md:px-12 lg:px-20 border-t border-[#000823]/[0.08] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>{isAr ? "جلسة إحاطة تقنية" : "ENTERPRISE BRIEFING"}</SectionLabel>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.18] mb-3">
            {isAr ? "هل ترغب في مراجعة دراسات حالة متطابقة مع قطاع أعمالك؟" : "Looking for specific case studies in your industry?"}
          </h2>
          <p className="text-sm sm:text-base text-[#525866] max-w-xl mx-auto leading-relaxed mb-6 font-normal">
            {isAr
              ? "نمتلك سجلاً واسعاً من المشاريع المنجزة تحت اتفاقيات السرية (NDAs). يمكننا ترتيب جلسة استشارية مغلقة لاستعراض المعماريات الهندسية المطابقة لبيئة عملك."
              : "We maintain extensive engineering documentation under strict NDA. Schedule a confidential executive session to review solutions relevant to your exact operational requirements."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[50px] px-8 rounded-lg bg-[#000823] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#000823]/90 transition-all shadow-sm"
          >
            {isAr ? "طلب جلسة استشارية خاصة" : "Request Industry Briefing"}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
