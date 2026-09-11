"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"
import { CASE_STUDIES_DATA } from "@/lib/case-studies-data"

export function HomeWork() {
  const { isAr } = useLanguage()

  // Select top 3 approved case studies
  const featuredCases = CASE_STUDIES_DATA.slice(0, 3)

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <SectionLabel>
              {isAr ? "أعمال ومشاريع مختارة" : "Featured Work"}
            </SectionLabel>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.1]">
              {isAr ? "مشاريع واقعية وتحديات تشغيلية حقيقية." : "Real engagements. Measurable business outcomes."}
            </h2>

            <p className="mt-5 text-base md:text-lg text-[#000823]/70 font-normal leading-relaxed">
              {isAr
                ? "دراسات حالة حقيقية مستندة إلى نطاقات عمل منجزة عبر قطاعات المجموعة، موثقة بالصناعة، التحدي، الحل، والنتائج القابلة للتحقق."
                : "A selection of delivered client engagements across retail, logistics, and enterprise finance, documenting real challenges and technical solutions."}
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#000823] hover:underline font-mono shrink-0"
          >
            <span>{isAr ? "عرض جميع دراسات الحالة" : "View All Case Studies"}</span>
            <span>→</span>
          </Link>
        </div>

        {/* ── Grid of Featured Work ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCases.map((cs) => (
            <div
              key={cs.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] hover:border-[#000823]/20 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Sector & Industry Header */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#000823]/[0.06]">
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${cs.accentColor}15`,
                      color: cs.accentColor,
                    }}
                  >
                    {isAr ? cs.sectorNameAr : cs.sectorName}
                  </span>

                  <span className="text-[10px] font-mono text-[#000823]/50 truncate max-w-[170px]">
                    {isAr ? cs.clientIndustryAr : cs.clientIndustry}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-[#000823] mb-4 leading-snug">
                  {isAr ? cs.titleAr : cs.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/40 font-bold block mb-1">
                    {isAr ? "التحدي التشغيلي:" : "Business Challenge:"}
                  </span>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">
                    {isAr ? cs.challengeAr : cs.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/40 font-bold block mb-1">
                    {isAr ? "حل جرول المعتمد:" : "Growl Solution:"}
                  </span>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">
                    {isAr ? cs.solutionAr : cs.solution}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
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

              {/* Result Callout Box */}
              <div
                className="p-4 rounded-xl border"
                style={{
                  backgroundColor: `${cs.accentColor}08`,
                  borderColor: `${cs.accentColor}25`,
                }}
              >
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
                <p className="text-xs font-semibold text-[#000823] leading-snug">
                  {isAr ? cs.measurableResultAr : cs.measurableResult}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Editorial "Selected Work Coming Soon" State ──────────────── */}
        <div className="mt-8 p-6 rounded-2xl bg-[#F8F8F8] border border-dashed border-[#000823]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
