"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Video,
  Package,
  Tag,
  DollarSign,
  QrCode,
  Sparkles,
  Shield,
  Zap,
  Globe,
  MessageSquare,
  Calendar,
  Users,
  BarChart,
  Lock,
  Clock,
  Download,
  Share2,
  Star,
  ChevronRight,
  TrendingUp,
  Layers,
  Database,
  Smartphone,
  Server,
  Cloud,
  Phone,
  Copy,
  Check,
} from "lucide-react";
import { getIcon } from "@/lib/icons";

interface ProductDetailClientProps {
  product: any;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [copied, setCopied] = useState(false);
  const ProductIcon = getIcon(product.icon);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const getStatusStyles = (status: string) => {
    const styles = {
      live: {
        bg: "bg-gradient-to-r from-[#10B981] to-emerald-600",
        text: "text-[#10B981]",
        border: "border-[#10B981]/30",
      },
      beta: {
        bg: "bg-gradient-to-r from-[#F59E0B] to-amber-600",
        text: "text-[#F59E0B]",
        border: "border-[#F59E0B]/30",
      },
      deprecated: {
        bg: "bg-gradient-to-r from-[#EF4444] to-rose-600",
        text: "text-[#EF4444]",
        border: "border-[#EF4444]/30",
      },
      default: {
        bg: "bg-gradient-to-r from-[#6B7280] to-slate-600",
        text: "text-[#6B7280]",
        border: "border-[#6B7280]/30",
      },
    };

    return (
      styles[status.toLowerCase() as keyof typeof styles] || styles.default
    );
  };

  const statusStyles = getStatusStyles(product.status);

  // Custom markdown components for proper rendering
  const markdownComponents = {
    h1: ({ children }: any) => (
      <h1 className="text-2xl font-black text-[#111827] dark:text-white mt-6 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-bold text-[#111827] dark:text-white mt-5 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg font-semibold text-[#111827] dark:text-white mt-4 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }: any) => (
      <p className="text-[#6B7280] dark:text-slate-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }: any) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2563EB] hover:text-[#1d4ed8] underline font-medium transition-colors"
      >
        {children}
      </a>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-[#6B7280] dark:text-slate-300">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-[#6B7280] dark:text-slate-300">
        {children}
      </ol>
    ),
    li: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    code: ({ inline, children }: any) =>
      inline ? (
        <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-sm font-mono text-[#111827] dark:text-white">
          {children}
        </code>
      ) : (
        <code className="block p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-mono overflow-x-auto mb-4">
          {children}
        </code>
      ),
    pre: ({ children }: any) => (
      <pre className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#2563EB] pl-4 italic text-[#6B7280] dark:text-slate-400 my-4">
        {children}
      </blockquote>
    ),
    img: ({ src, alt }: any) => (
      <img
        src={src}
        alt={alt || ""}
        className="rounded-xl max-w-full h-auto my-4 shadow-lg"
      />
    ),
    hr: () => <hr className="my-6 border-slate-200 dark:border-slate-700" />,
    table: ({ children }: any) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          {children}
        </table>
      </div>
    ),
    th: ({ children }: any) => (
      <th className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-left text-sm font-semibold text-[#111827] dark:text-white">
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td className="px-4 py-2 text-sm text-[#6B7280] dark:text-slate-300 border-t border-slate-200 dark:border-slate-700">
        {children}
      </td>
    ),
  };

  return (
    <>
      {/* Premium Hero Section with Enhanced Visuals */}
      <section className="relative pt-20 md:pt-32 pb-20 md:pb-40 overflow-hidden bg-gradient-to-b from-primary via-primary to-primary">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between mb-6 md:mb-12">
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300"
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all group-hover:scale-105">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase hidden md:inline">
                Product Directory
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Share
              </span>
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span className="text-xs text-[#10B981] font-medium">
                      Copied!
                    </span>
                  </>
                ) : (
                  <Share2 className="w-4 h-4 text-slate-300" />
                )}
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 md:gap-16">
              {/* Left Column - Product Identity */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {/* Enhanced Product Logo */}
                  <div className="relative group shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent-hover/30 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700" />
                    <div className="relative">
                      <div className="size-20 md:size-36 rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-accent via-accent-hover to-blue-800 p-1 shadow-2xl shadow-accent/30">
                        <div className="w-full h-full bg-primary rounded-xl md:rounded-[2.3rem] flex items-center justify-center overflow-hidden">
                          {product.logoUrl ? (
                            <img
                              src={product.logoUrl}
                              alt={product.name}
                              className="w-10 h-10 md:w-20 md:h-20 object-contain"
                            />
                          ) : (
                            <ProductIcon className="w-10 h-10 md:w-20 md:h-20 text-white" />
                          )}
                        </div>
                      </div>
                      {/* Status Badge */}
                      <div
                        className={`absolute -top-2 -right-2 px-3 py-1 rounded-full ${statusStyles.bg} border border-white/20 backdrop-blur-sm`}
                      >
                        <span className="text-xs font-black text-white uppercase tracking-wider">
                          {product.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3 md:space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2 md:gap-4">
                        <h1 className="text-2xl md:text-7xl font-black text-white tracking-tight leading-[0.9]">
                          {product.name}
                        </h1>
                      </div>

                      {/* Category Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                          <Tag className="w-4 h-4 text-accent" />
                          <span className="text-xs md:text-sm font-bold text-white">
                            {product.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                          <QrCode className="w-4 h-4 text-accent/80" />
                          <span className="text-xs md:text-sm font-mono text-slate-300 tracking-tight">
                            ID: {product.productId}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-md">
                      {product.activeUsers && (
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-accent" />
                            <div className="text-lg md:text-xl font-black text-white">
                              {product.activeUsers}
                            </div>
                          </div>
                          <div className="text-xs text-slate-400 font-medium">
                            Active Users
                          </div>
                        </div>
                      )}
                      {product.uptime && (
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-[#10B981]" />
                            <div className="text-xl font-black text-white">
                              {product.uptime}
                            </div>
                          </div>
                          <div className="text-xs text-slate-400 font-medium">
                            Uptime
                          </div>
                        </div>
                      )}
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-accent" />
                          <div className="text-xl font-black text-white">
                            24/7
                          </div>
                        </div>
                        <div className="text-xs text-slate-400 font-medium">
                          Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - CTA Actions */}
              <div className="lg:w-96 space-y-6">
                <div className="bg-gradient-to-br from-accent/10 to-accent-hover/10 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                  <h3 className="text-xl font-black text-white mb-4">
                    Get Started Today
                  </h3>
                  <div className="space-y-4">
                    <Link
                      href="/contact?type=demo"
                      className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-accent to-accent-hover text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-accent/30 hover:scale-[1.02] transition-all duration-300"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Free Demo</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact?type=sales"
                      className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold border border-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Talk to Sales</span>
                    </Link>
                  </div>

                  {/* Quick Info */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-black text-white mb-1">
                          {product.priceUSD
                            ? `$${product.priceUSD}`
                            : "Custom"}
                        </div>
                        <div className="text-xs text-slate-400">
                          Starting Price
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-white mb-1">
                          15 Days
                        </div>
                        <div className="text-xs text-slate-400">Free Trial</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Pricing Model",
                value: product.pricing,
                icon: DollarSign,
                color: "from-[#10B981] to-emerald-600",
                details: product.priceUSD
                  ? `Starting at $${product.priceUSD}`
                  : "Custom Quote",
              },
              {
                label: "Deployment",
                value: "Cloud & On-Premise",
                icon: Cloud,
                color: "from-accent to-accent-hover",
                details: "Flexible Hosting Options",
              },
              {
                label: "Security Level",
                value: "Enterprise Grade",
                icon: Shield,
                color: "from-slate-700 to-slate-800",
                details: "SOC2 Compliant",
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 dark:from-primary/80 dark:to-primary/60 backdrop-blur-xl rounded-3xl border border-[#E5E7EB] dark:border-slate-800 shadow-2xl shadow-black/10 -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative bg-gradient-to-br from-white to-[#F8FAFC] dark:from-primary dark:to-[#1E293B] rounded-3xl border border-[#E5E7EB] dark:border-slate-800 p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${item.color}`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-bold text-[#6B7280] uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-2xl font-black text-[#111827] dark:text-white mb-2">
                    {item.value}
                  </p>
                  <p className="text-sm text-[#6B7280] dark:text-slate-400 font-medium">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-hover rounded-[2.8rem] opacity-0 group-hover:opacity-20 blur transition duration-500" />
                <div className="relative bg-white dark:bg-primary rounded-[2.5rem] border border-[#E5E7EB] dark:border-slate-800 p-10 shadow-lg">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-accent to-accent-hover">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-black text-[#111827] dark:text-white tracking-tight">
                        Product Overview
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
                    {/* Use product tagline instead of hardcoded quote */}
                    {product.tagline && (

                      <div className="not-prose mb-8 p-6 rounded-2xl bg-gradient-to-r from-accent/5 to-accent-hover/5 dark:from-accent/10 dark:to-accent-hover/10 border border-accent/10">
                        <p className="text-lg font-semibold text-[#6B7280] dark:text-slate-300 italic">
                          "{product.tagline}"
                        </p>
                      </div>
                    )}
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={markdownComponents}
                    >
                      {product.description || "No description available."}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              {/* Instructions Section */}
              {product.instructions && (
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#10B981] to-emerald-500 rounded-[2.8rem] opacity-0 group-hover:opacity-20 blur transition duration-500" />
                  <div className="relative bg-white dark:bg-primary rounded-[2.5rem] border border-[#E5E7EB] dark:border-slate-800 p-10 shadow-lg">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-[#10B981] to-emerald-600">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-black text-[#111827] dark:text-white tracking-tight">
                        Getting Started
                      </h2>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                      >
                        {product.instructions}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              )}

              {/* Features Grid */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-amber-600">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-[#111827] dark:text-white tracking-tight">
                        Core Capabilities
                      </h2>
                      <p className="text-[#6B7280] dark:text-slate-400 mt-2 font-medium">
                        Everything you need to succeed
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature: any, idx: number) => (
                      <div key={feature.id} className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-hover rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                        <div className="relative h-full bg-white dark:bg-primary rounded-3xl border border-[#E5E7EB] dark:border-slate-800 p-8 hover:border-accent/30 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="size-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hover/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <CheckCircle className="w-6 h-6 text-[#10B981]" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-black text-[#111827] dark:text-white">
                                  {feature.title}
                                </h3>
                                {feature.premium && (
                                  <span className="px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-[#F59E0B] to-amber-600 text-white rounded-full">
                                    PRO
                                  </span>
                                )}
                              </div>
                              {feature.description && (
                                <p className="text-[#6B7280] dark:text-slate-400 text-sm leading-relaxed">
                                  {feature.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack & Architecture - Dynamic from DB */}
              {product.technicalArchitecture && (
                <div className="bg-white dark:bg-primary rounded-[2.5rem] border border-[#E5E7EB] dark:border-slate-800 p-10 shadow-lg">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-[#111827] dark:text-white tracking-tight">
                      Technical Architecture
                    </h2>
                  </div>

                  <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={markdownComponents}
                    >
                      {product.technicalArchitecture}
                    </ReactMarkdown>
                  </div>
                </div>
              )}

              {/* Gallery Section */}
              {product.images && product.images.length > 0 && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-accent to-accent-hover">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-black text-[#111827] dark:text-white tracking-tight">
                        Visual Showcase
                      </h2>
                    </div>
                    <div className="text-sm text-[#6B7280] dark:text-slate-400 font-medium">
                      {product.images.length} Images
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.images.map((image: string, idx: number) => (
                      <div
                        key={idx}
                        className="group relative aspect-video rounded-3xl overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <img
                          src={image}
                          alt={`${product.name} - Screenshot ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-bold">
                              Interface Preview
                            </span>
                            <span className="text-sm text-white/70">
                              #{idx + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Demo Video Card */}
              {product.demoVideoUrl && (
                <div className="bg-white dark:bg-primary rounded-[2.5rem] border border-[#E5E7EB] dark:border-slate-800 p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent to-accent-hover">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#111827] dark:text-white">
                        Product Demo
                      </h3>
                      <p className="text-sm text-[#6B7280] dark:text-slate-400">
                        5 minute walkthrough
                      </p>
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-hover/10" />
                    <iframe
                      width="100%"
                      height="100%"
                      src={product.demoVideoUrl.replace("watch?v=", "embed/")}
                      title={`${product.name} Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="relative z-10"
                    />
                  </div>

                  <div className="flex gap-3 mt-6">
                    <a
                      href={product.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#F8FAFC] dark:bg-slate-900 text-[#6B7280] dark:text-slate-300 rounded-xl font-bold hover:bg-[#E5E7EB] dark:hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Full</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Quick Links - Disabled with Coming Soon */}
              <div className="bg-gradient-to-br from-accent/10 via-accent-hover/10 to-slate-500/10 backdrop-blur-sm rounded-[2.5rem] border border-[#E5E7EB] dark:border-slate-800 p-8">
                <h3 className="text-xl font-black text-[#111827] dark:text-white mb-6">
                  Quick Resources
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Documentation", icon: Package },
                    { label: "API Reference", icon: Database },
                    { label: "Case Studies", icon: BarChart },
                    { label: "Support Center", icon: MessageSquare },
                  ].map((link, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 opacity-60 cursor-not-allowed"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#F8FAFC] dark:bg-slate-800">
                          <link.icon className="w-4 h-4 text-[#6B7280]" />
                        </div>
                        <span className="font-bold text-[#6B7280] dark:text-slate-400">
                          {link.label}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* QR Share Card */}
              {product.qrCodeUrl && (
                <div className="relative overflow-hidden rounded-[2.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-hover to-blue-800" />
                  <div className="relative z-10 p-10 text-center text-white">
                    <h3 className="text-2xl font-black mb-6">Share Product</h3>
                    <div className="bg-white p-6 rounded-[2rem] inline-block shadow-2xl mb-6">
                      <img
                        src={product.qrCodeUrl}
                        alt="QR Code"
                        className="size-40"
                      />
                    </div>
                    <p className="text-blue-100 text-sm font-medium">
                      Scan to instantly share this product with your team
                    </p>
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-slate-800 p-10 text-white">
                <div className="absolute top-0 right-0 size-64 bg-gradient-to-bl from-accent/20 to-accent-hover/20 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">
                    Ready to Transform?
                  </h3>
                  <p className="text-slate-400 text-sm mb-8 font-medium leading-relaxed">
                    Join industry leaders using {product.name} to drive
                    innovation and growth.
                  </p>
                  <Link
                    href="/contact"
                    className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-[#0F172A] rounded-2xl font-bold hover:scale-[1.02] transition-all shadow-2xl"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-sm text-slate-400 mb-2">
                        Need immediate help?
                      </div>
                      <a
                        href="tel:+254790670542"
                        className="text-lg font-bold text-white hover:text-accent transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        +254 790 670 542
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dynamic from DB */}
      {product.reviews && product.reviews.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#111827] dark:text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-[#6B7280] dark:text-slate-400 max-w-2xl mx-auto font-medium">
                See what our customers say about transforming their business
                with {product.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.reviews.map((review: any) => (
                <div
                  key={review.id}
                  className="bg-white dark:bg-primary rounded-3xl border border-[#E5E7EB] dark:border-slate-800 p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {review.authorAvatar ? (
                      <img
                        src={review.authorAvatar}
                        alt={review.authorName}
                        className="size-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="size-12 rounded-full bg-gradient-to-r from-accent to-accent-hover" />
                    )}
                    <div>
                      <div className="font-bold text-[#111827] dark:text-white">
                        {review.authorName}
                      </div>
                      {review.authorRole && (
                        <div className="text-sm text-[#6B7280] dark:text-slate-400">
                          {review.authorRole}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-[#6B7280] dark:text-slate-300 italic mb-6">
                    "{review.content}"
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "fill-[#F59E0B] text-[#F59E0B]"
                            : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
