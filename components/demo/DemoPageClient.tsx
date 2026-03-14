'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  ExternalLink, 
  Video, 
  ArrowRight, 
  Package, 
  Sparkles,
  Eye,
  MessageSquare,
  Calendar,
  ChevronRight,
  X,
  Monitor
} from 'lucide-react';
import { demoReviews } from '@/data/demo';
import { getIcon } from '@/lib/icons';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
  icon: string;
  iconColor: string;
  demoVideoUrl?: string;
  websiteUrl?: string;
  logoUrl?: string;
  tagline?: string;
  images?: string[];
  features?: any[];
}

interface DemoPageClientProps {
  products: Product[];
}

export function DemoPageClient({ products }: DemoPageClientProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Products with demo videos get priority
  const productsWithDemos = products.filter(p => p.demoVideoUrl);
  const otherProducts = products.filter(p => !p.demoVideoUrl);

  const openVideoModal = (product: Product) => {
    setSelectedProduct(product);
    setShowVideoModal(true);
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch')) {
      return url.replace('watch?v=', 'embed/');
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'youtube.com/embed/');
    }
    return url;
  };

  return (
    <div className="flex-grow flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-24 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Live Product Demos
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              See Our Products <span className="text-blue-500">in Action</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
              Watch video walkthroughs, explore live demos, and discover how GTSS products 
              can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/25 transition-all"
              >
                <Calendar className="w-5 h-5" />
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
          </motion.div>
        </div>
      </section>

      {/* Products with Video Demos */}
      {productsWithDemos.length > 0 && (
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
              >
                <Play className="w-4 h-4" />
                Video Walkthroughs
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Featured Product Demos
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Watch detailed demonstrations of our most popular products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productsWithDemos.map((product, index) => {
                const ProductIcon = getIcon(product.icon);
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
                  >
                    {/* Video Thumbnail */}
                    <div 
                      onClick={() => openVideoModal(product)}
                      className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden"
                    >
                      {product.images?.[0] ? (
                        <Image 
                          src={product.images[0]} 
                          alt={product.name}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-80" />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 text-blue-600 shadow-2xl"
                        >
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </motion.button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                          {product.category}
                        </span>
                        <span className="px-3 py-1 bg-blue-600 rounded-full text-white text-xs font-bold uppercase">
                          Watch Demo
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`shrink-0 w-12 h-12 rounded-xl ${product.iconColor} flex items-center justify-center`}>
                          <ProductIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                            {product.tagline || product.description?.substring(0, 100)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/products/${product.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </Link>
                        {product.websiteUrl && (
                          <Link
                            href={product.websiteUrl}
                            target="_blank"
                            className="p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Other Products */}
      {otherProducts.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Explore More Products
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Check out our full catalog of business solutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.slice(0, 6).map((product, index) => {
                const ProductIcon = getIcon(product.icon);
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/products/${product.id}`}
                      className="block p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl ${product.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <ProductIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                        {product.tagline || product.description?.substring(0, 80)}
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        Learn more
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {otherProducts.length > 6 && (
              <div className="text-center mt-10">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors"
                >
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full text-amber-600 dark:text-amber-400 text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Customer Success Stories
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              See what our partners are saying about GTSS products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{review.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{review.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  "{review.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Monitor className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a Personalized Demo?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a one-on-one session with our team to see how GTSS products 
              can be tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Sales
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-xl font-bold transition-colors"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && selectedProduct?.demoVideoUrl && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideoModal(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 xl:inset-24 z-50 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-white">
                  <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
                  <p className="text-white/60 text-sm">Product Demo</p>
                </div>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 bg-black rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={getEmbedUrl(selectedProduct.demoVideoUrl)}
                  title={`${selectedProduct.name} Demo`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
