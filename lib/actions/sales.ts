'use server';

import { salesKPIs, salesDateRanges, salesRepsList } from '@/data/sales';
import { prisma } from '@/lib/prisma';

export async function getSalesData() {
  try {
    // In a real app, this would fetch from the database
    // For now, we return the centralized dummy data
    // But we can also fetch transactions from prisma if they exist
    const transactions = await prisma.transaction.findMany({
      include: {
        customer: true,
      },
      orderBy: {
        date: 'desc',
      },
    });

    return {
      success: true,
      data: {
        kpis: salesKPIs,
        dateRanges: salesDateRanges,
        reps: salesRepsList,
        transactions: transactions,
      }
    };
  } catch (error) {
    console.error('Error fetching sales data:', error);
    return { success: false, error: 'Failed to fetch sales data' };
  }
}
