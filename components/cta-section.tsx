"use client"

export function CtaSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] bg-[#F8F8F8]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-[#000823]/50 bg-black/[0.04] mb-6">
          START A PROJECT
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-[#000823] mb-6">
          Have something<br />worth building?
        </h2>
        <p className="text-base text-[#000823]/60 leading-relaxed mb-10 max-w-lg mx-auto font-normal">
          Tell us what you&apos;re building, what you&apos;re trying to solve, and where you want to go. We&apos;ll help define the next step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/contact"
            className="px-8 py-3.5 bg-[#000823] text-white text-sm rounded-xl hover:bg-[#000823] transition-all duration-200 tracking-widest font-semibold shadow-sm"
          >
            START A PROJECT
          </a>
          <a
            href="/work"
            className="px-8 py-3.5 border border-black/10 text-[#000823]/80 text-sm rounded-xl hover:border-[#000823]/40 hover:text-[#000823] transition-all duration-200 tracking-widest font-semibold"
          >
            SEE OUR WORK
          </a>
        </div>
      </div>
    </section>
  )
}
