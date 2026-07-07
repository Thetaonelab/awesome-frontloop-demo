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

/* ─── Home Decor Products ─── */

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  badge: 'new' | 'sale' | 'best-seller' | null;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'pr-001',
    name: 'Nordic Ceramic Vase',
    category: 'Vases',
    price: 59,
    originalPrice: 79,
    rating: 4.8,
    reviewCount: 143,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=300&fit=crop&auto=format',
    description: 'Hand-thrown stoneware vase with a matte glaze finish. Each piece has unique grain patterns.',
    badge: 'sale',
    inStock: true,
  },
  {
    id: 'pr-002',
    name: 'Wool Tufted Cushion',
    category: 'Cushions',
    price: 45,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop&auto=format',
    description: 'Hand-tufted New Zealand wool cushion with a geometric pattern. Reversible design.',
    badge: 'best-seller',
    inStock: true,
  },
  {
    id: 'pr-003',
    name: 'Geometric Wall Mirror',
    category: 'Wall Art',
    price: 129,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 62,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop&auto=format',
    description: 'Hexagonal brass-framed mirror with beveled edges. Adds depth to any room.',
    badge: 'new',
    inStock: true,
  },
  {
    id: 'pr-004',
    name: 'Linen Blend Throw Blanket',
    category: 'Textiles',
    price: 89,
    originalPrice: 110,
    rating: 4.7,
    reviewCount: 215,
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400&h=300&fit=crop&auto=format',
    description: 'Stonewashed linen-cotton blend throw. Lightweight yet warm. Available in 6 earth tones.',
    badge: 'sale',
    inStock: true,
  },
  {
    id: 'pr-005',
    name: 'Bamboo Room Divider',
    category: 'Furniture',
    price: 199,
    originalPrice: null,
    rating: 4.5,
    reviewCount: 47,
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop&auto=format',
    description: 'Three-panel folding screen crafted from sustainable bamboo. Natural finish with oil seal.',
    badge: null,
    inStock: false,
  },
  {
    id: 'pr-006',
    name: 'Artisan Pendant Light',
    category: 'Lighting',
    price: 149,
    originalPrice: 189,
    rating: 4.8,
    reviewCount: 106,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop&auto=format',
    description: 'Handwoven rattan pendant shade on a black cord. Creates warm ambient light patterns.',
    badge: 'sale',
    inStock: true,
  },
  {
    id: 'pr-007',
    name: 'Terrazzo Planter Set',
    category: 'Planters',
    price: 55,
    originalPrice: null,
    rating: 4.4,
    reviewCount: 131,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop&auto=format',
    description: 'Set of 3 cement terrazzo planters in ascending sizes. Each has a drainage hole and tray.',
    badge: 'best-seller',
    inStock: true,
  },
  {
    id: 'pr-008',
    name: 'Floating Shelf Trio',
    category: 'Furniture',
    price: 75,
    originalPrice: 95,
    rating: 4.3,
    reviewCount: 178,
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=300&fit=crop&auto=format',
    description: 'Set of 3 solid oak floating shelves with hidden brackets. Natural or walnut finish.',
    badge: 'sale',
    inStock: true,
  },
  {
    id: 'pr-009',
    name: 'Scented Soy Candle Set',
    category: 'Decor',
    price: 38,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 324,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=300&fit=crop&auto=format',
    description: 'Triple-wick soy wax candles in amber glass. Scents: Sandalwood, Bergamot, Cedar.',
    badge: 'best-seller',
    inStock: true,
  },
  {
    id: 'pr-010',
    name: 'Woven Wall Tapestry',
    category: 'Wall Art',
    price: 115,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 58,
    image: 'https://images.unsplash.com/photo-1612392167062-4d8c1dba5c6c?w=400&h=300&fit=crop&auto=format',
    description: 'Hand-loomed cotton tapestry with abstract earth-toned patterns. 120 × 80 cm.',
    badge: 'new',
    inStock: true,
  },
  {
    id: 'pr-011',
    name: 'Marble Coffee Table',
    category: 'Furniture',
    price: 449,
    originalPrice: 599,
    rating: 4.7,
    reviewCount: 93,
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=400&h=300&fit=crop&auto=format',
    description: 'Italian Carrara marble top on a brushed brass base. Minimalist sculptural design.',
    badge: 'sale',
    inStock: true,
  },
  {
    id: 'pr-012',
    name: 'Macrame Plant Hanger',
    category: 'Planters',
    price: 28,
    originalPrice: null,
    rating: 4.5,
    reviewCount: 201,
    image: 'https://images.unsplash.com/photo-1466629437334-b4f6603563c5?w=400&h=300&fit=crop&auto=format',
    description: 'Hand-knotted cotton macrame hanger. Adjustable length up to 120 cm. Holds pots up to 25 cm.',
    badge: null,
    inStock: true,
  },
  {
    id: 'pr-013',
    name: 'Velvet Accent Chair',
    category: 'Furniture',
    price: 379,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop&auto=format',
    description: 'Mid-century inspired velvet chair with walnut legs. High-density foam seat cushion.',
    badge: 'new',
    inStock: true,
  },
  {
    id: 'pr-014',
    name: 'Japanese Tea Set',
    category: 'Tableware',
    price: 68,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 157,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop&auto=format',
    description: 'Traditional Tokoname-yaki teapot with 4 matcha cups. Unglazed clay, handcrafted in Japan.',
    badge: 'best-seller',
    inStock: true,
  },
  {
    id: 'pr-015',
    name: 'Copper Bathroom Set',
    category: 'Bathroom',
    price: 85,
    originalPrice: 105,
    rating: 4.4,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc942d?w=400&h=300&fit=crop&auto=format',
    description: 'Hammered copper soap dispenser, toothbrush holder, and tray set. Develops natural patina.',
    badge: 'sale',
    inStock: false,
  },
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
