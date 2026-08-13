"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  MessageSquare,
  Calendar,
  Pill,
  CreditCard,
  CheckCircle2,
  Sparkles,
  Bot,
  User,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Send,
  Smartphone,
  Check,
  RefreshCw,
  Users,
  Layers,
  ChevronRight,
  TrendingUp,
  Activity,
  HeartPulse,
  Plus,
  ArrowUpRight,
  Play,
} from "lucide-react";
import { whatsappUrl } from "@/data/site";

// Simulated AI Chatbot Dialogues
const sampleChatPrompts = [
  {
    query: "Do you have Cetirizine 10mg in stock, and what is the dosage?",
    reply:
      "Yes! Cetirizine 10mg (30 Tablets) is currently in stock at KES 310. Standard adult dosage is 1 tablet (10mg) once daily. Would you like to order for instant delivery or reserve for pickup?",
    category: "Dosage & Stock",
    item: "Cetirizine 10mg",
    price: "KES 310",
  },
  {
    query: "Can I book a Blood Pressure and Blood Sugar check today?",
    reply:
      "Certainly! Our wellness clinic has openings today at 11:00 AM, 02:15 PM, and 04:30 PM with Dr. Muthoni. The combined screening is KES 450. Click below to confirm your slot.",
    category: "Clinic Booking",
    item: "BP & Glucose Check",
    price: "KES 450",
  },
  {
    query: "How do I request a refill for my monthly Metformin prescription?",
    reply:
      "I found your active prescription for Metformin 500mg (60 tabs). Your last refill was 26 days ago. Would you like me to trigger an instant M-Pesa STK push for KES 650 to prepare your package?",
    category: "Rx Refill",
    item: "Metformin 500mg Refill",
    price: "KES 650",
  },
  {
    query: "I have a dry cough and mild sore throat. What do you recommend?",
    reply:
      "For a dry cough and throat irritation, we recommend Ascoril D or Benylin Dry Cough Syrup (KES 520) along with Strepsils Lozenges (KES 200). Note: If you experience high fever or breathing difficulty, our system will escalate you directly to a clinician.",
    category: "Symptom Advice",
    item: "Dry Cough Package",
    price: "KES 720",
  },
];

// FEFO Lot Simulation Data
const initialLots = [
  {
    batch: "LOT-2024-08A",
    expiry: "2024-09-30",
    daysLeft: 45,
    qty: 40,
    status: "DISPENSE_FIRST",
    statusLabel: "Priority (FEFO 1st)",
    color: "amber",
  },
  {
    batch: "LOT-2024-11C",
    expiry: "2025-03-15",
    daysLeft: 210,
    qty: 120,
    status: "STANDBY",
    statusLabel: "Reserve (FEFO 2nd)",
    color: "blue",
  },
  {
    batch: "LOT-2025-02E",
    expiry: "2025-11-20",
    daysLeft: 460,
    qty: 300,
    status: "LONG_HOLD",
    statusLabel: "Safe Stock (FEFO 3rd)",
    color: "emerald",
  },
];

export function PharmacyInteractivity() {
  const [activeSimTab, setActiveSimTab] = useState<"ai" | "caregiver" | "fefo" | "roi">("ai");

  // AI Chat state
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to GoodCare Chemist. How can I assist you with medicines, prescriptions, or clinic bookings today?",
      time: "Just now",
    },
    {
      sender: "user",
      text: sampleChatPrompts[0].query,
      time: "Just now",
    },
    {
      sender: "bot",
      text: sampleChatPrompts[0].reply,
      time: "Just now",
      item: sampleChatPrompts[0].item,
      price: sampleChatPrompts[0].price,
    },
  ]);
  const [customInput, setCustomInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectPrompt = (index: number) => {
    setSelectedPromptIndex(index);
    const p = sampleChatPrompts[index];
    setIsTyping(true);
    setChatMessages((prev) => [
      ...prev,
      { sender: "user", text: p.query, time: "Just now" },
    ]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: p.reply,
          time: "Just now",
          item: p.item,
          price: p.price,
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const text = customInput;
    setCustomInput("");
    setIsTyping(true);
    setChatMessages((prev) => [
      ...prev,
      { sender: "user", text, time: "Just now" },
    ]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Thank you for your enquiry regarding "${text}". Our AI verified this in our local GTSS catalogue. In stock at KES 450 with 1-click M-Pesa checkout.`,
          time: "Just now",
          item: "Requested Item",
          price: "KES 450",
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  // Caregiver Dose Checklist state
  const [doses, setDoses] = useState([
    {
      id: 1,
      name: "Metformin 500mg",
      time: "08:00 AM (Morning)",
      instructions: "1 tablet after breakfast",
      taken: true,
      takenAt: "07:58 AM",
    },
    {
      id: 2,
      name: "Atorvastatin 20mg",
      time: "01:00 PM (Afternoon)",
      instructions: "1 tablet with water",
      taken: true,
      takenAt: "12:45 PM",
    },
    {
      id: 3,
      name: "Calcium D3",
      time: "07:00 PM (Evening)",
      instructions: "1 capsule with dinner",
      taken: false,
      takenAt: null,
    },
  ]);

  const toggleDose = (id: number) => {
    setDoses((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              taken: !d.taken,
              takenAt: !d.taken ? "Just now" : null,
            }
          : d
      )
    );
  };

  // FEFO stock dispense simulation
  const [stockLots, setStockLots] = useState(initialLots);
  const [dispenseLog, setDispenseLog] = useState<string[]>([]);

  const handleSimulateSale = () => {
    setStockLots((prev) => {
      const updated = [...prev];
      if (updated[0].qty > 5) {
        updated[0].qty -= 5;
        setDispenseLog((logs) => [
          `Dispensed 5 units from ${updated[0].batch} (Exp: ${updated[0].expiry}) — FEFO Rule Enforced!`,
          ...logs.slice(0, 3),
        ]);
      } else if (updated[0].qty > 0) {
        const remaining = updated[0].qty;
        updated[0].qty = 0;
        updated[1].qty -= 5 - remaining;
        setDispenseLog((logs) => [
          `Batch ${updated[0].batch} depleted! Auto-shifted to next batch ${updated[1].batch}.`,
          ...logs.slice(0, 3),
        ]);
      }
      return updated;
    });
  };

  // ROI Calculator state
  const [dailyWalkIns, setDailyWalkIns] = useState(80);
  const [avgTicket, setAvgTicket] = useState(650);

  // Estimates
  const onlineConversionRate = 0.22; // 22% additional traffic online
  const estimatedNewOnlineOrdersMonth = Math.round(dailyWalkIns * onlineConversionRate * 30);
  const estimatedNewMonthlyRevenue = estimatedNewOnlineOrdersMonth * avgTicket;
  const estimatedMonthlyExpiredSaved = Math.round(dailyWalkIns * 350); // waste reduction
  const estimatedSavedHours = Math.round((dailyWalkIns * 3 * 30) / 60); // phone calls prevented

  return (
    <div className="luxury-card overflow-hidden border border-[var(--border-bright)] bg-[var(--card-bg)] shadow-2xl">
      {/* Simulation Mode Tabs & Live Deployed Hub */}
      <div className="flex flex-wrap items-center justify-between border-b border-[var(--border)] bg-[var(--bg-surface-2)] p-2 gap-2">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setActiveSimTab("ai")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSimTab === "ai"
                ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-md"
                : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-3)]"
            }`}
          >
            <Bot className="h-4 w-4" />
            <span>24/7 AI Chatbot</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSimTab("caregiver")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSimTab === "caregiver"
                ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-md"
                : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-3)]"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Patient Portal</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSimTab("fefo")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSimTab === "fefo"
                ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-md"
                : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-3)]"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>FEFO Lots</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSimTab("roi")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSimTab === "roi"
                ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-md"
                : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-3)]"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            <span>Revenue ROI</span>
          </button>
        </div>

        <div className="flex items-center gap-2 px-1">
          <a
            href="https://pharmacy-template-tier2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Live App ↗</span>
          </a>
          <a
            href="https://youtu.be/sdgmLqLf6B0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text)] hover:text-red-500 font-semibold text-[11px] flex items-center gap-1.5 transition-colors"
          >
            <Play className="h-3 w-3 text-red-500 fill-red-500/20" />
            <span>Watch Video</span>
          </a>
        </div>
      </div>

      {/* Tab 1: AI Chatbot Experience */}
      {activeSimTab === "ai" && (
        <div className="p-6 lg:p-8 grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Bot className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[var(--card-bg)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text)]">GoodCare AI Assistant</h4>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">
                    ● Online · Instant Response
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[var(--bg-surface-2)] text-[var(--text-muted)] border border-[var(--border)]">
                Groq AI + Local Catalogue
              </span>
            </div>

            {/* Chat Messages Body */}
            <div className="mt-4 space-y-3.5 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="h-3.5 w-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-emerald-600 text-white rounded-br-none"
                        : "bg-[var(--bg-surface-2)] text-[var(--text)] border border-[var(--border)] rounded-bl-none shadow-sm"
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.item && (
                      <div className="mt-3 pt-2.5 border-t border-[var(--border)] flex items-center justify-between gap-2">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                          {msg.item} · {msg.price}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            alert(`Simulated 1-Click Order for ${msg.item} (${msg.price}) via M-Pesa!`)
                          }
                          className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] transition-colors"
                        >
                          Order via M-Pesa
                        </button>
                      </div>
                    )}
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center shrink-0 mt-1">
                      <User className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] italic">
                  <Bot className="h-3.5 w-3.5 text-emerald-500" />
                  <span>AI assistant is verifying stock & clinical dosage...</span>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendCustom} className="mt-4 flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Ask about medicine availability, price, or dosage..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] text-xs sm:text-sm text-[var(--text)] focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Send</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          {/* Quick Prompts & Value Proposition */}
          <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-8">
            <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zero Phone Call Fatigue</span>
              </p>
              <p className="text-[11px] text-[var(--text-muted)] mt-1">
                Your website answers standard stock, dosage, and price enquiries automatically 24/7.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text)] mb-2.5">
                Try Sample Customer Queries:
              </p>
              <div className="space-y-2">
                {sampleChatPrompts.map((p, idx) => (
                  <button
                    key={p.category}
                    type="button"
                    onClick={() => handleSelectPrompt(idx)}
                    className="w-full text-left p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-emerald-500 hover:bg-[var(--bg-surface-2)] text-xs text-[var(--text)] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span className="font-medium truncate pr-2">{p.query}</span>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                      {p.category} →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Patient & Caregiver Adherence Portal */}
      {activeSimTab === "caregiver" && (
        <div className="p-6 lg:p-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Patient Care View
                </span>
                <h4 className="text-lg font-bold text-[var(--text)] mt-0.5">Mama Joyce (Age 68)</h4>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300 font-semibold">
                <Users className="h-3.5 w-3.5" />
                <span>Caregiver: Michael Omondi (Linked)</span>
              </div>
            </div>

            {/* Dose Checklist */}
            <div className="mt-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Today&apos;s Dose Checklist (Click to toggle completion)
              </p>

              {doses.map((dose) => (
                <div
                  key={dose.id}
                  onClick={() => toggleDose(dose.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    dose.taken
                      ? "border-emerald-500/40 bg-emerald-500/5 text-[var(--text)]"
                      : "border-[var(--border)] bg-[var(--bg-surface)] hover:border-emerald-500/30"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                        dose.taken ? "bg-emerald-500 text-white" : "border-2 border-[var(--border)] text-transparent"
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--text)]">{dose.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {dose.time} · {dose.instructions}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        dose.taken
                          ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                          : "bg-amber-500/20 text-amber-700 dark:text-amber-300"
                      }`}
                    >
                      {dose.taken ? `Taken at ${dose.takenAt}` : "Pending"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Automated Caregiver Push Alert Simulation */}
            <div className="mt-6 p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-3">
              <Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Real-time Caregiver WhatsApp & SMS Alerts Active</p>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                  When a dose is missed past schedule, the system sends an automatic polite reminder to both
                  the patient and linked family caregiver.
                </p>
              </div>
            </div>
          </div>

          {/* Adherence Health Card */}
          <div className="space-y-5 border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-8 flex flex-col justify-between">
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface-2)] text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                30-Day Adherence Score
              </p>
              <div className="relative my-4 inline-flex items-center justify-center">
                <span className="text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 font-[family-name:var(--font-display)]">
                  96%
                </span>
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                ✓ On Track · 14-Day Streak
              </p>
              <p className="text-[11px] text-[var(--text-muted)] mt-2">
                Consistent adherence reduces emergency clinic visits by up to 60%.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--gold-border)] bg-[rgba(197,155,39,0.05)]">
              <p className="text-xs font-bold text-[var(--gold-luxury)] uppercase tracking-wider">
                Refill In 4 Days
              </p>
              <p className="text-xs text-[var(--text)] mt-1">
                Metformin 500mg (60 tabs) has 8 doses remaining.
              </p>
              <a
                href={whatsappUrl("Hi GTSS, I'd like a demo of the Patient & Caregiver Adherence module.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                1-Click M-Pesa Refill Demo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: FEFO Batch Lot Expiry Control */}
      {activeSimTab === "fefo" && (
        <div className="p-6 lg:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Inventory Science
              </span>
              <h4 className="text-lg font-bold text-[var(--text)] mt-0.5">
                First-Expired-First-Out (FEFO) Stock Control
              </h4>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Never sell an expired medicine or leave old inventory hidden at the back of the shelf.
              </p>
            </div>

            <button
              type="button"
              onClick={handleSimulateSale}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Simulate 5-Unit Customer Sale</span>
            </button>
          </div>

          {/* Active Batches Table */}
          <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--bg-surface-2)] border-b border-[var(--border)] text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
                  <th className="p-3.5">Batch / Lot Number</th>
                  <th className="p-3.5">Expiry Date</th>
                  <th className="p-3.5">Shelf Days Left</th>
                  <th className="p-3.5">Units in Stock</th>
                  <th className="p-3.5">Dispense Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] bg-[var(--card-bg)] font-mono">
                {stockLots.map((lot) => (
                  <tr key={lot.batch} className="hover:bg-[var(--bg-surface-2)]/50 transition-colors">
                    <td className="p-3.5 font-bold text-[var(--text)]">{lot.batch}</td>
                    <td className="p-3.5 text-[var(--text)]">{lot.expiry}</td>
                    <td className="p-3.5">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          lot.daysLeft < 60
                            ? "bg-amber-500/20 text-amber-700 dark:text-amber-300"
                            : "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                        }`}
                      >
                        {lot.daysLeft} Days
                      </span>
                    </td>
                    <td className="p-3.5 font-bold text-base text-[var(--text)]">{lot.qty} units</td>
                    <td className="p-3.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                          lot.status === "DISPENSE_FIRST"
                            ? "bg-amber-500 text-black animate-pulse"
                            : lot.status === "STANDBY"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-emerald-500/20 text-emerald-400"
                        }`}
                      >
                        {lot.statusLabel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dispense Log Feed */}
          {dispenseLog.length > 0 && (
            <div className="p-4 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border)] space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--gold-luxury)]">
                Live Inventory Ledger Log:
              </p>
              {dispenseLog.map((log, i) => (
                <p key={i} className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                  ✓ {log}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 4: ROI & Revenue Estimator */}
      {activeSimTab === "roi" && (
        <div className="p-6 lg:p-8 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-luxury)]">
                Commercial Impact
              </span>
              <h4 className="text-lg font-bold text-[var(--text)] mt-0.5">
                Pharmacy Online Revenue Calculator
              </h4>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Estimate how much new monthly revenue and operational savings your pharmacy unlocks by going online.
              </p>
            </div>

            {/* Sliders */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-[var(--text)] mb-1.5">
                  <span>Current Daily In-Store Customers</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                    {dailyWalkIns} customers / day
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="5"
                  value={dailyWalkIns}
                  onChange={(e) => setDailyWalkIns(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-[var(--text)] mb-1.5">
                  <span>Average Purchase / Prescription Value</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                    KES {avgTicket.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="3500"
                  step="50"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Revenue Breakdown Result Card */}
          <div className="p-6 rounded-2xl border border-[var(--gold-border)] bg-[rgba(197,155,39,0.03)] space-y-4">
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[var(--gold-luxury)]">
                Projected New Monthly Online GMV
              </p>
              <p className="text-3xl sm:text-4xl font-black text-[var(--text)] font-[family-name:var(--font-display)] mt-1 text-gold-gradient">
                +KES {estimatedNewMonthlyRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                ≈ {estimatedNewOnlineOrdersMonth} online OTC & refill orders per month
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border)]">
              <div>
                <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">Expired Stock Saved</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 font-mono">
                  +KES {estimatedMonthlyExpiredSaved.toLocaleString()}/mo
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[var(--text-muted)]">Staff Phone Hours Saved</p>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-0.5 font-mono">
                  ~{estimatedSavedHours} hrs/mo
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl(
                `Hi GTSS, I ran the Pharmacy ROI Calculator (${dailyWalkIns} daily customers, KES ${avgTicket} avg ticket) and want to put my pharmacy online.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md mt-4"
            >
              Get Custom Pharmacy Deployment Proposal →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
