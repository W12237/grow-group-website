"use client"

import { useEffect, useState, useRef } from "react"

const MODULE_NAMES = [
  "growl-engine", "growl-bridge", "growl-automator", "growl-shield",
  "growl-crm-sync", "growl-ads-opt", "growl-sec-audit", "growl-api-gw",
  "growl-erp-hub", "growl-doc-ai",
]

const TASKS_EN = [
  "Syncing ERP orders with Shopify store",
  "Running automated cloud security assessment",
  "Parsing supplier invoice PDF → PostgreSQL DB",
  "Optimizing multi-channel ad campaign ROAS",
  "Executing automated lead qualification sequence",
  "Processing real-time payment webhook events",
  "Deploying custom CRM data connector",
  "Monitoring API latency across 8 edge regions",
  "Hardening cloud firewall & IAM access policies",
  "Automating customer support ticket triage",
  "Generating real-time business performance dashboard",
  "Synchronizing multi-warehouse inventory levels",
]

const TASKS_AR = [
  "مزامنة طلبات ERP مع منصة التجارة الإلكترونية",
  "تدقيق وفحص أمني مستمر للبنية التحتية السحابية",
  "معالجة واستخراج بيانات الفواتير آلياً بقواعد البيانات",
  "تحسين خوارزميات الحملات الإعلانية ومعدل العائد (ROAS)",
  "تأهيل وفرز العملاء المحتملين آلياً في مسار المبيعات",
  "معالجة أحداث بوابات الدفع والتسوية المالية اللحظية",
  "تشغيل موصل البيانات المخصص لنظام CRM المؤسسي",
  "مراقبة زمن استجابة واجهات APIs عبر السحابة الموزعة",
  "تحصين جدران الحماية وإدارة صلاحيات الهوية (IAM)",
  "أتمتة توجيه ومعالجة تذاكر الدعم الفني بالذكاء الاصطناعي",
  "توليد تقارير وتحليلات الأداء اللحظية للأعمال",
  "مزامنة أرصدة المخزون عبر المستودعات المتعددة فورياً",
]

const REGIONS = ["us-east", "eu-west", "ap-south", "us-west", "me-central"]
const STATUSES = [
  { label: "running",  labelAr: "نشط",     color: "#000823" },
  { label: "running",  labelAr: "نشط",     color: "#000823" },
  { label: "synced",   labelAr: "متزامن",  color: "#4ade80" },
  { label: "queued",   labelAr: "بالانتظار",color: "#facc15" },
  { label: "secured",  labelAr: "محمي",    color: "#B1A5F9" },
]

type AgentRow = {
  id: string
  name: string
  task: string
  region: string
  status: typeof STATUSES[number]
  progress: number
  elapsed: string
  key: number
}

function randomRow(key: number, isAr: boolean): AgentRow {
  const tasks = isAr ? TASKS_AR : TASKS_EN
  return {
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    name: MODULE_NAMES[Math.floor(Math.random() * MODULE_NAMES.length)],
    task: tasks[Math.floor(Math.random() * tasks.length)],
    region: REGIONS[Math.floor(Math.random() * REGIONS.length)],
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    progress: Math.floor(Math.random() * 85 + 10),
    elapsed: `${Math.floor(Math.random() * 14 + 1)}m ${Math.floor(Math.random() * 59)}s`,
    key,
  }
}

// Animated progress bar that slowly ticks forward
function ProgressBar({ initial }: { initial: number }) {
  const [pct, setPct] = useState(initial)
  const rafRef = useRef<number>(0)
  const pctRef = useRef(initial)

  useEffect(() => {
    const tick = () => {
      pctRef.current = Math.min(99, pctRef.current + 0.015)
      setPct(Math.round(pctRef.current))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div style={{ width: "100%", height: 2, background: "rgba(0,0,0,0.08)", borderRadius: 9 }}>
      <div style={{
        height: "100%", borderRadius: 9,
        width: `${pct}%`,
        background: "#000823",
        transition: "width 0.5s linear",
      }} />
    </div>
  )
}

const SEED_ROWS_EN: AgentRow[] = [
  { id: "GW101", name: "growl-bridge",     task: "Syncing ERP orders with Shopify store",           region: "us-east",    status: STATUSES[0], progress: 68, elapsed: "3m 12s", key: 0 },
  { id: "GW102", name: "growl-sec-audit",  task: "Running automated cloud security assessment",     region: "eu-west",    status: STATUSES[4], progress: 92, elapsed: "7m 48s", key: 1 },
  { id: "GW103", name: "growl-doc-ai",     task: "Parsing supplier invoice PDF → PostgreSQL DB",    region: "us-west",    status: STATUSES[0], progress: 45, elapsed: "1m 05s", key: 2 },
  { id: "GW104", name: "growl-ads-opt",    task: "Optimizing multi-channel ad campaign ROAS",       region: "me-central", status: STATUSES[2], progress: 88, elapsed: "5m 30s", key: 3 },
  { id: "GW105", name: "growl-engine",     task: "Processing real-time payment webhook events",      region: "ap-south",   status: STATUSES[0], progress: 79, elapsed: "11m 22s", key: 4 },
  { id: "GW106", name: "growl-shield",     task: "Hardening cloud firewall & IAM access policies",  region: "us-east",    status: STATUSES[4], progress: 99, elapsed: "14m 01s", key: 5 },
]

const SEED_ROWS_AR: AgentRow[] = [
  { id: "GW101", name: "growl-bridge",     task: "مزامنة طلبات ERP مع المتجر الإلكتروني",             region: "us-east",    status: STATUSES[0], progress: 68, elapsed: "3m 12s", key: 0 },
  { id: "GW102", name: "growl-sec-audit",  task: "فحص وتقييم أمني مستمر للبنية السحابية",          region: "eu-west",    status: STATUSES[4], progress: 92, elapsed: "7m 48s", key: 1 },
  { id: "GW103", name: "growl-doc-ai",     task: "معالجة فواتير الموردين تلقائياً إلى قاعدة البيانات", region: "us-west",    status: STATUSES[0], progress: 45, elapsed: "1m 05s", key: 2 },
  { id: "GW104", name: "growl-ads-opt",    task: "تحسين أداء الحملات الإعلانية ومعدل العائد",        region: "me-central", status: STATUSES[2], progress: 88, elapsed: "5m 30s", key: 3 },
  { id: "GW105", name: "growl-engine",     task: "معالجة أحداث بوابات الدفع اللحظية",              region: "ap-south",   status: STATUSES[0], progress: 79, elapsed: "11m 22s", key: 4 },
  { id: "GW106", name: "growl-shield",     task: "تحصين جدران الحماية وإدارة الصلاحيات",           region: "us-east",    status: STATUSES[4], progress: 99, elapsed: "14m 01s", key: 5 },
]

interface LiveAgentFeedProps {
  lang?: "en" | "ar"
}

export function LiveAgentFeed({ lang = "en" }: LiveAgentFeedProps) {
  const isAr = lang === "ar"
  const [rows, setRows] = useState<AgentRow[]>(isAr ? SEED_ROWS_AR : SEED_ROWS_EN)
  const keyRef = useRef(100)

  useEffect(() => {
    setRows(Array.from({ length: 6 }, (_, i) => randomRow(i, isAr)))

    const t = setInterval(() => {
      keyRef.current++
      setRows(prev => [...prev.slice(1), randomRow(keyRef.current, isAr)])
    }, 2800)
    return () => clearInterval(t)
  }, [isAr])

  const headers = isAr
    ? ["المنظومة", "العملية الرقمية", "المنطقة", "الحالة"]
    : ["MODULE", "OPERATION", "REGION", "STATUS"]

  return (
    <div style={{
      border: "1px solid rgba(0,8,35,0.08)",
      borderRadius: 16,
      overflow: "hidden",
      background: "rgba(255,255,255,0.75)",
    }}>
      {/* Table header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "90px 1fr 80px 75px",
        padding: "8px 16px",
        borderBottom: "1px solid rgba(0,8,35,0.06)",
        background: "rgba(0,8,35,0.03)",
      }}>
        {headers.map(h => (
          <span key={h} style={{ fontSize: 8, letterSpacing: "0.14em", color: "rgba(0,8,35,0.40)", fontFamily: "monospace", fontWeight: 600 }}>{h}</span>
        ))}
      </div>

      {/* Rows */}
      <div style={{ overflow: "hidden" }}>
        {rows.map((row, i) => (
          <div
            key={row.key}
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 80px 75px",
              padding: "10px 16px",
              borderBottom: "1px solid rgba(0,8,35,0.04)",
              gap: 8,
              alignItems: "center",
              animation: i === rows.length - 1 ? "rowSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both" : "none",
            }}
          >
            {/* System */}
            <div>
              <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(0,8,35,0.75)", marginBottom: 1, fontWeight: 500 }}>{row.name}</div>
              <div style={{ fontSize: 7.5, fontFamily: "monospace", color: "rgba(0,8,35,0.35)" }}>#{row.id}</div>
            </div>

            {/* Task + progress */}
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: 9, color: "rgba(0,8,35,0.65)", lineHeight: 1.35, marginBottom: 5,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{row.task}</div>
              <ProgressBar initial={row.progress} />
            </div>

            {/* Region */}
            <div style={{ fontSize: 8, fontFamily: "monospace", color: "rgba(0,8,35,0.40)" }}>{row.region}</div>

            {/* Status */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: row.status.color,
                boxShadow: `0 0 6px ${row.status.color}`,
                animation: "statusPulse 2s ease-in-out infinite",
                flexShrink: 0,
              }} />
              <span style={{ fontSize: 8, fontFamily: "monospace", color: "rgba(0,8,35,0.50)" }}>
                {isAr ? row.status.labelAr : row.status.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

export function LiveAgentCounter() {
  const [count, setCount] = useState(8420)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setInterval(() => {
      setCount(v => v + Math.floor(Math.random() * 3 + 1))
    }, 1200)
    return () => clearInterval(t)
  }, [])

  return (
    <span style={{
      fontFamily: "monospace",
      fontSize: "clamp(3rem, 6vw, 5rem)",
      fontWeight: 300,
      color: "#000823",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      transition: "color 0.3s ease",
    }}>
      {mounted ? count.toLocaleString("en-US") : "8,420"}
    </span>
  )
}

