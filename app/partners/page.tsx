"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SectionLabel } from "@/components/shared/section-label"
import { SectorIcon } from "@/components/shared/sector-icon"
import { useLanguage } from "@/components/language-context"
import { PARTNERS_DATA, PartnerItem } from "@/lib/partners-data"
import { SECTORS } from "@/lib/sectors-data"

export default function PartnersEcosystemPage() {
  const { isAr } = useLanguage()
  const [selectedSector, setSelectedSector] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filteredPartners = useMemo(() => {
    return PARTNERS_DATA.filter((p) => {
      const matchesSector = selectedSector === "all" || p.sector === selectedSector
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSector && matchesSearch
    })
  }, [selectedSector, searchQuery])

  return (
    <div className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased">
      <SiteHeader />

      {/* ── Page Hero ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>{isAr ? "المنظومة والشركاء" : "TECHNOLOGY ECOSYSTEM"}</SectionLabel>

          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight leading-[1.08] mb-6 text-[#000823] max-w-4xl">
            {isAr ? (
              <>المنظومة التقنية والمنصات.<br />بناء مؤسسي على ركائز عالمية موثوقة.</>
            ) : (
              <>Technology Ecosystem & Platforms.<br />Engineered on Vetted Global Foundations.</>
            )}
          </h1>

          <p className="text-[17px] md:text-[19px] text-[#000823]/70 leading-relaxed max-w-3xl font-normal mb-8">
            {isAr
              ? "نصمم، نبني، وننفذ حلولنا البرمجية والأمنية والتسويقية بالاعتماد على أرقى المنصات العالمية. توفر هذه الصفحة دليلاً شاملاً للمنظومات والتقنيات المدعومة عبر قطاعاتنا الخمسة."
              : "We design, integrate, and deploy across premier global technology suites, cloud environments, and enterprise platforms. This directory indexes the complete technology ecosystem supported across our five specialized sectors."}
          </p>

          {/* Transparency Credibility Notice */}
          <div className="p-5 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] max-w-3xl text-xs text-[#000823]/60 leading-relaxed font-mono">
            <strong>{isAr ? "إشعار الامتثال والمعايير:" : "Governance & Credibility Standard:"}</strong>{" "}
            {isAr
              ? "تمثل العلامات والأسماء التجارية المدرجة أدناه تقنيات ومنصات وبيئات عمل تدعمها وتتكامل معها مجموعة جرول في مشاريع عملائها. لا تُعرض شارات الشراكة والاعتماد الرسمي إلا عند وجود توثيق تعاقدي رسمي سارٍ."
              : "Platform names and logos represent technologies, cloud environments, and integrations actively designed and deployed by Growl. Formal vendor partnerships and certification badges are displayed strictly when verified under active legal agreements."}
          </div>
        </div>
      </section>

      {/* ── Filters: Sector Tabs + Search ───────────────────────────────── */}
      <section className="py-8 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white sticky top-20 z-30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Sector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedSector("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                selectedSector === "all"
                  ? "bg-[#000823] text-white shadow-xs"
                  : "bg-[#F8F8F8] text-[#000823]/70 hover:bg-[#000823]/[0.05]"
              }`}
            >
              {isAr ? "جميع القطاعات (الكل)" : "All Sectors (All)"}
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

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? "ابحث عن منصة أو تقنية..." : "Search platforms or technologies..."}
              className="w-full md:w-64 px-4 py-2 text-xs rounded-xl border border-[#000823]/15 bg-[#F8F8F8] text-[#000823] placeholder-[#000823]/40 focus:outline-hidden focus:ring-2 focus:ring-[#000823]/30 font-mono"
            />
          </div>
        </div>
      </section>

      {/* ── Partner Directory Cards Grid ────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 text-xs font-mono text-[#000823]/50">
            <span>
              {isAr
                ? `عرض ${filteredPartners.length} منصة وتقنية مدعومة`
                : `Showing ${filteredPartners.length} indexed technologies & platforms`}
            </span>
            <span>Structured Verification</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPartners.map((partner) => {
              const sectorDef = SECTORS.find((s) => s.slug === partner.sector)
              return (
                <div
                  key={partner.id}
                  className="p-6 rounded-2xl bg-white border border-[#000823]/[0.08] flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
                  onMouseEnter={(e) => {
                    if (sectorDef) {
                      e.currentTarget.style.borderColor = `${sectorDef.color}50`
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,8,35,0.08)"
                  }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-[#F8F8F8] border border-[#000823]/[0.06] flex items-center justify-center font-mono text-xs font-bold text-[#000823]/70 uppercase">
                          {partner.name.slice(0, 3)}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#000823]">
                            {partner.name}
                          </h3>
                          <span className="text-[10px] font-mono text-[#000823]/50">
                            {isAr ? partner.categoryAr : partner.category}
                          </span>
                        </div>
                      </div>

                      {sectorDef && (
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${sectorDef.color}15`,
                            border: `1px solid ${sectorDef.color}30`,
                          }}
                          title={sectorDef.name}
                        >
                          <SectorIcon slug={sectorDef.slug} size={14} color={sectorDef.color} />
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-[#000823]/70 leading-relaxed font-normal mb-5">
                      {isAr ? partner.descriptionAr : partner.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#000823]/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-[#000823]/50">
                      {partner.verificationStatus ? (
                        <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          {partner.certificationLevel || "Verified"}
                        </span>
                      ) : (
                        <span>{isAr ? partner.relationshipTypeAr : partner.relationshipType}</span>
                      )}
                    </span>

                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#000823] hover:underline flex items-center gap-1"
                    >
                      <span>Website</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredPartners.length === 0 && (
            <div className="p-16 text-center rounded-2xl bg-white border border-[#000823]/[0.08] text-sm text-[#000823]/60 font-mono">
              {isAr ? "لم يتم العثور على منصات تطابق البحث." : "No platforms found matching the search criteria."}
            </div>
          )}
        </div>
      </section>

      {/* ── Partnership Inquiries CTA ──────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-t border-[#000823]/[0.08]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000823] mb-3">
            {isAr ? "هل تمثل منصة تكنولوجية أو مزود حلول مؤسسية؟" : "Represent a Technology Platform or Enterprise Vendor?"}
          </h2>
          <p className="text-sm text-[#000823]/65 max-w-xl mx-auto mb-8 font-normal">
            {isAr
              ? "نرحب دائماً بالتعاون مع مزودي البنى السحابية والحلول الأمنية والأنظمة المؤسسية لتوسيع منظومة تكامل عملائنا."
              : "We actively evaluate strategic vendor relationships, developer integrations, and enterprise platform certifications."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#000823] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#000823]/85 transition-colors shadow-xs"
          >
            {isAr ? "تواصل بشأن الشراكات التقنية" : "Inquire About Partnerships"}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
