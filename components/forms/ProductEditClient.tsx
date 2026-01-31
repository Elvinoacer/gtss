"use client";

import {
  FormSection,
  RichTextEditor,
  DraggableFeatureList,
} from "@/components/forms";
import { FileUpload } from "@/components/wizard/FileUpload";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Save,
  X,
  UserPlus,
  Trash,
  Info,
  FileText,
  Layers,
  Share2,
  Image as ImageIcon,
  Monitor,
  Plus,
  DollarSign,
  Video,
  CheckCircle,
  Star,
  ArrowLeft,
  Layout,
  Globe,
  Tag,
  Calendar,
  Zap,
  ArrowUpDown,
} from "lucide-react";
import { useState } from "react";
import { getProductById, updateProduct } from "@/lib/actions/products";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface ProductEditClientProps {
  initialProduct: any;
  productId: string;
}

export function ProductEditClient({
  initialProduct,
  productId,
}: ProductEditClientProps) {
  const router = useRouter();
  const { data: product = initialProduct } = useQuery({
    queryKey: ["product-edit", productId],
    queryFn: async () => {
      const response = await getProductById(productId);
      return response.success ? response.data : initialProduct;
    },
    initialData: initialProduct,
  });

  const [formData, setFormData] = useState({
    name: product?.name || "",
    productId: product?.productId || "",
    category: product?.category || "",
    pricingModel: product?.pricingModel || "free",
    status: product?.status || "draft",
    version: product?.version || "",
    description: product?.description || "",
    tagline: product?.tagline || "",
    websiteUrl: product?.websiteUrl || "",
    releaseDate: product?.releaseDate ? new Date(product.releaseDate).toISOString().split('T')[0] : "",
    activeUsers: product?.activeUsers || "",
    uptime: product?.uptime || "",
    leadTeam: product?.leadTeam || "Core Engineering",
    publicVisibility: product?.publicVisibility ?? true,
    logoUrl: product?.logoUrl || "",
    images: product?.images || [],
    priceUSD: product?.priceUSD || "",
    priceKES: product?.priceKES || "",
    demoVideoUrl: product?.demoVideoUrl || "",
    instructions: product?.instructions || "",
    icon: product?.icon || "box",
    iconColor: product?.iconColor || "bg-blue-50 text-blue-600",
    technicalArchitecture: product?.technicalArchitecture || "",
    priority: product?.priority || 100,
  });

  const [features, setFeatures] = useState(
    (product?.features || []).map((f: any, index: number) => ({
      ...f,
      priority: f.priority ?? (index + 1) * 10,
    }))
  );
  const [featuresMarkdown, setFeaturesMarkdown] = useState(product?.featuresMarkdown || "");
  const [featuresMode, setFeaturesMode] = useState<'manual' | 'markdown'>(
    product?.featuresMarkdown ? 'markdown' : 'manual'
  );
  const [health, setHealth] = useState(product?.health || []);
  const [assets, setAssets] = useState(product?.assets || []);
  const [reviews, setReviews] = useState(product?.reviews || []);

  const queryClient = useQueryClient();
  const updateMutation = useMutation({
    mutationFn: (data: any) => updateProduct(productId, data),
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["product-edit", productId] });
        queryClient.invalidateQueries({ queryKey: ["product", productId] });
        // Also invalidate list queries just in case
        queryClient.invalidateQueries({ queryKey: ["products"] });
        
        // Force router refresh to pick up server-side revalidation
        router.refresh();
        alert("Product saved successfully!");
      } else {
        alert("Failed to save product: " + result.error);
      }
    },
    onError: (error: any) => {
      alert("Failed to save product: " + error.message);
    },
  });

  const handleSave = () => {
    updateMutation.mutate({
      ...formData,
      features: featuresMode === 'manual' ? features : [],
      featuresMarkdown: featuresMode === 'markdown' ? featuresMarkdown : null,
      health,
      assets,
      reviews,
    });
  };

  if (!product) return (
    <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Product Not Found</h2>
            <Link href="/dashboard/products" className="text-blue-600 hover:underline mt-2 inline-block">Return to Products</Link>
        </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-6 pb-20">
      {/* Header Section with Glassmorphism */}
      <div className="sticky top-0 z-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 py-6 bg-slate-50/80 dark:bg-[#14171e]/80 backdrop-blur-xl border-b border-white/10 shadow-sm">
         <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <Link
                    href={`/dashboard/products/${productId}`}
                    className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div className="hidden md:block">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {formData.name || "Untitled Product"}
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                            Editing
                        </span>
                    </h1>
                    <p className="text-xs text-slate-500 font-mono">ID: {productId}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Link
                href="/dashboard/products"
                className="hidden md:inline-flex px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e293b] text-slate-700 dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                Discard
                </Link>
                <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                disabled={updateMutation.isPending}
                className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                {updateMutation.isPending ? (
                    <>Saving...</>
                ) : (
                    <>
                    <Save className="w-4 h-4" />
                    Save Changes
                    </>
                )}
                </motion.button>
            </div>
         </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-4">
        {/* Left Column - Core Info */}
        <div className="xl:col-span-2 flex flex-col gap-8">
          {/* Identity Card */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 dark:bg-slate-700/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700" />
             
             <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Info className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Core Identity</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-xl font-semibold px-5 py-3 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        placeholder="e.g. Acme Analytics"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Category</label>
                    <div className="relative">
                        <Layout className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 pl-11 pr-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="e.g. SaaS"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Version</label>
                    <div className="relative">
                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 pl-11 pr-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="e.g. 2.0.1"
                            value={formData.version}
                            onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                        />
                    </div>
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Tagline</label>
                    <input
                        className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 px-5 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Catchy one-liner description"
                        value={formData.tagline}
                        onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    />
                </div>
             </div>
          </div>

          {/* Rich Content Card */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Descriptions & Docs</h2>
             </div>
             
             <div className="space-y-8">
                 <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Detailed Description</label>
                        <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">Markdown Supported</span>
                    </div>
                    <RichTextEditor
                        value={formData.description}
                        onChange={(value) => setFormData({ ...formData, description: value })}
                    />
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Getting Started Instructions</label>
                    <RichTextEditor
                        value={formData.instructions}
                        onChange={(value) => setFormData({ ...formData, instructions: value })}
                    />
                 </div>
             </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Layers className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Features & Capabilities</h2>
             </div>
             <DraggableFeatureList
               features={features}
               onChange={setFeatures}
               markdownContent={featuresMarkdown}
               onMarkdownChange={setFeaturesMarkdown}
               mode={featuresMode}
               onModeChange={setFeaturesMode}
             />
          </div>

          {/* Technical Architecture */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Technical Architecture</h2>
             </div>
             <RichTextEditor
                value={formData.technicalArchitecture}
                onChange={(value) => setFormData({ ...formData, technicalArchitecture: value })}
             />
          </div>
        </div>

        {/* Right Column - Meta & Assets */}
        <div className="flex flex-col gap-8">
            {/* Status & Visibility */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Availability</h3>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Product Status</label>
                        <select
                        className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                            <option value="draft">Draft (Hidden)</option>
                            <option value="beta">Beta Testing</option>
                            <option value="live">Live / Production</option>
                            <option value="deprecated">Deprecated</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Display Priority</label>
                        <div className="relative">
                            <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="number"
                                min="1"
                                className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 pl-11 pr-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.priority}
                                onChange={(e) => setFormData({ ...formData, priority: parseInt(e.target.value) || 100 })}
                                placeholder="100"
                            />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Lower values appear first (1 = top)</p>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Public Visibility</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={formData.publicVisibility}
                                onChange={(e) => setFormData({ ...formData, publicVisibility: e.target.checked })}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Visual Assets */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <ImageIcon className="w-5 h-5 text-pink-500" />
                    <h3 className="text-lg font-bold">Visual Assets</h3>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Product Logo</label>
                        <FileUpload
                           onUpload={(result) => setFormData({ ...formData, logoUrl: result.url })}
                           showPreview={true}
                        />
                         {formData.logoUrl && (
                        <div className="mt-2 relative h-20 w-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 group">
                            <img src={formData.logoUrl} alt="Logo" className="w-full h-full object-cover" />
                            <button
                            onClick={() => setFormData({ ...formData, logoUrl: "" })}
                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                            >
                            <Trash className="w-5 h-5" />
                            </button>
                        </div>
                        )}
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                             <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Gallery</label>
                             <span className="text-xs text-slate-400">{formData.images.length} / 5</span>
                        </div>
                        <FileUpload
                             onUpload={(result) => setFormData({ ...formData, images: [...formData.images, result.url] })}
                             showPreview={false}
                        />
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {formData.images.map((img: string, idx: number) => (
                                <div key={idx} className="relative aspect-video rounded-lg overflow-hidden group">
                                    <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                                    <button
                                        onClick={() => {
                                            const newImages = [...formData.images];
                                            newImages.splice(idx, 1);
                                            setFormData({ ...formData, images: newImages });
                                        }}
                                        className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Metrics */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <h3 className="text-lg font-bold">Metrics</h3>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Active Users</label>
                        <input 
                          className="w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 px-4 py-2 text-sm"
                          value={formData.activeUsers}
                          onChange={(e) => setFormData({...formData, activeUsers: e.target.value})}
                          placeholder="e.g. 50k+"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Uptime</label>
                        <input 
                          className="w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 px-4 py-2 text-sm"
                          value={formData.uptime}
                          onChange={(e) => setFormData({...formData, uptime: e.target.value})}
                          placeholder="e.g. 99.99%"
                        />
                    </div>
                </div>
            </div>
            
            {/* Pricing */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-lg font-bold">Pricing</h3>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                        {['free', 'one-time', 'subscription'].map((m) => (
                            <button
                                key={m}
                                onClick={() => setFormData({...formData, pricingModel: m})}
                                className={`px-3 py-2 rounded-lg text-sm font-bold capitalize border-2 transition-all ${
                                    formData.pricingModel === m
                                    ? 'border-blue-500 bg-blue-50 text-blue-600'
                                    : 'border-slate-100 text-slate-500 hover:border-slate-300'
                                }`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                    {formData.pricingModel !== 'free' && (
                        <div>
                             <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Price (USD)</label>
                             <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                                <input 
                                    type="number"
                                    className="w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 pl-7 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                    value={formData.priceUSD}
                                    onChange={(e) => setFormData({...formData, priceUSD: e.target.value})}
                                />
                             </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Links */}
             <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-5 h-5 text-cyan-500" />
                    <h3 className="text-lg font-bold">External Links</h3>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Website URL</label>
                        <input 
                          type="url"
                          className="w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                          placeholder="https://"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Demo Video URL</label>
                        <input 
                          type="url"
                          className="w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                          value={formData.demoVideoUrl}
                          onChange={(e) => setFormData({...formData, demoVideoUrl: e.target.value})}
                          placeholder="YouTube / Vimeo"
                        />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
