import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  Download,
  ExternalLink,
  Film,
  Globe,
  HeartPulse,
  Package,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Eye,
  Play,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import type { PublicProductDetail } from "@/lib/data/public-products";
import { ProductShareButton } from "./ProductShareButton";

interface ProductDetailClientProps {
  product: PublicProductDetail;
}

interface DetailSectionProps {
  children: React.ReactNode;
  description?: string;
  icon: LucideIcon;
  title: string;
}

function DetailSection({
  children,
  description,
  icon: Icon,
  title,
}: DetailSectionProps) {
  return (
    <article className="border border-[var(--border)] bg-[rgba(255,255,255,0.01)] p-6 md:p-8 relative">
      <div className="absolute top-0 left-0 w-8 h-[1px] bg-[var(--gold)]"></div>
      <div className="absolute top-0 left-0 w-[1px] h-8 bg-[var(--gold)]"></div>
      
      <div className="mb-8 flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center border border-[var(--border)] bg-[rgba(255,255,255,0.03)]">
          <Icon className="h-6 w-6 text-[var(--gold)]" />
        </div>
        <div>
          <h2 className="font-bebas text-3xl text-[var(--text)] tracking-tight uppercase">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 font-rajdhani text-sm text-[var(--gold-dim)] uppercase tracking-wider">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      <div className="relative">
        {children}
      </div>
    </article>
  );
}

function getStatusClasses(status: string | null | undefined) {
  switch (status?.toLowerCase()) {
    case "active":
    case "live":
      return "text-green-400 border-green-400/30 bg-green-400/5";
    case "beta":
      return "text-amber-400 border-amber-400/30 bg-amber-400/5";
    case "deprecated":
      return "text-rose-400 border-rose-400/30 bg-rose-400/5";
    default:
      return "text-slate-400 border-slate-400/30 bg-slate-400/5";
  }
}

function getEmbedUrl(url: string) {
  if (!url) return "";
  
  // Handle YouTube Shorts
  if (url.includes("youtube.com/shorts/")) {
    return url.replace("youtube.com/shorts/", "youtube.com/embed/");
  }

  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  
  return url;
}

function formatPrice(product: PublicProductDetail) {
  if (product.priceUSD != null) return `$${product.priceUSD}`;
  if (product.priceKES != null)
    return `KES ${product.priceKES.toLocaleString()}`;
  if (product.pricingModel === "free") return "Free";
  return product.pricing || "Custom";
}

function formatDate(value: Date | string | null | undefined) {
  if (!value) return "N/A";

  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).toUpperCase();
}

function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h3 className="mt-8 mb-4 font-bebas text-3xl text-[var(--text)] uppercase tracking-tight">
      {children}
    </h3>
  ),
  h2: ({ children }) => (
    <h3 className="mt-6 mb-3 font-bebas text-2xl text-[var(--text)] uppercase tracking-tight">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="mt-4 mb-2 font-bebas text-xl text-[var(--text)] uppercase tracking-tight">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mt-4 first:mt-0 font-cormorant italic text-lg leading-relaxed text-[var(--text-muted)]">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 space-y-3 font-rajdhani text-base text-[var(--text-muted)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-3 pl-6 font-rajdhani text-base text-[var(--text-muted)]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-2">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-bold text-[var(--text)]">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-[var(--gold)] hover:text-white transition-colors underline underline-offset-4 decoration-[var(--gold)]/30"
    >
      {children}
    </a>
  ),
  code: ({ children, className }) => {
    const isBlock = Boolean(className);
    if (isBlock) {
      return (
        <code className="block p-4 font-mono-dm text-sm text-[var(--gold)] bg-[rgba(255,255,255,0.02)] border border-[var(--border)] overflow-x-auto">
          {children}
        </code>
      );
    }
    return (
      <code className="px-1.5 py-0.5 font-mono-dm text-sm text-[var(--gold)] bg-[rgba(255,255,255,0.05)] border border-[var(--border)]">
        {children}
      </code>
    );
  },
  pre: ({ children }) => <div className="my-6">{children}</div>,
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 border-[var(--gold)] bg-[rgba(255,255,255,0.02)] px-6 py-4 italic font-cormorant text-xl text-[var(--text-muted)]">
      {children}
    </blockquote>
  ),
};

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const statusClasses = getStatusClasses(product.status);
  const price = formatPrice(product);
  const heroImage = product.images[0] || product.logoUrl;

  const topStats = [
    { label: "PRICING_TIER", value: price, icon: BarChart3 },
    { label: "USER_BASE", value: product.activeUsers || "N/A", icon: Users },
    { label: "SYSTEM_UPTIME", value: product.uptime || "N/A", icon: Shield },
    {
      label: "DELIVERY_MODEL",
      value: (product.pricingModel || "custom").toUpperCase(),
      icon: Sparkles,
    },
  ];

  return (
    <div className="dark-canvas min-h-screen bg-[var(--black)] text-[var(--text)]">
      {/* HUD Background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        {/* Header Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 border-b border-[var(--border)] pb-8">
          <Link
            href="/products"
            className="group flex items-center gap-3 font-bebas text-xl tracking-widest text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            BACK_TO_REGISTRY
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden sm:block font-mono-dm text-[10px] text-[var(--gold-dim)] tracking-[0.2em]">
              SYS_REF: {product.productId}
            </div>
            <ProductShareButton productName={product.name} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="grid gap-12 lg:grid-cols-[1fr_450px] mb-20">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 border border-[var(--border)] bg-[rgba(255,255,255,0.03)] font-mono-dm text-[10px] tracking-widest text-[var(--gold-dim)] uppercase">
                  {product.category}
                </span>
                <span className={`px-3 py-1 border font-mono-dm text-[10px] tracking-widest uppercase ${statusClasses}`}>
                  {product.status || "DRAFT"}
                </span>
                {product.version && (
                  <span className="px-3 py-1 border border-[var(--border)] bg-[rgba(255,255,255,0.03)] font-mono-dm text-[10px] tracking-widest text-[var(--text-muted)]">
                    VER_{product.version}
                  </span>
                )}
              </div>

              <h1 className="font-bebas text-6xl sm:text-8xl tracking-tighter leading-none uppercase">
                {product.name}
              </h1>
              
              {product.tagline && (
                <p className="max-w-2xl font-cormorant italic text-2xl text-[var(--gold-dim)] border-l-2 border-[var(--gold)] pl-6 py-2">
                  {product.tagline}
                </p>
              )}
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {topStats.map((item) => (
                <div key={item.label} className="border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-6 group hover:border-[var(--gold-dim)] transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[rgba(255,255,255,0.03)] mb-4 group-hover:border-[var(--gold)] transition-colors">
                    <item.icon className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <p className="font-bebas text-2xl text-[var(--text)] tracking-tight">
                    {item.value}
                  </p>
                  <p className="mt-1 font-mono-dm text-[9px] uppercase tracking-widest text-[var(--gold-dim)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="h-16 flex-1 flex items-center justify-center bg-[var(--gold)] text-[var(--black)] font-bebas text-2xl tracking-widest hover:bg-white transition-all uppercase"
              >
                PROVISION SYSTEM
              </Link>
              {product.websiteUrl && (
                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 flex-1 flex items-center justify-center border border-[var(--border)] text-[var(--text)] font-bebas text-2xl tracking-widest hover:border-[var(--gold)] transition-all uppercase gap-3"
                >
                  LIVE_INTERFACE
                  <Globe className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-[var(--border)] bg-[rgba(255,255,255,0.01)] p-1">
              <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)]">
                {heroImage ? (
                  <Image
                    src={heroImage}
                    alt={product.name}
                    fill
                    className="object-cover opacity-80"
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent opacity-60" />
                
                {/* Product Identifier Overlays */}
                <div className="absolute top-4 left-4 p-3 border border-[var(--border)] bg-[rgba(0,0,0,0.8)] backdrop-blur-md">
                   {product.logoUrl ? (
                    <Image
                      src={product.logoUrl}
                      alt={`${product.name} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <Package className="h-8 w-8 text-[var(--gold)]" />
                  )}
                </div>
              </div>
            </div>

            {/* Secondary Intel */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  label: "DEPLOYED",
                  value: formatDate(product.releaseDate),
                },
                {
                  label: "AUTHORITY",
                  value: product.leadTeam || "GTSS_CORE",
                },
                {
                  label: "PROTOCOL",
                  value: product.pricingModel?.toUpperCase() || "DIRECT",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-4"
                >
                  <p className="font-mono-dm text-[8px] uppercase tracking-widest text-[var(--gold-dim)]">
                    {item.label}
                  </p>
                  <p className="mt-2 font-bebas text-lg text-[var(--text)] truncate">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Body */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <DetailSection
              icon={Package}
              title="SYSTEM_OVERVIEW"
              description="OBJECTIVE_AND_PARAMETERS"
            >
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown
                  components={markdownComponents}
                  remarkPlugins={[remarkGfm]}
                >
                  {product.description || "No description available yet."}
                </ReactMarkdown>
              </div>
            </DetailSection>

            {product.features.length > 0 && (
              <DetailSection
                icon={Sparkles}
                title="OPERATIONAL_CAPABILITIES"
                description="CORE_SYSTEM_MODULES"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature.id}
                      className="border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-6 relative group hover:border-[var(--gold-dim)] transition-colors"
                    >
                      <span className="font-mono-dm text-[9px] text-[var(--gold-dim)] uppercase tracking-widest block mb-4">
                        MODULE_{feature.id.slice(0, 4)}
                      </span>
                      <h3 className="font-bebas text-2xl text-[var(--text)] mb-3">
                        {feature.title}
                      </h3>
                      <p className="font-rajdhani text-base text-[var(--text-muted)] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}

            {product.featuresMarkdown && (
              <DetailSection
                icon={BarChart3}
                title="TECHNICAL_NARRATIVE"
                description="WORKFLOW_ENGINEERING"
              >
                <ReactMarkdown
                  components={markdownComponents}
                  remarkPlugins={[remarkGfm]}
                >
                  {product.featuresMarkdown}
                </ReactMarkdown>
              </DetailSection>
            )}

            {product.instructions && (
              <DetailSection
                icon={CalendarDays}
                title="IMPLEMENTATION_GUIDE"
                description="DEPLOYMENT_PROTOCOL"
              >
                <ReactMarkdown
                  components={markdownComponents}
                  remarkPlugins={[remarkGfm]}
                >
                  {product.instructions}
                </ReactMarkdown>
              </DetailSection>
            )}

            {product.technicalArchitecture && (
              <DetailSection
                icon={Shield}
                title="ARCHITECTURAL_STANCE"
                description="INFRASTRUCTURE_SPECIFICATIONS"
              >
                <ReactMarkdown
                  components={markdownComponents}
                  remarkPlugins={[remarkGfm]}
                >
                  {product.technicalArchitecture}
                </ReactMarkdown>
              </DetailSection>
            )}

            {product.images.length > 0 && (
              <DetailSection
                icon={Film}
                title="VISUAL_TELEMETRY"
                description="INTERFACE_SURFACES"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {product.images.map((imageUrl, index) => (
                    <div
                      key={`${imageUrl}-${index}`}
                      className="border border-[var(--border)] p-1 bg-[rgba(255,255,255,0.01)]"
                    >
                      <div className="relative aspect-video overflow-hidden border border-[var(--border)]">
                        <Image
                          src={imageUrl}
                          alt={`${product.name} screenshot ${index + 1}`}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}
          </div>

          <aside className="space-y-8">
            {/* System Health */}
            {product.health.length > 0 && (
              <div className="border border-[var(--border)] bg-[rgba(255,255,255,0.01)] p-6">
                <h3 className="flex items-center gap-3 font-bebas text-2xl text-[var(--text)] mb-6 uppercase tracking-tight">
                  <HeartPulse className="h-5 w-5 text-[var(--gold)]" />
                  SYSTEM_VITALS
                </h3>
                <div className="space-y-6">
                  {product.health.map((metric) => (
                    <div key={metric.id}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-mono-dm text-[10px] text-[var(--gold-dim)] uppercase tracking-widest">{metric.label}</span>
                        <span className="font-bebas text-lg text-[var(--text)]">{metric.value}</span>
                      </div>
                      <div className="h-[2px] bg-[var(--border)] w-full relative">
                        <div
                          className="h-full bg-[var(--gold)] absolute top-0 left-0"
                          style={{ width: `${Math.min(metric.percentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video Feed */}
            {product.demoVideoUrl && (
              <div className="border border-[var(--border)] bg-[rgba(255,255,255,0.01)] p-1">
                <div className="border border-[var(--border)]">
                  <div className="border-b border-[var(--border)] px-4 py-3 font-mono-dm text-[10px] text-[var(--gold-dim)] uppercase tracking-widest">
                    VIDEO_FEED::DEMO_01
                  </div>
                  <div className="aspect-video bg-black">
                    <iframe
                      src={getEmbedUrl(product.demoVideoUrl)}
                      title={`${product.name} demo`}
                      className="h-full w-full opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Assets */}
            {product.assets.length > 0 && (
              <div className="border border-[var(--border)] bg-[rgba(255,255,255,0.01)] p-6">
                <h3 className="flex items-center gap-3 font-bebas text-2xl text-[var(--text)] mb-6 uppercase tracking-tight">
                  <Download className="h-5 w-5 text-[var(--gold)]" />
                  RESOURCES
                </h3>
                <div className="space-y-3">
                  {product.assets.map((asset) => (
                    <a
                      key={asset.id}
                      href={asset.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 border border-[var(--border)] hover:border-[var(--gold-dim)] transition-all bg-[rgba(255,255,255,0.02)]"
                    >
                      <div className="min-w-0">
                        <p className="font-bebas text-xl text-[var(--text)] leading-none mb-1 group-hover:text-[var(--gold)] transition-colors">
                          {asset.title}
                        </p>
                        {asset.subtitle && (
                          <p className="font-mono-dm text-[9px] text-[var(--gold-dim)] uppercase tracking-widest">
                            {asset.subtitle}
                          </p>
                        )}
                      </div>
                      <ExternalLink className="h-4 w-4 text-[var(--gold-dim)] group-hover:text-[var(--gold)]" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* QR Registry */}
            {product.qrCodeUrl && (
              <div className="border border-[var(--border)] bg-[rgba(255,255,255,0.01)] p-6 text-center">
                <h3 className="flex items-center justify-center gap-3 font-bebas text-2xl text-[var(--text)] mb-6 uppercase tracking-tight">
                  <Smartphone className="h-5 w-5 text-[var(--gold)]" />
                  QR_ACCESS
                </h3>
                <div className="inline-block p-4 bg-white border border-[var(--gold)] relative group">
                   <div className="absolute inset-0 bg-[var(--gold)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                   <Image
                    src={product.qrCodeUrl}
                    alt="Product QR code"
                    width={160}
                    height={160}
                    className="relative z-10 invert brightness-0"
                  />
                </div>
                <p className="mt-4 font-mono-dm text-[9px] text-[var(--gold-dim)] uppercase tracking-widest">
                  SCAN_TO_INITIATE_SESSION
                </p>
              </div>
            )}

            {/* Reviews */}
            {product.reviews.length > 0 && (
              <div className="border border-[var(--border)] bg-[rgba(255,255,255,0.01)] p-6">
                <h3 className="flex items-center gap-3 font-bebas text-2xl text-[var(--text)] mb-6 uppercase tracking-tight">
                  <Star className="h-5 w-5 text-[var(--gold)]" />
                  OPERATOR_LOGS
                </h3>
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-l border-[var(--border)] pl-4 py-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bebas text-lg text-[var(--text)] leading-none">
                            {review.authorName}
                          </p>
                          <p className="font-mono-dm text-[9px] text-[var(--gold-dim)] mt-1 uppercase">
                            {review.authorRole || "USER"}
                          </p>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <div 
                              key={index} 
                              className={`w-1.5 h-1.5 ml-0.5 ${index < review.rating ? 'bg-[var(--gold)]' : 'bg-white/10'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="font-cormorant italic text-base text-[var(--text-muted)] leading-relaxed">
                        "{review.content}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
