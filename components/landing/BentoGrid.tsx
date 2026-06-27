import { ArrowUpRight, Database, Globe, Layers, Shield, Zap, ShoppingCart, Church, Hotel, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  size: "lg" | "md" | "sm";
  image: string;
  color: string;
  href: string;
}

const bentoItems: BentoItem[] = [
  {
    id: "restaurant-manager",
    title: "Restaurant Manager",
    subtitle: "Hospitality POS",
    description: "QR-based ordering, kitchen integration, and real-time table management. Works offline and syncs when the network returns.",
    icon: Hotel,
    size: "lg",
    image: "/images/waiter_handheld_offline_pos_1777357237751.png",
    color: "var(--accent)",
    href: "/products/restaurant-manager",
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    subtitle: "Online Storefront",
    description: "Launch your online store with M-Pesa and card payments built in. Manage inventory, orders, and delivery from one dashboard.",
    icon: ShoppingCart,
    size: "md",
    image: "/images/gtss_bento.png",
    color: "var(--green)",
    href: "/products/ecommerce",
  },
  {
    id: "church",
    title: "Church Management System",
    subtitle: "Congregation Tools",
    description: "Member database, contribution tracking, event scheduling, and communication tools designed for churches.",
    icon: Church,
    size: "sm",
    image: "/images/gtss_bento.png",
    color: "var(--cyan)",
    href: "/products/church",
  },
  {
    id: "hotel-ordering",
    title: "Hotel Ordering System",
    subtitle: "Guest Services",
    description: "In-room ordering, housekeeping requests, and front desk management. Offline-first for unreliable Wi-Fi zones.",
    icon: Hotel,
    size: "md",
    image: "/images/gtss_local_server_router_1777357301707.png",
    color: "var(--gold)",
    href: "/products/hotel-ordering",
  },
  {
    id: "just-in-time",
    title: "JustInTime",
    subtitle: "Service Marketplace",
    description: "Connect service providers with customers in real time. Booking, dispatch, and payments in one platform.",
    icon: Clock,
    size: "sm",
    image: "/images/gtss_bento.png",
    color: "var(--accent)",
    href: "/products/just-in-time",
  },
  {
    id: "offline-first",
    title: "Offline-First Architecture",
    subtitle: "Core Technology",
    description: "Every GTSS product keeps working when the network drops. Data syncs automatically when connectivity returns.",
    icon: Database,
    size: "md",
    image: "/images/stressed_kitchen_system_failure_1777357211810.png",
    color: "var(--green)",
    href: "/security",
  },
];

export function BentoGrid() {
  return (
    <section className="relative z-10 px-6 lg:px-20 py-16 lg:py-24 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-8">
          <div className="max-w-xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Our Products
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--text)] leading-tight tracking-tight">
              Software for the way{" "}
              <span className="text-[var(--accent)]">East Africa actually works.</span>
            </h2>
          </div>
          <p className="text-sm lg:text-base text-[var(--text-muted)] max-w-sm leading-relaxed">
            Ready-to-deploy systems for hospitality, retail, churches, and service teams.
            Each one works offline and accepts local payments.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[240px]">
          {bentoItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md overflow-hidden transition-all hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)] ${
                item.size === "lg"
                  ? "md:col-span-4 lg:col-span-4 row-span-2"
                  : item.size === "md"
                  ? "md:col-span-2 lg:col-span-2 row-span-2"
                  : "md:col-span-2 lg:col-span-2 row-span-1"
              }`}
            >
              {item.image && (
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/60 to-transparent" />

              <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)]"
                    style={{ color: item.color }}
                  >
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors" />
                </div>

                <div>
                  <div className="text-[10px] lg:text-xs tracking-[0.15em] text-[var(--accent)] uppercase font-medium mb-2">
                    {item.subtitle}
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-[var(--text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] lg:text-sm font-light leading-relaxed text-[var(--text-muted)] line-clamp-2 group-hover:line-clamp-none transition-all">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
