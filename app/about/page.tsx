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
      className="bg-[#f8f8f8] text-[#000823] min-h-screen font-sans antialiased selection:bg-[#7135E5] selection:text-white"
    >
      <SiteHeader />

      {/* ── Page Hero: Confident, Balanced Editorial Typography ────────── */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 px-5 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7135E5]" />
              <SectionLabel>
                {isAr ? "عن مجموعة جرول القابضة" : "ABOUT GROWL GROUP"}
              </SectionLabel>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold tracking-tight leading-[1.12] text-[#000823] max-w-3xl mb-5">
              {isAr ? (
                <>
                  الشريك الاستراتيجي والتشغيلي
                  <br />
                  للشركات الطموحة الساعية للريادة.
                </>
              ) : (
                <>
                  The strategic and operational partner
                  <br />
                  behind ambitious businesses.
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-[19px] text-[#525866] leading-[1.6] max-w-2xl font-normal">
              {isAr
                ? "تجمع جرول بين هندسة البرمجيات المتقدمة، وأنظمة الذكاء الاصطناعي والأتمتة، والأمن السيبراني، وتكامل الأنظمة المؤسسية، واستراتيجية العلامات التجارية، واستوديو منتجات SaaS تحت مظلة قابضة واحدة متكاملة."
                : "Growl Co. combines enterprise software engineering, autonomous AI workflows, proactive cybersecurity, systems integration, strategic branding, and SaaS venture building within one coordinated holding structure."}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Group Story & Mission: Balanced 2-Column Editorial ─────────── */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <SectionLabel>{isAr ? "رؤيتنا وقصتنا" : "OUR PHILOSOPHY & STORY"}</SectionLabel>
              
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.18] mb-5">
                {isAr
                  ? "تأسسنا لحل معضلة التشتت بين الموردين والشركاء."
                  : "Engineered to eliminate vendor fragmentation and friction."}
              </h2>
              
              <p className="text-sm sm:text-base text-[#525866] leading-relaxed mb-4 font-normal">
                {isAr
                  ? "تواجه الشركات النامية تحدياً مزمناً: تحتاج إلى استراتيجية تجارية، وتصميم رقمي فاخر، وهندسة برمجية متطورة، وتكامل أنظمة، وأمن سيبراني صارم، وتسويق رقمي موجه بالعائد. لكن التعامل مع شركات متعددة منفصلة يتسبب في تضارب الأهداف، وإهدار الميزانيات، وزيادة المخاطر."
                  : "Ambitious organizations frequently face a costly dilemma: they require world-class engineering, artificial intelligence, enterprise integrations, cybersecurity, and performance brand strategy — but coordinating multiple disconnected vendors creates severe delays, miscommunication, and runaway overhead."}
              </p>
              
              <p className="text-sm sm:text-base text-[#525866] leading-relaxed font-normal">
                {isAr
                  ? "تمنحك جرول شريكاً تكنولوجياً وإبداعياً موحداً يمتلك 5 قطاعات تشغيلية متخصصة ومستقلة الكفاءة، تعمل تحت حوكمة تنفيذية موحدة ومعايير جودة صارمة."
                  : "Growl solves this by operating five dedicated, high-caliber specialist divisions under a unified executive governance model, ensuring flawless continuity from architecture to scale."}
              </p>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5">
            <RevealOnScroll delay={100}>
              <div className="space-y-4">
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
                  <div
                    key={item.label}
                    className="p-5 rounded-2xl bg-[#F8F8F8] border border-[#000823]/[0.08] hover:border-[#000823]/20 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#000823] mb-1.5">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed font-normal">{item.text}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* ── Five Divisions Model ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08]">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll className="mb-12 text-center">
            <SectionLabel>{isAr ? "هيكلية المنظومة" : "THE HOLDING ECOSYSTEM"}</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.18]">
              {isAr ? "خمسة قطاعات متخصصة. مجموعة واحدة متكاملة." : "Five specialized divisions. One coordinated holding."}
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-[#525866] max-w-xl mx-auto leading-relaxed">
              {isAr
                ? "يمتلك كل قطاع فريقاً هندسياً واستشارياً عالي التخصص، يتشاركون البنية الأساسية ومعايير الاعتمادية وحوكمة الأمان."
                : "Each Growl division operates with deep commercial specialization while sharing unified engineering standards, security governance, and executive accountability."}
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIVISIONS_LIST.map((div, i) => (
              <RevealOnScroll key={div.name} delay={i * 50}>
                <Link
                  href={div.href}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-[#000823]/[0.08] bg-white hover:border-[#000823]/25 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: div.accent }} />
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#000823]/[0.04] text-[#000823]/55">
                        {div.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#000823] mb-2 leading-snug">
                      {isAr ? div.nameAr : div.name}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-[#000823]/[0.06] flex items-center justify-between text-xs font-semibold text-[#000823]/70 group-hover:text-[#000823] transition-colors">
                    <span>{isAr ? "استكشف خدمات القطاع" : "View Division"}</span>
                    <span className="font-mono transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operating Principles ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll className="mb-12">
            <SectionLabel>{isAr ? "مبادئ العمل والتشغيل" : "OPERATING PRINCIPLES"}</SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.18]">
              {isAr ? "كيف تعمل جرول في كل مشروع وكل شراكة." : "How Growl operates — in every engagement, every day."}
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 50}>
                <div className="rounded-2xl border border-[#000823]/[0.08] bg-[#F8F8F8] p-6 sm:p-7 h-full flex flex-col justify-between hover:border-[#000823]/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div>
                    <span className="text-[11px] font-mono tracking-[0.2em] text-[#7135E5] block mb-3 font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#000823] mb-2 leading-snug">
                      {isAr ? p.titleAr : p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed font-normal">
                      {isAr ? p.descAr : p.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Operations & Delivery Model ──────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <SectionLabel>{isAr ? "الانتشار والعمليات العالمية" : "GLOBAL DELIVERY ECOSYSTEM"}</SectionLabel>
                
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-[1.18] mb-5">
                  {isAr ? "فرق هندسية واستشارية عالمية تعمل على مدار الساعة." : "Round-the-clock enterprise engineering and strategic delivery."}
                </h2>
                
                <p className="text-sm sm:text-base text-[#525866] leading-relaxed font-normal mb-6">
                  {isAr
                    ? "تعمل كوادرنا المتخصصة عبر مكاتب ومراكز تطوير إقليمية متصلة لتقديم الدعم الفني المستمر، والتطوير المتواصل، والمراقبة الأمنية للبنى التحتية الحساسة 24/7/365."
                    : "Growl operates through distributed regional hubs and strategic engineering centers, offering continuous 24/7/365 telemetry monitoring, incident defense, and development sprints for enterprise clients globally."}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl border border-[#000823]/[0.08] bg-white shadow-xs">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-[#000823]">99.99%</div>
                    <div className="text-xs text-[#525866] font-medium mt-1">
                      {isAr ? "موثوقية وتوافر الأنظمة" : "Infrastructure Uptime SLA"}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl border border-[#000823]/[0.08] bg-white shadow-xs">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-[#000823]">&lt; 15m</div>
                    <div className="text-xs text-[#525866] font-medium mt-1">
                      {isAr ? "زمن الاستجابة للحوادث" : "Incident Response Speed"}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
              <RevealOnScroll delay={100}>
                <div className="rounded-2xl border border-[#000823]/[0.08] bg-[#000823] text-white p-7 sm:p-8 shadow-xl">
                  <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isAr ? "حوكمة المجموعة" : "EXECUTIVE GOVERNANCE"}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                    {isAr ? "عقد شراكة موحد يغطي كافة احتياجاتك" : "A Single Master Services Agreement (MSA)"}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-6">
                    {isAr
                      ? "لا داعي للتفاوض مع عدة موردين منفصلين. تتيح لك اتفاقية جرول الموحدة الاستفادة الفورية من أي قطاع تشغيلي وفق تسعير شفاف وتنسيق هندسي متكامل."
                      : "Engage multiple specialist divisions under one unified framework contract. Scale engineering teams, spin up AI agents, audit security posture, and deploy brand campaigns with zero administrative friction."}
                  </p>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center h-[46px] px-6 rounded-lg bg-white text-[#000823] hover:bg-white/90 text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    {isAr ? "تواصل مع الإدارة التنفيذية" : "Consult with Executive Leadership"}
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        headline={isAr ? "هل أنت مستعد لتطوير منظومة أعمالك الرقمية؟" : "Ready to elevate your digital ecosystem?"}
        description={
          isAr
            ? "تواصل مع فريق جرول اليوم لاستكشاف كيف يمكن لقطاعاتنا الخمسة المتخصصة دفع أعمالك نحو الريادة والنمو المستدام."
            : "Connect with Growl executive leadership to explore how our specialized divisions can engineer, protect, and scale your operations."
        }
        primaryCTA={{ label: isAr ? "ابدأ المحادثة الآن" : "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ label: isAr ? "استكشف كافة القطاعات" : "Explore All 5 Sectors", href: "/sectors" }}
      />

      <SiteFooter />
    </div>
  )
}
