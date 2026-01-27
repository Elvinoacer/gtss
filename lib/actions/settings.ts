'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getCompanySettings() {
  try {
    const settings = await prisma.companySettings.findFirst();
    if (!settings) {
      // Create default settings if none exist
      return await prisma.companySettings.create({
        data: {
          companyName: 'Great Thumbs Software Solutions',
          website: 'https://gtss.com',
          description: 'Innovative software solutions for modern enterprises.',
          brandingColor: '#16a34a',
        }
      });
    }
    return settings;
  } catch (error) {
    console.error('Error fetching company settings:', error);
    return null;
  }
}

export async function updateCompanySettings(data: {
  companyName: string;
  website: string;
  description: string;
  brandingColor: string;
  contactEmail?: string;
  address?: string;
}) {
  try {
    const existing = await prisma.companySettings.findFirst();
    
    if (existing) {
      await prisma.companySettings.update({
        where: { id: existing.id },
        data,
      });
    } else {
      await prisma.companySettings.create({
        data,
      });
    }
    
    revalidatePath('/dashboard/settings');
    return { success: true };
  } catch (error) {
    console.error('Error updating company settings:', error);
    return { success: false, error: 'Failed to update settings' };
  }
}
