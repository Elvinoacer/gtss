import {
  ArrowRight,
  ExternalLink,
  Eye,
  Package,
  Play,
  Sparkles,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { demoReviews } from "@/data/demo";
import { getIcon } from "@/lib/icons";

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

export function DemoPageClient({ products }: DemoPageClientProps) {
  const productsWithDemos = products.filter((product) => product.demoVideoUrl);
  const otherProducts = products.filter((product) => !product.demoVideoUrl);

  return (
    <div className="flex-grow flex flex-col w-full">
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <Video className="w-4 h-4" />
            Live Product Demos
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            See Our Products <span className="text-blue-500">in Action</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            Watch walkthroughs, explore demo-ready products, and pick the best
            GTSS platform for your business workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/25 transition-all"
            >
              Schedule Live Demo
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold transition-all"
            >
              <Package className="w-5 h-5" />
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {productsWithDemos.length > 0 ? (
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
                <Play className="w-4 h-4" />
                Video Walkthroughs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Featured Product Demos
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Watch detailed demonstrations of our most popular products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productsWithDemos.map((product) => {
                const ProductIcon = getIcon(product.icon);

                return (
                  <article
                    key={product.id}
                    className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                      {product.images?.[0] ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover opacity-85"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90" />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                          <Play className="w-4 h-4" />
                          Demo Available
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`shrink-0 w-12 h-12 rounded-xl ${product.iconColor} flex items-center justify-center`}
                        >
                          <ProductIcon className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                            {product.tagline || product.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/products/${product.id}`}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-4 py-2.5 text-sm font-bold text-white dark:text-slate-900"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </Link>
                        {product.demoVideoUrl ? (
                          <a
                            href={product.demoVideoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-500"
                          >
                            <Play className="w-4 h-4" />
                            Watch Demo
                          </a>
                        ) : null}
                        {product.websiteUrl ? (
                          <a
                            href={product.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 px-3 py-2.5 text-slate-600 dark:text-slate-300"
                            aria-label={`Open ${product.name} website`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {otherProducts.length > 0 ? (
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Explore More Products
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Browse the rest of our product catalog and request a tailored
                walkthrough.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.slice(0, 6).map((product) => {
                const ProductIcon = getIcon(product.icon);

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="block p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${product.iconColor} flex items-center justify-center mb-4`}
                    >
                      <ProductIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                      {product.tagline || product.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {otherProducts.length > 6 ? (
              <div className="text-center mt-10">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors"
                >
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Customer Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              See what our partners are saying about GTSS products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoReviews.map((review) => (
              <article
                key={review.name}
                className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      {review.name}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {review.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  &ldquo;{review.content}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-[900px] mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Ready to See It Live?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us your use case and we&apos;ll schedule a focused walkthrough
            for your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50"
            >
              Book a Demo Session
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white rounded-xl font-bold hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
