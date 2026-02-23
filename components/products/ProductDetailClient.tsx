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
  Activity
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
            <div className="text-center bg-[#0F172A] p-12 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <h2 className="text-2xl font-black text-white mb-4">System Not Found</h2>
                <Link href="/products" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">Abort & Return</Link>
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
          bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(52,211,153,0.3)]',
          dot: 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]',
          label: 'Live'
        };
      case 'beta':
        return {
          bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.3)]',
          dot: 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]',
          label: 'Beta'
        };
      case 'deprecated':
        return {
          bg: 'bg-red-500/10 text-red-500 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)]',
          dot: 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]',
          label: 'Deprecated'
        };
      default:
        return {
          bg: 'bg-slate-500/10 text-slate-400 border-slate-500/30 text-white',
          dot: 'bg-slate-400',
          label: 'Draft'
        };
    }
  };

  const statusStyle = getStatusStyles(product.status || 'draft');

  // Match the super cool gradients from Card redesign
  const gradients = [
    'from-blue-600 via-indigo-600 to-purple-600',
    'from-emerald-500 via-teal-500 to-cyan-600',
    'from-orange-500 via-rose-500 to-pink-600',
    'from-fuchsia-600 via-purple-600 to-blue-600',
    'from-cyan-500 via-blue-500 to-indigo-600',
  ];
  const gradientIndex = (product.name?.charCodeAt(0) || 0) % gradients.length;
  const gradientClass = gradients[gradientIndex];

  // Upgraded Markdown components (Terminal/Hacker style)
  const markdownComponents = {
    h1: ({ children }: any) => <h1 className="text-2xl md:text-3xl font-black text-white mt-8 mb-4 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-xl md:text-2xl font-black text-white mt-8 mb-4 border-b border-white/10 pb-2">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-lg md:text-xl font-bold text-slate-200 mt-6 mb-3">{children}</h3>,
    p: ({ children }: any) => <p className="text-base text-slate-400 mb-4 leading-relaxed font-medium">{children}</p>,
    a: ({ href, children }: any) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 border-b border-blue-500/30 hover:border-blue-400 transition-colors font-bold">{children}</a>,
    ul: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-base text-slate-400 font-medium marker:text-blue-500">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-base text-slate-400 font-medium marker:text-emerald-500">{children}</ol>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
    code: ({ inline, children }: any) => inline 
      ? <code className="px-2 py-1 bg-[#020617] border border-white/10 rounded-md text-sm font-mono text-emerald-400">{children}</code>
      : <div className="rounded-2xl overflow-hidden bg-[#020617] border border-white/5 shadow-2xl p-6 mb-8 relative group">
          <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
          </div>
          <code className="text-sm font-mono text-slate-300 block overflow-x-auto selection:bg-blue-500/30">{children}</code>
        </div>,
    pre: ({ children }: any) => <pre className="not-prose">{children}</pre>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-6 text-base text-slate-300 italic bg-gradient-to-r from-emerald-500/10 to-transparent rounded-r-xl">{children}</blockquote>,
    img: ({ src, alt }: any) => <img src={src} alt={alt} className="rounded-2xl w-full h-auto my-8 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />,
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 70 } }
  } as const;

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
      className="pb-24"
    >
      {/* Dynamic Immersive Header */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-10 -mt-4 sm:-mt-6 lg:-mt-10 mb-10 pt-16 md:pt-32 pb-24 md:pb-48 overflow-hidden bg-[#0F172A]">
         {/* Deep space background layers */}
         <div className="absolute inset-0 z-0">
           <div className={`absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br ${gradientClass} rounded-full blur-[150px] opacity-30 mix-blend-screen -translate-y-1/2 -z-10 animate-[spin_30s_linear_infinite]`} />
           <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen translate-y-1/3 -z-10" />
           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
           
           {/* Futuristic Tech Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)] opacity-40 pointer-events-none" />
         </div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Nav & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 md:mb-20">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all text-sm font-bold group w-fit"
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:-translate-x-1 transition-all">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                Return to Directory
              </Link>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  {copied ? "Link Copied" : "Share"}
                </button>
                {isAuthenticated && (
                  <Link
                     href={`/dashboard/products/${product.id}/edit`}
                     className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0F172A] hover:bg-slate-200 rounded-xl text-sm font-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
                  >
                     <span className="hidden sm:inline">Modify System</span>
                     <span className="sm:hidden">Edit</span>
                     <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Hero Main Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start text-center lg:text-left">
               {/* 3D App Icon */}
               <motion.div 
                 variants={itemAnimation}
                 className="relative shrink-0 perspective-[1000px] group"
               >
                  <div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-3xl md:rounded-[3rem] bg-gradient-to-br ${gradientClass} p-0.5 md:p-1 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transform-gpu transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105`}>
                     <div className="absolute inset-0 bg-white/20 blur-xl rounded-full mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                     <div className="w-full h-full bg-[#0F172A] rounded-[1.4rem] sm:rounded-[1.9rem] md:rounded-[2.9rem] flex items-center justify-center overflow-hidden relative">
                       {/* Glass reflection */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                       
                       {product.logoUrl ? (
                         <img src={product.logoUrl} alt={product.name} className="w-full h-full object-cover" />
                       ) : (
                         <ProductIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                       )}
                     </div>
                  </div>
                  {/* Neon Status Badge */}
                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-1/2 px-4 py-1.5 rounded-full border backdrop-blur-xl ${statusStyle.bg}`}>
                     <div className="flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full ${statusStyle.dot} animate-pulse`} />
                       <span className="text-xs font-black uppercase tracking-[0.2em]">{statusStyle.label}</span>
                     </div>
                  </div>
               </motion.div>

               <div className="flex-1 space-y-6 max-w-3xl">
                  <motion.div variants={itemAnimation} className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                     <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs md:text-sm font-bold tracking-wider uppercase backdrop-blur-md">
                        {product.category}
                     </div>
                     <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-xs md:text-sm font-mono backdrop-blur-md">
                        ID: {product.productId}
                     </div>
                     {product.version && (
                       <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400 text-xs md:text-sm font-black tracking-widest uppercase backdrop-blur-md">
                          v{product.version}
                       </div>
                     )}
                  </motion.div>

                  <motion.h1 
                    variants={itemAnimation}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight leading-[1.1]"
                  >
                    {product.name}
                  </motion.h1>
                  
                  {product.tagline && (
                     <motion.p variants={itemAnimation} className="text-base md:text-xl lg:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {product.tagline}
                     </motion.p>
                  )}
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-24 md:-mt-32 relative z-20">
        
        {/* HUD Matrix Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-16">
           {[
             { label: 'Access Tier', value: product.pricingModel === 'free' ? 'OPEN' : product.pricing, icon: Activity, color: 'text-emerald-400', glow: 'shadow-[0_0_20px_rgba(52,211,153,0.1)]' },
             { label: 'Network Value', value: product.activeUsers || 'System Core', icon: Users, color: 'text-blue-400', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.1)]' },
             { label: 'Core Integrity', value: product.uptime || '99.99%', icon: Shield, color: 'text-purple-400', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.1)]' },
             { label: 'Valuation', value: product.priceUSD ? `$${product.priceUSD}` : (product.priceKES ? `KES ${product.priceKES}` : 'Bespoke'), icon: Database, color: 'text-amber-400', glow: 'shadow-[0_0_20px_rgba(251,191,36,0.1)]' },
           ].map((stat, i) => (
             <motion.div 
                key={i} 
                variants={itemAnimation}
                className={`bg-[#0F172A]/80 backdrop-blur-2xl rounded-2xl p-4 md:p-6 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
             >
                {/* Tech scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[150%] -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                     <div className={`p-2 rounded-xl bg-white/5 ${stat.color} bg-opacity-10`}>
                       <stat.icon className={`w-5 h-5`} />
                     </div>
                     <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                  <div className="text-xl md:text-3xl font-black text-white tracking-tight truncate drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                     {stat.value}
                  </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Dual Pricing HUD */}
        {product.priceUSD && product.priceKES && (
          <motion.div 
            variants={itemAnimation}
            className="mb-10 lg:mb-16 relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 border border-white/10"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-10 mix-blend-screen pointer-events-none`} />
            <div className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-around gap-8 text-center">
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Global Access</p>
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl font-bold text-emerald-500 mt-1">$</span>
                  <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter">{product.priceUSD}</span>
                </div>
              </div>
              <div className="w-full h-px md:w-px md:h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Local Access</p>
                <div className="flex items-start justify-center gap-2">
                  <span className="text-xl font-bold text-blue-500 mt-2">KES</span>
                  <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter">{product.priceKES.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
           {/* MAIN CONTENT TERMINAL */}
           <div className="lg:col-span-2 space-y-8 lg:space-y-12">
              
              {/* Architecture Overview */}
              <motion.section variants={itemAnimation} className="relative bg-[#0F172A]/80 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 border border-white/5 shadow-2xl overflow-hidden">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 ring-1 ring-blue-500/30">
                       <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h2 className="text-xl md:text-4xl font-black text-white tracking-tight">System Architecture</h2>
                 </div> 
                 <div className="prose prose-slate prose-invert max-w-none prose-lg">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                       {product.description || "System data unavailable."}
                    </ReactMarkdown>
                 </div>
              </motion.section>

               {/* Instruction Manual */}
               {product.instructions && (
                  <motion.section variants={itemAnimation} className="relative bg-[#0F172A]/80 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 border border-white/5 shadow-2xl">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-400 ring-1 ring-emerald-500/30">
                           <Package className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <h2 className="text-xl md:text-4xl font-black text-white tracking-tight">Deployment Guide</h2>
                     </div>
                     <div className="prose prose-slate prose-invert max-w-none prose-lg">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                           {product.instructions}
                        </ReactMarkdown>
                     </div>
                  </motion.section>
               )}

               {/* Features Component Layer */}
               {((product.features && product.features.length > 0) || product.featuresMarkdown) && (
                  <FeaturesSection
                    features={product.features || []}
                    productName={product.name}
                    initialCount={6}
                    markdownContent={product.featuresMarkdown}
                  />
               )}

               {/* System Data */}
               {product.images && product.images.length > 0 && (
                  <motion.section variants={itemAnimation} className="space-y-6 md:space-y-8">
                     <h2 className="text-2xl md:text-3xl font-black text-white px-2 flex items-center gap-3">
                       <Film className="w-6 h-6 text-slate-400" />
                       Visual Data
                     </h2>
                     <div className="grid grid-cols-1 gap-6 md:gap-8">
                        {product.images.map((img: string, idx: number) => (
                           <div key={idx} className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group">
                              <img src={img} alt={`Interface capture ${idx+1}`} className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" />
                           </div>
                        ))}
                     </div>
                  </motion.section>
               )}
           </div>

           {/* SIDEBAR CONSOLE */}
           <div className="space-y-6 md:space-y-8">
              {/* Media Interface */}
              {product.demoVideoUrl && (
                 <motion.div variants={itemAnimation} className="bg-[#0F172A]/80 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                       <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          Live Interface
                       </h3>
                    </div>
                    <div className="aspect-video bg-[#020617] relative flex items-center justify-center">
                         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none z-10" />
                         <iframe
                              width="100%"
                              height="100%"
                              src={product.demoVideoUrl.replace("watch?v=", "embed/")}
                              title={`${product.name} Output`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 z-20"
                         />
                    </div>
                 </motion.div>
              )}

              {/* Data Export (Resources) */}
              {product.assets && product.assets.length > 0 && (
                 <motion.div variants={itemAnimation} className="bg-[#0F172A]/80 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                       <Download className="w-5 h-5 text-purple-400" />
                       <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">Data Exports</h3>
                    </div>
                    <div className="space-y-3">
                       {product.assets.map((asset: any) => {
                          const AssetIcon = getAssetIcon(asset.type);
                          return (
                             <a 
                                key={asset.id} 
                                href={asset.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-2xl transition-all group"
                             >
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
                                   <AssetIcon className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                   <p className="text-sm font-bold text-white truncate group-hover:text-purple-300 transition-colors">{asset.title}</p>
                                   {asset.subtitle && (
                                      <p className="text-xs text-slate-400 font-medium truncate mt-1">{asset.subtitle}</p>
                                   )}
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors shrink-0 -rotate-45" />
                             </a>
                          );
                       })}
                    </div>
                 </motion.div>
              )}

              {/* Secure Handshake (QR) */}
              {product.qrCodeUrl && (
                 <motion.div variants={itemAnimation} className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-[2.5rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientClass} opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-40 transition-opacity duration-700`} />
                    
                    <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-6 relative z-10 flex items-center gap-3">
                       <Smartphone className="w-5 h-5 text-blue-400" />
                       Secure Uplink
                    </h3>
                    <div className="bg-white/5 p-4 rounded-2xl w-full max-w-[200px] mx-auto border border-white/10 relative z-10 backdrop-blur-xl">
                       <img src={product.qrCodeUrl} alt="Quick Access" className="w-full h-auto rounded-xl" />
                    </div>
                    <p className="text-center text-xs font-bold text-slate-400 tracking-wider mt-6 relative z-10 flex items-center justify-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                       SCAN PROTOCOL ACTIVE
                    </p>
                 </motion.div>
              )}

              {/* System Meta Panel */}
              <motion.div variants={itemAnimation} className="bg-[#0F172A]/80 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
                 <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-6">System Telemetry</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                       <span className="text-sm font-medium text-slate-400">Build Date</span>
                       <span className="text-sm font-bold text-white font-mono border border-white/10 px-2 py-1 rounded-md bg-white/5">
                          {product.releaseDate ? new Date(product.releaseDate).toLocaleDateString() : 'N/A'}
                       </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                       <span className="text-sm font-medium text-slate-400">Assigned Node</span>
                       <span className="text-sm font-bold text-emerald-400">{product.leadTeam || 'GTSS Core'}</span>
                    </div>
                    {product.websiteUrl && (
                       <div className="pt-4">
                          <Link 
                             href={product.websiteUrl} 
                             target="_blank"
                             className="group flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-white text-slate-300 hover:text-[#0F172A] rounded-xl text-sm font-black tracking-wider transition-all"
                          >
                             <Globe className="w-5 h-5 group-hover:animate-[spin_2s_linear_infinite]" />
                             INITIATE CONNECTION
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
