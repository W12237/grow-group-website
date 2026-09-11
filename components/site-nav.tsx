"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SOLUTIONS = [
  { label: "Technology", sub: "Software & digital products", href: "/solutions/technology" },
  { label: "AI", sub: "Automation & intelligent agents", href: "/solutions/ai" },
  { label: "Marketing & Branding", sub: "Growth & brand strategy", href: "/solutions/marketing" },
  { label: "System Integration", sub: "Connect your platforms", href: "/solutions/integration" },
  { label: "Cybersecurity", sub: "Protect your infrastructure", href: "/solutions/cybersecurity" },
  { label: "SaaS", sub: "Scalable software products", href: "/solutions/saas" },
]

const TOP_LINKS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
]

const NAV_STYLE = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0 10px 35px rgba(0, 8, 35, 0.07), 0 2px 10px rgba(0, 8, 35, 0.03)",
} as const

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
    setSolutionsOpen(false)
  }, [pathname])

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-5xl">

        {/* Main bar */}
        <nav
          className="flex items-center justify-between px-5 py-3 rounded-2xl border border-black/[0.08]"
          style={NAV_STYLE}
        >
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 group select-none shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#000823] shadow-[0_0_8px_rgba(0,8,35,0.7)] group-hover:scale-125 transition-transform duration-300" />
            <span className="font-sans font-bold text-sm tracking-[0.2em] text-[#000823] group-hover:text-[#000823] transition-colors">
              GROWL
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-[11px] text-[#000823]/70 hover:text-[#000823] transition-colors duration-200 tracking-wide font-medium cursor-pointer">
                Solutions
                <svg className={`w-3 h-3 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {/* Mega dropdown */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] rounded-2xl border border-black/[0.08] bg-white shadow-xl overflow-hidden transition-all duration-200"
                style={{
                  opacity: solutionsOpen ? 1 : 0,
                  pointerEvents: solutionsOpen ? "auto" : "none",
                  transform: solutionsOpen ? "translateY(0) translateX(-50%)" : "translateY(-8px) translateX(-50%)",
                }}
              >
                <div className="p-3 grid grid-cols-2 gap-1">
                  {SOLUTIONS.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-[#F8F8F8] transition-colors group"
                    >
                      <span className="text-[12px] font-semibold text-[#000823] group-hover:text-[#000823] transition-colors">{s.label}</span>
                      <span className="text-[11px] text-[#000823]/50">{s.sub}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-black/[0.06] px-4 py-3">
                  <Link href="/solutions" className="text-[11px] text-[#000823] font-semibold tracking-wide hover:underline">
                    View all solutions →
                  </Link>
                </div>
              </div>
            </div>

            {TOP_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[11px] transition-colors duration-200 tracking-wide font-medium ${
                  pathname === l.href ? "text-[#000823]" : "text-[#000823]/70 hover:text-[#000823]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="text-[11px] px-4 py-2 rounded-xl bg-[#000823] text-white hover:bg-[#000823] transition-all duration-200 tracking-wide hidden lg:block font-semibold shadow-sm"
            >
              START A PROJECT
            </Link>

            {/* Burger — mobile/tablet only */}
            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-lg hover:bg-black/[0.04] transition-colors cursor-pointer"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="block h-px bg-black/70 transition-all duration-300 origin-center"
                style={{ width: "18px", transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
              <span className="block h-px bg-black/70 transition-all duration-300"
                style={{ width: "18px", opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "none" }} />
              <span className="block h-px bg-black/70 transition-all duration-300 origin-center"
                style={{ width: "18px", transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className="lg:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div className="rounded-2xl border border-black/[0.08] px-2 py-2 flex flex-col bg-white" style={NAV_STYLE}>
            {/* Solutions accordion */}
            <button
              onClick={() => setMobileSolutionsOpen(v => !v)}
              className="flex items-center justify-between px-4 py-3 text-sm text-[#000823]/75 hover:text-[#000823] hover:bg-[#F8F8F8] rounded-xl transition-colors tracking-wide font-medium w-full"
            >
              <span>Solutions</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileSolutionsOpen && (
              <div className="px-2 pb-1 flex flex-col gap-0.5">
                {SOLUTIONS.map(s => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-2.5 text-[12px] text-[#000823]/70 hover:text-[#000823] hover:bg-[#F8F8F8] rounded-lg transition-colors font-medium"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {TOP_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-[#000823]/75 hover:text-[#000823] hover:bg-[#F8F8F8] rounded-xl transition-colors tracking-wide font-medium"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-1 px-2 pb-1">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full text-center text-[11px] px-4 py-2.5 rounded-xl bg-[#000823] text-white hover:bg-[#000823] transition-all duration-200 tracking-wide font-semibold shadow-sm block"
              >
                START A PROJECT
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
