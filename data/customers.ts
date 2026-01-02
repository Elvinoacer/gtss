export interface CustomerProduct {
  name: string;
  color: string;
}

export interface Customer {
  id: string;
  customerId: string;
  name: string;
  avatar?: string;
  avatarFallback?: string;
  avatarColor?: string;
  email: string;
  phone?: string;
  location?: string;
  products: CustomerProduct[];
  status: 'active' | 'onboarding' | 'churned';
}

export const customersList: Customer[] = [
  {
    id: '1',
    customerId: '#GT-8832',
    name: 'Acme Corp',
    avatarFallback: 'AC',
    avatarColor: 'bg-indigo-100 text-[#2563eb]',
    email: 'jane@acme.com',
    phone: '+1 (555) 000-1111',
    products: [
      { name: 'SaaS Platform', color: 'bg-blue-50 text-blue-700 border border-blue-100' },
      { name: 'Analytics', color: 'bg-purple-50 text-purple-700 border border-purple-100' },
    ],
    status: 'active',
  },
  {
    id: '2',
    customerId: '#GT-9921',
    name: 'Beta Industries',
    avatarFallback: 'BI',
    avatarColor: 'bg-amber-100 text-amber-700',
    email: 'contact@beta.com',
    location: 'San Francisco, CA',
    products: [
      { name: 'SaaS Platform', color: 'bg-blue-50 text-blue-700 border border-blue-100' },
    ],
    status: 'onboarding',
  },
  {
    id: '3',
    customerId: '#GT-7741',
    name: 'Gamma Solutions',
    avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop',
    email: 'info@gamma.com',
    phone: '+44 20 7946 0958',
    products: [
      { name: 'Mobile App', color: 'bg-pink-50 text-pink-700 border border-pink-100' },
      { name: 'Analytics', color: 'bg-purple-50 text-purple-700 border border-purple-100' },
    ],
    status: 'active',
  },
  {
    id: '4',
    customerId: '#GT-2219',
    name: 'Delta Dynamics',
    avatarFallback: 'DD',
    avatarColor: 'bg-slate-100 text-slate-600',
    email: 'support@delta.com',
    phone: '+1 (212) 555-9999',
    products: [
      { name: 'Analytics Tool', color: 'bg-purple-50 text-purple-700 border border-purple-100' },
    ],
    status: 'churned',
  },
  {
    id: '5',
    customerId: '#GT-4452',
    name: 'Epsilon Group',
    avatarFallback: 'EG',
    avatarColor: 'bg-rose-100 text-rose-700',
    email: 'admin@epsilon.com',
    location: 'Global',
    products: [
      { name: 'SaaS Platform', color: 'bg-blue-50 text-blue-700 border border-blue-100' },
      { name: 'Consulting', color: 'bg-amber-50 text-amber-700 border border-amber-100' },
    ],
    status: 'active',
  },
];
