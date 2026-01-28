'use server';

import { 
  analyticsKPIs, 
  analyticsFeatures, 
  analyticsProducts, 
  analyticsDateRanges,
  deviceUsageData 
} from '@/data/analytics';
import { prisma } from '@/lib/prisma';

export async function getDashboardStats() {
  try {
    // Parallelize queries for efficiency
    const [
      totalRevenueResult,
      activeProductsCount,
      teamMembersCount,
      revenueByMonth
    ] = await Promise.all([
      // 1. Total Revenue (Sum of completed transactions)
      prisma.transaction.aggregate({
        _sum: { amount: true },
        where: { status: 'Completed' }
      }),
      
      // 2. Active Products
      prisma.product.count({
        where: { status: { in: ['live', 'beta', 'Active'] } } // Adjust based on your actual status values
      }),

      // 3. Team Members (Utilization)
      prisma.teamMember.count({
        where: { status: 'active' }
      }),

      // 4. Revenue Growth (Last 6 months)
      prisma.transaction.findMany({
        where: {
          status: 'Completed',
          date: {
            gte: new Date(new Date().setMonth(new Date().getMonth() - 6))
          }
        },
        select: {
          amount: true,
          date: true
        }
      })
    ]);

    // 5. System Status (From top products health)
    const systemHealthParams = {
      take: 4,
      orderBy: [
        { priority: 'asc' as const },
        { updatedAt: 'desc' as const }
      ],
      include: { health: true },
      where: { status: 'live' }
    };
    const productsWithHealth = await prisma.product.findMany(systemHealthParams);

    // 6. Recent Activity (Team joins & Tickets)
    const [recentMembers, recentTickets] = await Promise.all([
      prisma.teamMember.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: { user: true }
      }),
      prisma.ticket.findMany({
        take: 5,
        orderBy: { updatedAt: 'desc' },
        include: { product: true }
      })
    ]);

    const totalRevenue = totalRevenueResult._sum.amount || 0;

    // Process monthly revenue for the chart
    const monthlyRevenue = new Map<string, number>();
    revenueByMonth.forEach((t: any) => {
      const month = t.date.toLocaleString('default', { month: 'short' });
      monthlyRevenue.set(month, (monthlyRevenue.get(month) || 0) + t.amount);
    });

    // Formatting System Status
    const systemStatus = productsWithHealth.map(p => {
       // Determine overall status based on health metrics or default to operational
       const isDown = p.health.some(h => h.value === 'Down' || h.percentage < 90);
       const isDegraded = p.health.some(h => h.percentage < 98 && h.percentage >= 90);
       
       let status = 'operational';
       if (isDown) status = 'error';
       else if (isDegraded) status = 'warning';

       return {
         name: p.name,
         status: status,
         statusLabel: isDown ? 'Downtime' : isDegraded ? 'Degraded' : 'Operational'
       };
    });

    // Formatting Member Activity
    const activities = [
      ...recentMembers.map(m => ({
        id: `member-${m.id}`,
        type: 'member_join',
        title: `${m.name} joined the Team`,
        description: `Joined as ${m.role}`,
        time: m.createdAt.toISOString(),
        iconName: 'UserPlus'
      })),
      ...recentTickets.map(t => ({
        id: `ticket-${t.id}`,
        type: 'ticket_update',
        title: `Ticket ${t.ticketNumber} Updated`,
        description: t.subject,
        time: t.updatedAt.toISOString(),
        iconName: 'Ticket'
      }))
    ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
     .slice(0, 5); // Keep only top 5 recent mixed activities

    // Convert map to array for the chart
    return {
      success: true,
      data: {
        kpis: [
         {
            label: 'Total Revenue (MRR)',
            value: `$${totalRevenue.toLocaleString()}`,
            trend: { direction: 'neutral', value: '0%', label: 'calculated live' },
            iconName: 'DollarSign',
            iconBg: 'bg-emerald-50 dark:bg-emerald-900/30',
            iconColor: 'text-emerald-600 dark:text-emerald-400',
          },
          {
            label: 'Active Products',
            value: activeProductsCount.toString(),
            trend: { direction: 'neutral', value: 'Live', label: 'products' },
            iconName: 'Package',
            iconBg: 'bg-blue-50 dark:bg-blue-900/30',
            iconColor: 'text-blue-600 dark:text-blue-400',
          },
          {
            label: 'Team Utilization',
            value: teamMembersCount.toString(),
            trend: { direction: 'neutral', value: 'Active', label: 'members' },
            iconName: 'Users',
            iconBg: 'bg-indigo-50 dark:bg-indigo-900/30',
            iconColor: 'text-indigo-600 dark:text-indigo-400',
          },
          {
            label: 'Server Uptime',
            value: '99.9%', // Hardcoded for now
            trend: { direction: 'neutral', value: 'Stable', label: 'monitored' },
            iconName: 'Server',
            iconBg: 'bg-amber-50 dark:bg-amber-900/30',
            iconColor: 'text-amber-600 dark:text-amber-400',
          }
        ],
        revenueChart: Array.from(monthlyRevenue, ([name, total]) => ({ name, total })),
        systemStatus: systemStatus.length > 0 ? systemStatus : [],
        recentActivity: activities
      }
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return { success: false, error: 'Failed to fetch dashboard stats' };
  }
}

export async function getAnalyticsData() {
  // Maintaining this for backward compatibility with other pages (e.g., Analytics page)
  // Returning dummy data for now as those pages expect specific structures
  try {
    return {
      success: true,
      data: {
        kpis: analyticsKPIs,
        features: analyticsFeatures,
        products: analyticsProducts,
        dateRanges: analyticsDateRanges,
        deviceUsage: deviceUsageData,
      }
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    return { success: false, error: 'Failed to fetch analytics data' };
  }
}
