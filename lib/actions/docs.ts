'use server';

import { prisma } from '@/lib/prisma';
import { docContentData, docErrorCodes } from '@/data/docs';

export async function getDoc() {
  try {
    // For now, we'll try to find a doc, if not, we create one from dummy data
    let doc = await prisma.doc.findFirst({
      include: {
        errorCodes: true,
      },
    });

    if (!doc) {
      // Seed if empty
      doc = await prisma.doc.create({
        data: {
          title: docContentData.title,
          content: docContentData.content,
          version: docContentData.version,
          errorCodes: {
            create: docErrorCodes.map(ec => ({
              code: ec.code,
              description: ec.description,
              resolution: ec.resolution,
            })),
          },
        },
        include: {
          errorCodes: true,
        },
      });
    }

    return { success: true, data: doc };
  } catch (error) {
    console.error('Error fetching doc:', error);
    return { success: false, error: 'Failed to fetch doc' };
  }
}

export async function updateDoc(id: string, data: { content: string }) {
  try {
    const doc = await prisma.doc.update({
      where: { id },
      data: {
        content: data.content,
      },
    });
    return { success: true, data: doc };
  } catch (error) {
    console.error('Error updating doc:', error);
    return { success: false, error: 'Failed to update doc' };
  }
}
