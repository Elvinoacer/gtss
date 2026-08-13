import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";

const productData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
  image: string;
  pricing: string;
  pricingNote: string;
  ctaVerb?: string;
  ctaDemoText?: string;
}> = {
  "restaurant-manager": {
    title: "Restaurant Manager",
    subtitle: "Hospitality POS System",
    description: "A complete point-of-sale system for restaurants, cafes, and eateries. QR-based ordering sends orders straight to the kitchen, tables are managed in real time, and everything works offline. When the network comes back, data syncs automatically. M-Pesa and Airtel Money are built in, so your customers pay the way they expect.",
    features: [
      { title: "QR-Based Ordering", desc: "Guests scan a QR code at their table to browse the menu and place orders directly to the kitchen." },
      { title: "Kitchen Display System", desc: "Real-time order routing to kitchen displays eliminates hand-written tickets and confusion." },
      { title: "Offline-First Architecture", desc: "The entire system runs on your local network. No internet required for day-to-day operations." },
      { title: "Staff Dashboard", desc: "Manage orders, tables, inventory, and shift reports from a single interface." },
      { title: "M-Pesa & Local Payments", desc: "Accept M-Pesa, Airtel Money, bank transfer, and card payments out of the box." },
      { title: "Reporting & Analytics", desc: "Track sales, inventory, and operational metrics with built-in reporting tools." },
    ],
    image: "/images/waiter_handheld_offline_pos_1777357237751.png",
    pricing: "Subscription",
    pricingNote: "Monthly or yearly plans with cloud hosting and support included.",
  },
  "ecommerce": {
    title: "E-commerce Platform",
    subtitle: "Online Storefront",
    description: "Launch your online store with everything you need to sell products across East Africa. M-Pesa and card payments are built in, inventory tracks itself, and orders flow from placement to delivery in one dashboard.",
    features: [
      { title: "Product Catalog", desc: "Easy product listing with images, descriptions, and pricing in KES or USD." },
      { title: "Inventory Tracking", desc: "Real-time stock management across all your products and variants." },
      { title: "Order Management", desc: "Process and track orders from placement through delivery." },
      { title: "Local Payment Integration", desc: "M-Pesa, Airtel Money, bank transfers, and card payments supported." },
      { title: "Customer Portal", desc: "Customers can browse, order, and track purchases from any device." },
      { title: "Cloud Hosting Included", desc: "No infrastructure management required. We handle hosting, updates, and security." },
    ],
    image: "/images/gtss_bento.png",
    pricing: "Subscription",
    pricingNote: "Monthly or yearly plans. Cloud hosting, updates, and support included.",
  },
  "church": {
    title: "Church Management System",
    subtitle: "Congregation Tools",
    description: "A comprehensive administration system built for churches and religious organizations. Track members, record contributions, schedule events, and manage communications from one place.",
    features: [
      { title: "Member Database", desc: "Track members, families, and attendance in a searchable, organized database." },
      { title: "Contribution Tracking", desc: "Record tithes, offerings, and special donations with multiple payment method support." },
      { title: "Event Management", desc: "Schedule and manage church events, services, and activities." },
      { title: "Group Management", desc: "Organize small groups, ministries, and departments with dedicated communication channels." },
      { title: "Financial Reports", desc: "Generate contribution, attendance, and financial reports for transparency." },
      { title: "Priority Support", desc: "Dedicated assistance for church administrators who need extra help." },
    ],
    image: "/images/gtss_bento.png",
    pricing: "Subscription",
    pricingNote: "Affordable monthly plans designed for churches of all sizes.",
    ctaVerb: "ministry",
    ctaDemoText: "walkthrough",
  },
  "hotel-ordering": {
    title: "Hotel Ordering System",
    subtitle: "Guest Services Platform",
    description: "Transform the guest experience with in-room QR ordering, kitchen routing, and housekeeping management. The system runs on your local network — no internet needed. Pay once and own it forever.",
    features: [
      { title: "QR-Based Room Ordering", desc: "Guests scan a QR code in their room to order food, drinks, or services." },
      { title: "Kitchen Routing", desc: "Orders go directly to the kitchen display, eliminating phone calls and paper tickets." },
      { title: "Housekeeping Requests", desc: "Guests can request housekeeping, extra towels, or maintenance from their room." },
      { title: "Front Desk Management", desc: "Manage check-ins, check-outs, room assignments, and billing from one screen." },
      { title: "One-Time Payment", desc: "Pay once, own forever. No recurring software fees. On-premise deployment included." },
      { title: "Offline-First", desc: "Runs on your local network. Full functionality without internet connectivity." },
    ],
    image: "/images/gtss_local_server_router_1777357301707.png",
    pricing: "One-Time Payment",
    pricingNote: "Pay once, own forever. Includes 1 year of technical support.",
  },
  "just-in-time": {
    title: "JustInTime",
    subtitle: "Service Marketplace",
    description: "A community marketplace that connects clients with service providers quickly and efficiently. Job matching, payment processing, and tracking for both online and on-ground services.",
    features: [
      { title: "Fast Matching", desc: "Quickly connect clients with available, vetted service providers in their area." },
      { title: "Payment Processing", desc: "Integrated payment handling with M-Pesa, Airtel Money, and card support." },
      { title: "Job Tracking", desc: "Real-time status updates on service delivery from start to finish." },
      { title: "Provider Dashboard", desc: "Service providers manage availability, services, and earnings from one place." },
      { title: "Ratings & Reviews", desc: "Build trust through a transparent ratings and review system." },
      { title: "Pay as You Grow", desc: "Transaction-based pricing means minimal upfront cost and scaling with usage." },
    ],
    image: "/images/gtss_bento.png",
    pricing: "Platform Access",
    pricingNote: "Usage-based pricing. Pay only when transactions happen.",
  },
};

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productData[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--text)] mb-4">Product Not Found</h1>
          <p className="text-[var(--text-muted)] mb-6">The product you are looking for does not exist.</p>
          <Link href="/products" className="text-[var(--accent)] font-semibold no-underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="site-wrap py-14 lg:py-20">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] no-underline hover:text-[var(--accent)]">
          <ArrowLeft className="h-4 w-4" /> All products
        </Link>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="site-kicker">{product.subtitle}</p>
            <h1 className="site-display mt-4">{product.title}</h1>
            <p className="site-lead mt-5">{product.description}</p>
            <p className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="border border-[var(--border)] px-2.5 py-1">{product.pricing}</span>
              <span className="border border-[var(--border)] px-2.5 py-1">Offline-first</span>
              <span className="border border-[var(--border)] px-2.5 py-1">M-Pesa ready</span>
            </p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">{product.pricingNote}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/demo" className="site-btn site-btn-primary">Request a walkthrough</Link>
              <Link href="/pricing" className="site-btn site-btn-ghost">View pricing</Link>
            </div>
          </div>
          <div className="overflow-hidden border border-[var(--card-border)]">
            <Image src={product.image} alt="" width={800} height={500} className="h-auto w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--section-alt)]">
        <div className="site-wrap py-16">
          <h2 className="site-title">What it actually does</h2>
          <ol className="mt-10 grid list-none gap-8 p-0 md:grid-cols-2">
            {product.features.map((feature, index) => (
              <li key={feature.title} className="border-t border-[var(--border)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">0{index + 1}</p>
                <h3 className="mt-2 flex items-center gap-2 text-lg font-semibold text-[var(--text)]">
                  <Check className="h-4 w-4 text-[var(--accent)]" />
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{feature.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--ink-band)] py-16 text-[var(--footer-text)]">
        <div className="site-wrap grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-[18ch] font-[family-name:var(--font-display)] text-3xl leading-tight">
              See {product.title} against your {product.ctaVerb || "operation"}.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[var(--footer-text-muted)]">
              A live {product.ctaDemoText || "demo"}, a written price, and a three-week rollout window. We reply within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/demo" className="site-btn site-btn-primary">Book a walkthrough</Link>
            <Link href="/contact" className="site-btn site-btn-ghost border-white/20 text-white hover:text-white">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
