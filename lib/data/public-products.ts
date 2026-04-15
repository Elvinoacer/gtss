import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { Prisma } from "@/src/generated/client";

import { prisma } from "@/lib/prisma";

const productOrder = [
  { priority: "asc" as const },
  { createdAt: "desc" as const },
];

const publicProductListSelect = {
  id: true,
  name: true,
  description: true,
  category: true,
  pricing: true,
  pricingModel: true,
  status: true,
  icon: true,
  iconColor: true,
  priceUSD: true,
  priceKES: true,
  logoUrl: true,
  images: true,
  tagline: true,
  websiteUrl: true,
  demoVideoUrl: true,
  updatedAt: true,
} satisfies Prisma.ProductSelect;

const publicProductDetailSelect = {
  id: true,
  name: true,
  productId: true,
  category: true,
  pricing: true,
  pricingModel: true,
  status: true,
  icon: true,
  iconColor: true,
  description: true,
  version: true,
  demoVideoUrl: true,
  instructions: true,
  priceUSD: true,
  priceKES: true,
  qrCodeUrl: true,
  logoUrl: true,
  images: true,
  tagline: true,
  websiteUrl: true,
  technicalArchitecture: true,
  releaseDate: true,
  activeUsers: true,
  uptime: true,
  leadTeam: true,
  featuresMarkdown: true,
  features: {
    select: {
      id: true,
      icon: true,
      iconColor: true,
      title: true,
      description: true,
      priority: true,
    },
    orderBy: { priority: "asc" as const },
  },
  health: {
    select: {
      id: true,
      label: true,
      value: true,
      percentage: true,
      color: true,
    },
  },
  assets: {
    select: {
      id: true,
      type: true,
      title: true,
      subtitle: true,
      href: true,
    },
  },
  reviews: {
    select: {
      id: true,
      authorName: true,
      authorRole: true,
      authorAvatar: true,
      rating: true,
      content: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" as const },
  },
} satisfies Prisma.ProductSelect;

export type PublicProductListItem = Prisma.ProductGetPayload<{
  select: typeof publicProductListSelect;
}>;

export type PublicProductDetail = Prisma.ProductGetPayload<{
  select: typeof publicProductDetailSelect;
}>;

const getPublicProductsCached = unstable_cache(
  async () => {
    return prisma.product.findMany({
      select: publicProductListSelect,
      orderBy: productOrder,
    });
  },
  ["public-products-list"],
  {
    revalidate: 3600,
    tags: ["products"],
  },
);

const getPublicProductByIdCached = unstable_cache(
  async (id: string) => {
    return prisma.product.findUnique({
      where: { id },
      select: publicProductDetailSelect,
    });
  },
  ["public-product-by-id"],
  {
    revalidate: 3600,
    tags: ["products"],
  },
);

const getPublicProductRoutesCached = unstable_cache(
  async () => {
    return prisma.product.findMany({
      select: {
        id: true,
        updatedAt: true,
      },
      orderBy: productOrder,
    });
  },
  ["public-product-routes"],
  {
    revalidate: 3600,
    tags: ["products"],
  },
);

export const getPublicProducts = cache(async () => {
  return getPublicProductsCached();
});

export const getPublicProductById = cache(async (id: string) => {
  return getPublicProductByIdCached(id);
});

export const getPublicProductRoutes = cache(async () => {
  return getPublicProductRoutesCached();
});
