"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { SECTORS } from "@/lib/sectors-data"

export function HomeHero() {
  const { isAr } = useLanguage()

  // 5 primary operational holding sectors
  const holdingSectors = SECTORS.slice(0, 5)
  const [activeSectorId, setActiveSectorId] = useState<string>(holdingSectors[0].id)
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

  const activeSector = holdingSectors.find((s) => s.id === activeSectorId) || holdingSectors[0]

  const handleSectorChange = (sectorId: string) => {
    if (sectorId === activeSectorId) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSectorId(sectorId)
      setIsTransitioning(false)
    }, 180)
  }

  // Curated, validated division showcases with natural colors and focused captions
  const DIVISION_SHOWCASE: Record<
    string,
    {
      tabName: string
      tabNameAr: string
      title: string
      titleAr: string
      caption: string
      captionAr: string
      image: string
      href: string
    }
  > = {
    saas: {
      tabName: "SaaS",
      tabNameAr: "البرمجيات",
      title: "SaaS & Enterprise Subscriptions",
      titleAr: "البرمجيات والاشتراكات المؤسسية",
      caption: "Modular enterprise software products deployed on predictable subscription models without setup friction.",
      captionAr: "منتجات برمجية مؤسسية جاهزة بنماذج اشتراك واضحة وتكاليف تشغيلية متوقعة.",
      image: "/images/sectors/saas-hero.webp",
      href: "/sectors/saas",
    },
    tech: {
      tabName: "Tech",
      tabNameAr: "التقنية",
      title: "Custom Software & Systems Engineering",
      titleAr: "هندسة وتطوير البرمجيات المؤسسية",
      caption: "High-performance web applications, native mobile systems, and platforms engineered for scale.",
      captionAr: "منصات ويب عالية الكفاءة وتطبيقات هواتف ذكية وبنية برمجية مصممة للتوسع والعمل المستمر.",
      image: "/images/sectors/tech-hero.webp",
      href: "/sectors/tech",
    },
    hub: {
      tabName: "Hub",
      tabNameAr: "المنصات",
      title: "Growl Hub Cloud Suite",
      titleAr: "منظومة جرول هب السحابية",
      caption: "Connected ERP, CRM, multi-branch POS, and operations management across regional business workflows.",
      captionAr: "أنظمة سحابية مترابطة لإدارة العمليات والمخازن ونقاط البيع والمبيعات متعددة الفروع.",
      image: "/images/sectors/hub-hero.webp",
      href: "/sectors/hub",
    },
    "system-integrator-cybersecurity": {
      tabName: "Cybersecurity",
      tabNameAr: "الأمن السيبراني",
      title: "System Integration & Cybersecurity",
      titleAr: "تكامل الأنظمة والأمن السيبراني",
      caption: "Connected infrastructure and security for business operations, zero-trust architectures, and data centers.",
      captionAr: "بنية تحتية متطورة، أمن شبكات صفر الثقة، وحلول مراكز البيانات المؤسسية الجاهزة للمناقصات.",
      image: "/images/sectors/cyber-hero.webp",
      href: "/sectors/system-integrator-cybersecurity",
    },
    ai: {
      tabName: "AI",
      tabNameAr: "الذكاء الاصطناعي",
      title: "Autonomous AI & Intelligent Automation",
      titleAr: "الذكاء الاصطناعي والأتمتة المستقلة",
      caption: "Tool-connected agentic systems, deterministic workflow engines, and private enterprise LLM infrastructure.",
      captionAr: "منظومات وكلاء أذكياء مستقلين، أتمتة مسارات العمل، وبنية نماذج لغوية خاصة وآمنة.",
      image: "/images/sectors/ai-hero.webp",
      href: "/sectors/ai",
    },
  }

  const currentShowcase = DIVISION_SHOWCASE[activeSector.id] || DIVISION_SHOWCASE["saas"]

  const INFO_COLUMNS = [
    {
      title: isAr ? "قطاعات تخصصية مستقلة" : "Specialist Divisions",
      desc: isAr
        ? "خمسة قطاعات تشغيلية متخصصة تضمن أقصى درجات العمق الفني والتنفيذي المباشر."
        : "Five focused operating sectors with dedicated technical depth and direct delivery.",
    },
    {
      title: isAr ? "تنفيذ منسق ومتكامل" : "Coordinated Delivery",
      desc: isAr
        ? "تنفيذ مشاريع متعددة التخصصات تحت مظلة حوكمة موحدة ومسؤولية تعاقدية واضحة."
        : "Seamless multi-disciplinary execution under unified governance and single accountability.",
    },
    {
      title: isAr ? "أنظمة تشغيل متصلة" : "Integrated Services",
      desc: isAr
        ? "هندسة سحابية، أمن سيبراني مؤسسي، وكلاء ذكاء اصطناعي، وبرمجيات مخصصة للنمو."
        : "Connected infrastructure, enterprise cybersecurity, intelligent automation, and custom software.",
    },
  ]

  return (
    <section className="relative bg-white text-[#000823] pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pb-24 border-b border-[#E6E7EC] w-full">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-12 lg:px-16 w-full">
        
        {/* ── 55/45 Two-Column Balanced Composition ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* ── Left Column: Confident Editorial Typography ──────────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Introductory Label: Simple, authoritative, no unverified legal holding jargon */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#7135E5] shrink-0" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#7135E5]">
                {isAr ? "مجموعة جرول" : "GROWL GROUP"}
              </span>
            </div>

            {/* Headline: Distinctive, tight, editorial (60–72px desktop, 46-54px tablet, 34-40px mobile) */}
            <h1 className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[62px] xl:text-[66px] font-bold text-[#000823] leading-[1.08] tracking-tight mb-5 sm:mb-6">
              {isAr ? (
                <>
                  منظومة واحدة.
                  <br />
                  خبرات متصلة متخصصة.
                </>
              ) : (
                <>
                  One group.
                  <br />
                  Connected expertise.
                </>
              )}
            </h1>

            {/* Supporting Copy: 18-20px, 1.6 line height, clean width (480–540px) */}
            <p className="text-[17px] sm:text-[18px] lg:text-[19px] text-[#525866] leading-[1.6] max-w-[520px] mb-8 font-normal">
              {isAr
                ? "تجمع جرول بين هندسة التقنية، التسويق، الذكاء الاصطناعي، والأنظمة السحابية لمساعدة الشركات على البناء والتشغيل والنمو."
                : "Growl brings together technology, marketing, AI, and business systems to help companies build, operate, and grow."}
            </p>

            {/* Action Buttons: Nightshade (#000823) primary button, 48-52px height, visible focus states */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#sectors"
                className="inline-flex items-center justify-center h-[50px] px-7 rounded-lg bg-[#000823] text-white text-sm font-semibold hover:bg-[#061238] transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#000823]/40 focus:ring-offset-2 active:scale-[0.99] text-center"
              >
                <span>{isAr ? "استكشف قطاعاتنا التشغيلية" : "Explore Our Divisions"}</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center h-[50px] px-7 rounded-lg border border-[#000823]/20 text-[#000823] text-sm font-semibold hover:border-[#000823] hover:bg-[#000823]/[0.03] bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#000823]/30 focus:ring-offset-2 active:scale-[0.99] text-center"
              >
                <span>{isAr ? "ناقش مشروعك معنا" : "Discuss Your Project"}</span>
                <span className="ltr:ml-2 rtl:mr-2 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 font-sans">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Clean Sector Showcase (No Dashboard Shell) ──── */}
          <div className="lg:col-span-5 flex flex-col w-full">
            
            {/* A. Sector Navigation Tabs: Simple text selector with purple underline */}
            <nav
              role="tablist"
              aria-label={isAr ? "قطاعات جرول" : "Growl Divisions"}
              className="flex items-center gap-4 sm:gap-6 border-b border-[#E6E7EC] mb-4 pb-0 overflow-x-auto no-scrollbar w-full"
            >
              {holdingSectors.map((sector) => {
                const isCurrent = sector.id === activeSectorId
                const info = DIVISION_SHOWCASE[sector.id]
                const label = isAr ? info.tabNameAr : info.tabName

                return (
                  <button
                    key={sector.id}
                    role="tab"
                    aria-selected={isCurrent}
                    onClick={() => handleSectorChange(sector.id)}
                    className={`relative pb-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer focus:outline-none ${
                      isCurrent
                        ? "text-[#000823] font-semibold"
                        : "text-[#525866] hover:text-[#000823]"
                    }`}
                  >
                    <span>{label}</span>
                    {/* Active Thin Purple Underline */}
                    {isCurrent && (
                      <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#7135E5] rounded-full" />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* B. Large Sector Photograph: ~4:3 aspect ratio, natural colors, clean border */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#E6E7EC] bg-[#F7F7FA]">
              <Image
                src={currentShowcase.image}
                alt={isAr ? currentShowcase.titleAr : currentShowcase.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                className={`object-cover transition-opacity duration-200 ${
                  isTransitioning ? "opacity-40" : "opacity-100"
                }`}
                priority
              />
            </div>

            {/* C. Caption Below Image: Division name, sentence, and link on white canvas */}
            <div
              className={`pt-4 pb-1 flex flex-col justify-between min-h-[96px] transition-opacity duration-200 ${
                isTransitioning ? "opacity-40" : "opacity-100"
              }`}
            >
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#000823] mb-1">
                  {isAr ? currentShowcase.titleAr : currentShowcase.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed line-clamp-2">
                  {isAr ? currentShowcase.captionAr : currentShowcase.caption}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={currentShowcase.href}
                  className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7135E5] hover:text-[#5E25C9] transition-colors"
                >
                  <span>{isAr ? "استكشف هذا القطاع" : "Explore this division"}</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                    ↗
                  </span>
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* ── Redesigned Bottom Information Strip ─────────────────────────── */}
        <div className="mt-14 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-[#E6E7EC]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {INFO_COLUMNS.map((col, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-[#000823] mb-1.5">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
