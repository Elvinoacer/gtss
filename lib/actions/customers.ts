'use server';

import { prisma } from '@/lib/prisma';

export async function getCustomers() {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        transactions: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: customers };
  } catch (error) {
    console.error('Error fetching customers:', error);
    return { success: false, error: 'Failed to fetch customers' };
  }
}

export async function getCustomerById(id: string) {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id },
      include: {
        transactions: true,
      },
    });
    return { success: true, data: customer };
  } catch (error) {
    console.error('Error fetching customer:', error);
    return { success: false, error: 'Failed to fetch customer' };
  }
}
