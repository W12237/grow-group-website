"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectorIcon } from "@/components/shared/sector-icon"
import { SECTORS } from "@/lib/sectors-data"

const FOOTER_COMPANY = [
  { name: "About Growl", nameAr: "عن مجموعة جرول", href: "/about" },
  { name: "Sectors Directory", nameAr: "دليل القطاعات الخمسة", href: "/sectors" },
  { name: "Partners & Ecosystem", nameAr: "المنظومة والشركاء", href: "/partners" },
  { name: "Case Studies", nameAr: "دراسات الحالة والنتائج", href: "/case-studies" },
  { name: "Insights & Research", nameAr: "الرؤى والبحوث التقنية", href: "/insights" },
  { name: "Contact", nameAr: "تواصل معنا", href: "/contact" },
]

const FOOTER_LEGAL = [
  { name: "Privacy Policy", nameAr: "سياسة الخصوصية", href: "/privacy" },
  { name: "Terms & Conditions", nameAr: "الشروط والأحكام", href: "/terms" },
  { name: "Security & Compliance Statement", nameAr: "بيان الأمان والامتثال المؤسسي", href: "/sectors/system-integrator-cybersecurity" },
]

export function SiteFooter() {
  const { isAr } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#000823]/[0.08] bg-[#F8F8F8] text-[#000823]" role="contentinfo">
      {/* ── Main Footer Container ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        {/* Brand Overview Banner */}
        <div className="mb-14 pb-12 border-b border-[#000823]/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/growl-icons/growl-group-icon.png"
                alt="Growl Co."
                className="w-10 h-10 rounded-xl object-contain shadow-xs"
              />
              <Link
                href="/"
                className="text-xl font-bold tracking-[0.25em] text-[#000823] hover:opacity-80 transition-opacity font-mono"
              >
                GROWL
              </Link>
              <span className="text-xs text-[#000823]/50 tracking-widest uppercase font-mono">
                {isAr ? "المجموعة القابضة" : "HOLDING CO."}
              </span>
            </div>
            <p className="mt-3 text-xs text-[#000823]/60 max-w-md leading-relaxed font-normal">
              {isAr
                ? "منظومة تكنولوجية متكاملة تنشط عبر خمسة قطاعات تشغيلية متخصصة: التسويق وبناء العلامات، التقنية، الذكاء الاصطناعي، تكامل الأنظمة والأمن السيبراني، والأنظمة السحابية."
                : "A unified technology group operating across five specialized sectors: Marketing & Branding, Tech, AI, System Integrator & Cybersecurity, and Hub."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-50 text-emerald-800 text-[11px] font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{isAr ? "5 قطاعات تشغيلية نشطة" : "5 Specialized Sectors Active"}</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#000823] text-white text-[11px] font-semibold tracking-wider uppercase hover:bg-[#000823]/85 transition-colors shadow-xs"
            >
              {isAr ? "ابدأ محادثة معنا ←" : "Start a Conversation →"}
            </Link>
          </div>
        </div>

        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Column 1: The 5 Sectors */}
          <div className="md:col-span-5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[11px] tracking-[0.22em] uppercase text-[#000823]/50 font-bold font-mono">
                {isAr ? "القطاعات المتخصصة الخمسة" : "Specialized Sectors (5)"}
              </h3>
              <span className="text-[10px] font-mono text-[#000823]/40">
                Single MSA
              </span>
            </div>

            <ul className="space-y-3">
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={sector.canonicalHref}
                    className="flex items-center gap-3 text-xs text-[#000823]/75 hover:text-[#000823] transition-colors group"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-2xs"
                      style={{
                        backgroundColor: `${sector.color}15`,
                        border: `1px solid ${sector.color}30`,
                      }}
                    >
                      <SectorIcon slug={sector.slug} size={14} color={sector.color} />
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform font-medium">
                      {isAr ? sector.fullNameAr : sector.fullName}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company Links */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] tracking-[0.22em] uppercase text-[#000823]/50 mb-5 font-bold font-mono">
              {isAr ? "المجموعة والشركة" : "Company & Navigation"}
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#000823]/70 hover:text-[#000823] transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {isAr ? link.nameAr : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Governance, Trust & Standards */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] tracking-[0.22em] uppercase text-[#000823]/50 mb-5 font-bold font-mono">
              {isAr ? "الموثوقية والامتثال" : "Governance & Trust"}
            </h3>
            <ul className="space-y-2.5 mb-5">
              {FOOTER_LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#000823]/70 hover:text-[#000823] transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {isAr ? link.nameAr : link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-white border border-[#000823]/[0.08] text-[11px] text-[#000823]/65 leading-relaxed font-mono">
              {isAr
                ? "تعتمد مجموعة جرول معايير حوكمة مؤسسية رصينة واتفاقيات سرية بيانات صارمة تضمن استقلالية وسلامة أصول العملاء."
                : "Growl operates under a single consolidated MSA, strict tenant isolation, and verified procurement standards."}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────────────────── */}
      <div className="border-t border-[#000823]/[0.08]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#000823]/50">
          <div className="flex items-center gap-3 font-medium">
            <span>© {currentYear} GROWL. {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-[#000823] transition-colors">
              {isAr ? "الخصوصية" : "Privacy"}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#000823] transition-colors">
              {isAr ? "الشروط" : "Terms"}
            </Link>
          </div>

          <div className="font-mono text-[11px]">
            <span>{isAr ? "جرول: خمسة قطاعات. رؤية تقنية موحدة." : "Growl: Five Specialized Sectors. One Technical Group."}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
