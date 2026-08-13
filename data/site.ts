export const site = {
  name: "Great Thumbs Software Solutions",
  shortName: "GTSS",
  tagline: "Practical software for East African businesses, healthcare & institutions",
  location: "Nairobi, Kenya",
  email: "info@gtss.software",
  phoneDisplay: "+254 792 156 094",
  phoneTel: "+254792156094",
  whatsapp: "254792156094",
  addressLines: ["P.O. Box 3900 – 30100", "Kesses, Eldoret, Kenya"],
  responseSla: "Under 24 hours",
  region: "East Africa",
} as const;

export const whatsappUrl = (text = "Hi GTSS, I'm interested in your software products.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const telUrl = `tel:${site.phoneTel}`;
export const mailUrl = `mailto:${site.email}`;

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const catalog = [
  {
    id: "pharmacy-platform",
    dbId: "cmkwhlte000004hlth9001gtss",
    productId: "GTS-HLT-9001",
    title: "PharmaCare OS",
    subtitle: "Digital Pharmacy, Clinic & Patient Care Operating System",
    audience: "Pharmacies, chemists, clinics & healthcare wellness centers",
    description:
      "Put your pharmacy online: Be found on Google, answer customer queries 24/7 with AI, manage clinic service bookings, sell OTC medicines online, and accept instant M-Pesa payments with FEFO inventory and prescription refills underneath.",
    href: "/products/pharmacy",
    image: "/images/pharmacy_platform_hero.jpg",
    logoUrl: "/images/GTSS-logo.png",
    pricing: "Subscription KES 1,000/mo or One-Time KES 10,000 (Informational Web: KES 5,000)",
    features: [
      "Be Found Online & SEO",
      "24/7 AI Health Chatbot",
      "Clinic Service Bookings",
      "Online OTC Storefront",
      "Direct M-Pesa STK Push",
      "FEFO Expiry & Prescriptions",
    ],
  },
  {
    id: "restaurant-manager",
    dbId: "cmkwglu7u000004jv50w2cmcj",
    productId: "GTS-SAA-3104",
    title: "Restaurant Manager",
    subtitle: "Hospitality POS & Intranet Solution",
    audience: "Restaurants, cafés, hotels & busy kitchens",
    description:
      "Instant WiFi QR ordering, real-time Kitchen Display System (KDS), and offline till control that keeps running even when the internet fails.",
    href: "/products/restaurant-manager",
    image: "/images/waiter_handheld_offline_pos_1777357237751.png",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769509018/gtss/products/lddguviehm5qw4zwe6v1.jpg",
    pricing: "One-Time / KES 50,000 ($390)",
    features: ["Instant QR ordering", "Kitchen Display (KDS)", "Offline-first local server", "M-Pesa integrated"],
  },
  {
    id: "church-management-system",
    dbId: "cmkwpx6t3000004i89mcou9z5",
    productId: "GTS-ENT-6990",
    title: "Church Management System",
    subtitle: "Congregation & Ministry Platform",
    audience: "Churches, ministries & faith organizations",
    description:
      "Empowering Faith, Connecting Communities: Member database, contribution tracking (M-Pesa, cash & bank), and event management in one place.",
    href: "/products/cmkwpx6t3000004i89mcou9z5",
    image: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769525614/gtss/products/mxabcttbqh9kv2mxt8xz.jpg",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769523393/gtss/products/czoxq2embhckyvvjfkml.jpg",
    pricing: "Subscription / KES 2,000/mo ($16/mo)",
    features: ["Member database", "M-Pesa & Bank tithes", "Event management", "Financial reports"],
  },
  {
    id: "commersely",
    dbId: "cmkwvzp9n000004ieieyhqcde",
    productId: "GTS-SAA-7111",
    title: "Commersely",
    subtitle: "Enterprise E-Commerce Storefront",
    audience: "Brands, shops & online retailers",
    description:
      "Elevate your brand with a bespoke, high-performance shopping experience built on Next.js 15 with M-Pesa & card checkout.",
    href: "/products/cmkwvzp9n000004ieieyhqcde",
    image: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769535840/gtss/products/outu9egsgeql8bax6epq.jpg",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769534690/gtss/products/g3zztu8dxqmmhgju0has.png",
    pricing: "Subscription / KES 1,000/mo ($8/mo)",
    features: ["Product catalog", "M-Pesa & card checkout", "Inventory tracking", "Cloud hosting included"],
  },
  {
    id: "justintime",
    dbId: "cmkwy2mpv000004laf6le04kd",
    productId: "GTS-PLA-8158",
    title: "JustInTime",
    subtitle: "Hyperlocal Service Marketplace",
    audience: "Service providers, clients & local gig economy",
    description:
      "Your Skills, Just in Time, Right Where You Are. Match customers with local service providers, process payments, and track jobs.",
    href: "/products/cmkwy2mpv000004laf6le04kd",
    image: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769539313/gtss/products/h16tvll5gxqgevm869ls.jpg",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769538097/gtss/products/r0ygqexppc3pip4ms1y1.jpg",
    pricing: "Free Access",
    features: ["Fast local matching", "M-Pesa payments", "Job tracking", "Ratings & reviews"],
  },
  {
    id: "kampus",
    dbId: "cmkxqm2ag000004kz7vhkvpza",
    productId: "GTS-MOB-1511",
    title: "Kampus",
    subtitle: "University Campus Social & Utility Ecosystem",
    audience: "University students & campus communities",
    description:
      "Your University, Connected. Don't just go to uni. Own it. A hyperlocal space for campus social networking, trade marketplace, and event discovery.",
    href: "/products/cmkxqm2ag000004kz7vhkvpza",
    image: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769587269/gtss/products/d3ugdikylmwyfzym4sh7.jpg",
    logoUrl: "https://res.cloudinary.com/dmdc0ijcv/image/upload/v1769586597/gtss/products/abvufrhnpwa0ubrzhzfs.jpg",
    pricing: "Free Mobile App",
    features: ["Hyperlocal campus feeds", "Student marketplace", "Campus event discovery", "Peer-to-peer trust"],
  },
] as const;
