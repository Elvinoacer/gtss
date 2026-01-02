import { MetadataRoute } from 'next';
import { getProducts } from '@/lib/actions/products';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gtss.co.ke'; // Replace with actual domain

  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/accessibility',
    '/blog',
    '/careers',
    '/contact',
    '/cookies',
    '/demo',
    '/enterprise',
    '/faq',
    '/features',
    '/pricing',
    '/privacy',
    '/products',
    '/security',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Product Routes
  const productsResponse = await getProducts();
  const products = productsResponse.success && productsResponse.data ? productsResponse.data : [];

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(product.updatedAt || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
