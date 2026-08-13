import { CreditCard, RefreshCw, Users } from 'lucide-react';

export const pricingModels = [
  {
    name: 'One-Time Payment',
    icon: CreditCard,
    description: 'Pay once, own forever. Perfect for standalone systems that don\'t require ongoing updates.',
    examples: ['Restaurant Manager POS', 'PharmaCare Core On-Premise', 'Custom Enterprise Solutions'],
    features: ['Full ownership', 'No recurring fees', 'Optional maintenance plans', 'On-premise deployment'],
    cta: 'View Products',
    ctaHref: '/products',
  },
  {
    name: 'Subscription',
    icon: RefreshCw,
    description: 'Pay monthly or yearly for continuous updates, AI assistance, support, and cloud hosting.',
    examples: ['PharmaCare OS (Flagship)', 'Commersely E-Commerce', 'Church Management System'],
    features: ['24/7 AI Health Chatbot', 'Regular updates', 'Cloud hosting included', 'Priority WhatsApp support'],
    cta: 'View Products',
    ctaHref: '/products',
    popular: true,
  },
  {
    name: 'Platform Access',
    icon: Users,
    description: 'Community and marketplace platforms with usage-based or transaction-based pricing.',
    examples: ['JustInTime Service Platform', 'Kampus Social & Trade Ecosystem'],
    features: ['Pay as you grow', 'Transaction-based fees', 'Community features', 'Marketplace integration'],
    cta: 'Learn More',
    ctaHref: '/contact',
  },
];

export const pricingFaqs = [
  {
    question: 'How do I know which pricing model is right for me?',
    answer: 'It depends on your needs. For one-time purchases like our Hotel Ordering System, you pay upfront and own it forever. For cloud-based solutions like our E-commerce platform, a subscription ensures you always have the latest features and our support. Contact us for a consultation.',
  },
  {
    question: 'Can I see pricing for specific products?',
    answer: 'Yes! Each product has its own pricing page with detailed breakdowns. Visit our Products page to browse all available solutions and see their individual pricing.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Absolutely. We specialize in building bespoke software tailored to your business needs. Contact our team to discuss your requirements and we\'ll provide a custom quote.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept mobile money (M-Pesa, Airtel Money), bank transfers, and card payments. For enterprise solutions, we offer flexible payment plans.',
  },
  {
    question: 'Is there a trial period?',
    answer: 'For subscription products, we offer demos and trial periods. For one-time purchases, we provide live demos so you can see the product in action before buying.',
  },
];
