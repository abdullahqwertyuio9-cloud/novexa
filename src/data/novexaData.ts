import { ServiceItem, PortfolioProject, ProcessStep, WhyNovexaPoint, FAQItem, TargetIndustry } from '../types';

export const COMPANY_INFO = {
  name: "NOVEXA Digital Agency",
  tagline: "Architecting Next-Generation Web Applications & AI Systems",
  phone: "03218458140",
  formattedPhone: "+92 321 8458140",
  email: "contact@novexa.agency",
  address: "Digital First • Global Operations",
  yearsExperience: "8+",
  projectsCompleted: "250+",
  clientSatisfaction: "99.4%",
  averageRoi: "3.8x"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    title: "Website Development",
    shortDescription: "Modern business websites engineered for luxury aesthetics, lightning performance, and high conversion.",
    fullDescription: "We build high-converting, responsive websites that represent your brand with world-class polish. From slick single-page landing pages to full corporate portals, every site is crafted for speed, SEO, and lead capture.",
    iconName: "Globe",
    badge: "High Conversion",
    bulletPoints: [
      "Modern business websites",
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "Responsive websites"
    ],
    deliverables: [
      "Custom UI Design & Motion Graphics",
      "Mobile-First Responsive Framework",
      "SEO Optimization & Core Web Vitals 95+",
      "WhatsApp & Lead Form Integration",
      "CMS Content Management Setup"
    ],
    popularFor: ["Startups", "Corporate Brands", "Law Firms", "Real Estate", "Local Businesses"],
    estimatedTimeline: "1 - 3 Weeks"
  },
  {
    id: "web-applications",
    title: "Web Applications",
    shortDescription: "Custom cloud web apps, intuitive dashboards, real-time admin panels, and client portals.",
    fullDescription: "Transform complex operational workflows into smooth digital software. We architect scalable full-stack web applications with interactive data visualizations, real-time controls, and bulletproof security.",
    iconName: "LayoutDashboard",
    badge: "Enterprise Ready",
    bulletPoints: [
      "Custom web applications",
      "Business dashboards",
      "Admin panels",
      "Client portals"
    ],
    deliverables: [
      "End-to-End Full-Stack Architecture",
      "Real-time Data Visualization Dashboards",
      "Role-Based Access Control (RBAC)",
      "API Integrations & Third-Party Connectors",
      "High Availability & Scalable Cloud Setup"
    ],
    popularFor: ["SaaS Startups", "E-commerce", "Agencies", "Healthcare Platforms"],
    estimatedTimeline: "3 - 6 Weeks"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Modern, luxury user interface design paired with strategic user experience research.",
    fullDescription: "Design that commands attention and makes interaction effortless. We craft Apple-level visual design systems, wireframes, and interactive prototypes tailored to maximize retention and conversion rates.",
    iconName: "Figma",
    badge: "Apple-Level Design",
    bulletPoints: [
      "Modern UI",
      "Premium UX",
      "Responsive interfaces",
      "Wireframes",
      "Interactive prototypes"
    ],
    deliverables: [
      "User Research & Journey Mapping",
      "Interactive High-Fidelity Prototypes",
      "Comprehensive Design System & Components",
      "Micro-Interactions & Motion Design Specifications",
      "UX Usability Audits & CRO Optimization"
    ],
    popularFor: ["SaaS Founders", "Digital Agencies", "E-commerce", "Mobile Apps"],
    estimatedTimeline: "1 - 3 Weeks"
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription: "Smart 24/7 AI chatbots trained on your business data for instant customer support & lead capture.",
    fullDescription: "Never miss a lead or customer question again. We design, train, and deploy intelligent AI chatbots across WhatsApp, your website, and social platforms that converse naturally and qualify leads in real-time.",
    iconName: "Bot",
    badge: "24/7 Automation",
    bulletPoints: [
      "Customer support bots",
      "Lead generation bots",
      "WhatsApp chatbots",
      "Website chatbots"
    ],
    deliverables: [
      "Custom Knowledge Base Embeddings & Training",
      "Multi-Channel WhatsApp & Web Widget Setup",
      "Automated Lead Qualification & CRM Sync",
      "Human Handoff & Escalation Triggers",
      "Analytics Dashboard for Chat Performance"
    ],
    popularFor: ["Real Estate", "Healthcare", "E-commerce", "Restaurants", "Education"],
    estimatedTimeline: "1 - 2 Weeks"
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    shortDescription: "Autonomous business AI solutions & smart workflows that execute complex multi-step tasks.",
    fullDescription: "Automate core business functions with custom AI agents. From automated appointment scheduling and document analysis to intelligent research and customer follow-ups, our agents streamline operations.",
    iconName: "Cpu",
    badge: "Future Tech",
    bulletPoints: [
      "Custom AI assistants",
      "Business AI solutions",
      "Smart AI workflows"
    ],
    deliverables: [
      "Multi-Agent Workflow Architecture",
      "LLM Integration (Gemini, Claude, GPT)",
      "Automated Data Extraction & Document Analysis",
      "API & Webhook Trigger Pipelines",
      "Continuous Monitoring & Self-Correction Logic"
    ],
    popularFor: ["Agencies", "Law Firms", "Healthcare", "Enterprise Companies"],
    estimatedTimeline: "2 - 4 Weeks"
  }
];

export const WHY_NOVEXA_DATA: WhyNovexaPoint[] = [
  {
    id: "tech",
    title: "Modern Technology",
    description: "We leverage cutting-edge tech stacks (React 19, Vite, Tailwind v4, Motion, Advanced LLM APIs) ensuring blazing 100/100 performance and future-proof scalability.",
    iconName: "Zap",
    statNumber: "99.9%",
    statLabel: "Uptime & Reliability"
  },
  {
    id: "design",
    title: "Premium Design",
    description: "Luxury dark aesthetic, glassmorphic floating depth, and Framer-grade smooth micro-interactions that elevate your brand above all local and global competitors.",
    iconName: "Sparkles",
    statNumber: "100%",
    statLabel: "Custom Craftsmanship"
  },
  {
    id: "delivery",
    title: "Fast Delivery",
    description: "Rapid agile development cycles deliver production-ready solutions in weeks, not months, without ever compromising on security or visual quality.",
    iconName: "Clock",
    statNumber: "2x",
    statLabel: "Faster Turnaround"
  },
  {
    id: "responsive",
    title: "Responsive Development",
    description: "Pixel-perfect rendering across desktop monitors, laptops, tablets, and smartphones. Mobile touch targets and typography strictly optimized.",
    iconName: "Smartphone",
    statNumber: "100%",
    statLabel: "Cross-Device Harmony"
  },
  {
    id: "business",
    title: "Business Focused",
    description: "Every UI element, button placement, and AI workflow is engineered with one core objective: maximizing visitor conversions and qualified WhatsApp leads.",
    iconName: "TrendingUp",
    statNumber: "3.8x",
    statLabel: "Average Client ROI"
  },
  {
    id: "support",
    title: "Dedicated Support",
    description: "Direct priority communication via WhatsApp. Dedicated account leads and ongoing maintenance support to ensure your growth never stalls.",
    iconName: "Headphones",
    statNumber: "24/7",
    statLabel: "Priority Response"
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  // 1. WEBSITE DEVELOPMENT
  {
    id: "luxury-corporate-website",
    title: "Luxury Corporate Website",
    category: "Website Development",
    conceptType: "Concept Project",
    shortDescription: "A high-converting dark-mode luxury corporate web experience featuring interactive financial models, glassmorphic architecture, and smooth motion graphics.",
    fullOverview: "Designed for tier-1 enterprise holdings and investment firms requiring elite global branding, instant trust authority, and high-security customer conversion pathways.",
    features: [
      "3D Glass Architecture Visualizer",
      "Instant WhatsApp Concierge Integration",
      "Interactive Investment Yield Calculator",
      "Core Web Vitals 99/100 Performance Score",
      "Multi-Currency & Regional Localization"
    ],
    businessBenefits: [
      "Accelerates High-Ticket Lead Conversion by 3.4x",
      "Establishes Unrivaled Global Corporate Authority",
      "Delivers Sub-Second Ultra Fast Page Loads"
    ],
    technologies: ["React 19", "Tailwind CSS v4", "Framer Motion", "TypeScript", "Vite"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    mockupType: "desktop",
    featured: true
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Website Development",
    conceptType: "Demo Project",
    shortDescription: "Immersive gourmet culinary showcase featuring interactive digital menus, dietary filtering, and direct WhatsApp table booking logic.",
    fullOverview: "Modern restaurant website concept built to highlight culinary artistry, showcase seasonal tasting menus, and convert online food lovers into direct table reservations.",
    features: [
      "Filterable Interactive Menu with Dietary Tags",
      "Direct WhatsApp Table Booking Widget",
      "Integrated Private Event Inquiries Form",
      "Instagram Live Culinary Feed Showcase",
      "Google Maps Route & Hours Sync"
    ],
    businessBenefits: [
      "Eliminates Third-Party Reservation Commissions",
      "Increases High-Margin Private Event Enquiries",
      "Captures VIP Customer Contact Data"
    ],
    technologies: ["React 19", "Tailwind CSS", "Lucide React", "WhatsApp API", "Google Maps SDK"],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    mockupType: "desktop",
    featured: true
  },
  {
    id: "real-estate-website",
    title: "Real Estate Website",
    category: "Website Development",
    conceptType: "Concept Project",
    shortDescription: "Ultra-luxury property showcase portal with high-res photo galleries, interactive floor plans, and instant broker WhatsApp connect.",
    fullOverview: "Premium property portal showcase designed for luxury brokerages, offering buyers interactive spatial previews, mortgage calculators, and single-click agent booking.",
    features: [
      "High-Res Property Gallery & Video Tours",
      "Interactive Floor Plan Hotspots",
      "Instant Mortgage & ROI Estimator Calculator",
      "WhatsApp Lead Distribution Routing",
      "Saved Favorites & Comparative Property Matrix"
    ],
    businessBenefits: [
      "Drives High-Net-Worth Buyer Inquiries",
      "Reduces Days-on-Market for Luxury Listings",
      "Automates Initial Lead Qualification"
    ],
    technologies: ["React 19", "Framer Motion", "Tailwind CSS", "TypeScript", "WhatsApp Engine"],
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    mockupType: "desktop",
    featured: true
  },

  // 2. WEB APPLICATIONS
  {
    id: "crm-dashboard",
    title: "CRM Dashboard",
    category: "Web Applications",
    conceptType: "Concept Project",
    shortDescription: "Next-gen enterprise CRM platform with real-time pipeline visualization, deal health AI scoring, and automated customer follow-ups.",
    fullOverview: "Full-featured web application designed to give sales leaders complete operational visibility over complex B2B sales funnels with live telemetry and analytics.",
    features: [
      "Kanban Deal Pipeline Drag-and-Drop Management",
      "AI Deal Risk Analysis & Win Probability",
      "Role-Based Access Control (RBAC)",
      "Real-Time Revenue Telemetry Charts",
      "Automated Activity & Communication Logging"
    ],
    businessBenefits: [
      "Shortens Average B2B Sales Cycle",
      "Provides Executive Pipeline Forecast Accuracy",
      "Boosts Rep Productivity by 40%"
    ],
    technologies: ["React 19", "Recharts", "Tailwind CSS", "TypeScript", "RESTful APIs"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    mockupType: "dashboard",
    featured: true
  },
  {
    id: "business-management-system",
    title: "Business Management System",
    category: "Web Applications",
    conceptType: "Demo Project",
    shortDescription: "All-in-one ERP & operational portal unifying inventory management, team rosters, project tracking, and client billing.",
    fullOverview: "Enterprise-level web portal built for mid-sized organizations to centralize daily operations, eliminate manual spreadsheets, and enforce data security.",
    features: [
      "Multi-Department Task & Gantt Boards",
      "Automated Invoice Generation & Reminders",
      "Real-Time Inventory Stock Alerts",
      "Employee Attendance & Shift Roster",
      "Exportable Financial Audit Logs"
    ],
    businessBenefits: [
      "Eliminates Operational Bottlenecks",
      "Reduces Payroll & Invoice Errors",
      "Consolidates Fragmented Software Costs"
    ],
    technologies: ["React 19", "Tailwind CSS", "TypeScript", "Lucide React", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    mockupType: "dashboard",
    featured: true
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Web Applications",
    conceptType: "Concept Project",
    shortDescription: "High-speed analytics platform processing millions of data points into real-time interactive charts, cohort heatmaps, and custom reports.",
    fullOverview: "Big-data reporting interface engineered with glassmorphic widgets, customizable KPI layouts, and automated alert notifications.",
    features: [
      "Live WebSocket Metric Streaming Engine",
      "Customizable Drag-and-Drop Widgets",
      "User Cohort Retention Heatmaps",
      "PDF & CSV Automated Export Engine",
      "Multi-Source API Connectors"
    ],
    businessBenefits: [
      "Enables Fast Data-Driven Executive Decisions",
      "Provides Instant Anomaly Detection Alerts",
      "Scales Seamlessly with High Data Loads"
    ],
    technologies: ["React 19", "Recharts", "Tailwind CSS", "TypeScript", "WebSockets"],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    mockupType: "dashboard",
    featured: true
  },

  // 3. UI/UX DESIGN
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "UI/UX Design",
    conceptType: "Concept Project",
    shortDescription: "FinTech mobile application UI design system emphasizing biometric security, effortless peer-to-peer transfers, and dark mode elegance.",
    fullOverview: "Apple-level mobile banking UX prototype engineered to minimize cognitive load, streamline multi-currency accounts, and deliver frictionless transactions.",
    features: [
      "One-Tap Biometric Quick Transfers",
      "Virtual & Physical Card Instant Controls",
      "Smart Spending AI Categorization",
      "Dark & Light Luxury Themes",
      "Interactive Micro-Animation System"
    ],
    businessBenefits: [
      "Elevates User 30-Day Retention Rates",
      "Reduces Customer Support Ticket Volume",
      "Builds Bank-Grade Consumer Trust"
    ],
    technologies: ["Figma Design System", "Framer Motion", "Tailwind CSS", "UI/UX Research", "Prototyping"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    mockupType: "mobile",
    featured: true
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    category: "UI/UX Design",
    conceptType: "Demo Project",
    shortDescription: "Hyper-local food delivery interface with live GPS courier tracking, customizable meal builds, and instant 1-tap checkout.",
    fullOverview: "High-converting mobile UX design crafted for rapid ordering, intuitive dietary filtering, and real-time order status tracking.",
    features: [
      "Live Animated GPS Order Tracking",
      "Custom Meal Builder & Add-On Selector",
      "Group Order Split-Bill Feature",
      "Instant Saved Address Shortcuts",
      "Haptic Feedback Micro-Interactions"
    ],
    businessBenefits: [
      "Drives Repeat Order Frequency",
      "Maximizes Average Order Value (AOV)",
      "Delivers Delightful Frictionless UX"
    ],
    technologies: ["Figma", "React 19", "Tailwind CSS", "Mobile UX", "Prototyping"],
    imageUrl: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80",
    mockupType: "mobile",
    featured: true
  },
  {
    id: "ai-saas-dashboard",
    title: "AI SaaS Dashboard",
    category: "UI/UX Design",
    conceptType: "Concept Project",
    shortDescription: "Sleek dark-mode UI design system for generative AI platforms featuring prompt workspaces, token monitors, and model tuning sliders.",
    fullOverview: "Futuristic SaaS interface crafted specifically for artificial intelligence platforms, delivering deep visual clarity and ergonomic user workflows.",
    features: [
      "Interactive Prompt Canvas Studio",
      "Live Token Usage & Cost Gauge",
      "Model Comparison Split View Layout",
      "Custom Prompt Preset Library Cards",
      "Glassmorphic Dark Theme Palette"
    ],
    businessBenefits: [
      "Increases Daily Active Users (DAU)",
      "Simplifies Complex AI Parameters",
      "Delivers Premium Brand Identity"
    ],
    technologies: ["Figma", "Tailwind CSS", "Framer Motion", "TypeScript", "React 19"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    mockupType: "dashboard",
    featured: true
  },

  // 4. AI CHATBOTS
  {
    id: "restaurant-ai-chatbot",
    title: "Restaurant AI Chatbot",
    category: "AI Chatbots",
    conceptType: "Concept Project",
    shortDescription: "Intelligent 24/7 AI chatbot handling WhatsApp table bookings, answering dietary queries, and taking takeout orders in natural conversational tone.",
    fullOverview: "Smart conversational assistant trained on full menu items, allergy information, operating hours, and booking schedules to capture every guest inquiry.",
    features: [
      "Natural Language Menu Inquiries",
      "24/7 WhatsApp Table Reservation Flow",
      "Allergy & Ingredient Triage",
      "Special Event & Catering Intake",
      "Automatic CRM Lead Capture"
    ],
    businessBenefits: [
      "Captures After-Hours Reservations",
      "Frees Front-of-House Staff Time",
      "Zero Missed Customer Inquiries"
    ],
    technologies: ["Gemini LLM API", "WhatsApp Business API", "Node.js", "Tailwind CSS", "React 19"],
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    mockupType: "chat",
    featured: true
  },
  {
    id: "healthcare-ai-chatbot",
    title: "Healthcare AI Chatbot",
    category: "AI Chatbots",
    conceptType: "Demo Project",
    shortDescription: "Medical inquiry & appointment scheduling bot providing patient symptom triage, clinic operating details, and instant doctor booking.",
    fullOverview: "Patient-first AI chatbot built with privacy-first standards, guiding visitors through symptom intake and directing them to the right specialist.",
    features: [
      "Intelligent Patient Triage Guidance",
      "Automated Doctor Availability Search",
      "Instant WhatsApp Appointment Reminders",
      "FAQ Handling on Insurance & Fees",
      "Seamless Human Reception Handoff"
    ],
    businessBenefits: [
      "Reduces Clinic Call Center Load by 65%",
      "Decreases Patient No-Show Rates",
      "Accelerates New Patient Onboarding"
    ],
    technologies: ["Gemini AI API", "WhatsApp Integration", "TypeScript", "React 19", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    mockupType: "chat",
    featured: true
  },
  {
    id: "ecommerce-ai-chatbot",
    title: "E-commerce AI Chatbot",
    category: "AI Chatbots",
    conceptType: "Concept Project",
    shortDescription: "Autonomous shopping assistant providing personalized product recommendations, order tracking, and instant size guidance via chat.",
    fullOverview: "E-commerce conversational bot integrated with inventory systems to increase conversion rates, upsell relevant products, and resolve support queries.",
    features: [
      "Interactive Product Search via Chat",
      "Automated Order Status Tracking",
      "Personalized Size & Fit Assistant",
      "Abandoned Cart Recovery Automation",
      "Multi-Language Customer Support"
    ],
    businessBenefits: [
      "Boosts E-commerce Conversion by 28%",
      "Handles 85% of Routine Support Tickets",
      "Reduces Cart Abandonment Rates"
    ],
    technologies: ["Gemini AI API", "Shopify REST API", "WhatsApp Engine", "TypeScript", "React 19"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80",
    mockupType: "chat",
    featured: true
  },

  // 5. AI AGENTS
  {
    id: "customer-support-ai-agent",
    title: "Customer Support AI Agent",
    category: "AI Agents",
    conceptType: "Concept Project",
    shortDescription: "Autonomous multi-step support agent capable of reading user tickets, searching internal knowledge bases, and executing refund/ticket actions.",
    fullOverview: "Self-operating support agent designed to handle complex multi-tier customer requests, perform API updates, and escalate sensitive issues automatically.",
    features: [
      "Autonomous Knowledge Retrieval (RAG)",
      "Multi-Step API Execution Workflows",
      "Sentiment Analysis & Escalation Triggers",
      "Automated Resolution Summaries",
      "24/7 Multi-Channel Coverage"
    ],
    businessBenefits: [
      "Cuts Average First Response Time to 3 Seconds",
      "Lowers Support Operations Cost by 60%",
      "Delivers Consistent 24/7 Service Quality"
    ],
    technologies: ["Gemini 2.5 Flash API", "RAG Vector DB", "Node.js", "TypeScript", "React 19"],
    imageUrl: "https://images.unsplash.com/photo-1534536281715-e28d76741772?auto=format&fit=crop&w=1200&q=80",
    mockupType: "dashboard",
    featured: true
  },
  {
    id: "sales-ai-agent",
    title: "Sales AI Agent",
    category: "AI Agents",
    conceptType: "Demo Project",
    shortDescription: "Autonomous lead qualification and outreach agent that researches prospects, qualifies intent, and books sales calls on team calendars.",
    fullOverview: "Strategic AI sales agent engineered to engage inbound inquiries, verify decision-maker credentials, and automatically schedule high-ticket discovery calls.",
    features: [
      "Autonomous Prospect Intent Scoring",
      "Calendar Sync & Slot Booking",
      "Personalized Multi-Touch Follow-ups",
      "CRM Data Auto-Enrichment",
      "Real-Time Objection Handling"
    ],
    businessBenefits: [
      "Eliminates Lead Decay Time",
      "Quadruples Qualified Sales Meetings",
      "Standardizes Top-Tier Outreach Quality"
    ],
    technologies: ["Gemini LLM API", "Google Calendar API", "WhatsApp API", "TypeScript", "React 19"],
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    mockupType: "dashboard",
    featured: true
  },
  {
    id: "voice-ai-agent",
    title: "Voice AI Agent",
    category: "AI Agents",
    conceptType: "Concept Project",
    shortDescription: "Ultra-low latency conversational voice AI agent handling inbound phone calls, answering FAQs, and taking appointment bookings in realistic human voices.",
    fullOverview: "Enterprise voice AI assistant capable of natural turn-taking, accent adapting, and seamless backend database query execution during live calls.",
    features: [
      "Sub-500ms Conversational Voice Latency",
      "Human-Like Natural Intonation & Nuance",
      "Live Database Query Execution During Call",
      "Automated Call Summary Transcripts",
      "Warm Transfer to Human Reception Agents"
    ],
    businessBenefits: [
      "Handles Infinite Concurrent Inbound Calls",
      "Reduces Call Center Overhead Costs",
      "Ensures Zero Missed After-Hours Phone Leads"
    ],
    technologies: ["Gemini Live Audio API", "WebRTC / Audio Worklets", "TypeScript", "React 19", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
    mockupType: "dashboard",
    featured: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discovery",
    subtitle: "Understanding Requirements",
    description: "We analyze your business goals, target audience, brand identity, and operational bottlenecks through a rapid strategic discovery call.",
    iconName: "Search",
    keyActivities: ["Business Goal Alignment", "Target Audience Audit", "Competitor & Market Analysis"]
  },
  {
    stepNumber: "02",
    title: "Planning",
    subtitle: "Architecture & Strategy",
    description: "We map out wireframes, user journeys, data structures, AI capabilities, and conversion funnels to ensure seamless project delivery.",
    iconName: "MapPin",
    keyActivities: ["Information Architecture", "Conversion Funnel Map", "Tech Stack & API Specifications"]
  },
  {
    stepNumber: "03",
    title: "Design",
    subtitle: "Luxury UI/UX Creation",
    description: "Our designers craft bespoke, high-fidelity UI screens, motion graphics, dark mode palettes, and interactive prototypes.",
    iconName: "Palette",
    keyActivities: ["High-Fidelity Mockups", "Interactive Motion Prototypes", "Brand Aesthetics & Glass Design"]
  },
  {
    stepNumber: "04",
    title: "Development",
    subtitle: "Clean Code & AI Engineering",
    description: "We code pixel-perfect responsive layouts, construct robust web application logic, integrate LLM AI models, and optimize speed.",
    iconName: "Code",
    keyActivities: ["Frontend & Component Build", "API & LLM Model Integration", "SEO & Speed Optimization"]
  },
  {
    stepNumber: "05",
    title: "Testing",
    subtitle: "Quality & Security Assurance",
    description: "Rigorous cross-device testing, stress-testing AI responses, security audits, and CRO verification before public launch.",
    iconName: "CheckCircle2",
    keyActivities: ["Cross-Browser & Mobile Audit", "AI Accuracy & Safety Tuning", "Performance & Security Verification"]
  },
  {
    stepNumber: "06",
    title: "Launch",
    subtitle: "Deployment & Scaling",
    description: "Seamless deployment on Cloud infrastructure with live WhatsApp lead channels connected, followed by continuous growth support.",
    iconName: "Rocket",
    keyActivities: ["Cloud Production Deploy", "WhatsApp Lead Flow Handover", "Post-Launch Monitoring & Support"]
  }
];

export const TARGET_INDUSTRIES: TargetIndustry[] = [
  {
    id: "startups",
    name: "Startups",
    iconName: "Rocket",
    description: "Fast-track your pitch and product launch with high-impact landing pages, web MVPs, and AI lead bots.",
    recommendedService: "Website Development & Web Applications",
    keyBenefits: ["Rapid MVP Turnaround", "Investor-Grade UI/UX", "Built-In Lead Capture"]
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    iconName: "Store",
    description: "Dominate local service searches and convert website visitors into immediate WhatsApp customer calls.",
    recommendedService: "Website Development & AI Chatbots",
    keyBenefits: ["Google Local SEO Ready", "Direct WhatsApp Booking", "Customer FAQ Bot"]
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    iconName: "ShoppingBag",
    description: "Elevate your brand with luxury custom shop UI design and automated AI customer service bots.",
    recommendedService: "UI/UX Design & AI Chatbots",
    keyBenefits: ["Higher Add-To-Cart Rates", "24/7 Order Support Bot", "Luxury Product Showcases"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    iconName: "Activity",
    description: "Streamline patient scheduling, clinic inquiries, and trust-building corporate medical portals.",
    recommendedService: "AI Chatbots & Web Applications",
    keyBenefits: ["Automated Triage Bot", "HIPAA/Data Aware UX", "Instant WhatsApp Booking"]
  },
  {
    id: "law-firms",
    name: "Law Firms",
    iconName: "Scale",
    description: "Project authority with elite corporate legal websites and AI document triage assistants.",
    recommendedService: "Website Development & AI Agents",
    keyBenefits: ["High-Trust Legal Branding", "Client Case Intake Bot", "Automated Triage Workflow"]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    iconName: "Building2",
    description: "Showcase luxury properties with immersive visual galleries and instant WhatsApp agent connections.",
    recommendedService: "Website Development & AI Chatbots",
    keyBenefits: ["Property Showcase Gallery", "Instant WhatsApp Lead Bot", "Interactive Search Filters"]
  },
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    iconName: "Utensils",
    description: "Mouth-watering digital menus, automated WhatsApp reservation bots, and event inquiries.",
    recommendedService: "Website Development & AI Chatbots",
    keyBenefits: ["WhatsApp Table Booking", "Interactive Menus", "Event Lead Automation"]
  },
  {
    id: "education",
    name: "Education & Academies",
    iconName: "GraduationCap",
    description: "Modern student enrollment portals, course showcase pages, and AI student guidance bots.",
    recommendedService: "Web Applications & AI Chatbots",
    keyBenefits: ["Student Course Portals", "Admissions AI Assistant", "Mobile Friendly UX"]
  },
  {
    id: "agencies",
    name: "Agencies & Partners",
    iconName: "Briefcase",
    description: "White-label design and web/AI development partnership solutions for growing digital agencies.",
    recommendedService: "Web Applications & UI/UX Design",
    keyBenefits: ["Dedicated Dev Squad", "White-Label Execution", "Reliable Scaling"]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How do I get started with NOVEXA Digital Agency?",
    answer: "Getting started is effortless! Simply click any 'Chat on WhatsApp' button on this website or message us at 03218458140 (+92 321 8458140). We will review your project goals, recommend the ideal package, and schedule a free consultation."
  },
  {
    id: "faq-2",
    category: "General",
    question: "What makes NOVEXA different from standard agencies?",
    answer: "We combine world-class luxury design aesthetics (Apple/Stripe standards) with advanced AI engineering. We don't use generic templates. Every website, app, and AI agent is custom-engineered to convert visitors into direct revenue."
  },
  {
    id: "faq-3",
    category: "Pricing & Delivery",
    question: "What is the typical timeline for a project?",
    answer: "Landing pages and AI Chatbots are delivered within 1 to 2 weeks. Custom Corporate Websites take 2 to 3 weeks. Complex Web Applications and AI Agents take 3 to 6 weeks depending on scope."
  },
  {
    id: "faq-4",
    category: "Pricing & Delivery",
    question: "How does pricing work?",
    answer: "We offer clear, fixed-price project milestones or monthly retainer models for ongoing AI/Dev support. Contact us directly on WhatsApp for an instant custom proposal based on your exact requirements."
  },
  {
    id: "faq-5",
    category: "Services & Tech",
    question: "Can you build AI Chatbots specifically for WhatsApp?",
    answer: "Yes! We specialize in custom WhatsApp AI Chatbots that connect directly to your business number, train on your business documents/services, and respond to customers 24/7 with human-like accuracy."
  },
  {
    id: "faq-6",
    category: "Services & Tech",
    question: "Will my website be fully mobile responsive and fast?",
    answer: "Guaranteed. We build with modern performance architectures that consistently score 95+ on Google Core Web Vitals and load instantly on all mobile and desktop devices."
  },
  {
    id: "faq-7",
    category: "Services & Tech",
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we provide 24/7 priority support and ongoing maintenance to keep your web apps, AI bots, and servers running at peak performance."
  }
];
