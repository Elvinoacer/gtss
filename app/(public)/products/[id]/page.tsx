import {
  getPublicProductById,
  getPublicProductRoutes,
} from "@/lib/data/public-products";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { StickyCTA } from "@/components/products/StickyCTA";
import { DeferredViewTracker } from "@/components/analytics/DeferredViewTracker";
import { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const products = await getPublicProductRoutes();
  return products.map((product) => ({ id: product.id }));
}

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getPublicProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description:
      product.description || `Learn more about ${product.name} by GTSS.`,
    openGraph: {
      title: `${product.name} - GTSS Product`,
      description:
        product.description || `Learn more about ${product.name} by GTSS.`,
      images:
        product.images && product.images.length > 0 ? [product.images[0]] : [],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getPublicProductById(id);

  if (!product) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: product.priceUSD || "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyCTA
        productName={product.name}
        externalLink={product.websiteUrl}
        priceUSD={product.priceUSD}
        priceKES={product.priceKES}
      />
      <DeferredViewTracker productId={product.id} trackPage={false} />
      <ProductDetailClient product={product} />
    </div>
  );
}
