"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
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
  MessageSquare,
  Calendar,
  Users,
  BarChart,
  Clock,
  Share2,
  Star,
  ChevronRight,
  Layers,
  Database,
  Phone,
  Check,
  Globe,
  Server,
  Smartphone,
  Cloud,
  Download,
  FileText,
  Film,
  Presentation,
  Quote,
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
  // Use initialProduct if provided (from the new page structure), fallback to serverProduct
  const product = initialProduct || serverProduct;
  
  const [copied, setCopied] = useState(false);
  const ProductIcon = getIcon(product?.icon || "box");

  if (!product) {
    return (
        <div className="flex h-[50vh] items-center justify-center">
            <div className="text-center">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Product not found</h2>
                <Link href="/dashboard/products" className="text-blue-500 hover:underline mt-2 inline-block">Return to products</Link>
            </div>
        </div>
    )
  }

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
    switch (status?.toLowerCase()) {
      case 'live':
        return {
          bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
          dot: 'bg-emerald-500',
          label: 'Live'
        };
      case 'beta':
        return {
          bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
          dot: 'bg-purple-500',
          label: 'Beta'
        };
      case 'deprecated':
        return {
          bg: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
          dot: 'bg-red-500',
          label: 'Deprecated'
        };
      default:
        return {
          bg: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
          dot: 'bg-slate-500',
          label: 'Draft'
        };
    }
  };

  const statusStyle = getStatusStyles(product.status || 'draft');

  // Generate a consistent gradient based on name (matching ProductCard)
  const gradients = [
    'from-blue-600 to-violet-700',
    'from-emerald-500 to-cyan-600',
    'from-orange-500 to-rose-600',
    'from-pink-600 to-purple-700',
    'from-indigo-500 to-cyan-500',
  ];
  const gradientIndex = (product.name?.charCodeAt(0) || 0) % gradients.length;
  const gradientClass = gradients[gradientIndex];

  // Markdown components
  const markdownComponents = {
    h1: ({ children }: any) => <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-6 md:mt-8 mb-3 md:mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-5 md:mt-6 mb-2 md:mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white mt-4 md:mt-5 mb-2">{children}</h3>,
    p: ({ children }: any) => <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-3 md:mb-4 leading-relaxed">{children}</p>,
    a: ({ href, children }: any) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{children}</a>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1.5 md:space-y-2 mb-3 md:mb-4 text-sm md:text-base text-slate-600 dark:text-slate-300">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-1.5 md:space-y-2 mb-3 md:mb-4 text-sm md:text-base text-slate-600 dark:text-slate-300">{children}</ol>,
    li: ({ children }: any) => <li className="pl-1 md:pl-2">{children}</li>,
    code: ({ inline, children }: any) => inline 
      ? <code className="px-1 md:px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs md:text-sm font-mono text-slate-800 dark:text-slate-200">{children}</code>
      : <div className="rounded-xl overflow-hidden bg-slate-900 dark:bg-slate-950 p-3 md:p-4 mb-4 md:mb-6"><code className="text-xs md:text-sm font-mono text-slate-200 block overflow-x-auto">{children}</code></div>,
    pre: ({ children }: any) => <pre className="not-prose">{children}</pre>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-blue-500 pl-3 md:pl-4 py-1 my-4 md:my-6 text-sm md:text-base text-slate-700 dark:text-slate-300 italic bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">{children}</blockquote>,
    img: ({ src, alt }: any) => <img src={src} alt={alt} className="rounded-xl w-full h-auto my-4 md:my-6 shadow-md border border-slate-200 dark:border-slate-700" />,
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const getAssetIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'pdf': return FileText;
      case 'video': return Film;
      case 'slides': return Presentation;
      default: return Download;
    }
  };

  return (
    <motion.div 
      variants={containerAnimation}
      initial="hidden"
      animate="show"
      className="pb-16 md:pb-24"
    >
      {/* Dynamic Header Background */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-10 -mt-4 sm:-mt-6 lg:-mt-10 mb-6 md:mb-10 pt-20 md:pt-24 lg:pt-32 pb-24 md:pb-32 lg:pb-40 overflow-hidden bg-slate-900">
         {/* Background Gradients */}
         <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-20`} />
         <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
         <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-black/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
         
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)]" />

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Breadcrumb & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-8 md:mb-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs md:text-sm font-medium group w-fit"
              >
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                Back to Products
              </Link>

              <div className="flex items-center gap-2 md:gap-3 self-end sm:self-auto">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs md:text-sm font-medium text-white transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                  {copied ? "Copied" : "Share"}
                </button>
                {isAuthenticated && (
                  <Link
                     href={`/dashboard/products/${product.id}/edit`}
                     className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white text-slate-900 hover:bg-slate-100 rounded-lg text-xs md:text-sm font-bold shadow-lg shadow-black/10 transition-all"
                  >
                     <span className="hidden sm:inline">Edit Product</span>
                     <span className="sm:hidden">Edit</span>
                     <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
               {/* Logo */}
               <motion.div 
                 variants={itemAnimation}
                 className="relative shrink-0 mx-auto md:mx-0"
               >
                  <div className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl md:rounded-3xl bg-gradient-to-br ${gradientClass} p-0.5 md:p-1 shadow-2xl shadow-black/30`}>
                     <div className="w-full h-full bg-slate-900 rounded-[0.9rem] md:rounded-[1.3rem] flex items-center justify-center overflow-hidden">
                       {product.logoUrl ? (
                         <img src={product.logoUrl} alt={product.name} className="w-full h-full object-cover" />
                       ) : (
                         <ProductIcon className="w-10 h-10 md:w-16 md:h-16 text-white" />
                       )}
                     </div>
                  </div>
                  {/* Floating Status Badge */}
                  <div className={`absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-white/10 shadow-lg backdrop-blur-md ${statusStyle.bg}`}>
                     <div className="flex items-center gap-1.5">
                       <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot} animate-pulse`} />
                       <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{statusStyle.label}</span>
                     </div>
                  </div>
               </motion.div>

               <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                  <motion.h1 
                    variants={itemAnimation}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight"
                  >
                    {product.name}
                  </motion.h1>
                  
                  <motion.div variants={itemAnimation} className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
                     <div className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs md:text-sm font-medium backdrop-blur-sm">
                        <Tag className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-70" />
                        {product.category}
                     </div>
                     <div className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs md:text-sm font-mono backdrop-blur-sm">
                        <QrCode className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-70" />
                        {product.productId}
                     </div>
                     {product.version && (
                       <div className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs md:text-sm font-medium backdrop-blur-sm">
                          <Layers className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-70" />
                          v{product.version}
                       </div>
                     )}
                  </motion.div>

                  {product.tagline && (
                     <motion.p variants={itemAnimation} className="text-base md:text-lg lg:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed mx-auto md:mx-0">
                        {product.tagline}
                     </motion.p>
                  )}
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-16 md:-mt-20 relative z-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
           {[
             { label: 'Pricing Model', value: product.pricing, icon: DollarSign, color: 'text-emerald-500' },
             { label: 'Active Users', value: product.activeUsers || 'N/A', icon: Users, color: 'text-blue-500' },
             { label: 'Uptime', value: product.uptime || '99.9%', icon: Zap, color: 'text-amber-500' },
             { label: 'Price', value: product.priceUSD ? `$${product.priceUSD}` : (product.priceKES ? `KES ${product.priceKES}` : 'Custom'), icon: Tag, color: 'text-purple-500' },
           ].map((stat, i) => (
             <motion.div 
                key={i} 
                variants={itemAnimation}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
             >
                <div className="flex items-start justify-between mb-2 md:mb-3">
                   <div className="text-[10px] md:text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
                   <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                </div>
                <div className="text-base md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white truncate">
                   {stat.value}
                </div>
             </motion.div>
           ))}
        </div>

        {/* Dual Pricing Display */}
        {product.priceUSD && product.priceKES && (
          <motion.div 
            variants={itemAnimation}
            className="mb-8 md:mb-10 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="text-center">
                <p className="text-[10px] md:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">USD Price</p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-black text-emerald-600 dark:text-emerald-400">${product.priceUSD}</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-300 dark:bg-slate-600" />
              <div className="text-center">
                <p className="text-[10px] md:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">KES Price</p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 dark:text-blue-400">KES {product.priceKES.toLocaleString()}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
           {/* Main Content Column */}
           <div className="lg:col-span-2 space-y-6 md:space-y-10">
              
              {/* Description */}
              <motion.section variants={itemAnimation} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                 <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="p-1.5 md:p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                       <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">Overview</h2>
                 </div> 
                 <div className="prose prose-slate dark:prose-invert max-w-none prose-sm md:prose-base">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                       {product.description || "No description provided."}
                    </ReactMarkdown>
                 </div>
              </motion.section>

               {/* Instructions */}
               {product.instructions && (
                  <motion.section variants={itemAnimation} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                     <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="p-1.5 md:p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                           <Package className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">Getting Started</h2>
                     </div>
                     <div className="prose prose-slate dark:prose-invert max-w-none prose-sm md:prose-base">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                           {product.instructions}
                        </ReactMarkdown>
                     </div>
                  </motion.section>
               )}

               {/* Features Section - Using new scalable component */}
               {product.features && product.features.length > 0 && (
                  <FeaturesSection
                    features={product.features}
                    productName={product.name}
                    initialCount={6}
                  />
               )}

              {/* Health Metrics */}
              {product.health && product.health.length > 0 && (
                 <motion.section variants={itemAnimation} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                       <div className="p-1.5 md:p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                          <BarChart className="w-5 h-5 md:w-6 md:h-6" />
                       </div>
                       <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">Performance Metrics</h2>
                    </div>
                    <div className="space-y-4 md:space-y-5">
                       {product.health.map((metric: any) => (
                          <div key={metric.id}>
                             <div className="flex items-center justify-between mb-1.5 md:mb-2">
                                <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">{metric.label}</span>
                                <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">{metric.value}</span>
                             </div>
                             <div className="w-full h-2 md:h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <motion.div 
                                   initial={{ width: 0 }}
                                   animate={{ width: `${metric.percentage}%` }}
                                   transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                   className={`h-full rounded-full ${metric.color || 'bg-blue-500'}`}
                                />
                             </div>
                          </div>
                       ))}
                    </div>
                 </motion.section>
              )}

              {/* Reviews Section */}
              {product.reviews && product.reviews.length > 0 && (
                 <motion.section variants={itemAnimation} className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-2 md:gap-3 px-1 md:px-2">
                       <Star className="w-5 h-5 md:w-6 md:h-6 text-amber-500 fill-amber-500" />
                       <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">Customer Reviews</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:gap-5">
                       {product.reviews.map((review: any) => (
                          <div key={review.id} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm relative overflow-hidden">
                             <Quote className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 text-slate-200 dark:text-slate-700" />
                             <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4 relative z-10">
                                {review.authorAvatar ? (
                                   <img src={review.authorAvatar} alt={review.authorName} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
                                ) : (
                                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm md:text-base">
                                      {review.authorName?.charAt(0)?.toUpperCase() || 'A'}
                                   </div>
                                )}
                                <div className="flex-1">
                                   <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white">{review.authorName}</h4>
                                   {review.authorRole && (
                                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{review.authorRole}</p>
                                   )}
                                </div>
                                <div className="flex items-center gap-0.5">
                                   {Array.from({ length: 5 }).map((_, i) => (
                                      <Star 
                                         key={i} 
                                         className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < (review.rating || 5) ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}`} 
                                      />
                                   ))}
                                </div>
                             </div>
                             <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">{review.content}</p>
                          </div>
                       ))}
                    </div>
                 </motion.section>
              )}

              {/* Screenshots */}
              {product.images && product.images.length > 0 && (
                 <motion.section variants={itemAnimation} className="space-y-4 md:space-y-6">
                    <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white px-1 md:px-2">Gallery</h2>
                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                       {product.images.map((img: string, idx: number) => (
                          <div key={idx} className="rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                             <img src={img} alt={`Screenshot ${idx+1}`} className="w-full h-auto" />
                          </div>
                       ))}
                    </div>
                 </motion.section>
              )}
           </div>

           {/* Sidebar Column */}
           <div className="space-y-5 md:space-y-8">
              {/* Demo Video */}
              {product.demoVideoUrl && (
                 <motion.div variants={itemAnimation} className="bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-800">
                    <div className="p-4 md:p-6 border-b border-slate-800">
                       <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                          <Video className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                          Product Demo
                       </h3>
                    </div>
                    <div className="aspect-video bg-black relative">
                         <iframe
                              width="100%"
                              height="100%"
                              src={product.demoVideoUrl.replace("watch?v=", "embed/")}
                              title={`${product.name} Demo`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0"
                         />
                    </div>
                 </motion.div>
              )}

              {/* Downloadable Assets */}
              {product.assets && product.assets.length > 0 && (
                 <motion.div variants={itemAnimation} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                    <div className="flex items-center gap-2 md:gap-3 mb-4">
                       <Download className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                       <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">Resources</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                       {product.assets.map((asset: any) => {
                          const AssetIcon = getAssetIcon(asset.type);
                          return (
                             <a 
                                key={asset.id} 
                                href={asset.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 md:p-4 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-xl transition-colors group"
                             >
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                                   <AssetIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                   <p className="text-sm md:text-base font-medium text-slate-900 dark:text-white truncate">{asset.title}</p>
                                   {asset.subtitle && (
                                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 truncate">{asset.subtitle}</p>
                                   )}
                                </div>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-colors shrink-0" />
                             </a>
                          );
                       })}
                    </div>
                 </motion.div>
              )}

              {/* Technical Architecture */}
              {product.technicalArchitecture && (
                 <motion.div variants={itemAnimation} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                       <Layers className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
                       <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">Tech Stack</h3>
                    </div>
                    <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
                       <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {product.technicalArchitecture}
                       </ReactMarkdown>
                    </div>
                 </motion.div>
              )}

              {/* QR Code */}
              {product.qrCodeUrl && (
                 <motion.div variants={itemAnimation} className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl md:rounded-3xl p-4 md:p-6 text-white shadow-lg overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    
                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 relative z-10 flex items-center gap-2">
                       <QrCode className="w-4 h-4 md:w-5 md:h-5" />
                       Quick Mobile Access
                    </h3>
                    <div className="bg-white p-2 md:p-3 rounded-xl w-full max-w-[140px] md:max-w-[180px] mx-auto shadow-xl relative z-10">
                       <img src={product.qrCodeUrl} alt="QR Code" className="w-full h-auto rounded-lg" />
                    </div>
                    <p className="text-center text-xs md:text-sm font-medium text-white/90 mt-3 md:mt-4 relative z-10">
                       Scan to view on mobile
                    </p>
                 </motion.div>
              )}

              {/* Meta Info */}
              <motion.div variants={itemAnimation} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                 <h3 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 md:mb-4">Details</h3>
                 <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center py-1.5 md:py-2 border-b border-slate-100 dark:border-slate-700 last:border-0">
                       <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Release Date</span>
                       <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">
                          {product.releaseDate ? new Date(product.releaseDate).toLocaleDateString() : 'Not set'}
                       </span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 md:py-2 border-b border-slate-100 dark:border-slate-700 last:border-0">
                       <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Lead Team</span>
                       <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">{product.leadTeam || 'GTSS Core'}</span>
                    </div>
                    {product.websiteUrl && (
                       <div className="pt-1 md:pt-2">
                          <Link 
                             href={product.websiteUrl} 
                             target="_blank"
                             className="flex items-center justify-center gap-2 w-full py-2 md:py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-white rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-colors"
                          >
                             <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
                             Visit Website
                          </Link>
                       </div>
                    )}
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
