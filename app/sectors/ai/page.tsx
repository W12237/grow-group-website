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

const ACCENT = "#0FCFC0"
const TINT = "#A2F6EF"

const AI_CORE_CAPABILITIES = [
  {
    title: "AI Automation",
    titleAr: "أتمتة العمليات بالذكاء الاصطناعي",
    desc: "Production workflow automations engineered on n8n that process documents, route operational alerts, and synchronize business data.",
    descAr: "محركات أتمتة مسارات عمل مؤسسية مبنية عبر n8n لمعالجة الوثائق وتوجيه التنبيهات ونقل البيانات تلقائياً.",
    items: [
      "Workflow automation built on n8n",
      "Document processing & OCR",
      "Business alerts & notifications",
      "System synchronization",
      "Approval workflows",
      "Repetitive task automation",
    ],
    itemsAr: [
      "أتمتة مسارات العمل المتقدمة عبر n8n",
      "المعالجة الذكية للوثائق واستخراج البيانات",
      "تنبيهات وإشعارات العمليات الفورية",
      "مزامنة ونقل البيانات بين الأنظمة",
      "مسارات وسلاسل الموافقات الآلية",
      "أتمتة المهام التشغيلية المتكررة",
    ],
  },
  {
    title: "Agentic AI",
    titleAr: "أنظمة الوكلاء الأذكياء المستقلين",
    desc: "Autonomous agents using Model Context Protocol (MCP) and n8n to execute multi-step tasks with mandatory human approval checkpoints.",
    descAr: "وكلاء مستقلون يعتمدون بروتوكول MCP و n8n لإنجاز مهام معقدة متعددة المراحل مع نقاط اعتماد بشري إلزامية.",
    items: [
      "Autonomous agents using MCP & n8n",
      "Multi-step business tasks",
      "Tool-connected assistants",
      "Human approval checkpoints",
      "Controlled permissions & guardrails",
      "Immutable activity audit logs",
    ],
    itemsAr: [
      "وكلاء مستقلون يعتمدون بروتوكول MCP و n8n",
      "مهام عمل متعددة الخطوات والحسابات",
      "مساعدات متصلة بأدوات وقواعد بيانات المؤسسة",
      "نقاط تحقق واعتماد بشري إلزامية",
      "صلاحيات أمان صارمة وضوابط عزل",
      "سجلات تدقيق موثقة لكافة الأنشطة",
    ],
  },
  {
    title: "Internal AI Solutions",
    titleAr: "حلول الذكاء الاصطناعي الداخلية الخاصة",
    desc: "Private, air-gapped language models and retrieval systems deployed strictly inside the client's internal network and secure infrastructure.",
    descAr: "نماذج ذكاء اصطناعي وأنظمة استرجاع خاصة تُنشر وتعمل بالكامل داخل البنية التحتية الخاصة والآمنة للعميل.",
    items: [
      "Private self-hosted deployments",
      "Internal knowledge assistants",
      "Secure business search & RAG",
      "Department-specific copilots",
      "MCP-based integrations",
      "Company-controlled data access",
    ],
    itemsAr: [
      "نشر محلي معزول على خوادم العميل الخاصة",
      "مساعدات معرفية للوثائق والسياسات الداخلية",
      "محركات بحث مؤسسية آمنة (RAG)",
      "مساعدات ذكية مخصصة لفرق الأقسام",
      "تكاملات معيارية عبر بروتوكول MCP",
      "تحكم كامل للمؤسسة في مسارات البيانات",
    ],
  },
]

const AI_8_STAGE_DELIVERY = [
  { number: "01", title: "Select the Business Process", titleAr: "اختيار وتحديد مسار العمل", description: "Identify a repetitive, high-frequency process with clear operational ROI and measurable inputs.", descriptionAr: "تحديد مسار عمل متكرر ومحدد ذي أثر تشغيلي وعائد استثماري واضح." },
  { number: "02", title: "Define Inputs & Outcomes", titleAr: "تحديد المدخلات والمخرجات", description: "Document schema fields, incoming data formats, acceptance thresholds, and expected downstream actions.", descriptionAr: "توثيق حقول البيانات وصيغ المستندات وحدود القبول الدقيقة والإجراءات اللاحقة." },
  { number: "03", title: "Connect Approved Systems", titleAr: "ربط الأنظمة المعتمدة", description: "Configure read-only API connectors, database replicas, and authenticated webhook event listeners.", descriptionAr: "ربط واجهات الـ API وقواعد البيانات المشفرة مع عزل تام لمفاتيح الوصول." },
  { number: "04", title: "Configure Permissions", titleAr: "ضبط الصلاحيات والحماية", description: "Enforce strict least-privilege security, credential masking, and tenant data isolation.", descriptionAr: "تطبيق معايير أمان الحد الأدنى من الصلاحيات وحجب البيانات الحساسة." },
  { number: "05", title: "Add Human Approval Points", titleAr: "إدراج نقاط الاعتماد البشري", description: "Embed explicit human sign-off checkpoints before irreversible actions, financial debits, or customer notices.", descriptionAr: "وضع بوابات تحقق بشري إلزامية قبل أي إجراء مالي أو كتابة في الأنظمة." },
  { number: "06", title: "Test with Real Scenarios", titleAr: "الاختبار بسيناريوهات حية", description: "Execute hundreds of historical edge cases through deterministic evaluation suites to verify accuracy.", descriptionAr: "تشغيل مئات الحالات الواقعية السابقة للتحقق الصارم من دقة التنفيذ." },
  { number: "07", title: "Deploy in Client Environment", titleAr: "النشر في بيئة العميل", description: "Containerized deployment into the client's internal cloud tenant or on-premise hardware.", descriptionAr: "نشر الحاويات البرمجية مباشرة داخل البنية السحابية أو الخوادم الخاصة بالعميل." },
  { number: "08", title: "Monitor & Improve", titleAr: "المراقبة والتحسين المستمر", description: "Live telemetry tracking latency, error rates, model costs, and continuous operational refinement.", descriptionAr: "مراقبة لحظية لسرعة الأداء وتكاليف التشغيل وتحديث القواعد باستمرار." },
]

const AI_USE_CASES = [
  { title: "Customer Service", titleAr: "خدمة العملاء والدعم الذاتي", desc: "Resolves tier-1 inquiries with cited policy answers, routing complex exceptions directly to human representatives.", descAr: "حل استفسارات المستوى الأول فورياً مع إسناد السياسات وتوجيه الحالات المعقدة للموظف المختص." },
  { title: "Sales Operations", titleAr: "عمليات وتأهيل المبيعات", desc: "Automates inbound lead qualification, RFP data extraction, and CRM deal creation without human data entry.", descAr: "تأهيل العملاء المحتملين واستخراج متطلبات المناقصات وتحديث بيانات الـ CRM آلياً." },
  { title: "Document Processing", titleAr: "معالجة الوثائق والعقود", desc: "Extracts line items, dates, and amounts from PDF invoices, bills of lading, and receipts with schema validation.", descAr: "استخراج جداول الفواتير وبوالص الشحن والعقود بدقة عالية مع التحقق التلقائي من الأرقام." },
  { title: "Internal Knowledge", titleAr: "استرجاع المعرفة المؤسسية", desc: "Instant, permission-aware answers across internal policies, engineering manuals, and archived projects.", descAr: "إجابات فورية موثقة للموظفين مستخرجة من آلاف الكتيبات التشغيلية واللوائح الداخلية." },
  { title: "Finance Workflows", titleAr: "العمليات المالية ومطابقة الفواتير", desc: "Three-way matching between POs, vendor invoices, and bank statements, flagging discrepancies before payout.", descAr: "مطابقة ثلاثية تلقائية بين أوامر الشراء وفواتير الموردين والمدفوعات لرصد أي تباين." },
  { title: "HR Administration", titleAr: "إجراءات الموارد البشرية", desc: "Automates document collection for onboarding, leave balance calculations, and routine policy assistance.", descAr: "أتمتة جمع وثائق التعيين للموظفين الجدد واحتساب رصيد الإجازات والإجابة على الاستفسارات." },
  { title: "Reporting & Telemetry", titleAr: "إعداد التقارير والملخصات", desc: "Aggregates multi-database metrics into daily executive summaries, alerting leaders to operational anomalies.", descAr: "تجميع أرقام الفروع والأنظمة في ملخصات تنفيذية يومية مع تنبيه فوري عند أي شذوذ في الأرقام." },
  { title: "IT Support Helpdesk", titleAr: "الدعم الفني والتشغيلي", desc: "Automates ticket triage, access provisioning, diagnostic log capture, and routine resolution steps.", descAr: "فرز التذاكر الفنية وأتمتة منح الصلاحيات وجمع سجلات الأخطاء لتسريع معالجة البلاغات." },
]

export default function AIPage() {
  const { isAr } = useLanguage()
  const aiCaseStudy = CASE_STUDIES_DATA.find((c) => c.sectorId === "ai") || CASE_STUDIES_DATA[0]

  return (
    <div
      className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased flex flex-col selection:bg-[#0FCFC0] selection:text-[#000823]"
    >
      <SiteHeader />

      <main className="flex-1">
        {/* 1. Sector Hero */}
        <SectorHero
          sectorSlug="ai"
          sectorNumber="05"
          sectorName="Growl AI"
          sectorNameAr="جرول للذكاء الاصطناعي والأتمتة"
          headline="Automation Sold as a Product"
          headlineAr="أتمتة ذكية تباع كمنتج محدد النطاق"
          description="Fixed scope, fixed price, deployed on your own systems. Not consulting hours."
          descriptionAr="نطاق عمل محدد، سعر ثابت، ونشر مباشر على أنظمتكم الخاصة. ليس ساعات استشارية مفتوحة."
          accentColor={ACCENT}
          accentTint={TINT}
          heroImage="/images/sectors/ai-hero.webp"
          heroImageAlt="Growl AI operations team mapping workflow automation in office workshop"
          contextTag="DETERMINISTIC WORKFLOWS & PRIVATE ENTERPRISE AI"
          contextTagAr="مسارات عمل حاسمة وذكاء اصطناعي مؤسسي خاص"
          primaryCtaText="Discuss an Automation"
          primaryCtaTextAr="ناقش أتمتة مسار عمل"
          primaryCtaHref="/contact"
          secondaryCtaText="Explore AI Solutions"
          secondaryCtaTextAr="استكشف حلول الأتمتة"
          secondaryHref="#capabilities"
          isAr={isAr}
        />

        {/* 2. Business Perspective: Practical Over Hype */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionLabel>{isAr ? "النهج العملي" : "Practical Engineering"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-tight">
                {isAr
                  ? "أتمتة المسارات الحقيقية، لا روبوتات المحادثة المفتوحة غير الموجهة."
                  : "We engineer deterministic business pipelines, not unconstrained open-ended bots."}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-[#000823]/75 text-base leading-relaxed">
              <p>
                {isAr
                  ? "يركز قطاع الذكاء الاصطناعي في جرول على أتمتة العمليات الإدارية والمالية المتكررة التي تستهلك آلاف الساعات من الكوادر البشرية. نحن نبني منظومات محددة السعر والنطاق، تُنشر على خوادمكم الخاصة لضمان سرية البيانات."
                  : "Growl AI focuses on eliminating manual administrative bottlenecks that drain enterprise productivity. We package workflow automations as defined products with predictable pricing and direct deployment inside your own tenant infrastructure."}
              </p>
              <p>
                {isAr
                  ? "من خلال الربط عبر بروتوكولات MCP ومحركات n8n، تتصل نماذج الذكاء الاصطناعي بأنظمة أعمالكم مع وجود نقاط اعتماد ومراجعة بشرية صارمة تمنع الأخطاء وتضمن الدقة الكاملة."
                  : "By combining Model Context Protocol (MCP) tools, n8n orchestration, and strict human-in-the-loop validation checkpoints, we deliver systems that run reliably, audit transparently, and respect your existing enterprise security boundary."}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Architectural Workflow Diagram */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-[#000823] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#0FCFC0] mb-2 font-semibold">
                {isAr ? "معمارية المسار الحاسم" : "DETERMINISTIC PIPELINE ARCHITECTURE"}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                {isAr ? "مسار العمل: من المدخلات إلى المخرجات مع الرقابة البشرية" : "How a Controlled Agent Pipeline Operates"}
              </h3>
            </div>

            {/* Architecture Steps: Input -> Decision -> Tool -> Human Approval Checkpoint -> Output */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { stage: "01", title: "Input", titleAr: "المدخلات", desc: "Inbound PDF invoice, customer ticket, or ERP webhook event.", descAr: "فاتورة PDF، تذكرة عميل، أو إشعار من نظام ERP." },
                { stage: "02", title: "Decision", titleAr: "التحليل والتصنيف", desc: "Reasoning model parses intent, extracts schema fields, and computes confidence.", descAr: "النموذج يحلل المحتوى ويستخرج الحقول ويحدد نسبة الثقة." },
                { stage: "03", title: "Tool Action", titleAr: "استدعاء الأداة", desc: "MCP tool queries internal database, checks inventory balance, or verifies contract.", descAr: "استدعاء أداة MCP لفحص قاعدة البيانات أو مطابقة العقد." },
                { stage: "04", title: "Human Checkpoint", titleAr: "بوابة الاعتماد البشري", desc: "Mandatory human sign-off for financial transactions or low-confidence edge cases.", descAr: "موافقة بشرية إلزامية قبل صرف الأموال أو المعاملات الحرجة." },
                { stage: "05", title: "Output", titleAr: "المخرجات والتوثيق", desc: "Direct ledger update, customer notification, and immutable audit log entry.", descAr: "تحديث السجلات، وإشعار المعنيين، وتوثيق سجل المراجعة." },
              ].map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#0FCFC0]">{step.stage}</span>
                      {idx < 4 && <span className="hidden lg:inline text-white/30 font-mono">→</span>}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">{isAr ? step.titleAr : step.title}</h4>
                    <p className="text-xs text-white/65 leading-relaxed">{isAr ? step.descAr : step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Three Core Capabilities */}
        <section id="capabilities" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-[#F8F8F8]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16">
              <SectionLabel>{isAr ? "القدرات الأساسية" : "Core Capabilities"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr ? "ثلاث منظومات ذكاء اصطناعي موجهة للأعمال" : "Three practical AI disciplines deployed for enterprise use."}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AI_CORE_CAPABILITIES.map((cap, idx) => (
                <div
                  key={cap.title}
                  className="p-8 rounded-2xl bg-white border border-[#000823]/[0.08] flex flex-col justify-between hover:border-[#0FCFC0]/60 hover:shadow-lg transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
                        style={{ backgroundColor: `${ACCENT}20`, color: "#006d64" }}
                      >
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-[#000823]/40 uppercase tracking-wider">
                        Practice
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#000823] mb-2 group-hover:text-[#008f82] transition-colors">
                      {isAr ? cap.titleAr : cap.title}
                    </h3>

                    <p className="text-xs text-[#000823]/65 leading-relaxed mb-6 font-normal">
                      {isAr ? cap.descAr : cap.desc}
                    </p>

                    <div className="border-t border-[#000823]/[0.06] pt-4">
                      <div className="space-y-2">
                        {(isAr ? cap.itemsAr : cap.items).map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-[#000823]/80">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 8-Stage Delivery Process */}
        <SectorProcess
          headline="A structured eight-stage automation delivery lifecycle."
          headlineAr="منهجية من ثماني مراحل لتسليم ونشر الأتمتة في بيئتكم الخاصة."
          steps={AI_8_STAGE_DELIVERY}
          accentColor={ACCENT}
          isAr={isAr}
        />

        {/* 6. Eight Practical Use Cases */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <SectionLabel>{isAr ? "مجالات التطبيق العملي" : "Verified Use Cases"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr ? "أين تحقق الأتمتة أكبر عائد ملموس؟" : "Where practical automation delivers immediate return."}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AI_USE_CASES.map((uc, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] hover:border-[#000823]/25 transition-all">
                  <span className="text-[10px] font-mono font-bold text-[#008f82] uppercase mb-2 block">
                    CASE 0{i + 1}
                  </span>
                  <h4 className="text-base font-bold text-[#000823] mb-2">{isAr ? uc.titleAr : uc.title}</h4>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">{isAr ? uc.descAr : uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Case Study */}
        {aiCaseStudy && (
          <SectorCaseStudies
            caseStudy={aiCaseStudy}
            accentColor={ACCENT}
            isAr={isAr}
          />
        )}

        {/* 8. Sector FAQ */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mb-12">
              <SectionLabel>{isAr ? "الأسئلة الشائعة" : "Enterprise AI FAQ"}</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#000823]">
                {isAr ? "إجابات حول الخصوصية وأمان النماذج الخاصة" : "Data Privacy, Self-Hosting & Governance"}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Is company data ever sent to third-party model providers for training?", qAr: "هل تُستخدم بيانات شركتنا في تدريب النماذج العامة؟", a: "Never. Growl AI solutions run either on dedicated private tenant endpoints with strict zero-data-retention agreements, or directly self-hosted on the client's internal hardware via local model weights.", aAr: "مطلقاً. تعمل حلول جرول عبر واجهات مؤسسية خاصة باتفاقيات عدم الاحتفاظ بالبيانات (Zero-Retention)، أو تُنشر بالكامل على خوادمكم الداخلية معزولة عن الإنترنت." },
                { q: "What is Model Context Protocol (MCP) and why does it matter?", qAr: "ما هو بروتوكول MCP ولماذا يعتبر أساسياً للأنظمة المؤسسية؟", a: "MCP is an open standard that allows autonomous AI agents to connect securely to corporate databases, internal tools, and APIs with structured schema enforcement and granular authorization controls.", aAr: "بروتوكول MCP هو معيار عالمي مفتوح يتيح للوكلاء الأذكياء الاتصال الآمن بقواعد بياناتكم وأدواتكم الداخلية وفق صلاحيات محددة دون تعريض الأنظمة للخطر." },
                { q: "How do you guarantee accuracy and prevent model hallucination in financial workflows?", qAr: "كيف تضمنون دقة العمليات المالية وتفادي الأخطاء التوليدية؟", a: "We employ deterministic schema validation, cross-referencing arithmetic loops, and hard human-in-the-loop checkpoints before any state changes or transactions can be written to company systems.", aAr: "نعتمد قواعد تحقق حسابية حاسمة، وفحصاً هيكلياً دقيقاً للجداول، مع وجود بوابات موافقة بشرية إلزامية قبل اعتماد أي معاملة في السجلات الرسمية." },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#000823]/[0.08]">
                  <h4 className="text-sm font-bold text-[#000823] mb-2">{isAr ? faq.qAr : faq.q}</h4>
                  <p className="text-xs text-[#000823]/70 leading-relaxed">{isAr ? faq.aAr : faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. AI Page CTA */}
        <SectorCta
          headline="Turn repeatable work into a reliable system."
          headlineAr="حوّل المهام المتكررة إلى نظام آلي موثوق"
          description="Schedule a technical automation assessment with our engineers to identify and scope your highest-ROI business process."
          descriptionAr="احجز جلسة تقييم فني للأتمتة مع مهندسينا لتحديد مسارات العمل ذات العائد الأعلى وتقدير نطاق التنفيذ."
          primaryText="Discuss an Automation"
          primaryTextAr="ناقش أتمتة مسار عمل"
          secondaryText="Explore AI Solutions"
          secondaryTextAr="استكشف حلول الذكاء الاصطناعي"
          secondaryHref="#capabilities"
          sectorSlug="ai"
          accentColor={ACCENT}
          accentTint={TINT}
          isAr={isAr}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
