"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"

interface CapabilityItem {
  number: string
  name: string
  nameAr: string
  explanation: string
  explanationAr: string
  sectorName: string
  sectorNameAr: string
  sectorColor: string
  href: string
}

const CAPABILITIES: CapabilityItem[] = [
  {
    number: "01",
    name: "Brand Identity Systems",
    nameAr: "أنظمة الهوية البصرية والعلامات",
    explanation: "Comprehensive design tokens, typography frames, and brand guidelines engineered to scale cleanly across digital and physical touchpoints.",
    explanationAr: "محددات تصميمية شاملة، قوالب بصرية وأدلة هوية معيارية مُهندسة للتوسع عبر كافة القنوات الرقمية والمطبوعة.",
    sectorName: "Marketing & Branding",
    sectorNameAr: "التسويق وبناء العلامات",
    sectorColor: "#E5389A",
    href: "/sectors/marketing",
  },
  {
    number: "02",
    name: "Campaigns & Media Production",
    nameAr: "الحملات التسويقية والإنتاج الإعلامي",
    explanation: "Multi-channel advertising campaigns, studio-grade video production, and high-performance media buying with measurable attribution.",
    explanationAr: "حملات إعلانية متعددة القنوات، إنتاج مرئي بمواصفات سينمائية، وإدارة إعلانية ترتكز على قياس العائد الدقيق.",
    sectorName: "Marketing & Branding",
    sectorNameAr: "التسويق وبناء العلامات",
    sectorColor: "#E5389A",
    href: "/sectors/marketing",
  },
  {
    number: "03",
    name: "Web & Mobile Platforms",
    nameAr: "منصات الويب وتطبيقات الهواتف",
    explanation: "Bespoke high-traffic web applications, native iOS and Android experiences, and robust API architectures designed around real operational loads.",
    explanationAr: "تطبيقات ويب مخصصة للأحمال العالية، تطبيقات أصلية للهواتف الذكية، وهياكل برمجية واجهات API مصممة للتشغيل الحي.",
    sectorName: "Tech",
    sectorNameAr: "التقنية والبرمجيات",
    sectorColor: "#FF7A00",
    href: "/sectors/tech",
  },
  {
    number: "04",
    name: "ERP, CRM, POS & Management Systems",
    nameAr: "أنظمة إدارة الأعمال ERP وCRM ونقاط البيع",
    explanation: "Custom enterprise resource planning, automated sales pipelines, and multi-location retail/restaurant point-of-sale platforms.",
    explanationAr: "تخطيط الموارد المؤسسية المخصص، أتمتة مسارات المبيعات، ومنصات نقاط البيع للمتاجر والمطاعم متعددة الفروع.",
    sectorName: "Tech & Hub",
    sectorNameAr: "التقنية والأنظمة السحابية",
    sectorColor: "#FF7A00",
    href: "/sectors/tech",
  },
  {
    number: "05",
    name: "AI Workflow Automation",
    nameAr: "أتمتة المسارات بالذكاء الاصطناعي",
    explanation: "Production-grade n8n orchestrations connecting legacy databases, messaging, finance, and CRM without human data re-entry.",
    explanationAr: "أتمتة شاملة لمسارات العمل عبر n8n لربط قواعد البيانات، الرسائل، والمبيعات دون الحاجة لإدخال يدوي للبيانات.",
    sectorName: "AI",
    sectorNameAr: "الذكاء الاصطناعي",
    sectorColor: "#0FCFC0",
    href: "/sectors/ai",
  },
  {
    number: "06",
    name: "Private Agentic AI & RAG",
    nameAr: "الوكلاء المستقلون والذكاء الاصطناعي الخاص",
    explanation: "Self-hosted retrieval pipelines and autonomous task execution systems running strictly on internal tenant infrastructure.",
    explanationAr: "أنظمة استرجاع مستندات خاصة (RAG) ووكلاء مهام مستقلون يعملون بالكامل داخل البنية التحتية الخاصة بالعميل.",
    sectorName: "AI",
    sectorNameAr: "الذكاء الاصطناعي",
    sectorColor: "#0FCFC0",
    href: "/sectors/ai",
  },
  {
    number: "07",
    name: "Cybersecurity & Enterprise Networking",
    nameAr: "الأمن السيبراني والشبكات المؤسسية",
    explanation: "Certified Fortinet firewall fabrics, zero-trust network access (ZTNA), enterprise switching, and continuous threat mitigation.",
    explanationAr: "جدران حماية معتمدة من فورتينت، شبكات انعدام الثقة (ZTNA)، شبكات مؤسسية وتدابير استباقية للتهديدات.",
    sectorName: "System Integrator & Cybersecurity",
    sectorNameAr: "تكامل الأنظمة والأمن السيبراني",
    sectorColor: "#DA291C",
    href: "/sectors/system-integrator-cybersecurity",
  },
  {
    number: "08",
    name: "Data-Centre Infrastructure & Subscription Hub",
    nameAr: "مراكز البيانات والمنتجات السحابية الجاهزة",
    explanation: "On-premise virtualization, disaster recovery clusters, and subscription-based SaaS suites without prolonged implementation cycles.",
    explanationAr: "افتراضية مراكز البيانات المحلية، خطط التعافي من الكوارث، وباقات البرمجيات السحابية الفورية دون استنزاف زمني.",
    sectorName: "SI, Cybersecurity & Hub",
    sectorNameAr: "الأمن السيبراني والأنظمة السحابية",
    sectorColor: "#1F6FEB",
    href: "/sectors/hub",
  },
]

export function HomeCapabilities() {
  const { isAr } = useLanguage()

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel>
            {isAr ? "مجالات القدرات والتنفيذ" : "Selected Capabilities"}
          </SectionLabel>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.1]">
            {isAr ? "تنفيذ متكامل عبر الطبقات الحيوية للأعمال." : "Full-spectrum execution across the modern business stack."}
          </h2>

          <p className="mt-5 text-base md:text-lg text-[#000823]/70 font-normal leading-relaxed">
            {isAr
              ? "مجموعة مختارة من القدرات الأساسية التي تبرز نطاق عمل المجموعة وعمق ممارستها في المشاريع الإقليمية والمؤسسية."
              : "A curated selection of cross-sector competencies demonstrating Growl’s breadth from strategic design to mission-critical infrastructure."}
          </p>
        </div>

        {/* ── Structured Editorial Grid (8 entries) ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.number}
              href={cap.href}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#000823]/[0.08] hover:border-[#000823]/25 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Top Row: Number and Sector Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-[#000823]/40 group-hover:text-[#000823] transition-colors">
                    {cap.number}
                  </span>
                  <span
                    className="text-[9px] font-mono font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${cap.sectorColor}15`,
                      color: cap.sectorColor,
                    }}
                  >
                    {isAr ? cap.sectorNameAr : cap.sectorName}
                  </span>
                </div>

                {/* Capability Title */}
                <h3 className="text-base font-bold text-[#000823] mb-2.5 leading-snug group-hover:text-[#000823] transition-colors">
                  {isAr ? cap.nameAr : cap.name}
                </h3>

                {/* Short Explanation */}
                <p className="text-xs text-[#000823]/65 leading-relaxed font-normal">
                  {isAr ? cap.explanationAr : cap.explanation}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="mt-6 pt-4 border-t border-[#000823]/[0.06] flex items-center justify-between text-xs font-semibold text-[#000823]/70 group-hover:text-[#000823] transition-colors">
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  {isAr ? "تفاصيل القطاع" : "Sector View"}
                </span>
                <span className="font-mono text-sm group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
