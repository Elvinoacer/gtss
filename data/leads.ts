import React from 'react';
import { Cloud, Server, BarChart3, Landmark, Mail, Phone, ArrowRightLeft, UserPlus } from 'lucide-react';

export interface Lead {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  productInterest: string;
  productIcon?: any;
  productIconBg?: string;
  assignedRep?: {
    initials: string;
    name: string;
    color?: string;
  };
  status: 'new' | 'contacted' | 'qualified' | 'lost';
  avatar?: string;
  avatarFallback?: string;
}

export interface ContactField {
  label: string;
  value: string;
  action?: 'copy' | 'call';
}

export interface TimelineItemData {
  icon: any;
  iconBgColor: string;
  iconColor: string;
  title: string;
  time: string;
  description?: string;
  note?: {
    author: string;
    avatar: string;
    content: string;
  };
  fromStage?: string;
  toStage?: string;
}

export interface LeadTask {
  title: string;
  time: string;
  isOverdue?: boolean;
}

export const leadsList: Lead[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    email: 's.jenkins@techflow.com',
    phone: '+1 (555) 001-2834',
    productInterest: 'Cloud Storage',
    productIcon: Cloud,
    productIconBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    assignedRep: { initials: 'AM', name: 'Alex Morgan' },
    status: 'contacted',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Acme Corp',
    role: 'Enterprise Account',
    email: 'purchasing@acme.com',
    phone: '+1 (555) 234-5678',
    productInterest: 'ERP System',
    productIcon: Server,
    productIconBg: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    status: 'new',
    avatarFallback: 'AC',
  },
  {
    id: '3',
    name: 'Michael Foster',
    role: 'CTO, StartFlow',
    email: 'm.foster@startflow.io',
    phone: '+1 (555) 987-6543',
    productInterest: 'Analytics Suite',
    productIcon: BarChart3,
    productIconBg: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    assignedRep: { initials: 'AM', name: 'Alex Morgan' },
    status: 'lost',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    name: 'Samantha Brown',
    role: 'Director, FinCorp',
    email: 'sam.b@fincorp.net',
    phone: '+1 (555) 765-4321',
    productInterest: 'FinTech Platform',
    productIcon: Landmark,
    productIconBg: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
    assignedRep: { initials: 'JL', name: 'Jenny Lin', color: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200' },
    status: 'qualified',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: '5',
    name: 'David Wright',
    role: 'Owner, Wright Logistics',
    email: 'david@wrightlog.com',
    phone: '+1 (555) 444-1234',
    productInterest: 'Cloud Storage',
    productIcon: Cloud,
    productIconBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    assignedRep: { initials: 'AM', name: 'Alex Morgan' },
    status: 'contacted',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export const leadContactFields: ContactField[] = [
  { label: 'Email', value: 'sarah.j@omnicorp.com', action: 'copy' },
  { label: 'Phone', value: '+1 (555) 012-3456', action: 'call' },
  { label: 'Location', value: 'San Francisco, CA' },
  { label: 'Source', value: 'LinkedIn Campaign' },
];

export const leadTimelineItems: TimelineItemData[] = [
  {
    icon: Mail,
    iconBgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-[#2563eb]',
    title: 'Email Opened: "GTSS Platform Overview"',
    time: '2 hours ago',
    description: 'Sarah opened the email sent by Automated Campaign.',
  },
  {
    icon: Phone,
    iconBgColor: 'bg-green-50 dark:bg-green-900/30',
    iconColor: 'text-green-600',
    title: 'Call Logged',
    time: 'Yesterday, 4:30 PM',
    description: 'Spoke with Sarah about API integrations. She is interested in the custom endpoints documentation.',
    note: {
      author: 'Alex Morgan',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      content: 'Promised to send the technical specs by Friday.',
    },
  },
  {
    icon: ArrowRightLeft,
    iconBgColor: 'bg-orange-50 dark:bg-orange-900/30',
    iconColor: 'text-orange-600',
    title: 'Stage Changed',
    time: '3 days ago',
    fromStage: 'Discovery',
    toStage: 'Negotiation',
  },
  {
    icon: UserPlus,
    iconBgColor: 'bg-gray-100 dark:bg-gray-700',
    iconColor: 'text-gray-600',
    title: 'Lead Created',
    time: 'Oct 12, 2023',
    description: 'Lead imported from LinkedIn Integration.',
  },
];

export const leadTasks: LeadTask[] = [
  { title: 'Prepare Demo Environment', time: 'Tomorrow, 2:00 PM' },
  { title: 'Send Case Studies', time: 'Overdue (yesterday)', isOverdue: true },
];
