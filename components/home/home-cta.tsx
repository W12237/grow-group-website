"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export function HomeCta() {
  const { isAr } = useLanguage()

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#000823] text-white overflow-hidden border-t border-white/[0.08]">
      {/* ── Controlled Ambient Illumination (Purple Glow & Medium Purple) ─ */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] rounded-full opacity-25 blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7135E5 0%, #B1A5F9 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />


      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Masterbrand Icon Lockup */}
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/[0.04] border border-white/15 mb-8 shadow-xl">
          <img
            src="/growl-icons/white-icon.png"
            alt="Growl Holding Group"
            className="w-12 h-12 object-contain shadow-xs"
          />
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          {isAr
            ? "اختر الفريق المناسب لمشروعك القادم."
            : "Bring the right Growl team to your next project."}
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          {isAr
            ? "أخبرنا بما تخطط لبنائه، تحسينه أو استبداله. سنصلك مباشرة بالفريق التخصصي الأنسب ونحدد الخطوة العملية القادمة."
            : "Tell us what you are building, improving or replacing. We will connect you with the right sector and define the next step."}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#000823] text-xs font-semibold uppercase tracking-[0.14em] shadow-lg hover:bg-white/90 transition-all duration-200 active:scale-[0.99]"
          >
            <span>{isAr ? "ابدأ محادثة معنا الآن" : "Start a Conversation"}</span>
            <span className="ltr:ml-2 rtl:mr-2 font-mono">→</span>
          </Link>

          <a
            href="#sectors"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.14em] hover:bg-white/[0.08] hover:border-white/40 transition-all duration-200 active:scale-[0.99]"
          >
            <span>{isAr ? "استكشف القطاعات الخمسة" : "Explore Our Sectors"}</span>
            <span className="ltr:ml-2 rtl:mr-2 font-mono">↓</span>
          </a>
        </div>

        {/* Fast Turnaround Assurance */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-white/40">
          <span>DIRECT EXECUTIVE & ENGAGEMENT LEADSHIP</span>
          <span>•</span>
          <span>CAIRO HEADQUARTERS</span>
          <span>•</span>
          <span>STRICT NDA GUARANTEED</span>
        </div>
      </div>
    </section>
  )
}
