'use client';

import { KPICard, FeatureRow } from '@/components/analytics';
import { Share2, Download, MoreHorizontal, ChevronDown, Package, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { getAnalyticsData } from '@/lib/actions/analytics';
import { useState } from 'react';

interface AnalyticsClientProps {
  initialData: any;
}

export function AnalyticsClient({ initialData }: AnalyticsClientProps) {
  const { data: analytics = initialData } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const response = await getAnalyticsData();
      return response.success ? response.data : initialData;
    },
    initialData: initialData,
  });

  const { kpis, features, products, dateRanges, deviceUsage } = analytics;

  return (
    <div className="flex-1">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <a href="/dashboard" className="hover:text-[#194ce6] transition-colors">
          Home
        </a>
        <span className="text-gray-300 dark:text-gray-600">/</span>
        <span className="text-slate-900 dark:text-white font-medium">Analytics</span>
      </div>

      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">
            Product Analytics
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
            Monitor key performance indicators and product health metrics across the portfolio.
          </p>
        </div>
      </div>

      {/* Toolbar / Filters */}
      <div className="flex flex-col xl:flex-row justify-between gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 mb-6">
        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full xl:w-auto">
          {/* Product Select */}
          <div className="relative w-full sm:w-64">
            <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            <select className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-[#194ce6]/20 focus:border-[#194ce6] appearance-none cursor-pointer">
              {products.map((product: string) => (
                <option key={product}>{product}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>

          {/* Date Range Select */}
          <div className="relative w-full sm:w-48">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            <select className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-[#194ce6]/20 focus:border-[#194ce6] appearance-none cursor-pointer">
              {dateRanges.map((range: string) => (
                <option key={range}>{range}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-semibold transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#194ce6] hover:bg-[#194ce6]/90 text-white shadow-sm shadow-[#194ce6]/30 text-sm font-semibold transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Export CSV</span>
          </motion.button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi: any, index: number) => (
          <KPICard key={index} {...kpi} index={index} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Main Line Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                User Growth Trends
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Daily active users over the last 30 days
              </p>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className="w-full h-64 relative">
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400">
              <div className="border-b border-dashed border-gray-100 dark:border-gray-700 w-full h-0"></div>
              <div className="border-b border-dashed border-gray-100 dark:border-gray-700 w-full h-0"></div>
              <div className="border-b border-dashed border-gray-100 dark:border-gray-700 w-full h-0"></div>
              <div className="border-b border-dashed border-gray-100 dark:border-gray-700 w-full h-0"></div>
              <div className="border-b border-gray-200 dark:border-gray-700 w-full h-0"></div>
            </div>

            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#194ce6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#194ce6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L0,60 Q10,55 20,65 T40,50 T60,30 T80,40 T100,20 L100,100 Z"
                fill="url(#gradient)"
              />
              <path
                d="M0,60 Q10,55 20,65 T40,50 T60,30 T80,40 T100,20"
                fill="none"
                stroke="#194ce6"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="absolute bottom-[-24px] left-0 right-0 flex justify-between text-xs text-gray-400 px-2">
              <span>May 01</span>
              <span>May 08</span>
              <span>May 15</span>
              <span>May 22</span>
              <span>May 29</span>
            </div>
          </div>
        </div>

        {/* Donut Chart / Device Usage */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Device Usage</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Platform distribution</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div
              className="relative size-48 rounded-full mb-6"
              style={{
                background: `conic-gradient(${deviceUsage
                  .map((d: any, i: number) => {
                    const prevSum = deviceUsage
                      .slice(0, i)
                      .reduce((acc: number, curr: any) => acc + curr.percentage, 0);
                    return `${d.color} ${prevSum}% ${prevSum + d.percentage}%`;
                  })
                  .join(', ')})`,
              }}
            >
              <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">12k</p>
                  <p className="text-xs text-gray-500">Total Users</p>
                </div>
              </div>
            </div>
            <div className="w-full space-y-3">
              {deviceUsage.map((device: any) => (
                <div key={device.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: device.color }}
                    ></div>
                    <span className="text-gray-600 dark:text-gray-300">{device.label}</span>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {device.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Top Feature Usage
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Most engaged modules within the selected period
            </p>
          </div>
          <a href="#" className="text-sm text-[#194ce6] font-medium hover:underline">
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Feature Name
                </th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  Category
                </th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">
                  Unique Users
                </th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right hidden sm:table-cell">
                  Avg. Time
                </th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {features.map((feature: any, index: number) => (
                <FeatureRow key={index} {...feature} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
