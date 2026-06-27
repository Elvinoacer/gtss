"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { experienceAssets } from "./experience-data";
import { YouTubePlayer } from "./YouTubePlayer";
import { RestaurantManagerLeadForm } from "../RestaurantManagerLeadForm";
import "./role-experience.css";

/* ── PARTICLES BACKGROUND ────────────────────────────── */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number;
    let particles: any[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const GOLD = "rgba(232,184,75,";
    const N = 90;

    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * 3000,
        y: Math.random() * 3000,
        r: Math.random() * 1.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.5 + 0.1,
      });
    }

    let animationId: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = GOLD + p.a + ")";
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="canvas" ref={canvasRef} />;
}

/* ── MAIN COMPONENT ──────────────────────────────────── */
export function RoleExperience() {
  const [activeTab, setActiveTab] = useState("guest");
  const [selectedAsset, setSelectedAsset] = useState<any>(null);

  useEffect(() => {
    // Scroll Reveal
    const revealEls = document.querySelectorAll(".reveal");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.07 }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    // Sticky Nav Active State
    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveTab(e.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    ["guest", "kitchen", "waiter", "admin"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) navObs.observe(el);
    });

    return () => {
      revealObs.disconnect();
      navObs.disconnect();
    };
  }, []);

  return (
    <div className="exp-page">
      <Particles />

      {/* ── STICKY ROLE NAV ────────────────────────────── */}
      <nav className="role-nav">
        <div className="nav-brand">GTSS · SYSTEM JOURNEY</div>
        <div className="role-tabs">
          <a
            href="#guest"
            className={`role-tab ${activeTab === "guest" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("guest")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            GUEST
          </a>
          <a
            href="#kitchen"
            className={`role-tab ${activeTab === "kitchen" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("kitchen")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            KITCHEN
          </a>
          <a
            href="#waiter"
            className={`role-tab ${activeTab === "waiter" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("waiter")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            WAITER
          </a>
          <a
            href="#admin"
            className={`role-tab ${activeTab === "admin" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("admin")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ADMIN
          </a>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", letterSpacing: "0.15em", color: "var(--text-dim)", display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4CAF50", boxShadow: "0 0 10px rgba(76,175,80,0.4)" }}></div>
            ALL SYSTEMS NOMINAL
          </div>
          <button
            onClick={() => window.open('https://t.me/gtss_copilot', '_blank')}
            className="btn-primary"
            title="Chat with our AI demo assistant on Telegram"
            style={{ padding: "6px 14px", fontSize: "9px", height: "auto", background: "var(--gold)", color: "#000", borderRadius: "2px", clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
          >
            COPILOT TEST
          </button>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line"></div>
          <span className="hero-eyebrow-label">Product Ecosystem · System Journey</span>
        </div>
        <h1 className="hero-heading">
          THE COMPLETE<br />
          <span className="accent">RESTAURANT</span><br />
          OPERATING SYSTEM.
        </h1>
        <p className="hero-sub">
          Four precision-engineered interfaces — Guest, Waiter, Kitchen, and Admin — operating in concert through real-time socket synchronisation.
        </p>

        <div className="hero-role-nodes">
          <div className="role-node band-guest" onClick={() => document.getElementById("guest")?.scrollIntoView({ behavior: "smooth" })}>
            <div><div className="role-node-id">01 —</div><div className="role-node-name">GUEST</div></div>
            <div className="role-node-count">9 SCREENS</div>
          </div>
          <div className="role-node band-kitchen" onClick={() => document.getElementById("kitchen")?.scrollIntoView({ behavior: "smooth" })}>
            <div><div className="role-node-id">02 —</div><div className="role-node-name">KITCHEN</div></div>
            <div className="role-node-count">1 SCREEN</div>
          </div>
          <div className="role-node band-waiter" onClick={() => document.getElementById("waiter")?.scrollIntoView({ behavior: "smooth" })}>
            <div><div className="role-node-id">03 —</div><div className="role-node-name">WAITER</div></div>
            <div className="role-node-count">2 SCREENS</div>
          </div>
          <div className="role-node band-admin" onClick={() => document.getElementById("admin")?.scrollIntoView({ behavior: "smooth" })}>
            <div><div className="role-node-id">04 —</div><div className="role-node-name">ADMIN</div></div>
            <div className="role-node-count">20+ SCREENS</div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat-cell">
          <div className="stat-label">Coverage</div>
          <div className="stat-value">Every role<span className="stat-unit">GUEST TO ADMIN</span></div>
        </div>
        <div className="stat-cell">
          <div className="stat-label">Resilience</div>
          <div className="stat-value">Offline<span className="stat-unit">CAPABLE</span></div>
        </div>
        <div className="stat-cell">
          <div className="stat-label">Speed</div>
          <div className="stat-value">&lt;2s<span className="stat-unit">SCAN TO KITCHEN</span></div>
        </div>
        <div className="stat-cell">
          <div className="stat-label">Payments</div>
          <div className="stat-value">M-Pesa<span className="stat-unit">RECONCILED</span></div>
        </div>
      </div>

      {/* ── TICKER ─────────────────────────────────────── */}
      <div className="ticker-wrap">
        <div className="ticker">
          {[
            "Guest Ordering Flow", "Waiter Dashboard", "Kitchen Kanban Board", "Admin Operations Center",
            "Real-time Socket Sync", "Retail Storefront", "M-Pesa Payment Integration", "Commission Reconciliation",
            "Analytics Dashboard", "Audit Trail Viewer", "Table Occupancy Board", "Bulk Order Operations"
          ].map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "Guest Ordering Flow", "Waiter Dashboard", "Kitchen Kanban Board", "Admin Operations Center",
            "Real-time Socket Sync", "Retail Storefront", "M-Pesa Payment Integration", "Commission Reconciliation",
            "Analytics Dashboard", "Audit Trail Viewer", "Table Occupancy Board", "Bulk Order Operations"
          ].map((item, i) => (
            <span key={`dup-${i}`} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ── 01: GUEST EXPERIENCE ──────────────────────────── */}
      <section className="section role-guest" id="guest">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-number">01</div>
            <div className="section-title-block">
              <div className="section-eyebrow">Role · Guest</div>
              <h2 className="section-title">THE GUEST<br /><span className="accent">EXPERIENCE</span></h2>
              <p className="section-desc">A device-native flow — no login required. Guests browse the full menu, customise orders, track live progress, manage payment, and raise issues — all from their table device.</p>
            </div>
            <div className="section-meta">
              <div className="meta-pill"><span className="dot"></span> No login required</div>
              <div className="meta-pill"><span className="dot"></span> Real-time order updates</div>
              <div className="meta-pill"><span className="dot"></span> M-Pesa STK push</div>
              <div className="meta-pill"><span className="dot"></span> Retail storefront</div>
            </div>
          </div>

          <div className="reveal" style={{ marginBottom: "2px" }}>
            <div className="media-frame video-frame wide" data-label="VIDEO · GUEST_WALKTHROUGH_01">
              <div className="media-frame-inner">
                <YouTubePlayer url={experienceAssets['guest-hero']?.url} title={experienceAssets['guest-hero']?.title} />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <div className="screen-label band-guest">
              <div><div className="screen-name">Complete Guest Journey</div><div className="screen-path">/ · /orders · /bill · /retail · /help</div></div>
              <div className="screen-role-badge">GUEST VIDEO</div>
            </div>
          </div>

          {/* ── STEP 1: ARRIVAL ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 01</div>
              <div className="step-title">Arrival</div>
            </div>
            <p className="step-narrative">The moment they scan, they&apos;re already ordering. No app to download. No account to create. No waiting for a waiter to bring a laminated menu. Just instant access to everything your restaurant offers — from their own phone.</p>
            <div className="grid-2" style={{ maxWidth: "640px" }}>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · ClientLanding">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-landing']?.url} alt={experienceAssets['guest-landing']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-landing'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Landing Interface</div><div className="screen-path">Route: /</div></div>
                  <div className="screen-role-badge">GUEST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">Guest begins browsing →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 2: DISCOVERY ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 02</div>
              <div className="step-title">Discovery</div>
            </div>
            <p className="step-narrative">Your entire menu, beautifully presented and always up to date. Guests browse by category, search by name, and find hotel amenities — all from their table. No printed menus to reprint when prices change.</p>
            <div className="grid-3">
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · ClientMenu">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-menu']?.url} alt={experienceAssets['guest-menu']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-menu'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Digital Menu</div><div className="screen-path">Route: /menu</div></div>
                  <div className="screen-role-badge">GUEST</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · ClientInfoTop">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-info-top']?.url} alt={experienceAssets['guest-info-top']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-info-top'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Restaurant Profile</div><div className="screen-path">Header Info</div></div>
                  <div className="screen-role-badge">GUEST</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · ClientInfoAmenities">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-info-amenities']?.url} alt={experienceAssets['guest-info-amenities']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-info-amenities'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Amenities</div><div className="screen-path">WiFi & Services</div></div>
                  <div className="screen-role-badge">GUEST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">Guest finds something they like →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 3: SELECTION ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 03</div>
              <div className="step-title">Selection</div>
            </div>
            <p className="step-narrative">Rich item details with photos and pricing — your guest knows exactly what they&apos;re getting. Add-ons, special instructions, dietary notes — all captured before the order ever reaches the kitchen. No miscommunication.</p>
            <div className="grid-2" style={{ maxWidth: "640px" }}>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="MODAL · ItemDetail">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-item-detail']?.url} alt={experienceAssets['guest-item-detail']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-item-detail'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Item Details</div><div className="screen-path">Selection Modal</div></div>
                  <div className="screen-role-badge">MODAL</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="MODAL · ItemCustomize">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-item-customize']?.url} alt={experienceAssets['guest-item-customize']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-item-customize'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Customization</div><div className="screen-path">Addons & Notes</div></div>
                  <div className="screen-role-badge">MODAL</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">Ready to order →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 4: CHECKOUT ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 04</div>
              <div className="step-title">Checkout</div>
            </div>
            <p className="step-narrative">One tap to pay. M-Pesa STK push fires instantly — the guest confirms on their phone, and the order hits the kitchen in under a second. No waiting for the bill. No flagging down a waiter. No cash disputes.</p>
            <div className="grid-3">
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · ClientCart">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-cart']?.url} alt={experienceAssets['guest-cart']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-cart'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Main Cart</div><div className="screen-path">Order Summary</div></div>
                  <div className="screen-role-badge">GUEST</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="MODAL · ClientPayment">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-payment']?.url} alt={experienceAssets['guest-payment']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-payment'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Payment Gateway</div><div className="screen-path">M-Pesa STK</div></div>
                  <div className="screen-role-badge">MODAL</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · ClientOrders">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-orders']?.url} alt={experienceAssets['guest-orders']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-orders'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Live Orders</div><div className="screen-path">Route: /orders</div></div>
                  <div className="screen-role-badge">GUEST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">Order placed — need anything else? →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 5: TRACKING & SUPPORT ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 05</div>
              <div className="step-title">Tracking & Support</div>
            </div>
            <p className="step-narrative">Your guest watches their order move from &ldquo;received&rdquo; to &ldquo;preparing&rdquo; to &ldquo;ready&rdquo; — live, on their phone. No anxious wondering. The bill is itemised and transparent. And if something goes wrong, help is one tap away.</p>
            <div className="grid-2" style={{ maxWidth: "640px" }}>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · ClientBills">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-bills']?.url} alt={experienceAssets['guest-bills']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-bills'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Bill Breakdown</div><div className="screen-path">Route: /bill</div></div>
                  <div className="screen-role-badge">GUEST</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · ClientHelp">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-help']?.url} alt={experienceAssets['guest-help']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-help'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Help & Support</div><div className="screen-path">Route: /help</div></div>
                  <div className="screen-role-badge">GUEST</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">There is more to explore →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 6: RETAIL COMMERCE ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 06</div>
              <div className="step-title">Retail Commerce</div>
            </div>
            <p className="step-narrative">Your restaurant isn&apos;t just a kitchen — it&apos;s a brand. Guests browse and buy retail items, souvenirs, and services through a built-in storefront. A second revenue stream that costs you nothing extra to run.</p>
            <div className="grid-3">
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · RetailMenu">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-retail-menu']?.url} alt={experienceAssets['guest-retail-menu']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-retail-menu'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Retail Store</div><div className="screen-path">Route: /retail</div></div>
                  <div className="screen-role-badge">RETAIL</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · RetailCategories">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-retail-categories']?.url} alt={experienceAssets['guest-retail-categories']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-retail-categories'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Product Categories</div><div className="screen-path">Retail Filter</div></div>
                  <div className="screen-role-badge">RETAIL</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · RetailCart">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['guest-retail-cart']?.url} alt={experienceAssets['guest-retail-cart']?.title} onClick={() => setSelectedAsset(experienceAssets['guest-retail-cart'])} />
                  </div>
                </div>
                <div className="screen-label band-guest">
                  <div><div className="screen-name">Retail Checkout</div><div className="screen-path">Retail Cart</div></div>
                  <div className="screen-role-badge">RETAIL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── 02: KITCHEN BOARD ───────────────────────────── */}
      <section className="section role-kitchen" id="kitchen">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-number">02</div>
            <div className="section-title-block">
              <div className="section-eyebrow">Role · Kitchen</div>
              <h2 className="section-title">THE KITCHEN<br /><span className="accent">BOARD</span></h2>
              <p className="section-desc">A focused, real-time order board engineered for kitchen staff. Dual view modes, urgency timers, bulk column advance, and continuous socket sync ensure no order is missed or delayed.</p>
            </div>
            <div className="section-meta">
              <div className="meta-pill"><span className="dot"></span> Kanban + list modes</div>
              <div className="meta-pill"><span className="dot"></span> Urgency timer per order</div>
              <div className="meta-pill"><span className="dot"></span> Column-level bulk advance</div>
              <div className="meta-pill"><span className="dot"></span> Sound toggle</div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">The order arrives in the kitchen →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 1: ORDER ARRIVES ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 01</div>
              <div className="step-title">Order Arrives</div>
            </div>
            <p className="step-narrative">The moment a guest places an order, it appears on the Kitchen Board in real-time via WebSocket. The Kanban view organises orders by status columns — Pending, Preparing, Ready — with live elapsed timers on every card.</p>
            <div className="grid-2" style={{ maxWidth: "900px" }}>
              <div className="screen-card">
                <div className="media-frame" data-label="SCREENSHOT · Kitchen_KanbanView">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['kitchen-kanban']?.url} alt={experienceAssets['kitchen-kanban']?.title} onClick={() => setSelectedAsset(experienceAssets['kitchen-kanban'])} />
                  </div>
                </div>
                <div className="screen-label band-kitchen">
                  <div><div className="screen-name">Kitchen Board · Kanban</div><div className="screen-path">Route: /kitchen · Kanban mode</div></div>
                  <div className="screen-role-badge">KITCHEN</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame" data-label="SCREENSHOT · Kitchen_ListView">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['kitchen-list']?.url} alt={experienceAssets['kitchen-list']?.title} onClick={() => setSelectedAsset(experienceAssets['kitchen-list'])} />
                  </div>
                </div>
                <div className="screen-label band-kitchen">
                  <div><div className="screen-name">Kitchen Board · List</div><div className="screen-path">Route: /kitchen · List mode</div></div>
                  <div className="screen-role-badge">KITCHEN</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">High-volume tools →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 2: BULK OPERATIONS ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">HIGHLIGHT</div>
              <div className="step-title">Bulk Operations</div>
            </div>
            <p className="step-narrative">For high-volume service, Bulk Mode and Column Quick-Advance let kitchen staff move entire batches of orders with a single action — drastically reducing interface fatigue during peak hours.</p>
            <div className="grid-4060">
              <div className="screen-card">
                <div className="media-frame" data-label="SCREENSHOT · Kitchen_BulkMode">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['kitchen-list']?.url} alt={experienceAssets['kitchen-list']?.title} onClick={() => setSelectedAsset(experienceAssets['kitchen-list'])} />
                  </div>
                </div>
                <div className="screen-label band-kitchen">
                  <div><div className="screen-name">Bulk Operations</div><div className="screen-path">/kitchen · Bulk enabled</div></div>
                  <div className="screen-role-badge">KITCHEN</div>
                </div>
              </div>
              <div className="action-panel" style={{ flex: 1 }}>
                <div className="action-panel-title">🍳 All Kitchen Actions</div>
                <ul className="action-list">
                  <li className="action-item"><span className="action-num">→</span>Load active kitchen orders on mount</li>
                  <li className="action-item"><span className="action-num">→</span>Real-time: new order + status update via socket</li>
                  <li className="action-item"><span className="action-num">→</span>Toggle view mode: kanban ↔ list</li>
                  <li className="action-item"><span className="action-num">→</span>Toggle sound notifications on/off</li>
                  <li className="action-item"><span className="action-num">→</span>Enable bulk mode, select orders</li>
                  <li className="action-item"><span className="action-num">→</span>Select all / unselect all in a status column</li>
                  <li className="action-item"><span className="action-num">→</span>Per-column quick advance</li>
                  <li className="action-item"><span className="action-num">→</span>Live per-order elapsed timer display</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03: WAITER WORKFLOW ───────────────────────────── */}
      <section className="section role-waiter" id="waiter">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-number">03</div>
            <div className="section-title-block">
              <div className="section-eyebrow">Role · Waiter</div>
              <h2 className="section-title">THE WAITER<br /><span className="accent">WORKFLOW</span></h2>
              <p className="section-desc">Front-of-house operations. Waiters receive assigned orders via live socket, manage status transitions, confirm payments, and communicate with admin — all from a single mobile-optimised dashboard.</p>
            </div>
            <div className="section-meta">
              <div className="meta-pill"><span className="dot"></span> Live assignment toasts</div>
              <div className="meta-pill"><span className="dot"></span> Bulk order operations</div>
              <div className="meta-pill"><span className="dot"></span> Admin chat workspace</div>
              <div className="meta-pill"><span className="dot"></span> Detailed action reasons</div>
              <div className="meta-pill"><span className="dot"></span> Sound + vibration alerts</div>
            </div>
          </div>

          <div className="reveal" style={{ marginBottom: "2px" }}>
            <div className="media-frame video-frame" data-label="VIDEO · WAITER_WALKTHROUGH_01">
              <div className="media-frame-inner">
                <YouTubePlayer url={experienceAssets['waiter-main']?.url} title={experienceAssets['waiter-main']?.title} />
              </div>
            </div>
            <div className="screen-label band-waiter">
              <div><div className="screen-name">Waiter Journey — Full Walkthrough</div><div className="screen-path">/waiter · /waiter/dashboard</div></div>
              <div className="screen-role-badge">WAITER VIDEO</div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">Screen-by-screen breakdown →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 1: SIGN IN ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 01</div>
              <div className="step-title">Sign In</div>
            </div>
            <p className="step-narrative">Waiters authenticate with secure credentials. The session persists across shifts — no need to re-login after a break.</p>
            <div className="grid-2" style={{ maxWidth: "640px" }}>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · WaiterLogin">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['waiter-login']?.url} alt={experienceAssets['waiter-login']?.title} onClick={() => setSelectedAsset(experienceAssets['waiter-login'])} />
                  </div>
                </div>
                <div className="screen-label band-waiter">
                  <div><div className="screen-name">Waiter Login</div><div className="screen-path">Route: /waiter</div></div>
                  <div className="screen-role-badge">PUBLIC</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">Authenticated — dashboard loads →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 2: LIVE DASHBOARD ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 02</div>
              <div className="step-title">Live Dashboard</div>
            </div>
            <p className="step-narrative">The dashboard shows all assigned orders in real-time. New assignments trigger sound and vibration alerts. The recent feed provides a live activity log of all order events.</p>
            <div className="grid-2" style={{ maxWidth: "640px" }}>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREENSHOT · WaiterDashboard_Overview">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['waiter-dashboard']?.url} alt={experienceAssets['waiter-dashboard']?.title} onClick={() => setSelectedAsset(experienceAssets['waiter-dashboard'])} />
                  </div>
                </div>
                <div className="screen-label band-waiter">
                  <div><div className="screen-name">Waiter Dashboard</div><div className="screen-path">Route: /waiter/dashboard</div></div>
                  <div className="screen-role-badge">WAITER</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · WaiterRecent">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['waiter-recent']?.url} alt={experienceAssets['waiter-recent']?.title} onClick={() => setSelectedAsset(experienceAssets['waiter-recent'])} />
                  </div>
                </div>
                <div className="screen-label band-waiter">
                  <div><div className="screen-name">Recent Feed</div><div className="screen-path">Live Activity</div></div>
                  <div className="screen-role-badge">WAITER</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">Coordinating with the team →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 3: TEAM COORDINATION ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 03</div>
              <div className="step-title">Team Coordination</div>
            </div>
            <p className="step-narrative">View team workload balance across all waiters, configure personal alert preferences for sound and vibration, and chat directly with admin for quick coordination.</p>
            <div className="grid-3">
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · WaiterTeam">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['waiter-team']?.url} alt={experienceAssets['waiter-team']?.title} onClick={() => setSelectedAsset(experienceAssets['waiter-team'])} />
                  </div>
                </div>
                <div className="screen-label band-waiter">
                  <div><div className="screen-name">Team Balance</div><div className="screen-path">Workload Monitor</div></div>
                  <div className="screen-role-badge">WAITER</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · WaiterAlerts">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['waiter-alerts']?.url} alt={experienceAssets['waiter-alerts']?.title} onClick={() => setSelectedAsset(experienceAssets['waiter-alerts'])} />
                  </div>
                </div>
                <div className="screen-label band-waiter">
                  <div><div className="screen-name">Alert Config</div><div className="screen-path">Sound & Vibration</div></div>
                  <div className="screen-role-badge">WAITER</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · WaiterChat">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['waiter-chat']?.url} alt={experienceAssets['waiter-chat']?.title} onClick={() => setSelectedAsset(experienceAssets['waiter-chat'])} />
                  </div>
                </div>
                <div className="screen-label band-waiter">
                  <div><div className="screen-name">Staff Chat</div><div className="screen-path">Admin Communication</div></div>
                  <div className="screen-role-badge">WAITER</div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-connector reveal"><div className="step-connector-line"></div><div className="step-connector-text">Managing the queue →</div><div className="step-connector-line"></div></div>

          {/* ── STEP 4: ORDER MANAGEMENT ── */}
          <div className="journey-step reveal">
            <div className="journey-step-header">
              <div className="step-number">STEP 04</div>
              <div className="step-title">Order Management</div>
            </div>
            <p className="step-narrative">Queue tools enable bulk operations on multiple orders. Past orders are archived for performance tracking and commission reconciliation across shifts.</p>
            <div className="grid-2" style={{ maxWidth: "640px" }}>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · WaiterQueue">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['waiter-queue']?.url} alt={experienceAssets['waiter-queue']?.title} onClick={() => setSelectedAsset(experienceAssets['waiter-queue'])} />
                  </div>
                </div>
                <div className="screen-label band-waiter">
                  <div><div className="screen-name">Queue Tools</div><div className="screen-path">Bulk Operations</div></div>
                  <div className="screen-role-badge">WAITER</div>
                </div>
              </div>
              <div className="screen-card">
                <div className="media-frame mobile-portrait" data-label="SCREEN · WaiterHistory">
                  <div className="media-frame-inner">
                    <img src={experienceAssets['waiter-history']?.url} alt={experienceAssets['waiter-history']?.title} onClick={() => setSelectedAsset(experienceAssets['waiter-history'])} />
                  </div>
                </div>
                <div className="screen-label band-waiter">
                  <div><div className="screen-name">Order History</div><div className="screen-path">Past Shifts</div></div>
                  <div className="screen-role-badge">WAITER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── 04: ADMIN COMMAND CENTER ─────────────────────── */}
      <section className="section role-admin" id="admin">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-number">04</div>
            <div className="section-title-block">
              <div className="section-eyebrow">Role · Admin</div>
              <h2 className="section-title">THE ADMIN<br /><span className="accent">COMMAND CENTER</span></h2>
              <p className="section-desc">The central nervous system for restaurant operations. Spanning over 20 screens organised into 6 core business concerns: Live Operations, Catalog Management, Intelligence, Incident Management, System Configuration, and Infrastructure.</p>
            </div>
            <div className="section-meta">
              <div className="meta-pill"><span className="dot"></span> 6 Business Concerns</div>
              <div className="meta-pill"><span className="dot"></span> 20+ Enterprise Screens</div>
              <div className="meta-pill"><span className="dot"></span> Immutable Audit Trails</div>
            </div>
          </div>

          {/* ── GROUP A: OPERATIONS & FINANCIAL CONTROL ────────── */}
          <div className="admin-group-header reveal">
            <div className="admin-group-letter">A</div>
            <div><div className="admin-group-title">Live Operations & Financial Control</div><div className="admin-group-desc">The nerve center — monitor every active order, track staff, handle incidents, and reconcile payments.</div></div>
          </div>
          <div className="grid-4 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · AdminDashOps">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-dash-1']?.url} alt={experienceAssets['admin-dash-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-dash-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Operations Dash</div><div className="screen-path">Route: /admin</div></div>
                <div className="screen-role-badge">ADMIN</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · AdminDashInsights">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-dash-2']?.url} alt={experienceAssets['admin-dash-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-dash-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Operational Insights</div><div className="screen-path">Primary Overview</div></div>
                <div className="screen-role-badge">ADMIN</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · PaymentRecon">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-dash-payments']?.url} alt={experienceAssets['admin-dash-payments']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-dash-payments'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Payment Reconciliation</div><div className="screen-path">Financial Workspace</div></div>
                <div className="screen-role-badge">FINANCE</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · EndOfDay">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-end-of-day']?.url} alt={experienceAssets['admin-end-of-day']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-end-of-day'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">End of Day Reporting</div><div className="screen-path">Shift Closure</div></div>
                <div className="screen-role-badge">REPORT</div>
              </div>
            </div>
          </div>

          {/* ── GROUP B: MENU & CATALOG ENGINE ─────────────── */}
          <div className="admin-group-header reveal">
            <div className="admin-group-letter">B</div>
            <div><div className="admin-group-title">Menu & Catalog Engine</div><div className="admin-group-desc">Build and manage the entire digital menu — categories, items, pricing, images, allergens, and add-ons.</div></div>
          </div>
          <div className="grid-4 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · MenuCategories1">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-menu-categories-1']?.url} alt={experienceAssets['admin-menu-categories-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-menu-categories-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Menu Categories</div><div className="screen-path">Structural Design</div></div>
                <div className="screen-role-badge">CATALOG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · MenuCategories2">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-menu-categories-2']?.url} alt={experienceAssets['admin-menu-categories-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-menu-categories-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Category Content</div><div className="screen-path">Asset Mapping</div></div>
                <div className="screen-role-badge">CATALOG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · MenuItems1">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-menu-items-1']?.url} alt={experienceAssets['admin-menu-items-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-menu-items-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Master Catalog</div><div className="screen-path">Price Engine</div></div>
                <div className="screen-role-badge">CATALOG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · MenuItems2">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-menu-items-2']?.url} alt={experienceAssets['admin-menu-items-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-menu-items-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Item Workbench</div><div className="screen-path">Grammage & Pricing</div></div>
                <div className="screen-role-badge">CATALOG</div>
              </div>
            </div>
          </div>
          <div className="grid-3 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · RetailProducts">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-retail-catalog-products']?.url} alt={experienceAssets['admin-retail-catalog-products']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-retail-catalog-products'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Retail Inventory</div><div className="screen-path">SKU Management</div></div>
                <div className="screen-role-badge">RETAIL</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · RetailServices">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-retail-catalog-services']?.url} alt={experienceAssets['admin-retail-catalog-services']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-retail-catalog-services'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Amenity Catalog</div><div className="screen-path">Service Config</div></div>
                <div className="screen-role-badge">RETAIL</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · RetailCategories">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-retail-catalog-categories']?.url} alt={experienceAssets['admin-retail-catalog-categories']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-retail-catalog-categories'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Retail Taxonomy</div><div className="screen-path">Category Mapping</div></div>
                <div className="screen-role-badge">RETAIL</div>
              </div>
            </div>
          </div>
          <div className="grid-2 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · RetailOpsHub">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-retail-1']?.url} alt={experienceAssets['admin-retail-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-retail-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Retail Command Hub</div><div className="screen-path">Live Operations</div></div>
                <div className="screen-role-badge">RETAIL</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · RetailOrders">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-retail-orders']?.url} alt={experienceAssets['admin-retail-orders']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-retail-orders'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Retail Order Tracking</div><div className="screen-path">Fulfillment Board</div></div>
                <div className="screen-role-badge">RETAIL</div>
              </div>
            </div>
          </div>

          {/* ── GROUP C: INTELLIGENCE & ANALYTICS ──────────── */}
          <div className="admin-group-header reveal">
            <div className="admin-group-letter">C</div>
            <div><div className="admin-group-title">Intelligence & Exports</div><div className="admin-group-desc">Revenue analytics, efficiency metrics, customer behavior insights, and CSV/PDF export engine.</div></div>
          </div>
          <div className="grid-3 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="ANALYTICS · Financials">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-analytics-1']?.url} alt={experienceAssets['admin-analytics-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-analytics-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Revenue Intelligence</div><div className="screen-path">Financial DNA</div></div>
                <div className="screen-role-badge">ANALYTICS</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="ANALYTICS · Operations">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-analytics-2']?.url} alt={experienceAssets['admin-analytics-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-analytics-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Efficiency Metrics</div><div className="screen-path">Operational Flow</div></div>
                <div className="screen-role-badge">ANALYTICS</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="ANALYTICS · behavior">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-analytics-3']?.url} alt={experienceAssets['admin-analytics-3']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-analytics-3'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Guest Behavior</div><div className="screen-path">Persona Analysis</div></div>
                <div className="screen-role-badge">ANALYTICS</div>
              </div>
            </div>
          </div>
          <div className="grid-4 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="EXPORT · EngineCSV">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-export-1']?.url} alt={experienceAssets['admin-export-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-export-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">CSV Export Engine</div><div className="screen-path">Raw Data Relay</div></div>
                <div className="screen-role-badge">DATA</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="EXPORT · Statements">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-export-2']?.url} alt={experienceAssets['admin-export-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-export-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Bank Reconciliation</div><div className="screen-path">Audit Export</div></div>
                <div className="screen-role-badge">DATA</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="EXPORT · Staff">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-export-3']?.url} alt={experienceAssets['admin-export-3']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-export-3'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Commissions Report</div><div className="screen-path">Staff Performance</div></div>
                <div className="screen-role-badge">DATA</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="EXPORT · Inventory">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-export-4']?.url} alt={experienceAssets['admin-export-4']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-export-4'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Inventory Audit</div><div className="screen-path">Stock Movements</div></div>
                <div className="screen-role-badge">DATA</div>
              </div>
            </div>
          </div>

          {/* ── GROUP D: OPERATIONS & INCIDENT MGMT ─────────── */}
          <div className="admin-group-header reveal">
            <div className="admin-group-letter">D</div>
            <div><div className="admin-group-title">Operations & Incident Management</div><div className="admin-group-desc">Customer issues, staff monitoring, broadcast notifications, and team communication.</div></div>
          </div>
          <div className="grid-3 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · CustomerMaster">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-customers-1']?.url} alt={experienceAssets['admin-customers-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-customers-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Guest Directory</div><div className="screen-path">Route: /admin/customers</div></div>
                <div className="screen-role-badge">ADMIN</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · CustomerInsights">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-customers-2']?.url} alt={experienceAssets['admin-customers-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-customers-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Guest Analytics</div><div className="screen-path">Interactions Log</div></div>
                <div className="screen-role-badge">ADMIN</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · CustomerSegments">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-customers-3']?.url} alt={experienceAssets['admin-customers-3']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-customers-3'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">VIP Segmentation</div><div className="screen-path">Priority Boards</div></div>
                <div className="screen-role-badge">ADMIN</div>
              </div>
            </div>
          </div>
          <div className="grid-4 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · StaffMonitor">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-staff-monitor']?.url} alt={experienceAssets['admin-staff-monitor']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-staff-monitor'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Staff Live Monitor</div><div className="screen-path">Floor Control</div></div>
                <div className="screen-role-badge">ADMIN</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · StaffChat">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-messages']?.url} alt={experienceAssets['admin-messages']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-messages'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Staff Chat Space</div><div className="screen-path">Unified Comms</div></div>
                <div className="screen-role-badge">ADMIN</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · Notifications">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-notifications']?.url} alt={experienceAssets['admin-notifications']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-notifications'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Alert History</div><div className="screen-path">Notification Center</div></div>
                <div className="screen-role-badge">ADMIN</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SCREEN · IssuesBoard">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-issues']?.url} alt={experienceAssets['admin-issues']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-issues'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Issue Management</div><div className="screen-path">Incident Resolution</div></div>
                <div className="screen-role-badge">TICKETS</div>
              </div>
            </div>
          </div>

          {/* ── GROUP E: CONFIGURATION & SPACE ─────────────── */}
          <div className="admin-group-header reveal">
            <div className="admin-group-letter">E</div>
            <div><div className="admin-group-title">System Configuration</div><div className="admin-group-desc">Full system setup — branding, payment providers, team management, media library, and table occupancy.</div></div>
          </div>
          <div className="grid-3 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="CONFIG · General1">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-general-1']?.url} alt={experienceAssets['admin-settings-general-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-general-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Core Business</div><div className="screen-path">Identity Config</div></div>
                <div className="screen-role-badge">CONFIG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="CONFIG · General2">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-general-2']?.url} alt={experienceAssets['admin-settings-general-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-general-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Operational Logic</div><div className="screen-path">Routing Prefs</div></div>
                <div className="screen-role-badge">CONFIG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="CONFIG · General3">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-general-3']?.url} alt={experienceAssets['admin-settings-general-3']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-general-3'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Localization & UI</div><div className="screen-path">Branding Portal</div></div>
                <div className="screen-role-badge">CONFIG</div>
              </div>
            </div>
          </div>
          <div className="grid-4 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="CONFIG · Team1">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-team-1']?.url} alt={experienceAssets['admin-settings-team-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-team-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Access Control</div><div className="screen-path">RBAC Workspace</div></div>
                <div className="screen-role-badge">CONFIG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="CONFIG · Team2">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-team-2']?.url} alt={experienceAssets['admin-settings-team-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-team-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Credential Manager</div><div className="screen-path">Staff Security</div></div>
                <div className="screen-role-badge">CONFIG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="CONFIG · Payments1">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-payments-1']?.url} alt={experienceAssets['admin-settings-payments-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-payments-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Gateway Config</div><div className="screen-path">M-Pesa Node</div></div>
                <div className="screen-role-badge">CONFIG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="CONFIG · Payments2">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-payments-2']?.url} alt={experienceAssets['admin-settings-payments-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-payments-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Tax & Fees</div><div className="screen-path">Commission Logic</div></div>
                <div className="screen-role-badge">CONFIG</div>
              </div>
            </div>
          </div>
          <div className="grid-3 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="CONFIG · MediaLibrary">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-gallery']?.url} alt={experienceAssets['admin-settings-gallery']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-gallery'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Central Media</div><div className="screen-path">Asset Storage</div></div>
                <div className="screen-role-badge">CONFIG</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SPACE · Occupancy1">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-table-occupancy-1']?.url} alt={experienceAssets['admin-table-occupancy-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-table-occupancy-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Live Floor Map</div><div className="screen-path">Space Visualization</div></div>
                <div className="screen-role-badge">SPACE</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="SPACE · Occupancy2">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-table-occupancy-2']?.url} alt={experienceAssets['admin-table-occupancy-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-table-occupancy-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Session Manager</div><div className="screen-path">Table Operations</div></div>
                <div className="screen-role-badge">SPACE</div>
              </div>
            </div>
          </div>

          {/* ── GROUP F: INFRASTRUCTURE NODES ─────────────── */}
          <div className="admin-group-header reveal">
            <div className="admin-group-letter">F</div>
            <div><div className="admin-group-title">Infrastructure & Compliance</div><div className="admin-group-desc">Webhooks, API portal, QR engine, data export, and immutable audit trails.</div></div>
          </div>
          <div className="grid-4 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="INFRA · Integrations1">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-integrations-1']?.url} alt={experienceAssets['admin-integrations-1']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-integrations-1'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">External Webhooks</div><div className="screen-path">Data Relay</div></div>
                <div className="screen-role-badge">INFRA</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="INFRA · Integrations2">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-integrations-2']?.url} alt={experienceAssets['admin-integrations-2']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-integrations-2'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">API Portal</div><div className="screen-path">Developer Tokens</div></div>
                <div className="screen-role-badge">INFRA</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="INFRA · QRGenTable">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-settings-qrcodes']?.url} alt={experienceAssets['admin-settings-qrcodes']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-settings-qrcodes'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Table QR Engine</div><div className="screen-path">Dynamic Routing</div></div>
                <div className="screen-role-badge">INFRA</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="INFRA · SystemLaunchers">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-launcher-qrs']?.url} alt={experienceAssets['admin-launcher-qrs']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-launcher-qrs'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Launcher Nodes</div><div className="screen-path">Entry QR Mapping</div></div>
                <div className="screen-role-badge">INFRA</div>
              </div>
            </div>
          </div>
          <div className="grid-2 reveal" style={{ marginBottom: "2px" }}>
            <div className="screen-card">
              <div className="media-frame" data-label="INFRA · AuditLogs">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-audit-logs']?.url} alt={experienceAssets['admin-audit-logs']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-audit-logs'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">System Audit Trail</div><div className="screen-path">Immutable Records</div></div>
                <div className="screen-role-badge">INFRA</div>
              </div>
            </div>
            <div className="screen-card">
              <div className="media-frame" data-label="INFRA · Archives">
                <div className="media-frame-inner">
                  <img src={experienceAssets['admin-archives']?.url} alt={experienceAssets['admin-archives']?.title} onClick={() => setSelectedAsset(experienceAssets['admin-archives'])} />
                </div>
              </div>
              <div className="screen-label band-admin">
                <div><div className="screen-name">Data Archives</div><div className="screen-path">Compliance Logs</div></div>
                <div className="screen-role-badge">INFRA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05: SYSTEM FLOW ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-number">05</div>
            <div className="section-title-block">
              <div className="section-eyebrow">System Architecture</div>
              <h2 className="section-title">HOW THE ROLES<br /><span className="accent">CONNECT</span></h2>
              <p className="section-desc">Every order placed by a guest propagates through the full system — socket-synced in real time to kitchen, waiter, and admin simultaneously.</p>
            </div>
          </div>

          <div className="flow-strip reveal">
            <div className="flow-node">
              <div className="flow-node-icon" style={{ borderColor: "#5B9BD5", color: "#5B9BD5" }}>◉</div>
              <div className="flow-node-label" style={{ color: "#5B9BD5" }}>Guest</div>
              <div className="flow-node-desc">Places order<br />via device UI.<br />No login required.</div>
            </div>
            <div className="flow-node">
              <div className="flow-node-icon" style={{ borderColor: "#E07B54", color: "#E07B54" }}>◈</div>
              <div className="flow-node-label" style={{ color: "#E07B54" }}>Kitchen</div>
              <div className="flow-node-desc">Receives live order.<br />Advances through<br />kanban statuses.</div>
            </div>
            <div className="flow-node">
              <div className="flow-node-icon" style={{ borderColor: "#7BC47A", color: "#7BC47A" }}>◆</div>
              <div className="flow-node-label" style={{ color: "#7BC47A" }}>Waiter</div>
              <div className="flow-node-desc">Gets assigned order.<br />Delivers + confirms<br />payment at table.</div>
            </div>
            <div className="flow-node">
              <div className="flow-node-icon" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>◇</div>
              <div className="flow-node-label" style={{ color: "var(--gold)" }}>Admin</div>
              <div className="flow-node-desc">Monitors all lanes.<br />Manages team,<br />menu, analytics.</div>
            </div>
          </div>

          <div className="grid-4 reveal" style={{ marginTop: "2px" }}>
            <div className="action-panel">
              <div className="action-panel-title" style={{ color: "#5B9BD5" }}>GUEST ACTIONS</div>
              <ul className="action-list">
                <li className="action-item"><span className="action-num" style={{ color: "#5B9BD5" }}>→</span>Browse + filter menu</li>
                <li className="action-item"><span className="action-num" style={{ color: "#5B9BD5" }}>→</span>Customise + add to cart</li>
                <li className="action-item"><span className="action-num" style={{ color: "#5B9BD5" }}>→</span>Submit order with table</li>
                <li className="action-item"><span className="action-num" style={{ color: "#5B9BD5" }}>→</span>Track live status</li>
                <li className="action-item"><span className="action-num" style={{ color: "#5B9BD5" }}>→</span>Pay via STK or manual</li>
                <li className="action-item"><span className="action-num" style={{ color: "#5B9BD5" }}>→</span>Browse retail + checkout</li>
                <li className="action-item"><span className="action-num" style={{ color: "#5B9BD5" }}>→</span>Raise issues</li>
              </ul>
            </div>
            <div className="action-panel">
              <div className="action-panel-title" style={{ color: "#E07B54" }}>KITCHEN ACTIONS</div>
              <ul className="action-list">
                <li className="action-item"><span className="action-num" style={{ color: "#E07B54" }}>→</span>Receive live order</li>
                <li className="action-item"><span className="action-num" style={{ color: "#E07B54" }}>→</span>Kanban / list view</li>
                <li className="action-item"><span className="action-num" style={{ color: "#E07B54" }}>→</span>Advance order status</li>
                <li className="action-item"><span className="action-num" style={{ color: "#E07B54" }}>→</span>Bulk column advance</li>
                <li className="action-item"><span className="action-num" style={{ color: "#E07B54" }}>→</span>Monitor urgency timers</li>
                <li className="action-item"><span className="action-num" style={{ color: "#E07B54" }}>→</span>Sound alerts toggle</li>
              </ul>
            </div>
            <div className="action-panel">
              <div className="action-panel-title" style={{ color: "#7BC47A" }}>WAITER ACTIONS</div>
              <ul className="action-list">
                <li className="action-item"><span className="action-num" style={{ color: "#7BC47A" }}>→</span>Accept assigned order</li>
                <li className="action-item"><span className="action-num" style={{ color: "#7BC47A" }}>→</span>Update prep/delivery status</li>
                <li className="action-item"><span className="action-num" style={{ color: "#7BC47A" }}>→</span>Confirm table payment</li>
                <li className="action-item"><span className="action-num" style={{ color: "#7BC47A" }}>→</span>Bulk multi-order ops</li>
                <li className="action-item"><span className="action-num" style={{ color: "#7BC47A" }}>→</span>Chat with admin</li>
                <li className="action-item"><span className="action-num" style={{ color: "#7BC47A" }}>→</span>Cancel order</li>
              </ul>
            </div>
            <div className="action-panel">
              <div className="action-panel-title" style={{ color: "var(--gold)" }}>ADMIN ACTIONS</div>
              <ul className="action-list">
                <li className="action-item"><span className="action-num">→</span>Assign + reassign waiters</li>
                <li className="action-item"><span className="action-num">→</span>EOD close + commission</li>
                <li className="action-item"><span className="action-num">→</span>Full menu management</li>
                <li className="action-item"><span className="action-num">→</span>Broadcast notifications</li>
                <li className="action-item"><span className="action-num">→</span>Analytics + reports</li>
                <li className="action-item"><span className="action-num">→</span>System configuration</li>
                <li className="action-item"><span className="action-num">→</span>Retail catalog + orders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING & FINALIZATION ───────────────────────── */}
      <section className="section" style={{ background: "rgba(10,15,20,0.8)", borderTop: "1px solid var(--gold-border)" }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-number">05</div>
            <div className="section-title-block">
              <div className="section-eyebrow">Finalization · Deployment</div>
              <h2 className="section-title">SYSTEM<br /><span className="accent">INVESTMENT</span></h2>
              <p className="section-desc">Transparent pricing and infrastructure requirements for the GTSS Restaurant Manager ecosystem.</p>
            </div>
          </div>

          <div className="grid-3 reveal">
            {/* Core Plan */}
            <div className="action-panel" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="action-panel-title">GTSS CORE</div>
              <div style={{ fontSize: "32px", fontWeight: "bold", color: "white", marginBottom: "8px" }}>$40<span style={{ fontSize: "12px", color: "var(--text-dim)" }}>/MO</span></div>
              <p style={{ fontSize: "12px", color: "var(--text-dim)", marginBottom: "24px" }}>For small cafes and food trucks.</p>
              <ul className="action-list">
                <li className="action-item">Offline ordering portal</li>
                <li className="action-item">Kitchen Display (Basic)</li>
                <li className="action-item">Daily CSV Exports</li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="action-panel" style={{ border: "1px solid var(--gold)", background: "rgba(232,184,75,0.05)" }}>
              <div className="action-panel-title" style={{ color: "var(--gold)" }}>GTSS PRO</div>
              <div style={{ fontSize: "32px", fontWeight: "bold", color: "white", marginBottom: "8px" }}>$100<span style={{ fontSize: "12px", color: "var(--text-dim)" }}>/MO</span></div>
              <p style={{ fontSize: "12px", color: "var(--text-dim)", marginBottom: "24px" }}>For busy restaurants & hotels.</p>
              <ul className="action-list">
                <li className="action-item">M-Pesa STK Integration</li>
                <li className="action-item">Staff Accountability</li>
                <li className="action-item">Live Occupancy View</li>
                <li className="action-item">Unlimited Tables</li>
              </ul>
            </div>

            {/* Nexus Plan */}
            <div className="action-panel" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="action-panel-title">GTSS NEXUS</div>
              <div style={{ fontSize: "32px", fontWeight: "bold", color: "white", marginBottom: "8px" }}>$250+<span style={{ fontSize: "12px", color: "var(--text-dim)" }}>/MO</span></div>
              <p style={{ fontSize: "12px", color: "var(--text-dim)", marginBottom: "24px" }}>For enterprise hotel chains.</p>
              <ul className="action-list">
                <li className="action-item">Business Central Sync</li>
                <li className="action-item">Multi-site Deployment</li>
                <li className="action-item">Priority Support SLA</li>
              </ul>
            </div>
          </div>

          <div className="grid-2 reveal" style={{ marginTop: "40px" }}>
             <div className="action-panel">
                <div className="action-panel-title">INFRASTRUCTURE REQUIREMENTS</div>
                <p style={{ fontSize: "13px", color: "var(--text-dim)", marginBottom: "20px" }}>To ensure 100% offline resilience, the following hardware is required for on-site deployment:</p>
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                   <div style={{ width: "120px", height: "80px", position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <img src="/images/gtss_local_server_router_1777357301707.png" alt="Router" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                   </div>
                   <ul className="action-list" style={{ flex: 1 }}>
                      <li className="action-item">GTSS Edge Router (Optimized)</li>
                      <li className="action-item">Local Node Server (i5 8GB min)</li>
                      <li className="action-item">Dedicated Local Network (LAN)</li>
                   </ul>
                </div>
             </div>
             <div className="action-panel">
                <div className="action-panel-title">SUPPORT & SLA</div>
                <ul className="action-list">
                   <li className="action-item">24/7 Remote Technical Support</li>
                   <li className="action-item">On-site Staff Training (2 Days)</li>
                   <li className="action-item">Weekly Performance Audits</li>
                   <li className="action-item">Hardware Replacement Warranty</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────── */}
      <section className="section" style={{ background: "linear-gradient(180deg, rgba(10,15,20,0.6) 0%, rgba(232,184,75,0.08) 100%)", borderTop: "1px solid var(--gold-border)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="reveal">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.3em", color: "var(--gold)", marginBottom: "24px", opacity: 0.7 }}>SYSTEM READY</div>
              <h2 className="section-title" style={{ fontSize: "clamp(36px, 6vw, 64px)", marginBottom: "24px" }}>
                YOU&apos;VE SEEN THE<br /><span className="accent">COMPLETE SYSTEM.</span>
              </h2>
              <p className="section-desc" style={{ maxWidth: "100%", fontSize: "18px", lineHeight: "1.8", marginBottom: "16px" }}>
                Now let&apos;s put it in your restaurant. Most restaurants are live within a week. We handle the setup — you handle the guests.
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.15em", marginBottom: "40px" }}>
                We onboard a limited number of restaurants per month to ensure a quality rollout.
              </p>
            </div>
            <div style={{ margin: "0 auto", maxWidth: "800px" }}>
              <RestaurantManagerLeadForm />
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
              <button
                onClick={() => window.open('https://t.me/gtss_copilot', '_blank')}
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.15em", background: "none", border: "none", cursor: "pointer", padding: "8px 0", transition: "color 0.2s" }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                Prefer to explore on your own? Chat with our Telegram demo bot →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer removed to prevent double footers with the root layout */}
      {/* ── LIGHTBOX MODAL ────────────────────────────── */}
      {selectedAsset && (
        <div className="lightbox-overlay" onClick={() => setSelectedAsset(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-close" onClick={() => setSelectedAsset(null)}>✕</div>
            <div className="lightbox-media">
              {selectedAsset.type === 'youtube' ? (
                <YouTubePlayer url={selectedAsset.url} title={selectedAsset.title} />
              ) : (
                <img src={selectedAsset.url} alt={selectedAsset.title} />
              )}
            </div>
            <div className="lightbox-info">
              <div className="section-eyebrow">Asset Details · {selectedAsset.id.split('-')[0].toUpperCase()}</div>
              <h3 className="section-title" style={{ fontSize: "48px", marginBottom: "24px" }}>{selectedAsset.title}</h3>
              <p className="section-desc" style={{ maxWidth: "100%", fontSize: "16px" }}>
                {selectedAsset.description}
              </p>
              
              <div style={{ marginTop: "auto", paddingTop: "40px", borderTop: "1px solid var(--gold-border)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--gold)", letterSpacing: "0.2em", marginBottom: "8px" }}>SYSTEM PATH</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-mid)" }}>GTSS_CORE // {selectedAsset.id.toUpperCase()}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
