export interface ProductIdentityFormData {
  name: string;
  version: string;
  category: string;
  description: string;
  tags: string[];
  logoUrl: string;
  instructions?: string;
  features?: { title: string; description: string; icon: string }[];
  pricingModel?: string;
  priceUSD?: string;
  priceKES?: string;
  billingCycle?: string;
  demoVideoUrl?: string;
  images?: string[];
  tagline?: string;
  technicalArchitecture?: string;
  health?: { label: string; value: string; percentage: number; color: string }[];
  assets?: { type: string; title: string; subtitle: string; href: string }[];
  reviews?: { authorName: string; authorRole?: string; authorAvatar?: string; rating: number; content: string }[];
}

export interface Product {
  id: string;
  name: string;
  productId: string;
  category: string;
  pricing: string;
  status: 'live' | 'beta' | 'deprecated';
  icon: string;
  iconColor: string;
}

export interface ProductFeature {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

export interface ProductHealthMetric {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

export interface ProductAsset {
  type: 'pdf' | 'slides' | 'video';
  title: string;
  subtitle: string;
  href: string;
}

export const productsList: Product[] = [
  {
    id: '1',
    name: 'ThumbStack Analytics',
    productId: 'GTS-2049',
    category: 'SaaS Platform',
    pricing: 'Subscription',
    status: 'live',
    icon: 'analytics',
    iconColor: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    id: '2',
    name: 'GTSS Cloud Core',
    productId: 'GTS-1002',
    category: 'Infrastructure',
    pricing: 'Enterprise',
    status: 'live',
    icon: 'cloud_queue',
    iconColor: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  },
  {
    id: '3',
    name: 'Project Vulcan',
    productId: 'GTS-9000',
    category: 'Internal Tool',
    pricing: 'N/A',
    status: 'beta',
    icon: 'science',
    iconColor: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  },
  {
    id: '4',
    name: 'Legacy CRM v1',
    productId: 'GTS-0012',
    category: 'Legacy',
    pricing: 'One-time',
    status: 'deprecated',
    icon: 'inventory_2',
    iconColor: 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400',
  },
  {
    id: '5',
    name: 'SecureAuth Identity',
    productId: 'GTS-3301',
    category: 'Security',
    pricing: 'Enterprise',
    status: 'live',
    icon: 'shield',
    iconColor: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  },
  {
    id: '6',
    name: 'GTSS API Gateway',
    productId: 'GTS-API-01',
    category: 'Middleware',
    pricing: 'Usage-based',
    status: 'live',
    icon: 'api',
    iconColor: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
  },
];

export const productFeatures: ProductFeature[] = [
  {
    icon: 'monitoring',
    iconColor: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    title: 'Real-time Visualisation',
    description: 'Live updating charts with sub-second latency via WebSocket connections.',
  },
  {
    icon: 'security',
    iconColor: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    title: 'RBAC Integration',
    description: 'Seamless integration with GTSS Identity for granular permission controls.',
  },
  {
    icon: 'api',
    iconColor: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    title: 'Public API',
    description: 'Comprehensive REST API endpoints for downstream data consumption.',
  },
  {
    icon: 'download',
    iconColor: 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    title: 'Auto-Reporting',
    description: 'Scheduled PDF and CSV report generation sent directly to email or Slack.',
  },
];

export const productHealthMetrics: ProductHealthMetric[] = [
  {
    label: 'Uptime (30d)',
    value: '99.98%',
    percentage: 99.98,
    color: 'text-emerald-600',
  },
  {
    label: 'Open Issues',
    value: '12',
    percentage: 15,
    color: 'text-orange-500',
  },
  {
    label: 'Test Coverage',
    value: '84%',
    percentage: 84,
    color: 'text-blue-600',
  },
];

export const productAssets: ProductAsset[] = [
  {
    type: 'pdf',
    title: 'Q3 Pitch Deck.pdf',
    subtitle: '2.4 MB • Updated yesterday',
    href: '#',
  },
  {
    type: 'slides',
    title: 'Product One-Pager',
    subtitle: 'Google Slides',
    href: '#',
  },
  {
    type: 'video',
    title: 'Demo Walkthrough',
    subtitle: 'MP4 • 15 mins',
    href: '#',
  },
];

export const productWizardSteps = ['Identity', 'Description', 'Features', 'Pricing', 'Assets'];

export const initialProductFormData: ProductIdentityFormData = {
  name: '',
  version: '1.0.0',
  category: '',
  description: '',
  tags: ['Software', 'Enterprise'],
  logoUrl: '',
  instructions: '',
  features: [],
  pricingModel: '',
  priceUSD: '',
  priceKES: '',
  billingCycle: 'monthly',
  demoVideoUrl: '',
  images: [],
  tagline: '',
  technicalArchitecture: '',
  health: [],
  assets: [],
  reviews: [],
};

export const defaultProductEditData = {
  name: 'GTSS Analytics Core',
  version: 'v2.4.0',
  tagline: 'Enterprise-grade data visualization and processing unit.',
  releaseDate: '2023-10-15',
  leadTeam: 'Data Science Ops',
  status: 'published',
  publicVisibility: true,
  description: `GTSS Analytics Core is the backbone of our data visualization suite. It processes large datasets in real-time and provides a unified API for frontend components.

Key capabilities include:
- Real-time stream processing
- Legacy database connectors
- Automated report generation`,
};

export const productEditFeatures = [
  {
    id: '1',
    title: 'Real-time Data Streaming',
    description: 'Connects to Kafka and RabbitMQ for sub-millisecond updates.',
  },
  {
    id: '2',
    title: 'Role-Based Access Control',
    description: 'Granular permissions for data viewing and editing.',
  },
];

export const productTeamMembers = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Lead Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];
