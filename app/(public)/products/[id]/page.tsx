import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ExternalLink,
  ShieldCheck,
  Zap,
  Server,
  CreditCard,
  Sparkles,
  Layers,
  ArrowRight,
  Clock,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { SiteCTA } from "@/components/site/SiteCTA";
import { whatsappUrl } from "@/data/site";

// Static fallback details for offline/static rendering
const fallbackProductMap: Record<string, {
  id: string;
  dbId: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  pricing: string;
  priceUSD?: number;
  priceKES?: number;
  websiteUrl?: string;
  image: string;
  logoUrl?: string;
  gallery?: string[];
  features: { title: string; desc: string }[];
}> = {
  "cmkwpx6t3000004i89mcou9z5": {
    id: "cmkwpx6t3000004i89mcou9z5",
    dbId: "cmkwpx6t3000004i89mcou9z5",
    title: "Church Management System",
    subtitle: "GTS-ENT-6990 · Enterprise",
    category: "Faith & Ministry Platform",
    description: "A holistic digital ecosystem designed to streamline ministry operations, enhance member engagement, track contributions (M-Pesa, cash, and bank), and foster spiritual growth.",
    pricing: "Subscription — $16/mo / KES 2,000/mo",
    priceUSD: 16,
    priceKES: 2000,
    websiteUrl: "https://zion-hill.vercel.app",
    image: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769525614/gtss/products/mxabcttbqh9kv2mxt8xz.jpg",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769523393/gtss/products/czoxq2embhckyvvjfkml.jpg",
    gallery: [
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769525614/gtss/products/mxabcttbqh9kv2mxt8xz.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769525683/gtss/products/nnk1xvwkluqr8tqno9uz.jpg"
    ],
    features: [
      { title: "Integrated Ministry & Pastoral Care", desc: "Track member profiles, family relationships, discipleship journeys, and pastoral visits." },
      { title: "M-Pesa & Bank Contribution Ledger", desc: "Single unified ledger for tithes, offerings, and building funds via M-Pesa, bank, and cash." },
      { title: "Event & Service Scheduling", desc: "Manage church calendars, volunteer rotas, and service attendance effortlessly." },
      { title: "Small Groups & Department Management", desc: "Organize ministries, youth groups, and committees with dedicated communications." },
    ],
  },
  "cmkwvzp9n000004ieieyhqcde": {
    id: "cmkwvzp9n000004ieieyhqcde",
    dbId: "cmkwvzp9n000004ieieyhqcde",
    title: "Commersely",
    subtitle: "GTS-SAA-7111 · SaaS",
    category: "Enterprise Commerce Storefront",
    description: "Commersely is a premium, enterprise-grade e-commerce ecosystem designed to empower brands with a sophisticated digital presence built on Next.js 15, integrated M-Pesa, card payments, and inventory management.",
    pricing: "Subscription — $8/mo / KES 1,000/mo",
    priceUSD: 8,
    priceKES: 1000,
    websiteUrl: "https://commerseley.vercel.app",
    image: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769535840/gtss/products/outu9egsgeql8bax6epq.jpg",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769534690/gtss/products/g3zztu8dxqmmhgju0has.png",
    gallery: [
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769535840/gtss/products/outu9egsgeql8bax6epq.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769535859/gtss/products/nhiklexfazkq8sadi9si.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769535877/gtss/products/lnmhcrih9vvjzq1afwzb.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769535895/gtss/products/okrm64jjavjmb4kgo2he.jpg"
    ],
    features: [
      { title: "Next.js 15 High Performance Storefront", desc: "Ultra-fast product browsing, SEO optimized pages, and mobile-first responsive design." },
      { title: "M-Pesa & Card Checkout", desc: "Instant checkout with automated STK push for M-Pesa, Visa, and Mastercard." },
      { title: "Real-Time Inventory Tracking", desc: "Automated stock adjustments, variant management, and low stock alerts." },
      { title: "Bespoke GTSS Setup & Hosting", desc: "Fully managed deployment, domain configuration, and ongoing security updates." },
    ],
  },
  "cmkwy2mpv000004laf6le04kd": {
    id: "cmkwy2mpv000004laf6le04kd",
    dbId: "cmkwy2mpv000004laf6le04kd",
    title: "JustInTime",
    subtitle: "GTS-PLA-8158 · Platform",
    category: "Hyperlocal Service Marketplace",
    description: "JustInTime is a hyperlocal skill marketplace designed to bridge the gap between service talent and clients. Provides secure location-based job matching, automated dispatch, and payment escrow.",
    pricing: "Free Platform Access",
    websiteUrl: "https://justintimeservices.vercel.app",
    image: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769539313/gtss/products/h16tvll5gxqgevm869ls.jpg",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769538097/gtss/products/r0ygqexppc3pip4ms1y1.jpg",
    gallery: [
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769539313/gtss/products/h16tvll5gxqgevm869ls.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769539328/gtss/products/fujhipjfpti3wdqytk84.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769539343/gtss/products/ptgvoy1noy9brvlrxwme.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769539364/gtss/products/bytl1vdwxmeqmgcefyki.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769539377/gtss/products/bsibvmpxlsczvkjynf4v.jpg"
    ],
    features: [
      { title: "Hyperlocal Skill & Service Matching", desc: "Instantly match local requests with nearby verified professionals." },
      { title: "Job Dispatch & Milestone Tracking", desc: "Track job progress from dispatch, arrival, execution, to final approval." },
      { title: "M-Pesa Payment Protection", desc: "Integrated local payment processing and secure job completion receipts." },
      { title: "Ratings & Provider Reputation", desc: "Built-in review system to maintain high quality service standards across the platform." },
    ],
  },
  "cmkxqm2ag000004kz7vhkvpza": {
    id: "cmkxqm2ag000004kz7vhkvpza",
    dbId: "cmkxqm2ag000004kz7vhkvpza",
    title: "Kampus",
    subtitle: "GTS-MOB-1511 · Mobile App",
    category: "Campus Social & Utility Ecosystem",
    description: "Kampus is a university-centric social ecosystem that bridges social networking and campus utility. Gives students a hyperlocal space to connect, buy/sell items, and discover campus events.",
    pricing: "Free Mobile App",
    websiteUrl: "https://expo.dev/accounts/elvinoacer/projects/uni-link/builds/34c51c8e-db93-4e55-a791-39ba89bee689",
    image: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769587269/gtss/products/d3ugdikylmwyfzym4sh7.jpg",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769586597/gtss/products/abvufrhnpwa0ubrzhzfs.jpg",
    gallery: [
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769587269/gtss/products/d3ugdikylmwyfzym4sh7.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769587283/gtss/products/yvqfimcpidgt3g3wb2z1.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769587295/gtss/products/j5hq7l3powlzrkzuxpuk.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769587309/gtss/products/b9ubpwkqbhy2clfmwwho.jpg",
      "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769587321/gtss/products/lk2lnbgvxp9citrgzuf1.jpg"
    ],
    features: [
      { title: "Hyperlocal Campus Social Feed", desc: "Connect with students in your university, hostel, or department." },
      { title: "Student-to-Student Marketplace", desc: "Buy and sell textbooks, electronics, and room essentials securely." },
      { title: "Event Discovery & RSVPs", desc: "Never miss campus events, club meetups, and academic hackathons." },
      { title: "Independent Trust Network", desc: "Built with verification mechanisms designed specifically for student safety." },
    ],
  },
};

// Aliases for legacy slug routing
const slugMap: Record<string, string> = {
  "church": "cmkwpx6t3000004i89mcou9z5",
  "church-management-system": "cmkwpx6t3000004i89mcou9z5",
  "ecommerce": "cmkwvzp9n000004ieieyhqcde",
  "commersely": "cmkwvzp9n000004ieieyhqcde",
  "just-in-time": "cmkwy2mpv000004laf6le04kd",
  "justintime": "cmkwy2mpv000004laf6le04kd",
  "kampus": "cmkxqm2ag000004kz7vhkvpza",
};

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Restaurant Manager dedicated page redirect
  if (id === "restaurant-manager" || id === "cmkwglu7u000004jv50w2cmcj" || id === "GTS-SAA-3104") {
    redirect("/products/restaurant-manager");
  }

  const targetId = slugMap[id] || id;

  // Attempt database query
  let dbProduct: any = null;
  try {
    dbProduct = await prisma.product.findFirst({
      where: {
        OR: [
          { id: targetId },
          { productId: targetId },
        ]
      },
      include: {
        features: { orderBy: { priority: "asc" } },
        health: true,
        reviews: true,
      }
    });
  } catch (err) {
    console.error("DB query failed in ProductDetailPage:", err);
  }

  // Fallback map check
  const fallback = fallbackProductMap[targetId] || fallbackProductMap[slugMap[id]];

  if (!dbProduct && !fallback) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--bg)] px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[var(--text)]">System Not Found</h1>
        <p className="mt-3 text-[var(--text-muted)] max-w-md">
          The requested product &apos;{id}&apos; is not currently cataloged.
        </p>
        <Link href="/products" className="luxury-btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" /> Back to Products Catalog
        </Link>
      </div>
    );
  }

  // Clean description string from markdown headers
  const rawDescription = dbProduct?.description || fallback?.description || "";
  const cleanDescription = rawDescription.replace(/^#+\s.*$/gm, "").trim();

  const title = dbProduct?.name || fallback?.title || "GTSS Software";
  const category = dbProduct?.category || fallback?.category || "Software";
  const productIdCode = dbProduct?.productId || fallback?.subtitle || "";
  const tagline = dbProduct?.tagline || cleanDescription.slice(0, 180);
  const websiteUrl = dbProduct?.websiteUrl || fallback?.websiteUrl;
  const logoUrl = dbProduct?.logoUrl || fallback?.logoUrl;
  const primaryImage = dbProduct?.images?.[0] || dbProduct?.logoUrl || fallback?.image || "/images/gtss_bento.png";
  const gallery = dbProduct?.images && dbProduct.images.length > 0 ? dbProduct.images : (fallback?.gallery || [primaryImage]);

  const priceFormatted = dbProduct
    ? (dbProduct.pricingModel === "free"
        ? "Free Platform Access"
        : dbProduct.priceUSD
        ? `$${dbProduct.priceUSD} / month`
        : dbProduct.priceKES
        ? `KES ${dbProduct.priceKES.toLocaleString()} / month`
        : dbProduct.pricing)
    : (fallback?.pricing || "Contact for pricing");

  const featuresList = dbProduct?.features && dbProduct.features.length > 0
    ? dbProduct.features.map((f: any) => ({ title: f.title, desc: f.description }))
    : (fallback?.features || []);

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      {/* Product Hero Section */}
      <section className="relative overflow-hidden bg-[var(--hero-gradient)] pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-[var(--border)]">
        <div
          className="luxury-glow-radial -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--gold)] opacity-10"
          aria-hidden="true"
        />

        <div className="site-wrap relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--gold-luxury)] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to All Products</span>
            </Link>

            <div className="flex items-center gap-2 text-xs text-[var(--text-dim)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>GTSS Certified Deployment</span>
            </div>
          </div>

          {/* Product Header & Media Grid */}
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <div className="flex items-center gap-3.5">
                {logoUrl ? (
                  <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-[var(--gold-border)] bg-[var(--bg-surface-2)] shadow-sm shrink-0">
                    <Image
                      src={logoUrl}
                      alt={title}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
                    {category} · {productIdCode}
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)] mt-1">
                    {title}
                  </h1>
                </div>
              </div>

              <p className="site-lead mt-6 text-base lg:text-lg font-medium text-[var(--text)] leading-relaxed">
                {tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)] whitespace-pre-line">
                {cleanDescription}
              </p>

              {/* Pricing & Metric Chips */}
              <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-mono">
                <span className="border border-[var(--gold-luxury)] bg-[rgba(197,155,39,0.08)] px-3.5 py-1.5 font-bold text-[var(--gold-luxury)] rounded-md">
                  {priceFormatted}
                </span>
                {dbProduct?.priceKES && (
                  <span className="border border-[var(--border)] bg-[var(--bg-surface-2)] px-3.5 py-1.5 font-semibold text-[var(--text)] rounded-md">
                    KES {dbProduct.priceKES.toLocaleString()} / mo
                  </span>
                )}
                <span className="border border-[var(--border)] bg-[var(--bg-surface-2)] px-3.5 py-1.5 text-[var(--text-muted)] rounded-md">
                  Rollout: 14–21 Days
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl(`Hi GTSS, I'd like to schedule a demonstration for ${title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-btn-gold text-xs"
                >
                  <span>Book Live Walkthrough</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-btn-outline text-xs flex items-center gap-2"
                  >
                    <span>Visit Live System</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Media Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border-bright)] bg-[var(--bg-surface-3)] shadow-xl">
                <Image
                  src={primaryImage}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>

              {gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-2.5">
                  {gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)] shadow-sm hover:border-[var(--gold-luxury)] transition-colors"
                    >
                      <Image
                        src={img}
                        alt={`${title} view ${idx + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Features Grid */}
      {featuresList.length > 0 && (
        <section className="site-wrap py-16 lg:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--gold-luxury)]">
              SYSTEM CAPABILITIES
            </span>
            <h2 className="site-title text-[var(--text)] mt-2">
              Engineered for reliability on the floor.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuresList.map((feature: any, index: number) => (
              <div
                key={index}
                className="luxury-card p-6 sm:p-7 border border-[var(--border)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                    <span className="text-xs font-mono font-bold text-[var(--gold-luxury)]">
                      0{index + 1}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text)] mt-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)] mt-2">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Deployment & Rollout Specifications */}
      <section className="border-y border-[var(--border)] bg-[var(--section-alt)] py-16 lg:py-20">
        <div className="site-wrap">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
              <Server className="h-5 w-5 text-[var(--gold-luxury)] mb-3" />
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Deployment
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                Cloud native or on-premise local edge server with zero internet lag.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
              <CreditCard className="h-5 w-5 text-emerald-500 mb-3" />
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Payments
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                Native M-Pesa STK Push, Airtel Money, Visa/Mastercard & cash reconciliations.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
              <Clock className="h-5 w-5 text-blue-500 mb-3" />
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Rollout SLA
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                Complete configuration, hardware mesh, and staff training in 14–21 days.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
              <ShieldCheck className="h-5 w-5 text-[var(--gold-luxury)] mb-3" />
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Data Ownership
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                100% data sovereignty. Your transactions remain your business property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Call to Action */}
      <SiteCTA
        title={`Ready to deploy ${title}?`}
        copy="Book an architecture walkthrough for your team. We provide clear rollout schedules and fixed pricing."
        primary={{ href: "/demo", label: "Request Walkthrough" }}
        secondary={{ href: "/contact", label: "Contact GTSS" }}
      />
    </div>
  );
}
