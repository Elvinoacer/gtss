'use client';

import { StatCard, RevenueChart, SystemStatus, ProductsTable, MemberActivity } from '@/components/dashboard';
import { DollarSign, Package, Users, Server, Calendar, ChevronDown } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/lib/actions/products';

interface DashboardClientProps {
  initialProducts: any[];
  dashboardStats: any;
}

const iconMap: Record<string, any> = {
  DollarSign,
  Package,
  Users,
  Server,
};

export function DashboardClient({ initialProducts, dashboardStats }: DashboardClientProps) {
  const { data: products = initialProducts } = useQuery({
    queryKey: ['dashboard-products'],
    queryFn: async () => {
      const response = await getProducts();
      return response.success ? response.data : initialProducts;
    },
    initialData: initialProducts,
  });

  const kpis = dashboardStats?.kpis || [
    {
      label: 'Total Revenue (MRR)',
      value: '$0',
      trend: { value: '0%', type: 'neutral' },
      iconName: 'DollarSign',
    },
    {
      label: 'Active Products',
      value: '0',
      trend: { value: '0 New', type: 'neutral' },
      iconName: 'Package',
    },
    {
      label: 'Team Utilization',
      value: '0',
      trend: { value: '0%', type: 'neutral' },
      iconName: 'Users',
    },
    {
      label: 'Server Uptime',
      value: '99.9%',
      trend: { value: 'Stable', type: 'neutral' },
      iconName: 'Server',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            Welcome back, Founder
          </h1>
          <p className="text-gray-500 dark:text-slate-400 mt-1">
            Here is your company overview
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 bg-white dark:bg-[#1e293b] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
          <Calendar className="w-4 h-4" />
          <span>Last 30 Days</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi: any, index: number) => {
          const Icon = iconMap[kpi.iconName] || DollarSign;
             // trend from backend might differ slightly in structure, adapting here
           const trendType = kpi.trend.direction === 'up' ? 'increase' : kpi.trend.direction === 'down' ? 'decrease' : 'neutral';
           const change = {
             value: kpi.trend.value,
             type: trendType as 'increase' | 'decrease' | 'neutral',
             label: kpi.trend.label
           };

          return (
            <StatCard
              key={index}
              title={kpi.label}
              value={kpi.value}
              change={change}
              icon={Icon}
              index={index}
            />
          );
        })}
      </div>

      {/* Middle Section: Charts & Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={dashboardStats?.revenueChart || []} />
        </div>
        <SystemStatus data={dashboardStats?.systemStatus} />
      </div>

      {/* Bottom Section: Active Products Table & Member Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductsTable initialProducts={products} />
        </div>
        <MemberActivity data={dashboardStats?.recentActivity} />
      </div>
    </div>
  );
}
