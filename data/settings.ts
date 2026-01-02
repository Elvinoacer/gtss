export const brandColors = [
  { label: 'Primary Color', value: '#1337EC', description: 'Used for buttons, links, and active states.' },
  { label: 'Secondary Color', value: '#6366F1', description: 'Used for accents and secondary actions.' },
  { label: 'Sidebar Background', value: '#FFFFFF', description: 'Background color for navigation panels.' },
  { label: 'Base Text Color', value: '#111218', description: 'Default color for body text.' },
];

export const typographyFonts = {
  headings: ['Inter', 'Roboto', 'Open Sans', 'Poppins'],
  body: ['Inter', 'Roboto', 'Open Sans', 'Lato'],
  defaultFontSize: 16,
};

export const notificationPreferences = {
  pauseAll: false,
  doNotDisturb: {
    enabled: true,
    startTime: '09:00 PM',
    endTime: '07:00 AM',
    timezone: 'Browser Default (UTC-08:00)',
  },
};

export const activeSessions = [
  {
    device: 'Macbook Pro (Chrome)',
    type: 'laptop',
    location: 'London, UK',
    ip: '192.168.1.1',
    time: 'Active now',
    current: true,
  },
  {
    device: 'iPhone 13 (Safari)',
    type: 'smartphone',
    location: 'London, UK',
    ip: '192.168.1.45',
    time: 'Active 2 hours ago',
    current: false,
  },
  {
    device: 'Windows PC (Firefox)',
    type: 'monitor',
    location: 'Manchester, UK',
    ip: '10.0.0.4',
    time: 'Active 3 days ago',
    current: false,
  },
];
