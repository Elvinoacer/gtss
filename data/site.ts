export const site = {
  name: "Great Thumbs Software Solutions",
  shortName: "GTSS",
  tagline: "Practical software for East African businesses",
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
    id: "restaurant-manager",
    title: "Restaurant Manager",
    subtitle: "Hospitality POS",
    audience: "Restaurants, cafés, and busy kitchens",
    description:
      "QR ordering, kitchen display, and table management that keep running when the internet drops.",
    href: "/products/restaurant-manager",
    image: "/images/waiter_handheld_offline_pos_1777357237751.png",
    features: ["QR ordering", "Kitchen display", "Offline-first", "M-Pesa ready"],
  },
  {
    id: "hotel-ordering",
    title: "Hotel Ordering System",
    subtitle: "Guest services",
    audience: "Hotels and lodges",
    description:
      "In-room ordering, housekeeping requests, and front-desk control. Pay once and run it on your own network.",
    href: "/products/hotel-ordering",
    image: "/images/gtss_local_server_router_1777357301707.png",
    features: ["Room QR codes", "Housekeeping", "One-time license", "On-premise"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    subtitle: "Online storefront",
    audience: "Shops and retailers",
    description:
      "A store with M-Pesa and card checkout, inventory, and order tracking — live in about two weeks.",
    href: "/products/ecommerce",
    image: "/images/gtss_bento.png",
    features: ["Catalog", "M-Pesa & cards", "Inventory", "Cloud hosting"],
  },
  {
    id: "church",
    title: "Church Management System",
    subtitle: "Congregation tools",
    audience: "Churches and ministries",
    description:
      "Members, contributions, events, and reports in one place — including M-Pesa, cash, and bank transfers.",
    href: "/products/church",
    image: "/images/gtss_bento.png",
    features: ["Members", "Contributions", "Events", "Reports"],
  },
  {
    id: "just-in-time",
    title: "JustInTime",
    subtitle: "Service marketplace",
    audience: "Service businesses",
    description:
      "Match customers with providers, take payment, and track the job from request to completion.",
    href: "/products/just-in-time",
    image: "/images/gtss_bento.png",
    features: ["Dispatch", "Payments", "Job tracking", "Ratings"],
  },
] as const;
