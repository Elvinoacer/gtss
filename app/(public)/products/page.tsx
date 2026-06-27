import Link from "next/link";
import Image from "next/image";
import { Hotel, ShoppingCart, Church, Clock, Database, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore GTSS software products for hospitality, retail, churches, and service teams across East Africa.",
};

const products = [
  {
    id: "restaurant-manager",
    title: "Restaurant Manager",
    subtitle: "Hospitality POS",
    description: "QR-based ordering, kitchen integration, and real-time table management. Works offline and syncs when the network returns. Perfect for restaurants, cafes, and eateries that need reliable point-of-sale without depending on internet connectivity.",
    icon: Hotel,
    color: "var(--accent)",
    image: "/images/waiter_handheld_offline_pos_1777357237751.png",
    features: ["QR-Based Ordering", "Kitchen Integration", "Offline-First", "Staff Dashboard", "M-Pesa Ready"],
    href: "/products/restaurant-manager",
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    subtitle: "Online Storefront",
    description: "Launch your online store with M-Pesa and card payments built in. Manage inventory, orders, and delivery from one dashboard. Get online in as little as two weeks with cloud hosting included.",
    icon: ShoppingCart,
    color: "var(--green)",
    image: "/images/gtss_bento.png",
    features: ["Product Catalog", "Inventory Tracking", "Order Management", "M-Pesa & Card Payments", "Cloud Hosting Included"],
    href: "/products/ecommerce",
  },
  {
    id: "church",
    title: "Church Management System",
    subtitle: "Congregation Tools",
    description: "Member database, contribution tracking, event scheduling, and communication tools designed for churches. Built for African ministry needs with priority support for church administrators.",
    icon: Church,
    color: "var(--cyan)",
    image: "/images/gtss_bento.png",
    features: ["Member Database", "Contribution Tracking", "Event Management", "Group Management", "Financial Reports"],
    href: "/products/church",
  },
  {
    id: "hotel-ordering",
    title: "Hotel Ordering System",
    subtitle: "Guest Services",
    description: "In-room ordering, housekeeping requests, and front desk management. Offline-first for unreliable Wi-Fi zones. Pay once, own forever — no recurring fees.",
    icon: Hotel,
    color: "var(--gold)",
    image: "/images/gtss_local_server_router_1777357301707.png",
    features: ["QR-Based Room Ordering", "Kitchen Routing", "Housekeeping Requests", "One-Time Payment", "On-Premise Deployment"],
    href: "/products/hotel-ordering",
  },
  {
    id: "just-in-time",
    title: "JustInTime",
    subtitle: "Service Marketplace",
    description: "Connect service providers with customers in real time. Booking, dispatch, and payments in one platform. Pay-as-you-grow with transaction-based pricing.",
    icon: Clock,
    color: "var(--accent)",
    image: "/images/gtss_bento.png",
    features: ["Fast Matching", "Payment Processing", "Job Tracking", "Provider Dashboard", "Ratings & Reviews"],
    href: "/products/just-in-time",
  },
  {
    id: "custom",
    title: "Custom Enterprise Solutions",
    subtitle: "Bespoke Development",
    description: "Tailor-made software for unique business requirements. From system integration to legacy modernization, GTSS builds what your business needs.",
    icon: Database,
    color: "var(--green)",
    image: "/images/gtss_bento.png",
    features: ["Custom Development", "System Integration", "API Development", "Flexible Payment Plans", "Ongoing Support"],
    href: "/contact",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Our Products
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">
              Software built for the way{" "}
              <span className="text-[var(--accent)]">East Africa works.</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              Ready-to-deploy systems for hospitality, retail, churches, and service teams.
              Each one works offline and accepts local payments. Choose a product below to
              learn more, or contact us for a custom solution.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden transition-all hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]"
            >
              {product.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image src={product.image} alt={product.title} fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)]" style={{ color: product.color }}>
                    <product.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.15em] text-[var(--accent)] uppercase font-medium">
                      {product.subtitle}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {product.title}
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-[10px] font-medium text-[var(--green)] bg-[var(--bg-surface-2)] px-2.5 py-1 rounded-full border border-[var(--card-border)]">
                      {f}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-16 border-t border-[var(--border)] bg-[var(--section-alt)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[var(--text)] mb-4">
            Need something custom?
          </h2>
          <p className="text-base text-[var(--text-muted)] mb-8 leading-relaxed">
            If your business has unique requirements, GTSS can build bespoke software
            tailored to your operations. From system integration to full custom platforms.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)]"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
