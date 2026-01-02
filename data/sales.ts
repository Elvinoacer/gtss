

export interface SalesKPI {
  label: string;
  value: string;
  trend: {
    direction: 'up' | 'down' | 'stable';
    value: string;
  };
  iconName: string;
  iconBg: string;
  iconColor: string;
}

export interface PerformanceData {
  month: string;
  actual: number;
  target: number;
  highlight?: boolean;
}

export interface Performer {
  name: string;
  amount: string;
  progress: number;
  avatar: string;
  isTop?: boolean;
}

export interface Transaction {
  deal: string;
  client: string;
  rep: string;
  repAvatar: string;
  amount: string;
  status: string;
  statusColor: string;
  statusIconName: string;
  date: string;
}

export const salesKPIs: SalesKPI[] = [
  {
    label: 'Total Revenue',
    value: '$1,240,500',
    trend: { direction: 'up', value: '12.5%' },
    iconName: 'DollarSign',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    label: 'Active Leads',
    value: '428',
    trend: { direction: 'up', value: '8.2%' },
    iconName: 'Users',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    label: 'Conversion Rate',
    value: '24.5%',
    trend: { direction: 'stable', value: '0.4%' },
    iconName: 'Percent',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    label: 'Avg Deal Size',
    value: '$12,450',
    trend: { direction: 'down', value: '2.1%' },
    iconName: 'ShoppingBag',
    iconBg: 'bg-warning/10',
    iconColor: 'text-warning',
  },
];

export const performanceData: PerformanceData[] = [
  { month: 'Jul', actual: 70, target: 100 },
  { month: 'Aug', actual: 85, target: 100 },
  { month: 'Sep', actual: 92, target: 100 },
  { month: 'Oct', actual: 65, target: 100 },
  { month: 'Nov', actual: 88, target: 100 },
  { month: 'Dec', actual: 100, target: 100, highlight: true },
];

export const topPerformers: Performer[] = [
  {
    name: 'Sarah Jenkins',
    amount: '$420k',
    progress: 92,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    isTop: true,
  },
  {
    name: 'Michael Chen',
    amount: '$340k',
    progress: 78,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Jessica Ross',
    amount: '$215k',
    progress: 60,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'David Kim',
    amount: '$180k',
    progress: 45,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export const recentTransactions: Transaction[] = [
  {
    deal: 'Enterprise License Q3',
    client: 'TechFlow Inc.',
    rep: 'Sarah J.',
    repAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    amount: '$125,000',
    status: 'Closed Won',
    statusColor: 'bg-success/10 text-success',
    statusIconName: 'CheckCircle',
    date: 'Oct 24, 2023',
  },
  {
    deal: 'Cloud Migration Service',
    client: 'Apex Global',
    rep: 'Michael C.',
    repAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    amount: '$45,200',
    status: 'Negotiation',
    statusColor: 'bg-warning/10 text-warning',
    statusIconName: 'Clock',
    date: 'Oct 23, 2023',
  },
  {
    deal: 'Platform Audit',
    client: 'BlueSky Logistics',
    rep: 'David K.',
    repAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    amount: '$8,500',
    status: 'Closed Won',
    statusColor: 'bg-success/10 text-success',
    statusIconName: 'CheckCircle',
    date: 'Oct 22, 2023',
  },
  {
    deal: 'SaaS Renewal 2024',
    client: 'GreenLeaf Systems',
    rep: 'Jessica R.',
    repAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    amount: '$32,000',
    status: 'Proposal Sent',
    statusColor: 'bg-accent/10 text-accent',
    statusIconName: 'Send',
    date: 'Oct 21, 2023',
  },
];

export const salesDateRanges = [
  { value: 'q3', label: 'This Quarter (Q3)' },
  { value: 'last_30', label: 'Last 30 Days' },
  { value: 'last_year', label: 'Last Year' },
];

export const salesRepsList = [
  { value: 'all', label: 'All Representatives' },
  { value: 'sarah', label: 'Sarah Jenkins' },
  { value: 'mike', label: 'Mike Ross' },
];
