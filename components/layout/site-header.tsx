"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SectorIcon } from "@/components/shared/sector-icon"
import { SECTORS } from "@/lib/sectors-data"

const NAV_LINKS = [
  { name: "Sectors", nameAr: "القطاعات", href: "/sectors", isDropdown: true },
  { name: "About", nameAr: "عن المجموعة", href: "/about" },
  { name: "Work", nameAr: "أعمالنا", href: "/work" },
  { name: "Partners", nameAr: "الشركاء والمنظومة", href: "/partners" },
  { name: "Team", nameAr: "فريق القيادة", href: "/#team" },
  { name: "Insights", nameAr: "الرؤى والأبحاث", href: "/insights" },
  { name: "Contact", nameAr: "تواصل معنا", href: "/contact" },
]

export function SiteHeader() {
  const { lang, toggleLang, isAr } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sectorsOpen, setSectorsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setSectorsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Keyboard accessibility: ESC closes menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSectorsOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleSectorsEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setSectorsOpen(true)
  }

  const handleSectorsLeave = () => {
    timeoutRef.current = setTimeout(() => setSectorsOpen(false), 200)
  }

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none"
        role="banner"
      >
        <div className="pointer-events-auto w-full max-w-6xl" ref={navContainerRef}>
          <nav
            className="relative flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl border transition-all duration-300"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              background: scrolled
                ? "rgba(0, 8, 35, 0.94)"
                : "rgba(0, 8, 35, 0.85)",
              borderColor: scrolled
                ? "rgba(255, 255, 255, 0.16)"
                : "rgba(255, 255, 255, 0.10)",
              boxShadow: scrolled
                ? "0 18px 48px rgba(0, 0, 0, 0.45), 0 0 24px rgba(113, 53, 229, 0.12)"
                : "0 8px 32px rgba(0, 0, 0, 0.25)",
            }}
            aria-label="Main navigation"
          >
            {/* Official Growl Masterbrand Logo Lockup */}
            <Link
              href="/"
              className="flex items-center group shrink-0 focus:outline-hidden focus:ring-2 focus:ring-white/30 rounded-xl py-0.5"
              aria-label="Growl Holding Group Home"
            >
              <img
                src="/growl-icons/white-icon.png"
                alt="Growl Holding Group"
                className="h-8 sm:h-9 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-7">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.name}
                  ref={link.isDropdown ? dropdownRef : undefined}
                  onMouseEnter={link.isDropdown ? handleSectorsEnter : undefined}
                  onMouseLeave={link.isDropdown ? handleSectorsLeave : undefined}
                  className="relative"
                >
                  {link.isDropdown ? (
                    <button
                      className={`text-[11px] hover:text-white transition-colors duration-200 tracking-[0.16em] uppercase flex items-center gap-1.5 font-semibold py-1 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/30 rounded ${sectorsOpen ? "text-white" : "text-white/75"
                        }`}
                      onClick={() => setSectorsOpen(!sectorsOpen)}
                      aria-expanded={sectorsOpen}
                      aria-haspopup="true"
                    >
                      <span>{isAr ? link.nameAr : link.name}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-white/10 text-white/80 font-mono">
                        5
                      </span>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        className={`transition-transform duration-200 ${sectorsOpen ? "rotate-180 text-white" : "text-white/40"
                          }`}
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 3.75L5 6.25L7.5 3.75"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[11px] text-white/75 hover:text-white transition-colors duration-200 tracking-[0.16em] uppercase font-semibold py-1 focus:outline-hidden focus:ring-2 focus:ring-white/30 rounded"
                    >
                      {isAr ? link.nameAr : link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right side: Language Switcher + Primary CTA + Mobile Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Language Switcher */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/15 text-[10px] sm:text-[11px] font-semibold text-white/80 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all cursor-pointer font-mono focus:outline-hidden focus:ring-2 focus:ring-white/30"
                title={isAr ? "Switch to English" : "التبديل إلى العربية"}
                aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
                <span>{isAr ? "EN" : "العربية"}</span>
              </button>

              {/* Primary CTA: "Start a Conversation" */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center text-[11px] px-4 py-2.5 rounded-xl bg-white text-[#000823] hover:bg-white/90 transition-all duration-200 tracking-[0.14em] uppercase font-semibold shadow-xs focus:outline-hidden focus:ring-2 focus:ring-white/40"
              >
                {isAr ? "ابدأ محادثة" : "Start a Conversation"}
              </Link>

              {/* Mobile Menu Hamburger Button */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 sm:w-9 sm:h-9 gap-[4px] sm:gap-[5px] rounded-xl border border-white/15 hover:bg-white/[0.08] transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/30"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <span
                  className="block h-[1.5px] bg-white transition-all duration-300 origin-center"
                  style={{
                    width: 18,
                    transform: mobileOpen ? "translateY(3.25px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="block h-[1.5px] bg-white transition-all duration-300 origin-center"
                  style={{
                    width: 18,
                    transform: mobileOpen ? "translateY(-3.25px) rotate(-45deg)" : "none",
                  }}
                />
              </button>
            </div>

            {/* ── SECTORS MEGA-MENU (Desktop) ─────────────────────────────── */}
            {sectorsOpen && (
              <div
                className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px] max-w-[calc(100vw-32px)] z-50 transition-all duration-200"
                onMouseEnter={handleSectorsEnter}
                onMouseLeave={handleSectorsLeave}
              >
                <div
                  className="rounded-2xl border border-white/15 p-5 shadow-2xl"
                  style={{
                    backgroundColor: "rgba(0, 8, 35, 0.94)",
                    backdropFilter: "blur(32px)",
                    WebkitBackdropFilter: "blur(32px)",
                  }}
                >
                  {/* Mega-menu Header: Clean Corporate Advisory Style (No AI badges or monospace) */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/growl-icons/growl-group-icon.png"
                        alt="Growl Holding"
                        className="w-9 h-9 object-contain shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {isAr ? "القطاعات المتخصصة" : "Specialized Sectors"}
                        </h4>
                        <p className="text-[11px] text-white/60">
                          {isAr ? "ممارسات هندسية وإبداعية متكاملة تحت مظلة المجموعة" : "Dedicated operating practices unified under Growl Group"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 5 Sectors Grid with standardized logos, names, and short descriptions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-3.5">
                    {SECTORS.slice(0, 5).map((sector) => (
                      <Link
                        key={sector.id}
                        href={sector.canonicalHref}
                        className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.06] transition-all group border border-transparent hover:border-white/10"
                        onClick={() => setSectorsOpen(false)}
                      >
                        <SectorIcon slug={sector.slug} size={36} className="shrink-0 transition-transform duration-200 group-hover:scale-105" />

                        <div className="flex-1 min-w-0">
                          <h5 className="text-[13px] font-semibold text-white group-hover:text-white transition-colors mb-1 truncate">
                            {isAr ? sector.nameAr : sector.name}
                          </h5>
                          <p className="text-xs text-white/60 group-hover:text-white/80 leading-relaxed line-clamp-2 transition-colors">
                            {isAr ? sector.descriptionAr : sector.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Mega-menu Bottom Bar */}
                  <div className="mt-3.5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between px-2 text-xs">
                    <Link
                      href="/sectors"
                      className="font-semibold text-[#B1A5F9] hover:text-white transition-colors flex items-center gap-1.5 group"
                      onClick={() => setSectorsOpen(false)}
                    >
                      <span>{isAr ? "عرض الدليل الشامل للقطاعات ←" : "Explore All Sectors & Capabilities"}</span>
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                    <span className="text-[11px] text-white/40">
                      {isAr ? "تعاقد موحد عبر عقد رئيسي واحد (MSA)" : "Single Master Services Agreement"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* ── ACCESSIBLE FULL-SCREEN MOBILE MENU (Section 3) ───────────────── */}
      <div
        className="fixed inset-0 z-50 lg:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className="absolute inset-x-4 top-4 bottom-4 rounded-3xl border border-white/15 bg-[#000823] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
          style={{
            transform: mobileOpen ? "scale(1)" : "scale(0.96)",
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div>
            {/* Top Bar: Brand + Visible Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center">
                <img
                  src="/growl-icons/white-icon.png"
                  alt="Growl Holding Group"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLang}
                  className="px-3 py-1.5 rounded-xl border border-white/15 text-xs font-semibold text-white/80 hover:text-white"
                >
                  {isAr ? "EN" : "العربية"}
                </button>
                {/* Visible Close Button */}
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 1L13 13M1 13L1" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Clear Sector Links (Corporate, Non-AI style) */}
            <div className="py-4 border-b border-white/[0.08]">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-semibold text-white/60">
                  {isAr ? "القطاعات المتخصصة" : "Specialized Sectors"}
                </span>
                <Link
                  href="/sectors"
                  className="text-xs font-semibold text-[#B1A5F9] hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {isAr ? "عرض الكل ←" : "Overview →"}
                </Link>
              </div>

              <div className="space-y-1">
                {SECTORS.slice(0, 5).map((sector) => (
                  <Link
                    key={sector.id}
                    href={sector.canonicalHref}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center gap-3.5">
                      <SectorIcon slug={sector.slug} size={36} className="shrink-0" />
                      <span className="text-sm font-semibold text-white group-hover:text-white">
                        {isAr ? sector.nameAr : sector.name}
                      </span>
                    </div>

                    <span className="text-xs text-white/40 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* General Navigation Links */}
            <div className="py-4 space-y-1">
              {NAV_LINKS.filter((l) => !l.isDropdown).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {isAr ? link.nameAr : link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Primary CTA */}
          <div className="pt-4 border-t border-white/[0.08]">
            <Link
              href="/contact"
              className="block w-full py-3.5 text-center rounded-xl bg-white text-[#000823] text-xs font-semibold uppercase tracking-[0.14em] shadow-md hover:bg-white/90 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {isAr ? "ابدأ محادثة معنا الآن" : "Start a Conversation"}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
