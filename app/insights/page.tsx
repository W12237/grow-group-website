"use client"

import React, { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll"
import { SectionLabel } from "@/components/shared/section-label"
import { CTASection } from "@/components/sections/cta-section"
import { useLanguage } from "@/components/language-context"

interface Article {
  category: string
  categoryAr: string
  title: string
  titleAr: string
  excerpt: string
  excerptAr: string
  date: string
  dateAr: string
  readTime: string
  readTimeAr: string
  accent: string
}

const ARTICLES: Article[] = [
  {
    category: "AI & Automation",
    categoryAr: "الذكاء الاصطناعي والأتمتة",
    title: "MCP Architecture: The New Enterprise Standard for Agentic Automation",
    titleAr: "معمارية بروتوكول MCP: المعيار المؤسسي الجديد للوكلاء المستقلين والأتمتة",
    excerpt:
      "Why Model Context Protocol is displacing brittle custom integrations and becoming the foundation for secure enterprise AI workflows.",
    excerptAr:
      "كيف أصبح بروتوكول MCP بديلاً حاسماً للتكاملات البرمجية الهشة والركيزة الأساسية لتشغيل وكلاء الذكاء الاصطناعي بأمان داخل المؤسسات.",
    date: "Sep 2026",
    dateAr: "سبتمبر 2026",
    readTime: "6 min read",
    readTimeAr: "قراءة 6 دقائق",
    accent: "#06B6D4",
  },
  {
    category: "Technology",
    categoryAr: "التقنية وهندسة البرمجيات",
    title: "Zero-Downtime Legacy Modernization: Strangler Fig Pattern at Scale",
    titleAr: "تحديث الأنظمة القديمة دون توقف التشغيل: تطبيق نمط خنق الشجرة في المؤسسات",
    excerpt:
      "How to migrate monolithic enterprise core systems to modern cloud microservices without risking operational interruptions.",
    excerptAr:
      "الاستراتيجيات الهندسية المتبعة لنقل الأنظمة العملاقة القديمة إلى خدمات سحابية مصغرة دون أي انقطاع في سير العمليات اليومية.",
    date: "Aug 2026",
    dateAr: "أغسطس 2026",
    readTime: "8 min read",
    readTimeAr: "قراءة 8 دقائق",
    accent: "#F97316",
  },
  {
    category: "System Integrator & Cybersecurity",
    categoryAr: "تكامل الأنظمة والأمن السيبراني",
    title: "Zero-Trust Architecture & Fortinet Perimeter Defense in Modern Hybrid Clouds",
    titleAr: "معمارية انعدام الثقة (Zero-Trust) وحماية Fortinet في البيئات السحابية الهجينة",
    excerpt:
      "Why perimeter-only firewalls fail against credential-stuffing, and how identity micro-segmentation with FortiGate delivers active defense.",
    excerptAr:
      "لماذا أصبحت جدران الحماية الخارجية غير كافية لحماية أصول الشركات، وكيف يحقق التقسيم الدقيق للهويات الرقمية مع Fortinet حماية متكاملة.",
    date: "Aug 2026",
    dateAr: "أغسطس 2026",
    readTime: "7 min read",
    readTimeAr: "قراءة 7 دقائق",
    accent: "#EF4444",
  },
  {
    category: "System Integrator & Cybersecurity",
    categoryAr: "تكامل الأنظمة والأمن السيبراني",
    title: "Why Event-Driven Webhooks Beat Nightly Batch ETL Jobs for Enterprise ERPs",
    titleAr: "لماذا يتفوق تكامل الأحداث اللحظية (Webhooks) على المزامنة الدفترية المجدولة لأنظمة ERP",
    excerpt:
      "Batch processing creates 24-hour business blind spots. Explore how streaming event pipelines unlock real-time ERP-to-CRM visibility.",
    excerptAr:
      "تتسبب المزامنة الدورية المجدولة في فجوات بيانية خطيرة. استكشف كيف تمنحك قنوات تدفق الأحداث رؤية لحظية موحدة بين ERP و CRM.",
    date: "Jul 2026",
    dateAr: "يوليو 2026",
    readTime: "5 min read",
    readTimeAr: "قراءة 5 دقائق",
    accent: "#EF4444",
  },
  {
    category: "Growl Hub Platform",
    categoryAr: "منصة جرول هب لإدارة الوكالات",
    title: "The Agency Operating System: Replacing Five SaaS Subscriptions with One Workspace",
    titleAr: "نظام تشغيل الوكالات: كيف تستبدل خمس اشتراكات برمجية بمساحة عمل موحدة",
    excerpt:
      "How high-growth agencies consolidate milestone delivery, white-labeled client portals, and recurring Stripe retainers.",
    excerptAr:
      "كيف تقوم الوكالات الرائدة بتوحيد تسليم المشاريع، وبوابات العملاء المخصصة، والفوترة المتكررة في منصة سحابية واحدة.",
    date: "Jul 2026",
    dateAr: "يوليو 2026",
    readTime: "9 min read",
    readTimeAr: "قراءة 9 دقائق",
    accent: "#3B82F6",
  },
  {
    category: "Marketing & Branding",
    categoryAr: "التسويق وبناء العلامات",
    title: "Positioning for B2B Pricing Power: Turning Tech into Enterprise Moats",
    titleAr: "التموضع الاستراتيجي للتسعير المتميز في أسواق B2B: تحويل التكنولوجيا إلى حصانة تجارية",
    excerpt:
      "How distinctive visual systems, narrative clarity, and multi-touch attribution elevate tech companies out of commodity price wars.",
    excerptAr:
      "كيف تسهم الهوية البصرية المتميزة ووضوح السرد التجاري في تمكين الشركات التقنية من فرض أسعارها والتفوق على المنافسين.",
    date: "Jun 2026",
    dateAr: "يونيو 2026",
    readTime: "6 min read",
    readTimeAr: "قراءة 6 دقائق",
    accent: "#D946EF",
  },
]

export default function InsightsPage() {
  const { isAr } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("ALL")

  const categories = [
    { id: "ALL", label: "All Insights", labelAr: "كافة المقالات", accent: "#000823" },
    { id: "Marketing & Branding", label: "Marketing & Branding", labelAr: "التسويق وبناء العلامات", accent: "#D946EF" },
    { id: "Technology", label: "Technology", labelAr: "التقنية وهندسة البرمجيات", accent: "#F97316" },
    { id: "AI & Automation", label: "AI & Automation", labelAr: "الذكاء الاصطناعي والأتمتة", accent: "#06B6D4" },
    { id: "System Integrator & Cybersecurity", label: "System Integrator & Cyber", labelAr: "تكامل الأنظمة والأمن", accent: "#EF4444" },
    { id: "Growl Hub Platform", label: "Growl Hub", labelAr: "منصة جرول هب", accent: "#3B82F6" },
  ]

  const filtered =
    selectedCategory === "ALL"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory)

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
              <span className="w-2 h-2 rounded-full bg-[#000823]" />
              <span>{isAr ? "الرؤى والتحليلات الفكرية" : "EXECUTIVE INSIGHTS & ENGINEERING PAPERS"}</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[1.05] mb-6">
              {isAr ? (
                <>رؤى وأبحاث هندسية متقدمة<br />من خبراء مجموعة GROWL.</>
              ) : (
                <>Strategic thinking & engineering papers<br />from across the Growl group.</>
              )}
            </h1>

            <p className="text-[16px] text-[#000823]/65 leading-relaxed max-w-2xl font-normal">
              {isAr
                ? "مقالات وتحليلات استراتيجية حول الذكاء الاصطناعي، وهندسة البرمجيات، والأمن السيبراني، وتكامل البيانات المؤسسية، واستوديو منتجات SaaS يقدمها المهندسون والاستشاريون التنفيذيون في المجموعة."
                : "Deep technical perspectives on artificial intelligence, software architecture, cybersecurity hardening, and product scaling from the specialists delivering mission-critical outcomes every day."}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Category filters */}
      <section className="px-6 md:px-12 lg:px-20 py-8 border-b border-[#000823]/[0.06] bg-white sticky top-16 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`text-[11px] font-mono uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? "bg-[#000823] text-white font-semibold shadow-xs"
                    : "bg-[#F8F8F8] text-[#000823]/60 hover:text-[#000823]"
                }`}
              >
                {isAr ? c.labelAr : c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <RevealOnScroll key={article.title} delay={i * 60}>
              <div className="rounded-2xl border border-[#000823]/[0.08] bg-white p-7 hover:border-[#000823]/[0.2] hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold"
                      style={{ color: article.accent }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: article.accent }} />
                      <span>{isAr ? article.categoryAr : article.category}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#000823]/40">
                      {isAr ? article.readTimeAr : article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#000823] group-hover:text-[#000823] transition-colors leading-snug mb-3">
                    {isAr ? article.titleAr : article.title}
                  </h2>

                  <p className="text-xs text-[#000823]/65 leading-relaxed font-normal mb-6">
                    {isAr ? article.excerptAr : article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#000823]/50">
                  <span className="font-mono text-[11px]">{isAr ? article.dateAr : article.date}</span>
                  <span className="font-semibold group-hover:text-[#000823] transition-colors font-mono">
                    {isAr ? "اقرأ التحليل ←" : "Read Analysis →"}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <CTASection
        headline={isAr ? "هل ترغب في مواكبة أحدث التحليلات والحلول الهندسية؟" : "Stay informed on modern engineering architecture."}
        description={
          isAr
            ? "تواصل مع فريق GROWL لاستكشاف كيف يمكن تطبيق هذه المعايير الهندسية في منظومة أعمالك."
            : "Engage with Growl technical leadership to discover how these architectural standards can accelerate your technology roadmap."
        }
        primaryCTA={{ label: isAr ? "تواصل معنا" : "Contact Engineering Team", href: "/contact" }}
        secondaryCTA={{ label: isAr ? "استكشف دراسات الحالة" : "Explore Case Studies", href: "/work" }}
      />

      <SiteFooter />
    </div>
  )
}
