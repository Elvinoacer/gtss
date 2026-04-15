import {
  Activity,
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
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { PublicProductDetail } from "@/lib/data/public-products";

import { ProductShareButton } from "./ProductShareButton";

interface ProductDetailClientProps {
  product: PublicProductDetail;
}

function getStatusClasses(status: string | null | undefined) {
  switch (status?.toLowerCase()) {
    case "live":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/25";
    case "beta":
      return "bg-amber-500/15 text-amber-400 border-amber-500/25";
    case "deprecated":
      return "bg-rose-500/15 text-rose-400 border-rose-500/25";
    default:
      return "bg-slate-500/15 text-slate-300 border-slate-500/25";
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

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const statusClasses = getStatusClasses(product.status);
  const price = formatPrice(product);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8 md:space-y-10">
      <section className="rounded-3xl border border-white/10 bg-[#0F172A]/85 backdrop-blur-xl p-5 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <ProductShareButton productName={product.name} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {product.logoUrl ? (
              <Image
                src={product.logoUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Package className="h-10 w-10 text-white" />
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                {product.category}
              </span>
              <span
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${statusClasses}`}
              >
                {product.status || "draft"}
              </span>
              {product.version ? (
                <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold tracking-wider text-emerald-400">
                  v{product.version}
                </span>
              ) : null}
            </div>

            <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white">
              {product.name}
            </h1>
            {product.tagline ? (
              <p className="text-slate-300 text-base md:text-lg">
                {product.tagline}
              </p>
            ) : null}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-500"
              >
                Request Demo
              </Link>
              {product.websiteUrl ? (
                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10"
                >
                  <Globe className="h-4 w-4" />
                  Visit Website
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-4">
          <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400">
            <Activity className="h-4 w-4" /> Pricing
          </p>
          <p className="text-white font-bold">{price}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-4">
          <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400">
            <Users className="h-4 w-4" /> Users
          </p>
          <p className="text-white font-bold">{product.activeUsers || "N/A"}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-4">
          <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400">
            <Shield className="h-4 w-4" /> Uptime
          </p>
          <p className="text-white font-bold">{product.uptime || "N/A"}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-4">
          <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400">
            <BarChart3 className="h-4 w-4" /> Model
          </p>
          <p className="text-white font-bold capitalize">
            {product.pricingModel || "custom"}
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <article className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 md:p-7">
            <h2 className="mb-4 inline-flex items-center gap-2 text-xl font-bold text-white">
              <Package className="h-5 w-5" /> About
            </h2>
            <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {product.description || "No description available."}
              </ReactMarkdown>
            </div>
          </article>

          {product.instructions ? (
            <article className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 md:p-7">
              <h2 className="mb-4 text-xl font-bold text-white">Setup Guide</h2>
              <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {product.instructions}
                </ReactMarkdown>
              </div>
            </article>
          ) : null}

          {product.technicalArchitecture ? (
            <article className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 md:p-7">
              <h2 className="mb-4 text-xl font-bold text-white">
                Technical Architecture
              </h2>
              <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {product.technicalArchitecture}
                </ReactMarkdown>
              </div>
            </article>
          ) : null}

          {product.featuresMarkdown ? (
            <article className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 md:p-7">
              <h2 className="mb-4 text-xl font-bold text-white">
                Feature Overview
              </h2>
              <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {product.featuresMarkdown}
                </ReactMarkdown>
              </div>
            </article>
          ) : null}

          {product.features.length > 0 ? (
            <article className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 md:p-7">
              <h2 className="mb-4 text-xl font-bold text-white">
                Key Features
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                {product.features.map((feature) => {
                  return (
                    <div
                      key={feature.id}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold text-white">
                        <Star className="h-4 w-4" /> {feature.title}
                      </p>
                      <p className="text-sm text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>
          ) : null}

          {product.images.length > 0 ? (
            <article className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 md:p-7">
              <h2 className="mb-4 inline-flex items-center gap-2 text-xl font-bold text-white">
                <Film className="h-5 w-5" /> Screenshots
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.images.map((imageUrl, index) => (
                  <a
                    key={`${imageUrl}-${index}`}
                    href={imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} screenshot ${index + 1}`}
                      width={1200}
                      height={675}
                      className="h-auto w-full object-cover"
                    />
                  </a>
                ))}
              </div>
            </article>
          ) : null}

          {product.reviews.length > 0 ? (
            <article className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 md:p-7">
              <h2 className="mb-4 text-xl font-bold text-white">
                Customer Reviews
              </h2>
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-bold text-white">
                          {review.authorName}
                        </p>
                        {review.authorRole ? (
                          <p className="text-xs text-slate-400">
                            {review.authorRole}
                          </p>
                        ) : null}
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={`${review.id}-star-${index}`}
                            className={`h-3.5 w-3.5 ${index < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-500"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">{review.content}</p>
                    <p className="mt-2 text-xs text-slate-500">
                      {new Date(review.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ) : null}
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-400">
              Product Details
            </h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center justify-between text-slate-300">
                <span className="inline-flex items-center gap-2 text-slate-400">
                  <CalendarDays className="h-4 w-4" /> Released
                </span>
                <span>
                  {product.releaseDate
                    ? new Date(product.releaseDate).toLocaleDateString()
                    : "N/A"}
                </span>
              </p>
              <p className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Product ID</span>
                <span className="font-mono text-xs">{product.productId}</span>
              </p>
              <p className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Team</span>
                <span>{product.leadTeam || "GTSS"}</span>
              </p>
            </div>
          </div>

          {product.demoVideoUrl ? (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/80">
              <div className="border-b border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-wider text-slate-300">
                Demo Video
              </div>
              <div className="aspect-video bg-[#020617]">
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

          {product.health.length > 0 ? (
            <div className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5">
              <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-300">
                <HeartPulse className="h-4 w-4" /> System Health
              </h3>
              <div className="space-y-3">
                {product.health.map((metric) => (
                  <div key={metric.id}>
                    <div className="mb-1 flex items-center justify-between text-xs text-slate-300">
                      <span>{metric.label}</span>
                      <span>{metric.value}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
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

          {product.assets.length > 0 ? (
            <div className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5">
              <h3 className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-300">
                <Download className="h-4 w-4" /> Resources
              </h3>
              <div className="space-y-2">
                {product.assets.map((asset) => (
                  <a
                    key={asset.id}
                    href={asset.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200 hover:bg-white/10"
                  >
                    <span className="truncate">{asset.title}</span>
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          {product.qrCodeUrl ? (
            <div className="rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 text-center">
              <h3 className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-300">
                <Smartphone className="h-4 w-4" /> Quick Access
              </h3>
              <div className="mx-auto w-[150px] overflow-hidden rounded-xl border border-white/10 bg-white p-2">
                <Image
                  src={product.qrCodeUrl}
                  alt="Product QR code"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </div>
  );
}
