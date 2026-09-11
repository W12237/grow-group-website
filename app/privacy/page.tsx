"use client"

import React from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { useLanguage } from "@/components/language-context"

export default function PrivacyPage() {
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
            {isAr ? "الوثائق القانونية والخصوصية" : "LEGAL & COMPLIANCE"}
          </p>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
            {isAr ? "سياسة الخصوصية وحماية البيانات" : "Privacy Policy & Data Governance"}
          </h1>
          <p className="text-xs font-mono text-[#000823]/40 mb-10">
            {isAr ? "تاريخ السريان: سبتمبر 2026 • متوافق مع GDPR ومعايير حوكمة ISO 27001" : "Effective Date: September 2026 • GDPR & ISO 27001 Aligned"}
          </p>

          <div className="space-y-8 text-sm text-[#000823]/70 leading-relaxed font-normal">
            <section>
              <h2 className="text-base font-bold text-[#000823] mb-2">
                {isAr ? "1. المقدمة والالتزام" : "1. Introduction & Executive Commitment"}
              </h2>
              <p>
                {isAr
                  ? "تلتزم مجموعة GROWL CO. بحماية الخصوصية والبيانات الشخصية والمعلومات المؤسسية لزوار موقعنا، وعملائنا، وشركائنا التجاريين. توضح هذه السياسة كيف نقوم بجمع واستخدام وحفظ وحماية البيانات وفق أعلى المعايير الدولية."
                  : "Growl Co. ('Growl,' 'we,' 'our') is committed to protecting the privacy, confidentiality, and integrity of personal and enterprise data belonging to our clients, partners, and site visitors. This Privacy Policy details how data is collected, governed, and safeguارد under international standards."}
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#000823] mb-2">
                {isAr ? "2. البيانات التي نجمعها" : "2. Information We Collect"}
              </h2>
              <ul className="list-disc ps-5 space-y-1.5">
                <li>
                  {isAr
                    ? "معلومات الاتصال: الاسم، والبريد الإلكتروني المهني، ورقم الهاتف، واسم المؤسسة المقدمة عبر نماذج الاستفسار."
                    : "Corporate contact details: name, professional work email, phone number, and company name provided in enquiry forms."}
                </li>
                <li>
                  {isAr
                    ? "المتطلبات التقنية: تفاصيل المشاريع، والأنظمة المطلوب ربطها، والميزانيات التقديرية التي تشاركها معنا."
                    : "Technical requirements: architecture scopes, API endpoints, and project specifications shared during consultation."}
                </li>
                <li>
                  {isAr
                    ? "البيانات التقنية والتحليلية: عناوين IP، ونوع المتصفح، ومعلومات الجلسة المشفرة المجمعة عبر أدوات التحليل المعتمدة."
                    : "Technical telemetry: anonymized IP address, device fingerprints, and session telemetry collected via secure analytics."}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#000823] mb-2">
                {isAr ? "3. أمان وحماية البيانات" : "3. Security Hardening & Zero-Trust Governance"}
              </h2>
              <p>
                {isAr
                  ? "يتم تشفير كافة البيانات المنقولة باستخدام بروتوكولات TLS 1.3 وتخزينها في بيئات سحابية معزولة ومشفرة بتشفير AES-256 وفق معمارية Zero Trust الصارمة لقطاع الأمن السيبراني في GROWL."
                  : "All transmitted data is encrypted in transit via TLS 1.3 and at rest via AES-256 within hardened enterprise cloud enclaves, strictly governed by Growl Cybersecurity's Zero-Trust framework."}
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#000823] mb-2">
                {isAr ? "4. التواصل مع مسؤول حماية البيانات" : "4. Data Protection Inquiries"}
              </h2>
              <p>
                {isAr
                  ? "لأي استفسار يتعلق بحقوقك أو طلب حذف بياناتك، يرجى التواصل مع فريق الامتثال القانوني عبر "
                  : "For privacy inquiries, audit requests, or data deletion inquiries, please contact our compliance desk at "}
                <Link href="/contact" className="underline font-semibold text-[#000823]">
                  {isAr ? "صفحة التواصل المباشر" : "our executive contact form"}
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
