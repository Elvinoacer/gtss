import { ArrowUpRight, Database, Globe, Layers, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PublicProductListItem } from "@/lib/data/public-products";
import { getIcon } from "@/lib/icons";

interface BentoGridProps {
  products: PublicProductListItem[];
}

export function BentoGrid({ products }: BentoGridProps) {
  // Map database products to bento items
  const dbItems = products.map((product, index) => ({
    id: product.id,
    title: product.name,
    subtitle: product.tagline || product.category,
    description: product.description || "",
    icon: getIcon(product.icon),
    size: index === 0 ? "lg" : index === 1 ? "md" : "sm",
    image: product.images[0] || "/images/gtss_bento.png",
    color: product.iconColor || "var(--gold)",
    href: `/products/${product.id}`,
  }));

  // Add the "Offline First" feature as a static item if it's not in the DB
  const offlineFeature = {
    id: "offline",
    title: "Offline First",
    subtitle: "Resilience Engine",
    description: "Our proprietary architecture ensuring 100% operational continuity during network outages.",
    icon: Database,
    size: "md" as const,
    color: "var(--cyan)",
    href: "/features/offline-first",
    image: "/images/gtss_bento.png"
  };

  // Combine items, putting DB products first, then features
  const bentoItems = [...dbItems];
  
  // If we have fewer than 5 items, add the offline feature
  if (bentoItems.length < 6) {
    bentoItems.push(offlineFeature);
  }

  return (
    <section className="bento relative z-10 px-6 lg:px-20 py-16 lg:py-24 bg-[rgba(3,5,8,0.3)]">
      <div className="bento-header mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-8">
        <div className="max-w-xl">
          <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-4 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
            PRODUCT_ECOSYSTEM_V5
          </div>
          <h2 className="section-title font-bebas text-4xl lg:text-7xl text-[var(--text)] leading-none tracking-[0.02em]">
            SYSTEM <span className="text-[var(--gold)]">ARCHITECTURE</span><br/>
            OF THE FUTURE.
          </h2>
        </div>
        <p className="section-desc font-cormorant text-base lg:text-lg font-light text-[var(--text-muted)] max-w-sm">
          A suite of precision-engineered software modules designed to dominate local market complexities.
        </p>
      </div>

      <div className="bento-grid grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 auto-rows-[180px] lg:auto-rows-[220px]">
        {bentoItems.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className={`bento-item group relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-md overflow-hidden transition-all hover:border-[var(--gold-dim)] hover:shadow-[0_0_30px_rgba(201,160,69,0.05)] cursor-none ${
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
            
            <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between">
              <div className="item-top flex justify-between items-start">
                <div 
                  className="item-icon-box w-9 h-9 lg:w-10 lg:h-10 border border-[var(--border)] flex items-center justify-center bg-[rgba(3,5,8,0.8)]"
                  style={{ color: item.color }}
                >
                  <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[var(--text-dim)] group-hover:text-[var(--gold)] transition-colors" />
              </div>

              <div className="item-bottom">
                <div className="item-subtitle font-mono-dm text-[7px] lg:text-[8px] tracking-[0.2em] text-[var(--gold)] uppercase mb-2">
                  {item.subtitle}
                </div>
                <h3 className="item-title font-rajdhani text-xl lg:text-2xl font-semibold tracking-tight text-[var(--text)] mb-2 lg:mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="item-desc font-cormorant text-[14px] lg:text-[15px] font-light leading-relaxed text-[var(--text-muted)] line-clamp-2 lg:line-clamp-2 group-hover:line-clamp-none transition-all">
                  {item.description}
                </p>
              </div>
            </div>

            
            <div className="item-corner absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-[1px] bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute top-0 right-0 w-[1px] h-full bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
