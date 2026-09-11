"use client"

import React from "react"
import { SectionLabel } from "@/components/shared/section-label"

export interface ProcessStep {
  number: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
}

interface SectorProcessProps {
  label?: string
  labelAr?: string
  headline: string
  headlineAr: string
  description?: string
  descriptionAr?: string
  steps: ProcessStep[]
  accentColor: string
  isAr?: boolean
}

export function SectorProcess({
  label,
  labelAr,
  headline,
  headlineAr,
  description,
  descriptionAr,
  steps,
  accentColor,
  isAr = false,
}: SectorProcessProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-16">
          <SectionLabel>
            {isAr ? labelAr || "منهجية العمل والتنفيذ" : label || "DELIVERY PROCESS"}
          </SectionLabel>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.12]">
            {isAr ? headlineAr : headline}
          </h2>
          {description && (
            <p className="mt-4 text-base md:text-lg text-[#000823]/70 font-normal max-w-2xl leading-relaxed">
              {isAr ? descriptionAr || description : description}
            </p>
          )}
        </div>

        {/* ── Responsive Timeline: Horizontal on Desktop, Vertical on Mobile ── */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-7 inset-x-8 h-px bg-[#000823]/[0.10] z-0"
            aria-hidden="true"
          />

          <div
            className={`grid grid-cols-1 ${
              steps.length <= 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : steps.length <= 6
                ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
                : "md:grid-cols-2 lg:grid-cols-4"
            } gap-8 relative z-10`}
          >
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col items-start p-6 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] hover:border-[#000823]/25 transition-all duration-200 group"
              >
                {/* Step Marker */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold mb-5 shadow-xs transition-transform duration-200 group-hover:scale-105"
                  style={{
                    backgroundColor: `${accentColor}18`,
                    color: accentColor,
                    border: `1px solid ${accentColor}35`,
                  }}
                >
                  {step.number}
                </div>

                {/* Step Title & Description */}
                <h3 className="text-base font-bold text-[#000823] mb-2 leading-snug">
                  {isAr ? step.titleAr : step.title}
                </h3>

                <p className="text-xs text-[#000823]/65 leading-relaxed font-normal">
                  {isAr ? step.descriptionAr : step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
