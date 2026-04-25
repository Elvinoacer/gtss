"use client";

import {
  ArrowRight,
  ExternalLink,
  Eye,
  Package,
  Play,
  Sparkles,
  Video,
  Terminal,
  Activity,
  MoveRight,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getIcon } from "@/lib/icons";
import { demoReviews } from "@/data/demo";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
  icon: string;
  iconColor: string;
  demoVideoUrl?: string | null;
  websiteUrl?: string | null;
  logoUrl?: string | null;
  tagline?: string | null;
  images?: string[];
}

interface DemoPageClientProps {
  products: Product[];
}

function getEmbedUrl(url: string) {
  if (!url) return "";
  if (url.includes("youtube.com/shorts/")) return url.replace("youtube.com/shorts/", "youtube.com/embed/");
  if (url.length === 11 && !url.includes("/") && !url.includes(".") && !url.includes(" ")) return `https://www.youtube.com/embed/${url}`;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) return `https://www.youtube.com/embed/${match[2]}`;
  if (url.includes("youtube.com/embed/")) return url;
  return url;
}

export function DemoPageClient({ products }: DemoPageClientProps) {
  const productsWithDemos = products.filter((product) => product.demoVideoUrl);
  const otherProducts = products.filter((product) => !product.demoVideoUrl);

  return (
    <div className="min-h-screen bg-[var(--black)] pt-32 pb-24 overflow-hidden">
      {/* Background HUD Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <header className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="px-3 py-1 border border-[var(--gold-dim)] bg-[rgba(255,255,255,0.05)] text-[var(--gold)] font-mono-dm text-[10px] tracking-[0.3em] uppercase">
              SECTOR: VIRTUAL_SANDBOX
            </div>
            <div className="h-[1px] flex-1 bg-[var(--border)]"></div>
            <div className="flex items-center gap-2 font-mono-dm text-[10px] text-[var(--gold-dim)]">
              <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
              LIVE_STREAM_ACTIVE
            </div>
          </div>

          <h1 className="font-bebas text-6xl sm:text-8xl text-[var(--text)] mb-8 tracking-tighter leading-none uppercase">
            Virtual <span className="text-[var(--gold)]">Sandbox</span> Access
          </h1>
          
          <p className="font-cormorant text-2xl sm:text-3xl text-[var(--text-muted)] italic max-w-3xl leading-relaxed">
            Experience technical sovereignty in real-time. Explore video walkthroughs and live 
            demonstrations of the GTSS software ecosystem before initiating deployment.
          </p>
        </header>

        {/* Featured Demos */}
        {productsWithDemos.length > 0 && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <Terminal className="w-5 h-5 text-[var(--gold)]" />
              <h2 className="font-bebas text-4xl text-[var(--text)] tracking-wide uppercase">
                Active Protocol Demonstrations
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {productsWithDemos.map((product) => {
                const ProductIcon = getIcon(product.icon);
                return (
                  <article key={product.id} className="group relative border border-[var(--border)] bg-[rgba(3,5,8,0.7)] overflow-hidden">
                    <div className="aspect-video relative overflow-hidden bg-black">
                      {/* Scanline Overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20"></div>
                      
                      {product.images?.[0] ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" />
                      )}
                      
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-16 h-16 rounded-full border border-[var(--gold)] bg-[rgba(212,175,55,0.1)] backdrop-blur-sm flex items-center justify-center text-[var(--gold)] group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 fill-[var(--gold)]" />
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4 font-mono-dm text-[8px] tracking-[0.2em] text-[var(--gold-dim)] uppercase bg-black/60 px-2 py-1 backdrop-blur-md">
                        NODE_ACCESS: GRANTED
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-start gap-6 mb-8">
                        <div className={`w-14 h-14 border border-[var(--border)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center ${product.iconColor}`}>
                          <ProductIcon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="font-bebas text-3xl text-[var(--text)] mb-2 tracking-wide uppercase">
                            {product.name}
                          </h3>
                          <p className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-50">
                            {product.category}
                          </p>
                        </div>
                      </div>

                      <p className="font-cormorant text-xl text-[var(--text-muted)] italic leading-relaxed mb-8 line-clamp-2">
                        {product.tagline || product.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/products/${product.id}`}
                          className="h-12 px-6 border border-[var(--border)] bg-[rgba(255,255,255,0.03)] font-bebas text-lg flex items-center gap-3 hover:border-[var(--gold)] transition-all uppercase tracking-widest text-[var(--text)]"
                        >
                          Protocol_Details
                          <Eye className="w-4 h-4" />
                        </Link>
                        
                        <a
                          href={product.demoVideoUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 px-6 bg-[var(--gold)] text-[var(--black)] font-bebas text-lg flex items-center gap-3 hover:bg-white transition-all uppercase tracking-widest"
                        >
                          Initialize_Demo
                          <Play className="w-4 h-4 fill-current" />
                        </a>
                      </div>
                    </div>

                    {/* HUD Corner */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--gold-dim)] opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* Other Products Grid */}
        {otherProducts.length > 0 && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <Package className="w-5 h-5 text-[var(--gold-dim)]" />
              <h2 className="font-bebas text-3xl text-[var(--text)] tracking-wide uppercase opacity-70">
                Secondary Ecosystem Nodes
              </h2>
              <div className="h-[1px] flex-1 bg-[var(--border)] opacity-20"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.slice(0, 6).map((product) => {
                const ProductIcon = getIcon(product.icon);
                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="p-6 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--gold-dim)] transition-all group relative"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-10 h-10 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center ${product.iconColor}`}>
                        <ProductIcon className="w-5 h-5" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--gold-dim)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-bebas text-2xl text-[var(--text)] mb-3 tracking-wide uppercase">
                      {product.name}
                    </h3>
                    <p className="font-mono-dm text-[9px] tracking-[0.1em] text-[var(--text-muted)] uppercase line-clamp-2">
                      {product.tagline || product.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="mb-32 border-t border-[var(--border)] pt-24">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            <h2 className="font-bebas text-4xl text-[var(--text)] tracking-wide uppercase text-center">
              Verified Operational Feedback
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {demoReviews.map((review) => (
              <article key={review.name} className="p-8 border border-[var(--border)] bg-[rgba(3,5,8,0.7)] relative group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-[var(--border)] overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-lg font-bold text-[var(--text)] uppercase tracking-tight">{review.name}</h4>
                    <p className="font-mono-dm text-[9px] text-[var(--gold-dim)] uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
                <p className="font-cormorant text-lg text-[var(--text-muted)] italic leading-relaxed">
                  &ldquo;{review.content}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-[rgba(3,5,8,0.7)] border border-[var(--border)] p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10"></div>
          
          <h2 className="font-bebas text-5xl sm:text-7xl text-[var(--text)] mb-8 tracking-wide leading-none uppercase relative z-10">
            Ready to initiate <span className="text-[var(--gold)]">Protocol</span> access?
          </h2>
          <p className="font-cormorant text-2xl text-[var(--text-muted)] italic mb-12 max-w-2xl mx-auto relative z-10">
            Contact our engineering unit to schedule a dedicated walkthrough 
            or request private sandbox credentials.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link
              href="/contact"
              className="h-16 px-12 bg-[var(--gold)] text-[var(--black)] font-bebas text-2xl flex items-center gap-4 hover:bg-white transition-all group"
            >
              <span className="tracking-widest uppercase">Request_Live_Walkthrough</span>
              <MoveRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              href="/enterprise"
              className="h-16 px-12 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] text-[var(--text)] font-bebas text-2xl flex items-center gap-4 hover:border-[var(--gold)] transition-all"
            >
              <Shield className="w-5 h-5 text-[var(--gold-dim)]" />
              <span className="tracking-widest uppercase opacity-70">Enterprise_Security</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
