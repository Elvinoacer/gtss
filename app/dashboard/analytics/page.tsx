import { prisma } from "@/lib/prisma";
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Eye, Package } from "lucide-react";

// Force dynamic rendering - don't try to pre-render at build time
export const dynamic = 'force-dynamic';

export default async function AnalyticsPage() {
  // Fetch analytics data
  const pageViews = await prisma.pageView.groupBy({
    by: ['path'],
    _count: {
      path: true,
    },
    orderBy: {
      _count: {
        path: 'desc',
      },
    },
  });

  const productViews = await prisma.productView.groupBy({
    by: ['productId'],
    _count: {
      productId: true,
    },
    orderBy: {
      _count: {
        productId: 'desc',
      },
    },
  });

  // Get product details for the views
  const productDetails = await prisma.product.findMany({
    where: {
      id: {
        in: productViews.map((pv) => pv.productId),
      },
    },
    select: {
      id: true,
      name: true,
    },
  });

  const productMap = new Map(productDetails.map((p) => [p.id, p.name]));

  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  return (
    <DashboardLayout user={user}>
      <div className="flex flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {/* Page Views Card */}
        <div className="rounded-xl border bg-card text-card-foreground shadow bg-white dark:bg-slate-900 dark:border-slate-800">
          <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Top Page Views</h3>
            <Eye className="h-4 w-4 text-muted-foreground text-slate-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {pageViews.length === 0 ? (
                <p className="text-sm text-muted-foreground text-slate-500">No page views recorded yet.</p>
              ) : (
                pageViews.map((view) => (
                  <div key={view.path} className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{view.path}</span>
                    </div>
                    <div className="font-bold">{view._count.path}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Product Views Card */}
        <div className="rounded-xl border bg-card text-card-foreground shadow bg-white dark:bg-slate-900 dark:border-slate-800">
          <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Top Product Views</h3>
            <Package className="h-4 w-4 text-muted-foreground text-slate-500" />
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {productViews.length === 0 ? (
                <p className="text-sm text-muted-foreground text-slate-500">No product views recorded yet.</p>
              ) : (
                productViews.map((view) => (
                  <div key={view.productId} className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {productMap.get(view.productId) || 'Unknown Product'}
                      </span>
                      <span className="text-xs text-muted-foreground text-slate-500">ID: {view.productId}</span>
                    </div>
                    <div className="font-bold">{view._count.productId}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}
