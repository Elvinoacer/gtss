import { getProductById } from "@/lib/actions/products";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { StickyCTA } from "@/components/products/StickyCTA";
import { ViewTracker } from "@/components/analytics/ViewTracker";
import { Metadata } from "next";
import { auth } from "@/auth";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const response = await getProductById(id);

  if (!response.success || !response.data) {
    return {
      title: "Product Not Found",
    };
  }

  const product = response.data;

  return {
    title: product.name,
    description: product.description || `Learn more about ${product.name} by GTSS.`,
    openGraph: {
      title: `${product.name} - GTSS Product`,
      description: product.description || `Learn more about ${product.name} by GTSS.`,
      images: product.images && product.images.length > 0 ? [product.images[0]] : [],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const [response, session] = await Promise.all([
    getProductById(id),
    auth()
  ]);

  if (!response.success || !response.data) {
    notFound();
  }

  const product = response.data;
  const isAuthenticated = !!session?.user;

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: product.priceUSD || '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <div className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyCTA productName={product.name} externalLink={product.websiteUrl} priceUSD={product.priceUSD} priceKES={product.priceKES} />
      <ViewTracker productId={product.id} />
      <ProductDetailClient product={product} isAuthenticated={isAuthenticated} />
    </div>
  );
}

