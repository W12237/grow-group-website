"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { SECTORS } from "@/lib/sectors-data"

const FOOTER_DIVISIONS = SECTORS.map((sector) => ({
  name: sector.fullName,
  nameAr: sector.fullNameAr,
  href: sector.canonicalHref,
}))

const FOOTER_COMPANY = [
  { name: "About", nameAr: "عن جرول", href: "/about" },
  { name: "Work", nameAr: "الأعمال والمشاريع", href: "/work" },
  { name: "Partners", nameAr: "الشركاء والمنظومة", href: "/partners" },
  { name: "Insights", nameAr: "الرؤى والبحوث", href: "/insights" },
  { name: "Careers", nameAr: "الوظائف", href: "/careers" },
  { name: "Contact", nameAr: "تواصل معنا", href: "/contact" },
]

const FOOTER_LEGAL = [
  { name: "Privacy Policy", nameAr: "سياسة الخصوصية", href: "/privacy" },
  { name: "Terms & Conditions", nameAr: "الشروط والأحكام", href: "/terms" },
  {
    name: "Security & Compliance",
    nameAr: "الأمان والامتثال",
    href: "/sectors/system-integrator-cybersecurity",
  },
]

export function SiteFooter() {
  const { isAr } = useLanguage()
  const currentYear = new Date().getFullYear()

  // Mobile accordion state: Our Divisions open by default, multiple can stay open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    divisions: true,
    company: false,
    legal: false,
  })

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <footer
      className="bg-white text-[#000823] border-t border-[#E6E7EC] font-sans antialiased"
      role="contentinfo"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12 pt-10 md:pt-16 pb-8">
        {/* ── DESKTOP GRID (1024px+) ─────────────────────────────────────── */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* 1. Brand Block */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
              aria-label="Growl Home"
            >
              <img
                src="/growl-icons/growl-logo-dark.png"
                alt="Growl"
                className="w-[195px] h-auto object-contain"
                width={195}
                height={38}
              />
            </Link>

            <p className="mt-4 text-sm text-[#525866] max-w-[320px] leading-relaxed">
              {isAr
                ? "حلول التقنية، التسويق، وإدارة الأعمال — متكاملة تحت مظلة واحدة."
                : "Technology, marketing, and business solutions, brought together."}
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-semibold text-[#7135e5] hover:text-[#5521b5] transition-colors duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
              >
                <span>{isAr ? "تواصل معنا" : "Get in touch"}</span>
                <span aria-hidden="true" className="text-base transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5">
                  ↗
                </span>
              </Link>
            </div>
          </div>

          {/* 2. Our Divisions */}
          <nav className="lg:col-span-4" aria-label={isAr ? "قطاعاتنا" : "Our Divisions"}>
            <h2 className="text-sm font-semibold text-[#000823] mb-4">
              {isAr ? "قطاعاتنا" : "Our Divisions"}
            </h2>
            <ul className="space-y-3">
              {FOOTER_DIVISIONS.map((division) => (
                <li key={division.href}>
                  <Link
                    href={division.href}
                    className="text-[15px] text-[#525866] hover:text-[#7135e5] transition-colors duration-150 leading-snug block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
                  >
                    {isAr ? division.nameAr : division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. Company */}
          <nav className="lg:col-span-2" aria-label={isAr ? "الشركة" : "Company"}>
            <h2 className="text-sm font-semibold text-[#000823] mb-4">
              {isAr ? "الشركة" : "Company"}
            </h2>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[#525866] hover:text-[#7135e5] transition-colors duration-150 leading-snug block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
                  >
                    {isAr ? link.nameAr : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 4. Legal */}
          <nav className="lg:col-span-2" aria-label={isAr ? "الشؤون القانونية" : "Legal"}>
            <h2 className="text-sm font-semibold text-[#000823] mb-4">
              {isAr ? "الشؤون القانونية" : "Legal"}
            </h2>
            <ul className="space-y-3">
              {FOOTER_LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[#525866] hover:text-[#7135e5] transition-colors duration-150 leading-snug block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
                  >
                    {isAr ? link.nameAr : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── TABLET 2-COLUMN ARRANGEMENT (768px – 1023px) ────────────────── */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-10 items-start">
          {/* Left Column: Brand & Company */}
          <div className="space-y-8">
            <div>
              <Link
                href="/"
                className="inline-block group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
                aria-label="Growl Home"
              >
                <img
                  src="/growl-icons/growl-logo-dark.png"
                  alt="Growl"
                  className="w-[185px] h-auto object-contain"
                  width={185}
                  height={36}
                />
              </Link>
              <p className="mt-3.5 text-sm text-[#525866] max-w-[320px] leading-relaxed">
                {isAr
                  ? "حلول التقنية، التسويق، وإدارة الأعمال — متكاملة تحت مظلة واحدة."
                  : "Technology, marketing, and business solutions, brought together."}
              </p>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-semibold text-[#7135e5] hover:text-[#5521b5] transition-colors duration-150"
                >
                  <span>{isAr ? "تواصل معنا" : "Get in touch"}</span>
                  <span aria-hidden="true" className="text-base">↗</span>
                </Link>
              </div>
            </div>

            <nav aria-label={isAr ? "الشركة" : "Company"}>
              <h2 className="text-sm font-semibold text-[#000823] mb-3">
                {isAr ? "الشركة" : "Company"}
              </h2>
              <ul className="space-y-2.5">
                {FOOTER_COMPANY.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#525866] hover:text-[#7135e5] transition-colors duration-150 leading-snug block"
                    >
                      {isAr ? link.nameAr : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Column: Divisions & Legal */}
          <div className="space-y-8">
            <nav aria-label={isAr ? "قطاعاتنا" : "Our Divisions"}>
              <h2 className="text-sm font-semibold text-[#000823] mb-3">
                {isAr ? "قطاعاتنا" : "Our Divisions"}
              </h2>
              <ul className="space-y-2.5">
                {FOOTER_DIVISIONS.map((division) => (
                  <li key={division.href}>
                    <Link
                      href={division.href}
                      className="text-[15px] text-[#525866] hover:text-[#7135e5] transition-colors duration-150 leading-snug block"
                    >
                      {isAr ? division.nameAr : division.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={isAr ? "الشؤون القانونية" : "Legal"}>
              <h2 className="text-sm font-semibold text-[#000823] mb-3">
                {isAr ? "الشؤون القانونية" : "Legal"}
              </h2>
              <ul className="space-y-2.5">
                {FOOTER_LEGAL.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#525866] hover:text-[#7135e5] transition-colors duration-150 leading-snug block"
                    >
                      {isAr ? link.nameAr : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* ── MOBILE ACCORDION LAYOUT (<768px) ───────────────────────────── */}
        <div className="block md:hidden">
          {/* Mobile Brand Block */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-block group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
              aria-label="Growl Home"
            >
              <img
                src="/growl-icons/growl-logo-dark.png"
                alt="Growl"
                className="w-[165px] h-auto object-contain"
                width={165}
                height={32}
              />
            </Link>

            <p className="mt-3 text-sm text-[#525866] leading-relaxed">
              {isAr
                ? "حلول التقنية، التسويق، وإدارة الأعمال — متكاملة تحت مظلة واحدة."
                : "Technology, marketing, and business solutions, brought together."}
            </p>

            <div className="mt-4">
              <Link
                href="/contact"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-semibold text-[#7135e5] hover:text-[#5521b5] transition-colors duration-150"
              >
                <span>{isAr ? "تواصل معنا" : "Get in touch"}</span>
                <span aria-hidden="true" className="text-base">↗</span>
              </Link>
            </div>
          </div>

          {/* 3 Full-Width Accordion Groups */}
          <div className="border-b border-[#E6E7EC]">
            {/* Accordion 1: Our Divisions (Open by default) */}
            <div className="border-t border-[#E6E7EC]">
              <button
                type="button"
                className="w-full min-h-[52px] py-3.5 flex items-center justify-between text-left rtl:text-right font-semibold text-[16px] text-[#000823] cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
                onClick={() => toggleSection("divisions")}
                aria-expanded={openSections.divisions}
                aria-controls="mobile-footer-divisions"
              >
                <span>{isAr ? "قطاعاتنا" : "Our Divisions"}</span>
                <span
                  aria-hidden="true"
                  className="text-lg font-normal text-[#525866] w-6 h-6 flex items-center justify-center shrink-0"
                >
                  {openSections.divisions ? "−" : "+"}
                </span>
              </button>

              {openSections.divisions && (
                <nav
                  id="mobile-footer-divisions"
                  aria-label={isAr ? "قطاعاتنا" : "Our Divisions"}
                  className="pb-4 pt-1"
                >
                  <ul className="space-y-0.5">
                    {FOOTER_DIVISIONS.map((division) => (
                      <li key={division.href}>
                        <Link
                          href={division.href}
                          className="min-h-[44px] flex items-center text-[16px] text-[#525866] hover:text-[#7135e5] py-2 transition-colors duration-150 leading-snug break-words"
                        >
                          {isAr ? division.nameAr : division.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {/* Accordion 2: Company */}
            <div className="border-t border-[#E6E7EC]">
              <button
                type="button"
                className="w-full min-h-[52px] py-3.5 flex items-center justify-between text-left rtl:text-right font-semibold text-[16px] text-[#000823] cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
                onClick={() => toggleSection("company")}
                aria-expanded={openSections.company}
                aria-controls="mobile-footer-company"
              >
                <span>{isAr ? "الشركة" : "Company"}</span>
                <span
                  aria-hidden="true"
                  className="text-lg font-normal text-[#525866] w-6 h-6 flex items-center justify-center shrink-0"
                >
                  {openSections.company ? "−" : "+"}
                </span>
              </button>

              {openSections.company && (
                <nav
                  id="mobile-footer-company"
                  aria-label={isAr ? "الشركة" : "Company"}
                  className="pb-4 pt-1"
                >
                  <ul className="space-y-0.5">
                    {FOOTER_COMPANY.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="min-h-[44px] flex items-center text-[16px] text-[#525866] hover:text-[#7135e5] py-2 transition-colors duration-150 leading-snug"
                        >
                          {isAr ? link.nameAr : link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {/* Accordion 3: Legal */}
            <div className="border-t border-[#E6E7EC]">
              <button
                type="button"
                className="w-full min-h-[52px] py-3.5 flex items-center justify-between text-left rtl:text-right font-semibold text-[16px] text-[#000823] cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7135e5]/40 rounded-sm"
                onClick={() => toggleSection("legal")}
                aria-expanded={openSections.legal}
                aria-controls="mobile-footer-legal"
              >
                <span>{isAr ? "الشؤون القانونية" : "Legal"}</span>
                <span
                  aria-hidden="true"
                  className="text-lg font-normal text-[#525866] w-6 h-6 flex items-center justify-center shrink-0"
                >
                  {openSections.legal ? "−" : "+"}
                </span>
              </button>

              {openSections.legal && (
                <nav
                  id="mobile-footer-legal"
                  aria-label={isAr ? "الشؤون القانونية" : "Legal"}
                  className="pb-4 pt-1"
                >
                  <ul className="space-y-0.5">
                    {FOOTER_LEGAL.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="min-h-[44px] flex items-center text-[16px] text-[#525866] hover:text-[#7135e5] py-2 transition-colors duration-150 leading-snug"
                        >
                          {isAr ? link.nameAr : link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ───────────────────────────────────────────────── */}
        <div className="border-t border-[#E6E7EC] mt-10 md:mt-14 pt-6 pb-6 md:pb-2">
          <p className="text-sm text-[#525866] leading-normal">
            © {currentYear} {isAr ? "جرول. جميع الحقوق محفوظة." : "Growl. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
