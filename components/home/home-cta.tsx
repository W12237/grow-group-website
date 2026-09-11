"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export function HomeCta() {
  const { isAr } = useLanguage()

  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#000823] text-white overflow-hidden border-t border-white/[0.08]">
      {/* ── Controlled Ambient Illumination (Purple Glow & Medium Purple) ─ */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] rounded-full opacity-25 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7135E5 0%, #B1A5F9 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Masterbrand Icon Lockup */}
        <div className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-white/[0.04] border border-white/15 mb-6 shadow-xl">
          <img
            src="/growl-icons/white-icon.png"
            alt="Growl Holding Group"
            className="w-10 h-10 object-contain shadow-xs"
          />
        </div>

        {/* Section Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-white leading-[1.15] mb-4">
          {isAr
            ? "اختر الفريق المناسب لمشروعك القادم."
            : "Bring the right Growl team to your next project."}
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed font-normal mb-8">
          {isAr
            ? "أخبرنا بما تخطط لبنائه، تحسينه أو استبداله. سنصلك مباشرة بالفريق التخصصي الأنسب ونحدد الخطوة العملية القادمة."
            : "Tell us what you are building, improving or replacing. We will connect you directly with the right sector leadership."}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-[#000823] text-xs font-bold uppercase tracking-[0.14em] shadow-xl hover:bg-white/95 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
          >
            <span>{isAr ? "ابدأ محادثة معنا الآن" : "Start a Conversation"}</span>
            <span className="ltr:ml-2 rtl:mr-2 font-mono transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
          </Link>

          <a
            href="#sectors"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.14em] hover:bg-white/[0.08] hover:border-white/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
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
