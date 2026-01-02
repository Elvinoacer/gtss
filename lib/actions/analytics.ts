'use server';

import { 
  analyticsKPIs, 
  analyticsFeatures, 
  analyticsProducts, 
  analyticsDateRanges,
  deviceUsageData 
} from '@/data/analytics';

export async function getAnalyticsData() {
  // In a real app, this would fetch from the database or an analytics service
  // For now, we return the centralized dummy data
  try {
    return {
      success: true,
      data: {
        kpis: analyticsKPIs,
        features: analyticsFeatures,
        products: analyticsProducts,
        dateRanges: analyticsDateRanges,
        deviceUsage: deviceUsageData,
      }
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    return { success: false, error: 'Failed to fetch analytics data' };
  }
}
