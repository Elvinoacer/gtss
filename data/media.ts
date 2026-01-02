export interface MediaAsset {
  id: string;
  title: string;
  type: 'image' | 'video' | 'pdf' | 'zip' | 'csv' | 'figma';
  size: string;
  uploadedAt: string;
  thumbnail?: string;
}

export interface UploadFile {
  id: string;
  fileName: string;
  fileSize: string;
  status: 'uploading' | 'completed' | 'waiting';
  progress?: number;
  timeRemaining?: string;
  displayTitle?: string;
}

export const mediaAssetsList: MediaAsset[] = [
  {
    id: '1',
    title: 'Q4_Dashboard_Analytics.png',
    type: 'image',
    size: '2.4 MB',
    uploadedAt: 'Just now',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    title: 'Product_Demo_Walkthrough.mp4',
    type: 'video',
    size: '45.2 MB',
    uploadedAt: '2h ago',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Technical_Whitepaper_v2.pdf',
    type: 'pdf',
    size: '1.8 MB',
    uploadedAt: 'Yesterday',
  },
  {
    id: '4',
    title: 'Brand_Assets_Kit_2023.zip',
    type: 'zip',
    size: '128 MB',
    uploadedAt: 'Oct 24',
  },
  {
    id: '5',
    title: 'Team_Offsite_Header.jpg',
    type: 'image',
    size: '4.1 MB',
    uploadedAt: 'Oct 23',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    title: 'User_Feedback_Q3.csv',
    type: 'csv',
    size: '450 KB',
    uploadedAt: 'Oct 22',
  },
  {
    id: '7',
    title: 'Mobile_App_Wireframes.fig',
    type: 'figma',
    size: '14.2 MB',
    uploadedAt: 'Oct 20',
  },
  {
    id: '8',
    title: 'Dev_Environment_Setup.jpg',
    type: 'image',
    size: '2.1 MB',
    uploadedAt: 'Oct 18',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
  },
];

export const mediaStats = {
  totalAssets: '1,240',
  storageUsed: '45GB',
};

export const uploadQueueList: UploadFile[] = [
  {
    id: '1',
    fileName: 'demo_walkthrough_v2.mp4',
    fileSize: '100 MB',
    status: 'uploading',
    progress: 45,
    timeRemaining: '15 secs remaining',
    displayTitle: '',
  },
  {
    id: '2',
    fileName: 'dashboard_view_dark.png',
    fileSize: '2.4 MB',
    status: 'completed',
    displayTitle: 'Main Dashboard Dark Mode',
  },
  {
    id: '3',
    fileName: 'sample_user_data.csv',
    fileSize: '156 KB',
    status: 'waiting',
  },
];
