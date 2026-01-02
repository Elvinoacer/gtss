'use client';

import { Search, ChevronRight, History, HelpCircle, Link as LinkIcon, ChevronDown, Copy, Download, Code, BarChart3, Headphones, MoreVertical, Settings, Palette, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getQRGeneratorData } from '@/lib/actions/qr-generator';

interface QRGeneratorClientProps {
  initialData: any;
}

export function QRGeneratorClient({ initialData }: QRGeneratorClientProps) {
  const { data = initialData } = useQuery({
    queryKey: ['qr-generator-data'],
    queryFn: async () => {
      const response = await getQRGeneratorData();
      return response.success ? response.data : initialData;
    },
    initialData: initialData,
  });

  const [selectedColor, setSelectedColor] = useState('black');
  const [addLogo, setAddLogo] = useState(true);

  const recentActivity = data.recentActivity.map((item: any) => ({
    ...item,
    icon: item.type === 'analytics' ? BarChart3 : Headphones
  }));

  return (
    <div className="flex-1">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#2563eb] font-medium">
          Dashboard
        </a>
        <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#2563eb] font-medium">
          Tools
        </a>
        <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        <span className="text-slate-900 dark:text-white font-semibold">QR Generator</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            QR Code Generator
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl">
            Create tracked QR codes and referral links for GTSS products. Manage campaigns and monitor scan analytics.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <History className="w-5 h-5" />
            History
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#2563eb] bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-lg hover:bg-[#2563eb]/20">
            <HelpCircle className="w-5 h-5" />
            Guide
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Configuration Form */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          {/* Main Configuration Card */}
          <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#2563eb]" />
              Configuration
            </h3>
            <div className="space-y-6">
              {/* Product Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900 dark:text-gray-200">
                  Select Product
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-slate-900 dark:text-white h-12 px-4 pr-10 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none transition-shadow">
                    <option value="">Select a product to promote...</option>
                    {data.products.map((product: any) => (
                      <option key={product.value} value={product.value}>{product.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 dark:text-gray-400 w-10 h-full" />
                </div>
              </div>

              {/* Content Type Toggle */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900 dark:text-gray-200">
                  QR Content Type
                </label>
                <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-full sm:w-fit">
                  <button className="flex-1 sm:flex-none px-6 py-2 rounded-md bg-white dark:bg-gray-700 shadow-sm text-sm font-medium text-[#2563eb] dark:text-white transition-all">
                    Website URL
                  </button>
                  <button className="flex-1 sm:flex-none px-6 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all">
                    Plain Text
                  </button>
                  <button className="flex-1 sm:flex-none px-6 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all">
                    vCard Contact
                  </button>
                </div>
              </div>

              {/* Target URL Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900 dark:text-gray-200">
                  Destination URL
                </label>
                <div className="relative group">
                  <LinkIcon className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-600 dark:text-gray-400 group-focus-within:text-[#2563eb] w-11 h-full" />
                  <input
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-slate-900 dark:text-white h-12 pl-11 pr-4 focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none placeholder-gray-400"
                    placeholder="https://gtss.io/product/..."
                    type="url"
                    defaultValue="https://gtss.io/products/crm-enterprise"
                  />
                </div>
              </div>

              {/* UTM Parameters */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <details className="group" open>
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 dark:text-white pb-4">
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      Campaign Tracking (UTM)
                    </span>
                    <ChevronDown className="transition group-open:rotate-180 text-gray-600 dark:text-gray-400 w-5 h-5" />
                  </summary>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                        Source
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-10 px-3 text-sm focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none"
                        placeholder="e.g. linkedin, newsletter"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                        Medium
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-10 px-3 text-sm focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none"
                        placeholder="e.g. social, email"
                      />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                      <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                        Campaign Name
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-10 px-3 text-sm focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none"
                        placeholder="e.g. q4_launch_promo"
                      />
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#2563eb]" />
              Design Customization
            </h3>
            <div className="flex flex-wrap gap-8">
              <div className="space-y-3">
                <span className="block text-sm font-semibold text-slate-900 dark:text-gray-200">
                  Color Theme
                </span>
                <div className="flex items-center gap-3">
                  {data.colors.map((color: any) => (
                    <label key={color.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        checked={selectedColor === color.id}
                        onChange={() => setSelectedColor(color.id)}
                        className="peer sr-only"
                      />
                      <div
                        className="h-8 w-8 rounded-full peer-checked:ring-2 peer-checked:ring-offset-2"
                        style={{
                          backgroundColor: color.value,
                        }}
                      ></div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <span className="block text-sm font-semibold text-slate-900 dark:text-gray-200">
                  Branding
                </span>
                <label className="inline-flex items-center cursor-pointer gap-3">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={addLogo}
                      onChange={(e) => setAddLogo(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2563eb]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Add Center Logo
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Preview & Actions */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 sticky top-8">
          <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
              <span className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Live Preview
              </span>
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="p-8 flex flex-col items-center justify-center bg-white dark:bg-[#1e293b] min-h-[320px]">
              <div className="relative group cursor-pointer">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 dark:bg-white">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://gtss.io/products/crm-enterprise"
                    alt="Generated QR Code"
                    className="w-48 h-48 object-contain"
                  />
                  {addLogo && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-sm">
                      <div className="bg-[#2563eb] text-white p-1 rounded-full">
                        <QrCode className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to enlarge
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 space-y-4">
              {/* Copy Link Box */}
              <div className="flex items-center gap-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm">
                <div className="px-3 text-gray-600 dark:text-gray-400">
                  <LinkIcon className="w-4 h-4" />
                </div>
                <input
                  className="flex-1 text-sm text-slate-900 dark:text-white py-2.5 border-none focus:ring-0 bg-transparent truncate"
                  readOnly
                  value="https://gtss.io/l/x8j29s"
                />
                <button
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 border-l border-gray-300 dark:border-gray-600 text-[#2563eb] transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-all"
                >
                  <Download className="w-5 h-5" />
                  PNG
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-slate-900 dark:text-white border border-gray-300 dark:border-gray-600 font-medium py-2.5 px-4 rounded-lg shadow-sm transition-all"
                >
                  <Code className="w-5 h-5" />
                  SVG
                </motion.button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Recent Activity
              </h4>
            </div>
            <ul className="divide-y divide-gray-100 dark:divide-gray-700">
              {recentActivity.map((item: any) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${item.bgColor} p-2 rounded-lg ${item.iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {item.time}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-[#2563eb] p-1">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <a
              href="#"
              className="block w-full text-center py-3 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-[#2563eb] bg-gray-50 dark:bg-gray-800/50"
            >
              View All History
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
