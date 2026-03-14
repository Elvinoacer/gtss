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

export async function updateCompanySettings(data: any) {
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
    revalidatePath('/dashboard/settings/brand');
    return { success: true };
  } catch (error) {
    console.error('Error updating company settings:', error);
    return { success: false, error: 'Failed to update settings' };
  }
}

export async function getUserSettings(userId: string) {
  try {
    return await prisma.user.findUnique({ where: { id: userId } });
  } catch (error) {
    console.error('Error fetching user settings:', error);
    return null;
  }
}

export async function updateSecuritySettings(userId: string, data: any) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data,
    });
    revalidatePath('/dashboard/settings/security');
    return { success: true };
  } catch (error) {
    console.error('Error updating security settings:', error);
    return { success: false, error: 'Failed to update security settings' };
  }
}

export async function updateNotificationSettings(userId: string, data: any) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data,
    });
    revalidatePath('/dashboard/settings/notifications');
    return { success: true };
  } catch (error) {
    console.error('Error updating notification settings:', error);
    return { success: false, error: 'Failed to update notification settings' };
  }
}
