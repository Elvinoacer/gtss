'use server';

import { uploadQueueList } from '@/data/media';

export async function getUploadData() {
  try {
    // In a real app, this would fetch from the database
    // For now, we return the centralized dummy data
    return {
      success: true,
      data: {
        queue: uploadQueueList,
      }
    };
  } catch (error) {
    console.error('Error fetching upload data:', error);
    return { success: false, error: 'Failed to fetch upload data' };
  }
}
