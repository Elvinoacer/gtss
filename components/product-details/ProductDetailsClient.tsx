'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Package, Tag, DollarSign, FileText, Video, Image as ImageIcon, 
  Layers, ArrowLeft, ArrowRight, Edit, Trash2, ExternalLink, Calendar, Clock,
  CheckCircle, AlertCircle, QrCode, RefreshCw, Download, Star
} from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProductById, deleteProduct, regenerateQRCode } from '@/lib/actions/products';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import { getIcon } from '@/lib/icons';

interface ProductDetailsClientProps {
  initialProduct: any;
  productId: string;
}

export function ProductDetailsClient({ initialProduct, productId }: ProductDetailsClientProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [regenerating, setRegenerating] = useState(false);

  const { data: product = initialProduct } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const response = await getProductById(productId);
      return response.success ? response.data : initialProduct;
    },
    initialData: initialProduct,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      router.push('/dashboard/products');
    },
  });

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      deleteMutation.mutate(productId);
    }
  };

  const handleRegenerateQR = async () => {
    setRegenerating(true);
    try {
      const result = await regenerateQRCode(productId);
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ['product', productId] });
      } else {
        alert('Failed to regenerate QR code');
      }
    } finally {
      setRegenerating(false);
    }
  };

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <AlertCircle className="w-16 h-16 text-[#EF4444] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#111827] dark:text-[#E5E7EB] mb-2">Product not found</h2>
        <p className="text-[#6B7280] mb-6">The product you're looking for doesn't exist or has been deleted.</p>
        <Link 
          href="/dashboard/products"
          className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-[#10B981]/10 text-[#10B981] ring-1 ring-[#10B981]/20';
      case 'beta': return 'bg-[#F59E0B]/10 text-[#F59E0B] ring-1 ring-[#F59E0B]/20';
      case 'deprecated': return 'bg-[#EF4444]/10 text-[#EF4444] ring-1 ring-[#EF4444]/20';
      default: return 'bg-[#6B7280]/10 text-[#6B7280] ring-1 ring-[#6B7280]/20';
    }
  };

  const ProductIcon = getIcon(product.icon);

  return (
    <div className="max-w-6xl mx-auto w-full space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm">
        <Link href="/dashboard" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">
          Dashboard
        </Link>
        <span className="text-[#E5E7EB]">/</span>
        <Link href="/dashboard/products" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">
          Products
        </Link>
        <span className="text-[#E5E7EB]">/</span>
        <span className="text-[#111827] dark:text-[#E5E7EB] font-medium truncate max-w-[200px]">
          {product.name}
        </span>
      </div>

      {/* Header Card - Deep Navy theme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0F172A] rounded-2xl p-6 md:p-8 text-white shadow-xl"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="size-16 md:size-20 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
              <ProductIcon className="w-8 h-8 md:w-10 md:h-10 text-[#2563EB]" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{product.name}</h1>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
              {product.tagline && (
                <p className="text-[#E5E7EB] text-base md:text-lg font-medium italic mb-2">"{product.tagline}"</p>
              )}
              <p className="text-[#E5E7EB]/70 font-mono text-sm mb-3">ID: {product.productId}</p>
              {/* Description rendered as Markdown */}
              {product.description && (
                <div className="text-white/80 text-sm max-w-xl prose prose-sm prose-invert prose-p:text-white/80 prose-strong:text-white">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.description}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href={`/dashboard/products/${productId}/edit`}
              className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] rounded-lg font-medium text-sm transition-colors"
            >
              <Edit className="w-4 h-4" /> Edit
            </Link>
            <button
              onClick={handleDelete}
              disabled={deleteMutation.isPending}
              className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-[#EF4444]/80 hover:bg-[#EF4444] rounded-lg font-medium text-sm transition-colors"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        </div>
      </motion.div>

      {/* Info Grid - with theme colors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-[#2563EB]/10">
              <Tag className="w-5 h-5 text-[#2563EB]" />
            </div>
            <span className="text-sm text-[#6B7280]">Category</span>
          </div>
          <p className="text-lg font-semibold text-[#111827] dark:text-[#E5E7EB]">{product.category}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-[#10B981]/10">
              <DollarSign className="w-5 h-5 text-[#10B981]" />
            </div>
            <span className="text-sm text-[#6B7280]">Pricing</span>
          </div>
          <p className="text-lg font-semibold text-[#111827] dark:text-[#E5E7EB]">{product.pricing}</p>
          {(product.priceUSD || product.priceKES) && (
            <div className="flex gap-3 mt-2 text-sm text-[#6B7280]">
              {product.priceUSD && <span>${product.priceUSD}</span>}
              {product.priceKES && <span>Ksh {product.priceKES}</span>}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-sm text-[#6B7280]">Created</span>
          </div>
          <p className="text-lg font-semibold text-[#111827] dark:text-[#E5E7EB]">
            {new Date(product.createdAt).toLocaleDateString('en-US', { 
              month: 'short', day: 'numeric', year: 'numeric' 
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-[#F59E0B]/10">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <span className="text-sm text-[#6B7280]">Last Updated</span>
          </div>
          <p className="text-lg font-semibold text-[#111827] dark:text-[#E5E7EB]">
            {new Date(product.updatedAt).toLocaleDateString('en-US', { 
              month: 'short', day: 'numeric', year: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Instructions */}
          {product.instructions && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 pb-4 border-b border-[#E5E7EB] dark:border-[#1e293b] mb-4">
                <FileText className="w-5 h-5 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#111827] dark:text-[#E5E7EB]">Instructions & Documentation</h3>
              </div>
              <div className="prose dark:prose-invert prose-sm max-w-none prose-headings:text-[#111827] dark:prose-headings:text-[#E5E7EB] prose-p:text-[#6B7280] prose-a:text-[#2563EB] prose-strong:text-[#111827] dark:prose-strong:text-[#E5E7EB]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.instructions}</ReactMarkdown>
              </div>
            </motion.section>
          )}

          {/* Health Metrics */}
          {product.health && product.health.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 pb-4 border-b border-[#E5E7EB] dark:border-[#1e293b] mb-4">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <h3 className="text-lg font-bold text-[#111827] dark:text-[#E5E7EB]">Health Metrics</h3>
              </div>
              <div className="grid gap-6">
                {product.health.map((metric: any, index: number) => (
                  <div key={metric.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-[#111827] dark:text-[#E5E7EB]">{metric.label}</span>
                      <span className="text-[#6B7280]">{metric.value}</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full ${metric.color || 'bg-blue-500'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 pb-4 border-b border-[#E5E7EB] dark:border-[#1e293b] mb-4">
                <Layers className="w-5 h-5 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#111827] dark:text-[#E5E7EB]">Features</h3>
                <span className="ml-auto px-2 py-0.5 bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold rounded-full">
                  {product.features.length}
                </span>
              </div>
              <div className="grid gap-3">
                {product.features.map((feature: any, index: number) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155]"
                  >
                    <div className="p-1.5 rounded-md bg-[#10B981]/10">
                      <CheckCircle className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111827] dark:text-[#E5E7EB]">{feature.title}</h4>
                      {feature.description && (
                        <p className="text-sm text-[#6B7280] mt-0.5">{feature.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Technical Architecture */}
          {product.technicalArchitecture && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 pb-4 border-b border-[#E5E7EB] dark:border-[#1e293b] mb-4">
                <Layers className="w-5 h-5 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#111827] dark:text-[#E5E7EB]">Technical Architecture</h3>
              </div>
              <div className="prose dark:prose-invert prose-sm max-w-none prose-headings:text-[#111827] dark:prose-headings:text-[#E5E7EB] prose-p:text-[#6B7280] prose-a:text-[#2563EB] prose-strong:text-[#111827] dark:prose-strong:text-[#E5E7EB]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.technicalArchitecture}</ReactMarkdown>
              </div>
            </motion.section>
          )}

          {/* Reviews */}
          {product.reviews && product.reviews.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 pb-4 border-b border-[#E5E7EB] dark:border-[#1e293b] mb-4">
                <Star className="w-5 h-5 text-[#F59E0B]" />
                <h3 className="text-lg font-bold text-[#111827] dark:text-[#E5E7EB]">Customer Reviews</h3>
                <span className="ml-auto px-2 py-0.5 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold rounded-full">
                  {product.reviews.length}
                </span>
              </div>
              <div className="grid gap-4">
                {product.reviews.map((review: any, index: number) => (
                  <div key={review.id || index} className="p-4 rounded-lg bg-white dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155]">
                    <div className="flex items-center gap-3 mb-3">
                      {review.authorAvatar ? (
                        <img src={review.authorAvatar} alt={review.authorName} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                          {review.authorName.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-[#111827] dark:text-[#E5E7EB]">{review.authorName}</h4>
                        {review.authorRole && <p className="text-xs text-[#6B7280]">{review.authorRole}</p>}
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3 h-3 ${star <= review.rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic">"{review.content}"</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}


        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* QR Code Card */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <QrCode className="w-5 h-5 text-[#2563EB]" />
              <h3 className="font-bold text-[#111827] dark:text-[#E5E7EB]">Product QR Code</h3>
            </div>
            <div className="flex flex-col items-center">
              {product.qrCodeUrl ? (
                <>
                  <div className="bg-white p-3 rounded-xl mb-4">
                    <img 
                      src={product.qrCodeUrl} 
                      alt="Product QR Code" 
                      className="w-40 h-40"
                    />
                  </div>
                  <p className="text-xs text-[#6B7280] text-center mb-4">
                    Scan to view product page
                  </p>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={handleRegenerateQR}
                      disabled={regenerating}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-lg text-sm font-medium hover:bg-[#2563EB]/20 transition-colors disabled:opacity-50"
                    >
                      <RefreshCw className={`w-4 h-4 ${regenerating ? 'animate-spin' : ''}`} />
                      {regenerating ? 'Regenerating...' : 'Regenerate'}
                    </button>
                    <a
                      href={product.qrCodeUrl}
                      download={`${product.productId}-qr.png`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#10B981]/10 text-[#10B981] rounded-lg text-sm font-medium hover:bg-[#10B981]/20 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <QrCode className="w-12 h-12 text-[#E5E7EB] mx-auto mb-3" />
                  <p className="text-sm text-[#6B7280] mb-3">No QR code generated</p>
                  <button
                    onClick={handleRegenerateQR}
                    disabled={regenerating}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${regenerating ? 'animate-spin' : ''}`} />
                    Generate QR Code
                  </button>
                </div>
              )}
            </div>
          </motion.section>

          {/* Demo Video */}
          {product.demoVideoUrl && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <Video className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-bold text-[#111827] dark:text-[#E5E7EB]">Demo Video</h3>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={product.demoVideoUrl.replace('watch?v=', 'embed/')}
                  title="Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a 
                href={product.demoVideoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-3 text-sm text-[#2563EB] hover:underline"
              >
                <ExternalLink className="w-4 h-4" /> Watch on YouTube
              </a>
            </motion.section>
          )}

          {/* Product Images */}
          {product.images && product.images.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <ImageIcon className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-bold text-[#111827] dark:text-[#E5E7EB]">Gallery</h3>
                <span className="ml-auto text-sm text-[#6B7280]">{product.images.length} images</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {product.images.map((img: string, idx: number) => (
                  <div key={idx} className="aspect-video rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#334155]">
                    <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Product Assets */}
          {product.assets && product.assets.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-bold text-[#111827] dark:text-[#E5E7EB]">Product Assets</h3>
              </div>
              <div className="grid gap-3">
                {product.assets.map((asset: any, idx: number) => (
                  <a
                    key={asset.id}
                    href={asset.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1e293b] hover:border-blue-500/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                      {asset.type === 'pdf' ? <FileText className="w-4 h-4" /> : 
                       asset.type === 'video' ? <Video className="w-4 h-4" /> : 
                       <ExternalLink className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#111827] dark:text-[#E5E7EB] truncate">{asset.title}</p>
                      {asset.subtitle && <p className="text-xs text-[#6B7280] truncate">{asset.subtitle}</p>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.section>
          )}

          {/* Quick Actions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-5 shadow-sm"
          >
            <h3 className="font-bold text-[#111827] dark:text-[#E5E7EB] mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                href={`/dashboard/products/${productId}/edit`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#E5E7EB]/50 dark:hover:bg-[#1e293b] transition-colors"
              >
                <Edit className="w-5 h-5 text-[#6B7280]" />
                <span className="text-sm font-medium text-[#111827] dark:text-[#E5E7EB]">Edit Product</span>
              </Link>
              <button
                onClick={handleDelete}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#EF4444]/10 transition-colors w-full"
              >
                <Trash2 className="w-5 h-5 text-[#EF4444]" />
                <span className="text-sm font-medium text-[#EF4444]">Delete Product</span>
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
