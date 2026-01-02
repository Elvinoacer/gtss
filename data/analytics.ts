

export interface KPI {
  label: string;
  value: string;
  trend: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
    label: string;
  };
  iconName: string;
  iconBg: string;
  iconColor: string;
}

export interface FeatureUsage {
  name: string;
  category: string;
  users: string;
  avgTime: string;
  trend: {
    direction: 'up' | 'down' | 'stable';
    value: string;
  };
}

export interface DeviceUsage {
  label: string;
  value: string;
  color: string;
  percentage: number;
}

export const analyticsKPIs: KPI[] = [
  {
    label: 'Total Active Users',
    value: '12,450',
    trend: { direction: 'up', value: '+5.2%', label: 'vs last period' },
    iconName: 'Users',
    iconBg: 'bg-blue-50 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    label: 'Avg. Session Time',
    value: '4m 12s',
    trend: { direction: 'down', value: '-1.2%', label: 'vs last period' },
    iconName: 'Clock',
    iconBg: 'bg-purple-50 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    label: 'Retention Rate',
    value: '88.4%',
    trend: { direction: 'up', value: '+2.0%', label: 'vs last period' },
    iconName: 'Repeat',
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    label: 'Crash Free Users',
    value: '99.8%',
    trend: { direction: 'neutral', value: 'Stable', label: 'vs last period' },
    iconName: 'Bug',
    iconBg: 'bg-amber-50 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
];

export const analyticsFeatures: FeatureUsage[] = [
  {
    name: 'Dashboard Overview',
    category: 'Core',
    users: '8,450',
    avgTime: '1m 20s',
    trend: { direction: 'up', value: '12%' },
  },
  {
    name: 'Reports Generator',
    category: 'Analytics',
    users: '5,120',
    avgTime: '5m 45s',
    trend: { direction: 'up', value: '8%' },
  },
  {
    name: 'User Management',
    category: 'Admin',
    users: '2,230',
    avgTime: '2m 10s',
    trend: { direction: 'stable', value: '0%' },
  },
  {
    name: 'API Integration',
    category: 'Developer',
    users: '1,050',
    avgTime: '8m 15s',
    trend: { direction: 'down', value: '3%' },
  },
];

export const deviceUsageData: DeviceUsage[] = [
  { label: 'Desktop Web', value: '65%', color: '#194ce6', percentage: 65 },
  { label: 'Mobile App', value: '20%', color: '#10b981', percentage: 20 },
  { label: 'Tablet', value: '15%', color: '#f59e0b', percentage: 15 },
];

export const analyticsProducts = [
  'All Products',
  'GTSS Core Platform',
  'Mobile Connect',
  'API Gateway',
];

export const analyticsDateRanges = [
  'Last 30 Days',
  'Last 7 Days',
  'This Quarter',
  'Year to Date',
];
