export interface Ticket {
  id: string;
  subject: string;
  customer: string;
  product: string;
  status: 'Open' | 'In Progress' | 'New' | 'Resolved';
  priority: 'High' | 'Medium' | 'Low';
  assignee?: {
    name: string;
    avatar: string;
  };
}

export interface TicketActivity {
  id: string;
  type: 'note' | 'comment';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

export interface TicketDetail {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  openedDate: string;
  status: string;
  description: string;
  stepsToReproduce: string[];
  attachments: {
    name: string;
    size: string;
    type: 'pdf' | 'image';
  }[];
  assignee: {
    name: string;
    role: string;
    avatar: string;
  };
  reporter: {
    name: string;
    email: string;
    avatar: string;
  };
  details: {
    product: string;
    version: string;
    dueDate: string;
    tags: string[];
  };
  activities: TicketActivity[];
}

export const ticketsList: Ticket[] = [
  {
    id: '#TKT-2490',
    subject: 'API Latency on Login',
    customer: 'Acme Corp',
    product: 'Platform',
    status: 'Open',
    priority: 'High',
    assignee: {
      name: 'Sarah J.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
  },
  {
    id: '#TKT-2489',
    subject: 'Billing Dashboard Error 500',
    customer: 'Globex Inc.',
    product: 'Finance',
    status: 'In Progress',
    priority: 'Medium',
    assignee: {
      name: 'Mark D.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
  },
  {
    id: '#TKT-2488',
    subject: 'Feature Request: Dark Mode',
    customer: 'Stark Ind.',
    product: 'UX/UI',
    status: 'New',
    priority: 'Low',
  },
  {
    id: '#TKT-2487',
    subject: 'SSO Integration Failure',
    customer: 'Umbrella Corp',
    product: 'Security',
    status: 'Open',
    priority: 'High',
    assignee: {
      name: 'James S.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  },
  {
    id: '#TKT-2486',
    subject: 'Data Export Timeout',
    customer: 'Cyberdyne',
    product: 'Analytics',
    status: 'Resolved',
    priority: 'Medium',
    assignee: {
      name: 'Sarah J.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
  },
];

export const ticketDetailData: TicketDetail = {
  id: '#GT-4022',
  title: 'Login failure on API v3 endpoint',
  priority: 'High',
  openedDate: 'Oct 24, 2023',
  status: 'In Progress',
  description: 'Customer is reporting 503 errors when attempting to authenticate via the mobile SDK. This seems to be intermittent but clustering around peak load times. Logs attached below indicate a timeout at the gateway layer.',
  stepsToReproduce: [
    'Use the Android SDK v3.2.1',
    'Attempt login with OAuth provider',
    'Observe timeout after 30s'
  ],
  attachments: [
    { name: 'error_logs_oct24.pdf', size: '2.4 MB', type: 'pdf' },
    { name: 'screenshot_503.png', size: '1.1 MB', type: 'image' }
  ],
  assignee: {
    name: 'Marcus Chen',
    role: 'Engineering Lead',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  reporter: {
    name: 'Sarah Jenkins',
    email: 'sarah.j@clientcompany.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  details: {
    product: 'GTSS Analytics Platform',
    version: 'v3.2.1 (Mobile SDK)',
    dueDate: 'Oct 26, 2023',
    tags: ['api-v3', 'mobile-sdk', 'authentication']
  },
  activities: [
    {
      id: '1',
      type: 'note',
      author: {
        name: 'Marcus Chen',
        role: 'Engineering Lead',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
      },
      content: "I've reproduced this on staging. It looks like the load balancer configuration for the v3 cluster wasn't updated with the last deploy. Working on a fix now.",
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      type: 'comment',
      author: {
        name: 'Sarah Jenkins',
        role: 'Client',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
      },
      content: "Thanks for the quick response. Just to clarify, this is affecting about 15% of our users right now, mostly on iOS 17.",
      timestamp: 'Oct 24, 2023 at 4:30 PM'
    }
  ]
};
