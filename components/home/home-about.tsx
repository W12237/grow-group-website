"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"
import { SECTORS } from "@/lib/sectors-data"

export function HomeAbout() {
  const { isAr } = useLanguage()

  const PRINCIPLES = [
    {
      title: "Single Master Agreement",
      titleAr: "عقد خدمات رئيسي موحد (MSA)",
      desc: "One legal entity, consolidated invoicing, and simplified procurement across all sector engagements.",
      descAr: "كيان قانوني واحد، فوترة موحدة، وإجراءات امتثال مبسطة عبر كافة القطاعات.",
    },
    {
      title: "Unified Technical Governance",
      titleAr: "حوكمة تقنية متكاملة",
      desc: "Shared engineering standards, rigorous code review, security baselines, and quality metrics.",
      descAr: "معايير هندسية مشتركة، مراجعة دقيقة للأكواد، وتوافق أمني شامل بين الفرق.",
    },
    {
      title: "Zero Agency-Vendor Friction",
      titleAr: "انعدام احتكاك الموردين والوكالات",
      desc: "Branding, development, infrastructure, and automation collaborate seamlessly without competing vendor agendas.",
      descAr: "تكامل سلس بين الهوية، البرمجة، والشبكات دون تعارض مصالح الموردين المنفصلين.",
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Editorial About Copy ─────────────────────────── */}
          <div className="lg:col-span-6">
            <SectionLabel>
              {isAr ? "عن مجموعة جرول" : "About Growl"}
            </SectionLabel>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.1]">
              {isAr
                ? "قدرات متخصصة متنوعة. بمظلة حوكمة ومسؤولية موحدة."
                : "Different capabilities. One accountable group."}
            </h2>

            <p className="mt-6 text-base md:text-lg text-[#000823]/75 font-normal leading-relaxed">
              {isAr
                ? "تجمع جرول بين الرؤية الاستراتيجية، التوجيه الإبداعي، هندسة البرمجيات، أتمتة العمليات، والبنية التحتية المؤسسية. يمكن للعملاء التعاون مع قطاع تخصصي منفرد أو دمج فرق جرول المتعددة لإنجاز مشروع استراتيجي متكامل."
                : "Growl combines strategy, creative direction, product engineering, automation and enterprise infrastructure. Clients can work with one specialist sector or bring several Growl teams together around a larger objective."}
            </p>

            {/* Structured Operating Principles */}
            <div className="mt-10 space-y-4">
              {PRINCIPLES.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8F8F8] border border-[#000823]/[0.06] hover:border-[#000823]/20 transition-colors"
                >
                  <h4 className="text-sm font-bold text-[#000823] mb-1">
                    {isAr ? p.titleAr : p.title}
                  </h4>
                  <p className="text-xs text-[#000823]/65 leading-relaxed">
                    {isAr ? p.descAr : p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#000823]/[0.08] flex items-center gap-6">
              <Link
                href="/about"
                className="text-xs font-bold text-[#000823] hover:underline uppercase tracking-wider font-mono flex items-center gap-2"
              >
                <span>{isAr ? "تعرف على تاريخ وهوية المجموعة" : "Explore Group Governance & Story"}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Branded Architectural Diagram ──────────────── */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-[#000823]/[0.10] bg-[#000823] p-8 text-white shadow-2xl overflow-hidden">
              {/* Subtle ambient lighting */}
              <div
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ backgroundColor: "#7135E5" }}
                aria-hidden="true"
              />

              {/* Diagram Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] font-mono text-[10px]">
                <span className="tracking-widest uppercase text-white/60">
                  GROWL GROUP OPERATING SYSTEM
                </span>
                <span className="text-white/40">CAIRO HQ // MENA REACH</span>
              </div>

              {/* Central Holding Core */}
              <div className="my-8 text-center">
                <div className="inline-flex flex-col items-center p-5 rounded-2xl bg-white/[0.04] border border-white/20 shadow-lg">
                  <img
                    src="/growl-icons/white-icon.png"
                    alt="Growl Holding"
                    className="w-12 h-12 object-contain mb-2 shadow-xs"
                  />
                  <span className="text-sm font-bold tracking-[0.24em] font-mono text-white">
                    GROWL HOLDING
                  </span>
                  <span className="text-[10px] text-white/50 font-mono mt-0.5">
                    STRATEGY & INSTITUTIONAL GOVERNANCE
                  </span>
                </div>
              </div>

              {/* Connecting Vector Lines */}
              <div className="w-full h-px bg-white/10 relative my-4">
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#000823] px-3 text-[9px] font-mono text-white/40 uppercase">
                  Consolidated Master Services Agreement
                </span>
              </div>

              {/* 5 Operating Sector Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {SECTORS.slice(0, 5).map((sector) => (
                  <div
                    key={sector.id}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/25 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-white">
                        {isAr ? sector.nameAr : sector.name}
                      </span>
                      <span
                        className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${sector.color}25`,
                          color: sector.color,
                        }}
                      >
                        {sector.index}
                      </span>
                    </div>
                    <p className="text-[10px] text-white/50 line-clamp-2 leading-relaxed font-mono">
                      {isAr ? sector.taglineAr : sector.tagline}
                    </p>
                  </div>
                ))}

                {/* Shared Engineering & QA Infrastructure Card */}
                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/20 sm:col-span-2 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">
                      {isAr ? "بنية الجودة والامتثال المشتركة" : "Shared Infrastructure & Quality Assurance"}
                    </div>
                    <div className="text-[10px] text-white/50 font-mono">
                      {isAr ? "معايير أمنية مشتركة وتوافق سيبراني موحد" : "Security baselines, deployment pipelines, unified SLA"}
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                </div>
              </div>

              {/* Footer specs */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>5 OPERATIONAL SECTORS</span>
                <span>ZERO 3RD-PARTY OVERHEAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
