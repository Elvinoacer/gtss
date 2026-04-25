'use client';

import { StatCard, RevenueChart, SystemStatus, ProductsTable, MemberActivity } from '@/components/dashboard';
import { DollarSign, Package, Users, Server, Calendar, ChevronDown, Activity } from 'lucide-react';
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
      label: 'TOTAL_REVENUE_MRR',
      value: '$0',
      trend: { value: '0%', direction: 'neutral' },
      iconName: 'DollarSign',
    },
    {
      label: 'ACTIVE_SYSTEM_NODES',
      value: '0',
      trend: { value: '0 New', direction: 'neutral' },
      iconName: 'Package',
    },
    {
      label: 'OPERATIONAL_CAPACITY',
      value: '0',
      trend: { value: '0%', direction: 'neutral' },
      iconName: 'Users',
    },
    {
      label: 'INFRASTRUCTURE_UPTIME',
      value: '99.9%',
      trend: { value: 'Stable', direction: 'neutral' },
      iconName: 'Server',
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto space-y-10">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)] pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-[var(--gold)]" />
            <span className="text-[10px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-widest">System_Status: Operational</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bebas tracking-wider text-[var(--text)] uppercase">
            Command <span className="text-[var(--gold)]">Center</span>
          </h1>
          <p className="font-cormorant italic text-xl text-[var(--text-muted)] mt-2">
            Enterprise-grade management & strategic oversight
          </p>
        </div>
        <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] px-4 py-2 hover:border-[var(--gold-dim)] transition-colors cursor-pointer group">
          <Calendar className="w-4 h-4 text-[var(--gold-dim)] group-hover:text-[var(--gold)]" />
          <span className="text-xs font-mono-dm uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text)]">Timeframe: Last 30 Days</span>
          <ChevronDown className="w-4 h-4 text-[var(--gold-dim)]" />
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi: any, index: number) => {
          const Icon = iconMap[kpi.iconName] || DollarSign;
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RevenueChart data={dashboardStats?.revenueChart || []} />
        </div>
        <div className="h-full">
          <SystemStatus data={dashboardStats?.systemStatus} />
        </div>
      </div>

      {/* Bottom Section: Active Products Table & Member Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductsTable initialProducts={products} />
        </div>
        <div>
          <MemberActivity data={dashboardStats?.recentActivity} />
        </div>
      </div>
    </div>
  );
}
