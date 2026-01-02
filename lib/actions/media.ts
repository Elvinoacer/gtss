'use server';

import { prisma } from '@/lib/prisma';

export async function getMediaAssets() {
  try {
    const assets = await prisma.mediaAsset.findMany({
      orderBy: {
        uploadedAt: 'desc',
      },
    });
    return { success: true, data: assets };
  } catch (error) {
    console.error('Error fetching media assets:', error);
    return { success: false, error: 'Failed to fetch media assets' };
  }
}
