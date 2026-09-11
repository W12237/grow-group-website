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
    explanation: "Modular design tokens, typography systems, and brand guidelines engineered for scale.",
    explanationAr: "محددات تصميمية شاملة وقوالب بصرية معيارية مُهندسة للتوسع عبر كافة القنوات.",
    sectorName: "Marketing & Branding",
    sectorNameAr: "التسويق وبناء العلامات",
    sectorColor: "#E5389A",
    href: "/sectors/marketing",
  },
  {
    number: "02",
    name: "Campaigns & Media Production",
    nameAr: "الحملات التسويقية والإنتاج الإعلامي",
    explanation: "Studio-grade media production, creative direction, and attribution-driven media buying.",
    explanationAr: "إنتاج مرئي بمواصفات سينمائية، إدارة إعلانية ترتكز على قياس العائد الدقيق.",
    sectorName: "Marketing & Branding",
    sectorNameAr: "التسويق وبناء العلامات",
    sectorColor: "#E5389A",
    href: "/sectors/marketing",
  },
  {
    number: "03",
    name: "Web & Mobile Platforms",
    nameAr: "منصات الويب وتطبيقات الهواتف",
    explanation: "High-traffic web platforms, native iOS/Android apps, and resilient API architectures.",
    explanationAr: "تطبيقات ويب مخصصة للأحمال العالية، وتطبيقات أصلية للهواتف الذكية مع هياكل API متينة.",
    sectorName: "Tech",
    sectorNameAr: "التقنية والبرمجيات",
    sectorColor: "#FF7A00",
    href: "/sectors/tech",
  },
  {
    number: "04",
    name: "ERP, CRM, POS & Management Systems",
    nameAr: "أنظمة إدارة الأعمال ERP وCRM ونقاط البيع",
    explanation: "Custom enterprise planning, automated sales pipelines, and multi-location retail POS.",
    explanationAr: "تخطيط الموارد المؤسسية، أتمتة مسارات المبيعات، ومنصات نقاط البيع متعددة الفروع.",
    sectorName: "Tech & Hub",
    sectorNameAr: "التقنية والأنظمة السحابية",
    sectorColor: "#FF7A00",
    href: "/sectors/tech",
  },
  {
    number: "05",
    name: "AI Workflow Automation",
    nameAr: "أتمتة المسارات بالذكاء الاصطناعي",
    explanation: "Production n8n orchestrations connecting databases, messaging, and finance seamlessly.",
    explanationAr: "أتمتة مسارات العمل لربط قواعد البيانات، الرسائل، والمبيعات دون إدخال يدوي.",
    sectorName: "AI",
    sectorNameAr: "الذكاء الاصطناعي",
    sectorColor: "#0FCFC0",
    href: "/sectors/ai",
  },
  {
    number: "06",
    name: "Private Agentic AI & RAG",
    nameAr: "الوكلاء المستقلون والذكاء الاصطناعي الخاص",
    explanation: "Self-hosted RAG pipelines and autonomous agent squads running on tenant infrastructure.",
    explanationAr: "أنظمة استرجاع مستندات خاصة (RAG) ووكلاء مهام مستقلون داخل البنية الخاصة بالعميل.",
    sectorName: "AI",
    sectorNameAr: "الذكاء الاصطناعي",
    sectorColor: "#0FCFC0",
    href: "/sectors/ai",
  },
  {
    number: "07",
    name: "Cybersecurity & Enterprise Networking",
    nameAr: "الأمن السيبراني والشبكات المؤسسية",
    explanation: "Certified Fortinet firewalls, Zero Trust (ZTNA), enterprise switching, and threat defense.",
    explanationAr: "جدران حماية معتمدة من فورتينت، شبكات انعدام الثقة (ZTNA)، وتدابير أمنية استباقية.",
    sectorName: "System Integrator & Cybersecurity",
    sectorNameAr: "تكامل الأنظمة والأمن السيبراني",
    sectorColor: "#DA291C",
    href: "/sectors/system-integrator-cybersecurity",
  },
  {
    number: "08",
    name: "Data-Centre Infrastructure & Subscription Hub",
    nameAr: "مراكز البيانات والمنتجات السحابية الجاهزة",
    explanation: "Virtualization, disaster recovery clusters, and turnkey software platforms.",
    explanationAr: "افتراضية مراكز البيانات، خطط التعافي من الكوارث، وباقات البرمجيات الفورية.",
    sectorName: "SI, Cybersecurity & Hub",
    sectorNameAr: "الأمن السيبراني والأنظمة السحابية",
    sectorColor: "#1F6FEB",
    href: "/sectors/hub",
  },
]

export function HomeCapabilities() {
  const { isAr } = useLanguage()

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionLabel>
            {isAr ? "مجالات القدرات والتنفيذ" : "Selected Capabilities"}
          </SectionLabel>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.15]">
            {isAr ? "تنفيذ متكامل عبر الطبقات الحيوية للأعمال." : "Full-spectrum execution across the modern business stack."}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#000823]/70 font-normal leading-relaxed">
            {isAr
              ? "مجموعة مختارة من القدرات الأساسية التي تبرز نطاق عمل المجموعة وعمق ممارستها في المشاريع الإقليمية والمؤسسية."
              : "A curated selection of cross-sector competencies demonstrating Growl’s breadth from strategic design to mission-critical infrastructure."}
          </p>
        </div>

        {/* ── Structured Editorial Grid (8 entries) ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.number}
              href={cap.href}
              className="group relative flex flex-col justify-between p-4.5 sm:p-5 md:p-6 rounded-2xl bg-white border border-[#000823]/[0.08] hover:border-[#000823]/25 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out"
            >
              <div>
                {/* Top Row: Number and Sector Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
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
                <h3 className="text-sm sm:text-base font-bold text-[#000823] mb-2 leading-snug group-hover:text-[#000823] transition-colors">
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
                <span className="font-mono text-sm transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
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
