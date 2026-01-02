export interface DeploymentStat {
  label: string;
  value: string;
  trend: string;
  isWarning?: boolean;
  type: 'active' | 'progress' | 'failed' | 'completed';
}

export interface Deployment {
  company: string;
  environment: 'PROD' | 'STAGING' | 'DEV';
  product: string;
  status: 'deploying' | 'failed' | 'success' | 'queued';
  progress?: number;
  progressLabel?: string;
  error?: string;
  completedTime?: string;
  checklist: {
    label: string;
    status: 'completed' | 'in-progress' | 'pending' | 'failed';
  }[];
  metadata?: {
    duration?: string;
    version?: string;
    scheduledFor?: string;
    team?: {
      name: string;
      avatars: string[];
    };
  };
}

export const deploymentStatsList: DeploymentStat[] = [
  {
    label: 'Total Active',
    value: '124',
    trend: '+12% vs last week',
    type: 'active',
  },
  {
    label: 'In Progress',
    value: '18',
    trend: '4 queued',
    type: 'progress',
  },
  {
    label: 'Failed Issues',
    value: '3',
    trend: 'Requires attention',
    isWarning: true,
    type: 'failed',
  },
  {
    label: 'Completed Today',
    value: '45',
    trend: '98% success rate',
    type: 'completed',
  },
];

export const deploymentsList: Deployment[] = [
  {
    company: 'Acme Corp',
    environment: 'PROD',
    product: 'GTSS Analytics v2.4.1 Update',
    status: 'deploying',
    progress: 75,
    progressLabel: 'Installing Dependencies...',
    checklist: [
      { label: 'Environment Check', status: 'completed' },
      { label: 'Database Backup', status: 'completed' },
      { label: 'Update Binaries', status: 'in-progress' },
      { label: 'Health Check', status: 'pending' },
    ],
  },
  {
    company: 'Wayne Enterprises',
    environment: 'STAGING',
    product: 'GTSS HR Platform v1.2',
    status: 'failed',
    error: 'Error: Connection timeout during SQL migration. Port 5432 unreachable.',
    checklist: [
      { label: 'Init Sequence', status: 'completed' },
      { label: 'Database Migration', status: 'failed' },
      { label: 'Services Restart', status: 'pending' },
    ],
  },
  {
    company: 'Cyberdyne Systems',
    environment: 'PROD',
    product: 'Security Patch #8842',
    status: 'success',
    progress: 100,
    completedTime: '2 hours ago',
    checklist: [],
    metadata: {
      duration: '4m 12s',
      version: 'v2.4.2 → v2.4.3',
      team: {
        name: 'Team Alpha',
        avatars: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        ],
      },
    },
  },
  {
    company: 'Stark Industries',
    environment: 'DEV',
    product: 'Experimental Jarvis Build',
    status: 'queued',
    checklist: [],
    metadata: {
      scheduledFor: '14:00 today',
    },
  },
];
