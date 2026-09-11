"use client"

import { useState, useEffect } from "react"

const STEPS_EN = [
  {
    num: "01",
    title: "Software Engine",
    desc: "Full-stack web, mobile & SaaS",
    file: "growl.config.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// Initialize GROWL Software Ecosystem" },
      { type: "keyword", text: "import", after: " { createPlatform } ", keyword2: "from", string: " '@growl/core'" },
      { type: "gap" },
      { type: "keyword", text: "export const", after: " app ", keyword2: "=", keyword3: " createPlatform", args: "({" },
      { type: "prop", key: "  name", val: "'enterprise-app'" },
      { type: "prop", key: "  stack", val: "['nextjs', 'mobile', 'api']" },
      { type: "prop", key: "  database", val: "'postgresql'" },
      { type: "prop", key: "  scaling", val: "'auto-distributed'" },
      { type: "plain", text: "})" },
    ],
  },
  {
    num: "02",
    title: "System Connectors",
    desc: "ERP, CRM & API data pipelines",
    file: "integrations/bridge.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// Unified bi-directional system bridge" },
      { type: "keyword", text: "import", after: " { SyncBridge } ", keyword2: "from", string: " '@growl/integrate'" },
      { type: "gap" },
      { type: "keyword", text: "const", after: " bridge ", keyword2: "=", keyword3: " new ", fn: "SyncBridge", args: "({" },
      { type: "prop", key: "  source", val: "'sap-erp'" },
      { type: "prop", key: "  target", val: "'salesforce-crm'" },
      { type: "prop", key: "  mode", val: "'realtime-bidirectional'" },
      { type: "plain", text: "})" },
      { type: "gap" },
      { type: "comment", text: "// Connect without data silos" },
      { type: "plain", text: "await bridge.activate()" },
    ],
  },
  {
    num: "03",
    title: "AI & Workflows",
    desc: "Intelligent autonomous operations",
    file: "workflows/ai-agent.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// Automated document & task workflow" },
      { type: "keyword", text: "import", after: " { WorkflowEngine } ", keyword2: "from", string: " '@growl/automation'" },
      { type: "gap" },
      { type: "keyword", text: "const", after: " pipeline ", keyword2: "=", keyword3: " new ", fn: "WorkflowEngine", args: "({" },
      { type: "prop", key: "  task", val: "'document-processing'" },
      { type: "prop", key: "  accuracyThreshold", val: "0.99" },
      { type: "prop", key: "  autoExecution", val: "true" },
      { type: "plain", text: "})" },
      { type: "gap" },
      { type: "comment", text: "// Start high-speed pipeline" },
      { type: "plain", text: "pipeline.dispatch()" },
    ],
  },
  {
    num: "04",
    title: "Security Shield",
    desc: "Zero-Trust & cloud hardening",
    file: "security/shield.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "# Enforce infrastructure protection" },
      { type: "command", text: "growl security audit --compliance-check" },
      { type: "gap" },
      { type: "output", text: "  Scanning endpoints..." },
      { type: "output", text: "  Verifying API encryption..." },
      { type: "output", text: "  Hardening cloud perimeter..." },
      { type: "gap" },
      { type: "success", text: "✓ Infrastructure secured & active" },
      { type: "url", text: "  → https://shield.growl.tech/audit" },
    ],
  },
]

const STEPS_AR = [
  {
    num: "01",
    title: "هندسة البرمجيات المؤسسية",
    desc: "تطبيقات الويب والجوال والمنصات السحابية",
    file: "growl.config.ts",
    lang: "typescript",
    code: STEPS_EN[0].code,
  },
  {
    num: "02",
    title: "موصلات وتكامل الأنظمة",
    desc: "مسارات بيانات متزامنة لربط أنظمة ERP و CRM",
    file: "integrations/bridge.ts",
    lang: "typescript",
    code: STEPS_EN[1].code,
  },
  {
    num: "03",
    title: "الأتمتة والذكاء الاصطناعي",
    desc: "أتمتة ذكية ومسارات عمل ذاتية التنفيذ",
    file: "workflows/ai-agent.ts",
    lang: "typescript",
    code: STEPS_EN[2].code,
  },
  {
    num: "04",
    title: "الحصانة والدرع الأمني",
    desc: "حماية مستمرة وتحصين شامل للسحابة",
    file: "security/shield.ts",
    lang: "typescript",
    code: STEPS_EN[3].code,
  },
]

function CodeLine({ line }: { line: any }) {
  if (line.type === "gap") return <div className="h-3" />
  if (line.type === "comment") return <div className="text-[#9ca3af]">{line.text}</div>
  if (line.type === "output") return <div className="text-[#6b7280]">{line.text}</div>
  if (line.type === "success") return <div className="text-[#000823] font-medium">{line.text}</div>
  if (line.type === "url") return <div className="text-[#000823] underline">{line.text}</div>
  if (line.type === "command") return (
    <div>
      <span className="text-[#000823]">$ </span>
      <span className="text-[#000823]">{line.text}</span>
    </div>
  )
  if (line.type === "plain") return <div className="text-[#000823]">{line.text}</div>
  if (line.type === "prop") return (
    <div>
      <span className="text-[#000823]">{line.key}</span>
      <span className="text-[#000823]">: </span>
      <span className="text-[#000823]/80">{line.val}</span>
      <span className="text-[#000823]">,</span>
    </div>
  )
  if (line.type === "keyword") return (
    <div>
      <span className="text-[#000823] font-medium">{line.text}</span>
      <span className="text-[#000823]">{line.after}</span>
      <span className="text-[#000823] font-medium">{line.keyword2}</span>
      {line.keyword3 && <span className="text-[#000823] font-medium">{line.keyword3}</span>}
      {line.fn && <span className="text-[#000823]">{line.fn}</span>}
      {line.args && <span className="text-[#000823]">{line.args}</span>}
      {line.string && <span className="text-[#000823]/90">{line.string}</span>}
    </div>
  )
  return null
}

interface DevExSectionProps {
  lang?: "en" | "ar"
}

export function DevExSection({ lang = "en" }: DevExSectionProps) {
  const isAr = lang === "ar"
  const STEPS = isAr ? STEPS_AR : STEPS_EN
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  function selectStep(i: number) {
    if (i === active) return
    setVisible(false)
    setTimeout(() => {
      setActive(i)
      setVisible(true)
    }, 180)
  }

  // Auto-advance every 3.2s
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActive(prev => (prev + 1) % STEPS.length)
        setVisible(true)
      }, 180)
    }, 3200)
    return () => clearInterval(t)
  }, [STEPS.length])

  const step = STEPS[active]

  return (
    <section id="devex" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.06] text-[10px] tracking-widest text-[#000823]/60 uppercase font-medium">
            {isAr ? "هندسة ومعمارية الحلول" : "SOLUTIONS ARCHITECTURE"}
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
            {isAr ? (
              <>مصممة للأداء الفائق.<br />مهندسة للتوسع الرقمي اللامحدود.</>
            ) : (
              <>Built for performance.<br />Engineered for scale.</>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
          {/* Left — 4 clickable step cards */}
          <div className="flex flex-col gap-3">
            {STEPS.map((s, i) => (
              <button
                key={s.num}
                onClick={() => selectStep(i)}
                className={`flex-1 ${isAr ? "text-right" : "text-left"} rounded-2xl border transition-all duration-200 p-6 group cursor-pointer`}
                style={{
                  background: active === i ? "rgba(0,8,35,0.05)" : "rgba(255,255,255,0.7)",
                  borderColor: active === i ? "rgba(0,8,35,0.3)" : "rgba(0,0,0,0.06)",
                  boxShadow: active === i
                    ? "0 1px 3px rgba(0,8,35,0.08)"
                    : "0 1px 2px rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-light shrink-0 transition-colors duration-200"
                    style={{
                      background: active === i ? "rgba(0,8,35,0.15)" : "rgba(0,0,0,0.04)",
                      color: active === i ? "#000823" : "rgba(0,8,35,0.4)",
                      fontWeight: active === i ? 600 : 400,
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-sm transition-colors duration-200"
                      style={{ color: active === i ? "#000823" : "rgba(0,8,35,0.7)", fontWeight: active === i ? 600 : 400 }}
                    >
                      {s.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(0,8,35,0.45)" }}>{s.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right — fixed-size code panel */}
          <div
            className="lg:col-span-2 rounded-2xl border border-black/[0.06] p-8 flex flex-col"
            style={{
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              minHeight: "360px",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5 shrink-0">
              <div
                className="text-[10px] tracking-widest uppercase transition-all duration-200 font-mono"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 200ms ease, filter 200ms ease",
                  color: "#000823",
                }}
              >
                {step.file}
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2].map(d => (
                  <div
                    key={d}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: d === active % 3 ? "#000823" : "rgba(0,8,35,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Code block */}
            <div className="flex-1 rounded-xl p-6 overflow-hidden" style={{ background: "rgba(0,8,35,0.02)", border: "1px solid rgba(0,8,35,0.06)", direction: "ltr", textAlign: "left" }}>
              <div
                className="font-mono text-[12px] leading-6"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(6px)",
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 220ms cubic-bezier(0.16,1,0.3,1), filter 220ms cubic-bezier(0.16,1,0.3,1), transform 220ms cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {step.code.map((line, i) => (
                  <CodeLine key={i} line={line} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

