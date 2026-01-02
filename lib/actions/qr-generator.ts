'use server';

import { qrGeneratorColors, qrRecentActivity, qrProducts, qrTypes } from '@/data/qr';

export async function getQRGeneratorData() {
  try {
    // In a real app, this would fetch from the database
    // For now, we return the centralized dummy data
    return {
      success: true,
      data: {
        colors: qrGeneratorColors,
        recentActivity: qrRecentActivity,
        products: qrProducts,
        types: qrTypes,
      }
    };
  } catch (error) {
    console.error('Error fetching QR generator data:', error);
    return { success: false, error: 'Failed to fetch QR generator data' };
  }
}
