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
    id: 'cmkwhlte000004hlth9001gtss',
    name: 'PharmaCare OS',
    productId: 'GTS-HLT-9001',
    category: 'Healthcare & Pharmacy',
    pricing: 'Subscription / One-Time',
    status: 'live',
    icon: 'medication',
    iconColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  {
    id: '1',
    name: 'Restaurant Manager',
    productId: 'GTS-SAA-3104',
    category: 'Hospitality POS',
    pricing: 'One-Time',
    status: 'live',
    icon: 'restaurant',
    iconColor: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  },
  {
    id: '2',
    name: 'Church Management System',
    productId: 'GTS-ENT-6990',
    category: 'Faith & Institutions',
    pricing: 'Subscription',
    status: 'live',
    icon: 'church',
    iconColor: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    id: '3',
    name: 'Commersely Storefront',
    productId: 'GTS-SAA-7111',
    category: 'E-Commerce Platform',
    pricing: 'Subscription',
    status: 'live',
    icon: 'shopping_bag',
    iconColor: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  },
  {
    id: '4',
    name: 'JustInTime Services',
    productId: 'GTS-PLA-8158',
    category: 'Gig Marketplace',
    pricing: 'Free Access',
    status: 'live',
    icon: 'handshake',
    iconColor: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  },
  {
    id: '5',
    name: 'Kampus Social Ecosystem',
    productId: 'GTS-MOB-1511',
    category: 'Campus & Social',
    pricing: 'Free Mobile App',
    status: 'live',
    icon: 'school',
    iconColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
  },
];

export const productFeatures: ProductFeature[] = [
  {
    icon: 'globe',
    iconColor: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    title: 'SEO & Online Visibility',
    description: 'Rank on Google for pharmacy, clinics & medicine searches in your neighbourhood.',
  },
  {
    icon: 'chat',
    iconColor: 'bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
    title: '24/7 AI Health Chatbot',
    description: 'Instant automated answers to medicine dosage, pricing & store hours without phone fatigue.',
  },
  {
    icon: 'calendar',
    iconColor: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    title: 'Clinic Service Bookings',
    description: 'Allow clients to book blood pressure checks, wellness consultations, and vaccinations online.',
  },
  {
    icon: 'shopping_cart',
    iconColor: 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    title: 'Online OTC Store & M-Pesa',
    description: 'Direct medicine catalogue, seamless M-Pesa STK push checkout, and instant automated ledger reconciliation.',
  },
  {
    icon: 'inventory',
    iconColor: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    title: 'FEFO Inventory & Stock Lots',
    description: 'First-Expired-First-Out batch tracking with automated expiry alerts to prevent stock losses.',
  },
  {
    icon: 'family_restroom',
    iconColor: 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
    title: 'Patient & Caregiver Portal',
    description: 'Medication dose reminders, adherence tracking, and caregiver access to manage family prescriptions.',
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
