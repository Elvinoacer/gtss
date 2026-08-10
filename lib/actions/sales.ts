'use server';

import { salesDateRanges } from '@/data/sales';
import { prisma } from '@/lib/prisma';

export async function getSalesData() {
  try {
    const [
      transactions,
      leads,
      teamMembers,
    ] = await Promise.all([
      prisma.transaction.findMany({
        include: {
          customer: true,
        },
        orderBy: {
          date: 'desc',
        },
      }),
      prisma.lead.findMany(),
      prisma.teamMember.findMany({
        where: {
          OR: [
            { role: { contains: 'Sales', mode: 'insensitive' } },
            { role: { contains: 'Account Manager', mode: 'insensitive' } },
            { team: { contains: 'Sales', mode: 'insensitive' } }
          ]
        }
      })
    ]);

    // Calculate KPIs
    const completedTransactions = transactions.filter(t => t.status === 'Completed' || t.status === 'Closed Won');
    const totalRevenue = completedTransactions.reduce((acc, t) => acc + t.amount, 0);
    const activeLeads = leads.filter(l => l.status !== 'lost').length;
    const qualifiedLeads = leads.filter(l => l.status === 'qualified').length;
    const conversionRate = leads.length > 0 ? (qualifiedLeads / leads.length) * 100 : 0;
    const avgDealSize = completedTransactions.length > 0 ? totalRevenue / completedTransactions.length : 0;

    // Map lead email to rep info (name, avatar)
    const emailToRep = new Map<string, { name: string, avatar: string | null }>();
    leads.forEach(l => {
      if (l.assignedRep) emailToRep.set(l.email, { name: l.assignedRep, avatar: l.avatar });
    });

    // Calculate performance for all relevant team members
    const performersMap = new Map<string, { amount: number, avatar: string }>();
    
    // Initialize with all sales team members
    teamMembers.forEach(m => {
       performersMap.set(m.name, { 
         amount: 0, 
         avatar: m.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' 
       });
    });

    completedTransactions.forEach(t => {
      const rep = emailToRep.get(t.customer.email);
      if (rep && performersMap.has(rep.name)) {
        const current = performersMap.get(rep.name)!;
        performersMap.set(rep.name, { ...current, amount: current.amount + t.amount });
      }
    });

    const performers = Array.from(performersMap, ([name, data]) => ({
      name,
      amount: `$${(data.amount / 1000).toFixed(0)}k`,
      progress: Math.min(Math.round((data.amount / 500000) * 100), 100), // Target: 500k
      avatar: data.avatar,
      isTop: false
    })).sort((a, b) => {
        const valA = parseFloat(a.amount.replace('$', '').replace('k', ''));
        const valB = parseFloat(b.amount.replace('$', '').replace('k', ''));
        return valB - valA;
    });

    if (performers.length > 0) performers[0].isTop = true;

    // Revenue vs Target (Last 6 months)
    const monthlyData = new Map<string, number>();
    completedTransactions.forEach(t => {
      const month = t.date.toLocaleString('default', { month: 'short' });
      monthlyData.set(month, (monthlyData.get(month) || 0) + t.amount);
    });

    // We want last 6 months in order
    const last6Months: Array<{ month: string; actual: number; target: number; highlight: boolean }> = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const m = d.toLocaleString('default', { month: 'short' });
      last6Months.push({
        month: m,
        actual: Math.round(((monthlyData.get(m) || 0) / 100000) * 100), // Assuming 100k target
        target: 100,
        highlight: i === 0
      });
    }

    return {
      success: true,
      data: {
        kpis: [
          {
            label: 'Total Revenue',
            value: `$${totalRevenue.toLocaleString()}`,
            trend: { direction: 'up', value: 'Live' },
            iconName: 'DollarSign',
            iconBg: 'bg-accent/10',
            iconColor: 'text-accent',
          },
          {
            label: 'Active Leads',
            value: activeLeads.toString(),
            trend: { direction: 'up', value: 'Live' },
            iconName: 'Users',
            iconBg: 'bg-accent/10',
            iconColor: 'text-accent',
          },
          {
            label: 'Conversion Rate',
            value: `${conversionRate.toFixed(1)}%`,
            trend: { direction: 'stable', value: 'Live' },
            iconName: 'Percent',
            iconBg: 'bg-accent/10',
            iconColor: 'text-accent',
          },
          {
            label: 'Avg Deal Size',
            value: `$${avgDealSize.toLocaleString()}`,
            trend: { direction: 'neutral', value: 'Live' },
            iconName: 'ShoppingBag',
            iconBg: 'bg-warning/10',
            iconColor: 'text-warning',
          },
        ],
        dateRanges: salesDateRanges,
        reps: [
          { label: 'All Representatives', value: 'all' },
          ...teamMembers.map(m => ({
            label: m.name,
            value: m.name // Using name as value since that's what seems to be used for filtering currently, or maybe ID if we update the filter logic
          }))
        ],
        transactions: transactions.map(t => {
            const rep = emailToRep.get(t.customer.email);
            return {
                id: t.id,
                deal: t.product,
                client: t.customer.name,
                rep: rep ? rep.name : 'Unassigned',
                repAvatar: rep?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
                amount: `$${t.amount.toLocaleString()}`,
                status: t.status,
                statusColor: t.status === 'Completed' || t.status === 'Closed Won' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning',
                statusIconName: t.status === 'Completed' || t.status === 'Closed Won' ? 'CheckCircle' : 'Clock',
                date: t.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            }
        }),
        performanceData: last6Months,
        topPerformers: performers
      }
    };
  } catch (error) {
    console.error('Error fetching sales data:', error);
    return { success: false, error: 'Failed to fetch sales data' };
  }
}
