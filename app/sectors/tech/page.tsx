"use client"

import React from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorProcess } from "@/components/sectors/sector-process"
import { SectorCaseStudies } from "@/components/sectors/sector-case-studies"
import { SectorCta } from "@/components/sectors/sector-cta"
import { SectionLabel } from "@/components/shared/section-label"
import { useLanguage } from "@/components/language-context"
import { CASE_STUDIES_DATA } from "@/lib/case-studies-data"

const ACCENT = "#FF7A00"
const TINT = "#FCCA9C"

const TECH_CAPABILITIES = [
  {
    title: "Mobile Applications",
    titleAr: "تطبيقات الهواتف الذكية",
    desc: "Cross-platform and native engineering for consumer digital products and enterprise field operations.",
    descAr: "تطوير تطبيقات هواتف ذكية هجينة وأصلية موجهة للمستهلكين ولفرق العمل الميداني المؤسسي.",
    items: [
      "React Native",
      "Flutter",
      "Native iOS and Android",
      "Customer applications",
      "Internal business applications",
    ],
    itemsAr: [
      "تطبيقات React Native",
      "تطبيقات Flutter",
      "تطوير أصلي لأنظمة iOS و Android",
      "تطبيقات موجهة للمستهلكين والعملاء",
      "تطبيقات العمليات الداخلية والميدانية",
    ],
  },
  {
    title: "Web Development",
    titleAr: "تطوير وبناء منصات الويب",
    desc: "High-performance web architecture built with modern frameworks for speed, SEO, and uptime.",
    descAr: "منصات وتطبيقات ويب فائقة السرعة مبنية بأحدث أطر العمل لتصدر محركات البحث واستقرار التشغيل.",
    items: [
      "Custom web platforms",
      "Corporate websites",
      "Customer portals",
      "WordPress solutions",
      "Progressive web applications",
    ],
    itemsAr: [
      "منصات ويب مخصصة",
      "مواقع وبوابات الشركات الكبرى",
      "بوابات خدمة العملاء التفاعلية",
      "حلول ووردبريس المؤسسية المتقدمة",
      "تطبيقات الويب التقدمية (PWA)",
    ],
  },
  {
    title: "E-commerce",
    titleAr: "التجارة الإلكترونية المتقدمة",
    desc: "Scalable digital storefronts and headless commerce engines connected to ERP and localized payment rails.",
    descAr: "متاجر إلكترونية متطورة ومعمارية تجارة مفصولة الرأس متصلة بأنظمة المخازن وبوابات الدفع المحلية.",
    items: [
      "Shopify",
      "WooCommerce",
      "Custom commerce platforms",
      "Payment integration",
      "Inventory integration",
    ],
    itemsAr: [
      "متاجر Shopify",
      "تخصيص منصة WooCommerce",
      "واجهات متاجر برمجية مخصصة",
      "دمج بوابات الدفع المحلية والدولية",
      "الربط اللحظي مع أنظمة المخزون",
    ],
  },
  {
    title: "Enterprise Systems",
    titleAr: "الأنظمة المؤسسية والتشغيلية",
    desc: "Mission-critical core platforms unifying resource planning, pipeline visibility, and branch operations.",
    descAr: "أنظمة مركزية تدير موارد المؤسسة وتمنح رؤية شاملة للمبيعات وإدارة الفروع المتعددة.",
    items: [
      "ERP",
      "CRM",
      "POS",
      "HR",
      "Operational platforms",
    ],
    itemsAr: [
      "أنظمة تخطيط الموارد (ERP)",
      "إدارة علاقات العملاء (CRM)",
      "أنظمة نقاط البيع المترابطة (POS)",
      "أنظمة الموارد البشرية (HR)",
      "منصات إدارة العمليات اللوجستية",
    ],
  },
  {
    title: "Platform Implementation",
    titleAr: "تطبيق وتخصيص المنصات العالمية",
    desc: "Consulting, customization, data migration, and system integration on established enterprise platforms.",
    descAr: "استشارات، تخصيص، ترحيل البيانات، وتكامل الأنظمة لكبرى المنصات المؤسسية العالمية.",
    items: [
      "Odoo",
      "Oracle",
      "SAP",
      "Configuration",
      "Data migration",
      "System integration",
    ],
    itemsAr: [
      "تطبيق وتخصيص Odoo",
      "تكامل أنظمة Oracle",
      "ربط وتطوير حلول SAP",
      "التهيئة وضبط الإعدادات",
      "ترحيل وتنقية البيانات",
      "تكامل واجهات الـ API",
    ],
  },
  {
    title: "Private Solutions",
    titleAr: "البرمجيات الخاصة والمصممة حسب الطلب",
    desc: "Bespoke internal systems, SOP-based workflows, secure portals, and operational automation.",
    descAr: "برمجيات داخلية مخصصة مبنية استناداً لإجراءات العمل التشغيلية (SOPs) وبوابات إدارة آمنة.",
    items: [
      "Bespoke internal systems",
      "SOP-based workflows",
      "Secure portals",
      "Management dashboards",
      "Operational automation",
    ],
    itemsAr: [
      "أنظمة داخلية مصممة خصيصاً للشركة",
      "أتمتة مسارات العمل وفق لوائح العمل (SOPs)",
      "بوابات رقمية مشفرة ومعزولة",
      "لوحات تحكم تنفيذية لحظية",
      "أتمتة العمليات التشغيلية المعقدة",
    ],
  },
]

const TECH_PROCESS_7_STAGES = [
  {
    number: "01",
    title: "Business Discovery",
    titleAr: "استكشاف الأعمال والاحتياجات",
    description: "Analyzing operational workflows, user constraints, data dependencies, and commercial growth milestones.",
    descriptionAr: "تحليل معمق لبيئة العمل الحالية، متطلبات المستخدمين، تبعيات البيانات، ومستهدفات النمو التجاري.",
  },
  {
    number: "02",
    title: "Requirements & Architecture",
    titleAr: "المتطلبات والمعمارية التقنية",
    description: "Engineering database schemas, typed API specifications, cloud topologies, and non-functional requirements.",
    descriptionAr: "تصميم مخططات قواعد البيانات، مواصفات الـ APIs الصارمة، البنية السحابية وضمانات استقرار الأحمال.",
  },
  {
    number: "03",
    title: "UX & Interface Design",
    titleAr: "تجربة المستخدم والتصميم البصري",
    description: "Prototyping responsive user journeys, design token frameworks, and accessible interfaces in Instrument Sans.",
    descriptionAr: "بناء النماذج التفاعلية، وتصميم تجارب مستخدم رشيقة ومطابقة لمعايير إمكانية الوصول العالمية.",
  },
  {
    number: "04",
    title: "Development",
    titleAr: "الهندسة البرمجية والتطوير",
    description: "Agile modular development with strict automated test coverage, type checking, and peer code reviews.",
    descriptionAr: "بناء وتطوير برمجي رشيق مع تغطية شاملة باختبارات الآحاد، والتحقق من الأنواع، ومراجعة الأكواد.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    titleAr: "ضمان الجودة والفحص الشامل",
    description: "End-to-end integration testing, load simulations under peak traffic, security audits, and cross-device testing.",
    descriptionAr: "اختبارات التكامل الشاملة، محاكاة ضغط الزيارات العالية، الفحص الأمني، والتدقيق عبر مختلف الأجهزة.",
  },
  {
    number: "06",
    title: "Deployment",
    titleAr: "النشر والتشغيل الحي",
    description: "Zero-downtime production deployment, DNS cutover, database migration verification, and telemetry setup.",
    descriptionAr: "إطلاق سلس في بيئة الإنتاج الحية دون انقطاع للخدمة، والتحقق من سلامة ترحيل قواعد البيانات وتفعيل المراقبة.",
  },
  {
    number: "07",
    title: "Support & Optimization",
    titleAr: "الدعم الفني والتحسين المستمر",
    description: "Continuous SLA monitoring, scheduled dependency patches, performance optimization, and operational support.",
    descriptionAr: "مراقبة مستمرة للأداء وفق اتفاقية SLA، وتحديثات دورية للمكتبات، ودعم فني استباقي مستمر.",
  },
]

const TECH_ECOSYSTEM_CATEGORIES = [
  {
    category: "Development Frameworks",
    categoryAr: "أطر عمل التطوير البرمجي",
    items: [
      { name: "Next.js / React", role: "Frontend & Full-Stack Core", relationship: "Core Framework" },
      { name: "Node.js / TypeScript", role: "Type-Safe Backend Microservices", relationship: "Standard Runtime" },
      { name: "React Native & Flutter", role: "Cross-Platform Mobile Apps", relationship: "Mobile Architecture" },
      { name: "Python / FastAPI", role: "High-Concurrency Data APIs", relationship: "API Engine" },
    ],
  },
  {
    category: "Cloud Platforms",
    categoryAr: "منصات الحوسبة السحابية",
    items: [
      { name: "Amazon Web Services (AWS)", role: "ECS, RDS, S3, & VPC Fabrics", relationship: "Solutions Built On" },
      { name: "Microsoft Azure", role: "Enterprise Cloud & Identity", relationship: "Solutions Built On" },
      { name: "Vercel Enterprise", role: "Global Edge Application Delivery", relationship: "Edge Infrastructure" },
      { name: "Docker & Kubernetes", role: "Container Orchestration & Scaling", relationship: "Runtime Standard" },
    ],
  },
  {
    category: "Commerce Platforms",
    categoryAr: "منصات التجارة الرقمية",
    items: [
      { name: "Shopify / Shopify Plus", role: "Enterprise Digital Commerce", relationship: "Solutions Built On" },
      { name: "WooCommerce", role: "Custom Extensible Commerce", relationship: "Solutions Built On" },
      { name: "Stripe & Regional Gateways", role: "Omnichannel Payment Rails", relationship: "Payment Ecosystem" },
    ],
  },
  {
    category: "Enterprise Platforms",
    categoryAr: "المنصات المؤسسية",
    items: [
      { name: "Odoo Enterprise", role: "Modular ERP & CRM Core", relationship: "Implementation Platform" },
      { name: "SAP & Oracle Integration", role: "Legacy Enterprise Middleware", relationship: "Integration Standard" },
    ],
  },
  {
    category: "Data & Integration",
    categoryAr: "البيانات والتكامل البرمجي",
    items: [
      { name: "PostgreSQL", role: "High-Integrity Relational Persistence", relationship: "Database Core" },
      { name: "Redis", role: "Distributed In-Memory Cache & Queues", relationship: "Performance Layer" },
      { name: "Kafka / RabbitMQ", role: "Asynchronous Event Messaging", relationship: "Event Architecture" },
    ],
  },
]

export default function TechPage() {
  const { isAr } = useLanguage()
  const techCaseStudy = CASE_STUDIES_DATA.find((c) => c.sectorId === "tech")!

  return (
    <div
      className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased flex flex-col selection:bg-[#FF7A00] selection:text-white"
    >
      <SiteHeader />

      <main className="flex-1">
        {/* 1. Sector Hero */}
        <SectorHero
          sectorSlug="tech"
          sectorNumber="02"
          sectorName="Growl Tech"
          sectorNameAr="جرول للتقنية وهندسة البرمجيات"
          headline="Software That Runs the Business"
          headlineAr="برمجيات مؤسسية تدير صلب الأعمال"
          description="Web, mobile and enterprise systems - built from scratch, or implemented on the platform you already chose."
          descriptionAr="أنظمة ويب وهواتف وحلول مؤسسية — تُبنى من الصفر أو تُنفذ على المنصات والأنظمة التي اعتمدتموها."
          accentColor={ACCENT}
          accentTint={TINT}
          heroImage="/images/sectors/tech-hero.webp"
          heroImageAlt="Growl Tech software product engineering team in planning workshop"
          contextTag="ENTERPRISE SOFTWARE & CLOUD ENGINEERING"
          contextTagAr="هندسة البرمجيات المؤسسية والأنظمة السحابية"
          primaryCtaText="Discuss a Software Project"
          primaryCtaTextAr="ناقش مشروعك البرمجي"
          primaryCtaHref="/contact"
          secondaryCtaText="Explore Capabilities"
          secondaryCtaTextAr="استكشف القدرات التقنية"
          secondaryCtaHref="#capabilities"
          isAr={isAr}
        />

        {/* 2. Engineering Overview */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionLabel>{isAr ? "الرؤية الهندسية" : "Engineering Overview"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-tight">
                {isAr
                  ? "هندسة برمجية تُبنى للصمود تحت ضغط المعاملات الحقيقية."
                  : "Software engineered for sustained throughput, maintainability, and enterprise uptime."}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-[#000823]/75 text-base leading-relaxed">
              <p>
                {isAr
                  ? "يركز قطاع التقنية في جرول على بناء وتطوير البرمجيات والأنظمة التي تشكل العمود الفقري للعمليات اليومية. نحن نرفض الحلول المؤقتة، ونعتمد معايير هندسية متقدمة تضمن نظافة الشيفرة المصدرية وسرعة الاستجابة وأمان البيانات."
                  : "Growl Tech engineers the foundational digital systems that power enterprise commerce, logistics, and multi-branch operations. We reject fragile shortcuts in favor of clean architectures, typed contracts, low-latency microservices, and continuous automated verification."}
              </p>
              <p>
                {isAr
                  ? "سواء كنت بحاجة إلى تطوير منصة سحابية مخصصة من الصفر، أو إطلاق تطبيقات هواتف متقدمة، أو تخصيص وربط أنظمة عالمية مثل Odoo و Oracle و SAP، فإن مهندسينا يمتلكون الخبرة العملية لتحويل المتطلبات المعقدة إلى برمجيات حية ومستقرة."
                  : "Whether delivering a bespoke cloud platform from scratch, launching consumer mobile applications, or implementing established suites like Odoo, Oracle, and SAP, our senior teams bridge complex business logic with high-performance production code."}
              </p>
            </div>
          </div>
        </section>

        {/* 3. 6 Core Capabilities */}
        <section id="capabilities" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-[#F8F8F8]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <SectionLabel>{isAr ? "القدرات الهندسية الأساسية" : "Core Capabilities"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr
                  ? "ستة مجالات هندسية متخصصة تحت سقف مسؤول واحد."
                  : "Six engineering practices built for enterprise resilience."}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_CAPABILITIES.map((cap, idx) => (
                <div
                  key={cap.title}
                  className="p-7 rounded-2xl bg-white border border-[#000823]/[0.08] flex flex-col justify-between hover:border-[#FF7A00]/50 hover:shadow-lg transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
                        style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-mono text-[#000823]/40 uppercase tracking-wider">
                        Practice
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#000823] mb-2 group-hover:text-[#FF7A00] transition-colors">
                      {isAr ? cap.titleAr : cap.title}
                    </h3>

                    <p className="text-xs text-[#000823]/65 leading-relaxed mb-6 font-normal">
                      {isAr ? cap.descAr : cap.desc}
                    </p>

                    <ul className="space-y-2 border-t border-[#000823]/[0.06] pt-4">
                      {(isAr ? cap.itemsAr : cap.items).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[#000823]/80">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 7-Stage Delivery Process */}
        <SectorProcess
          headline="A disciplined seven-phase software delivery lifecycle."
          headlineAr="دورة حياة هندسية من سبع مراحل منضبطة لضمان تسليم البرمجيات."
          steps={TECH_PROCESS_7_STAGES}
          accentColor={ACCENT}
          isAr={isAr}
        />

        {/* 5. Tech Ecosystem: Platforms and Technologies We Build With */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <SectionLabel>{isAr ? "المنظومة التقنية" : "Technology Ecosystem"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr ? "المنصات والتقنيات التي نبني ونطور عليها" : "Platforms and Technologies We Build With"}
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#000823]/70">
                {isAr
                  ? "نعتمد معايير وأطر عمل مستقرة تضمن استمرارية صيانة البرمجيات وأمان بياناتكم لعشرات السنين دون تبعية محتكرة."
                  : "We develop, integrate, and deploy on vetted cloud platforms, enterprise engines, commerce frameworks, and relational databases."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_ECOSYSTEM_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08]">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#000823]/60 mb-4 pb-3 border-b border-[#000823]/[0.08]">
                    {isAr ? cat.categoryAr : cat.category}
                  </h4>
                  <div className="space-y-3">
                    {cat.items.map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white border border-[#000823]/[0.06]">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-xs font-bold text-[#000823]">{item.name}</span>
                          <span className="text-[9px] font-mono text-[#000823]/40">{item.relationship}</span>
                        </div>
                        <span className="text-[11px] text-[#000823]/60 block">{item.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Case Study */}
        {techCaseStudy && (
          <SectorCaseStudies
            caseStudy={techCaseStudy}
            accentColor={ACCENT}
            isAr={isAr}
          />
        )}

        {/* 7. Sector FAQ */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mb-12">
              <SectionLabel>{isAr ? "الأسئلة التقنية الشائعة" : "Software Engineering FAQ"}</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#000823]">
                {isAr ? "إجابات واضحة حول الملكية الفكرية وآلية التسليم" : "Common Questions on Scoping and Delivery"}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Who owns the software source code and intellectual property?", qAr: "من يمتلك الشيفرة المصدرية (Source Code) والملكية الفكرية؟", a: "Upon project completion and contractual settlement, 100% full intellectual property and source code ownership transfer exclusively to the client, including all repository commits, architecture diagrams, and deployment pipelines.", aAr: "عند اكتمال المشروع، تنتقل كامل حقوق الملكية الفكرية والشيفرة المصدرية للعميل حصرياً مع كافة مستودعات الأكواد ومخططات المعمارية وخطوط النشر." },
                { q: "How are sprints, milestones, and deliverables managed?", qAr: "كيف تدار مراحل التسليم ودورات العمل (Sprints)؟", a: "We run two-week agile sprint cadences with bi-weekly demo sessions, staging environment access, and documented issue tracking on shared engineering boards.", aAr: "نتبع دورات عمل رشيقة مدتها أسبوعان، مع جلسات استعراض حية للنسخ التجريبية، وشفافية كاملة عبر لوحات متابعة المهام الهندسية المشتركة." },
                { q: "Do you support existing legacy systems or only greenfield builds?", qAr: "هل تدعمون الأنظمة القديمة القائمة أم المشاريع الجديدة فقط؟", a: "Growl Tech specializes in both: creating new greenfield systems from zero, as well as performing phased modular modernizations, refactoring legacy databases, and adding high-throughput APIs to existing platforms.", aAr: "نحن نبني أنظمة جديدة بالكامل من الصفر، كما نقوم بتحديث وتطوير الأنظمة القائمة وإعادة هيكلة قواعد البيانات وربط واجهات الـ APIs دون تعطيل الأعمال." },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#000823]/[0.08]">
                  <h4 className="text-sm font-bold text-[#000823] mb-2">{isAr ? faq.qAr : faq.q}</h4>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">{isAr ? faq.aAr : faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Tech Page CTA */}
        <SectorCta
          headline="Build the software your operation actually needs."
          headlineAr="ابنِ البرمجيات التي تحتاجها عملياتك التشغيلية فعلياً"
          description="Schedule a technical architecture review with our lead software engineers to evaluate your stack, timeline, and delivery scope."
          descriptionAr="احجز جلسة مراجعة معمارية متخصصة مع كبار مهندسينا لتقييم بنيتك التقنية والجدول الزمني ونطاق التنفيذ."
          primaryText="Discuss a Software Project"
          primaryTextAr="ناقش مشروعك البرمجي"
          secondaryText="Explore Our Capabilities"
          secondaryTextAr="استكشف قدراتنا التقنية"
          secondaryHref="#capabilities"
          sectorSlug="tech"
          accentColor={ACCENT}
          accentTint={TINT}
          isAr={isAr}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
