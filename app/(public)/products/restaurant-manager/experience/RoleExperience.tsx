"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import "./role-experience.css";

/* ====================================================================
   DATA — Screen inventory sourced from restaurant_manager.md
   ==================================================================== */

type ScreenAction = string;

interface ScreenEntry {
  name: string;
  route?: string;
  actions: ScreenAction[];
}

interface ScreenGroup {
  title: string;
  screens: ScreenEntry[];
}

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

interface Chapter {
  id: string;
  icon: string;
  role: string;
  tagline: string;
  mediaType: "video" | "gallery";
  videoSrc?: { mp4: string; webm: string; poster: string };
  gallery: GalleryItem[];
  screenGroups: ScreenGroup[];
}

const chapters: Chapter[] = [
  {
    id: "guest",
    icon: "👤",
    role: "Guest Experience",
    tagline: "Everything your guest sees — from first WiFi connection to payment",
    mediaType: "video",
    videoSrc: {
      mp4: "/images/resmg/guest-demo.mp4",
      webm: "/images/resmg/guest-demo.webm",
      poster: "/images/resmg/guest-poster.jpg",
    },
    gallery: [
      { src: "/images/resmg/guest-home.png", alt: "Guest Home Menu", caption: "Rich categorized menu with smart search, dietary filters, and recommendations" },
      { src: "/images/resmg/guest-categories.png", alt: "Categories Browser", caption: "Browse food categories with visual cards" },
      { src: "/images/resmg/guest-item-detail.png", alt: "Food Detail Modal", caption: "Image carousel, addons, special instructions, and upsell pairing" },
      { src: "/images/resmg/guest-cart.png", alt: "Cart Drawer", caption: "Review items, adjust quantities, toggle addons, and submit order" },
      { src: "/images/resmg/guest-order-tracking.png", alt: "Order Tracking", caption: "Live pizza-tracker: Pending → Accepted → Preparing → Ready → Delivered" },
      { src: "/images/resmg/guest-bill.png", alt: "Bill & Payment", caption: "M-Pesa STK push, manual payment methods, and verification flow" },
      { src: "/images/resmg/guest-help.png", alt: "Raise Issue", caption: "Direct issue reporting without calling a waiter" },
      { src: "/images/resmg/guest-retail.png", alt: "Retail Storefront", caption: "Browse retail products, service types, and quick-add to cart" },
    ],
    screenGroups: [
      {
        title: "Guest Food Ordering",
        screens: [
          { name: "ClientHome", route: "/", actions: ["Search menu with debounce", "Filter by category", "Toggle offers-only view", "Infinite scroll loading", "Open item detail modal", "Open cart drawer", "View popular items & recommendations"] },
          { name: "CategoriesPage", route: "/categories", actions: ["Search categories by name", "Open category item page"] },
          { name: "CategoryItemsPage", route: "/category/:id", actions: ["Search items within category", "Infinite scroll items", "Open food detail modal", "Add to cart from modal"] },
          { name: "OrderTracking", route: "/orders", actions: ["Active and history tabs", "Filter by order status", "Real-time status updates via WebSocket", "Detailed order progress timeline", "Open bill for payment"] },
          { name: "BillStatus", route: "/bill", actions: ["Current orders, past unpaid, past paid tabs", "Copy payment details (till, paybill, phone)", "M-Pesa STK push payment", "Manual payment verification"] },
          { name: "RaiseIssue", route: "/help", actions: ["Select predefined issue type", "Enter table number and details", "Submit issue to staff"] },
        ],
      },
      {
        title: "Guest Retail",
        screens: [
          { name: "RetailHome", route: "/retail", actions: ["Search retail products", "Browse service types", "Quick add to cart", "Open retail cart drawer"] },
          { name: "RetailCategoryPage", route: "/retail/type/:typeId", actions: ["View categories under service type", "Navigate to product list"] },
          { name: "RetailProductsPage", route: "/retail/category/:categoryId", actions: ["Search, sort, filter products", "Toggle in-stock-only", "Quick add to cart"] },
          { name: "RetailProductDetail", route: "/retail/product/:productId", actions: ["Image gallery with navigation", "Choose quantity and variant", "Special instructions", "Add to cart"] },
          { name: "RetailCheckout", route: "/retail/checkout", actions: ["Review cart summary", "Set delivery location", "Choose payment method (cash or M-Pesa)", "M-Pesa STK push with polling"] },
          { name: "RetailOrderStatus", route: "/retail/order/:orderId", actions: ["Live order status timeline", "Real-time updates via socket", "Open payment view"] },
        ],
      },
      {
        title: "Shared Guest Surfaces",
        screens: [
          { name: "CartDrawer", actions: ["Increment/decrement quantity", "Remove items", "Toggle per-item addons", "Enter table number", "Submit food order"] },
          { name: "FoodDetailModal", actions: ["Image carousel with autoplay", "Select addons", "Special instructions", "Compute discounted total", "Trigger upsell modal"] },
          { name: "BillView", actions: ["View order detail lines", "Execute STK push payment", "Poll payment status", "Manual payment flow (cash, sim, bank)"] },
          { name: "NotificationBanner", actions: ["Display active notifications", "Dismiss and persist dismissal", "Real-time notifications via socket"] },
        ],
      },
    ],
  },
  {
    id: "kds",
    icon: "👨‍🍳",
    role: "Kitchen Display System",
    tagline: "What your kitchen staff sees — zero distractions, pure order flow",
    mediaType: "gallery",
    gallery: [
      { src: "/images/resmg/kds-kanban.png", alt: "KDS Kanban View", caption: "Kanban board with Pending → Preparing → Ready columns, urgency timers" },
      { src: "/images/resmg/kds-list.png", alt: "KDS List View", caption: "Compact list view for smaller screens with bulk actions" },
      { src: "/images/resmg/kds-bulk.png", alt: "KDS Bulk Mode", caption: "Select all in column and advance with one tap" },
    ],
    screenGroups: [
      {
        title: "Kitchen Operations",
        screens: [
          { name: "KitchenPage", route: "/kitchen", actions: ["Load active kitchen orders", "Real-time new order via socket", "Toggle kanban vs list view", "Toggle sound notifications", "Bulk mode with select-all per column", "Per-column quick advance", "Per-order status transitions", "Live per-order timer and urgency signal"] },
        ],
      },
    ],
  },
  {
    id: "waiter",
    icon: "🛎️",
    role: "Waiter Dashboard",
    tagline: "What your waiters see — auto-assigned orders, priority sorted, zero confusion",
    mediaType: "video",
    videoSrc: {
      mp4: "/images/resmg/waiter-demo.mp4",
      webm: "/images/resmg/waiter-demo.webm",
      poster: "/images/resmg/waiter-poster.jpg",
    },
    gallery: [
      { src: "/images/resmg/waiter-active.png", alt: "Waiter Active Orders", caption: "Auto-assigned orders with priority sorting and category filters" },
      { src: "/images/resmg/waiter-chat.png", alt: "Waiter Admin Chat", caption: "Direct messaging channel with admin for coordination" },
      { src: "/images/resmg/waiter-history.png", alt: "Waiter Order History", caption: "Last-hour and archive slices for tracking completed work" },
    ],
    screenGroups: [
      {
        title: "Waiter Operations",
        screens: [
          { name: "WaiterDashboard", route: "/waiter/dashboard", actions: ["Load assigned orders via session", "Real-time order and status updates via socket", "Active, history, and chat tabs", "Search by order id, table, item text", "Filter active orders by item category", "Switch history between last-hour and archive", "Toggle priority-based sorting", "Bulk mode: select multiple, bulk advance", "Expand/collapse order cards", "Status transitions: accept → preparing → ready → delivered", "Confirm payment from expanded order", "Cancel order with confirmation", "Send/receive chat with admin", "Unread chat indicator", "Logout and clear session"] },
        ],
      },
    ],
  },
  {
    id: "admin",
    icon: "👑",
    role: "Admin / GM Hub",
    tagline: "Total visibility and control — every screen your management team uses",
    mediaType: "gallery",
    gallery: [
      { src: "/images/resmg/admin-dashboard.png", alt: "Admin Dashboard", caption: "Operations lane dashboard: Pending → Accepted → Preparing → Ready → Bills" },
      { src: "/images/resmg/admin-kitchen.png", alt: "Kitchen Display (Admin)", caption: "Admin view of kitchen board with priority, search, and urgency tracking" },
      { src: "/images/resmg/admin-menu.png", alt: "Menu Management", caption: "Menu studio: categories, items, pricing, allergens, addons, stock tracking" },
      { src: "/images/resmg/admin-analytics.png", alt: "Analytics Dashboard", caption: "KPI cards, charts, financial reports with date filtering and export" },
      { src: "/images/resmg/admin-table-occupancy.png", alt: "Table Occupancy", caption: "Live floor grid showing table states with issue and order badges" },
      { src: "/images/resmg/admin-settings.png", alt: "Settings Center", caption: "General, payment, gallery, team, and network settings with QR codes" },
      { src: "/images/resmg/admin-issues.png", alt: "Issue Management", caption: "Filter, search, resolve, and delete customer-reported issues" },
      { src: "/images/resmg/admin-audit.png", alt: "Audit Logs", caption: "Every action logged with timestamp, staff ID, and payload viewer" },
    ],
    screenGroups: [
      {
        title: "Operations",
        screens: [
          { name: "AdminDashboard", route: "/admin", actions: ["Lane tabs: pending, accepted, preparing, ready, bills", "Bulk status transitions and payment confirmation", "Waiter assignment/reassignment with commission override", "Send customer message", "Table change modal", "Per-order status actions", "End-of-day close and report download", "Auto-refresh via socket events"] },
          { name: "KitchenDisplay", route: "/admin/kitchen", actions: ["Filter by kitchen status", "Search by order id, table, item", "Sort by priority, elapsed time, table", "Promote order status", "Track urgency and prep time"] },
          { name: "WaiterMonitoring", route: "/admin/monitor", actions: ["Online and workload metrics", "Per-waiter active orders and progress", "Per-order commission override", "Reassign order to another waiter"] },
          { name: "AdminMessages", route: "/admin/messages", actions: ["Select staff conversation", "Mark as read", "Send/receive messages via socket"] },
          { name: "TableOccupancy", route: "/admin/table-occupancy", actions: ["Live status counts by table state", "Table grid with status colors and badges", "Open table detail modal", "Real-time updates via socket"] },
        ],
      },
      {
        title: "Menu & Content",
        screens: [
          { name: "MenuManagement", route: "/admin/menu", actions: ["Toggle categories vs menu items tab", "View summary stats"] },
          { name: "CategoryList", actions: ["Search, create, edit, delete categories", "Upload category image", "Blocked delete when category has items"] },
          { name: "MenuItemList", actions: ["Search, filter by availability/category", "Full item editing: pricing, prep, allergens, offers", "Stock tracking, spicy flag, gallery images", "Add/edit/remove addons", "Toggle availability"] },
          { name: "IssueManagement", route: "/admin/issues", actions: ["Filter by status and issue type", "Search by table, type, message", "Resolve and delete issues", "Real-time new issue notifications"] },
          { name: "NotificationManagement", route: "/admin/notifications", actions: ["Filter, search, create, delete broadcasts", "Set title, message, type, expiry", "Auto-refresh on interval"] },
        ],
      },
      {
        title: "Commerce",
        screens: [
          { name: "CustomerManagement", route: "/admin/customers", actions: ["Filter by active/inactive", "Customer detail panel with stats, favorites, history", "Live order-related socket events"] },
          { name: "RetailDashboard", route: "/admin/retail", actions: ["Retail KPIs and breakdown cards", "Revenue by service type and top products", "Low stock alerts", "Order status breakdown"] },
          { name: "RetailCatalogManager", route: "/admin/retail-catalog", actions: ["Service types, categories, products tabs", "CRUD for all entities with image upload", "Stock tracking, bookable settings, variants"] },
          { name: "RetailOrderManagement", route: "/admin/retail-orders", actions: ["Filter, search, select orders", "Mark paid, advance status, cancel", "Bulk paid, bulk complete, bulk cancel"] },
        ],
      },
      {
        title: "Insights & Control",
        screens: [
          { name: "AnalyticsDashboard", route: "/admin/analytics", actions: ["Period toggle: today, week, month", "KPI cards and charts", "Financial report with date filter and pagination"] },
          { name: "AuditLogsPage", route: "/admin/audit", actions: ["Search by action text", "Filter by staff ID", "Paginate through logs", "Open payload modal with structured details"] },
          { name: "IntegrationsPage", route: "/admin/integrations", actions: ["Add, view, sync, delete integrations", "Configure auth (OAuth2, API key)", "Edit mappings JSON", "Configure sync mode and retry policy", "Queue and logs tabs"] },
          { name: "SettingsPage", route: "/admin/settings", actions: ["General, payment, gallery, team, network tabs", "Hotel settings, payment channels, Daraja credentials", "Gallery image upload/delete", "Staff CRUD with role assignment", "Network info and QR code generation"] },
          { name: "DataExport", route: "/admin/data-export", actions: ["Date presets: today, 7 days, 30 days, all time", "Export sales, orders, issues, feedback", "Format selector (CSV, PDF)", "Download generated files"] },
          { name: "Archives", route: "/admin/archives", actions: ["Reports grouped by year and month", "Download report PDF"] },
        ],
      },
    ],
  },
];

const progressItems = chapters.map((c) => ({
  id: c.id,
  icon: c.icon,
  label: c.role,
}));

/* ====================================================================
   COMPONENT
   ==================================================================== */

export function RoleExperience() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);
  const [progressVisible, setProgressVisible] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const chapterRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const heroRef = useRef<HTMLDivElement>(null);

  // Toggle screen group open/closed
  const toggleGroup = useCallback((key: string) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // Scroll to chapter
  const scrollToChapter = useCallback((id: string) => {
    const el = chapterRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  // Intersection observers
  useEffect(() => {
    // Progress bar visibility
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        setProgressVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    heroObs.observe(heroEl);

    // Chapter tracking
    const chapterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.chapterId;
            if (id) setActiveChapter(id);
          }
          // Reveal animation
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "-80px 0px -30% 0px" },
    );

    Object.values(chapterRefs.current).forEach((el) => {
      if (el) chapterObs.observe(el);
    });

    return () => {
      heroObs.disconnect();
      chapterObs.disconnect();
    };
  }, []);

  // Video play handler
  const handlePlay = useCallback((container: HTMLDivElement | null) => {
    if (!container) return;
    const video = container.querySelector("video");
    const btn = container.querySelector<HTMLButtonElement>(".exp-play-btn");
    const placeholder = container.querySelector<HTMLElement>(".exp-video-placeholder");
    if (video) {
      video.play().then(() => {
        btn?.classList.add("hidden");
        if (placeholder) placeholder.style.display = "none";
      }).catch(() => {});
    }
  }, []);

  // Lightbox close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="exp-page">
      {/* Progress bar */}
      <div className={`exp-progress ${progressVisible ? "visible" : ""}`}>
        <div className="exp-progress-inner">
          {progressItems.map((item) => (
            <button
              key={item.id}
              className={`exp-progress-item ${activeChapter === item.id ? "active" : ""}`}
              onClick={() => scrollToChapter(item.id)}
            >
              <span className="exp-progress-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="exp-container">
        {/* Hero */}
        <div className="exp-hero" ref={heroRef}>
          <Link href="/products/restaurant-manager" className="exp-back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Restaurant Manager
          </Link>
          <div className="exp-hero-badge">🎬 Full Product Walkthrough</div>
          <h1>
            See GTSS <span>in Action</span>
          </h1>
          <p>
            Explore every screen, every workflow, every role. From guest ordering
            to admin analytics — this is the complete GTSS Restaurant Manager
            experience.
          </p>

          {/* Stats row */}
          <div className="exp-hero-stats">
            <div className="exp-stat">
              <span className="exp-stat-value">{chapters.reduce((a, c) => a + c.screenGroups.reduce((b, g) => b + g.screens.length, 0), 0)}+</span>
              <span className="exp-stat-label">Screens</span>
            </div>
            <div className="exp-stat-divider" />
            <div className="exp-stat">
              <span className="exp-stat-value">{chapters.length}</span>
              <span className="exp-stat-label">Roles</span>
            </div>
            <div className="exp-stat-divider" />
            <div className="exp-stat">
              <span className="exp-stat-value">{chapters.reduce((a, c) => a + c.screenGroups.reduce((b, g) => b + g.screens.reduce((d, s) => d + s.actions.length, 0), 0), 0)}+</span>
              <span className="exp-stat-label">Actions</span>
            </div>
          </div>

          {/* Role quick-nav cards */}
          <div className="exp-role-cards">
            {chapters.map((c) => (
              <button key={c.id} className={`exp-role-card exp-role-card--${c.id}`} onClick={() => scrollToChapter(c.id)}>
                <span className="exp-role-card-icon">{c.icon}</span>
                <span className="exp-role-card-label">{c.role}</span>
                <span className="exp-role-card-count">{c.screenGroups.reduce((a, g) => a + g.screens.length, 0)} screens</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chapters */}
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className={`exp-chapter ${chapter.id}`}
            data-chapter-id={chapter.id}
            ref={(el) => { chapterRefs.current[chapter.id] = el; }}
          >
            {/* Chapter header */}
            <div className="exp-chapter-header">
              <div className="exp-chapter-icon">{chapter.icon}</div>
              <h2>
                {chapter.role}
                <span>{chapter.tagline}</span>
              </h2>
            </div>

            {/* Media showcase */}
            <div className="exp-media-showcase">
              {chapter.mediaType === "video" && chapter.videoSrc ? (
                <div className="exp-phone-wrap">
                  <div className="exp-phone-frame" ref={(el) => {
                    // Auto-play observer on mount
                    if (!el) return;
                    const video = el.querySelector("video");
                    if (!video) return;
                    const obs = new IntersectionObserver(([entry]) => {
                      if (entry.isIntersecting) {
                        video.play().catch(() => {});
                      } else {
                        video.pause();
                      }
                    }, { threshold: 0.4 });
                    obs.observe(el);
                    video.addEventListener("canplay", () => {
                      const placeholder = el.querySelector<HTMLElement>(".exp-video-placeholder");
                      if (placeholder) placeholder.style.display = "none";
                    }, { once: true });
                  }}>
                    <div className="exp-phone-screen">
                      <video muted loop playsInline preload="none" poster={chapter.videoSrc.poster}>
                        <source src={chapter.videoSrc.mp4} type="video/mp4" />
                        <source src={chapter.videoSrc.webm} type="video/webm" />
                      </video>
                      <div className="exp-video-placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <span>Video demo coming soon</span>
                      </div>
                      <button
                        className="exp-play-btn"
                        aria-label="Play video"
                        onClick={(e) => handlePlay((e.currentTarget as HTMLElement).closest(".exp-phone-frame") as HTMLDivElement)}
                      >
                        <svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="exp-gallery">
                  {chapter.gallery.map((item, i) => (
                    <div
                      key={i}
                      className="exp-gallery-card"
                      onClick={() => item.src && setLightbox({ src: item.src, caption: item.caption })}
                    >
                      <div className="exp-gallery-card-img">
                        {/* Placeholder until real screenshots are uploaded */}
                        <div className="exp-screenshot-placeholder">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                          </svg>
                          <span>{item.alt}</span>
                        </div>
                      </div>
                      <div className="exp-gallery-card-info">
                        <h4>{item.alt}</h4>
                        <p>{item.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Screen inventory */}
            {chapter.screenGroups.map((group, gi) => {
              const groupKey = `${chapter.id}-${gi}`;
              const isOpen = !!openGroups[groupKey];
              return (
                <div key={gi} className={`exp-screen-group ${isOpen ? "open" : ""}`}>
                  <div className="exp-screen-group-header" onClick={() => toggleGroup(groupKey)}>
                    <h3>{group.title} ({group.screens.length} screens)</h3>
                    <svg className="exp-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="exp-screen-group-body">
                    <div className="exp-screen-list">
                      {group.screens.map((screen, si) => (
                        <div key={si} className="exp-screen-item">
                          {screen.route && (
                            <div className="exp-screen-item-route">{screen.route}</div>
                          )}
                          <div className="exp-screen-item-content">
                            <h4>{screen.name}</h4>
                            <div className="exp-screen-item-actions">
                              {screen.actions.map((action, ai) => (
                                <span key={ai}>{action}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="exp-bottom-cta">
          <h2>Ready to transform your restaurant?</h2>
          <p>
            Get GTSS deployed in under an hour. No app downloads. No cloud dependency. 
            Just a system that works — always.
          </p>
          <div className="exp-cta-buttons">
            <Link href="/contact" className="exp-cta-primary">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/products/restaurant-manager" className="exp-cta-secondary">
              ← Back to Overview
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`exp-lightbox ${lightbox ? "open" : ""}`}
        onClick={() => setLightbox(null)}
      >
        {lightbox && (
          <>
            <button className="exp-lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>✕</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox.src} alt={lightbox.caption} onClick={(e) => e.stopPropagation()} />
            <div className="exp-lightbox-caption">{lightbox.caption}</div>
          </>
        )}
      </div>
    </div>
  );
}
