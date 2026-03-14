"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Package,
  DollarSign,
  Sparkles,
  Shield,
  MessageSquare,
  Users,
  Clock,
  Share2,
  Star,
  ChevronRight,
  Globe,
  Smartphone,
  Download,
  FileText,
  Film,
  Presentation,
  Check,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Quote,
  Activity,
  Cpu,
  Heart,
  Zap,
  BarChart3,
  Server,
} from "lucide-react";
import { getIcon } from "@/lib/icons";
import { FeaturesSection } from "./FeaturesSection";

interface ProductDetailClientProps {
  product: any;
  productId?: string;
  initialProduct?: any;
  isAuthenticated?: boolean;
}

export function ProductDetailClient({ product: serverProduct, initialProduct, isAuthenticated = false }: ProductDetailClientProps) {
  const product = initialProduct || serverProduct;
  
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const ProductIcon = getIcon(product?.icon || "box");

  if (!product) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="text-center bg-[#0F172A] p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-4">Product Not Found</h2>
          <Link href="/products" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: product.name, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to share:", err);
      }
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getStatusConfig = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'live':
        return { bg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25', dot: 'bg-emerald-400', label: 'Live' };
      case 'beta':
        return { bg: 'bg-amber-500/15 text-amber-400 border-amber-500/25', dot: 'bg-amber-400', label: 'Beta' };
      case 'deprecated':
        return { bg: 'bg-red-500/15 text-red-400 border-red-500/25', dot: 'bg-red-500', label: 'Deprecated' };
      default:
        return { bg: 'bg-slate-500/15 text-slate-400 border-slate-500/25', dot: 'bg-slate-400', label: 'Draft' };
    }
  };

  const status = getStatusConfig(product.status || 'draft');

  const gradients = [
    'from-blue-600 via-indigo-600 to-violet-600',
    'from-emerald-500 via-teal-500 to-cyan-500',
    'from-orange-500 via-rose-500 to-pink-500',
    'from-fuchsia-500 via-purple-500 to-indigo-500',
    'from-cyan-500 via-blue-500 to-indigo-500',
  ];
  const gradientClass = gradients[(product.name?.charCodeAt(0) || 0) % gradients.length];

  const markdownComponents = {
    h1: ({ children }: any) => <h1 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3 tracking-tight">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-lg md:text-xl font-bold text-white mt-6 mb-3 border-b border-white/10 pb-2">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-base md:text-lg font-semibold text-slate-200 mt-5 mb-2">{children}</h3>,
    p: ({ children }: any) => <p className="text-sm md:text-[15px] text-slate-400 mb-3 leading-relaxed">{children}</p>,
    a: ({ href, children }: any) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">{children}</a>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1.5 mb-4 text-sm text-slate-400 marker:text-blue-400/60">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-1.5 mb-4 text-sm text-slate-400 marker:text-emerald-400/60">{children}</ol>,
    li: ({ children }: any) => <li className="pl-1">{children}</li>,
    code: ({ inline, children }: any) => inline 
      ? <code className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-xs font-mono text-emerald-400">{children}</code>
      : <div className="rounded-xl overflow-hidden bg-[#020617] border border-white/5 p-4 mb-4">
          <code className="text-xs font-mono text-slate-300 block overflow-x-auto">{children}</code>
        </div>,
    pre: ({ children }: any) => <pre className="not-prose">{children}</pre>,
    blockquote: ({ children }: any) => <blockquote className="border-l-3 border-blue-500/50 pl-4 py-1 my-4 text-sm text-slate-300 italic bg-blue-500/5 rounded-r-lg">{children}</blockquote>,
    img: ({ src, alt }: any) => <img src={src} alt={alt} className="rounded-xl w-full h-auto my-6 border border-white/10 shadow-lg" />,
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const getAssetIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'pdf': return FileText;
      case 'video': return Film;
      case 'slides': return Presentation;
      default: return Download;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3.5 h-3.5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} 
      />
    ));
  };

  const displayPrice = product.priceUSD 
    ? `$${product.priceUSD}` 
    : product.priceKES 
      ? `KES ${product.priceKES.toLocaleString()}` 
      : product.pricingModel === 'free' ? 'Free' : null;

  return (
    <motion.div variants={stagger} initial="hidden" animate="show">
      
      {/* ═══════════════════ HERO ═══════════════════ */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-10 -mt-4 sm:-mt-6 lg:-mt-10 mb-8 pt-12 md:pt-24 pb-20 md:pb-36 overflow-hidden bg-[#0F172A]">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br ${gradientClass} rounded-full blur-[140px] opacity-20 -translate-y-1/2`} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] translate-y-1/3" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_40%,transparent_100%)] opacity-30" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Top nav */}
          <div className="flex items-center justify-between gap-4 mb-10 md:mb-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
            >
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:-translate-x-0.5 transition-all">
                <ArrowLeft className="w-3.5 h-3.5" />
              </div>
              <span className="hidden sm:inline">Back to Products</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied!" : "Share"}</span>
              </button>
              {isAuthenticated && (
                <Link
                  href={`/dashboard/products/${product.id}/edit`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white text-[#0F172A] hover:bg-slate-100 rounded-lg text-xs font-bold transition-all"
                >
                  <span className="hidden sm:inline">Edit Product</span>
                  <span className="sm:hidden">Edit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>

          {/* Hero content */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center lg:items-start text-center lg:text-left">
            {/* Product icon */}
            <motion.div variants={fadeUp} className="relative shrink-0">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-gradient-to-br ${gradientClass} p-[2px] shadow-2xl`}>
                <div className="w-full h-full bg-[#0F172A] rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] md:rounded-[calc(1.5rem-2px)] flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                  {product.logoUrl ? (
                    <Image src={product.logoUrl} alt={product.name} fill className="object-cover" sizes="128px" />
                  ) : (
                    <ProductIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/90" />
                  )}
                </div>
              </div>
              {/* Status badge */}
              <div className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-1/3 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${status.bg}`}>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
                  {status.label}
                </div>
              </div>
            </motion.div>

            <div className="flex-1 space-y-4 max-w-2xl">
              {/* Meta tags */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-semibold tracking-wide uppercase">
                  {product.category}
                </span>
                {product.version && (
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold tracking-wide">
                    v{product.version}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-500 text-[11px] font-mono">
                  {product.productId}
                </span>
              </motion.div>

              {/* Product name */}
              <motion.h1 
                variants={fadeUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
              >
                {product.name}
              </motion.h1>
              
              {/* Tagline */}
              {product.tagline && (
                <motion.p variants={fadeUp} className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {product.tagline}
                </motion.p>
              )}

              {/* Quick action buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                {displayPrice && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white">{displayPrice}</span>
                  </div>
                )}
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${gradientClass} text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg`}
                >
                  Request Demo
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {product.websiteUrl && (
                  <a
                    href={product.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Visit Website
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <div className="container mx-auto px-4 md:px-6 -mt-14 md:-mt-20 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8 md:mb-12">
          {[
            { label: 'Pricing', value: product.pricingModel === 'free' ? 'Free' : (product.pricing || 'Custom'), icon: Activity, color: 'text-emerald-400' },
            { label: 'Active Users', value: product.activeUsers || '—', icon: Users, color: 'text-blue-400' },
            { label: 'Uptime', value: product.uptime || '99.99%', icon: Shield, color: 'text-violet-400' },
            { label: 'Price', value: product.priceUSD ? `$${product.priceUSD}` : (product.priceKES ? `KES ${product.priceKES.toLocaleString()}` : 'Custom'), icon: BarChart3, color: 'text-amber-400' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#0F172A]/90 backdrop-blur-xl rounded-xl p-3.5 md:p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className={`p-1.5 rounded-lg bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] md:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
              </div>
              <div className="text-base md:text-lg font-bold text-white truncate">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════ DUAL PRICING ═══════════════════ */}
        {product.priceUSD && product.priceKES && (
          <motion.div
            variants={fadeUp}
            className="mb-8 md:mb-12 relative overflow-hidden rounded-2xl p-6 md:p-10 border border-white/10"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-[0.07]`} />
            <div className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-xl" />
            
            <div className="relative z-10">
              <p className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-6">Available Pricing</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">USD</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-emerald-400">$</span>
                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{product.priceUSD}</span>
                  </div>
                </div>
                <div className="w-16 h-px sm:w-px sm:h-16 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">KES</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-semibold text-blue-400">KES</span>
                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{product.priceKES.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ═══════════════════ MAIN LAYOUT ═══════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          
          {/* ── LEFT: MAIN CONTENT ── */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">

            {/* About / Description */}
            <motion.section variants={fadeUp} className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-5 md:p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                  <Sparkles className="w-4.5 h-4.5 md:w-5 md:h-5" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-white">About</h2>
              </div>
              <div className="prose prose-sm prose-slate prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {product.description || "No description available."}
                </ReactMarkdown>
              </div>
            </motion.section>

            {/* Setup Guide / Instructions */}
            {product.instructions && (
              <motion.section variants={fadeUp} className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-5 md:p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                    <Package className="w-4.5 h-4.5 md:w-5 md:h-5" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Setup Guide</h2>
                </div>
                <div className="prose prose-sm prose-slate prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {product.instructions}
                  </ReactMarkdown>
                </div>
              </motion.section>
            )}

            {/* Technical Architecture */}
            {product.technicalArchitecture && (
              <motion.section variants={fadeUp} className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-5 md:p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20">
                    <Server className="w-4.5 h-4.5 md:w-5 md:h-5" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Technical Architecture</h2>
                </div>
                <div className="prose prose-sm prose-slate prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {product.technicalArchitecture}
                  </ReactMarkdown>
                </div>
              </motion.section>
            )}

            {/* Features */}
            {((product.features && product.features.length > 0) || product.featuresMarkdown) && (
              <FeaturesSection
                features={product.features || []}
                productName={product.name}
                initialCount={6}
                markdownContent={product.featuresMarkdown}
              />
            )}

            {/* Screenshots */}
            {product.images && product.images.length > 0 && (
              <motion.section variants={fadeUp} className="space-y-4">
                <div className="flex items-center gap-3 px-1">
                  <Film className="w-4.5 h-4.5 text-slate-400" />
                  <h2 className="text-lg md:text-xl font-bold text-white">Screenshots</h2>
                  <span className="text-xs text-slate-500 font-medium">{product.images.length} {product.images.length === 1 ? 'image' : 'images'}</span>
                </div>
                <div className={`grid gap-4 ${product.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  {product.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => openLightbox(idx)}
                      className="rounded-xl overflow-hidden border border-white/10 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      <Image 
                        src={img} 
                        alt={`${product.name} screenshot ${idx + 1}`} 
                        width={800}
                        height={450}
                        className="w-full h-auto transform transition-transform duration-500 group-hover:scale-[1.03]" 
                      />
                    </button>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Customer Reviews */}
            {product.reviews && product.reviews.length > 0 && (
              <motion.section variants={fadeUp} className="space-y-4">
                <div className="flex items-center gap-3 px-1">
                  <MessageSquare className="w-4.5 h-4.5 text-slate-400" />
                  <h2 className="text-lg md:text-xl font-bold text-white">Customer Reviews</h2>
                  <span className="ml-auto text-xs text-slate-500 font-medium">
                    {product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {product.reviews.map((review: any) => (
                    <div 
                      key={review.id}
                      className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-white/5 hover:border-white/10 transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        {review.authorAvatar ? (
                          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10"><Image src={review.authorAvatar} alt={review.authorName} fill className="object-cover" sizes="36px" /></div>
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{review.authorName?.charAt(0)?.toUpperCase()}</span>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-semibold text-white truncate">{review.authorName}</h4>
                            <div className="flex items-center gap-0.5 shrink-0">{renderStars(review.rating)}</div>
                          </div>
                          {review.authorRole && (
                            <p className="text-[11px] text-slate-500 font-medium">{review.authorRole}</p>
                          )}
                        </div>
                      </div>
                      <div className="relative pl-3 border-l-2 border-white/5">
                        <Quote className="absolute -left-2 -top-1 w-4 h-4 text-slate-700" />
                        <p className="text-sm text-slate-400 leading-relaxed">{review.content}</p>
                      </div>
                      {review.createdAt && (
                        <p className="text-[10px] text-slate-600 mt-3 font-medium">
                          {new Date(review.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* ── RIGHT: SIDEBAR ── */}
          <div className="space-y-5">

            {/* Demo Video */}
            {product.demoVideoUrl && (
              <motion.div variants={fadeUp} className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5">
                <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <h3 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Demo Video</h3>
                </div>
                <div className="aspect-video bg-[#020617] relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src={product.demoVideoUrl.replace("watch?v=", "embed/")}
                    title={`${product.name} demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
              </motion.div>
            )}

            {/* Health Metrics */}
            {product.health && product.health.length > 0 && (
              <motion.div variants={fadeUp} className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-5 border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <h3 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">System Health</h3>
                </div>
                <div className="space-y-3.5">
                  {product.health.map((metric: any) => (
                    <div key={metric.id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-slate-400">{metric.label}</span>
                        <span className="text-xs font-bold text-white">{metric.value}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-700"
                          style={{ 
                            width: `${Math.min(metric.percentage, 100)}%`,
                            backgroundColor: metric.color 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Resources / Assets */}
            {product.assets && product.assets.length > 0 && (
              <motion.div variants={fadeUp} className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-5 border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <Download className="w-4 h-4 text-violet-400" />
                  <h3 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Resources</h3>
                </div>
                <div className="space-y-2">
                  {product.assets.map((asset: any) => {
                    const AssetIcon = getAssetIcon(asset.type);
                    return (
                      <a
                        key={asset.id}
                        href={asset.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-white/[0.03] hover:bg-white/[0.06] border border-transparent hover:border-white/10 rounded-xl transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <AssetIcon className="w-4 h-4 text-violet-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-white truncate group-hover:text-violet-300 transition-colors">{asset.title}</p>
                          {asset.subtitle && (
                            <p className="text-[10px] text-slate-500 truncate mt-0.5">{asset.subtitle}</p>
                          )}
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors shrink-0" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* QR Code */}
            {product.qrCodeUrl && (
              <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#0F172A] to-slate-900/80 rounded-2xl p-5 border border-white/10 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Smartphone className="w-4 h-4 text-blue-400" />
                  <h3 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Quick Access</h3>
                </div>
                <div className="bg-white/5 p-3 rounded-xl w-full max-w-[160px] mx-auto border border-white/10">
                  <div className="relative w-full aspect-square"><Image src={product.qrCodeUrl} alt="QR Code" fill className="rounded-lg object-contain" sizes="160px" /></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-3 font-medium">Scan to visit</p>
              </motion.div>
            )}

            {/* Product Details */}
            <motion.div variants={fadeUp} className="bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl p-5 border border-white/5">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-xs text-slate-400">Released</span>
                  <span className="text-xs font-semibold text-white font-mono bg-white/5 px-2 py-0.5 rounded">
                    {product.releaseDate ? new Date(product.releaseDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '—'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-xs text-slate-400">Team</span>
                  <span className="text-xs font-semibold text-emerald-400">{product.leadTeam || 'GTSS'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-xs text-slate-400">Category</span>
                  <span className="text-xs font-semibold text-slate-300">{product.category}</span>
                </div>
                {product.pricingModel && (
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-xs text-slate-400">Model</span>
                    <span className="text-xs font-semibold text-slate-300 capitalize">{product.pricingModel}</span>
                  </div>
                )}
                {product.websiteUrl && (
                  <div className="pt-3">
                    <a
                      href={product.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-all border border-white/5 hover:border-white/10"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════ LIGHTBOX ═══════════════════ */}
      <AnimatePresence>
        {lightboxOpen && product.images && product.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + product.images.length) % product.images.length); }}
                  className="absolute left-3 md:left-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % product.images.length); }}
                  className="absolute right-3 md:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </>
            )}
            
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={product.images[lightboxIndex]}
              alt={`Screenshot ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {product.images.map((_: string, i: number) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${i === lightboxIndex ? 'bg-white w-4' : 'bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
