"use client"

import React, { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorCta } from "@/components/sectors/sector-cta"
import { SectionLabel } from "@/components/shared/section-label"
import { useLanguage } from "@/components/language-context"
import { PARTNERS_DATA } from "@/lib/partners-data"
import { CASE_STUDIES_DATA } from "@/lib/case-studies-data"

const ACCENT = "#FBE858"
const TINT = "#FBF1AA"

interface SaasProduct {
  id: string
  name: string
  nameAr: string
  tagline: string
  taglineAr: string
  description: string
  descriptionAr: string
  targetBusiness: string
  targetBusinessAr: string
  modules: string[]
  modulesAr: string[]
  billingCycle: string
  billingCycleAr: string
  highlight: string
}

const SAAS_PRODUCTS: SaasProduct[] = [
  {
    id: "cloud-erp",
    name: "Growl Cloud ERP",
    nameAr: "جرول ERP السحابي",
    tagline: "General Ledger, Invoicing & Multi-Warehouse Operations",
    taglineAr: "دفتر الأستاذ العام، الفواتير وإدارة المخازن المتعددة",
    description: "Enterprise operational planning packaged as a ready-to-deploy cloud system with certified tax compliance and double-entry accounting.",
    descriptionAr: "تخطيط موارد مؤسسي متكامل ومعتمد ضريبياً لإدارة الحسابات، المشتريات، والمخازن المتعددة بجاهزية فورية.",
    targetBusiness: "Distribution, Wholesale, & Multi-Entity Trading",
    targetBusinessAr: "شركات التوزيع، التجارة، والمؤسسات متعددة الكيانات",
    modules: ["Financial Accounting", "Inventory & Warehouses", "Purchasing & Vendor Bills", "Electronic Invoicing & Tax"],
    modulesAr: ["المحاسبة المالية العامة", "إدارة المخازن وحركة الأصناف", "المشتريات وفواتير الموردين", "الفاتورة الإلكترونية والضرائب"],
    billingCycle: "Monthly or Annual per Tenant",
    billingCycleAr: "اشتراك شهري أو سنوي للكيان",
    highlight: "Ready in 5 Days",
  },
  {
    id: "retail-pos",
    name: "Growl Retail POS",
    nameAr: "جرول لنقاط البيع POS",
    tagline: "High-Volume Multi-Branch Point of Sale",
    taglineAr: "نقاط بيع سحابية سريعة للفروع وسلاسل المتاجر",
    description: "Fast touch checkout with local offline resilience, instant barcode lookup, cash drawer management, and automated branch telemetry.",
    descriptionAr: "نظام كاشير سريع يعمل دون انقطاع حتى مع انقطاع الإنترنت، مع مزامنة لحظية بين الفروع وتقارير فورية.",
    targetBusiness: "Specialty Retail, Food & Beverage, Multi-Location Chains",
    targetBusinessAr: "المتاجر المتخصصة، المطاعم والمقاهي، وسلاسل التجزئة",
    modules: ["Offline-First Cashier", "Branch Inventory Sync", "Thermal Receipt & Barcode", "Cash Drawer Reconciliation"],
    modulesAr: ["تشغيل كامل دون إنترنت", "مزامنة لحظية للمخزون", "طباعة الفواتير والباركود", "مطابقة وجرد الخزينة الوردية"],
    billingCycle: "Per Register / Month",
    billingCycleAr: "اشتراك شهري لكل نقطة بيع",
    highlight: "Offline Resilient",
  },
  {
    id: "pipeline-crm",
    name: "Growl Pipeline CRM",
    nameAr: "جرول لإدارة المبيعات CRM",
    tagline: "Account Intelligence & Opportunity Lifecycle",
    taglineAr: "إدارة الحسابات، مسارات المبيعات والفرص التجارية",
    description: "Configured pipeline management connecting marketing leads, executive follow-ups, contract stages, and automated revenue forecasting.",
    descriptionAr: "منظومة مبيعات متكاملة تتابع العملاء المحتملين، دورات التفاوض، مراحل العقود، والتنبؤ الدقيق بالإيرادات.",
    targetBusiness: "B2B Professional Services, Contracting & Real Estate",
    targetBusinessAr: "الخدمات المهنية، المقاولات، والشركات العقارية والتجارية",
    modules: ["Deal Stages & Pipelines", "Contact & Account Dossiers", "Task Reminders & SLAs", "Forecast Telemetry"],
    modulesAr: ["مراحل الصفقات والمسارات", "ملفات الحسابات وجهات الاتصال", "المهام والتذكيرات الآلية", "تقارير وتوقعات الإيرادات"],
    billingCycle: "Monthly / User Tier",
    billingCycleAr: "اشتراك شهري حسب عدد المستخدمين",
    highlight: "Zero Dev Setup",
  },
  {
    id: "workforce-hr",
    name: "Growl People & Attendance",
    nameAr: "جرول للموارد البشرية والدوام",
    tagline: "Employee Records, Biometrics & Payroll Preparation",
    taglineAr: "سجلات الموظفين، البصمة ومسيرات الرواتب",
    description: "Centralized employee profiles, automated biometric attendance calculation, leave request workflows, and payroll-ready export sheets.",
    descriptionAr: "نظام إدارة الموارد البشرية لربط أجهزة البصمة، احتساب أوقات الدوام والإجازات، وإعداد مسيرات الرواتب تلقائياً.",
    targetBusiness: "Mid-Market Enterprises, Corporate Offices, Operations Teams",
    targetBusinessAr: "الشركات المتوسطة والكبرى، المكاتب وفرق العمل الميدانية",
    modules: ["Biometric Machine Gateway", "Leave Approval Hierarchy", "Shift Schedules & Overtime", "Payroll Sheet Generation"],
    modulesAr: ["ربط أجهزة البصمة مباشرة", "سلسلة الموافقات على الإجازات", "جداول الورديات والإضافي", "استخراج مسيرات الرواتب"],
    billingCycle: "Annual Cap or Monthly Tier",
    billingCycleAr: "باقة سنوية أو شهرية مرنة",
    highlight: "Biometrics Ready",
  },
]

const ONBOARDING_STEPS = [
  { step: "01", name: "Select the Product", nameAr: "اختيار المنتج", desc: "Identify the exact subscription suite matching your active business requirements.", descAr: "تحديد حزمة البرمجيات المناسبة للاحتياج التشغيلي الحالي." },
  { step: "02", name: "Choose Required Modules", nameAr: "تحديد الوحدات المطلوبة", desc: "Activate only the functional modules your team will actually utilize daily.", descAr: "تفعيل الوحدات التشغيلية التي تحتاجها فرق العمل فقط دون تكاليف إضافية." },
  { step: "03", name: "Configure Business Info", nameAr: "تهيئة بيانات المنشأة", desc: "Input tax registrations, branch structures, chart of accounts, and user roles.", descAr: "إدخال السجلات الضريبية، شجرة الحسابات، وصلاحيات المستخدمين." },
  { step: "04", name: "Import Approved Data", nameAr: "استيراد البيانات المعتمدة", desc: "Structured import of customer balances, vendor lists, and product catalog files.", descAr: "ترحيل وتدقيق أرصدة العملاء، قوائم الموردين، ومخزون المنتجات." },
  { step: "05", name: "Train the Team", nameAr: "تدريب فرق العمل", desc: "Hands-on role-based training sessions tailored to daily operator workflows.", descAr: "جلسات تدريبية عملية للمستخدمين حسب مهامهم اليومية الفعلية." },
  { step: "06", name: "Go Live with Support", nameAr: "التشغيل الحي مع الدعم", desc: "Operational kickoff with assigned engineer support and continuous SLA coverage.", descAr: "بدء العمليات اليومية مع تواجد مهندس دعم متخصص واتفاقية SLA معتمدة." },
]

const COMPARISON = [
  {
    dimension: "Capital Outlay",
    dimensionAr: "الاستثمار المالي الأولي",
    traditional: "Heavy upfront licensing and implementation fees before seeing any working software.",
    traditionalAr: "رسوم تراخيص ضخمة وتكاليف تأسيس مرتفعة قبل بدء العمل.",
    saas: "Predictable, defined subscription fee with zero heavy upfront capital barrier.",
    saasAr: "اشتراك دوري واضح ومحدد المعالم دون الحاجة لرأس مال تأسيسي ضخم.",
  },
  {
    dimension: "Implementation Timeline",
    dimensionAr: "الجدول الزمني للتشغيل",
    traditional: "6 to 18 months of open-ended requirements gathering and custom development.",
    traditionalAr: "من 6 إلى 18 شهراً من تحليل المتطلبات والتطوير البرمجي المعقد.",
    saas: "Ready for live deployment and data import within days to weeks.",
    saasAr: "جاهزية فورية للتشغيل الحي وترحيل البيانات خلال أيام معدودة.",
  },
  {
    dimension: "Platform Updates",
    dimensionAr: "التحديثات والصيانة",
    traditional: "Manual upgrades requiring expensive consulting projects and risk of breaking customizations.",
    traditionalAr: "ترقيات يدوية معقدة ومكلفة تتطلب مشاريع استشارية منفصلة.",
    saas: "Managed continuous security, compliance, and platform upgrades included in the subscription.",
    saasAr: "تحديثات أمنية وتوافقية مستمرة ومُدارة بالكامل ضمن باقة الاشتراك.",
  },
  {
    dimension: "Scalability & Modules",
    dimensionAr: "التوسع والوحدات الإضافية",
    traditional: "Long change-order negotiations and complex engineering for each new feature.",
    traditionalAr: "مفاوضات مطولة لأوامر التغيير وتكاليف هندسية مجهولة لكل ميزة.",
    saas: "Activate additional branches, users, or modules instantly as your business grows.",
    saasAr: "تفعيل فروع أو مستخدمين أو وحدات جديدة فوراً مع نمو أعمالكم.",
  },
  {
    dimension: "Operational Support",
    dimensionAr: "الدعم والمسؤولية التشغيلية",
    traditional: "Separate expensive AMC contracts with unclear accountability between vendors.",
    traditionalAr: "عقود صيانة سنوية باهظة وتشتت المسؤولية بين موردي الأجهزة والبرمجيات.",
    saas: "Single SLA backed directly by Growl Holding engineering and centralized support.",
    saasAr: "اتفاقية مستوى خدمة SLA موحدة تضمنها مجموعة جرول القابضة مباشرة.",
  },
]

export default function SaasPage() {
  const { isAr } = useLanguage()
  const [activeCycle, setActiveCycle] = useState<"monthly" | "annual">("annual")

  const saasCases = CASE_STUDIES_DATA.filter((c) => c.sectorId === "hub" || c.sectorId === "tech").slice(0, 2)

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#000823] flex flex-col selection:bg-[#FBE858] selection:text-[#000823]">
      <SiteHeader />

      <main className="flex-1">
        {/* 1. Sector Hero */}
        <SectorHero
          sectorSlug="saas"
          sectorNumber="01"
          sectorName="Growl SaaS"
          sectorNameAr="جرول للبرمجيات كخدمة SaaS"
          headline="The System Without the Project"
          headlineAr="النظام المتكامل دون مخاطر التأسيس"
          description="Enterprise systems re-engineered as subscription products. The same system, without the timeline or the capital."
          descriptionAr="أنظمة مؤسسية أعيدت هندستها كمنتجات اشتراك سحابية جاهزة. نفس الكفاءة دون استهلاك الوقت ورأس المال التأسيسي."
          accentColor={ACCENT}
          accentTint={TINT}
          heroImage="/images/sectors/saas-hero.webp"
          heroImageAlt="Growl SaaS business operator using subscription management software"
          contextTag="SUBSCRIPTION DELIVERY MODEL // ZERO DEV BURDEN"
          contextTagAr="نموذج تسليم بالاشتراك // تشغيل فوري بدون مخاطر"
          primaryCtaText="Request a Demo"
          primaryCtaTextAr="طلب تجربة عملية"
          primaryCtaHref="/contact"
          secondaryCtaText="View SaaS Products"
          secondaryCtaTextAr="عرض باقات المنتجات"
          secondaryCtaHref="#products"
          isAr={isAr}
        />

        {/* 2. What Growl SaaS Changes (Side-by-Side Comparison) */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <SectionLabel>{isAr ? "الفارق الجوهري" : "What Growl SaaS Changes"}</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr ? "مقارنة واضحة: المشاريع التقليدية مقابل نموذج الاشتراك" : "Traditional Implementation vs. Growl SaaS"}
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#000823]/70">
                {isAr
                  ? "تجاوزت جرول مخاطر المشاريع البرمجية المفتوحة عبر تقديم أنظمة مؤسسية جاهزة للاستخدام باشتراكات دورية محددة."
                  : "We eliminate the open-ended risk of software projects by offering fully engineered, operational platforms on clean subscription terms."}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#000823]/15">
                    <th className="py-4 px-4 font-mono uppercase tracking-widest text-[#000823]/50 w-1/4">
                      {isAr ? "المعيار التشغيلي" : "Evaluation"}
                    </th>
                    <th className="py-4 px-4 font-mono uppercase tracking-widest text-[#000823]/60 w-[37.5%] bg-black/[0.02]">
                      {isAr ? "المشاريع التقليدية" : "Traditional Custom Project"}
                    </th>
                    <th className="py-4 px-4 font-mono uppercase tracking-widest font-bold text-[#000823] w-[37.5%] bg-[#FBE858]/15 border-l-2 border-[#FBE858]">
                      {isAr ? "نموذج جرول SaaS" : "Growl SaaS Model"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#000823]/[0.08]">
                  {COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#000823]/[0.01]">
                      <td className="py-4 px-4 font-bold text-[#000823]">
                        {isAr ? row.dimensionAr : row.dimension}
                      </td>
                      <td className="py-4 px-4 text-[#000823]/65 leading-relaxed bg-black/[0.02]">
                        {isAr ? row.traditionalAr : row.traditional}
                      </td>
                      <td className="py-4 px-4 font-semibold text-[#000823] leading-relaxed bg-[#FBE858]/10 border-l-2 border-[#FBE858]">
                        {isAr ? row.saasAr : row.saas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. Product Catalogue (CMS-Ready) */}
        <section id="products" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <SectionLabel>{isAr ? "كتالوج منتجات الاشتراك" : "Product Catalogue"}</SectionLabel>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                  {isAr ? "أنظمة مؤسسية جاهزة للاشتراك الفوري" : "Ready-to-Deploy Business Systems"}
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#000823]/70">
                  {isAr
                    ? "اختر المنظومة المطابقة لطبيعة أعمالك. باقات مرنة تشمل الاستضافة، الصيانة، التحديثات والدعم الفني."
                    : "Select the system tailored to your industry. All products include managed hosting, automated backups, and dedicated support."}
                </p>
              </div>

              {/* Billing Toggle */}
              <div className="inline-flex p-1 rounded-xl bg-white border border-[#000823]/10 self-start md:self-auto">
                <button
                  onClick={() => setActiveCycle("monthly")}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeCycle === "monthly" ? "bg-[#000823] text-white" : "text-[#000823]/60 hover:text-[#000823]"
                  }`}
                >
                  {isAr ? "دفع شهري" : "Monthly Billing"}
                </button>
                <button
                  onClick={() => setActiveCycle("annual")}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    activeCycle === "annual" ? "bg-[#000823] text-white" : "text-[#000823]/60 hover:text-[#000823]"
                  }`}
                >
                  <span>{isAr ? "دفع سنوي" : "Annual Billing"}</span>
                  <span className="px-1.5 py-0.2 text-[9px] rounded bg-[#FBE858] text-[#000823] font-bold">SAVINGS</span>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {SAAS_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="rounded-3xl bg-white border border-[#000823]/[0.08] p-7 md:p-8 hover:border-[#000823]/25 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-[#FBE858]/30 text-[#000823] font-mono text-[10px] font-bold uppercase tracking-wider">
                        {prod.highlight}
                      </span>
                      <span className="text-xs font-mono text-[#000823]/50">
                        {isAr ? prod.billingCycleAr : prod.billingCycle}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#000823] mb-1.5">
                      {isAr ? prod.nameAr : prod.name}
                    </h3>
                    <div className="text-xs font-mono text-[#000823]/60 mb-4 font-semibold">
                      {isAr ? prod.taglineAr : prod.tagline}
                    </div>

                    <p className="text-xs md:text-sm text-[#000823]/75 leading-relaxed mb-6">
                      {isAr ? prod.descriptionAr : prod.description}
                    </p>

                    <div className="mb-6 pb-6 border-b border-[#000823]/[0.08]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#000823]/40 font-bold block mb-1">
                        {isAr ? "الأنشطة المستهدفة:" : "Target Business:"}
                      </span>
                      <span className="text-xs font-medium text-[#000823]/80">
                        {isAr ? prod.targetBusinessAr : prod.targetBusiness}
                      </span>
                    </div>

                    <div className="mb-8">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#000823]/40 font-bold block mb-2.5">
                        {isAr ? "الوحدات المشمولة بالباقة:" : "Included System Modules:"}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(isAr ? prod.modulesAr : prod.modules).map((mod, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#000823]/80 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#000823]/40" />
                            <span>{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#000823]/[0.08]">
                    <span className="text-xs font-mono text-[#000823]/60 font-semibold">
                      {activeCycle === "annual" ? (isAr ? "عقد سنوي موحد" : "Annual Consolidated Plan") : (isAr ? "مرونة شهرية" : "Monthly Flexible Term")}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl bg-[#000823] text-white hover:bg-[#000823]/90 transition-colors"
                    >
                      <span>{isAr ? "طلب عرض تجريبي" : "Request Demo"}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works (6-Stage Onboarding) */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <SectionLabel>{isAr ? "مسار التشغيل والتهيئة" : "How Onboarding Works"}</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr ? "ست خطوات منضبطة من الاختيار إلى التشغيل الحي" : "A Six-Step Onboarding Architecture"}
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#000823]/70">
                {isAr
                  ? "إجراءات واضحة تضمن تدريب فريقك وترحيل بياناتك المعتمدة دون أي توقف لعملياتك التشغيلية."
                  : "Transparent, predictable milestones ensuring zero interruption to ongoing transactions during setup."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ONBOARDING_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] hover:border-[#000823]/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#000823]/[0.08]">
                      <span className="font-mono text-xs font-bold text-[#000823] px-2 py-0.5 rounded bg-[#FBE858]/35">
                        STEP {s.step}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#000823]/30" />
                    </div>
                    <h4 className="text-base font-bold text-[#000823] mb-2">
                      {isAr ? s.nameAr : s.name}
                    </h4>
                    <p className="text-xs text-[#000823]/70 leading-relaxed">
                      {isAr ? s.descAr : s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Subscription Benefits Grid */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <SectionLabel>{isAr ? "مزايا الاشتراك" : "Subscription Benefits"}</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr ? "استقرار تشغيلي وتكلفة متوقعة" : "Predictable Operations, Continuous Value"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Predictable Operating Cost", titleAr: "تكلفة تشغيلية متوقعة", desc: "No surprise change orders or unbudgeted infrastructure charges. All expenses are consolidated into a fixed subscription.", descAr: "لا فواتير مفاجئة أو أوامر تغيير غير متوقعة. جميع التكاليف موحدة في اشتراك دوري معلن." },
                { title: "Managed Platform Updates", titleAr: "تحديثات أمنية دورية", desc: "Automatic rollouts of statutory tax compliance, electronic invoicing updates, and security vulnerability patches.", descAr: "تحديثات مستمرة للامتثال الضريبي والفاتورة الإلكترونية وسد الثغرات الأمنية دون تدخل يدوي." },
                { title: "Secure Data Isolation", titleAr: "عزل وأمان البيانات", desc: "Encrypted multi-tenant and single-tenant hosting models with automated daily backups and full client data ownership.", descAr: "استضافة معزولة ومشفرة مع نسخ احتياطي يومي آلي وضمان الملكية الكاملة للبيانات." },
                { title: "Expandable Modules", titleAr: "توسع فوري مع نمو الأعمال", desc: "Instantly activate new branches, warehouse locations, or additional user seats as operational load increases.", descAr: "إمكانية فتح فروع جديدة ومخازن إضافية وزيادة المستخدمين بضغطة زر واحدة." },
                { title: "Dedicated Support & SLA", titleAr: "دعم فني والتزام باتفاقية SLA", desc: "Direct engineering escalation channels, emergency response times, and ongoing operator assistance.", descAr: "قنوات تواصل مباشرة مع مهندسي النظام، أوقات استجابة محددة، ومساعدة مستمرة للمستخدمين." },
                { title: "Flexible Monthly / Annual Terms", titleAr: "عقود شهرية وسنوية مرنة", desc: "Choose the cash-flow model that suits your financial planning, with annual commitment savings.", descAr: "اختر النموذج الأنسب لتدفقاتك المالية مع خصومات مخصصة للاشتراكات السنوية." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#000823]/[0.08] hover:border-[#000823]/20 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#FBE858] mb-4" />
                  <h4 className="text-base font-bold text-[#000823] mb-2">
                    {isAr ? item.titleAr : item.title}
                  </h4>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">
                    {isAr ? item.descAr : item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Real Client Deployments */}
        {saasCases.length > 0 && (
          <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl mb-12">
                <SectionLabel>{isAr ? "تطبيقات واقعية" : "Client Deployments"}</SectionLabel>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                  {isAr ? "نتائج تشغيلية محققة عبر أنظمتنا" : "Verified Operational Outcomes"}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {saasCases.map((cs) => (
                  <div key={cs.id} className="p-7 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#000823]/[0.06]">
                        <span className="text-[10px] font-mono font-bold text-[#000823]/60 uppercase">
                          {isAr ? cs.clientIndustryAr : cs.clientIndustry}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FBE858]/35 font-bold text-[#000823]">
                          VERIFIED
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-[#000823] mb-2">{isAr ? cs.titleAr : cs.title}</h4>
                      <p className="text-xs text-[#000823]/70 mb-4 leading-relaxed">{isAr ? cs.challengeAr : cs.challenge}</p>
                      <p className="text-xs text-[#000823]/80 font-medium leading-relaxed mb-6">{isAr ? cs.solutionAr : cs.solution}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-[#000823]/[0.06]">
                      <span className="text-[10px] font-mono text-[#000823]/50 uppercase block mb-1">
                        {isAr ? "النتيجة القابلة للتحقق:" : "Verified Outcome:"}
                      </span>
                      <span className="text-xs font-bold text-[#000823]">{isAr ? cs.measurableResultAr : cs.measurableResult}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. Sector FAQ */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mb-12">
              <SectionLabel>{isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#000823]">
                {isAr ? "كل ما تود معرفته عن نموذج الاشتراكات" : "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Who owns the data in Growl SaaS products?", qAr: "من يمتلك البيانات المخزنة على أنظمة جرول SaaS؟", a: "The client maintains 100% full legal and operational ownership of all business data. Complete database backups can be exported at any time in standardized open formats (PostgreSQL / JSON / CSV).", aAr: "يمتلك العميل ملكية قانونية وتشغيلية كاملة بنسبة 100% لكافة بياناته، ويمكن استخراج نسخ احتياطية شاملة في أي وقت بصيغ قياسية مفتوحة." },
                { q: "Can we transition to self-hosting or a dedicated instance later?", qAr: "هل يمكن الانتقال لاحقاً إلى خوادم خاصة بالشركة؟", a: "Yes. Because Growl SaaS architectures follow standardized modular designs, enterprise clients wishing to migrate to on-premise hardware can transition under our System Integrator & Tech practice with zero data loss.", aAr: "نعم. نظراً لأن معمارية أنظمتنا مبنية وفق معايير قياسية، يمكن ترقية النظام ونقله إلى خوادم خاصة داخل منشأة العميل دون فقدان أي بيانات." },
                { q: "What is included in the monthly or annual subscription fee?", qAr: "ما الذي تشمله رسوم الاشتراك الشهري أو السنوي؟", a: "The subscription covers platform access, high-availability cloud hosting, daily automated backups, security patching, electronic tax compliance updates, and dedicated technical support.", aAr: "يشمل الاشتراك ترخيص الاستخدام، الاستضافة السحابية عالية التوافر، النسخ الاحتياطي اليومي، التحديثات الضريبية والأمنية، والدعم الفني المباشر." },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#000823]/[0.08]">
                  <h4 className="text-sm font-bold text-[#000823] mb-2">{isAr ? faq.qAr : faq.q}</h4>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">{isAr ? faq.aAr : faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Sector CTA */}
        <SectorCta
          headline="Start with the system your business needs."
          headlineAr="ابدأ بالنظام الذي تحتاجه أعمالك اليوم"
          description="Schedule a product walkthrough with a Growl systems engineer to review live workflows, data migration, and subscription terms."
          descriptionAr="احجز جلسة استعراض حي للنظام مع مهندسينا للاطلاع على واجهات التشغيل، ترحيل البيانات، وباقات الاشتراك."
          primaryText="Request a Demo"
          primaryTextAr="طلب تجربة عملية"
          secondaryText="Explore Tech Sector"
          secondaryTextAr="استكشف قطاع التقنية"
          secondaryHref="/sectors/tech"
          accentColor={ACCENT}
          isAr={isAr}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
