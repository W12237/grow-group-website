"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { PartnerItem } from "@/lib/partners-data"
import { SectionLabel } from "@/components/shared/section-label"

interface PartnerEcosystemProps {
  title: string
  titleAr: string
  description?: string
  descriptionAr?: string
  partners: PartnerItem[]
  accentColor: string
  accentTint: string
  featuredPartner?: PartnerItem
  isAr?: boolean
  sectorSlug: string
}

export function PartnerEcosystem({
  title,
  titleAr,
  description,
  descriptionAr,
  partners,
  accentColor,
  accentTint,
  featuredPartner,
  isAr = false,
  sectorSlug,
}: PartnerEcosystemProps) {
  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>()
    partners.forEach((p) => set.add(p.category))
    return ["All", ...Array.from(set)]
  }, [partners])

  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filteredPartners = useMemo(() => {
    if (activeCategory === "All") return partners
    return partners.filter((p) => p.category === activeCategory)
  }, [partners, activeCategory])

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Eyebrow & Title ────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>
            {isAr ? "المنظومة والمنصات التقنية" : "PARTNERS & ECOSYSTEM"}
          </SectionLabel>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.12]">
            {isAr ? titleAr : title}
          </h2>

          <p className="mt-4 text-[15px] md:text-[17px] text-[#000823]/65 leading-relaxed font-normal">
            {isAr
              ? descriptionAr ||
                "نصمم، نبني، وندمج حلولنا بالاعتماد على أرقى المنصات والبنى التحتية التكنولوجية العالمية لضمان أعلى مستويات الأداء والاستقرار."
              : description ||
                "We architect, implement, and integrate enterprise solutions across leading technologies and platforms to ensure production reliability, scalability, and long-term support."}
          </p>
        </div>

        {/* ── Featured Partner Card (if supplied, e.g. Fortinet) ───────── */}
        {featuredPartner && (
          <div className="mb-14 p-8 rounded-2xl bg-white border border-[#000823]/[0.10] shadow-sm relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: accentColor }}
            />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase font-bold px-2.5 py-1 rounded"
                    style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                  >
                    {isAr ? "منظومة حلول استراتيجية" : "FEATURED VENDOR SOLUTION"}
                  </span>
                  {featuredPartner.verificationStatus && (
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Partner
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-[#000823]">
                  {featuredPartner.name}
                </h3>
                <p className="text-sm text-[#000823]/70 leading-relaxed">
                  {isAr ? featuredPartner.descriptionAr : featuredPartner.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 shadow-xs"
                  style={{ backgroundColor: accentColor }}
                >
                  {isAr ? "استكشف حلول المنظومة" : "Explore Vendor Solutions"}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── Category Filters ─────────────────────────────────────────── */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#000823] text-white shadow-xs"
                      : "bg-white text-[#000823]/70 border border-[#000823]/[0.08] hover:border-[#000823]/25 hover:text-[#000823]"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        )}

        {/* ── Structured Logo & Platform Grid (5-6 cols desktop, 3 tablet, 2 mobile) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 md:gap-4 mb-14">
          {filteredPartners.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-[#000823]/[0.08] flex flex-col justify-between items-center text-center transition-all duration-200 hover:-translate-y-1 group"
              style={{
                boxShadow: "0 2px 8px rgba(0,8,35,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${accentColor}60`
                e.currentTarget.style.boxShadow = `0 12px 24px ${accentColor}18`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,8,35,0.08)"
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,8,35,0.02)"
              }}
            >
              {/* Logo Mark Container (Optical alignment, grayscale default) */}
              <div className="w-12 h-12 rounded-xl bg-[#F8F8F8] border border-[#000823]/[0.06] flex items-center justify-center mb-3 transition-colors group-hover:bg-white">
                <span className="font-mono text-[11px] font-bold text-[#000823]/60 group-hover:text-[#000823] transition-colors uppercase">
                  {item.name.slice(0, 3)}
                </span>
              </div>

              {/* Company Info */}
              <div className="w-full">
                <div className="text-[13px] font-bold text-[#000823] truncate group-hover:text-[#000823] transition-colors">
                  {item.name}
                </div>
                <div className="text-[10px] font-mono text-[#000823]/50 mt-1 truncate">
                  {isAr ? item.categoryAr : item.category}
                </div>
              </div>

              {/* Relationship or Verification Badge */}
              <div className="mt-3 pt-2.5 border-t border-[#000823]/[0.06] w-full text-[9px] font-mono text-[#000823]/45 truncate">
                {item.verificationStatus ? (
                  <span className="text-emerald-600 font-semibold">
                    {item.certificationLevel || "Verified"}
                  </span>
                ) : (
                  <span>{isAr ? item.relationshipTypeAr : item.relationshipType}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Partner Platform Descriptions Detail Strip ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filteredPartners.slice(0, 3).map((item) => (
            <div
              key={`detail-${item.id}`}
              className="p-5 rounded-2xl bg-white border border-[#000823]/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#000823]">{item.name}</span>
                  <span className="text-[10px] font-mono text-[#000823]/50">
                    {isAr ? item.categoryAr : item.category}
                  </span>
                </div>
                <p className="text-xs text-[#000823]/65 leading-relaxed">
                  {isAr ? item.descriptionAr : item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#000823]/[0.06] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#000823]/45">
                  {isAr ? item.relationshipTypeAr : item.relationshipType}
                </span>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#000823] hover:underline flex items-center gap-1"
                >
                  <span>Visit</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Transparency Disclosure & CTA for Partnerships ──────────── */}
        <div className="p-6 rounded-2xl border border-[#000823]/[0.08] bg-white flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-[#000823]/55 max-w-2xl leading-relaxed font-mono">
            {isAr
              ? "إشعار الامتثال: تمثل أسماء وشعارات المنصات التكنولوجية المذكورة أعلاه بيئات عمل وتقنيات تدعمها وتنفذها وتتكامل معها شركة Growl. لا تُعرض علامات الشراكة الرسمية المعتمدة إلا عند اكتمال التحقق التعاقدي الصريح."
              : "Compliance Notice: Listed platform names and marks represent environments, technologies, and integration capabilities supported and implemented by Growl. Formal vendor partnership and certification badges are displayed exclusively when verified under formal contractual agreements."}
          </p>

          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-xl border border-[#000823]/15 text-xs font-semibold uppercase tracking-wider text-[#000823] hover:bg-[#000823] hover:text-white transition-all duration-200"
          >
            {isAr ? "استفسارات الشراكات التقنية" : "Partnership Inquiries"}
          </Link>
        </div>
      </div>
    </section>
  )
}
