"use client"

import { useState } from "react"

interface NavLink {
  labelEn: string
  labelAr: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { labelEn: "Ecosystem",    labelAr: "المنظومة",     href: "#platform" },
  { labelEn: "Capabilities", labelAr: "القدرات التقنية", href: "#agents" },
  { labelEn: "Workflow",     labelAr: "منهجية العمل",  href: "#workflow" },
  { labelEn: "Integrations", labelAr: "تكامل الأنظمة", href: "#integrations" },
  { labelEn: "Solutions",    labelAr: "نماذج التعاون",  href: "#pricing" },
]

const NAV_STYLE = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0 10px 35px rgba(0, 8, 35, 0.07), 0 2px 10px rgba(0, 8, 35, 0.03)",
} as const

interface MobileNavProps {
  lang?: "en" | "ar"
  onToggleLang?: () => void
}

export function MobileNav({ lang = "en", onToggleLang }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const isAr = lang === "ar"

  const close = () => setOpen(false)

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-3xl">

        {/* Main bar */}
        <nav
          className="flex items-center justify-between px-5 py-3 rounded-2xl border border-black/[0.08] bg-white/95"
          style={NAV_STYLE}
        >
          <a href="#" className="inline-flex items-center gap-2 group select-none">
            <span className="w-2 h-2 rounded-full bg-[#000823] shadow-[0_0_8px_rgba(0,8,35,0.7)] group-hover:scale-125 transition-transform duration-300" />
            <span className="font-sans font-bold text-sm tracking-[0.2em] text-[#000823] group-hover:text-[#000823] transition-colors">
              GROWL
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] text-[#000823]/70 hover:text-[#000823] transition-colors duration-200 tracking-wide font-medium"
              >
                {isAr ? l.labelAr : l.labelEn}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            {onToggleLang && (
              <button
                onClick={onToggleLang}
                className="text-[11px] px-2.5 py-1.5 rounded-xl border border-black/10 text-[#000823]/80 hover:text-[#000823] hover:border-[#000823]/40 hover:bg-[#000823]/[0.05] transition-all duration-200 tracking-wider font-semibold cursor-pointer"
                title={isAr ? "Switch to English" : "التبديل إلى العربية"}
                aria-label="Switch Language"
              >
                {isAr ? "EN" : "AR"}
              </button>
            )}

            <a
              href="#pricing"
              className="text-[11px] px-4 py-2 rounded-xl bg-[#000823] text-white hover:bg-[#000823] transition-all duration-200 tracking-wide hidden md:block font-semibold shadow-sm"
            >
              {isAr ? "ابدأ مشروعك" : "START A PROJECT"}
            </a>

            {/* Burger — mobile only */}
            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-lg hover:bg-black/[0.04] transition-colors cursor-pointer"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className="block h-px bg-black/70 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-px bg-black/70 transition-all duration-300"
                style={{
                  width: "18px",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block h-px bg-black/70 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className="md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "380px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div
            className="rounded-2xl border border-black/[0.08] px-2 py-2 flex flex-col bg-white"
            style={NAV_STYLE}
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="px-4 py-3 text-sm text-[#000823]/75 hover:text-[#000823] hover:bg-[#F8F8F8] rounded-xl transition-colors tracking-wide font-medium"
              >
                {isAr ? l.labelAr : l.labelEn}
              </a>
            ))}
            <div className="mt-1 px-2 pb-1 flex flex-col gap-2">
              <a
                href="#pricing"
                onClick={close}
                className="w-full text-center text-[11px] px-4 py-2.5 rounded-xl bg-[#000823] text-white hover:bg-[#000823] transition-all duration-200 tracking-wide font-semibold shadow-sm"
              >
                {isAr ? "ابدأ مشروعك" : "START A PROJECT"}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

