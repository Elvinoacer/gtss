"use client";

import {
  FormSection,
  RichTextEditor,
  EditableFeatureList,
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
} from "lucide-react";
import { useState } from "react";
import { getProductById, updateProduct } from "@/lib/actions/products";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface ProductEditClientProps {
  initialProduct: any;
  productId: string;
}

export function ProductEditClient({
  initialProduct,
  productId,
}: ProductEditClientProps) {
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
  });

  const [features, setFeatures] = useState(product?.features || []);
  const [health, setHealth] = useState(product?.health || []);
  const [assets, setAssets] = useState(product?.assets || []);
  const [reviews, setReviews] = useState(product?.reviews || []);

  const [platforms, setPlatforms] = useState({
    web: true,
    ios: false,
    android: true,
    desktop: true,
  });

  const teamMembers = []; // Not in schema yet

  const queryClient = useQueryClient();
  const updateMutation = useMutation({
    mutationFn: (data: any) => updateProduct(productId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-edit", productId] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      alert("Product saved successfully!");
    },
    onError: (error: any) => {
      alert("Failed to save product: " + error.message);
    },
  });

  const handleSave = () => {
    updateMutation.mutate({
      ...formData,
      features,
      health,
      assets,
      reviews,
    });
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="mx-auto max-w-[1200px] flex flex-col gap-6">
      {/* Breadcrumbs & Heading */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 items-center text-sm">
          <Link
            href="/dashboard"
            className="text-gray-500 font-medium hover:underline"
          >
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link
            href="/dashboard/products"
            className="text-gray-500 font-medium hover:underline"
          >
            Products
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-slate-900 dark:text-white font-medium">
            Edit Product
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
          <div>
            <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">
              Edit Product: {formData.name}
            </h1>
            <p className="text-gray-500 mt-1 text-base">
              Modify product details, documentation, and assets.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/products"
              className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1e293b] text-slate-900 dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="px-5 py-2.5 rounded-lg bg-[#2563eb] text-white text-sm font-bold hover:bg-[#1d4ed8] transition-colors shadow-sm flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </motion.button>
          </div>
        </div>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* General Information */}
          <FormSection title="General Information" icon={Info}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Product Name <span className="text-red-500">*</span>
                </span>
                <input
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  placeholder="Enter product name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Version
                </span>
                <input
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  placeholder="e.g. 1.0.0"
                  type="text"
                  value={formData.version}
                  onChange={(e) =>
                    setFormData({ ...formData, version: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Tagline
                </span>
                <input
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  placeholder="Brief description for marketing"
                  type="text"
                  value={formData.tagline}
                  onChange={(e) =>
                    setFormData({ ...formData, tagline: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Website URL
                </span>
                <input
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  placeholder="https://example.com"
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, websiteUrl: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Release Date
                </span>
                <input
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  type="date"
                  value={formData.releaseDate}
                  onChange={(e) =>
                    setFormData({ ...formData, releaseDate: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Lead Team
                </span>
                <select
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  value={formData.leadTeam}
                  onChange={(e) =>
                    setFormData({ ...formData, leadTeam: e.target.value })
                  }
                >
                  <option>Core Engineering</option>
                  <option>Data Science Ops</option>
                  <option>Platform UI</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Active Users
                </span>
                <input
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  placeholder="e.g. 10k+"
                  type="text"
                  value={formData.activeUsers}
                  onChange={(e) =>
                    setFormData({ ...formData, activeUsers: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Uptime
                </span>
                <input
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  placeholder="e.g. 99.9%"
                  type="text"
                  value={formData.uptime}
                  onChange={(e) =>
                    setFormData({ ...formData, uptime: e.target.value })
                  }
                />
              </label>
            </div>
          </FormSection>

          {/* Pricing Section */}
          <FormSection title="Pricing & Cost" icon={DollarSign}>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "one-time", title: "One-Time", icon: "💎" },
                  { id: "subscription", title: "Subscription", icon: "🔄" },
                  { id: "free", title: "Free", icon: "🎁" },
                ].map((model) => (
                  <div
                    key={model.id}
                    onClick={() =>
                      setFormData({ ...formData, pricingModel: model.id })
                    }
                    className={`cursor-pointer relative p-4 rounded-xl border-2 transition-all ${
                      formData.pricingModel === model.id
                        ? "border-[#2563eb] bg-blue-50/50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800"
                    }`}
                  >
                    <div className="text-2xl mb-2">{model.icon}</div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {model.title}
                    </h4>
                  </div>
                ))}
              </div>

              {formData.pricingModel !== "free" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                      Price (USD)
                    </span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        $
                      </span>
                      <input
                        className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white pl-8 pr-4 py-2.5 text-sm"
                        type="number"
                        value={formData.priceUSD}
                        onChange={(e) =>
                          setFormData({ ...formData, priceUSD: e.target.value })
                        }
                      />
                    </div>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                      Price (KES)
                    </span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        Ksh
                      </span>
                      <input
                        className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white pl-12 pr-4 py-2.5 text-sm"
                        type="number"
                        value={formData.priceKES}
                        onChange={(e) =>
                          setFormData({ ...formData, priceKES: e.target.value })
                        }
                      />
                    </div>
                  </label>
                </div>
              )}
            </div>
          </FormSection>

          {/* Demo & Instructions */}
          <FormSection title="Demo & Instructions" icon={Video}>
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Demo Video URL
                </span>
                <input
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  placeholder="YouTube or Vimeo URL"
                  type="text"
                  value={formData.demoVideoUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, demoVideoUrl: e.target.value })
                  }
                />
              </label>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Usage Instructions
                </span>
                <RichTextEditor
                  value={formData.instructions}
                  onChange={(value) =>
                    setFormData({ ...formData, instructions: value })
                  }
                />
              </div>
            </div>
          </FormSection>

          {/* Documentation */}
          <FormSection title="Documentation" icon={FileText}>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Full Description
                </span>
                <span className="text-xs text-gray-500">
                  Markdown supported
                </span>
              </div>
              <RichTextEditor
                value={formData.description}
                onChange={(value) =>
                  setFormData({ ...formData, description: value })
                }
              />
            </div>
          </FormSection>

          {/* Features */}
          <FormSection title="Key Features" icon={Layers}>
            <EditableFeatureList features={features} onChange={setFeatures} />
          </FormSection>

          {/* Health Metrics */}
          <FormSection title="Health Metrics" icon={CheckCircle}>
            <div className="flex flex-col gap-4">
              {health.map((metric: any, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50"
                >
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      placeholder="Label (e.g. Uptime)"
                      value={metric.label}
                      onChange={(e) => {
                        const newHealth = [...health];
                        newHealth[idx].label = e.target.value;
                        setHealth(newHealth);
                      }}
                    />
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      placeholder="Value (e.g. 99.9%)"
                      value={metric.value}
                      onChange={(e) => {
                        const newHealth = [...health];
                        newHealth[idx].value = e.target.value;
                        setHealth(newHealth);
                      }}
                    />
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      type="number"
                      placeholder="Percentage (0-100)"
                      value={metric.percentage}
                      onChange={(e) => {
                        const newHealth = [...health];
                        newHealth[idx].percentage = e.target.value;
                        setHealth(newHealth);
                      }}
                    />
                  </div>
                  <button
                    onClick={() =>
                      setHealth(health.filter((_: any, i: number) => i !== idx))
                    }
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() =>
                  setHealth([
                    ...health,
                    {
                      label: "",
                      value: "",
                      percentage: 0,
                      color: "bg-blue-500",
                    },
                  ])
                }
                className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 hover:border-[#2563eb] hover:text-[#2563eb] transition-all"
              >
                <Plus className="w-4 h-4" /> Add Health Metric
              </button>
            </div>
          </FormSection>

          {/* Assets */}
          <FormSection title="Product Assets" icon={FileText}>
            <div className="flex flex-col gap-4">
              {assets.map((asset: any, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50"
                >
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      placeholder="Asset Title"
                      value={asset.title}
                      onChange={(e) => {
                        const newAssets = [...assets];
                        newAssets[idx].title = e.target.value;
                        setAssets(newAssets);
                      }}
                    />
                    <select
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      value={asset.type}
                      onChange={(e) => {
                        const newAssets = [...assets];
                        newAssets[idx].type = e.target.value;
                        setAssets(newAssets);
                      }}
                    >
                      <option value="pdf">PDF Document</option>
                      <option value="video">Video</option>
                      <option value="slides">Slides</option>
                      <option value="link">External Link</option>
                    </select>
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2 md:col-span-2"
                      placeholder="URL / Link"
                      value={asset.href}
                      onChange={(e) => {
                        const newAssets = [...assets];
                        newAssets[idx].href = e.target.value;
                        setAssets(newAssets);
                      }}
                    />
                  </div>
                  <button
                    onClick={() =>
                      setAssets(assets.filter((_: any, i: number) => i !== idx))
                    }
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() =>
                  setAssets([
                    ...assets,
                    { title: "", type: "pdf", href: "", subtitle: "" },
                  ])
                }
                className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 hover:border-[#2563eb] hover:text-[#2563eb] transition-all"
              >
                <Plus className="w-4 h-4" /> Add Asset
              </button>
            </div>
          </FormSection>

          {/* Technical Architecture */}
          <FormSection title="Technical Architecture" icon={Layers}>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Architecture Details
                </span>
                <span className="text-xs text-gray-500">
                  Markdown supported
                </span>
              </div>
              <RichTextEditor
                value={formData.technicalArchitecture}
                onChange={(value) =>
                  setFormData({ ...formData, technicalArchitecture: value })
                }
              />
              <p className="text-xs text-gray-500 mt-1">
                Describe the technical stack and architecture. This is displayed on the public product page.
              </p>
            </div>
          </FormSection>

          {/* Customer Reviews */}
          <FormSection title="Customer Reviews" icon={Star}>
            <div className="flex flex-col gap-4">
              {reviews.map((review: any, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50"
                >
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      placeholder="Author Name *"
                      value={review.authorName}
                      onChange={(e) => {
                        const newReviews = [...reviews];
                        newReviews[idx].authorName = e.target.value;
                        setReviews(newReviews);
                      }}
                    />
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      placeholder="Role (e.g. CTO, Tech Corp)"
                      value={review.authorRole || ''}
                      onChange={(e) => {
                        const newReviews = [...reviews];
                        newReviews[idx].authorRole = e.target.value;
                        setReviews(newReviews);
                      }}
                    />
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      placeholder="Avatar URL"
                      value={review.authorAvatar || ''}
                      onChange={(e) => {
                        const newReviews = [...reviews];
                        newReviews[idx].authorAvatar = e.target.value;
                        setReviews(newReviews);
                      }}
                    />
                    <select
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2"
                      value={review.rating || 5}
                      onChange={(e) => {
                        const newReviews = [...reviews];
                        newReviews[idx].rating = parseInt(e.target.value);
                        setReviews(newReviews);
                      }}
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                      <option value={3}>⭐⭐⭐ (3 stars)</option>
                      <option value={2}>⭐⭐ (2 stars)</option>
                      <option value={1}>⭐ (1 star)</option>
                    </select>
                    <textarea
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-sm px-3 py-2 md:col-span-2 min-h-[80px]"
                      placeholder="Review content *"
                      value={review.content || ''}
                      onChange={(e) => {
                        const newReviews = [...reviews];
                        newReviews[idx].content = e.target.value;
                        setReviews(newReviews);
                      }}
                    />
                  </div>
                  <button
                    onClick={() =>
                      setReviews(reviews.filter((_: any, i: number) => i !== idx))
                    }
                    className="self-end p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() =>
                  setReviews([
                    ...reviews,
                    { authorName: "", authorRole: "", authorAvatar: "", rating: 5, content: "" },
                  ])
                }
                className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 hover:border-[#2563eb] hover:text-[#2563eb] transition-all"
              >
                <Plus className="w-4 h-4" /> Add Review
              </button>
            </div>
          </FormSection>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {/* Publishing */}
          <FormSection title="Publishing" icon={Share2}>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200">
                  Status
                </span>
                <select
                  className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-[#2563eb] focus:border-[#2563eb] px-4 py-2.5 shadow-sm text-sm"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option value="draft">Draft</option>
                  <option value="review">In Review</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </label>
              <div className="flex items-center justify-between py-2 border-t border-gray-100 dark:border-gray-700 mt-2">
                <div>
                  <p className="text-sm font-medium">Public Visibility</p>
                  <p className="text-xs text-gray-500">
                    Visible to all employees
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={formData.publicVisibility}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        publicVisibility: e.target.checked,
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2563eb]"></div>
                </label>
              </div>
            </div>
          </FormSection>

          {/* Media Assets */}
          <FormSection title="Media Assets" icon={ImageIcon}>
            <div className="flex flex-col gap-6">
              {/* Logo Section */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-slate-900 dark:text-gray-200 block">
                  Product Logo
                </span>
                <FileUpload
                  onUpload={(result) =>
                    setFormData({ ...formData, logoUrl: result.url })
                  }
                  showPreview={true}
                />
                {formData.logoUrl && (
                  <div className="mt-2 relative size-24 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 group">
                    <img
                      src={formData.logoUrl}
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setFormData({ ...formData, logoUrl: "" })}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Gallery Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900 dark:text-gray-200 block">
                    Product Gallery
                  </span>
                  <span className="text-xs text-gray-500">
                    {formData.images.length}/5 images
                  </span>
                </div>

                {formData.images.length < 5 && (
                  <FileUpload
                    onUpload={(result) =>
                      setFormData({
                        ...formData,
                        images: [...formData.images, result.url],
                      })
                    }
                    showPreview={false}
                  />
                )}

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {formData.images.map((img: string, idx: number) => (
                    <div
                      key={idx}
                      className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 aspect-video"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => {
                          const newImages = [...formData.images];
                          newImages.splice(idx, 1);
                          setFormData({ ...formData, images: newImages });
                        }}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-white text-[10px] font-bold rounded uppercase tracking-wider">
                        Image {idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FormSection>

          {/* Platform Support */}
          <FormSection title="Supported Platforms" icon={Monitor}>
            <div className="flex flex-wrap gap-2">
              {Object.entries(platforms).map(([key, value]) => (
                <label
                  key={key}
                  className={`inline-flex cursor-pointer select-none items-center rounded-full border px-3 py-1.5 transition-colors ${
                    value
                      ? "bg-[#2563eb]/10 border-[#2563eb] text-[#2563eb]"
                      : "border-gray-200 dark:border-gray-600 bg-white dark:bg-[#1e293b]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={value}
                    onChange={(e) =>
                      setPlatforms({ ...platforms, [key]: e.target.checked })
                    }
                  />
                  <span className="text-sm font-medium capitalize">{key}</span>
                </label>
              ))}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-dashed border-gray-300 dark:border-gray-500 px-3 py-1.5 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                <Plus className="w-4 h-4 mr-1" />
                <span className="text-sm">Add</span>
              </button>
            </div>
          </FormSection>

          {/* Team Access */}
          <FormSection title="Team Access">
            <div className="flex flex-col gap-3">
              {teamMembers.map((member: any) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="size-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="mt-2 w-full py-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 hover:text-[#2563eb] hover:border-[#2563eb] transition-colors flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Assign Member
              </button>
            </div>
          </FormSection>

          {/* Danger Zone */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-bold text-red-600 mb-2">Danger Zone</h4>
            <p className="text-xs text-gray-500 mb-4">
              Deleting this product is irreversible and will remove all
              associated documentation.
            </p>
            <button
              type="button"
              className="text-red-600 text-sm font-medium hover:underline flex items-center gap-1"
            >
              <Trash className="w-4 h-4" />
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
