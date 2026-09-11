"use client"

import React, { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorCaseStudies } from "@/components/sectors/sector-case-studies"
import { SectorCta } from "@/components/sectors/sector-cta"
import { SectionLabel } from "@/components/shared/section-label"
import { useLanguage } from "@/components/language-context"
import { CASE_STUDIES_DATA } from "@/lib/case-studies-data"

const ACCENT = "#1F6FEB"
const TINT = "#A3C3F5"

interface HubCategory {
  id: string
  name: string
  nameAr: string
  tagline: string
  taglineAr: string
  description: string
  descriptionAr: string
  suitableFor: string
  suitableForAr: string
  modules: string[]
  modulesAr: string[]
  keyOutcome: string
  keyOutcomeAr: string
  previewType: string
}

const HUB_CATEGORIES: HubCategory[] = [
  {
    id: "erp",
    name: "ERP",
    nameAr: "تخطيط الموارد ERP",
    tagline: "Core Operations, Inventory & Financial Ledger",
    taglineAr: "العمليات المركزية، المخازن ودفتر الأستاذ المالي",
    description: "Enterprise resource planning designed for growing operations that need strict inventory control, multi-warehouse accounting, automated purchasing cycles, and consolidated tax reporting without heavy consulting overhead.",
    descriptionAr: "نظام تخطيط موارد مؤسسي متكامل مصمم للشركات النامية التي تحتاج إلى ضبط صارم للمخزون، وربط المستودعات المتعددة، وأتمتة أوامر الشراء والامتثال الضريبي.",
    suitableFor: "Wholesale Distributors, Multi-Branch Operations, Manufacturing & Import/Export",
    suitableForAr: "شركات تجارة الجملة والتوزيع، العمليات متعددة الفروع، والمصانع وشركات الاستيراد",
    modules: [
      "Operations & Workflows",
      "Inventory & Warehouses",
      "Procurement & Vendor Bills",
      "Finance & General Ledger",
      "Real-Time Executive Reporting",
    ],
    modulesAr: [
      "إدارة العمليات وسير العمل",
      "المستودعات وحركة المخزون",
      "سلاسل الإمداد وفواتير الموردين",
      "الحسابات العامة ودفتر الأستاذ",
      "التقارير التحليلية التنفيذية اللحظية",
    ],
    keyOutcome: "Reconcile inventory, vendor payables, and branch billing in one unified real-time ledger.",
    keyOutcomeAr: "مطابقة فورية للمخزون ومستحقات الموردين ومبيعات الفروع في دفتر أستاذ مركزي واحد.",
    previewType: "Operational Dashboard with Balance Sheet, Real-Time Stock Status, and Pending Procurement Orders.",
  },
  {
    id: "crm",
    name: "CRM",
    nameAr: "إدارة علاقات العملاء CRM",
    tagline: "Sales Pipelines, Account Dossiers & Follow-Up",
    taglineAr: "مسارات المبيعات، ملفات الحسابات والمتابعة",
    description: "Structured commercial deal management engineered for sales teams handling consultative or B2B contracts. Track account history, activity milestones, quotation revisions, and forecast monthly revenue with precision.",
    descriptionAr: "إدارة منظمة لصفقات المبيعات التعاقدية والتجارية. تتبع تاريخ الحسابات، مراحل التفاوض، تعديلات عروض الأسعار، والتنبؤ الدقيق بالإيرادات المتوقعة.",
    suitableFor: "B2B Services, Real Estate Agencies, Contracting Firms, Technical Vendors",
    suitableForAr: "شركات الخدمات التجارية B2B، التطوير والتسويق العقاري، المقاولات، والحلول التقنية",
    modules: [
      "Sales Pipeline & Deal Stages",
      "Accounts & Key Contacts",
      "Activity Logging & Task SLAs",
      "Quotation & Contract Tracking",
      "Predictive Revenue Forecasting",
    ],
    modulesAr: [
      "مسارات الصفقات ومراحل الإغلاق",
      "ملفات الحسابات وجهات الاتصال",
      "جدولة الأنشطة ومتابعة المهام",
      "عروض الأسعار وسجل العقود",
      "التنبؤ بالإيرادات وتدفقات السيولة",
    ],
    keyOutcome: "Zero lost leads; systematic conversion tracking with executive pipeline visibility.",
    keyOutcomeAr: "انعدام هدر الفرص البيعية ورؤية تنفيذية شاملة لتقدم الصفقات ومؤشرات الإغلاق.",
    previewType: "Kanban Pipeline Board with Deal Values, Stage Probabilities, and Next Action Deadlines.",
  },
  {
    id: "pos",
    name: "POS",
    nameAr: "نقاط البيع POS",
    tagline: "High-Volume Multi-Branch Retail Checkout",
    taglineAr: "نقاط بيع سحابية سريعة للفروع وسلاسل التجزئة",
    description: "Fast touch terminal cashier application built with offline resilience. Cashiers continue issuing barcode receipts and processing sales during network disconnects, with automatic cloud reconciliation upon reconnection.",
    descriptionAr: "نظام كاشير سريع يعمل باللمس مع استمرارية كاملة عند انقطاع الإنترنت. يتم إصدار الإيصالات ومسح الباركود دون تأخير، مع مزامنة سحابية تلقائية فور عودة الاتصال.",
    suitableFor: "Specialty Retail Stores, Boutiques, Quick Service Food, Multi-Location Franchises",
    suitableForAr: "المتاجر المتخصصة، سلاسل التجزئة، منافذ الخدمة السريعة، والعلامات متعددة الفروع",
    modules: [
      "Retail Sales & Fast Checkout",
      "Receipts, Invoices & Taxes",
      "Barcode & Weight Scale Integration",
      "Real-Time Inventory Synchronization",
      "Multi-Branch Central Reporting",
    ],
    modulesAr: [
      "محاسبة المبيعات وتجربة كاشير سريعة",
      "الفواتير الإلكترونية المعتمدة والضرائب",
      "دعم قارئات الباركود والموازين",
      "مزامنة لحظية لأرصدة الأصناف",
      "تقارير مركزية موحدة لكافة الفروع",
    ],
    keyOutcome: "Fast barcode checkout with continuous offline resilience and central stock sync.",
    keyOutcomeAr: "تسجيل مبيعات سريع دون تأخير، استمرارية كاملة دون إنترنت، وتحديث مركزي للأرصدة.",
    previewType: "Touch-Optimized Register Layout with Instant Item Search, Tender Split, and Barcode Feed.",
  },
  {
    id: "management",
    name: "Management Systems",
    nameAr: "أنظمة الإدارة والتشغيل",
    tagline: "Workforce Records, Approvals & Department Workflows",
    taglineAr: "سجلات الموظفين، الموافقات وسير العمل الداخلي",
    description: "Centralized internal administrative platform for managing employee directory information, biometric clock-in logs, multi-tier expense and leave approvals, and specialized vertical industry operational processes.",
    descriptionAr: "منظومة إدارية مركزية لتوثيق ملفات الموظفين، وسجلات الحضور عبر أجهزة البصمة، وسلسلة الموافقات الرقمية على الإجازات والعهد، والمسارات التشغيلية الخاصة.",
    suitableFor: "Corporate Offices, Professional Practices, Growing Multi-Department Organizations",
    suitableForAr: "الشركات والمؤسسات الإدارية، المكاتب المهنية، والمؤسسات متعددة الأقسام والفرق",
    modules: [
      "HR & Employee Profiles",
      "Attendance & Biometric Sync",
      "Multi-Tier Approval Hierarchy",
      "Department Workflow Routing",
      "Vertical Business Platforms",
    ],
    modulesAr: [
      "شؤون الموظفين والملفات المركزية",
      "الربط مع أجهزة البصمة وحساب الدوام",
      "سلسلة الموافقات الإدارية المتعددة",
      "أتمتة وتوجيه مسارات الأقسام",
      "منصات تشغيلية قطاعية متخصصة",
    ],
    keyOutcome: "Eliminate paper approval delays and consolidate staff attendance into payroll sheets.",
    keyOutcomeAr: "التخلص من الإجراءات الورقية وأتمتة بيانات الحضور والانصراف لمسيرات الرواتب.",
    previewType: "Approval Queue with Timecards, Document Verification, and Departmental Statuses.",
  },
]

export default function HubPage() {
  const { isAr } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>("erp")

  const current = HUB_CATEGORIES.find((c) => c.id === activeCategory) || HUB_CATEGORIES[0]
  const hubCaseStudy = CASE_STUDIES_DATA.find((c) => c.sectorId === "hub") || CASE_STUDIES_DATA[0]

  return (
    <div
      className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased flex flex-col selection:bg-[#1F6FEB] selection:text-white"
    >
      <SiteHeader />

      <main className="flex-1">
        {/* 1. Sector Hero */}
        <SectorHero
          sectorSlug="hub"
          sectorNumber="03"
          sectorName="Growl Hub"
          sectorNameAr="جرول هب للمنتجات السحابية"
          headline="The System Without the Project"
          headlineAr="النظام المتكامل دون تعقيدات المشاريع"
          description="Enterprise systems re-engineered as subscription products. Pay as you go, monthly or annual."
          descriptionAr="أنظمة مؤسسية أُعيدت هندستها كمنتجات اشتراك سحابية جاهزة. ادفع حسب استخدامك شهرياً أو سنوياً."
          accentColor={ACCENT}
          accentTint={TINT}
          heroImage="/images/sectors/hub-hero.webp"
          heroImageAlt="Growl Hub cloud business operating systems and retail management in practice"
          contextTag="ENTERPRISE PRODUCT SUITE // MODULAR CLOUD ARCHITECTURE"
          contextTagAr="حزمة المنتجات السحابية المؤسسية // معمارية سحابية معيارية"
          primaryCtaText="Request a Hub Demo"
          primaryCtaTextAr="طلب استعراض حي للمنتج"
          primaryCtaHref="/contact"
          secondaryCtaText="Explore the Products"
          secondaryCtaTextAr="استكشف أنظمة المنصة"
          secondaryCtaHref="#explorer"
          isAr={isAr}
        />

        {/* 2. Distinction: How Hub Differs from Custom Projects */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionLabel>{isAr ? "فلسفة المنتج السحابي" : "Product Architecture"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-tight">
                {isAr
                  ? "أنظمة مؤسسية جاهزة للاستخدام تلغي مخاطر المشاريع البرمجية الطويلة."
                  : "Deploy proven operational systems without the overhead of custom software projects."}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-[#000823]/75 text-base leading-relaxed">
              <p>
                {isAr
                  ? "بينما يوضح نموذج Growl SaaS طريقة الاشتراك التجاري، فإن منصة Growl Hub تستعرض المنتجات التشغيلية الحقيقية التي تدير الفروع، الحسابات، المخازن، والموظفين."
                  : "While Growl SaaS defines the commercial subscription model, Growl Hub presents the actual product experience and operational capabilities that manage your day-to-day branches, finances, inventory, and staff."}
              </p>
              <p>
                {isAr
                  ? "بدلاً من الانتظار لأشهر طويلة لتصميم شاشات من الصفر، تقدم Growl Hub أنظمة ERP و CRM ونقاط بيع POS وأنظمة إدارة متكاملة ومترابطة فورياً عبر واجهات برمجية آمنة."
                  : "Instead of months spent building custom logic from scratch, Growl Hub delivers tested, tenant-isolated systems that deploy in days, scale on demand, and connect seamlessly to your existing accounting and payment rails."}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Interactive Product Explorer */}
        <section id="explorer" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-[#F8F8F8]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <SectionLabel>{isAr ? "مستكشف الأنظمة التفاعلي" : "Interactive Product Explorer"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr ? "اختر المنظومة المطابقة لاحتياجك التشغيلي" : "Which system or module does your business need?"}
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#000823]/70">
                {isAr
                  ? "اضغط على أي نظام للاطلاع على شرح مفصل، والوحدات المشمولة، والأنشطة التجارية المناسبة."
                  : "Select a product category below to review its architecture, included functional modules, and verified target business types."}
              </p>
            </div>

            {/* Product Category Tabs */}
            <div className="flex flex-wrap gap-2.5 p-1.5 rounded-2xl bg-white border border-[#000823]/10 mb-8">
              {HUB_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategory
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-1 min-w-[140px] py-3.5 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#1F6FEB] text-white shadow-md"
                        : "text-[#000823]/70 hover:text-[#000823] hover:bg-[#F8F8F8]"
                    }`}
                  >
                    <span>{isAr ? cat.nameAr : cat.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Dynamic Product Detail Card */}
            <div className="rounded-3xl bg-white border border-[#000823]/[0.08] p-8 md:p-12 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left side: Specs & Modules */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-[#1F6FEB]/10 text-[#1F6FEB] font-mono text-[10px] font-bold uppercase tracking-widest">
                      {isAr ? "النظام النشط" : "ACTIVE PRODUCT SYSTEM"}
                    </span>
                    <h3 className="text-3xl font-bold text-[#000823] mt-2 mb-1">
                      {isAr ? current.nameAr : current.name}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-[#1F6FEB]">
                      {isAr ? current.taglineAr : current.tagline}
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-[#000823]/75 leading-relaxed">
                    {isAr ? current.descriptionAr : current.description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#F8F8F8] border border-[#000823]/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/50 font-bold block mb-1">
                      {isAr ? "الأنشطة التجارية المناسبة:" : "Suitable Business Types:"}
                    </span>
                    <span className="text-xs font-semibold text-[#000823]">
                      {isAr ? current.suitableForAr : current.suitableFor}
                    </span>
                  </div>

                  {/* Included Functional Modules */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#000823]/50 font-bold block mb-3">
                      {isAr ? "الوحدات والوظائف المشمولة:" : "Key Included Modules:"}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(isAr ? current.modulesAr : current.modules).map((mod, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F8F8F8] text-xs font-medium text-[#000823]/80 border border-[#000823]/[0.04]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1F6FEB]" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#000823]/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#000823]/60">
                      {isAr ? "جاهزية فورية للنشر والتشغيل" : "Deployable under Growl Single MSA"}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F6FEB] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-xs"
                    >
                      <span>{isAr ? `طلب تجربة ${current.nameAr}` : `Request ${current.name} Demo`}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Right side: Illustrative Interface Composition */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-[#000823]/10 bg-[#000823] p-6 text-white shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-[10px]">
                      <span className="text-white/60 uppercase">SYSTEM TELEMETRY</span>
                      <span className="text-emerald-400 font-bold">LIVE OPERATIONAL</span>
                    </div>

                    <div className="my-6 space-y-3 font-mono text-xs">
                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                        <div className="text-[10px] text-white/50 mb-1">{isAr ? "النتيجة التشغيلية المعتمدة" : "OPERATIONAL OUTCOME"}</div>
                        <div className="text-xs text-white font-bold leading-snug">{isAr ? current.keyOutcomeAr : current.keyOutcome}</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                        <div className="text-[10px] text-white/50 mb-1">{isAr ? "معمارية الواجهة" : "INTERFACE FRAMEWORK"}</div>
                        <div className="text-[11px] text-white/80 leading-snug">{current.previewType}</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                        <span className="text-[10px] text-white/60">Data Residency & Privacy</span>
                        <span className="text-xs text-[#A3C3F5] font-bold">Single-Tenant VPC</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
                      <span>AUTOMATIC CLOUD SYNC</span>
                      <span>OFFLINE RESILIENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Case Studies */}
        {hubCaseStudy && (
          <SectorCaseStudies
            caseStudy={hubCaseStudy}
            accentColor={ACCENT}
            isAr={isAr}
          />
        )}

        {/* 5. Sector FAQ */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mb-12">
              <SectionLabel>{isAr ? "الأسئلة الشائعة" : "Hub Systems FAQ"}</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#000823]">
                {isAr ? "تفاصيل التشغيل والربط والتوسع" : "Product Operations & Integration"}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Can Growl Hub modules be activated progressively?", qAr: "هل يمكن تفعيل وحدات جرول هب تدريجياً حسب الحاجة؟", a: "Yes. Many organizations begin with Retail POS and Inventory synchronization, and later activate General Ledger ERP or Pipeline CRM as operations expand. All modules share the same database schema.", aAr: "نعم. تبدأ العديد من الشركات بتفعيل نقاط البيع والمخازن، ثم تقوم بتفعيل المحاسبة العامة والـ CRM لاحقاً مع الحفاظ على ترابط قاعدة البيانات بالكامل." },
                { q: "How does the POS system handle internet outages?", qAr: "كيف يعمل نظام نقاط البيع (POS) عند انقطاع الإنترنت؟", a: "Growl POS operates an offline-first local cache engine. Transactions, receipts, and cash drawer tallies continue locally without interruption. Once connectivity restores, transactions automatically synchronize back to the central ERP.", aAr: "يعمل نظام POS عبر محرك محلي معزول يسمح باستمرار المبيعات والطباعة دون أي بطء، وفور عودة الإنترنت تتم مزامنة كافة الفواتير تلقائياً مع السحابة." },
                { q: "Does Growl Hub integrate with local electronic tax authorities?", qAr: "هل يتوافق نظام جرول هب مع منظومة الفاتورة الإلكترونية والضرائب؟", a: "Yes. Growl Hub includes certified electronic invoicing connectors configured for regional tax authorities (ETA / ZATCA) with cryptographic signing and direct API submission.", aAr: "نعم. يتضمن النظام تكاملاً مباشراً مع منظومات الفاتورة الإلكترونية المعتمدة محلياً (ETA / ZATCA) مع التشفير والتسليم اللحظي." },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08]">
                  <h4 className="text-sm font-bold text-[#000823] mb-2">{isAr ? faq.qAr : faq.q}</h4>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">{isAr ? faq.aAr : faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Hub Page CTA */}
        <SectorCta
          headline="Find the right system for your operation."
          headlineAr="اختر النظام الأنسب لعملياتك التشغيلية"
          description="Schedule a product session with a Growl systems architect to walk through live workflows, multi-branch setups, and implementation scopes."
          descriptionAr="احجز جلسة استعراض حي مع مهندسينا للاطلاع على واجهات الأنظمة، وإدارة الفروع المتعددة، وتحديد نطاق التشغيل."
          primaryText="Request a Hub Demo"
          primaryTextAr="طلب استعراض حي للمنتج"
          secondaryText="Explore the Products"
          secondaryTextAr="استكشف كتالوج المنتجات"
          secondaryHref="#explorer"
          sectorSlug="hub"
          accentColor={ACCENT}
          accentTint={TINT}
          isAr={isAr}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
