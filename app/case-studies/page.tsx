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
    <div className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased">
      <SiteHeader />

      {/* ── Page Hero ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>{isAr ? "دراسات الحالة والنتائج" : "PROVEN SUCCESS STORIES"}</SectionLabel>

          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight leading-[1.08] mb-6 text-[#000823] max-w-4xl">
            {isAr ? (
              <>أعمال حقيقية ونتائج مقاسة.<br />أثر تشغيلي وتجاري ملموس في بيئة الإنتاج.</>
            ) : (
              <>Real Scopes. Measurable Impact.<br />Engineered for Commercial Yield in Production.</>
            )}
          </h1>

          <p className="text-[17px] md:text-[19px] text-[#000823]/70 leading-relaxed max-w-3xl font-normal mb-8">
            {isAr
              ? "نحن لا نكتفي بتسليم الشيفرة أو التصاميم، بل نقيس نجاحنا بالنتائج التشغيلية والعوائد التي نحققها لعملائنا عبر قطاعاتنا الخمسة المتخصصة."
              : "We measure technical delivery by operational uptime, latency reduction, ROAS growth, and billable realization. Explore verified anonymized case studies across our five sectors."}
          </p>

          <div className="p-4 rounded-xl bg-[#F8F8F8] border border-[#000823]/[0.08] max-w-3xl text-xs text-[#000823]/60 font-mono">
            <strong>{isAr ? "معايير النزاهة والموثوقية:" : "Integrity & Verification Note:"}</strong>{" "}
            {isAr
              ? "نلتزم باتفاقيات سرية صارمة لحماية خصوصية عملائنا التجاريين. تُعرض دراسات الحالة التالية بأسماء قطاعية محايدة مع الحفاظ التام على دقة المؤشرات والحلول التقنية المنفذة."
              : "Under strict enterprise NDAs, client identities are anonymized by industry sector while maintaining exact technical architectures, metrics, and production outcomes."}
          </div>
        </div>
      </section>

      {/* ── Sector Filter Tabs ─────────────────────────────────────────── */}
      <section className="py-6 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white sticky top-20 z-30">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedSector("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
              selectedSector === "all"
                ? "bg-[#000823] text-white shadow-xs"
                : "bg-[#F8F8F8] text-[#000823]/70 hover:bg-[#000823]/[0.05]"
            }`}
          >
            {isAr ? "جميع القطاعات (الكل)" : "All Sectors"}
          </button>

          {SECTORS.map((s) => {
            const isSelected = selectedSector === s.slug
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSector(s.slug)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#000823] text-white shadow-xs"
                    : "bg-[#F8F8F8] text-[#000823]/70 hover:bg-[#000823]/[0.05]"
                }`}
              >
                <SectorIcon slug={s.slug} size={14} color={isSelected ? "#FFF" : s.color} />
                <span>{isAr ? s.nameAr : s.name}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Case Studies Detailed List ─────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {filteredCaseStudies.map((cs) => {
            const sectorDef = SECTORS.find((s) => s.slug === cs.sectorId)
            return (
              <div
                key={cs.id}
                className="rounded-3xl bg-white border border-[#000823]/[0.08] p-8 md:p-12 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
                  style={{ background: cs.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                  {/* Left: Metadata, Title, Challenge, Solution */}
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono text-[#000823]/50 uppercase tracking-widest">
                        {isAr ? cs.clientIndustryAr : cs.clientIndustry}
                      </span>
                      <span className="text-[#000823]/20">•</span>
                      <div className="flex items-center gap-1.5">
                        {sectorDef && (
                          <SectorIcon slug={sectorDef.slug} size={14} color={cs.accentColor} />
                        )}
                        <span
                          className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: `${cs.accentColor}18`,
                            color: cs.accentColor,
                          }}
                        >
                          {isAr ? cs.sectorNameAr : cs.sectorName}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#000823] leading-snug">
                      {isAr ? cs.titleAr : cs.title}
                    </h2>

                    <div className="space-y-4 pt-2">
                      <div>
                        <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#000823]/50 mb-1.5">
                          {isAr ? "التحدي التجاري والتقني" : "BUSINESS CHALLENGE"}
                        </h3>
                        <p className="text-sm md:text-base text-[#000823]/70 leading-relaxed">
                          {isAr ? cs.challengeAr : cs.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#000823]/50 mb-1.5">
                          {isAr ? "الحل المنفذ من جرول" : "THE GROWL SOLUTION"}
                        </h3>
                        <p className="text-sm md:text-base text-[#000823]/70 leading-relaxed">
                          {isAr ? cs.solutionAr : cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Technologies Tag Array */}
                    <div className="pt-3 border-t border-[#000823]/[0.06]">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/40 mb-2">
                        {isAr ? "التقنيات المستخدمة" : "TECHNOLOGY DEPLOYED"}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cs.technologyUsed.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-[#F8F8F8] border border-[#000823]/[0.06] text-[#000823]/80 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Metric Box and Action */}
                  <div className="lg:col-span-4 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08]">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/50 mb-2">
                        {isAr ? "النتيجة المقاسة" : "MEASURED RESULT"}
                      </div>

                      <div
                        className="text-4xl font-bold mb-3 font-mono tracking-tight"
                        style={{ color: cs.accentColor }}
                      >
                        {cs.metricsBadge}
                      </div>

                      <p className="text-sm text-[#000823]/80 leading-relaxed mb-6 font-medium">
                        {isAr ? cs.measurableResultAr : cs.measurableResult}
                      </p>

                      <div className="pt-4 border-t border-[#000823]/[0.08]">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/40 mb-2">
                          {isAr ? "الخدمات المنجزة" : "SERVICES DELIVERED"}
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#000823]/70">
                          {(isAr ? cs.servicesProvidedAr : cs.servicesProvided).map((s) => (
                            <li key={s} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: cs.accentColor }} />
                              <span className="truncate">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#000823]/[0.08]">
                      <Link
                        href="/contact"
                        className="block w-full py-3 text-center rounded-xl text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 shadow-2xs"
                        style={{ backgroundColor: cs.accentColor }}
                      >
                        {isAr ? "ناقش مشروعاً مشابهاً" : "Discuss Similar Scope"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-t border-[#000823]/[0.08]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000823] mb-3">
            {isAr ? "هل لديك تحدٍ تقني أو مشروع يستحق البناء؟" : "Have a high-stakes challenge worth solving?"}
          </h2>
          <p className="text-sm text-[#000823]/65 max-w-xl mx-auto mb-8 font-normal">
            {isAr
              ? "أخبرنا عن أهدافك لنقوم بتنسيق الموارد التقنية والهندسية المناسبة من قطاعات جرول الخمسة."
              : "Tell us about your project objectives and we will orchestrate the optimal cross-sector team to deliver measurable outcomes."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#000823] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#000823]/85 transition-colors shadow-xs"
          >
            {isAr ? "ابدأ محادثة مع فريقنا" : "Start a Conversation"}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
