'use server';

import { prisma } from '@/lib/prisma';

export async function getQRCodes() {
  try {
    const qrCodes = await prisma.qRCode.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: qrCodes };
  } catch (error) {
    console.error('Error fetching QR codes:', error);
    return { success: false, error: 'Failed to fetch QR codes' };
  }
}

export async function getQRCodeById(id: string) {
  try {
    const qrCode = await prisma.qRCode.findUnique({
      where: { id },
    });
    return { success: true, data: qrCode };
  } catch (error) {
    console.error('Error fetching QR code:', error);
    return { success: false, error: 'Failed to fetch QR code' };
  }
}
