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
    <article className="public-panel rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-7">
      <div className="mb-4 flex items-start gap-3 sm:mb-6 sm:gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-12 sm:w-12 sm:rounded-2xl">
          <Icon className="h-4 w-4 text-[#f3d79a] sm:h-5 sm:w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white sm:text-2xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-1.5 text-xs leading-6 text-white/58 sm:mt-2 sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {children}
    </article>
  );
}

function getStatusClasses(status: string | null | undefined) {
  switch (status?.toLowerCase()) {
    case "live":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-200";
    case "beta":
      return "border-amber-400/20 bg-amber-400/10 text-amber-100";
    case "deprecated":
      return "border-rose-400/20 bg-rose-400/10 text-rose-100";
    default:
      return "border-white/10 bg-white/5 text-white/70";
  }
}

function getEmbedUrl(url: string) {
  if (url.includes("youtube.com/watch")) {
    return url.replace("watch?v=", "embed/");
  }

  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "youtube.com/embed/");
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

  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
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
    <h3 className="mt-6 text-xl font-semibold tracking-tight text-white first:mt-0 sm:mt-8 sm:text-3xl">
      {children}
    </h3>
  ),
  h2: ({ children }) => (
    <h3 className="mt-6 text-lg font-semibold tracking-tight text-white first:mt-0 sm:mt-8 sm:text-2xl">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="mt-5 text-base font-semibold tracking-tight text-white first:mt-0 sm:mt-6 sm:text-xl">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mt-3 text-xs leading-6 text-white/66 first:mt-0 sm:mt-4 sm:text-base sm:leading-7">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-3 space-y-2 text-xs text-white/66 sm:mt-4 sm:space-y-3 sm:text-base">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-3 list-decimal space-y-2 pl-4 text-xs text-white/66 sm:mt-4 sm:space-y-3 sm:pl-5 sm:text-base">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-6 sm:leading-7">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-[#f3d79a] underline decoration-[#f3d79a]/30 underline-offset-4 transition-colors hover:text-white"
    >
      {children}
    </a>
  ),
  code: ({ children, className }) => {
    const isBlock = Boolean(className);

    if (isBlock) {
      return (
        <code className="text-xs leading-6 text-[#f8e4b7] sm:text-sm sm:leading-7">
          {children}
        </code>
      );
    }

    return (
      <code className="rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 text-[0.92em] text-[#f8e4b7]">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mt-3 overflow-x-auto rounded-[1rem] border border-white/10 bg-[#05080b] p-3 text-xs sm:mt-4 sm:rounded-[1.25rem] sm:p-4 sm:text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-3 rounded-r-[1rem] border-l-2 border-[#f3d79a] bg-white/[0.03] px-4 py-3 text-sm text-white/72 sm:mt-4 sm:rounded-r-[1.25rem] sm:px-5 sm:py-4">
      {children}
    </blockquote>
  ),
};

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const statusClasses = getStatusClasses(product.status);
  const price = formatPrice(product);
  const heroImage = product.images[0] || product.logoUrl;

  const topStats = [
    { label: "Pricing", value: price, icon: BarChart3 },
    { label: "Users", value: product.activeUsers || "N/A", icon: Users },
    { label: "Uptime", value: product.uptime || "N/A", icon: Shield },
    {
      label: "Model",
      value: product.pricingModel || "custom",
      icon: Sparkles,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-3 py-6 sm:px-6 lg:px-8 lg:space-y-10 lg:py-12">
      <section className="public-panel-strong public-card-outline rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-7 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/75 transition-colors hover:border-white/20 hover:text-white sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <ProductShareButton productName={product.name} />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/70 sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]">
                {product.category}
              </span>
              <span
                className={`rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.18em] ${statusClasses}`}
              >
                {product.status || "draft"}
              </span>
              {product.version ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/70 sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]">
                  v{product.version}
                </span>
              ) : null}
            </div>

            <div>
              <h1 className="public-section-title text-3xl text-white sm:text-5xl">
                {product.name}
              </h1>
              {product.tagline ? (
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/68 sm:mt-4 sm:text-lg sm:leading-8">
                  {product.tagline}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-4">
              {topStats.map((item) => (
                <div key={item.label} className="public-stat">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-10 sm:w-10 sm:rounded-2xl">
                    <item.icon className="h-4 w-4 text-[#f3d79a] sm:h-5 sm:w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white sm:mt-4 sm:text-lg">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.55rem] uppercase tracking-[0.14em] text-white/40 sm:text-xs sm:tracking-[0.2em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="public-button-primary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base"
              >
                Request Demo
              </Link>
              {product.websiteUrl ? (
                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="public-button-secondary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base"
                >
                  Visit Website
                  <Globe className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#05080b] sm:rounded-[1.75rem]">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[0.58rem] uppercase tracking-[0.16em] text-white/40 sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.24em]">
                <span>Product Surface</span>
                <span className="break-all text-right">{product.productId}</span>
              </div>

              <div className="relative aspect-[16/11]">
                {heroImage ? (
                  <Image
                    src={heroImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover opacity-84"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,154,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(143,216,255,0.20),transparent_28%),linear-gradient(180deg,#0b1117_0%,#05080b_100%)]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-transparent to-transparent" />
                <div className="absolute left-3 top-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1rem] border border-white/10 bg-[#0a1117]/90 sm:left-4 sm:top-4 sm:h-16 sm:w-16 sm:rounded-[1.25rem]">
                  {product.logoUrl ? (
                    <Image
                      src={product.logoUrl}
                      alt={`${product.name} logo`}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Package className="h-5 w-5 text-[#f3d79a] sm:h-7 sm:w-7" />
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                {
                  label: "Released",
                  value: formatDate(product.releaseDate),
                },
                {
                  label: "Lead Team",
                  value: product.leadTeam || "GTSS",
                },
                {
                  label: "Product ID",
                  value: product.productId,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3 sm:rounded-[1.5rem] sm:p-4"
                >
                  <p className="text-[0.55rem] uppercase tracking-[0.14em] text-white/38 sm:text-xs sm:tracking-[0.22em]">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[0.7rem] font-semibold text-white sm:mt-2 sm:text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <DetailSection
            icon={Package}
            title="Overview"
            description="The core narrative of the product and the problem space it addresses."
          >
            <ReactMarkdown
              components={markdownComponents}
              remarkPlugins={[remarkGfm]}
            >
              {product.description || "No description available yet."}
            </ReactMarkdown>
          </DetailSection>

          {product.features.length > 0 ? (
            <DetailSection
              icon={Sparkles}
              title="Key Capabilities"
              description="High-signal features designed to improve operator confidence and execution speed."
            >
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.5rem] sm:p-5"
                  >
                    <p className="text-[0.58rem] uppercase tracking-[0.14em] text-white/38 sm:text-xs sm:tracking-[0.2em]">
                      Capability
                    </p>
                    <h3 className="mt-2 text-sm font-semibold text-white sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-white/62 sm:mt-3 sm:text-sm sm:leading-7">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </DetailSection>
          ) : null}

          {product.featuresMarkdown ? (
            <DetailSection
              icon={BarChart3}
              title="Feature Narrative"
              description="Long-form detail on workflow coverage and practical outcomes."
            >
              <ReactMarkdown
                components={markdownComponents}
                remarkPlugins={[remarkGfm]}
              >
                {product.featuresMarkdown}
              </ReactMarkdown>
            </DetailSection>
          ) : null}

          {product.instructions ? (
            <DetailSection
              icon={CalendarDays}
              title="Setup Guide"
              description="Implementation notes, onboarding steps, and recommended rollout guidance."
            >
              <ReactMarkdown
                components={markdownComponents}
                remarkPlugins={[remarkGfm]}
              >
                {product.instructions}
              </ReactMarkdown>
            </DetailSection>
          ) : null}

          {product.technicalArchitecture ? (
            <DetailSection
              icon={Shield}
              title="Technical Architecture"
              description="The underlying delivery model, technical structure, and operational assumptions."
            >
              <ReactMarkdown
                components={markdownComponents}
                remarkPlugins={[remarkGfm]}
              >
                {product.technicalArchitecture}
              </ReactMarkdown>
            </DetailSection>
          ) : null}

          {product.images.length > 0 ? (
            <DetailSection
              icon={Film}
              title="Screens and Visuals"
              description="A closer look at how the product presents itself across real surfaces."
            >
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {product.images.map((imageUrl, index) => (
                  <a
                    key={`${imageUrl}-${index}`}
                    href={imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#05080b] sm:rounded-[1.5rem]"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} screenshot ${index + 1}`}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </a>
                ))}
              </div>
            </DetailSection>
          ) : null}

          {product.reviews.length > 0 ? (
            <DetailSection
              icon={Star}
              title="Customer Reviews"
              description="Signals from teams already operating the product."
            >
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.5rem] sm:p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3d79a]/12 text-xs font-semibold text-[#f8e4b7] sm:h-11 sm:w-11 sm:rounded-2xl sm:text-sm">
                          {getInitials(review.authorName)}
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            {review.authorName}
                          </p>
                          {review.authorRole ? (
                            <p className="text-sm text-white/50">
                              {review.authorRole}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={`${review.id}-star-${index}`}
                            className={`h-4 w-4 ${
                              index < review.rating
                                ? "fill-[#FFD700] text-[#FFD700]"
                                : "text-white/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-6 text-white/66 sm:mt-4 sm:text-base sm:leading-7">
                      {review.content}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/38">
                      {formatDate(review.createdAt)}
                    </p>
                  </div>
                ))}
              </div>
            </DetailSection>
          ) : null}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-32 lg:self-start">
          <div className="public-panel rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-5">
            <h3 className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-xs sm:tracking-[0.24em]">
              Product Details
            </h3>
            <div className="mt-4 space-y-3 text-xs text-white/68 sm:mt-5 sm:text-sm">
              <p className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-white/45">
                  <CalendarDays className="h-4 w-4" /> Released
                </span>
                <span>{formatDate(product.releaseDate)}</span>
              </p>
              <p className="flex items-center justify-between gap-4">
                <span className="text-white/45">Product ID</span>
                <span className="font-mono text-[0.65rem] break-all text-right text-white/78 sm:text-xs">
                  {product.productId}
                </span>
              </p>
              <p className="flex items-center justify-between gap-4">
                <span className="text-white/45">Team</span>
                <span>{product.leadTeam || "GTSS"}</span>
              </p>
            </div>
          </div>

          {product.health.length > 0 ? (
            <div className="public-panel rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-5">
              <h3 className="inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-xs sm:tracking-[0.24em]">
                <HeartPulse className="h-4 w-4 text-[#f3d79a]" />
                System Health
              </h3>
              <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                {product.health.map((metric) => (
                  <div key={metric.id}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-xs text-white/68 sm:text-sm">
                      <span>{metric.label}</span>
                      <span>{metric.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.min(metric.percentage, 100)}%`,
                          backgroundColor: metric.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {product.demoVideoUrl ? (
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#05080b] sm:rounded-[1.75rem]">
              <div className="border-b border-white/10 px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/42 sm:px-5 sm:py-4 sm:text-xs sm:tracking-[0.24em]">
                Demo Video
              </div>
              <div className="aspect-video">
                <iframe
                  src={getEmbedUrl(product.demoVideoUrl)}
                  title={`${product.name} demo`}
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}

          {product.assets.length > 0 ? (
            <div className="public-panel rounded-[1.35rem] p-4 sm:rounded-[1.75rem] sm:p-5">
              <h3 className="inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-xs sm:tracking-[0.24em]">
                <Download className="h-4 w-4 text-[#f3d79a]" />
                Resources
              </h3>
              <div className="mt-3 space-y-3 sm:mt-4">
                {product.assets.map((asset) => (
                  <a
                    key={asset.id}
                    href={asset.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-[1rem] border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs text-white/74 transition-colors hover:border-white/20 hover:text-white sm:rounded-[1.25rem] sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="break-words font-semibold text-white">
                        {asset.title}
                      </p>
                      {asset.subtitle ? (
                        <p className="mt-1 text-[0.58rem] uppercase tracking-[0.14em] text-white/38 sm:text-xs sm:tracking-[0.18em]">
                          {asset.subtitle}
                        </p>
                      ) : null}
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          {product.qrCodeUrl ? (
            <div className="public-panel rounded-[1.35rem] p-4 text-center sm:rounded-[1.75rem] sm:p-5">
              <h3 className="inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/42 sm:text-xs sm:tracking-[0.24em]">
                <Smartphone className="h-4 w-4 text-[#f3d79a]" />
                Quick Access
              </h3>
              <div className="mx-auto mt-3 w-[130px] overflow-hidden rounded-[1rem] border border-white/10 bg-white p-2 sm:mt-4 sm:w-[170px] sm:rounded-[1.25rem] sm:p-3">
                <Image
                  src={product.qrCodeUrl}
                  alt="Product QR code"
                  width={130}
                  height={130}
                />
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </div>
  );
}
