"use client"

import React from "react"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"

interface StageItem {
  number: string
  name: string
  nameAr: string
  points: string[]
  pointsAr: string[]
}

const STAGES: StageItem[] = [
  {
    number: "01",
    name: "Understand",
    nameAr: "الفهم والاستيعاب",
    points: ["Business objectives", "Operational requirements", "Technical dependencies"],
    pointsAr: ["أهداف الأعمال الاستراتيجية", "المتطلبات التشغيلية الفعلية", "التبعيات التقنية والأنظمة القائمة"],
  },
  {
    number: "02",
    name: "Define",
    nameAr: "التحديد والتصميم",
    points: ["Scope", "Strategy", "Architecture", "Delivery plan"],
    pointsAr: ["نطاق العمل المحدد بدقة", "الاستراتيجية التوجيهية", "المعمارية التقنية", "خطة وجدول التسليم"],
  },
  {
    number: "03",
    name: "Build",
    nameAr: "البناء والتنفيذ",
    points: ["Design", "Production", "Engineering", "Implementation"],
    pointsAr: ["التصميم وتجربة المستخدم", "الإنتاج الإبداعي", "الهندسة البرمجية", "التنفيذ والتركيب الميداني"],
  },
  {
    number: "04",
    name: "Launch and Support",
    nameAr: "الإطلاق والدعم المستمر",
    points: ["Quality assurance", "Deployment", "Training", "Optimization & Ongoing support"],
    pointsAr: ["ضمان الجودة والفحص الشامل", "النشر والتشغيل الحي", "تدريب الفرق الداخلية", "التحسين والدعم الفني المستمر"],
  },
]

export function HomeDelivery() {
  const { isAr } = useLanguage()

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel>
            {isAr ? "منهجية العمل والتسليم" : "Delivery Approach"}
          </SectionLabel>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.1]">
            {isAr ? "مسار منضبط ومباشر من الفكرة إلى التشغيل." : "A disciplined path from inquiry to operation."}
          </h2>

          <p className="mt-5 text-base md:text-lg text-[#000823]/70 font-normal leading-relaxed">
            {isAr
              ? "منهجية واضحة ومباشرة تخلو من المصطلحات المعقدة غير المفهومة، وتضمن وضوح المسؤوليات وتوقيتات التسليم في كل مرحلة."
              : "A transparent, structured four-phase delivery framework ensuring clarity of milestones, deliverables, and accountability across every sector."}
          </p>
        </div>

        {/* ── 4-Stage Process Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage) => (
            <div
              key={stage.number}
              className="relative p-7 rounded-2xl bg-white border border-[#000823]/[0.08] hover:border-[#000823]/25 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Marker */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#000823]/[0.06]">
                  <span className="w-10 h-10 rounded-xl bg-[#000823]/[0.04] border border-[#000823]/10 flex items-center justify-center font-mono text-sm font-bold text-[#000823] group-hover:bg-[#000823] group-hover:text-white transition-colors">
                    {stage.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/40">
                    STAGE {stage.number}
                  </span>
                </div>

                {/* Stage Name */}
                <h3 className="text-xl font-bold text-[#000823] mb-4">
                  {isAr ? stage.nameAr : stage.name}
                </h3>

                {/* Stage Deliverables List */}
                <ul className="space-y-2">
                  {(isAr ? stage.pointsAr : stage.points).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#000823]/75 leading-relaxed font-medium">
                      <span className="text-[#000823]/30 font-mono mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality Spec Footer */}
              <div className="mt-8 pt-4 border-t border-[#000823]/[0.06] text-[10px] font-mono text-[#000823]/45 uppercase flex items-center justify-between">
                <span>Verified Milestones</span>
                <span>Documented Signoff</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
