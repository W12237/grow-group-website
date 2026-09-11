"use client"

import React from "react"
import { useLanguage } from "@/components/language-context"
import { SectionLabel } from "@/components/shared/section-label"

interface TeamMember {
  name: string
  nameAr: string
  role: string
  roleAr: string
  bio: string
  bioAr: string
  image: string
  accentColor: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mohamed Rabie",
    nameAr: "محمد ربيع",
    role: "Chief Executive Officer",
    roleAr: "الرئيس التنفيذي للمجموعة",
    bio: "Guiding group strategy, multi-sector expansion, and senior client advisory across Egypt and the MENA region.",
    bioAr: "قيادة الرؤية الاستراتيجية للمجموعة، التوسع الإقليمي، وبناء الشراكات الاستراتيجية الكبرى في مصر والمنطقة.",
    image: "/team/mohamed-rabie.webp",
    accentColor: "#7135E5", // Purple Glow
  },
  {
    name: "Wessam Ali",
    nameAr: "وسام علي",
    role: "Chief Technology Officer",
    roleAr: "رئيس قطاع التكنولوجيا والتقنية",
    bio: "Directing software engineering, enterprise cloud architecture, technical governance, and private AI product development.",
    bioAr: "إدارة وتوجيه هندسة البرمجيات، المعمارية السحابية، الحوكمة التقنية، وتطوير منتجات الذكاء الاصطناعي المؤسسي.",
    image: "/team/wessam-ali.webp",
    accentColor: "#FF7A00", // Tech Orange
  },
  {
    name: "Mohamed Alaa",
    nameAr: "محمد علاء",
    role: "Chief Operating Officer",
    roleAr: "رئيس العمليات التنفيذية",
    bio: "Overseeing enterprise delivery rigor, infrastructure vendor alliances, resource optimization, and operational performance.",
    bioAr: "الإشراف على دقة العمليات التشغيلية، تحالفات الموردين للبنية التحتية، وإدارة كفاءة تنفيذ المشاريع.",
    image: "/team/mohamed-alaa.webp",
    accentColor: "#0FCFC0", // AI Aqua
  },
]

export function HomeTeam() {
  const { isAr } = useLanguage()

  return (
    <section id="team" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionLabel>
            {isAr ? "فريق القيادة والتنفيذ" : "Leadership Team"}
          </SectionLabel>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.15]">
            {isAr ? "القيادات المسؤولة عن العمل والنتائج." : "The people responsible for the work."}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#000823]/70 font-normal leading-relaxed">
            {isAr
              ? "تُقاد مجموعة جرول بواسطة فريق تنفيذي متكامل يجمع بين قيادة الأعمال، التميز التقني، الانضباط التشغيلي، وضمان أعلى معايير التسليم."
              : "Growl is led by a cross-functional team bringing together business leadership, technology, operations and delivery."}
          </p>
        </div>

        {/* ── Team Grid: 3 Executive Leaders ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#000823]/[0.08] hover:border-[#000823]/25 hover:-translate-y-1.5 overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl"
            >
              {/* Subtle top accent line on hover */}
              <div
                className="h-1 w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: member.accentColor }}
                aria-hidden="true"
              />

              {/* Standardized 4:5 Portrait Container */}
              <div className="relative aspect-[4/5] w-full bg-[#000823]/[0.03] flex items-center justify-center p-6 overflow-hidden">
                {/* Subtle neutral backdrop glow */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 40%, ${member.accentColor} 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                <img
                  src={member.image}
                  alt={isAr ? member.nameAr : member.name}
                  className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Details (Visible without requiring hover) */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-[#000823]">
                      {isAr ? member.nameAr : member.name}
                    </h3>
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: member.accentColor }}
                    />
                  </div>

                  <div className="text-xs font-mono font-semibold text-[#000823]/60 mb-3 tracking-wide">
                    {isAr ? member.roleAr : member.role}
                  </div>

                  <p className="text-xs text-[#000823]/70 leading-relaxed font-normal">
                    {isAr ? member.bioAr : member.bio}
                  </p>
                </div>

                {/* Team Spec Tag */}
                <div className="mt-5 pt-3.5 border-t border-[#000823]/[0.06] flex items-center justify-between text-[10px] font-mono text-[#000823]/40 uppercase">
                  <span>Executive Council</span>
                  <span>Cairo HQ</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
