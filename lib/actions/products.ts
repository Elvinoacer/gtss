'use server';

import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';

// Generate QR code URL using external QR API with dynamic host
async function generateQRCodeUrl(id: string): Promise<string> {
  let baseUrl = '';
  
  try {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    baseUrl = `${protocol}://${host}`;
  } catch {
    baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  }
  
  const productUrl = `${baseUrl}/products/${id}`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(productUrl)}`;
}

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        features: true,
        health: true,
        assets: true,
        reviews: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: products };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { success: false, error: 'Failed to fetch products' };
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        features: true,
        health: true,
        assets: true,
        reviews: true,
      },
    });
    return { success: true, data: product };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { success: false, error: 'Failed to fetch product' };
  }
}

export async function createProduct(data: any) {
  try {
    const categoryPrefix = data.category ? data.category.substring(0, 3).toUpperCase() : 'GEN';
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const generatedProductId = `GTS-${categoryPrefix}-${randomSuffix}`;

    const product = await prisma.product.create({
      data: {
        name: data.name,
        productId: generatedProductId,
        category: data.category,
        description: data.description,
        status: data.status || 'beta',
        pricing: data.pricingModel === 'free' ? 'Free' : 
                 data.pricingModel === 'one-time' ? 'One-time' : 'Subscription',
        pricingModel: data.pricingModel,
        priceUSD: data.priceUSD ? parseFloat(data.priceUSD) : null,
        priceKES: data.priceKES ? parseFloat(data.priceKES) : null,
        logoUrl: data.logoUrl,
        images: data.images || [],
        instructions: data.instructions,
        demoVideoUrl: data.demoVideoUrl,
        icon: data.icon || 'box',
        iconColor: data.iconColor || 'bg-blue-50 text-blue-600',
        version: data.version,
        tagline: data.tagline,
        websiteUrl: data.websiteUrl,
        technicalArchitecture: data.technicalArchitecture,
        releaseDate: data.releaseDate ? new Date(data.releaseDate) : null,
        activeUsers: data.activeUsers,
        uptime: data.uptime,
        leadTeam: data.leadTeam,
        features: {
          create: (data.features || []).map((f: any) => ({
            title: f.title,
            description: f.description || '',
            icon: f.icon || 'star',
            iconColor: f.iconColor || 'bg-blue-100 text-blue-600',
          })),
        },
        health: {
          create: (data.health || []).map((h: any) => ({
            label: h.label,
            value: h.value,
            percentage: parseFloat(h.percentage) || 0,
            color: h.color || 'bg-blue-500',
          })),
        },
        assets: {
          create: (data.assets || []).map((a: any) => ({
            type: a.type,
            title: a.title,
            subtitle: a.subtitle || '',
            href: a.href,
          })),
        },
        reviews: {
          create: (data.reviews || []).map((r: any) => ({
            authorName: r.authorName,
            authorRole: r.authorRole || '',
            authorAvatar: r.authorAvatar || '',
            rating: parseInt(r.rating) || 5,
            content: r.content || '',
          })),
        },
      },
    });

    const qrCodeUrl = await generateQRCodeUrl(product.id);
    const updatedProduct = await prisma.product.update({
      where: { id: product.id },
      data: { qrCodeUrl },
    });

    revalidatePath('/dashboard/products');
    revalidatePath('/products');

    return { success: true, data: updatedProduct };
  } catch (error) {
    console.error('Error creating product:', error);
    return { success: false, error: 'Failed to create product' };
  }
}

export async function updateProduct(id: string, data: any) {
  try {
    // Update product and handle relations by deleting and recreating
    const product = await prisma.$transaction(async (tx) => {
      // Delete existing relations
      await tx.productFeature.deleteMany({ where: { productId: id } });
      await tx.productHealthMetric.deleteMany({ where: { productId: id } });
      await tx.productAsset.deleteMany({ where: { productId: id } });
      await tx.productReview.deleteMany({ where: { productId: id } });

      // Update product core data and recreate relations
      return await tx.product.update({
        where: { id },
        data: {
          name: data.name,
          category: data.category,
          description: data.description,
          status: data.status,
          pricing: data.pricingModel === 'free' ? 'Free' : 
                   data.pricingModel === 'one-time' ? 'One-time' : 'Subscription',
          pricingModel: data.pricingModel,
          priceUSD: data.priceUSD ? parseFloat(data.priceUSD) : null,
          priceKES: data.priceKES ? parseFloat(data.priceKES) : null,
          logoUrl: data.logoUrl,
          images: data.images || [],
          instructions: data.instructions,
          demoVideoUrl: data.demoVideoUrl,
          icon: data.icon,
          iconColor: data.iconColor,
          version: data.version,
          tagline: data.tagline,
          websiteUrl: data.websiteUrl,
          technicalArchitecture: data.technicalArchitecture,
          releaseDate: data.releaseDate ? new Date(data.releaseDate) : null,
          activeUsers: data.activeUsers,
          uptime: data.uptime,
          leadTeam: data.leadTeam,
          features: {
            create: (data.features || []).map((f: any) => ({
              title: f.title,
              description: f.description || '',
              icon: f.icon || 'star',
              iconColor: f.iconColor || 'bg-blue-100 text-blue-600',
            })),
          },
          health: {
            create: (data.health || []).map((h: any) => ({
              label: h.label,
              value: h.value,
              percentage: parseFloat(h.percentage) || 0,
              color: h.color || 'bg-blue-500',
            })),
          },
          assets: {
            create: (data.assets || []).map((a: any) => ({
              type: a.type,
              title: a.title,
              subtitle: a.subtitle || '',
              href: a.href,
            })),
          },
          reviews: {
            create: (data.reviews || []).map((r: any) => ({
              authorName: r.authorName,
              authorRole: r.authorRole || '',
              authorAvatar: r.authorAvatar || '',
              rating: parseInt(r.rating) || 5,
              content: r.content || '',
            })),
          },
        },
      });

    });

    revalidatePath('/dashboard/products');
    revalidatePath('/products');
    revalidatePath(`/dashboard/products/${id}`);
    revalidatePath(`/products/${id}`);

    return { success: true, data: product };
  } catch (error) {
    console.error('Error updating product:', error);
    return { success: false, error: 'Failed to update product' };
  }
}

export async function regenerateQRCode(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      select: { productId: true },
    });

    if (!product) {
      return { success: false, error: 'Product not found' };
    }

    const qrCodeUrl = await generateQRCodeUrl(id);
    
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { qrCodeUrl },
    });

    revalidatePath('/dashboard/products');
    revalidatePath(`/dashboard/products/${id}`);

    return { success: true, data: updatedProduct };
  } catch (error) {
    console.error('Error regenerating QR code:', error);
    return { success: false, error: 'Failed to regenerate QR code' };
  }
}

export async function deleteProduct(id: string) {
  try {
    // First delete related features
    await prisma.productFeature.deleteMany({
      where: { productId: id },
    });
    
    // Then delete the product
    await prisma.product.delete({
      where: { id },
    });
    
    revalidatePath('/dashboard/products');
    revalidatePath('/products');
    return { success: true };
  } catch (error) {
    console.error('Error deleting product:', error);
    return { success: false, error: 'Failed to delete product' };
  }
}

