"use client"

import React, { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll"
import { SectionLabel } from "@/components/shared/section-label"
import { useLanguage } from "@/components/language-context"

const DIVISIONS = [
  { id: "marketing", en: "Growl Marketing & Branding", ar: "جرول للتسويق وبناء العلامات" },
  { id: "tech", en: "Growl Tech", ar: "جرول للتقنية وهندسة البرمجيات" },
  { id: "ai", en: "Growl AI", ar: "جرول للذكاء الاصطناعي والأتمتة" },
  { id: "cybersecurity", en: "Growl System Integrator & Cybersecurity", ar: "جرول لتكامل الأنظمة والأمن السيبراني" },
  { id: "hub", en: "Growl Hub", ar: "منصة جرول هب للأنظمة السحابية" },
]

const PROJECT_TYPES = [
  { en: "Enterprise Software & Mobile App", ar: "تطوير برمجيات مؤسسية وتطبيقات هواتف" },
  { en: "AI Agent & Workflow Automation", ar: "بناء وكلاء ذكاء اصطناعي وأتمتة مسارات" },
  { en: "Systems, ERP & API Integration", ar: "تكامل الأنظمة السحابية و ERP والـ APIs" },
  { en: "Cybersecurity Audit & Penetration Testing", ar: "تدقيق أمني واختبارات اختراق سيبراني" },
  { en: "Brand Identity & Performance Growth", ar: "هوية بصرية واستراتيجية تسويق رقمي" },
  { en: "Growl Hub Platform Onboarding", ar: "الاشتراك بمنصة جرول هب لإدارة الوكالات" },
  { en: "Multi-Division Enterprise Retainer", ar: "شراكة استراتيجية تشمل عدة قطاعات" },
]

const BUDGET_RANGES = [
  { en: "$15,000 – $50,000", ar: "15,000$ – 50,000$" },
  { en: "$50,000 – $150,000", ar: "50,000$ – 150,000$" },
  { en: "$150,000 – $500,000", ar: "150,000$ – 500,000$" },
  { en: "$500,000+ (Enterprise)", ar: "500,000$+ (عقود مؤسسية كبرى)" },
  { en: "Undisclosed / Discussion", ar: "قيد الدراسة / للتحديد أثناء النقاش" },
]

const TIMELINES = [
  { en: "Immediate (within 2 weeks)", ar: "فوري (خلال أسبوعين)" },
  { en: "1–3 months", ar: "خلال شهر إلى 3 أشهر" },
  { en: "3–6 months", ar: "خلال 3 إلى 6 أشهر" },
  { en: "Long-term partnership", ar: "شراكة استراتيجية طويلة الأجل" },
]

export default function ContactPage() {
  const { isAr } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [selectedDivisions, setSelectedDivisions] = useState<string[]>([])

  const toggleDivision = (id: string) => {
    setSelectedDivisions((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        dir={isAr ? "rtl" : "ltr"}
        className="bg-[#f8f8f8] text-[#000823] min-h-screen font-sans antialiased"
      >
        <SiteHeader />
        <section className="pt-40 pb-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#059669]/10 flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              {isAr ? "تم استلام استفسارك بنجاح." : "Thank you for reaching out."}
            </h1>
            <p className="text-[15px] text-[#000823]/65 leading-relaxed mb-4 font-normal">
              {isAr
                ? "تم تحويل طلبك مباشرة إلى القيادة التنفيذية للقطاع المعني. سيقوم أحد مستشارينا بالتواصل معك لمناقشة المتطلبات وتحديد خارطة الطريق التقنية."
                : "Your request has been routed directly to the leadership of the requested division(s). A senior Growl technical strategist will contact you to discuss your roadmap."}
            </p>
            <p className="text-xs text-[#000823]/40 mb-8 font-mono">
              {isAr ? "متوسط سرعة الرد التنفيذي: أقل من 24 ساعة عمل." : "Typical executive response time: under 24 business hours."}
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#000823] text-white text-[12px] tracking-[0.12em] uppercase font-semibold hover:bg-[#000823]/85 transition-all shadow-sm"
            >
              {isAr ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="bg-[#f8f8f8] text-[#000823] min-h-screen font-sans antialiased"
    >
      <SiteHeader />

      <section className="pt-36 pb-16 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06]">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7135E5]" />
              <SectionLabel>{isAr ? "التواصل والاستفسار التنفيذي" : "EXECUTIVE ENGAGEMENT"}</SectionLabel>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold tracking-tight leading-[1.12] mb-5 text-[#000823] max-w-3xl">
              {isAr ? (
                <>ابدأ محادثة استراتيجية<br />حول مشروعك القادم.</>
              ) : (
                <>Start an executive conversation.<br />Engineer what matters.</>
              )}
            </h1>
            <p className="text-base sm:text-lg text-[#525866] leading-[1.6] max-w-2xl font-normal mb-8">
              {isAr
                ? "أخبرنا بما تخطط لبنائه، أو أتمتته، أو ربطه، أو حمايته، أو توسيعه. سنقوم بحشد أفضل الكفاءات المتخصصة من قطاعات جرول الخمسة لخدمة أهدافك."
                : "Tell us what you are building, automating, integrating, securing, or scaling. We will assemble the exact senior multidisciplinary capabilities across Growl Co. around your opportunity."}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Division Selector */}
              <div>
                <label className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-3 font-semibold">
                  {isAr ? "القطاع أو القطاعات المطلوبة" : "Sector(s) of Interest"}
                  <span className="text-[#000823]/40 font-normal ms-2">
                    {isAr ? "(يمكنك اختيار أكثر من قطاع)" : "(Select all that apply)"}
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {DIVISIONS.map((div) => {
                    const active = selectedDivisions.includes(div.id)
                    return (
                      <button
                        key={div.id}
                        type="button"
                        onClick={() => toggleDivision(div.id)}
                        className={`text-xs px-4 py-2.5 rounded-xl border font-medium transition-all duration-200 cursor-pointer ${
                          active
                            ? "bg-[#000823] text-white border-[#000823] shadow-xs"
                            : "bg-[#F8F8F8] border-[#000823]/10 text-[#000823]/70 hover:border-[#000823]/30 hover:text-[#000823]"
                        }`}
                      >
                        {isAr ? div.ar : div.en}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-2 font-semibold">
                    {isAr ? "الاسم الكامل" : "Full Name"} <span className="text-[#e11d48]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#000823]/10 bg-[#F8F8F8] text-sm text-[#000823] placeholder:text-[#000823]/30 focus:outline-none focus:border-[#000823] focus:bg-white transition-all"
                    placeholder={isAr ? "مثال: م. أحمد السالم" : "e.g. Alexander Vance"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-2 font-semibold">
                    {isAr ? "البريد الإلكتروني المهني" : "Work Email"} <span className="text-[#e11d48]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#000823]/10 bg-[#F8F8F8] text-sm text-[#000823] placeholder:text-[#000823]/30 focus:outline-none focus:border-[#000823] focus:bg-white transition-all"
                    placeholder={isAr ? "name@company.com" : "alexander@enterprise.com"}
                  />
                </div>
              </div>

              {/* Company + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-2 font-semibold">
                    {isAr ? "اسم المؤسسة أو الشركة" : "Company / Enterprise"} <span className="text-[#e11d48]">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#000823]/10 bg-[#F8F8F8] text-sm text-[#000823] placeholder:text-[#000823]/30 focus:outline-none focus:border-[#000823] focus:bg-white transition-all"
                    placeholder={isAr ? "اسم الشركة" : "Acme Corp Ltd."}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-2 font-semibold">
                    {isAr ? "رقم الهاتف" : "Phone Number"} <span className="text-[#000823]/30 font-normal">({isAr ? "اختياري" : "optional"})</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-[#000823]/10 bg-[#F8F8F8] text-sm text-[#000823] placeholder:text-[#000823]/30 focus:outline-none focus:border-[#000823] focus:bg-white transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Project Type + Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-2 font-semibold">
                    {isAr ? "نوع المشروع الأساسي" : "Engagement Type"}
                  </label>
                  <select
                    id="projectType"
                    className="w-full px-4 py-3 rounded-xl border border-[#000823]/10 bg-[#F8F8F8] text-sm text-[#000823] focus:outline-none focus:border-[#000823] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="">{isAr ? "اختر طبيعة المشروع" : "Select engagement type"}</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t.en} value={t.en}>
                        {isAr ? t.ar : t.en}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-2 font-semibold">
                    {isAr ? "الميزانية الاستثمارية التقديرية" : "Estimated Investment Scope"}
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 rounded-xl border border-[#000823]/10 bg-[#F8F8F8] text-sm text-[#000823] focus:outline-none focus:border-[#000823] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="">{isAr ? "اختر النطاق التقديري" : "Select investment scope"}</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b.en} value={b.en}>
                        {isAr ? b.ar : b.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-2 font-semibold">
                  {isAr ? "الجدول الزمني المستهدف" : "Target Delivery Timeline"}
                </label>
                <select
                  id="timeline"
                  className="w-full px-4 py-3 rounded-xl border border-[#000823]/10 bg-[#F8F8F8] text-sm text-[#000823] focus:outline-none focus:border-[#000823] focus:bg-white transition-all cursor-pointer"
                >
                  <option value="">{isAr ? "اختر الإطار الزمني" : "Select target timeline"}</option>
                  {TIMELINES.map((t) => (
                    <option key={t.en} value={t.en}>
                      {isAr ? t.ar : t.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-[11px] font-mono tracking-[0.15em] uppercase text-[#000823]/60 mb-2 font-semibold">
                  {isAr ? "شرح تفاصيل المشروع أو التحدي التقني" : "Project Outline & Strategic Goals"}{" "}
                  <span className="text-[#e11d48]">*</span>
                </label>
                <textarea
                  id="description"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#000823]/10 bg-[#F8F8F8] text-sm text-[#000823] placeholder:text-[#000823]/30 focus:outline-none focus:border-[#000823] focus:bg-white transition-all resize-none"
                  placeholder={
                    isAr
                      ? "اشرح أهداف مشروعك، التحديات الحالية، الأنظمة التي ترغب في ربطها أو أتمتتها، والنتائج التجارية المطلوبة..."
                      : "Briefly outline what you need to engineer, automate, integrate, or secure, including existing architecture and commercial goals..."
                  }
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 accent-[#000823] rounded cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-[#000823]/60 leading-relaxed cursor-pointer">
                  {isAr ? (
                    <>
                      أوافق على قيام مجموعة GROWL CO. بمعالجة هذه البيانات للتواصل بشأن طلبي. قرأت واطلعت على{" "}
                      <Link href="/privacy" className="underline font-semibold text-[#000823]">
                        سياسة الخصوصية
                      </Link>.
                    </>
                  ) : (
                    <>
                      I consent to Growl Co. processing my information to respond to this enquiry. I have reviewed the{" "}
                      <Link href="/privacy" className="underline font-semibold text-[#000823]">
                        Privacy Policy
                      </Link>.
                    </>
                  )}
                </label>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#000823] text-white text-[12px] font-mono uppercase tracking-widest font-semibold hover:bg-[#000823] transition-all duration-200 shadow-md cursor-pointer"
                >
                  {isAr ? "إرسال طلب الاستشارة التنفيذية" : "Submit Executive Enquiry"}
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
