"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"
import { SECTORS } from "@/lib/sectors-data"

export function HomeAbout() {
  const { isAr } = useLanguage()

  const PRINCIPLES = [
    {
      index: "01",
      title: "Single Master Agreement",
      titleAr: "عقد خدمات رئيسي موحد (MSA)",
      desc: "One legal entity, consolidated invoicing, and simplified procurement across all sector engagements.",
      descAr: "كيان قانوني واحد، فوترة موحدة، وإجراءات امتثال مبسطة عبر كافة القطاعات.",
    },
    {
      index: "02",
      title: "Unified Technical Governance",
      titleAr: "حوكمة تقنية متكاملة",
      desc: "Shared engineering standards, rigorous code review, security baselines, and quality metrics.",
      descAr: "معايير هندسية مشتركة، مراجعة دقيقة للأكواد، وتوافق أمني شامل بين الفرق.",
    },
    {
      index: "03",
      title: "Zero Agency-Vendor Friction",
      titleAr: "انعدام احتكاك الموردين والوكالات",
      desc: "Branding, development, infrastructure, and automation collaborate seamlessly without competing vendor agendas.",
      descAr: "تكامل سلس بين الهوية، البرمجة، والشبكات دون تعارض مصالح الموردين المنفصلين.",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ── Left Column: Editorial About Copy (Directly matched to Work typography) ── */}
          <div className="lg:col-span-6">
            <SectionLabel>
              {isAr ? "عن مجموعة جرول" : "About Growl"}
            </SectionLabel>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.15]">
              {isAr
                ? "قدرات متخصصة متنوعة. بمظلة حوكمة ومسؤولية موحدة."
                : "Different capabilities. One accountable group."}
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-[#000823]/70 font-normal leading-relaxed">
              {isAr
                ? "تجمع جرول بين الرؤية الاستراتيجية، هندسة البرمجيات، أتمتة العمليات، والبنية التحتية المؤسسية. يعمل العملاء مع قطاع تخصصي منفرد أو يدمجون فرقاً متعددة لإنجاز تحول رقمي متكامل."
                : "Growl unifies creative strategy, software engineering, intelligent automation, and secure enterprise infrastructure. Engage a single specialist sector or deploy integrated multi-sector squads."}
            </p>

            {/* Structured Operating Principles (Styled identical to Work section cards) */}
            <div className="mt-8 space-y-4">
              {PRINCIPLES.map((p, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] hover:border-[#000823]/25 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#7135E5]/10 text-[#7135E5]">
                      {isAr ? `مبدأ ${p.index}` : `PRINCIPLE ${p.index}`}
                    </span>
                    <span className="text-[10px] font-mono text-[#000823]/40">
                      GROWL GOVERNANCE
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#000823] mb-1.5 leading-snug">
                    {isAr ? p.titleAr : p.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#000823]/70 leading-relaxed">
                    {isAr ? p.descAr : p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* View More Link Styled identical to Work Section */}
            <div className="mt-8 pt-5 border-t border-[#000823]/[0.08] flex items-center justify-between">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#000823] hover:opacity-85 font-mono shrink-0 transition-opacity"
              >
                <span>{isAr ? "تعرف على تاريخ وهوية المجموعة" : "Explore Group Governance & Story"}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Clean Architectural Diagram (Hidden on mobile to eliminate clutter) ── */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="relative rounded-2xl border border-[#000823]/[0.08] bg-[#F8F8F8] p-5 sm:p-7 md:p-8 text-[#000823] shadow-sm overflow-hidden">
              
              {/* Diagram Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#000823]/[0.06] font-mono text-[10px]">
                <span className="tracking-widest uppercase text-[#000823]/60 font-semibold">
                  GROWL GROUP OPERATING SYSTEM
                </span>
                <span className="text-[#000823]/40 font-semibold">CAIRO HQ // MENA REACH</span>
              </div>

              {/* Central Holding Core */}
              <div className="my-7 text-center">
                <div className="inline-flex flex-col items-center px-6 py-4 rounded-xl bg-white shadow-xs">
                  <img
                    src="/growl-icons/growl-group-icon.png"
                    alt="Growl Holding"
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] font-mono text-[#000823]">
                    GROWL HOLDING
                  </span>
                  <span className="text-[10px] text-[#000823]/50 font-mono mt-0.5">
                    STRATEGY & INSTITUTIONAL GOVERNANCE
                  </span>
                </div>
              </div>

              {/* Connecting Vector Lines */}
              <div className="w-full h-px bg-[#000823]/10 relative my-4">
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#F8F8F8] px-3 text-[9px] font-mono text-[#000823]/50 uppercase font-semibold">
                  Consolidated Master Services Agreement
                </span>
              </div>

              {/* 5 Operating Sector Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {SECTORS.slice(0, 5).map((sector) => (
                  <div
                    key={sector.id}
                    className="p-3 rounded-xl bg-white border border-[#000823]/[0.08] hover:border-[#000823]/20 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-[#000823]">
                        {isAr ? sector.nameAr : sector.name}
                      </span>
                      <span
                        className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${sector.color}15`,
                          color: sector.color,
                        }}
                      >
                        {sector.index}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#000823]/60 line-clamp-2 leading-relaxed font-mono">
                      {isAr ? sector.taglineAr : sector.tagline}
                    </p>
                  </div>
                ))}

                {/* Shared Engineering & QA Infrastructure Card */}
                <div className="p-3 rounded-xl bg-white border border-[#000823]/[0.08] sm:col-span-2 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#000823]">
                      {isAr ? "بنية الجودة والامتثال المشتركة" : "Shared Infrastructure & Quality Assurance"}
                    </div>
                    <div className="text-[10px] text-[#000823]/55 font-mono">
                      {isAr ? "معايير أمنية مشتركة وتوافق سيبراني موحد" : "Security baselines, deployment pipelines, unified SLA"}
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                </div>
              </div>

              {/* Footer specs */}
              <div className="mt-6 pt-4 border-t border-[#000823]/[0.06] flex items-center justify-between text-[10px] font-mono text-[#000823]/45">
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
