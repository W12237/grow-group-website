"use client"

import React from "react"
import Link from "next/link"
import { CaseStudyItem } from "@/lib/case-studies-data"
import { SectionLabel } from "@/components/shared/section-label"

interface SectorCaseStudiesProps {
  caseStudy: CaseStudyItem
  accentColor: string
  isAr?: boolean
}

export function SectorCaseStudies({
  caseStudy,
  accentColor,
  isAr = false,
}: SectorCaseStudiesProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-[#000823] text-white relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white/80 text-[10px] font-mono tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              {isAr ? "دراسة حالة واقعية" : "PROVEN IMPACT & CASE STUDY"}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              {isAr ? "نتائج أعمال حقيقية وقابلة للقياس." : "Verifiable results delivered in production."}
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/75 hover:text-white transition-colors"
          >
            <span>{isAr ? "عرض جميع دراسات الحالة ←" : "Explore All Case Studies →"}</span>
          </Link>
        </div>

        {/* ── Case Study Card ────────────────────────────────────────────── */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Metadata, Title, Challenge, Solution */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                  {isAr ? caseStudy.clientIndustryAr : caseStudy.clientIndustry}
                </span>
                <span className="text-white/20">•</span>
                <span
                  className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded"
                  style={{ backgroundColor: `${accentColor}25`, color: accentColor }}
                >
                  {isAr ? caseStudy.sectorNameAr : caseStudy.sectorName}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                {isAr ? caseStudy.titleAr : caseStudy.title}
              </h3>

              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-1.5">
                    {isAr ? "التحدي التجاري والتقني" : "BUSINESS CHALLENGE"}
                  </h4>
                  <p className="text-sm md:text-base text-white/75 leading-relaxed">
                    {isAr ? caseStudy.challengeAr : caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-1.5">
                    {isAr ? "الحل المنفذ من جرول" : "THE GROWL SOLUTION"}
                  </h4>
                  <p className="text-sm md:text-base text-white/75 leading-relaxed">
                    {isAr ? caseStudy.solutionAr : caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Tag Array */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2.5">
                  {isAr ? "التقنيات المستخدمة" : "TECHNOLOGY DEPLOYED"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologyUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Measurable Result Metric Box & CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white/[0.06] border border-white/10">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">
                  {isAr ? "النتيجة القابلة للقياس" : "MEASURABLE OUTCOME"}
                </div>

                <div
                  className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight"
                  style={{ color: accentColor }}
                >
                  {caseStudy.metricsBadge}
                </div>

                <p className="text-sm text-white/85 leading-relaxed mb-6 font-medium">
                  {isAr ? caseStudy.measurableResultAr : caseStudy.measurableResult}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                    {isAr ? "الخدمات المقدمة" : "SERVICES DELIVERED"}
                  </div>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {(isAr ? caseStudy.servicesProvidedAr : caseStudy.servicesProvided).map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full py-3 text-center rounded-xl text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 shadow-sm"
                  style={{ backgroundColor: accentColor }}
                >
                  {isAr ? "اطلب مشروعاً مماثلاً" : "Discuss Similar Scope"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
