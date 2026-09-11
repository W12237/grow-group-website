"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"

interface InsightItem {
  id: string
  category: string
  categoryAr: string
  title: string
  titleAr: string
  intro: string
  introAr: string
  date: string
  dateAr: string
  readingTime: string
  readingTimeAr: string
  sectorColor: string
  href: string
}

const INSIGHTS: InsightItem[] = [
  {
    id: "ai-workflows-foundation-models",
    category: "Enterprise AI & Automation",
    categoryAr: "الذكاء الاصطناعي والأتمتة",
    title: "Why Practical AI Implementations Start with Workflows, Not Foundation Models",
    titleAr: "لماذا تبدأ تطبيقات الذكاء الاصطناعي العملية بالمسارات التشغيلية وليس النماذج التأسيسية",
    intro: "A critical evaluation of how mid-market and enterprise organizations achieve real return by automating core operational processes rather than experimenting with open-ended conversational bots.",
    introAr: "تقييم عملي يوضح كيف تحقق المؤسسات عائداً استثمارياً ملموساً عبر أتمتة المسارات الجوهرية بدلاً من التجارب المفتوحة غير الموجهة.",
    date: "August 2026",
    dateAr: "أغسطس 2026",
    readingTime: "6 min read",
    readingTimeAr: "قراءة 6 دقائق",
    sectorColor: "#0FCFC0",
    href: "/insights",
  },
  {
    id: "brand-architecture-digital-physical",
    category: "Brand Strategy & Systems",
    categoryAr: "استراتيجية وهندسة العلامات",
    title: "The Architecture of Distinction: Why Modern Brand Systems Must Span Code and Canvas",
    titleAr: "هندسة التمايز: لماذا يجب أن تمتد أنظمة الهوية الحديثة بين الشاشات والواقع الميداني",
    intro: "How modern organizations build long-term brand equity through systematic visual rules, responsive digital touchpoints, and uncompromising physical production standards.",
    introAr: "كيف تبني المؤسسات الحديثة قيمة مستدامة لعلامتها التجارية عبر قواعد بصرية معيارية، تفاعل رقمي رشيق، وجودة إنتاجية ميدانية صارمة.",
    date: "July 2026",
    dateAr: "يوليو 2026",
    readingTime: "5 min read",
    readingTimeAr: "قراءة 5 دقائق",
    sectorColor: "#E5389A",
    href: "/insights",
  },
  {
    id: "zero-trust-enterprise-networks",
    category: "Cybersecurity & Infrastructure",
    categoryAr: "الأمن السيبراني والبنية التحتية",
    title: "Zero Trust and Converged Networks in Regional Enterprise Deployments",
    titleAr: "شبكات انعدام الثقة (Zero Trust) والبنية المتقاربة في المؤسسات الإقليمية",
    intro: "Practical operational guidance on modernizing multi-branch security, implementing certified firewall fabrics, and maintaining continuity across distributed enterprise operations.",
    introAr: "إرشادات تشغيلية موثقة لتحديث أمان الفروع المتعددة، ونشر شبكات الحماية المعتمدة، وضمان الاستمرارية التشغيلية للفروع الإقليمية.",
    date: "June 2026",
    dateAr: "يونيو 2026",
    readingTime: "8 min read",
    readingTimeAr: "قراءة 8 دقائق",
    sectorColor: "#DA291C",
    href: "/insights",
  },
]

export function HomeInsights() {
  const { isAr } = useLanguage()

  return (
    <section id="insights" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <SectionLabel>
              {isAr ? "الرؤى والبحوث التقنية" : "Insights & Research"}
            </SectionLabel>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.1]">
              {isAr ? "رؤى معمقة في الاستراتيجية، التقنية، والتنفيذ." : "Perspective on strategy, technology, and execution."}
            </h2>

            <p className="mt-5 text-base md:text-lg text-[#000823]/70 font-normal leading-relaxed">
              {isAr
                ? "أبحاث وتحليلات دورية ينشرها مهندسو واستراتيجيو قطاعات جرول حول التحولات الواقعية في الذكاء الاصطناعي، الأمن، والهوية."
                : "Practical publications authored by Growl practice leads on engineering real systems, scalable brand architectures, and enterprise security."}
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#000823] hover:underline font-mono shrink-0"
          >
            <span>{isAr ? "عرض أرشيف الرؤى" : "Explore All Insights"}</span>
            <span>→</span>
          </Link>
        </div>

        {/* ── 3 Editorial Insight Cards ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INSIGHTS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between p-7 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] hover:border-[#000823]/25 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#000823]/[0.06]">
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${item.sectorColor}15`,
                      color: item.sectorColor,
                    }}
                  >
                    {isAr ? item.categoryAr : item.category}
                  </span>

                  <span className="text-[10px] font-mono text-[#000823]/45">
                    {isAr ? item.readingTimeAr : item.readingTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-[#000823] mb-3 leading-snug group-hover:text-[#000823] transition-colors">
                  {isAr ? item.titleAr : item.title}
                </h3>

                {/* Introduction */}
                <p className="text-xs text-[#000823]/65 leading-relaxed font-normal">
                  {isAr ? item.introAr : item.intro}
                </p>
              </div>

              {/* Card Footer: Date & Link */}
              <div className="mt-8 pt-4 border-t border-[#000823]/[0.06] flex items-center justify-between text-xs font-semibold text-[#000823]/60 group-hover:text-[#000823] transition-colors">
                <span className="font-mono text-[11px] text-[#000823]/40">
                  {isAr ? item.dateAr : item.date}
                </span>
                <span className="font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{isAr ? "قراءة المقال" : "Read Article"}</span>
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
