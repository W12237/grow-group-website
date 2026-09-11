"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"
import { SectorIcon } from "@/components/shared/sector-icon"
import { CASE_STUDIES_DATA } from "@/lib/case-studies-data"

export function HomeWork() {
  const { isAr } = useLanguage()

  // Select top 3 approved case studies
  const featuredCases = CASE_STUDIES_DATA.slice(0, 3)

  return (
    <section id="work" className="py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 md:mb-16">
          <div className="max-w-3xl">
            <SectionLabel>
              {isAr ? "أعمال ومشاريع مختارة" : "Featured Work"}
            </SectionLabel>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.15]">
              {isAr ? "مشاريع واقعية وتحديات تشغيلية حقيقية." : "Real engagements. Measurable business outcomes."}
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-[#000823]/70 font-normal leading-relaxed">
              {isAr
                ? "دراسات حالة حقيقية مستندة إلى نطاقات عمل منجزة عبر قطاعات المجموعة، موثقة بالصناعة، التحدي، الحل، والنتائج القابلة للتحقق."
                : "A selection of delivered client engagements across retail, logistics, and enterprise finance, documenting real challenges and technical solutions."}
            </p>
          </div>

          <Link
            href="/work"
            className="hidden md:inline-flex group items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#000823] hover:opacity-85 font-mono shrink-0 transition-opacity"
          >
            <span>{isAr ? "عرض جميع دراسات الحالة" : "View All Case Studies"}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
          </Link>
        </div>

        {/* ── Grid of Featured Work (Top 2 on mobile, 3 on desktop) ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCases.map((cs, idx) => (
            <div
              key={cs.id}
              className={`group flex-col justify-between p-5 sm:p-6 md:p-7 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] hover:border-[#000823]/25 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out ${
                idx === 2 ? "hidden lg:flex" : "flex"
              }`}
            >
              <div>
                {/* Sector Logo & Header: Logo is large, free-floating, with NO border box */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#000823]/[0.06]">
                  <div className="flex items-center gap-3">
                    <SectorIcon slug={cs.sectorId} size={38} className="shrink-0" />
                    <div>
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded inline-block"
                        style={{
                          backgroundColor: `${cs.accentColor}15`,
                          color: cs.accentColor,
                        }}
                      >
                        {isAr ? cs.sectorNameAr : cs.sectorName}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-[#000823]/50 truncate max-w-[150px]">
                    {isAr ? cs.clientIndustryAr : cs.clientIndustry}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#000823] mb-3 leading-snug">
                  {isAr ? cs.titleAr : cs.title}
                </h3>

                {/* Challenge (Hidden on mobile to reduce dense text clutter) */}
                <div className="hidden sm:block mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/40 font-bold block mb-1">
                    {isAr ? "التحدي التشغيلي:" : "Business Challenge:"}
                  </span>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">
                    {isAr ? cs.challengeAr : cs.challenge}
                  </p>
                </div>

                {/* Solution (Streamlined on mobile) */}
                <div className="mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/40 font-bold block mb-1">
                    {isAr ? "حل جرول المعتمد:" : "Growl Solution:"}
                  </span>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">
                    {isAr ? cs.solutionAr : cs.solution}
                  </p>
                </div>

                {/* Technology Badges: Cleanly hidden on mobile */}
                <div className="hidden sm:flex flex-wrap gap-1.5 mt-3 mb-2">
                  {cs.technologyUsed.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#000823]/70 border border-[#000823]/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Result: Sleek modern divider, NO card inside card */}
              <div className="mt-5 pt-4 border-t border-[#000823]/[0.08]">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cs.accentColor }}
                  />
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider"
                    style={{ color: cs.accentColor }}
                  >
                    {isAr ? "النتيجة القابلة للتحقق" : "Verified Outcome"}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] font-semibold text-[#000823] leading-snug">
                  {isAr ? cs.measurableResultAr : cs.measurableResult}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F8F8F8] border border-[#000823]/10 text-[#000823] text-xs font-mono font-bold tracking-wider hover:bg-neutral-100 shadow-xs active:scale-[0.98] transition-all"
          >
            <span>{isAr ? "عرض جميع دراسات الحالة" : "View All Case Studies"}</span>
            <span className="ltr:ml-2 rtl:mr-2">→</span>
          </Link>
        </div>

        {/* ── Editorial "Selected Work Coming Soon" State (Hidden on mobile) ──── */}
        <div className="hidden sm:flex mt-8 p-6 rounded-2xl bg-[#F8F8F8] border border-dashed border-[#000823]/15 flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#000823]/[0.08] flex items-center justify-center font-mono text-xs text-[#000823]/60">
              NDA
            </div>
            <div>
              <div className="text-xs font-bold text-[#000823]">
                {isAr ? "مشاريع إضافية تحت اتفاقيات السرية (NDA)" : "Additional Enterprise Engagements Under NDA"}
              </div>
              <div className="text-[11px] text-[#000823]/60">
                {isAr
                  ? "يتم توثيق ونشر دراسات الحالة الجديدة بعد إتمام فترات الامتثال وموافقة الشركاء والعملاء."
                  : "Additional enterprise case studies are released following verified compliance and client disclosure clearance."}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-xs font-mono font-bold text-[#000823] hover:underline whitespace-nowrap"
          >
            {isAr ? "طلب دراسات حالة خاصة بالصناعة ←" : "Request Industry-Specific Briefing →"}
          </Link>
        </div>
      </div>
    </section>
  )
}
