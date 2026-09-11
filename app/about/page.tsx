"use client"

import React from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll"
import { SectionLabel } from "@/components/shared/section-label"
import { CTASection } from "@/components/sections/cta-section"
import { useLanguage } from "@/components/language-context"

const PRINCIPLES = [
  {
    title: "Think commercially",
    titleAr: "التفكير التجاري والاستثماري",
    desc: "Every technical or creative decision starts with the real business outcome it serves.",
    descAr: "كل قرار تقني أو إبداعي يبدأ من النتيجة التجارية الحقيقية والقيمة الاستثمارية التي يحققها.",
  },
  {
    title: "Design intentionally",
    titleAr: "التصميم الهادف والموجه",
    desc: "Nothing is arbitrary. Aesthetics, user experience, and architecture work as one coherent system.",
    descAr: "لا شيء متروك للصدفة. تلتقي الجماليات البصرية مع تجربة المستخدم والمعمارية البرمجية في تناغم تام.",
  },
  {
    title: "Build responsibly",
    titleAr: "البناء المسؤول عالي الجودة",
    desc: "Engineering quality, clean codebases, and maintainability are non-negotiable foundations.",
    descAr: "جودة الهندسة البرمجية ونظافة الشيفرة وسهولة الصيانة تمثل ركائز غير قابلة للمساومة.",
  },
  {
    title: "Secure by default",
    titleAr: "الأمان المدمج كمعيار أساسي",
    desc: "Zero Trust and proactive risk defense are engineered into every layer from day zero.",
    descAr: "تُبنى معمارية انعدام الثقة (Zero Trust) والحماية الاستباقية في كافة الطبقات منذ اليوم الأول.",
  },
  {
    title: "Measure what matters",
    titleAr: "قياس الأثر والمؤشرات الحقيقية",
    desc: "We focus on commercial KPIs, uptime, and efficiency rather than superficial vanity numbers.",
    descAr: "نركز على مؤشرات الأداء الحقيقية والعائد الاستثماري وسرعة التشغيل بعيداً عن الأرقام الشكلية.",
  },
  {
    title: "Continuous evolution",
    titleAr: "التطور والتحسين المستمر",
    desc: "Production deployment is just day one. Continuous optimization drives compounding advantage.",
    descAr: "الإطلاق في بيئة الإنتاج هو بداية الرحلة. التحسين المستمر هو ما يمنح عملاءنا ميزة تنافسية مستدامة.",
  },
]

const DIVISIONS_LIST = [
  { name: "Growl SaaS", nameAr: "جرول للبرمجيات كخدمة", accent: "#FBE858", href: "/sectors/saas", tag: "The System Without the Project" },
  { name: "Growl Tech", nameAr: "جرول للتقنية وهندسة البرمجيات", accent: "#FF7A00", href: "/sectors/tech", tag: "Software That Runs the Business" },
  { name: "Growl Hub", nameAr: "منصة جرول هب للأنظمة السحابية", accent: "#1F6FEB", href: "/sectors/hub", tag: "The Connected Operating Suite" },
  { name: "Growl System Integrator & Cybersecurity", nameAr: "جرول لتكامل الأنظمة والأمن السيبراني", accent: "#DA291C", href: "/sectors/system-integrator-cybersecurity", tag: "The Infrastructure Behind the Business" },
  { name: "Growl AI", nameAr: "جرول للذكاء الاصطناعي والأتمتة", accent: "#0FCFC0", href: "/sectors/ai", tag: "Automation Sold as a Product" },
]

export default function AboutPage() {
  const { isAr } = useLanguage()

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="bg-[#f8f8f8] text-[#000823] min-h-screen font-sans antialiased"
    >
      <SiteHeader />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06]">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#000823]/10 bg-white text-[#000823]/70 text-[11px] font-mono tracking-widest uppercase mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{isAr ? "عن مجموعة GROWL CO. القابضة" : "ABOUT GROWL CO. HOLDING GROUP"}</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tight leading-[1.05] mb-6">
              {isAr ? (
                <>الشريك الاستراتيجي والتشغيلي<br />للشركات الطموحة الساعية للريادة.</>
              ) : (
                <>The strategic and operational<br />partner behind ambitious businesses.</>
              )}
            </h1>

            <p className="text-[16px] text-[#000823]/65 leading-relaxed max-w-2xl font-normal">
              {isAr
                ? "تجمع GROWL CO. بين هندسة البرمجيات المتقدمة، وأنظمة الذكاء الاصطناعي والأتمتة، والأمن السيبراني، وتكامل الأنظمة المؤسسية، واستراتيجية العلامات التجارية، واستوديو منتجات SaaS تحت مظلة قابضة واحدة متكاملة."
                : "Growl Co. combines enterprise software engineering, autonomous AI workflows, proactive cybersecurity, systems integration, strategic branding, and SaaS venture building within one coordinated holding structure."}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Group Story & Mission */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06] bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <SectionLabel>{isAr ? "رؤيتنا وقصتنا" : "OUR PHILOSOPHY & STORY"}</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.1] mb-6">
              {isAr
                ? "تأسسنا لحل معضلة التشتت بين الموردين والشركاء."
                : "Engineered to eliminate vendor fragmentation and friction."}
            </h2>
            <p className="text-[15px] text-[#000823]/70 leading-relaxed mb-5 font-normal">
              {isAr
                ? "تواجه الشركات النامية تحدياً مزمناً: تحتاج إلى استراتيجية تجارية، وتصميم رقمي فاخر، وهندسة برمجية متطورة، وتكامل أنظمة، وأمن سيبراني صارم، وتسويق رقمي موجه بالعائد. لكن التعامل مع شركات متعددة منفصلة يتسبب في تضارب الأهداف، وإهدار الميزانيات، وزيادة المخاطر."
                : "Ambitious organizations frequently face a costly dilemma: they require world-class engineering, artificial intelligence, enterprise integrations, cybersecurity, and performance brand strategy — but coordinating multiple disconnected vendors creates severe delays, miscommunication, and runaway overhead."}
            </p>
            <p className="text-[15px] text-[#000823]/70 leading-relaxed font-normal">
              {isAr
                ? "تمنحك GROWL شريكاً تكنولوجياً وإبداعياً موحداً يمتلك 5 قطاعات تشغيلية متخصصة ومستقلة الكفاءة، تعمل تحت حوكمة تنفيذية موحدة ومعايير جودة صارمة."
                : "Growl solves this by operating five dedicated, high-caliber specialist divisions under a unified executive governance model, ensuring flawless continuity from architecture to scale."}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <div className="space-y-6">
              {[
                {
                  label: isAr ? "الهدف الاستراتيجي" : "CORE PURPOSE",
                  text: isAr
                    ? "تمكين المؤسسات الرائدة من بناء وحماية وتوسيع أصولها الرقمية من خلال بنية تكنولوجية فائقة ومناعة سيبرانية شاملة."
                    : "Enable ambitious enterprises to build, protect, and scale through unified engineering, applied intelligence, and creative precision.",
                },
                {
                  label: isAr ? "رسالتنا العملية" : "OPERATIONAL MISSION",
                  text: isAr
                    ? "تحقيق نتائج تجارية واستثمارية ملموسة وقابلة للقياس عبر دمج تخصصات التقنية الخمسة ضمن نموذج عمل موجه بالجودة الصارمة."
                    : "Deliver measurable business value by deploying elite multidisciplinary teams bound by shared engineering rigor and transparent accountability.",
                },
                {
                  label: isAr ? "الرؤية المستقبلية" : "LONG-TERM VISION",
                  text: isAr
                    ? "أن نكون المنظومة الأكثر موثوقية وشهرة عالمياً في هندسة التكنولوجيا وبناء العلامات التجارية والحلول السحابية المتقدمة."
                    : "To stand as the world's premier multi-sector technology, brand, and digital venture holding partner.",
                },
              ].map((item) => (
                <div key={item.label} className="border-s-2 border-[#000823]/15 ps-6 py-1">
                  <h3 className="text-[10px] tracking-[0.2em] font-mono uppercase text-[#000823]/40 mb-1.5 font-semibold">
                    {item.label}
                  </h3>
                  <p className="text-sm text-[#000823]/75 leading-relaxed font-normal">{item.text}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Five Divisions Model */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06]">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll className="mb-14 text-center">
            <SectionLabel>{isAr ? "هيكلية المنظومة" : "THE HOLDING ECOSYSTEM"}</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.1]">
              {isAr ? "خمسة قطاعات متخصصة. مجموعة واحدة متكاملة." : "Five specialized divisions. One coordinated holding."}
            </h2>
            <p className="mt-4 text-[15px] text-[#000823]/60 max-w-xl mx-auto leading-relaxed">
              {isAr
                ? "يمتلك كل قطاع فريقاً هندسياً واستشارياً عالي التخصص، يتشاركون البنية الأساسية ومعايير الاعتمادية وحوكمة الأمان."
                : "Each Growl division operates with deep commercial specialization while sharing unified engineering standards, security governance, and executive accountability."}
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIVISIONS_LIST.map((div, i) => (
              <RevealOnScroll key={div.name} delay={i * 60}>
                <Link
                  href={div.href}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-[#000823]/[0.08] bg-white hover:border-[#000823]/[0.2] hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: div.accent }} />
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#000823]/[0.04] text-[#000823]/50">
                        {div.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#000823] group-hover:text-[#000823] transition-colors mb-2">
                      {isAr ? div.nameAr : div.name}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs font-semibold text-[#000823]/70 group-hover:text-[#000823] transition-colors">
                    <span>{isAr ? "استكشف خدمات القطاع" : "View Division"}</span>
                    <span className="font-mono">→</span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06] bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll className="mb-14">
            <SectionLabel>{isAr ? "مبادئ العمل والتشغيل" : "OPERATING PRINCIPLES"}</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.1]">
              {isAr ? "كيف تعمل GROWL في كل مشروع وكل شراكة." : "How Growl operates — in every engagement, every day."}
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 60}>
                <div className="rounded-2xl border border-[#000823]/[0.07] bg-[#F8F8F8] p-7 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono tracking-[0.2em] text-[#000823]/30 block mb-3 font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-[#000823] mb-2">
                      {isAr ? p.titleAr : p.title}
                    </h3>
                    <p className="text-xs text-[#000823]/65 leading-relaxed font-normal">
                      {isAr ? p.descAr : p.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Global Operations & Delivery Model */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <SectionLabel>{isAr ? "الانتشار والعمليات العالمية" : "GLOBAL DELIVERY ECOSYSTEM"}</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.1] mb-6">
                {isAr ? "فرق هندسية واستشارية عالمية تعمل على مدار الساعة." : "Round-the-clock enterprise engineering and strategic delivery."}
              </h2>
              <p className="text-[15px] text-[#000823]/65 leading-relaxed font-normal mb-6">
                {isAr
                  ? "تعمل كوادرنا المتخصصة عبر مكاتب ومراكز تطوير إقليمية متصلة لتقديم الدعم الفني المستمر، والتطوير المتواصل، والمراقبة الأمنية للبنى التحتية الحساسة 24/7/365."
                  : "Growl operates through distributed regional hubs and strategic engineering centers, offering continuous 24/7/365 telemetry monitoring, incident defense, and development sprints for enterprise clients globally."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-black/[0.06] bg-white">
                  <div className="text-2xl font-bold font-mono text-[#000823]">99.99%</div>
                  <div className="text-[11px] text-[#000823]/60 font-medium mt-1">
                    {isAr ? "موثوقية وتوافر الأنظمة" : "Infrastructure Uptime SLA"}
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-black/[0.06] bg-white">
                  <div className="text-2xl font-bold font-mono text-[#000823]">&lt; 15m</div>
                  <div className="text-[11px] text-[#000823]/60 font-medium mt-1">
                    {isAr ? "زمن الاستجابة للحوادث" : "Incident Response Speed"}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div className="rounded-2xl border border-black/[0.08] bg-[#000823] text-white p-8">
                <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{isAr ? "حوكمة المجموعة" : "EXECUTIVE GOVERNANCE"}</span>
                </div>
                <h3 className="text-2xl font-light tracking-tight mb-4">
                  {isAr ? "عقد شراكة موحد يغطي كافة احتياجاتك" : "A Single Master Services Agreement (MSA)"}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-normal mb-6">
                  {isAr
                    ? "لا داعي للتفاوض مع عدة موردين منفصلين. تتيح لك اتفاقية GROWL الموحدة الاستفادة الفورية من أي قطاع تشغيلي وفق تسعير شفاف وتنسيق هندسي متكامل."
                    : "Engage multiple specialist divisions under one unified framework contract. Scale engineering teams, spin up AI agents, audit security posture, and deploy brand campaigns with zero administrative friction."}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#000823] hover:bg-white/90 text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  {isAr ? "تواصل مع الإدارة التنفيذية" : "Consult with Executive Leadership"}
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection
        headline={isAr ? "هل أنت مستعد لتطوير منظومة أعمالك الرقمية؟" : "Ready to elevate your digital ecosystem?"}
        description={
          isAr
            ? "تواصل مع فريق GROWL اليوم لاستكشاف كيف يمكن لقطاعاتنا الخمسة المتخصصة دفع أعمالك نحو الريادة والنمو المستدام."
            : "Connect with Growl executive leadership to explore how our specialized divisions can engineer, protect, and scale your operations."
        }
        primaryCTA={{ label: isAr ? "ابدأ المحادثة الآن" : "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ label: isAr ? "استكشف كافة القطاعات" : "Explore All 5 Sectors", href: "/sectors" }}
      />

      <SiteFooter />
    </div>
  )
}
