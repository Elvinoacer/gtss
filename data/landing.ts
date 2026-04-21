import {
  Globe,
  Package,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const landingFeatures = [
  {
    icon: Package,
    title: "Ready-to-Deploy Product Systems",
    description:
      "Operational software stacks built for hospitality, retail, internal ops, and customer touchpoints without months of reinvention.",
  },
  {
    icon: Smartphone,
    title: "Offline-First Reliability",
    description:
      "Critical workflows continue when connectivity drops, so teams keep serving customers instead of waiting for the network to recover.",
  },
  {
    icon: ShieldCheck,
    title: "Local Context, Enterprise Discipline",
    description:
      "Built with African operating realities in mind while still meeting the standard expected from serious enterprise software.",
  },
  {
    icon: Globe,
    title: "Deployment and Support Included",
    description:
      "We stay involved through rollout, training, and iteration so the product looks polished in the boardroom and works on the floor.",
  },
];

export const landingTestimonials = [
  {
    name: "David Kamau",
    role: "Hotel Manager, Sunset Lodge",
    content:
      '"The GTSS rollout immediately made us look more organized. Orders, staff coordination, and reporting all started feeling like one connected system."',
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Pastor Grace Okonkwo",
    role: "Senior Pastor, New Life Church",
    content:
      '"What stood out was the maturity of the product thinking. GTSS did not just ship features, they designed a cleaner operating model for us."',
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Amina Mohamed",
    role: "Owner, Amina's Fashion",
    content:
      '"The experience felt custom, polished, and dependable. My team adopted it quickly because the workflows were designed around how we already operate."',
    avatar:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&h=100&fit=crop",
    rating: 5,
  },
];

export const landingCompanies = [
  "Hotels",
  "Restaurants",
  "Retail",
  "Education",
  "Service Teams",
  "Distribution",
];

export const landingHowItWorks = [
  {
    title: "Choose the right operating stack",
    description:
      "We map your bottlenecks, surface the right GTSS modules, and identify where a ready-made product versus tailored scope makes the most sense.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    items: ["Operational audit", "Product matching", "Scope alignment"],
    reverse: false,
  },
  {
    title: "We configure, deploy, and train",
    description:
      "Our team handles setup, workflows, migration, and onboarding so the first live day already feels stable and intentional.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    items: ["Technical setup", "Workflow design", "Staff enablement"],
    reverse: true,
  },
  {
    title: "We keep the system sharp after launch",
    description:
      "GTSS stays close through support, iteration, and optimization so your software keeps pace as the business grows and complexity increases.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    items: ["Support cadence", "Performance tuning", "Roadmap evolution"],
    cta: "See how we work",
    ctaHref: "/about",
    reverse: false,
  },
];

export const landingNavbarLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const landingFooterLinks = {
  product: [
    { label: "All Products", href: "/products" },
    { label: "Pricing", href: "/pricing" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Request Demo", href: "/demo" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { label: "Twitter", href: "#", icon: "Twitter" },
    { label: "GitHub", href: "#", icon: "Github" },
  ],
};

export const landingHero = {
  title: "Practical Software for Local Businesses",
  description:
    "GTSS builds polished, deployment-ready software products for African operators who need systems that feel premium, hold up under pressure, and make day-to-day execution look effortless.",
  primaryCta: { label: "Explore Products", href: "/products" },
  secondaryCta: { label: "Request Demo", href: "/contact" },
  features: [
    { text: "Works offline when it matters" },
    { text: "Built for African operations" },
  ],
  image: "/images/gtss-banner.png",
};

export const landingCTA = {
  title: "Ready to transform your business?",
  description:
    "From one flagship workflow to a full operational stack, GTSS helps ambitious teams launch software that looks expensive because it is designed with care.",
  primaryCta: { label: "View Our Products", href: "/products" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
};
