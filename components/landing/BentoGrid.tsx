"use client";

import { ArrowUpRight, Database, Globe, Layers, Shield, Zap } from "lucide-react";
import Image from "next/image";

const bentoItems = [
  {
    id: "jit",
    title: "JustInTime",
    subtitle: "Community Matrix",
    description: "The primary engine for decentralized community service access. Connecting local talent with institutional demand in real-time.",
    icon: Globe,
    size: "lg",
    image: "/images/gtss_bento.png",
    color: "var(--gold)",
  },
  {
    id: "rm",
    title: "Restaurant Manager",
    subtitle: "Offline Command",
    description: "High-performance POS systems that never sleep. Built for the chaos of high-volume hospitality floors.",
    icon: Zap,
    size: "md",
    image: "/images/gtss_bento.png",
    color: "var(--cyan)",
  },
  {
    id: "ec",
    title: "E-commerce Matrix",
    subtitle: "Multi-Vendor Core",
    description: "Enterprise-grade digital storefronts designed for African commerce dynamics.",
    icon: Layers,
    size: "sm",
    color: "var(--gold)",
  },
  {
    id: "offline",
    title: "Offline First",
    subtitle: "Resilience Engine",
    description: "Our proprietary architecture ensuring 100% operational continuity during network outages.",
    icon: Database,
    size: "md",
    color: "var(--cyan)",
  },
  {
    id: "church",
    title: "Ecclesia Cloud",
    subtitle: "Faith Management",
    description: "Streamlined administration and financial tracking for modern religious institutions.",
    icon: Shield,
    size: "sm",
    color: "var(--gold)",
  },
];

export function BentoGrid() {
  return (
    <section className="bento relative z-10 px-6 lg:px-20 py-20 bg-[rgba(3,5,8,0.3)]">
      <div className="bento-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-4 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
            PRODUCT_ECOSYSTEM_V4
          </div>
          <h2 className="section-title font-bebas text-5xl lg:text-7xl text-[var(--text)] leading-none tracking-[0.02em]">
            SYSTEM <span className="text-[var(--gold)]">ARCHITECTURE</span><br/>
            OF THE FUTURE.
          </h2>
        </div>
        <p className="section-desc font-cormorant text-lg font-light text-[var(--text-muted)] max-w-sm">
          A suite of precision-engineered software modules designed to dominate local market complexities.
        </p>
      </div>

      <div className="bento-grid grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 auto-rows-[220px]">
        {bentoItems.map((item) => (
          <div
            key={item.id}
            className={`bento-item group relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-md overflow-hidden transition-all hover:border-[var(--gold-dim)] hover:shadow-[0_0_30px_rgba(201,160,69,0.05)] ${
              item.size === "lg" ? "md:col-span-4 lg:col-span-4 row-span-2" : 
              item.size === "md" ? "md:col-span-2 lg:col-span-2 row-span-2" : 
              "md:col-span-2 lg:col-span-2 row-span-1"
            }`}
          >
            {item.image && (
              <div className="absolute inset-0 opacity-20 mix-blend-luminosity grayscale group-hover:opacity-40 transition-opacity">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-[var(--black)]/40 to-transparent"></div>
            
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div className="item-top flex justify-between items-start">
                <div 
                  className="item-icon-box w-10 h-10 border border-[var(--border)] flex items-center justify-center bg-[rgba(3,5,8,0.8)]"
                  style={{ color: item.color }}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-dim)] group-hover:text-[var(--gold)] transition-colors" />
              </div>

              <div className="item-bottom">
                <div className="item-subtitle font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold)] uppercase mb-2">
                  {item.subtitle}
                </div>
                <h3 className="item-title font-rajdhani text-2xl font-semibold tracking-tight text-[var(--text)] mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="item-desc font-cormorant text-[15px] font-light leading-relaxed text-[var(--text-muted)] line-clamp-2 group-hover:line-clamp-none transition-all">
                  {item.description}
                </p>
              </div>
            </div>
            
            <div className="item-corner absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-[1px] bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute top-0 right-0 w-[1px] h-full bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
