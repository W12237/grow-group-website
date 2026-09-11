"use client"

import { useEffect, useRef, useState } from "react"

interface CapabilityItem {
  labelEn: string
  labelAr: string
  titleEn: string
  titleAr: string
  descEn: string
  descAr: string
  statsEn: { v: string; l: string }[]
  statsAr: { v: string; l: string }[]
  img: string
}

const CAPABILITIES: CapabilityItem[] = [
  {
    labelEn: "SOFTWARE DEVELOPMENT",
    labelAr: "تطوير البرمجيات والمنتجات الرقمية",
    titleEn: "Custom software & enterprise digital platforms",
    titleAr: "برمجيات مؤسسية مخصصة ومنصات رقمية متقدمة",
    descEn: "Bespoke engineering designed around your operations. High-performance web and mobile applications, scalable SaaS architectures, custom ERP, CRM, and POS systems built for long-term velocity.",
    descAr: "هندسة برمجية متقدمة مبنية خصيصاً لخدمة أهدافك التشغيلية. تطبيقات ويب وجوال فائقة الأداء، منصات SaaS قابلة للتوسع، وأنظمة ERP و CRM و POS مخصصة ومصممة لسرعة الإنجاز والاستدامة.",
    statsEn: [{ v: "100%", l: "custom architecture" }, { v: "Enterprise", l: "grade reliability" }],
    statsAr: [{ v: "100%", l: "معمارية مخصصة بالكامل" }, { v: "مستوى مؤسسي", l: "موثوقية واعتمادية عالية" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/researcher-CvhqOuV6irGwBOnJoTGFlXdbyYBRjb.png",
  },
  {
    labelEn: "AI & WORKFLOW AUTOMATION",
    labelAr: "الذكاء الاصطناعي وأتمتة العمليات",
    titleEn: "Autonomous workflows & intelligent task execution",
    titleAr: "أتمتة ذكية ومسارات عمل ذاتية التنفيذ",
    descEn: "Transform repetitive operations into seamless automation. Autonomous AI agents, conversational customer assistants, high-speed document processing, and connected business workflows.",
    descAr: "تحويل المهام والعمليات الروتينية إلى أنظمة مؤتمتة فائقة الكفاءة. عملاء ذكاء اصطناعي ذاتيون، مساعدون أذكياء لخدمة العملاء، معالجة آلية للبيانات والوثائق، وتدفقات عمل متصلة بلا انقطاع.",
    statsEn: [{ v: "10x", l: "operational velocity" }, { v: "24/7", l: "continuous execution" }],
    statsAr: [{ v: "10x", l: "تسريع وتيرة العمليات" }, { v: "24/7", l: "تنفيذ ذاتي مستمر" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coder-9bItvCegU6TXUqbX3tUXGBAtvkBkXp.png",
  },
  {
    labelEn: "SYSTEM INTEGRATION",
    labelAr: "تكامل وربط الأنظمة المؤسسية",
    titleEn: "Connect any system. Operate as one synchronized unit.",
    titleAr: "اربط أنظمتك لتعمل مؤسستك كمنظومة واحدة متناغمة",
    descEn: "Seamless API architecture bridging ERPs, CRMs, payment gateways, e-commerce storefronts, and cloud databases—eliminating manual work and data silos completely.",
    descAr: "معمارية واجهات برمجية متقدمة تربط أنظمة ERP و CRM وبوابات الدفع والمتاجر الإلكترونية وقواعد البيانات السحابية—مما يقضي تماماً على ازدواجية العمل وعزلة البيانات.",
    statsEn: [{ v: "Zero", l: "data silos" }, { v: "Real-Time", l: "bi-directional sync" }],
    statsAr: [{ v: "انعدام تام", l: "لعزلة البيانات" }, { v: "تزامن فوري", l: "مباشر ثنائي الاتجاه" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png",
  },
  {
    labelEn: "CYBERSECURITY & RESILIENCE",
    labelAr: "الأمن السيبراني وحماية البنية التحتية",
    titleEn: "Fortify what you build with enterprise-grade protection",
    titleAr: "حصانة أمنية شاملة تحمي استثماراتك وأصولك الرقمية",
    descEn: "End-to-end vulnerability assessments, API shield defenses, cloud infrastructure hardening, identity & access governance, and continuous risk monitoring.",
    descAr: "تقييم وتدقيق شامل للثغرات، دروع أمنية متقدمة للويب وواجهات APIs، تحصين الخوادم السحابية، حوكمة الهوية والوصول، وإدارة استباقية للمخاطر.",
    statsEn: [{ v: "Full-Stack", l: "defense surface" }, { v: "Resilient", l: "cloud hardening" }],
    statsAr: [{ v: "شامل", l: "درع أمني متكامل" }, { v: "بنية محصنة", l: "حماية سحابية مستمرة" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png",
  },
]

const STICKY_TOP   = 80   // matches top: 80px on first card
const STICKY_STEP  = 16   // each card stacks 16px lower
const SCALE_STEP   = 0.04 // scale reduction per card stacked on top
const OFFSET_STEP  = 8    // px pushed down per card stacked on top

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04]">
      {children}
    </span>
  )
}

interface StackingAgentCardsProps {
  lang?: "en" | "ar"
}

export function StackingAgentCards({ lang = "en" }: StackingAgentCardsProps) {
  const isAr = lang === "ar"
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  // depth[i] = 0..N how many cards are currently stacked on top of card i
  const [depth, setDepth] = useState<number[]>(CAPABILITIES.map(() => 0))

  useEffect(() => {
    function onScroll() {
      const nextDepth = CAPABILITIES.map((_, i) => {
        // Count how many cards j > i are currently in sticky position (i.e. have scrolled past card i)
        let count = 0
        for (let j = i + 1; j < CAPABILITIES.length; j++) {
          const el = cardRefs.current[j]
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const stickyTopJ = STICKY_TOP + j * STICKY_STEP
          // Card j is "on top of" card i when it has reached its sticky position
          if (rect.top <= stickyTopJ + 2) count++
        }
        return count
      })
      setDepth(nextDepth)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
      {CAPABILITIES.map((item, i) => {
        const d         = depth[i]
        const scale     = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP
        const label = isAr ? item.labelAr : item.labelEn
        const title = isAr ? item.titleAr : item.titleEn
        const desc  = isAr ? item.descAr  : item.descEn
        const stats = isAr ? item.statsAr : item.statsEn

        return (
          <div
            key={item.labelEn}
            ref={el => { cardRefs.current[i] = el }}
            className="sticky mb-4"
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform:      `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition:     "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange:     "transform",
              }}
            >
              <div className="group relative bg-[#faf9f7] rounded-2xl border border-black/[0.07] overflow-hidden cursor-pointer">

                {/* ── MOBILE: image top, fades out at bottom ── */}
                {item.img && (
                  <div className="relative w-full h-52 pointer-events-none md:hidden">
                    <img
                      src={item.img}
                      alt={label}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                      }}
                    />
                  </div>
                )}

                {/* ── DESKTOP: image right, fades out at left (absolute) ── */}
                {item.img && (
                  <div className={`hidden md:block absolute inset-y-0 ${isAr ? "left-0" : "right-0"} w-1/2 pointer-events-none`}>
                    <img
                      src={item.img}
                      alt={label}
                      className="w-full h-full object-cover object-center"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: isAr
                          ? "linear-gradient(to left, #faf9f7 0%, transparent 55%)"
                          : "linear-gradient(to right, #faf9f7 0%, transparent 55%)",
                      }}
                    />
                  </div>
                )}

                {/* Text content */}
                <div
                  className="relative z-10 p-8"
                  style={{ maxWidth: item.img ? undefined : "100%" }}
                >
                  <div className="md:max-w-[60%]">
                    <div className="flex items-start justify-between mb-6">
                      <Tag>{label}</Tag>
                    </div>
                    <h3 className="text-xl font-light mb-3">{title}</h3>
                    <p className="text-sm text-black/45 leading-relaxed mb-8">{desc}</p>
                  </div>
                  <div className="flex gap-8 pt-6 border-t border-black/[0.06]">
                    {stats.map(s => (
                      <div key={s.l}>
                        <div className="text-2xl font-light">{s.v}</div>
                        <div className="text-[11px] text-black/35 tracking-widest mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

