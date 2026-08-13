import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Wifi,
  WifiOff,
  CheckCircle2,
  Sparkles,
  Smartphone,
  CreditCard,
  HeartPulse,
  Search,
  MessageSquare,
  Calendar,
  Pill,
  Users,
  Layers,
  Clock,
  Wrench,
  Check,
  ArrowUpRight,
  Bot,
  Activity,
  Phone,
  FileText,
  AlertTriangle,
  Lock,
} from "lucide-react";
import { SiteCTA } from "@/components/site/SiteCTA";
import { site, telUrl, whatsappUrl } from "@/data/site";
import { PharmacyInteractivity } from "./PharmacyInteractivity";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "PharmaCare OS — Put Your Pharmacy & Clinic Online | GTSS Flagship",
  description:
    "The complete digital platform built for pharmacies & clinics in Nairobi: Be found on Google, answer customer queries 24/7 with AI, manage clinic bookings, sell OTC meds, and accept instant M-Pesa payments with FEFO inventory and prescription refills underneath.",
};

const valueLadder = [
  {
    num: "01",
    badge: "Step 01 · Visibility",
    title: "Be Found Online",
    icon: Search,
    pitch: "Put your pharmacy on the map when local patients search for medicines.",
    desc: "Build a strong online presence that helps customers find your pharmacy and clinic when they are searching for healthcare services, urgent medicines, and OTC remedies across your neighbourhood.",
    bullets: [
      "Local SEO & Google Search optimization",
      "Google Maps & business profile integration",
      "High-speed mobile storefront",
      "Neighbourhood search dominance",
    ],
    highlight: "Be found first.",
  },
  {
    num: "02",
    badge: "Step 02 · Availability",
    title: "Answer Questions — Without The Calls",
    icon: Bot,
    pitch: "Give customers instant clinical answers 24/7 without ringing phones.",
    desc: "Reduce repetitive phone calls and let your website handle common questions about drug availability, dosages, store hours, and pricing with an intelligent 24/7 AI health assistant.",
    bullets: [
      "24/7 AI customer care assistant",
      "Instant medicine stock & price checks",
      "Adult and paediatric dosage FAQ",
      "Automated WhatsApp & web enquiry triage",
    ],
    highlight: "Zero call fatigue.",
  },
  {
    num: "03",
    badge: "Step 03 · Engagement",
    title: "Show & Manage Clinic Services",
    icon: Calendar,
    pitch: "Let patients see all health services and book appointments directly online.",
    desc: "Showcase your in-store consultations, wellness screenings, blood pressure checks, blood glucose monitoring, and vaccination services with direct digital scheduling.",
    bullets: [
      "Service listings & price transparency",
      "Real-time calendar slot bookings",
      "Automated SMS/WhatsApp appointment confirmations",
      "Staff schedule & clinic queue management",
    ],
    highlight: "Fill your clinic slots.",
  },
  {
    num: "04",
    badge: "Step 04 · Transactions",
    title: "Sell OTC Medication Online",
    icon: Pill,
    pitch: "Turn online visitors into immediate paying medicine orders.",
    desc: "Let customers browse your available OTC medicine catalogue, add remedies to cart, and place orders directly for fast home delivery or click-and-collect in-store pickup.",
    bullets: [
      "Rich OTC medicine catalogue with categories",
      "Visual & barcode drug search",
      "Guest checkout + patient accounts",
      "Click-and-collect or dispatch delivery",
    ],
    highlight: "More daily transactions.",
  },
  {
    num: "05",
    badge: "Step 05 · Cashflow",
    title: "Get Paid Directly via M-Pesa",
    icon: CreditCard,
    pitch: "Frictionless checkout with automated mobile money reconciliation.",
    desc: "Make checkout effortless with seamless Safaricom Daraja M-Pesa STK Push prompts sent directly to customer phones, automatically verifying payments with zero manual cashier checking.",
    bullets: [
      "Instant M-Pesa STK Push to phone",
      "Till & Paybill automated ledger balancing",
      "Zero manual cashier phone verification",
      "Instant digital receipt generation",
    ],
    highlight: "Instant settlements.",
  },
];

const deepCapabilities = [
  {
    icon: FileText,
    title: "Prescription & Refill Engine",
    desc: "Patients upload prescriptions for pharmacist verification. The system schedules automated monthly refill reminders via WhatsApp so patients never run out of chronic medication.",
  },
  {
    icon: Layers,
    title: "FEFO Stock Lots & Expiry Control",
    desc: "First-Expired-First-Out batch tracking with supplier lot numbers, expiry alert countdowns, and automated dispensing priority to eliminate expired drug losses completely.",
  },
  {
    icon: HeartPulse,
    title: "Medication Adherence & Dose Reminders",
    desc: "Patients receive daily morning, afternoon, and evening dose reminders. Daily checklists and streak scores encourage strict adherence and improve chronic health outcomes.",
  },
  {
    icon: Users,
    title: "Caregiver Management Portal",
    desc: "Family members can link dependent or elderly parents, view prescribed medicines, verify daily doses taken, and order refills on their behalf with permission-controlled access.",
  },
  {
    icon: Activity,
    title: "Guided Symptom Triage ('How Do You Feel?')",
    desc: "An intuitive questionnaire helps patients navigate non-urgent health concerns while immediately identifying and escalating emergency red flags for urgent medical care.",
  },
  {
    icon: Zap,
    title: "AI Drug Importer & Barcode Scanner",
    desc: "Ingest supplier CSVs, scan GS1 barcodes, or use Groq AI to automatically enrich medicines with generic names, dosage instructions, indications, and side effects.",
  },
  {
    icon: WifiOff,
    title: "Offline-First Local Intranet Edge Hub",
    desc: "When fiber internet cuts out in your neighbourhood, on-site dispensing, POS billing, and receipt printing continue with zero interruption on your local premises server.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Trails & Regulatory Compliance",
    desc: "Complete logs of every prescription verified, batch dispensed, stock adjustment made, and payment received, ensuring full peace of mind and compliance readiness.",
  },
];

const plans = [
  {
    name: "Informational Website",
    price: "KES 5,000",
    period: "One-Time Payment",
    subPrice: "Brochure, Catalogue & AI Chatbot",
    audience: "Chemists & clinics wanting a professional online presence",
    features: [
      "Custom SEO-Optimized Pharmacy Website",
      "24/7 AI Customer Care & Dosage Chatbot",
      "Clinic Service Booking Calendar",
      "Online OTC Medicine Catalogue",
      "Direct WhatsApp & Phone Order Routing",
      "M-Pesa Till / Paybill Integration",
      "Mobile & Tablet Responsive Design",
    ],
    highlight: false,
  },
  {
    name: "Hosted Subscription",
    price: "KES 1,000 / mo",
    period: "Monthly Subscription",
    subPrice: "or KES 10,000 / year (Cancel anytime)",
    audience: "Active pharmacies & clinics needing continuous hosted cloud & updates",
    features: [
      "Everything in Informational Website",
      "Cloud Hosting & Automated Daily Backups",
      "Prescription Upload & Pharmacist Review Queue",
      "Automated WhatsApp Refill Pings & Reminders",
      "FEFO Batch Lot Inventory & Expiry Alerts",
      "Patient & Caregiver Portal with Daily Dose Checklist",
      "AI-Assisted Drug Import & Barcode Support",
      "Priority WhatsApp Support & Continuous Updates",
    ],
    highlight: true,
  },
  {
    name: "One-Time License",
    price: "KES 10,000",
    period: "One-Time Ownership",
    subPrice: "Pay once, own forever",
    audience: "Pharmacies & clinics wanting standalone local ownership & on-premise control",
    features: [
      "Full System Core License & Ownership",
      "Local Edge Hub for 100% Offline Dispensing",
      "Prescription Upload & Review System",
      "FEFO Batch Lot Inventory & Expiry Control",
      "Native M-Pesa STK Push & Till Balancing",
      "Staff Roles & Cashier Shift Audits",
      "Complete Setup & Staff Floor Training Included",
    ],
    highlight: false,
  },
];

const rolloutSteps = [
  {
    step: "01",
    icon: Wrench,
    title: "We Audit & Ingest Your Drug Catalogue",
    desc: "In Days 1–3, our engineers ingest your medicine list, pricing, categories, and branch details. We configure your Google SEO presence and AI knowledge base.",
  },
  {
    step: "02",
    icon: Clock,
    title: "M-Pesa Activation & Edge Server Setup",
    desc: "We connect your Safaricom Daraja M-Pesa credentials, set up automated STK callbacks, and install the local intranet failover hub on your pharmacy counter.",
  },
  {
    step: "03",
    icon: Wifi,
    title: "Pharmacist Training & Live Floor Launch",
    desc: "We train your pharmacists, cashiers, and clinic staff on live mock orders, prescription verification, and FEFO lot dispensing until your team is 100% confident.",
  },
];

export default function PharmacyPlatformPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[var(--hero-gradient)] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[var(--border)]">
        <div
          className="luxury-glow-radial -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[var(--gold)] opacity-10"
          aria-hidden="true"
        />
        <div
          className="luxury-glow-radial top-1/4 -right-40 w-[500px] h-[500px] bg-emerald-500 opacity-10"
          aria-hidden="true"
        />

        <div className="site-wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5">
              <HeartPulse className="h-3.5 w-3.5" />
              <span>GTSS Flagship Healthcare Suite · GTS-HLT-9001</span>
            </div>

            <h1 className="site-display text-[var(--text)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              PUT YOUR PHARMACY{" "}
              <span className="italic font-normal text-gold-gradient">ONLINE</span>.
            </h1>

            <p className="mt-2 text-xl sm:text-2xl font-semibold text-[var(--text)] font-[family-name:var(--font-display)]">
              Be found. Be available. Get business.
            </p>

            <p className="site-lead mt-5 text-base lg:text-lg">
              A powerful digital platform built for pharmacies and clinics in Nairobi and across East Africa.
              Help local customers find you on Google, answer dosage questions 24/7 with AI, take clinic
              bookings, sell OTC remedies, and accept instant M-Pesa payments with zero phone call chaos.
            </p>

            {/* CTA Group */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link href="/demo" className="luxury-btn-gold">
                <span>Book Live Pharmacy Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={whatsappUrl(
                  "Hi GTSS, I want to put my pharmacy online with PharmaCare OS. Let's discuss."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn site-btn-whatsapp text-sm"
              >
                <span>WhatsApp Pharmacy Architect</span>
              </a>
            </div>

            {/* Micro Assurances Ribbon */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]">24/7</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">AI Health Assistant</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                  Instant
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">M-Pesa STK Push</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--gold-luxury)]">
                  0 Waste
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">FEFO Expiry Control</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-bright)] bg-[var(--card-bg)] shadow-2xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/pharmacy_platform_hero.jpg"
                  alt="PharmaCare OS Interface Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)]/80 via-transparent to-transparent" />
              </div>

              <div className="p-5 border-t border-[var(--border)] bg-[var(--bg-surface-2)] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-bold text-[var(--text)]">PharmaCare Live Console</span>
                </div>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  M-Pesa STK + AI Groq Connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Step Value Progression Ladder */}
      <section className="site-wrap py-16 lg:py-24 border-b border-[var(--border)]" id="value-ladder">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The 5-Step Online Growth Engine</span>
          </div>
          <h2 className="site-title text-[var(--text)]">
            First, let customers find you. Then turn online visits into actual business.
          </h2>
          <p className="site-lead mx-auto mt-4 text-base lg:text-lg">
            We don&apos;t just throw complicated software at you. We build the immediate, high-converting
            reasons why patients and customers choose your pharmacy online first.
          </p>
        </div>

        {/* 5 Step Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueLadder.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="luxury-card p-6 lg:p-7 flex flex-col justify-between border border-[var(--border-bright)] group hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                    <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                      {step.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text)] mt-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--gold-luxury)] mt-1">
                    {step.pitch}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Bullet checklist */}
                  <div className="mt-5 pt-4 border-t border-[var(--border)] space-y-2">
                    {step.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-xs text-[var(--text)]">
                        <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  ✦ {step.highlight}
                </div>
              </div>
            );
          })}

          {/* 6th Card: The Summary Promise */}
          <div className="luxury-card p-6 lg:p-7 flex flex-col justify-between border-2 border-emerald-500/30 bg-emerald-500/[0.03]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                  THE FORMULA
                </span>
                <Sparkles className="h-5 w-5 text-emerald-500" />
              </div>

              <h3 className="text-xl font-bold text-[var(--text)] mt-4">
                Be Found → Answer → Book → Sell → Get Paid
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                By focusing on frictionless customer acquisition and 24/7 self-service, your pharmacy gains
                loyal neighbourhood patients who re-order OTC remedies and chronic medications every month.
              </p>

              <div className="mt-5 p-3 rounded-lg bg-[var(--bg-surface-2)] border border-[var(--border)] text-xs text-[var(--text)] space-y-1.5 font-mono">
                <p>1. 🔎 Google Visibility</p>
                <p>2. 💬 24/7 AI Care Assistant</p>
                <p>3. 📅 Online Clinic Slots</p>
                <p>4. 💊 OTC Digital Cart</p>
                <p>5. 💳 Instant M-Pesa STK</p>
              </div>
            </div>

            <a
              href={whatsappUrl("Hi GTSS, I want to deploy the 5-step online growth engine for my pharmacy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition-colors shadow-sm block"
            >
              Get Started with Step 1 →
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Demonstration Engine */}
      <section className="site-wrap py-16 lg:py-24 border-b border-[var(--border)]" id="interactive-demo">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="h-3.5 w-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="site-title text-[var(--text)]">
            Experience PharmaCare OS Before You Deploy.
          </h2>
          <p className="site-lead mx-auto mt-4 text-base lg:text-lg">
            Test the live 24/7 AI Health chatbot, patient dose checklist, FEFO batch expiry simulator, and
            revenue ROI calculator right now in your browser.
          </p>
        </div>

        {/* Embedded Interactive Client Component */}
        <PharmacyInteractivity />
      </section>

      {/* And That's Just The Start: Full Pharmacy Operating System */}
      <section className="bg-[var(--section-alt)] py-16 lg:py-24 border-b border-[var(--border)]" id="deep-engine">
        <div className="site-wrap">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[var(--bg-surface)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Layers className="h-3.5 w-3.5" />
              <span>Full Operating Architecture</span>
            </div>
            <h2 className="site-title text-[var(--text)]">
              And That&apos;s Just The Start.
            </h2>
            <p className="site-lead mx-auto mt-4 text-base lg:text-lg">
              Underneath the customer storefront lies a full-stack clinical, inventory, and caregiver operating
              system designed for serious pharmaceutical governance.
            </p>
          </div>

          {/* Deep Capabilities Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deepCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="luxury-card p-6 border border-[var(--border)] bg-[var(--card-bg)] flex flex-col justify-between group hover:border-emerald-500/40 transition-all"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--text)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Patient & Caregiver Image Feature Card */}
          <div className="mt-12 luxury-card p-8 lg:p-10 border border-[var(--border-bright)] bg-[var(--card-bg)] grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                PATIENT ADHERENCE & CAREGIVER NETWORK
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mt-2">
                Keep Patients Consistent. Keep Families Informed.
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                Chronic conditions like hypertension, diabetes, and cardiovascular health require strict daily
                medication adherence. PharmaCare OS connects patients and authorized family caregivers with daily
                checklists, WhatsApp alerts, and 1-click M-Pesa refills before doses run out.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-[var(--text)] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>96% average adherence streak on chronic prescriptions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Caregivers linked via secure SMS verification token</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Automated refill requests generated 4 days before depletion</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[var(--border)] aspect-[16/10] bg-[var(--bg-surface-3)]">
              <Image
                src="/images/pharmacy_patient_caregiver.jpg"
                alt="Patient & Caregiver Portal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 21-Day Turnkey Rollout Plan */}
      <section className="site-wrap py-16 lg:py-24 border-b border-[var(--border)]" id="rollout">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="h-3.5 w-3.5" />
            <span>Turnkey Implementation</span>
          </div>
          <h2 className="site-title text-[var(--text)]">
            Live on your pharmacy counter in two weeks.
          </h2>
          <p className="site-lead mx-auto mt-4 text-base lg:text-lg">
            Our Nairobi engineering team handles setup, inventory ingestion, M-Pesa credentials, and hands-on
            pharmacist training.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {rolloutSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="luxury-card p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                    <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                      PHASE {step.step}
                    </span>
                    <Icon className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text)] mt-4">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Commercial Pricing Plans */}
      <section className="site-wrap py-16 lg:py-24 border-b border-[var(--border)]" id="pricing">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold-border)] bg-[rgba(197,155,39,0.06)] text-[var(--gold-luxury)] text-xs font-semibold uppercase tracking-wider mb-4">
            <CreditCard className="h-3.5 w-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="site-title text-[var(--text)]">
            Predictable Packages. Permanent Ownership or Monthly.
          </h2>
          <p className="site-lead mx-auto mt-4 text-base lg:text-lg">
            Choose permanent one-time ownership or an affordable hosted monthly subscription in Kenyan Shillings.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`luxury-card p-6 sm:p-8 flex flex-col justify-between relative ${
                plan.highlight
                  ? "border-2 border-emerald-500 shadow-2xl ring-2 ring-emerald-500/20 bg-emerald-500/[0.02]"
                  : "border border-[var(--border)]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular Flagship
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  {plan.audience}
                </span>
                <h3 className="text-2xl font-bold text-[var(--text)] mt-1">{plan.name}</h3>

                <div className="mt-4 pb-4 border-b border-[var(--border)]">
                  <p className="text-3xl font-black text-[var(--text)] font-[family-name:var(--font-display)]">
                    {plan.price}
                  </p>
                  <p className="text-xs text-[var(--gold-luxury)] font-semibold mt-0.5">
                    {plan.period} · {plan.subPrice}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs text-[var(--text)]">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <a
                  href={whatsappUrl(
                    `Hi GTSS, I'm interested in the ${plan.name} (${plan.price}) for my pharmacy.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 rounded-xl font-bold text-xs transition-all shadow-md ${
                    plan.highlight
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "luxury-btn-outline"
                  }`}
                >
                  Select {plan.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Call to Action */}
      <SiteCTA
        title="Ready to put your pharmacy online this month?"
        copy="Tell us about your pharmacy or clinic. We'll show you a live demo on your exact medicine catalogue with zero obligation."
        primary={{ href: "/demo", label: "Request Live Pharmacy Demo" }}
        secondary={{ href: "/contact", label: "Speak with Lead Architect" }}
      />
    </div>
  );
}
