'use client';

import { CheckCircle, Package, DollarSign, FileText, Image as ImageIcon, Video, Tag, Layers } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ProductReviewFormProps {
  data: any;
}

export function ProductReviewForm({ data }: ProductReviewFormProps) {
  const pricingLabels: Record<string, string> = {
    'free': 'Free',
    'one-time': 'One-Time Payment',
    'subscription': 'Subscription',
  };

  return (
    <div className="space-y-8">
      {/* Success Banner */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
        <p className="text-green-700 dark:text-green-300 text-sm font-medium">
          All steps completed! Review your product details below before submitting.
        </p>
      </div>

      {/* Product Identity */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
          <Package className="w-5 h-5 text-[#2563eb]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Product Identity</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Product Name</p>
            <p className="text-slate-900 dark:text-white font-medium">{data.name || data.productName || '—'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Category</p>
            <p className="text-slate-900 dark:text-white font-medium">{data.category || '—'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Version</p>
            <p className="text-slate-900 dark:text-white font-medium">{data.version || '1.0.0'}</p>
          </div>
          {data.tags && data.tags.length > 0 && (
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Tags</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {data.tags.map((tag: string, idx: number) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {data.description && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Description</p>
            <div className="prose dark:prose-invert prose-sm max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.description}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      {/* Features, Health & Assets */}
      {(data.instructions || (data.features && data.features.length > 0) || (data.health && data.health.length > 0) || (data.assets && data.assets.length > 0)) && (
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <FileText className="w-5 h-5 text-[#2563eb]" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Details, Features & Health</h3>
          </div>

          {data.instructions && (
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Instructions</p>
              <div className="prose dark:prose-invert prose-sm max-w-none bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.instructions}</ReactMarkdown>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features && data.features.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Features ({data.features.length})</p>
                <div className="grid gap-2">
                  {data.features.map((feature: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                      <Layers className="w-4 h-4 text-[#2563eb] mt-0.5" />
                      <div>
                        <p className="text-slate-900 dark:text-white font-medium text-sm">{feature.title}</p>
                        {feature.description && (
                          <p className="text-gray-500 text-xs mt-0.5">{feature.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.health && data.health.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Health Metrics ({data.health.length})</p>
                <div className="grid gap-2">
                  {data.health.map((metric: any, idx: number) => (
                    <div key={idx} className="bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-900 dark:text-white">{metric.label}</span>
                        <span className="text-gray-500">{metric.value}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500" 
                          style={{ width: `${metric.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {data.assets && data.assets.length > 0 && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Product Assets ({data.assets.length})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.assets.map((asset: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-900 dark:text-white font-medium text-sm truncate">{asset.title}</p>
                      <p className="text-gray-500 text-[10px] uppercase">{asset.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Pricing */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
          <DollarSign className="w-5 h-5 text-[#2563eb]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Pricing</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Model</p>
            <p className="text-slate-900 dark:text-white font-medium">
              {pricingLabels[data.pricingModel] || data.pricingModel || '—'}
            </p>
          </div>
          {data.priceUSD && (
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Price (USD)</p>
              <p className="text-slate-900 dark:text-white font-medium">${data.priceUSD}</p>
            </div>
          )}
          {data.priceKES && (
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Price (KES)</p>
              <p className="text-slate-900 dark:text-white font-medium">Ksh {data.priceKES}</p>
            </div>
          )}
          {data.billingCycle && data.pricingModel === 'subscription' && (
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Billing Cycle</p>
              <p className="text-slate-900 dark:text-white font-medium capitalize">{data.billingCycle}</p>
            </div>
          )}
        </div>
      </div>

      {/* Media */}
      {(data.demoVideoUrl || (data.images && data.images.length > 0)) && (
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <ImageIcon className="w-5 h-5 text-[#2563eb]" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Media</h3>
          </div>

          {data.demoVideoUrl && (
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Demo Video</p>
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={data.demoVideoUrl.replace('watch?v=', 'embed/')}
                  title="Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {data.images && data.images.length > 0 && (
            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Product Images ({data.images.length})
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {data.images.map((img: string, idx: number) => (
                  <div key={idx} className="aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
