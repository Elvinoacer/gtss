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
    <div className="min-h-screen bg-[var(--bg)]">
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] no-underline hover:text-[var(--accent)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-[0.15em] text-[var(--accent)] uppercase font-semibold">{product.subtitle}</span>
              <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mt-3 mb-6">{product.title}</h1>
              <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed mb-8">{product.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs font-medium text-[var(--accent)] bg-[var(--bg-surface-2)] px-3 py-1.5 rounded-full border border-[var(--card-border)]">{product.pricing}</span>
                <span className="text-xs font-medium text-[var(--green)] bg-[var(--bg-surface-2)] px-3 py-1.5 rounded-full border border-[var(--card-border)]">Offline-first</span>
                <span className="text-xs font-medium text-[var(--green)] bg-[var(--bg-surface-2)] px-3 py-1.5 rounded-full border border-[var(--card-border)]">M-Pesa ready</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-6">{product.pricingNote}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)]">Request a Demo</Link>
                <Link href="/pricing" className="inline-flex items-center justify-center text-sm font-semibold text-[var(--text)] bg-transparent px-8 py-3.5 rounded-lg border border-[var(--border)] no-underline transition-all hover:border-[var(--accent)]">View Pricing</Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-[var(--card-border)]">
              <Image src={product.image} alt={product.title} width={800} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16 bg-[var(--section-alt)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] mb-10">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text)]">{feature.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[var(--text)] mb-4">Ready to get started with {product.title}?</h2>
          <p className="text-base text-[var(--text-muted)] mb-8 leading-relaxed">Contact our team for a live {product.ctaDemoText || "demo"}, pricing details, or to discuss how {product.title} can fit your {product.ctaVerb || "business"}. We respond within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)]">Schedule a {product.ctaDemoText ? `Live ${product.ctaDemoText}` : "Demo"}</Link>
            <Link href="/pricing" className="inline-flex items-center justify-center text-sm font-semibold text-[var(--text)] bg-transparent px-8 py-3.5 rounded-lg border border-[var(--border)] no-underline transition-all hover:border-[var(--accent)]">See All Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
