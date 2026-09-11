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

const ACCENT = "#DA291C"
const TINT = "#F1ACA7"

const FOUR_PILLARS = [
  {
    title: "Security",
    titleAr: "الأمن السيبراني وحماية الشبكات",
    desc: "Certified next-generation firewall fabrics, endpoint protection, zero-trust network access, and continuous threat monitoring.",
    descAr: "جدران حماية معتمدة، حماية النقاط الطرفية، شبكات انعدام الثقة (ZTNA)، ومراقبة مستمرة للتهديدات السيبرانية.",
    items: [
      "Firewalls & Next-Gen Fabrics",
      "Endpoint Security & EDR",
      "Email Security & Anti-Phishing",
      "Secure Access & ZTNA",
      "SOC Integration & Telemetry",
      "Threat Monitoring & Audits",
    ],
    itemsAr: [
      "جدران حماية الجيل القادم (NGFW)",
      "أمن النقاط الطرفية والأجهزة (EDR)",
      "أمن البريد الإلكتروني والحماية من التصيد",
      "الوصول الآمن والشبكات منعدمة الثقة (ZTNA)",
      "التكامل مع مراكز العمليات الأمنية (SOC)",
      "مراقبة التهديدات والفحص الأمني المستمر",
    ],
  },
  {
    title: "Network",
    titleAr: "الشبكات والربط المؤسسي",
    desc: "Carrier-grade enterprise switching, routing, resilient SD-WAN interconnections, and high-density campus wireless.",
    descAr: "محولات شبكية عالية الاعتمادية، موجهات متقدمة، ربط الفروع عبر SD-WAN، وشبكات لاسلكية متطورة.",
    items: [
      "Switching (Core, Distribution & Access)",
      "Routing & BGP Interconnects",
      "Enterprise Wireless (Wi-Fi 6/7)",
      "SD-WAN Mesh Architecture",
      "Branch Connectivity & VPNs",
      "Continuous Network Monitoring",
    ],
    itemsAr: [
      "محولات الشبكات الأساسية والتوزيعية",
      "الموجهات المؤسسية وبروتوكولات الربط",
      "الشبكات اللاسلكية عالية الكثافة (Wi-Fi 6/7)",
      "معمارية شبكات الفروع (SD-WAN)",
      "ربط الفروع والأنفاق الآمنة المشفرة",
      "المراقبة المستمرة لجودة نقل البيانات",
    ],
  },
  {
    title: "VoIP & Collaboration",
    titleAr: "الاتصالات الموحدة وغرف الاجتماعات",
    desc: "Enterprise IP telephony architectures, certified Microsoft Teams meeting rooms, and intelligent contact center integrations.",
    descAr: "معمارية الاتصال الصوتي المؤسسي، تجهيز قاعات الاجتماعات الذكية المعتمدة لـ Teams، وحلول مراكز الاتصال.",
    items: [
      "Unified Communications (UCaaS)",
      "Contact Centre Platforms",
      "IP Telephony & PBX",
      "Video Conferencing Equipment",
      "Microsoft Teams Integration",
      "Acoustic Collaboration Rooms",
    ],
    itemsAr: [
      "الاتصالات الموحدة الشاملة (UCaaS)",
      "منصات مراكز الاتصال وخدمة العملاء",
      "مقاسم وشبكات الهاتف عبر بروتوكول IP",
      "أجهزة المؤتمرات المرئية والشاشات الذكية",
      "التكامل المعتمد مع Microsoft Teams",
      "تجهيز غرف الاجتماعات ومجالس الإدارة صوتياً",
    ],
  },
  {
    title: "Data Centre",
    titleAr: "مراكز البيانات والسحابة الخاصة",
    desc: "High-density enterprise server compute, SAN/NAS storage, virtualization fabrics, and immutable disaster recovery replication.",
    descAr: "خوادم حوسبة مركزية، مصفوفات تخزين ضخمة، حوسبة افتراضية، ونسخ احتياطي منيع للتعافي من الكوارث.",
    items: [
      "Enterprise Compute Servers",
      "SAN & NAS Storage Arrays",
      "Virtualization Fabrics (vSphere/Proxmox)",
      "Immutable Air-Gapped Backup",
      "Disaster Recovery (RTO & RPO)",
      "Business Continuity Planning",
    ],
    itemsAr: [
      "خوادم مراكز البيانات عالية الكثافة",
      "مصفوفات التخزين المؤسسية SAN و NAS",
      "الأنظمة الافتراضية وإدارة الموارد",
      "النسخ الاحتياطي المعزول والمنيع",
      "خطط التعافي من الكوارث (RTO/RPO)",
      "استمرارية الأعمال دون انقطاع",
    ],
  },
]

const NINE_STAGE_DELIVERY = [
  { number: "01", title: "Site Assessment", titleAr: "المعاينة والتقييم الميداني", description: "On-site infrastructure inspection, cable tracing, rack capacity audits, and power/cooling checks.", descriptionAr: "معاينة هندسية ميدانية، فحص كابلات الشبكة، كفاءة كبائن الخوادم، والطاقة والتبريد." },
  { number: "02", title: "Solution Architecture", titleAr: "المعمارية والتصميم الهندسي", description: "Designing network topologies, zero-trust security zoning, bandwidth planning, and disaster recovery blueprints.", descriptionAr: "تصميم مخططات الشبكة المعتمدة، تقسيم مناطق الأمان، وحساب متطلبات النطاق الترددي." },
  { number: "03", title: "Bill of Quantities (BoQ)", titleAr: "إعداد جدول الكميات (BoQ)", description: "Line-by-line tender-ready hardware bills with exact OEM part numbers, optics, and manufacturer warranties.", descriptionAr: "إعداد جدول كميات معتمد للمناقصات بأرقام القطع الأصلية والمواصفات الدقيقة." },
  { number: "04", title: "Vendor Selection", titleAr: "اختيار واعتماد الموردين", description: "Evaluating certified hardware manufacturers based on lead times, enterprise warranty SLAs, and pricing.", descriptionAr: "مفاضلة واختيار المصنعين المعتمدين بناءً على سرعة التوريد، والضمان، وأفضل تكلفة." },
  { number: "05", title: "Installation", titleAr: "التركيب والتمديد الميداني", description: "Structured cabling, professional rack mounting, patch panel termination, and neat cable dressing.", descriptionAr: "تمديد الكابلات الهيكلية، تركيب الأجهزة بالكبائن، وترقيم وتنسيق التوصيلات بمعايير دولية." },
  { number: "06", title: "Configuration", titleAr: "البرمجة وضبط الإعدادات", description: "Firewall rule deployment, VLAN segmentation, routing protocols, and access policy provisioning.", descriptionAr: "برمجة جدران الحماية، تقسيم شبكات الـ VLAN، ضبط بروتوكولات التوجيه وسياسات الأمان." },
  { number: "07", title: "Testing", titleAr: "الفحص واختبارات الجهد", description: "Throughput benchmarks, failover simulation, penetration testing, and uninterrupted power tests.", descriptionAr: "فحص سرعات النقل، محاكاة انقطاع الخطوط والتحويل التلقائي، واختبارات الأمان واختبار الجهد." },
  { number: "08", title: "Handover & Documentation", titleAr: "التسليم والتوثيق الهندسي", description: "As-built network diagrams, asset registers, configuration backups, and engineering training sign-off.", descriptionAr: "تسليم المخططات الهندسية النهائية As-Built، وسجل الأصول، ونسخ الإعدادات الاحتياطية، وتدريب الفريق." },
  { number: "09", title: "Support & Renewals", titleAr: "الدعم الفني وتجديد الرخص", description: "Proactive SLA management, regular firmware security updates, 24/7 on-site dispatch, and renewal tracking.", descriptionAr: "إدارة مستوى الخدمة SLA، تحديثات البرمجيات الأمنية، دعم فني ميداني، ومتابعة تجديد التراخيص." },
]

const VENDOR_ECOSYSTEM_CATEGORIES = [
  {
    category: "Security",
    categoryAr: "حلول الأمن السيبراني",
    items: [
      { name: "Fortinet", detail: "FortiGate NGFW & Security Fabric", relationship: "Vendor Ecosystem" },
      { name: "Palo Alto Networks", detail: "Next-Generation Enterprise Edge", relationship: "Vendor Ecosystem" },
      { name: "Cloudflare", detail: "DDoS Mitigation & Zero Trust Edge", relationship: "Infrastructure" },
    ],
  },
  {
    category: "Networking",
    categoryAr: "الشبكات المؤسسية",
    items: [
      { name: "Cisco Systems", detail: "Catalyst Switches & ISR Routing", relationship: "Vendor Ecosystem" },
      { name: "Aruba / HPE", detail: "Enterprise Campus Wi-Fi 6 & Switching", relationship: "Vendor Ecosystem" },
    ],
  },
  {
    category: "Collaboration",
    categoryAr: "الاتصالات وغرف الاجتماع",
    items: [
      { name: "Microsoft Teams Rooms", detail: "Certified Hybrid Meeting Integrations", relationship: "Integrates With" },
      { name: "Poly / HP", detail: "Smart Video Bars & Executive Terminals", relationship: "Vendor Ecosystem" },
      { name: "Logitech Enterprise", detail: "Rally Systems & Tap Room Controllers", relationship: "Vendor Ecosystem" },
    ],
  },
  {
    category: "Servers & Storage",
    categoryAr: "الخوادم والتخزين المؤسسي",
    items: [
      { name: "Dell Technologies", detail: "PowerEdge Servers & PowerStore SAN", relationship: "Vendor Ecosystem" },
      { name: "Hewlett Packard Enterprise", detail: "ProLiant Compute & MSA Storage", relationship: "Vendor Ecosystem" },
    ],
  },
  {
    category: "Virtualization",
    categoryAr: "الأنظمة الافتراضية",
    items: [
      { name: "VMware by Broadcom", detail: "vSphere & vSAN Virtualization", relationship: "Platform Ecosystem" },
      { name: "Proxmox VE", detail: "Open Enterprise Virtualization", relationship: "Platform Ecosystem" },
    ],
  },
  {
    category: "Backup & Disaster Recovery",
    categoryAr: "النسخ الاحتياطي والتعافي من الكوارث",
    items: [
      { name: "Veeam Software", detail: "Enterprise Backup & Disaster Replication", relationship: "Vendor Ecosystem" },
      { name: "Acronis Cyber Protect", detail: "Immutable Cloud & On-Premise Backup", relationship: "Vendor Ecosystem" },
    ],
  },
]

export default function CybersecurityPage() {
  const { isAr } = useLanguage()
  const cyberCaseStudy = CASE_STUDIES_DATA.find((c) => c.sectorId === "system-integrator-cybersecurity") || CASE_STUDIES_DATA[0]

  return (
    <div
      className="bg-[#F8F8F8] text-[#000823] min-h-screen font-sans antialiased flex flex-col selection:bg-[#DA291C] selection:text-white"
    >
      <SiteHeader />

      <main className="flex-1">
        {/* 1. Sector Hero */}
        <SectorHero
          sectorSlug="system-integrator-cybersecurity"
          sectorNumber="04"
          sectorName="Growl System Integrator & Cybersecurity"
          sectorNameAr="جرول لتكامل الأنظمة والأمن السيبراني"
          headline="The Infrastructure Behind the Business"
          headlineAr="البنية التحتية الصلبة خلف استقرار الأعمال"
          description="Security, network, collaboration and data centre - vendor-certified, tender-ready, built to renew."
          descriptionAr="الأمن السيبراني، الشبكات المؤسسية، الاتصالات الموحدة ومراكز البيانات — متوافقة مع المناقصات ومصممة للاستدامة."
          accentColor={ACCENT}
          accentTint={TINT}
          heroImage="/images/sectors/cyber-hero.webp"
          heroImageAlt="Growl certified datacenter infrastructure and enterprise network racks"
          contextTag="VENDOR-CERTIFIED HARDWARE & ZERO-TRUST SECURITY"
          contextTagAr="تجهيزات معتمدة من المصنعين وأمان بمعيار انعدام الثقة"
          primaryCtaText="Request an Infrastructure Assessment"
          primaryCtaTextAr="طلب فحص وتقييم للبنية التحتية"
          primaryCtaHref="/contact"
          secondaryCtaText="Discuss a Security Project"
          secondaryCtaTextAr="ناقش مشروعاً أمنياً"
          secondaryHref="#pillars"
          isAr={isAr}
        />

        {/* 2. Credible Enterprise Overview */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionLabel>{isAr ? "القدرة الميدانية والهندسية" : "Engineering Discipline"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#000823] leading-tight">
                {isAr
                  ? "بنية تحتية صلبة جاهزة للمناقصات والتشغيل المستمر دون انقطاع."
                  : "Tender-compliant, carrier-grade enterprise infrastructure engineered to sustain peak operational demand."}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-[#000823]/75 text-base leading-relaxed">
              <p>
                {isAr
                  ? "يمتلك فريق تكامل الأنظمة والأمن السيبراني في جرول الخبرة الهندسية الميدانية لتصميم وتنفيذ كبرى مشاريع الشبكات المؤسسية، ومراكز البيانات، وحماية الحدود الرقمية للمؤسسات الحكومية والخاصة."
                  : "Growl System Integrator & Cybersecurity delivers audited, procurement-ready physical and network infrastructures. We engineer structured cabling, core data-centre switching, firewall perimeters, and unified conference room collaborations with strict adherence to manufacturer specifications."}
              </p>
              <p>
                {isAr
                  ? "نتجنب المبالغات التسويقية ونركز على الجاهزية العملية: جداول كميات (BoQ) مفصلة، واعتمادات رسمية من كبرى الشركات العالمية، وفحوصات أداء صارمة تضمن استدامة استثماركم وتجديد الرخص دون تعقيد."
                  : "Every deployment includes complete As-Built documentation, cable certifications, configuration backups, and multi-year support agreements backed directly by Growl Holding’s unified technical governance."}
              </p>
            </div>
          </div>
        </section>

        {/* 3. The Four Core Pillars */}
        <section id="pillars" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-[#000823]/[0.08] bg-[#F8F8F8]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16">
              <SectionLabel>{isAr ? "الركائز الأساسية الأربع" : "The Four Pillars"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr
                  ? "أربع ركائز هندسية متكاملة لحماية وتشغيل المؤسسة."
                  : "Four essential infrastructure disciplines under unified engineering governance."}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FOUR_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-white border border-[#000823]/[0.08] flex flex-col justify-between hover:border-[#DA291C]/50 hover:shadow-lg transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
                        style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}
                      >
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-[#000823]/40 uppercase tracking-wider">
                        Infrastructure Pillar
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#000823] mb-2 group-hover:text-[#DA291C] transition-colors">
                      {isAr ? pillar.titleAr : pillar.title}
                    </h3>

                    <p className="text-xs text-[#000823]/65 leading-relaxed mb-6 font-normal">
                      {isAr ? pillar.descAr : pillar.desc}
                    </p>

                    <div className="border-t border-[#000823]/[0.06] pt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(isAr ? pillar.itemsAr : pillar.items).map((item) => (
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

        {/* 4. Nine-Stage Delivery Lifecycle */}
        <SectorProcess
          headline="A structured nine-stage engineering and procurement lifecycle."
          headlineAr="منهجية تسليم هندسية منضبطة تشمل تسع مراحل من الفحص الميداني إلى التجديد."
          steps={NINE_STAGE_DELIVERY}
          accentColor={ACCENT}
          isAr={isAr}
        />

        {/* 5. Categorized Vendor Ecosystem */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-b border-[#000823]/[0.08]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <SectionLabel>{isAr ? "منظومة الموردين والعتاد" : "Vendor Ecosystem"}</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#000823]">
                {isAr ? "المنصات والتجهيزات المعتمدة التي ننفذها ونربطها" : "Platforms and Hardware We Deploy"}
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#000823]/70">
                {isAr
                  ? "نتعامل مع كبرى الشركات المصنعة المعتمدة دولياً لتوريد وتركيب وبرمجة حلول الشبكات والأمن وحفظ البيانات."
                  : "We deploy, configure, and maintain hardware and software platforms from certified global enterprise manufacturers."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VENDOR_ECOSYSTEM_CATEGORIES.map((cat, idx) => (
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
                        <span className="text-[11px] text-[#000823]/60 block">{item.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Case Study */}
        {cyberCaseStudy && (
          <SectorCaseStudies
            caseStudy={cyberCaseStudy}
            accentColor={ACCENT}
            isAr={isAr}
          />
        )}

        {/* 7. Sector FAQ */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F8F8] border-b border-[#000823]/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mb-12">
              <SectionLabel>{isAr ? "الأسئلة الهندسية الشائعة" : "Infrastructure & Security FAQ"}</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#000823]">
                {isAr ? "إجابات واضحة حول كراسات الشروط والضمان" : "Procurement, BoQ & Service Standards"}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "How do you handle Bill of Quantities (BoQ) and government RFP requirements?", qAr: "كيف يتم إعداد جداول الكميات (BoQ) واشتراطات المناقصات الرسمية؟", a: "Our certified engineers prepare comprehensive, tender-compliant BoQ documents with explicit manufacturer part numbers, power budgets, optical transceiver specifications, and warranty coverage terms matching public and private RFP criteria.", aAr: "يقوم مهندسونا بإعداد كراسات كميات دقيقة وشاملة بأرقام القطع الأصلية وحسابات استهلاك الطاقة وتفاصيل كابلات الألياف والضمان بما يطابق دفاتر شروط المناقصات الحكومية والخاصة." },
                { q: "Do you supply hardware only or provide end-to-end turnkey installation?", qAr: "هل يقتصر دوركم على التوريد أم تقدمون تنفيذاً هندسياً متكاملاً؟", a: "We provide complete turnkey delivery: from site surveys, structured cabling, rack installations, and firewall configuration to final testing, handover documentation, and ongoing maintenance renewals.", aAr: "نحن نقدم حلاً هندسياً شاملاً (Turnkey): المعاينة الميدانية، تمديد الكابلات، تركيب الأجهزة، وبرمجة جدران الحماية، والتوثيق الهندسي، وعقود الصيانة الدورية." },
                { q: "What emergency response SLAs are available for critical network outages?", qAr: "ما هي اتفاقيات مستوى الخدمة (SLA) للاستجابة الطارئة عند الأعطال؟", a: "Growl offers tailored enterprise maintenance agreements ranging from standard 8x5 next-business-day response to 24x7 mission-critical coverage with 4-hour on-site dispatch and spare hardware replacement.", aAr: "توفر جرول عقود صيانة ودعم مرنة تبدأ من 8x5 وحتى 24x7 للأعمال الحرجة مع وقت استجابة ميداني خلال 4 ساعات وتوفير أجهزة بديلة فورية." },
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
          headline="Plan the infrastructure your business depends on."
          headlineAr="خطط للبنية التحتية التي تعتمد عليها أعمالك واستقرارها"
          description="Schedule a technical site assessment or infrastructure architecture review with our vendor-certified engineers."
          descriptionAr="احجز معاينة ميدانية فنية أو جلسة استشارية مع مهندسينا المعتمدين لمراجعة شبكاتك وأمن بياناتك."
          primaryText="Request an Infrastructure Assessment"
          primaryTextAr="طلب فحص وتقييم للبنية التحتية"
          secondaryText="Discuss a Security Project"
          secondaryTextAr="ناقش مشروعاً أمنياً"
          secondaryHref="/contact"
          sectorSlug="system-integrator-cybersecurity"
          accentColor={ACCENT}
          accentTint={TINT}
          isAr={isAr}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
