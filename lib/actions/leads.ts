'use server';

import { prisma } from '@/lib/prisma';

export async function getLeads() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: leads };
  } catch (error) {
    console.error('Error fetching leads:', error);
    return { success: false, error: 'Failed to fetch leads' };
  }
}

export async function getLeadById(id: string) {
  try {
    const lead = await prisma.lead.findUnique({
      where: { id },
    });
    return { success: true, data: lead };
  } catch (error) {
    console.error('Error fetching lead:', error);
    return { success: false, error: 'Failed to fetch lead' };
  }
}
