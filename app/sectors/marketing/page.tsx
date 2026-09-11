"use client"

import React from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorProcess } from "@/components/sectors/sector-process"
import { PartnerEcosystem } from "@/components/sectors/partner-ecosystem"
import { SectorCaseStudies } from "@/components/sectors/sector-case-studies"
import { SectorCta } from "@/components/sectors/sector-cta"
import { SectionLabel } from "@/components/shared/section-label"
import { useLanguage } from "@/components/language-context"
import { PARTNERS_DATA } from "@/lib/partners-data"
import { CASE_STUDIES_DATA } from "@/lib/case-studies-data"

const ACCENT = "#E5389A"
const TINT = "#F1A7D1"

const MARKETING_SERVICES = [
  {
    title: "Brand Identity",
    titleAr: "استراتيجية وهوية العلامة",
    desc: "Strategic foundation that defines market positioning, voice, and proprietary value propositions.",
    descAr: "الأساس الاستراتيجي الذي يحدد تموضع العلامة، نبرة الصوت، والقيمة التجارية الفريدة.",
    items: ["Brand positioning", "Naming", "Brand strategy", "Logo systems", "Complete brand guidelines"],
    itemsAr: ["تموضع العلامة التنافسي", "تسمية المنتجات والشركات", "استراتيجية العلامة", "أنظمة وتطبيقات الشعار", "دليل إرشادات الهوية الشامل"],
  },
  {
    title: "Visual Identity",
    titleAr: "الهوية البصرية وأنظمة التصميم",
    desc: "Cohesive multi-surface design language translating abstract strategy into distinctive tangible form.",
    descAr: "لغة تصميم متكاملة متعددة المنصات تحول الاستراتيجية إلى حضور بصري استثنائي ومميز.",
    items: ["Design systems", "Art direction", "Brand applications", "Templates", "Asset production"],
    itemsAr: ["أنظمة التصميم المؤسسية", "التوجيه الفني الإبداعي", "تطبيقات العلامة على مختلف الأسطح", "قوالب الهوية المؤسسية", "إنتاج الأصول البصرية"],
  },
  {
    title: "Printing & Collateral",
    titleAr: "الطباعة والمطبوعات المؤسسية",
    desc: "Premium physical touchpoints engineered with precise material selection, finishing, and packaging craft.",
    descAr: "نقاط اتصال ورقية ومطبوعات فاخرة تُنفذ بأعلى معايير اختيار الخامات والتشطيب والطباعة.",
    items: ["Packaging", "Stationery", "Company profiles", "Product catalogues", "Print production"],
    itemsAr: ["تصميم التغليف والعبوات", "المطبوعات المكتبية والقرطاسية", "الملفات التعريفية للشركات", "كتالوجات المنتجات", "إدارة الإنتاج الطباعي"],
  },
  {
    title: "Advertising",
    titleAr: "الإعلانات والحملات الإبداعية",
    desc: "Category-defining multi-channel advertising concepts executed across indoor and large-format outdoor media.",
    descAr: "أفكار إعلانية نوعية تُنفذ عبر القنوات المتعددة، المساحات الداخلية والشاشات الخارجية الضخمة.",
    items: ["Campaign concepts", "Indoor advertising", "Outdoor and OOH", "Media adaptations", "Campaign rollout"],
    itemsAr: ["مفاهيم الحملات الإبداعية", "الإعلانات الداخلية للمراكز والمقار", "الإعلانات الخارجية والطرق (OOH)", "تطويع الوسائط والحملات", "إطلاق وإدارة الحملات"],
  },
  {
    title: "Digital Marketing",
    titleAr: "التسويق الرقمي القائم على الأداء",
    desc: "Precision paid media deployment and attribution modeling designed to turn ad spend into scalable revenue.",
    descAr: "إدارة إعلانات رقمية عالية الدقة ونماذج إسناد مصممة لتحويل الإنفاق الإعلاني إلى عوائد تجارية متصاعدة.",
    items: ["Meta campaigns", "Google Ads", "Analytics", "Conversion tracking", "Performance optimization"],
    itemsAr: ["حملات إعلانات Meta", "إعلانات Google الموجهة", "أنظمة التحليلات المتقدمة", "تتبع مسارات التحويل", "تحسين الأداء المستمر"],
  },
  {
    title: "Traditional Marketing",
    titleAr: "التسويق الميداني والفعاليات",
    desc: "Immersive field activations, experiential installations, and high-impact physical BTL consumer engagement.",
    descAr: "تفعيل ميداني وتجارب تفاعلية تعزز ارتباط الجمهور بالعلامة في المعارض والفعاليات الحية.",
    items: ["Events", "BTL campaigns", "Field activations", "Promotional material", "Experiential marketing"],
    itemsAr: ["تنظيم ورعاية الفعاليات", "حملات التسويق المباشر (BTL)", "التفعيل الميداني للعلامة", "المواد الترويجية الخاصة", "التسويق التجريبي التفاعلي"],
  },
  {
    title: "Media Production",
    titleAr: "الإنتاج الإعلامي وصناعة المحتوى",
    desc: "Cinematic commercial films, studio photography, motion graphics, and high-velocity social production.",
    descAr: "أفلام سينمائية إعلانية، تصوير فوتوغرافي استوديو، موشن جرافيكس، وإنتاج محتوى تفاعلي سريع.",
    items: ["Video production", "Photography", "Motion graphics", "Social content", "Campaign assets"],
    itemsAr: ["إنتاج الفيديو الإعلاني", "التصوير الفوتوغرافي التجاري", "الموشن جرافيكس والتحريك", "محتوى التواصل الاجتماعي", "أصول ومواد الحملات المتكاملة"],
  },
]

const MARKETING_PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    titleAr: "الاستكشاف والتحليل",
    description: "Deep examination of category landscape, competitor positioning, audience sentiment, and commercial moats.",
    descriptionAr: "دراسة معمقة للمشهد التنافسي، نقاط القوة للعلامة، وتحليل سلوك الجمهور المستهدف والفرص المتاحة.",
  },
  {
    number: "02",
    title: "Define",
    titleAr: "التحديد والتأطير",
    description: "Articulating the core brand strategy, verbal framework, visual narrative, and commercial acquisition KPIs.",
    descriptionAr: "صياغة سردية العلامة والاستراتيجية اللفظية والبصرية وتحديد مؤشرات الأداء التسويقي والتجاري.",
  },
  {
    number: "03",
    title: "Create",
    titleAr: "الابتكار والتصميم",
    description: "Iterative production of identity systems, campaign creatives, cinematic footage, and conversion collateral.",
    descriptionAr: "تصميم أنظمة الهوية وإنتاج المواد الإعلانية والأفلام المصورة وتجهيز قوالب الحملات بأعلى معايير الإتقان.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    titleAr: "الإطلاق والتحسين",
    description: "Multi-channel media rollout paired with real-time conversion tracking, creative iteration, and spend scaling.",
    descriptionAr: "إطلاق الحملات عبر كافة القنوات وربط تتبع التحويل اللحظي وتوسيع الميزانيات ذات العائد المرتفع.",
  },
]

export default function MarketingPage() {
  const { isAr } = useLanguage()

  const marketingPartners = PARTNERS_DATA.filter((p) => p.sector === "marketing")
  const marketingCaseStudy = CASE_STUDIES_DATA.find((c) => c.sectorId === "marketing")!

  return (
    <div
      className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased"
      style={{ "--division-accent": ACCENT } as React.CSSProperties}
    >
      <SiteHeader />

      {/* ── 1. Sector Hero ──────────────────────────────────────────────── */}
      <SectorHero
        sectorSlug="marketing"
        sectorNumber="01"
        sectorName="Marketing & Branding"
        sectorNameAr="التسويق وبناء العلامات"
        headline="Brands That Earn Attention"
        headlineAr="علامات تجارية تكتسب الاهتمام والريادة"
        description="Identity, campaigns and media production for companies that have to be seen to be chosen."
        descriptionAr="هوية استراتيجية، حملات تسويقية وإنتاج إعلامي متكامل للشركات التي تختار الظهور والريادة."
        accentColor={ACCENT}
        accentTint={TINT}
        isAr={isAr}
        visualType="marketing"
      />

      {/* ── 2. Sector Overview ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <SectionLabel>{isAr ? "رؤية القطاع" : "SECTOR OVERVIEW"}</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-tight">
              {isAr
                ? "في عالم مزدحم بالضجيج، الانتباه وحده ليس كافياً — بل التميز الذي يقود للشراء."
                : "In saturated markets, awareness alone is insufficient. We engineer brands people actively choose."}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-[#000823]/70 text-base leading-relaxed">
            <p>
              {isAr
                ? "يجمع قطاع التسويق وبناء العلامات في جرول بين الرؤية الإبداعية رفيعة المستوى والانضباط التحليلي الصارم. نحن لا نبني مجرد شعارات، بل نصمم أنظمة علامات تجارية تؤسس لريادة فئوية مستدامة."
                : "Growl Marketing & Branding operates at the intersection of creative distinction and rigorous performance analytics. We don't just produce visual identities; we engineer brand systems that build compounding category dominance."}
            </p>
            <p>
              {isAr
                ? "سواء كان هدفك إطلاق علامة تجارية جديدة أو إعادة تموضع لكيان قائم أو توسيع حملات استحواذ رقمية تعتمد على العائد الإعلاني، فإننا نقدم فرقاً متكاملة تجمع بين التوجيه الفني، كتابة السرديات، وإنتاج الوسائط الاحترافية."
                : "From category-creating rebrands to high-velocity performance acquisition across paid digital channels, our teams integrate strategic copywriting, design tokens, cinema-grade media, and precise multi-touch attribution."}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Capabilities and Services (7 Cards) ───────────────────────── */}
      <section id="capabilities" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <SectionLabel>{isAr ? "القدرات والخدمات" : "CAPABILITIES & DISCIPLINES"}</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823] leading-[1.12]">
              {isAr
                ? "سبعة مجالات متخصصة تصنع فارقاً تجارياً ملموساً."
                : "Seven dedicated disciplines engineered for commercial impact."}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETING_SERVICES.map((srv, idx) => (
              <div
                key={srv.title}
                className={`p-7 rounded-2xl bg-white border border-[#000823]/[0.08] flex flex-col justify-between hover:border-[#E5389A]/50 hover:shadow-lg transition-all duration-200 group ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
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
                      Service Line
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#000823] mb-2 group-hover:text-[#E5389A] transition-colors">
                    {isAr ? srv.titleAr : srv.title}
                  </h3>

                  <p className="text-xs text-[#000823]/65 leading-relaxed mb-6 font-normal">
                    {isAr ? srv.descAr : srv.desc}
                  </p>

                  <ul className="space-y-2 border-t border-[#000823]/[0.06] pt-4">
                    {(isAr ? srv.itemsAr : srv.items).map((item) => (
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

      {/* ── 4. Creative Process (4 Steps: Discover, Define, Create, Launch) ── */}
      <SectorProcess
        headline="A disciplined four-phase creative and acquisition methodology."
        headlineAr="منهجية إبداعية وتنفيذية من أربع مراحل واضحة."
        steps={MARKETING_PROCESS_STEPS}
        accentColor={ACCENT}
        isAr={isAr}
      />

      {/* ── 5. Partner Ecosystem ────────────────────────────────────────── */}
      <PartnerEcosystem
        title="Media and Marketing Technology Ecosystem"
        titleAr="منظومة وسائط وتقنيات التسويق الرقمي"
        description="We orchestrate campaigns and tracking across premier global advertising platforms, creative suites, and automation ecosystems."
        descriptionAr="ندير حملات الاستحواذ والتتبع عبر أبرز منصات الإعلانات العالمية والأدوات الإبداعية وأنظمة الأتمتة المعتمدة."
        partners={marketingPartners}
        accentColor={ACCENT}
        accentTint={TINT}
        isAr={isAr}
        sectorSlug="marketing"
      />

      {/* ── 6. Relevant Case Studies ────────────────────────────────────── */}
      <SectorCaseStudies
        caseStudy={marketingCaseStudy}
        accentColor={ACCENT}
        isAr={isAr}
      />

      {/* ── 7. Final Sector CTA ─────────────────────────────────────────── */}
      <SectorCta
        headline="Build a Brand People Choose"
        headlineAr="ابنِ علامة تجارية يختارها الجمهور"
        description="Speak directly with our brand strategists, art directors, and performance marketers to elevate your presence."
        descriptionAr="تحدث مباشرة مع خبرائنا في استراتيجية العلامات والتوجيه الفني والتسويق القائم على الأداء."
        sectorSlug="marketing"
        accentColor={ACCENT}
        accentTint={TINT}
        isAr={isAr}
      />

      <SiteFooter />
    </div>
  )
}
