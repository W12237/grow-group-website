"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"

interface PlatformCategory {
  id: string
  name: string
  nameAr: string
  label: string
  labelAr: string
  items: {
    name: string
    role: string
    roleAr: string
    relationship: string
    relationshipAr: string
  }[]
}

const CATEGORIES: PlatformCategory[] = [
  {
    id: "marketing",
    name: "Marketing Platforms",
    nameAr: "منصات التسويق والإعلان",
    label: "Platforms We Work With",
    labelAr: "منصات نعمل معها",
    items: [
      { name: "Meta Business", role: "Paid Social & CAPI", roleAr: "الإعلانات وواجهات CAPI", relationship: "Technology Ecosystem", relationshipAr: "منظومة إعلانية" },
      { name: "Google Ads & GA4", role: "Search & Telemetry", roleAr: "البحث والتحليلات المؤسسية", relationship: "Technology Ecosystem", relationshipAr: "منظومة قياس" },
      { name: "TikTok for Business", role: "Video Acquisition", roleAr: "حملات الفيديو التفاعلية", relationship: "Technology Ecosystem", relationshipAr: "منظومة إعلانية" },
      { name: "HubSpot", role: "Lifecycle Inbound", roleAr: "أتمتة دورة حياة العملاء", relationship: "Solutions Built On", relationshipAr: "منصة تنفيذ" },
      { name: "Figma", role: "Brand & UI Systems", roleAr: "أنظمة الهوية وتجربة المستخدم", relationship: "Production Tool", relationshipAr: "أداة إنتاج" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & Development",
    nameAr: "الحوسبة السحابية والتطوير",
    label: "Platforms We Build With",
    labelAr: "منصات نبني ونطور عليها",
    items: [
      { name: "Amazon Web Services", role: "ECS, RDS & S3", roleAr: "البنية السحابية وقواعد البيانات", relationship: "Solutions Built On", relationshipAr: "بنية سحابية" },
      { name: "Microsoft Azure", role: "Enterprise Tenant", roleAr: "الخدمات المؤسسية المشتركة", relationship: "Solutions Built On", relationshipAr: "بنية سحابية" },
      { name: "Next.js & Vercel", role: "Edge Web Framework", roleAr: "هندسة واجهات الويب الحافة", relationship: "Core Framework", relationshipAr: "إطار عمل معتمد" },
      { name: "PostgreSQL", role: "Relational Persistence", roleAr: "قواعد البيانات العلاقية", relationship: "Core Engine", relationshipAr: "محرك بيانات" },
      { name: "Docker & Kubernetes", role: "Container Runtime", roleAr: "إدارة الحاويات ونشر الأنظمة", relationship: "Runtime Standard", relationshipAr: "معيار تشغيل" },
    ],
  },
  {
    id: "ai",
    name: "AI & Automation",
    nameAr: "الذكاء الاصطناعي والأتمتة",
    label: "Technology Ecosystem",
    labelAr: "منظومة الذكاء الاصطناعي",
    items: [
      { name: "n8n", role: "Workflow Automation", roleAr: "محرك أتمتة المسارات المؤسسي", relationship: "Implementation Platform", relationshipAr: "منصة تنفيذ" },
      { name: "Model Context Protocol", role: "Agent Tooling Standard", roleAr: "معيار اتصال الوكلاء المستقلين", relationship: "Protocol Standard", relationshipAr: "بروتوكول مفتوح" },
      { name: "Anthropic Claude", role: "Reasoning & Extraction", roleAr: "نماذج التفكير والتحليل المعقد", relationship: "Model API", relationshipAr: "واجهة نماذج" },
      { name: "OpenAI", role: "Embeddings & GPT-4o", roleAr: "نماذج التضمين والاستخراج", relationship: "Model API", relationshipAr: "واجهة نماذج" },
      { name: "Ollama / Qwen", role: "Local Private LLMs", roleAr: "نماذج محلية على خوادم العميل", relationship: "Self-Hosted Engine", relationshipAr: "محرك محلي" },
    ],
  },
  {
    id: "security",
    name: "Security & Networking",
    nameAr: "الأمان والشبكات المؤسسية",
    label: "Platforms We Work With",
    labelAr: "منصات نعمل معها",
    items: [
      { name: "Fortinet", role: "FortiGate & Secure Fabric", roleAr: "جدران الحماية وشبكات الأمان", relationship: "Vendor Ecosystem", relationshipAr: "منظومة تقنية" },
      { name: "Cisco Systems", role: "Enterprise Switching & LAN", roleAr: "المحولات والشبكات الداخلية", relationship: "Vendor Ecosystem", relationshipAr: "منظومة شبكات" },
      { name: "Palo Alto Networks", role: "Next-Gen Enterprise Edge", roleAr: "أمان الحواف المؤسسية المتقدم", relationship: "Vendor Ecosystem", relationshipAr: "منظومة حماية" },
      { name: "Cloudflare", role: "DDoS Mitigation & CDN", roleAr: "حماية الهجمات وشبكات التوزيع", relationship: "Infrastructure", relationshipAr: "بنية تحتية" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Systems",
    nameAr: "الأنظمة المؤسسية",
    label: "Solutions Built On",
    labelAr: "حلول مبنية ومخصصة على",
    items: [
      { name: "Odoo Enterprise", role: "Modular Core ERP", roleAr: "نظام ERP المؤسسي المعياري", relationship: "Implementation Platform", relationshipAr: "منصة تطبيق وتخصيص" },
      { name: "Microsoft 365", role: "Enterprise Directory & Suite", roleAr: "الدليل الموحد وبيئة العمل", relationship: "Integrates With", relationshipAr: "تكامل مباشر" },
      { name: "Stripe", role: "Global Payment Processing", roleAr: "معالجة المدفوعات العالمية", relationship: "Integrates With", relationshipAr: "بوابة دفع" },
      { name: "Twilio", role: "SMS & Telephony Gateway", roleAr: "بوابات الاتصال والرسائل", relationship: "Integrates With", relationshipAr: "بوابة رسائل" },
    ],
  },
]

export function HomePartners() {
  const { isAr } = useLanguage()
  const [activeTab, setActiveTab] = useState<string>("marketing")

  const currentCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0]

  return (
    <section id="partners" className="py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-10 sm:mb-14 md:mb-16">
          <SectionLabel>
            {isAr ? "الشركاء والمنظومة التقنية" : "Partners & Technology Ecosystem"}
          </SectionLabel>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.15]">
            {isAr ? "نبني على معايير ومنصات عالمية موثوقة." : "Built on trusted platforms and industry standards."}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#000823]/70 font-normal leading-relaxed">
            {isAr
              ? "نعمل عبر أبرز منصات الإبداع، الحوسبة السحابية، البرمجيات، الأمان، والبنية التحتية لتقديم حلول مناسبة لبيئة عمل كل عميل."
              : "We work across leading creative, cloud, software, security and infrastructure platforms to deliver solutions suited to each client environment."}
          </p>
        </div>

        {/* ── Category Filter Tabs ──────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 pb-5 mb-7 border-b border-[#000823]/[0.08]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${activeTab === cat.id
                ? "bg-[#000823] text-white shadow-sm"
                : "bg-[#F8F8F8] text-[#000823]/70 hover:text-[#000823] hover:bg-[#000823]/[0.06]"
                }`}
            >
              {isAr ? cat.nameAr : cat.name}
            </button>
          ))}
        </div>

        {/* ── Active Category Ecosystem Cards ───────────────────────────── */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#000823]/50 font-bold">
              {isAr ? currentCategory.labelAr : currentCategory.label}
            </span>
            <span className="text-[11px] font-mono text-[#000823]/40">
              {currentCategory.items.length} Platforms Documented
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.06] hover:border-[#000823]/25 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out group flex-col justify-between ${
                  idx >= 3 ? "hidden sm:flex" : "flex"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white border border-[#000823]/[0.08] text-[#000823]/60">
                      {isAr ? item.relationshipAr : item.relationship}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#000823] group-hover:text-[#000823] mb-1">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-[#000823]/60 leading-snug">
                    {isAr ? item.roleAr : item.role}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#000823]/[0.05] flex items-center justify-between text-[10px] font-mono text-[#000823]/40">
                  <span>Standard Stack</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/partners"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F8F8F8] border border-[#000823]/10 text-[#000823] text-xs font-mono font-bold tracking-wider hover:bg-neutral-100 shadow-xs active:scale-[0.98] transition-all"
          >
            <span>{isAr ? "دليل المنظومة التقنية بالكامل (24+ منصة)" : "Explore All Ecosystem Platforms (24+)"}</span>
            <span className="ltr:ml-2 rtl:mr-2">→</span>
          </Link>
        </div>

        {/* ── Formal Relationship Transparency Disclosure (Hidden on mobile) ─── */}
        <div className="hidden sm:flex mt-12 p-5 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <p className="text-xs text-[#000823]/65 leading-relaxed font-mono">
              {isAr
                ? "إفصاح الشفافية: تشمل هذه القائمة المنصات والأنظمة التي تطور وتبني عليها جرول حلولها لعملائها. لا يتم استخدام صفات الشراكة الرسمية المعتمدة إلا بوجود اتفاقيات تحقق معتمدة وموثقة."
                : "Transparency Disclosure: Platforms listed reflect active technologies, runtime stacks, and implementation tools engineered by Growl teams. Formal partner designations are strictly reserved for verified agreements."}
            </p>
          </div>

          <Link
            href="/partners"
            className="text-xs font-mono font-bold text-[#000823] hover:underline whitespace-nowrap shrink-0"
          >
            {isAr ? "دليل المنظومة بالكامل ←" : "Full Ecosystem Directory →"}
          </Link>
        </div>
      </div>
    </section>
  )
}
