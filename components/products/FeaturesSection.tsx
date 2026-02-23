'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, FileText, Cpu } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ExpandableFeatureCard } from './ExpandableFeatureCard';
import { FeaturesModal } from './FeaturesModal';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
  priority?: number;
}

interface FeaturesSectionProps {
  features: Feature[];
  productName?: string;
  initialCount?: number;
  markdownContent?: string;
}

export function FeaturesSection({
  features,
  productName,
  initialCount = 6,
  markdownContent,
}: FeaturesSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Futuristic Tech Markdown for Features
  const markdownComponents = {
    h1: ({ children }: any) => <h1 className="text-2xl font-black text-white mt-6 mb-4 pb-2 border-b border-white/10 uppercase tracking-widest">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-xl font-bold text-white mt-5 mb-3 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500" />{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-lg font-bold text-slate-200 mt-4 mb-2">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-base font-bold text-slate-400 mt-3 mb-2">{children}</h4>,
    p: ({ children }: any) => <p className="text-base text-slate-400 mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }: any) => <ul className="list-none space-y-2 mb-6 text-base text-slate-400 ml-0">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-sm text-slate-400 font-mono">{children}</ol>,
    li: ({ children }: any) => (
      <li className="flex items-start gap-3">
        <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-1 opacity-50" />
        <span className="leading-relaxed">{children}</span>
      </li>
    ),
    strong: ({ children }: any) => <strong className="font-black text-white">{children}</strong>,
    code: ({ inline, children }: any) => inline 
      ? <code className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-cyan-400">{children}</code>
      : <div className="rounded-xl overflow-hidden bg-[#020617] border border-white/10 p-4 mb-6 shadow-xl"><code className="text-xs font-mono text-slate-300 block overflow-x-auto">{children}</code></div>,
    blockquote: ({ children }: any) => <blockquote className="border-l-2 border-purple-500 pl-6 py-2 my-6 text-slate-300 italic bg-purple-500/5 backdrop-blur-sm rounded-r-xl">{children}</blockquote>,
  };

  if (markdownContent && markdownContent.trim()) {
    return (
      <>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 ring-1 ring-fuchsia-500/30">
                <Cpu className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h2 className="text-xl md:text-4xl font-black text-white tracking-tight">System Modules</h2>
                <div className="flex items-center gap-2 mt-1 hidden sm:flex">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">Detailed Spec Readout</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all font-bold text-xs sm:text-sm text-slate-300 hover:text-white"
            >
              <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative z-10 flex items-center gap-2">
                 <span>Expand Logs</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-blue-400 transition-all" />
              </div>
            </button>
          </div>

          {/* Holographic Panel Preview */}
          <div className="relative group bg-[#0F172A]/90 backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
            
            <div className="relative z-10 prose prose-slate prose-invert max-w-none line-clamp-[12] md:line-clamp-[20] pb-24 md:pb-28">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {markdownContent}
              </ReactMarkdown>
            </div>
            
            {/* Futuristic Fade out gradient replacing standard button */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent pointer-events-none flex items-end justify-center pb-8 border-b-2 border-transparent group-hover:border-blue-500 transition-colors duration-700">
               <button
                 onClick={() => setIsModalOpen(true)}
                 className="pointer-events-auto w-[90%] sm:w-auto px-6 sm:px-8 py-3 bg-[#020617] text-blue-400 border border-blue-500/30 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3 group/btn"
               >
                 <span>Decrypt Remaining Blocks</span>
                 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </motion.section>

        <FeaturesModal
          features={[]}
          markdownContent={markdownContent}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productName={productName}
        />
      </>
    );
  }

  // Original Feature Cards Implementation (Untouched visually unless requested, as markdown is main path)
  const sortedFeatures = [...features].sort((a, b) => (a.priority || 100) - (b.priority || 100));
  const visibleFeatures = sortedFeatures.slice(0, initialCount);
  const hasMoreFeatures = features.length > initialCount;
  const remainingCount = features.length - initialCount;

  if (features.length === 0) return null;

  return (
    <>
      <motion.section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
               <Cpu className="w-6 h-6 md:w-8 md:h-8" />
             </div>
             <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">System Modules</h2>
          </div>
          {hasMoreFeatures && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex items-center gap-2 group text-blue-400 hover:text-blue-300 font-bold tracking-widest uppercase text-xs"
            >
              Analyze All ({features.length})
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleFeatures.map((feature, index) => (
            <ExpandableFeatureCard
              key={feature.id}
              icon={feature.icon}
              iconColor={feature.iconColor}
              title={feature.title}
              description={feature.description}
              index={index}
              defaultExpanded={index < 2}
            />
          ))}
        </div>

        {hasMoreFeatures && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-slate-300 hover:text-white font-bold transition-all flex items-center justify-center gap-3"
          >
            Access {remainingCount} Hidden Modules
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </motion.section>

      <FeaturesModal
        features={sortedFeatures}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
      />
    </>
  );
}
