"use client"

import React from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { useLanguage } from "@/components/language-context"

export default function TermsPage() {
  const { isAr } = useLanguage()

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="bg-[#f8f8f8] text-[#000823] min-h-screen font-sans antialiased"
    >
      <SiteHeader />

      <main className="pt-36 pb-28 px-6 md:px-12 lg:px-20">
        <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-black/[0.06] shadow-xs">
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#000823]/40 mb-3 font-semibold">
            {isAr ? "الشروط والاتفاقيات التجارية" : "LEGAL & TERMS OF ENGAGEMENT"}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#000823] mb-3">
            {isAr ? "الشروط والأحكام العامة" : "Terms & Conditions of Service"}
          </h1>
          <p className="text-xs font-mono text-[#000823]/40 mb-10">
            {isAr ? "تاريخ السريان: سبتمبر 2026 • حوكمة اتفاقيات الخدمات الرئيسية (MSA)" : "Effective Date: September 2026 • Master Services Agreement Framework"}
          </p>

          <div className="space-y-8 text-sm text-[#000823]/70 leading-relaxed font-normal">
            <section>
              <h2 className="text-base font-bold text-[#000823] mb-2">
                {isAr ? "1. قبول الشروط" : "1. Acceptance of Terms"}
              </h2>
              <p>
                {isAr
                  ? "بدخولك واستخدامك لموقع مجموعة GROWL CO.، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام هذا الموقع."
                  : "By accessing and browsing the Growl Co. web presence or utilizing digital assets, you acknowledge and agree to be bound by these Terms of Service."}
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#000823] mb-2">
                {isAr ? "2. نطاق خدمات القطاعات" : "2. Scope of Specialized Division Services"}
              </h2>
              <p>
                {isAr
                  ? "تقدم GROWL CO. خدمات وحلولاً متخصصة تشمل هندسة البرمجيات، والذكاء الاصطناعي، وتكامل الأنظمة والأمن السيبراني، والتسويق، وحلول SaaS عبر قطاعاتها الخمسة. يتم تفصيل نطاق العمل ومؤشرات الأداء في اتفاقيات التعاقد المباشرة (SOW و MSA) مع العملاء."
                  : "Growl Co. operates five specialized technical and creative divisions. Specific deliverables, intellectual property assignments, and service-level agreements (SLAs) are governed by dedicated Master Services Agreements (MSA) and Statements of Work (SOW)."}
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#000823] mb-2">
                {isAr ? "3. الملكية الفكرية وسرية المعلومات" : "3. Intellectual Property & Confidentiality"}
              </h2>
              <p>
                {isAr
                  ? "كافة التصاميم، والشفرات البرمجية، والمحتوى المعروض على هذا الموقع هي ملك حصري لمجموعة GROWL CO. أو مرخصيها ومحمية بقوانين الملكية الفكرية الدولية. نلتزم باتفاقيات عدم إفشاء الأسرار (NDA) الصارمة لكافة مشاريع عملائنا."
                  : "All proprietary methodologies, design tokens, and digital assets on this site are protected by copyright and intellectual property laws. Client engagements are protected by mutual non-disclosure agreements (NDAs)."}
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#000823] mb-2">
                {isAr ? "4. الاستفسارات القانونية" : "4. Legal Governance Inquiries"}
              </h2>
              <p>
                {isAr
                  ? "لأي استفسارات قانونية أو مراجعة شروط التعاقد المؤسسي، يرجى التواصل مع المستشار القانوني للمجموعة عبر "
                  : "For contract governance inquiries, vendor agreements, or institutional contracting, please connect with us via "}
                <Link href="/contact" className="underline font-semibold text-[#000823]">
                  {isAr ? "نموذج التواصل التنفيذي" : "our executive contact form"}
                </Link>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
