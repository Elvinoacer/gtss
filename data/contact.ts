import { site } from "./site";

export const contactInfo = {
  email: site.email,
  phone: site.phoneDisplay,
  address: site.addressLines.join("\n"),
};

export const contactHero = {
  badge: "Nairobi · Eldoret",
  title: "Tell us what you run. We will tell you what fits.",
  description:
    "Questions about a product, a rollout, or a custom build? We reply within 24 hours.",
  image: "/images/gtss_hero.png",
};

export const regionalOffices = [
  {
    city: "Eldoret",
    address: site.addressLines.join("\n"),
    phone: site.phoneDisplay,
  },
];
