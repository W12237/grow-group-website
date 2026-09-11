export interface CaseStudyItem {
  id: string
  sectorId: "marketing" | "tech" | "ai" | "system-integrator-cybersecurity" | "hub"
  sectorName: string
  sectorNameAr: string
  clientIndustry: string
  clientIndustryAr: string
  title: string
  titleAr: string
  challenge: string
  challengeAr: string
  solution: string
  solutionAr: string
  servicesProvided: string[]
  servicesProvidedAr: string[]
  technologyUsed: string[]
  measurableResult: string
  measurableResultAr: string
  metricsBadge: string
  accentColor: string
}

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "marketing-direct-to-consumer",
    sectorId: "marketing",
    sectorName: "Marketing & Branding",
    sectorNameAr: "التسويق وبناء العلامات",
    clientIndustry: "Regional Premium Retail & Lifestyle Brand",
    clientIndustryAr: "قطاع التجزئة والعلامات التجارية الراقية",
    title: "Brand Repositioning and Performance Acquisition Overhaul",
    titleAr: "إعادة تموضع العلامة التجارية وتحديث منظومة الاستحواذ الرقمي",
    challenge: "A heritage regional retail brand faced brand fatigue, high customer acquisition costs across digital channels, and declining store-to-online conversion rates amid fierce international competition.",
    challengeAr: "واجهت علامة تجارية إقليمية عريقة تراجعاً في جاذبية الهوية وارتفاعاً كبيراً في تكلفة اكتساب العملاء الرقمية وضعف التحويل بين الفروع والمتجر الإلكتروني.",
    solution: "Growl Marketing & Branding engineered a unified brand architecture, overhauled the visual identity guidelines, and rolled out a data-led multi-touch acquisition strategy across Meta, Google Search, and localized OOH media.",
    solutionAr: "صممت جرول للتسويق معمارية متكاملة للعلامة، وحدّثت دليل الهوية البصرية، وأطلقت استراتيجية استحواذ تعتمد على تتبع العائد عبر ميتا، إعلانات جوجل، والوسائط الخارجية.",
    servicesProvided: [
      "Brand Strategy & Positioning",
      "Visual Identity System",
      "Paid Performance Campaigns",
      "Creative Production & Motion",
      "Conversion Tracking Setup",
    ],
    servicesProvidedAr: [
      "استراتيجية وتموضع العلامة",
      "نظام الهوية البصرية المتكامل",
      "حملات الاستحواذ المدفوعة",
      "الإنتاج الإبداعي والموشن جرافيكس",
      "إعداد أنظمة تتبع التحويل",
    ],
    technologyUsed: ["Meta CAPI", "Google Ads", "GA4", "Figma", "Adobe After Effects", "Shopify Plus"],
    measurableResult: "4.8x Return on Ad Spend (ROAS) and a 62% reduction in blended Customer Acquisition Cost within 90 days of rollout.",
    measurableResultAr: "تحقيق عائد 4.8x على الإنفاق الإعلاني (ROAS) وخفض تكلفة اكتساب العميل بنسبة 62% خلال أول 90 يوماً.",
    metricsBadge: "4.8x ROAS",
    accentColor: "#E5389A",
  },
  {
    id: "tech-enterprise-portal",
    sectorId: "tech",
    sectorName: "Tech",
    sectorNameAr: "التقنية وهندسة البرمجيات",
    clientIndustry: "Multi-Entity Logistics & Supply Chain Group",
    clientIndustryAr: "مجموعة لوجستيات وسلاسل إمداد متعددة الشركات",
    title: "Mission-Critical Dispatch Platform and Cross-Platform Fleet App",
    titleAr: "منصة إدارة وتوجيه الشحنات الحرجة وتطبيق الهواتف الموحد للأسطول",
    challenge: "A multi-country transport operator was constrained by legacy desktop dispatch software, manual spreadsheet reporting, and intermittent network outages across transit hubs.",
    challengeAr: "عانت شركة نقل دولية من تقادم برمجيات التوجيه المكتبية، والاعتماد اليدوي على الجداول، وانقطاع الاتصال المتكرر في محطات العبور والمستودعات.",
    solution: "Growl Tech engineered a high-concurrency Next.js dispatch platform alongside offline-first native mobile applications in Flutter, backed by resilient Go microservices and event-driven Apache Kafka brokers.",
    solutionAr: "طوّرت جرول للتقنية منصة توجيه سحابية فائقة السرعة بـ Next.js وتطبيقات هواتف ذكية تدعم العمل دون إنترنت بـ Flutter، مع خدمات مصغرة بلغة Go و Apache Kafka.",
    servicesProvided: [
      "Solution Architecture",
      "Cross-Platform Mobile App",
      "Enterprise Web Dashboard",
      "Event-Driven Microservices",
      "CI/CD Pipeline Automation",
    ],
    servicesProvidedAr: [
      "معمارية الحلول المؤسسية",
      "تطبيقات الهواتف الذكية",
      "لوحات تحكم الويب المؤسسية",
      "خدمات برمجية مصغرة موجهة بالأحداث",
      "أتمتة خطوط النشر CI/CD",
    ],
    technologyUsed: ["Next.js", "Flutter", "Go", "PostgreSQL", "Apache Kafka", "Docker", "AWS"],
    measurableResult: "99.99% system availability under 15,000 concurrent fleet telemetry events per second with sub-50ms round-trip latency.",
    measurableResultAr: "استقرار تشغيلي بنسبة 99.99% تحت ضغط 15,000 إشارة تتبع متزامنة في الثانية وزمن استجابة أقل من 50 ميلي ثانية.",
    metricsBadge: "99.99% Uptime",
    accentColor: "#FF7A00",
  },
  {
    id: "ai-document-pipeline",
    sectorId: "ai",
    sectorName: "AI",
    sectorNameAr: "الذكاء الاصطناعي والأتمتة",
    clientIndustry: "Commercial Banking & Trade Finance",
    clientIndustryAr: "المصارف التجارية وتمويل التجارة الدولية",
    title: "Autonomous Trade Finance Document Processing and KYC Verification Agent",
    titleAr: "وكيل ذكي مؤتمت لمعالجة اعتمادات التجارة والتحقق من وثائق اعرف عميلك (KYC)",
    challenge: "Operations officers reviewed more than 2,500 unstructured trade finance letters of credit and bill of lading documents weekly, causing 48-hour approval turnaround delays.",
    challengeAr: "راجع موظفو العمليات أكثر من 2,500 مستند اعتماد مستندي وبوالص شحن غير مهيكلة أسبوعياً، ما سبب تأخيراً يصل إلى 48 ساعة في اعتمادات التمويل.",
    solution: "Growl AI deployed a deterministic agentic pipeline powered by Claude 3.5 Sonnet and private n8n orchestration, extracting line items into core banking ledgers with human-in-the-loop review queues.",
    solutionAr: "نشرت جرول للذكاء الاصطناعي مسار وكلاء أذكياء يعتمد Claude 3.5 Sonnet وأتمتة n8n في بيئة خاصة، لاستخراج البيانات ومطابقتها مع إبقاء الرقابة البشرية للحالات المعقدة.",
    servicesProvided: [
      "Intelligent Document Processing",
      "Deterministic Agentic Workflows",
      "Self-Hosted n8n Orchestration",
      "Core Banking Ledger Integration",
      "Human Approval Interface",
    ],
    servicesProvidedAr: [
      "معالجة الوثائق الذكية",
      "مسارات وكلاء حاسمة وموجهة",
      "إدارة مسارات n8n على خوادم خاصة",
      "تكامل مع دفاتر الحسابات المصرفية",
      "واجهات اعتماد ومراجعة بشرية",
    ],
    technologyUsed: ["Claude 3.5 Sonnet", "n8n Self-Hosted", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    measurableResult: "Reduced document extraction and cross-check cycle time from 48 hours to under 4 minutes with 99.4% field accuracy.",
    measurableResultAr: "تقليص زمن معالجة ومطابقة المستندات من 48 ساعة إلى أقل من 4 دقائق مع دقة استخراج بلغت 99.4%.",
    metricsBadge: "92% Time Saved",
    accentColor: "#0FCFC0",
  },
  {
    id: "cybersecurity-zero-trust-dc",
    sectorId: "system-integrator-cybersecurity",
    sectorName: "System Integrator & Cybersecurity",
    sectorNameAr: "تكامل الأنظمة والأمن السيبراني",
    clientIndustry: "Government Contractor & Critical Infrastructure Facility",
    clientIndustryAr: "منشأة بنية تحتية ومقاولات حكومية حساسة",
    title: "Zero-Trust Perimeter Hardening, SD-WAN, and Private Datacenter Virtualization",
    titleAr: "تحصين أمني بمعمارية Zero-Trust وشبكات SD-WAN وافتراضية مراكز البيانات",
    challenge: "The organization faced strict national cybersecurity compliance mandates requiring full network segmentation across 8 field facilities, immutable off-site backups, and tender-ready infrastructure renewals.",
    challengeAr: "طُلِب من المنشأة الالتزام بضوابط أمن سيبراني وطنية صارمة تقتضي عزل الشبكات عبر 8 مواقع جغرافية ونسخ احتياطي منيع وتحديث بنية المناقصات.",
    solution: "Growl System Integrator & Cybersecurity engineered a redundant FortiGate Next-Gen Firewall cluster with FortiSwitch access control, SD-WAN interconnection, Dell PowerEdge server virtualization, and air-gapped Veeam backups.",
    solutionAr: "صممت جرول لتكامل الأنظمة مصفوفة جدران حماية FortiGate مزدوجة ومحولات FortiSwitch وشبكات SD-WAN مع افتراضية خوادم ديل ونسخ احتياطي معزول بـ Veeam.",
    servicesProvided: [
      "Assessment & Solution Architecture",
      "Bill of Quantities (BOQ) Specification",
      "Product Supply & On-Site Installation",
      "Zero-Trust Network Segmentation",
      "Veeam Disaster Recovery & Handover",
    ],
    servicesProvidedAr: [
      "التقييم الفني ومعمارية الحلول",
      "إعداد جداول الكميات والمواصفات (BOQ)",
      "توريد التجهيزات والتركيب الميداني",
      "عزل وتقسيم الشبكات بمعيار Zero-Trust",
      "خطط التعافي من الكوارث والتسليم",
    ],
    technologyUsed: ["Fortinet FortiGate", "FortiSwitch", "Cisco SD-WAN", "Dell PowerEdge", "VMware vSphere", "Veeam"],
    measurableResult: "100% compliance audit clearance on first submission with zero critical vulnerability findings and 15-minute complete DR recovery RTO.",
    measurableResultAr: "اجتياز تدقيق الامتثال الأمني بنسبة 100% من المحاولة الأولى مع زمن استرجاع كامل للأنظمة (RTO) في 15 دقيقة فقط.",
    metricsBadge: "100% Audit Pass",
    accentColor: "#DA291C",
  },
  {
    id: "hub-agency-scaling",
    sectorId: "hub",
    sectorName: "Hub",
    sectorNameAr: "منصة جرول هب",
    clientIndustry: "Independent Digital Agency Network (120+ Staff)",
    clientIndustryAr: "شبكة وكالات رقمية مستقلة (أكثر من 120 موظف)",
    title: "Multi-Branch Operations Consolidation into Growl Hub Subscription",
    titleAr: "توحيد العمليات متعددة الفروع عبر الاشتراك بمنصة Growl Hub",
    challenge: "The agency juggled 6 disconnected SaaS tools for client CRM, project tickets, contractor timesheets, and invoicing, leading to untracked billing leakage and administrative drag.",
    challengeAr: "استخدمت الوكالة 6 أدوات برمجية منفصلة لإدارة العملاء والمشاريع وساعات العمل والفواتير، ما تسبب في تسرب مالي وصعوبة متابعة هوامش الربحية.",
    solution: "Transitioned all 3 regional branches to Growl Hub under a consolidated annual subscription, centralizing client portals, automated milestone invoicing with Stripe, and real-time team utilization telemetry.",
    solutionAr: "تم نقل فروع الوكالة الثلاثة إلى منصة Growl Hub باشتراك سنوي موحد، ما وفّر بوابات عملاء مخصصة وفواتير آلية عبر Stripe ومتابعة مباشرة لإنتاجية الفرق.",
    servicesProvided: [
      "Multi-Branch Onboarding",
      "Client CRM Migration",
      "Automated Milestone Invoicing",
      "Staff Utilization Telemetry",
      "White-Label Client Portals",
    ],
    servicesProvidedAr: [
      "إعداد وتهيئة الفروع المتعددة",
      "ترحيل بيانات عملاء الـ CRM",
      "أتمتة فواتير المراحل والمشاريع",
      "لوحات متابعة كفاءة الكوادر",
      "بوابات عملاء بعلامة الوكالة الخاصة",
    ],
    technologyUsed: ["Growl Hub Core", "Stripe Connect", "Google Workspace Sync", "Slack Webhooks", "PostgreSQL"],
    measurableResult: "Eliminated $42,000/year in redundant SaaS licenses and increased billable hour realization by 18% across 45 concurrent client accounts.",
    measurableResultAr: "إلغاء 42,000 دولار سنوياً من تكاليف الاشتراكات المزدوجة ورفع نسبة الساعات القابلة للفوترة بنسبة 18% عبر 45 عميلاً.",
    metricsBadge: "+18% Yield",
    accentColor: "#1F6FEB",
  },
]
