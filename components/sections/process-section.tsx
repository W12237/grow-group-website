"use client"

import React from "react"
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll"
import { SectionLabel } from "@/components/shared/section-label"

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ProcessSectionProps {
  label: string
  headline: string
  steps: ProcessStep[]
  accentColor?: string
}

export function ProcessSection({
  label,
  headline,
  steps,
  accentColor = "var(--division-accent)",
}: ProcessSectionProps) {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-[#000823]/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RevealOnScroll className="mb-16">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1]">
            {headline}
          </h2>
        </RevealOnScroll>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 80}>
              <div className="group">
                {/* Number */}
                <span
                  className="text-[11px] font-mono tracking-[0.3em] block mb-4"
                  style={{ color: accentColor, opacity: 0.7 }}
                >
                  {step.number}
                </span>
                {/* Line */}
                <div
                  className="w-8 h-px mb-5 transition-all duration-500 group-hover:w-12"
                  style={{ backgroundColor: accentColor, opacity: 0.3 }}
                />
                {/* Title */}
                <h3 className="text-lg font-medium text-[#000823] mb-2">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-[#000823]/45 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
