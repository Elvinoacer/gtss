export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  team: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'leave';
  avatar?: string;
}

export interface MemberProfile {
  name: string;
  employeeId: string;
  role: string;
  department: string;
  avatar: string;
  email: string;
  phone: string;
  slack: string;
  timezone: string;
}

export const membersList: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@gtss.com',
    role: 'Senior Engineer',
    team: 'Platform Team',
    joinDate: 'Jan 12, 2023',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.c@gtss.com',
    role: 'Product Manager',
    team: 'Mobile App',
    joinDate: 'Mar 04, 2023',
    status: 'leave',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@gtss.com',
    role: 'UX Designer',
    team: 'Web Portal',
    joinDate: 'Feb 28, 2022',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.k@gtss.com',
    role: 'Backend Dev',
    team: 'API Services',
    joinDate: 'Nov 15, 2023',
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: '5',
    name: 'Jessica Lee',
    email: 'jessica.l@gtss.com',
    role: 'QA Lead',
    team: 'Core Systems',
    joinDate: 'Jun 10, 2021',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  },
];

export const memberProfileData: MemberProfile = {
  name: "Sarah Jenkins",
  employeeId: "GTSS-4829",
  role: "Senior Backend Engineer",
  department: "Core Infrastructure",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  email: "sarah.j@gtss.com",
  phone: "+1 (555) 012-3456",
  slack: "@sarah.jenkins",
  timezone: "EST (UTC-5)",
};

export const memberTabs = [
  { id: "overview", label: "Overview" },
  { id: "products", label: "Assigned Products" },
  { id: "permissions", label: "Permissions" },
];
