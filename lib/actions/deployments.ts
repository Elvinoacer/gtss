'use server';

import { prisma } from '@/lib/prisma';

export async function getDeployments() {
  try {
    const deployments = await prisma.deployment.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: deployments };
  } catch (error) {
    console.error('Error fetching deployments:', error);
    return { success: false, error: 'Failed to fetch deployments' };
  }
}

export async function getDeploymentById(id: string) {
  try {
    const deployment = await prisma.deployment.findUnique({
      where: { id },
    });
    return { success: true, data: deployment };
  } catch (error) {
    console.error('Error fetching deployment:', error);
    return { success: false, error: 'Failed to fetch deployment' };
  }
}
