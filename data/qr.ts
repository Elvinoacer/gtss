export interface QRCode {
  id: string;
  name: string;
  url: string;
  product: string;
  type: string;
  typeColor: 'blue' | 'purple' | 'green' | 'orange';
  created: string;
  qrThumbnail: string;
}

export const qrCodesList: QRCode[] = [
  {
    id: '1',
    name: 'Q4 Marketing - LinkedIn',
    url: 'gtss.io/ref/ln-q4-2023',
    product: 'ThumbStack Analytics',
    type: 'Demo Request',
    typeColor: 'blue',
    created: 'Oct 24, 2023',
    qrThumbnail: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://gtss.io/ref/ln-q4-2023',
  },
  {
    id: '2',
    name: 'TechCrunch Event Booth',
    url: 'gtss.io/ref/tc-booth-A',
    product: 'GTSS Cloud',
    type: 'Product Page',
    typeColor: 'purple',
    created: 'Oct 22, 2023',
    qrThumbnail: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://gtss.io/ref/tc-booth-A',
  },
  {
    id: '3',
    name: 'Internal Team Onboarding',
    url: 'gtss.io/internal/onboard',
    product: 'DevOps Suite',
    type: 'Wiki Doc',
    typeColor: 'green',
    created: 'Oct 18, 2023',
    qrThumbnail: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://gtss.io/internal/onboard',
  },
  {
    id: '4',
    name: 'Fall Newsletter Header',
    url: 'gtss.io/ref/news-fall-23',
    product: 'ThumbStack Analytics',
    type: 'Contact Form',
    typeColor: 'orange',
    created: 'Oct 15, 2023',
    qrThumbnail: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://gtss.io/ref/news-fall-23',
  },
];

export const qrGeneratorColors = [
  { id: 'black', value: '#111318' },
  { id: 'blue', value: '#2563eb' },
  { id: 'red', value: '#EA4335' },
  { id: 'green', value: '#34A853' },
];

export const qrRecentActivity = [
  {
    id: '1',
    name: 'Q3 Report Link',
    time: 'Today, 10:42 AM',
    type: 'analytics',
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    iconColor: 'text-[#2563eb]',
  },
  {
    id: '2',
    name: 'Helpdesk V2',
    time: 'Yesterday, 4:15 PM',
    type: 'support',
    bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    iconColor: 'text-purple-600',
  },
];

export const qrProducts = [
  { value: 'crm', label: 'GTSS CRM Enterprise' },
  { value: 'analytics', label: 'DataFlow Analytics' },
  { value: 'cloud', label: 'CloudVerify Security' },
  { value: 'helpdesk', label: 'DeskMate Support' },
];

export const qrTypes = [
  { value: 'demo', label: 'Demo Request' },
  { value: 'contact', label: 'Contact Form' },
  { value: 'product', label: 'Product Page' },
];
