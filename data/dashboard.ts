import { UserPlus, Rocket, BadgeCheck, AlertTriangle, Lock } from 'lucide-react';

export const dashboardActivities = [
  {
    id: 1,
    icon: UserPlus,
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-100 dark:bg-blue-500/10',
    title: 'Emma W. joined the Team',
    description: 'Assigned to GTSS Analytics project.',
    time: '12 mins ago',
  },
  {
    id: 2,
    icon: Rocket,
    iconColor: 'text-[#0bda62]',
    iconBg: 'bg-[#0bda62]/10',
    title: 'Deployment Successful',
    description: 'ThumbPay Core v2.4.0 is live.',
    time: '1 hour ago',
  },
  {
    id: 3,
    icon: BadgeCheck,
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-100 dark:bg-purple-500/10',
    title: 'Role Updated',
    description: 'Mike T. promoted to Senior Lead.',
    time: '4 hours ago',
  },
  {
    id: 4,
    icon: AlertTriangle,
    iconColor: 'text-[#f59e0b]',
    iconBg: 'bg-[#f59e0b]/10',
    title: 'System Alert',
    description: 'High latency on Dev Portal endpoint.',
    time: 'Yesterday',
  },
  {
    id: 5,
    icon: Lock,
    iconColor: 'text-gray-600 dark:text-gray-400',
    iconBg: 'bg-gray-100 dark:bg-gray-700',
    title: 'Security Update',
    description: 'Admin user updated 2FA settings.',
    time: '2 days ago',
  },
];

export const dashboardProducts = [
  {
    id: '1',
    name: 'ThumbPay',
    category: 'Fintech Solution',
    initials: 'TP',
    gradient: 'from-blue-500 to-indigo-600',
    stage: { label: 'Production', color: 'blue' },
    teamLead: {
      name: 'Sarah J.',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    mrr: '$845,000',
    health: 95,
  },
  {
    id: '2',
    name: 'GTSS Analytics',
    category: 'Data Platform',
    initials: 'GA',
    gradient: 'from-purple-500 to-pink-600',
    stage: { label: 'Beta', color: 'purple' },
    teamLead: {
      name: 'Mike T.',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    mrr: '$120,000',
    health: 88,
  },
  {
    id: '3',
    name: 'CloudSync',
    category: 'Infrastructure',
    initials: 'CS',
    gradient: 'from-orange-400 to-red-500',
    stage: { label: 'Alpha', color: 'amber' },
    teamLead: { name: 'Lisa M.' },
    mrr: '-',
    health: 60,
  },
];

export const revenueChartData = {
  labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  points: [
    { cx: 200, cy: 140 },
    { cx: 400, cy: 160 },
    { cx: 600, cy: 100 },
    { cx: 800, cy: 50 },
  ],
};

export interface SystemService {
  name: string;
  status: 'operational' | 'warning' | 'error';
  statusLabel: string;
}

export const systemServices: SystemService[] = [
  { name: 'ThumbPay Core', status: 'operational', statusLabel: 'Operational' },
  { name: 'GTSS Analytics', status: 'operational', statusLabel: 'Operational' },
  { name: 'Dev Portal', status: 'warning', statusLabel: 'High Latency' },
  { name: 'Client API', status: 'operational', statusLabel: 'Operational' },
];
