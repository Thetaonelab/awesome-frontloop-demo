export interface StatCard {
  id: string;
  title: string;
  value: string;
  change: number; // percentage, positive = up
  changeLabel: string;
  icon: string;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
  cost: number;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed' | 'refunded';
  date: string;
}

export interface Activity {
  id: string;
  user: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  members: number;
  color: string;
  due: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'away' | 'busy' | 'offline';
  tasks: number;
}

export const statsCards: StatCard[] = [
  { id: 's1', title: 'Total Revenue', value: '$48,250', change: 12.5, changeLabel: 'vs last month', icon: '💰' },
  { id: 's2', title: 'Active Users', value: '28,47', change: 8.2, changeLabel: 'vs last month', icon: '👥' },
  { id: 's3', title: 'Orders', value: '1,423', change: -3.1, changeLabel: 'vs last month', icon: '📦' },
  { id: 's4', title: 'Conversion Rate', value: '3.24%', change: 1.8, changeLabel: 'vs last month', icon: '📈' },
];

export const revenueData: RevenuePoint[] = [
  { month: 'Jan', revenue: 32000, cost: 18000 },
  { month: 'Feb', revenue: 28000, cost: 16000 },
  { month: 'Mar', revenue: 35000, cost: 19000 },
  { month: 'Apr', revenue: 42000, cost: 21000 },
  { month: 'May', revenue: 38000, cost: 20000 },
  { month: 'Jun', revenue: 48250, cost: 24000 },
];

export const recentOrders: Order[] = [
  { id: '#ORD-001', customer: 'Alice Chen', product: 'Pro Plan Annual', amount: 299, status: 'paid', date: '2026-07-01' },
  { id: '#ORD-002', customer: 'Bob Martinez', product: 'Team License', amount: 899, status: 'paid', date: '2026-07-01' },
  { id: '#ORD-003', customer: 'Carol Smith', product: 'Starter Plan', amount: 49, status: 'pending', date: '2026-06-30' },
  { id: '#ORD-004', customer: 'Dave Kim', product: 'Pro Plan Monthly', amount: 29, status: 'failed', date: '2026-06-30' },
  { id: '#ORD-005', customer: 'Eve Johnson', product: 'Enterprise Plan', amount: 2499, status: 'paid', date: '2026-06-29' },
  { id: '#ORD-006', customer: 'Frank Lee', product: 'Team License', amount: 899, status: 'refunded', date: '2026-06-28' },
  { id: '#ORD-007', customer: 'Grace Wang', product: 'Starter Plan', amount: 49, status: 'pending', date: '2026-06-28' },
];

export const activities: Activity[] = [
  { id: 'a1', user: 'Alice Chen', avatar: 'AC', action: 'created', target: 'Project Alpha', time: '2 seconds ago' },
  { id: 'a2', user: 'Bob Martinez', avatar: 'BM', action: 'completed', target: 'API Integration', time: '15 min ago' },
  { id: 'a3', user: 'Carol Smith', avatar: 'CS', action: 'commented on', target: 'Dashboard redesign', time: '1 hr ago' },
  { id: 'a4', user: 'Dave Kim', avatar: 'DK', action: 'pushed', target: '3 commits to main', time: '2 hr ago' },
  { id: 'a5', user: 'Eve Johnson', avatar: 'EJ', action: 'deployed', target: 'v2.4.1 to production', time: '3 hr ago' },
  { id: 'a6', user: 'Frank Lee', avatar: 'FL', action: 'assigned', target: 'Bug #1423', time: '5 hr ago' },
];

export const projects: Project[] = [
  { id: 'p1', name: 'Project Alpha', description: 'Customer portal redesign with new analitics dashboard.', progress: 75, members: 6, color: '#6d3ed8', due: '2026-08-15' },
  { id: 'p2', name: 'API Integration', description: 'Third-party payment gateway and webhook system.', progress: 45, members: 4, color: '#ec4899', due: '2026-08-30' },
  { id: 'p3', name: 'Mobile App', description: 'React Native app with core feature parity.', progress: 20, members: 8, color: '#14b8a6', due: '2026-10-01' },
  { id: 'p4', name: 'Data Pipeline', description: 'Real-time streaming and ETL infrastructure.', progress: 90, members: 3, color: '#f97316', due: '2026-07-20' },
  { id: 'p5', name: 'Security Audit', description: 'Penetration testing and compliance certification.', progress: 30, members: 2, color: '#3b82f6', due: '2026-09-01' },
  { id: 'p6', name: 'Docs Platform', description: 'New documentation site with versioned API references.', progress: 60, members: 5, color: '#22c55e', due: '2026-08-10' },
];

export const teamMembers: TeamMember[] = [
  { id: 'm1', name: 'Alice Chen', role: 'Product Designer', avatar: 'AC', status: 'online', tasks: 4 },
  { id: 'm2', name: 'Bob Martinez', role: 'Backend Engineer', avatar: 'BM', status: 'busy', tasks: 7 },
  { id: 'm3', name: 'Carol Smith', role: 'Frontend Engineer', avatar: 'CS', status: 'away', tasks: 3 },
  { id: 'm4', name: 'Dave Kim', role: 'DevOps Engineer', avatar: 'DK', status: 'online', tasks: 2 },
  { id: 'm5', name: 'Eve Johnson', role: 'Product Manager', avatar: 'EJ', status: 'busy', tasks: 9 },
  { id: 'm6', name: 'Frank Lee', role: 'QA Engineer', avatar: 'FL', status: 'offline', tasks: 5 },
  { id: 'm7', name: 'Grace Wang', role: 'Data Scientist', avatar: 'GW', status: 'online', tasks: 3 },
  { id: 'm8', name: 'Henry Park', role: 'UX Writer', avatar: 'HP', status: 'away', tasks: 1 },
];
