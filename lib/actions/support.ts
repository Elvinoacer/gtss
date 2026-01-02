'use server';

import { prisma } from '@/lib/prisma';

export async function getTickets() {
  try {
    const tickets = await prisma.ticket.findMany({
      include: {
        product: true,
        activities: true,
        attachments: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: tickets };
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return { success: false, error: 'Failed to fetch tickets' };
  }
}

export async function getTicketById(id: string) {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id },
      include: {
        product: true,
        activities: true,
        attachments: true,
      },
    });
    return { success: true, data: ticket };
  } catch (error) {
    console.error('Error fetching ticket:', error);
    return { success: false, error: 'Failed to fetch ticket' };
  }
}
