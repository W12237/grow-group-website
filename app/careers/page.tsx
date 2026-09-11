"use client"

import React, { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll"
import { SectionLabel } from "@/components/shared/section-label"
import { CTASection } from "@/components/sections/cta-section"
import { useLanguage } from "@/components/language-context"

interface JobRole {
  division: string
  divisionAr: string
  title: string
  titleAr: string
  location: string
  locationAr: string
  type: string
  typeAr: string
  accent: string
  desc: string
  descAr: string
}

const ROLES: JobRole[] = [
  {
    division: "Growl AI & Automation",
    divisionAr: "جرول للذكاء الاصطناعي والأتمتة",
    title: "Senior AI Agent & MCP Systems Architect",
    titleAr: "مهندس معمارية وكلاء الذكاء الاصطناعي و MCP أول",
    location: "Remote / Hybrid",
    locationAr: "عن بُعد / هجين",
    type: "Full-Time",
    typeAr: "دوام كامل",
    accent: "#06B6D4",
    desc: "Design and implement autonomous agent swarms, vector retrieval pipelines, and secure enterprise MCP servers.",
    descAr: "تصميم وتنفيذ منظومات الوكلاء المستقلين، ومسارات استرجاع البيانات الموجهة، وخوادم بروتوكول MCP المؤسسية.",
  },
  {
    division: "Growl Technology",
    divisionAr: "جرول للتقنية وهندسة البرمجيات",
    title: "Staff Full-Stack Engineer (Next.js / Cloud Microservices)",
    titleAr: "مهندس برمجيات رئيسي (Next.js / خدمات سحابية)",
    location: "Remote",
    locationAr: "عن بُعد بالكامل",
    type: "Full-Time",
    typeAr: "دوام كامل",
    accent: "#F97316",
    desc: "Lead high-scale web and mobile architectures, cloud-native deployments, and mission-critical API engines.",
    descAr: "قيادة تطوير البنى البرمجية السحابية فائقة الأداء، والتطبيقات الحديثة، والواجهات البرمجية عالية الاعتمادية.",
  },
  {
    division: "Growl System Integrator & Cybersecurity",
    divisionAr: "جرول لتكامل الأنظمة والأمن السيبراني",
    title: "Lead Enterprise Systems Integration Architect (SAP / Fortinet)",
    titleAr: "مهندس قيادي لتكامل وربط الأنظمة المؤسسية (SAP / Fortinet)",
    location: "Hybrid",
    locationAr: "هجين",
    type: "Full-Time",
    typeAr: "دوام كامل",
    accent: "#EF4444",
    desc: "Construct event-driven webhooks, ERP synchronizers, database pipelines, and resilient Fortinet network security fabrics.",
    descAr: "بناء قنوات تدفق الأحداث، وربط أنظمة ERP و CRM، ومزامنة قواعد البيانات الضخمة مع جدران حماية Fortinet.",
  },
  {
    division: "Growl System Integrator & Cybersecurity",
    divisionAr: "جرول لتكامل الأنظمة والأمن السيبراني",
    title: "Senior Penetration Tester & Cloud Security Auditor",
    titleAr: "خبير أول في اختبارات الاختراق وتدقيق الأمان السحابي",
    location: "Remote",
    locationAr: "عن بُعد بالكامل",
    type: "Full-Time",
    typeAr: "دوام كامل",
    accent: "#EF4444",
    desc: "Execute full-scope red teaming, container security assessments, and Zero-Trust architecture audits.",
    descAr: "تنفيذ محاكاة الهجمات واختبارات الاختراق المعمقة، وتدقيق حزم الحاويات، وفحص معمارية انعدام الثقة.",
  },
  {
    division: "Growl Marketing & Branding",
    divisionAr: "جرول للتسويق وبناء العلامات",
    title: "Brand Strategist & Performance Growth Lead",
    titleAr: "قائد استراتيجيات العلامة التجارية والنمو الرقمي",
    location: "Hybrid",
    locationAr: "هجين",
    type: "Full-Time",
    typeAr: "دوام كامل",
    accent: "#D946EF",
    desc: "Craft distinctive corporate brand positions, lead performance paid acquisition campaigns, and optimize funnels.",
    descAr: "صياغة تموضع العلامات التجارية الكبرى، وقيادة حملات الاستحواذ الإعلانية، وتحسين معدلات التحويل.",
  },
  {
    division: "Growl Hub Platform",
    divisionAr: "منصة جرول هب لإدارة الوكالات",
    title: "Staff Systems Engineer - Agency OS Platform",
    titleAr: "مهندس نظم رئيسي - منصة تشغيل الوكالات Growl Hub",
    location: "Remote",
    locationAr: "عن بُعد بالكامل",
    type: "Full-Time",
    typeAr: "دوام كامل",
    accent: "#3B82F6",
    desc: "Build high-throughput event processing, multi-tenant database isolation, and recurring billing microservices.",
    descAr: "تطوير محركات معالجة الأحداث فائقة السرعة، وعزل بيانات العملاء في بيئات متعددة المستأجرين، وأنظمة الفوترة.",
  },
]

export default function CareersPage() {
  const { isAr } = useLanguage()

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="bg-[#f8f8f8] text-[#000823] min-h-screen font-sans antialiased"
    >
      <SiteHeader />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06]">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#000823]/10 bg-white text-[#000823]/70 text-[11px] font-mono tracking-widest uppercase mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{isAr ? "انضم إلى فريق النخبة في GROWL" : "JOIN GROWL CO. HOLDING GROUP"}</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[1.05] mb-6">
              {isAr ? (
                <>اصنع أثراً حقيقياً<br />عبر خمسة تخصصات تقنية كبرى.</>
              ) : (
                <>Build meaningful engineering<br />across five disciplines.</>
              )}
            </h1>

            <p className="text-[16px] text-[#000823]/65 leading-relaxed max-w-2xl font-normal">
              {isAr
                ? "تجمع GROWL نخبة المهندسين والمبتكرين في مجالات الذكاء الاصطناعي، وهندسة البرمجيات، والأمن السيبراني، وتكامل الأنظمة، والتسويق القائم على الأداء. إذا كنت تبحث عن بيئة تقدر الجودة العالية، وتتحدى الروتين، وتصنع منتجات عالمية — مكانك معنا."
                : "Growl unites exceptional engineers, strategists, and builders. If you thrive on high-stakes technical challenges and share our commitment to uncompromising craftsmanship — explore our open positions."}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06] bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll className="mb-14">
            <SectionLabel>{isAr ? "ثقافة العمل وقيمنا" : "ENGINEERING CULTURE & VALUES"}</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.1]">
              {isAr ? "بيئة عمل مبنية على التميز والمسؤولية." : "How we build, collaborate, and evolve."}
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isAr ? "الجودة فوق الكمية" : "Quality Over Volume",
                desc: isAr
                  ? "نرفض العمل الرديء أو الحلول المؤقتة. نقبل فقط المشاريع والمهام التي يمكننا تقديمها بأعلى درجات الإتقان الهندسي والتجاري."
                  : "We reject superficial vanity work. Every line of code, design system, and deployment must meet world-class enterprise standards.",
              },
              {
                title: isAr ? "التعاون بين القطاعات الخمسة" : "Cross-Discipline Synergy",
                desc: isAr
                  ? "ستعمل جنباً إلى جنب مع خبراء الذكاء الاصطناعي، ومهندسي الأنظمة، وخبراء الأمن السيبراني، لتوسيع آفاقك المهنية باستمرار."
                  : "Collaborate directly with AI researchers, infrastructure specialists, and creative directors across five interconnected divisions.",
              },
              {
                title: isAr ? "الاستقلالية والمسؤولية التامة" : "Autonomy & True Ownership",
                desc: isAr
                  ? "نمنح مهندسينا وقادتنا حرية اتخاذ القرارات التقنية الصحيحة مع الالتزام التام بتحقيق نتائج ملموسة لعملائنا وشركائنا."
                  : "We provide true autonomy to build the right solutions without micromanagement, backed by shared accountability.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 80}>
                <div className="rounded-2xl border border-[#000823]/[0.08] bg-[#F8F8F8] p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#000823] mb-3">{item.title}</h3>
                    <p className="text-xs text-[#000823]/65 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06]">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll className="mb-14">
            <div className="flex items-center justify-between">
              <div>
                <SectionLabel>{isAr ? "الوظائف والفرص المتاحة" : "CURRENT OPPORTUNITIES"}</SectionLabel>
                <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.1]">
                  {isAr ? "اختر مسارك المهني القادم." : "Open Positions Across Growl."}
                </h2>
              </div>
              <span className="hidden md:inline-block text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 font-semibold border border-emerald-500/20">
                {isAr ? "6 وظائف نشطة" : "6 Active Roles"}
              </span>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {ROLES.map((role, i) => (
              <RevealOnScroll key={role.title} delay={i * 60}>
                <div className="rounded-2xl border border-[#000823]/[0.08] bg-white p-6 md:p-8 hover:border-[#000823]/[0.2] hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: role.accent }} />
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: role.accent }}>
                        {isAr ? role.divisionAr : role.division}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] text-[#000823]/60">
                        {isAr ? role.typeAr : role.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#000823] group-hover:text-[#000823] transition-colors mb-2">
                      {isAr ? role.titleAr : role.title}
                    </h3>

                    <p className="text-xs text-[#000823]/65 leading-relaxed font-normal max-w-2xl mb-2">
                      {isAr ? role.descAr : role.desc}
                    </p>

                    <div className="text-[11px] text-[#000823]/40 font-mono">
                      {isAr ? role.locationAr : role.location}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#000823] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#000823] transition-all duration-200 shadow-sm"
                    >
                      {isAr ? "قدّم الآن" : "Apply Now"}
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.06]">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll className="mb-10 text-center">
            <SectionLabel>{isAr ? "المزايا والمكافآت" : "COMPENSATION & BENEFITS"}</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-3xl font-light tracking-tight">
              {isAr ? "نستثمر في أفضل الكفاءات." : "We invest in world-class talent."}
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { en: "Top-Tier Compensation", ar: "رواتب ومكافآت تنافسية" },
              { en: "Remote Flexibility", ar: "مرونة عمل كاملة عن بُعد" },
              { en: "Annual Learning Stipend", ar: "ميزانية سنوية للتطوير والتعلم" },
              { en: "Premium Health Coverage", ar: "تأمين صحي شامل من الفئة الأولى" },
              { en: "Hardware of Choice (Apple/Linux)", ar: "أحدث الأجهزة التقنية المتقدمة" },
              { en: "Global Tech Conferences", ar: "حضور المؤتمرات التقنية الدولية" },
              { en: "Performance Equity & Bonuses", ar: "مكافآت أداء وحصص نمو" },
              { en: "Generous Paid Time Off", ar: "إجازات سنوية مدفوعة سخية" },
            ].map((b, i) => (
              <RevealOnScroll key={b.en} delay={i * 40}>
                <div className="rounded-xl border border-[#000823]/[0.06] bg-[#F8F8F8] px-4 py-4 text-center">
                  <div className="text-xs font-bold text-[#000823]">{isAr ? b.ar : b.en}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={isAr ? "هل لديك موهبة استثنائية ترغب في مشاركتها؟" : "Don't see an exact match?"}
        description={
          isAr
            ? "نحن دائماً منفتحون على استقطاب العقول المبدعة في التكنولوجيا، والذكاء الاصطناعي، والأمن، والتصميم. أرسل لنا سيرتك الذاتية."
            : "We are always interested in connecting with elite software engineers, researchers, and brand strategists. Send us a general application."
        }
        primaryCTA={{ label: isAr ? "أرسل طلباً عاماً" : "Send General Application", href: "/contact" }}
        secondaryCTA={{ label: isAr ? "عن المجموعة" : "About Growl Co.", href: "/about" }}
      />

      <SiteFooter />
    </div>
  )
}
