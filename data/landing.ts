import { Package, Smartphone, ShieldCheck, Zap, Users, Globe } from 'lucide-react';

export const landingFeatures = [
  {
    icon: Package,
    title: 'Ready-to-Deploy Products',
    description: 'Pre-built software solutions for hotels, churches, e-commerce, and more. Get up and running in days, not months.',
  },
  {
    icon: Smartphone,
    title: 'Offline-First Design',
    description: 'Our systems work even without internet connectivity. Perfect for local businesses with unreliable networks.',
  },
  {
    icon: ShieldCheck,
    title: 'African-Built Solutions',
    description: 'Designed with African businesses in mind. We understand local challenges and build solutions that work here.',
  },
];

export const landingTestimonials = [
  {
    name: 'David Kamau',
    role: 'Hotel Manager, Sunset Lodge',
    content: '"The Hotel Ordering System transformed our guest experience. Orders go directly to the kitchen, no more confusion. Our staff loves it."',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    name: 'Pastor Grace Okonkwo',
    role: 'Senior Pastor, New Life Church',
    content: '"Finally, a church management system that understands our needs. Member tracking, contributions, and event management all in one place."',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    name: 'Amina Mohamed',
    role: 'Owner, Amina\'s Fashion',
    content: '"GTSS built my online store in two weeks. Now I sell to customers across the country. The support team is always available."',
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&h=100&fit=crop',
    rating: 4.5,
  },
];

export const landingCompanies = ['Hotels', 'Churches', 'Retailers', 'Schools', 'Clinics'];

export const landingHowItWorks = [
  {
    title: 'Choose Your Solution',
    description: 'Browse our catalog of ready-made software products designed for local businesses. From hotel management to church administration, we have solutions tailored to your industry.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    items: ['Hotel Ordering Systems', 'E-commerce Platforms', 'Church Management'],
    reverse: false,
  },
  {
    title: 'We Deploy & Train',
    description: 'Our team handles the technical setup so you can focus on your business. We provide hands-on training to ensure your staff is comfortable with the new system.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    items: [],
    cta: 'See our deployment process',
    ctaHref: '/about',
    reverse: true,
  },
];

export const landingNavbarLinks = [
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const landingFooterLinks = {
  product: [
    { label: 'All Products', href: '/products' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Request Demo', href: '/demo' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    { label: 'Twitter', href: '#', icon: 'Twitter' },
    { label: 'GitHub', href: '#', icon: 'Github' },
  ]
};

export const landingHero = {
  title: 'Practical Software for Local Businesses',
  description: 'GTSS builds scalable software products that empower local businesses, institutions, and communities. From hotel ordering systems to e-commerce platforms — we solve real-world problems.',
  primaryCta: { label: 'Explore Products', href: '/products' },
  secondaryCta: { label: 'Request Demo', href: '/contact' },
  features: [
    { text: 'Works offline' },
    { text: 'Built for Africa' },
  ],
  image: '/images/gtss-banner.png',
};

export const landingCTA = {
  title: 'Ready to transform your business?',
  description: 'Join hundreds of local businesses already using GTSS products. Let\'s build something great together.',
  primaryCta: { label: 'View Our Products', href: '/products' },
  secondaryCta: { label: 'Contact Us', href: '/contact' },
};
