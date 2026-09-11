"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { SECTORS } from "@/lib/sectors-data"
import { SectorIcon } from "@/components/shared/sector-icon"

export function HomeHero() {
  const { isAr } = useLanguage()

  // 5 primary operational holding sectors
  const holdingSectors = SECTORS.slice(0, 5)
  const [activeSectorId, setActiveSectorId] = useState<string>(holdingSectors[0].id)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  const activeSector = holdingSectors.find((s) => s.id === activeSectorId) || holdingSectors[0]

  // Auto-cycle through the 5 sectors every 5.5s unless hovered
  React.useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveSectorId((prev) => {
        const idx = holdingSectors.findIndex((s) => s.id === prev)
        const nextIdx = (idx + 1) % holdingSectors.length
        return holdingSectors[nextIdx].id
      })
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused, holdingSectors])

  const HOLDING_PILLARS = [
    {
      metric: "05",
      title: isAr ? "شركات تشغيلية متخصصة" : "Autonomous Operating Sectors",
      desc: isAr
        ? "عمق هندسي واستشاري متخصص بلا تشتت"
        : "Dedicated specialist teams with vertical focus",
    },
    {
      metric: "01",
      title: isAr ? "عقد خدمات رئيسي موحد" : "Single Legal MSA",
      desc: isAr
        ? "كيان تعاقدي موحد وفوترة مركزية ملزمة"
        : "One contracting entity & consolidated billing",
    },
    {
      metric: "100%",
      title: isAr ? "تنفيذ هندسي مباشر" : "Direct In-House Delivery",
      desc: isAr
        ? "فرق عمل داخلية معتمدة دون هوامش وسطاء"
        : "Senior internal engineering, zero broker markup",
    },
    {
      metric: "MENA",
      title: isAr ? "المقر الرئيسي بالقاهرة" : "Cairo HQ & Regional Reach",
      desc: isAr
        ? "تغطية تشغيلية شاملة لكبرى المؤسسات بالمنطقة"
        : "Regional enterprise execution & audited compliance",
    },
  ]

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 bg-[#000823] text-white overflow-hidden border-b border-white/[0.08] w-full max-w-full">
      {/* ── Refined Luxury Architectural Atmosphere (No Cartesian Grids) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 50% -10%, #06184C 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-w-0">
          
          {/* ── Left Column: Authoritative Institutional Holding Narrative ── */}
          <div className="lg:col-span-7 min-w-0">
            {/* Corporate Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="inline-block w-2 h-2 bg-[#7135E5] rounded-xs rotate-45 shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-white/70 font-semibold truncate">
                {isAr ? "مجموعة قابضة مستقلة · المقر الرئيسي بالقاهرة" : "Independent Corporate Holding · Cairo HQ"}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] xl:text-[3.35rem] font-bold tracking-tight leading-[1.14] text-white mb-6 break-words max-w-2xl">
              {isAr
                ? "مجموعة قابضة مستقلة تدير خمسة قطاعات تشغيلية متخصصة."
                : "An Independent Holding Company Governing Five Operating Sectors."}
            </h1>

            {/* Institutional Narrative Subtitle */}
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal mb-8 max-w-xl">
              {isAr
                ? "تعمل جرول كمظلة حوكمة مركزية تجمع بين هندسة البرمجيات، البنية السحابية، الذكاء الاصطناعي، تكامل الأنظمة والأمن السيبراني، ومنظومات الاشتراكات SaaS. عقد موحد (MSA) يضمن دقة التنفيذ واستقرار التشغيل دون احتكاك بين الموردين."
                : "Growl Co. centralizes institutional governance, capital, and technical excellence across specialized operational entities in Software Engineering, Cloud Architecture, Cybersecurity, Artificial Intelligence, and Enterprise SaaS—unified by a single Master Services Agreement."}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 w-full">
              <a
                href="#sectors"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-[#000823] text-xs tracking-wider uppercase font-bold hover:bg-white/90 transition-all duration-200 shadow-md active:scale-[0.99] text-center"
              >
                <span>{isAr ? "استكشف الشركات التشغيلية" : "Explore Operating Sectors"}</span>
                <span className="ltr:ml-2 rtl:mr-2 font-mono">↓</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 text-white text-xs tracking-wider uppercase font-semibold hover:bg-white/[0.08] hover:border-white/40 transition-all duration-200 active:scale-[0.99] text-center"
              >
                <span>{isAr ? "عقد الخدمات الموحد (MSA)" : "Master Services Agreement"}</span>
                <span className="ltr:ml-2 rtl:mr-2 font-mono">→</span>
              </Link>
            </div>

            {/* Micro Holding Reassurance */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[11px] font-mono text-white/45">
              <span className="flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                {isAr ? "تسليم إقليمي مباشر" : "Direct Regional Delivery"}
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="shrink-0">{isAr ? "صفر هوامش وسطاء" : "Zero Subcontractor Margin"}</span>
              <span className="hidden sm:inline">·</span>
              <span className="shrink-0">{isAr ? "اعتمادات مدققة" : "Audited Enterprise SLAs"}</span>
            </div>
          </div>

          {/* ── Right Column: Living Operating Companies Showcase ─────────── */}
          <div
            className="lg:col-span-5 min-w-0 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="rounded-3xl border border-white/[0.14] bg-[#000823]/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6 overflow-hidden w-full">
              
              {/* Sector Switcher Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">
                    {isAr ? "الشركات التشغيلية التابعة" : "OPERATING PORTFOLIO"}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/75 font-semibold">
                    05
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase">
                  {isAr ? "حوكمة جرول المركزية" : "GROWL GOVERNANCE"}
                </span>
              </div>

              {/* Interactive Sector Tabs */}
              <div className="grid grid-cols-5 gap-1 sm:gap-1.5 mb-4">
                {holdingSectors.map((sector) => {
                  const isCurrent = sector.id === activeSectorId
                  // Crisp short names for tabs
                  const shortName =
                    sector.id === "system-integrator-cybersecurity"
                      ? isAr ? "أمن سيبراني" : "Cyber"
                      : isAr ? sector.nameAr : sector.name

                  return (
                    <button
                      key={sector.id}
                      onClick={() => setActiveSectorId(sector.id)}
                      className={`px-1 sm:px-2 py-2 rounded-xl text-center transition-all duration-200 cursor-pointer flex flex-col items-center gap-1 min-w-0 ${
                        isCurrent
                          ? "bg-white/[0.12] border border-white/25 shadow-sm"
                          : "bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/15"
                      }`}
                      style={{
                        borderColor: isCurrent ? sector.color : undefined,
                      }}
                      title={sector.fullName}
                    >
                      <span
                        className="text-[9px] font-mono font-bold"
                        style={{ color: isCurrent ? sector.color : "rgba(255,255,255,0.4)" }}
                      >
                        {sector.index}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-white truncate w-full">
                        {shortName}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Active Sector Stage Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#000823] group">
                {/* Sector Hero Photography */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={activeSector.heroImage || "/images/sectors/tech-hero.webp"}
                    alt={activeSector.fullName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle Dark Editorial Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000823] via-[#000823]/70 to-transparent" />
                  
                  {/* Sector Badge Over Image */}
                  <div className="absolute top-3.5 left-3.5 rtl:left-auto rtl:right-3.5 flex items-center gap-2">
                    <span
                      className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/20"
                      style={{
                        backgroundColor: `${activeSector.color}30`,
                        color: activeSector.color,
                      }}
                    >
                      SECTOR {activeSector.index}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      {isAr ? activeSector.fullNameAr : activeSector.fullName}
                    </span>
                  </div>

                  {/* Brand Color Indicator Stripe */}
                  <div
                    className="absolute top-0 inset-x-0 h-1"
                    style={{ backgroundColor: activeSector.color }}
                  />
                </div>

                {/* Sector Body Information */}
                <div className="p-4 sm:p-5 -mt-6 relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {isAr ? activeSector.headlineAr : activeSector.headline}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed max-w-md">
                        {isAr ? activeSector.descriptionAr : activeSector.description}
                      </p>
                    </div>

                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
                      style={{ backgroundColor: `${activeSector.color}20` }}
                    >
                      <SectorIcon slug={activeSector.slug} size={16} color={activeSector.color} />
                    </div>
                  </div>

                  {/* Practice Capabilities Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 my-3.5 pt-3 border-t border-white/[0.08]">
                    {(isAr ? activeSector.servicesAr : activeSector.services).slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-white/80 border border-white/10 truncate max-w-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Direct Link to Operating Sector Page */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href={activeSector.canonicalHref}
                      className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wider uppercase transition-colors hover:underline"
                      style={{ color: activeSector.color }}
                    >
                      <span>{isAr ? "عرض مواصفات القطاع ونطاق العمل" : "View Sector Specifications"}</span>
                      <span className="ltr:inline-block rtl:hidden">→</span>
                      <span className="hidden rtl:inline-block">←</span>
                    </Link>

                    <span className="text-[9px] font-mono text-white/40 uppercase">
                      ENTERPRISE READY
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Institutional Seal */}
              <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] font-mono text-white/50 gap-1.5">
                <span className="flex items-center gap-2">
                  <img
                    src="/growl-icons/white-icon.png"
                    alt="Growl Holding"
                    className="h-4 w-auto object-contain opacity-75"
                  />
                  <span>GROWL CO. CENTRAL GOVERNANCE</span>
                </span>
                <span className="text-white/40">SINGLE CONTRACT · AUDITED SLAS</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Institutional Foundation Strip ───────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full mt-12 sm:mt-16 pt-8 border-t border-white/[0.10]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOLDING_PILLARS.map((p, idx) => (
            <div key={idx} className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                  {p.metric}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  REF 0{idx + 1}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1 truncate">
                {p.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-white/55 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

