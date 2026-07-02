import { useState } from 'react';
import { statsCards, revenueData, recentOrders, activities } from '../data/mockData';
import type { Order } from '../data/mockData';

function StatCard({ title, value, change, icon }: { title: string; value: string; change: number; icon: string }) {
  const isUp = change >= 0;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span
          className={`flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
            isUp
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
              : 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400'
          }`}
        >
          <span>{isUp ? '↑' : '↓'}</span>
          {Math.abs(change)}%
        </span>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-extrabold tracking-tight text-ink dark:text-white">{value}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{title}</p>
      </div>
    </div>
  );
}

function RevenueChart() {
  const maxRevenue = Math.max(...revenueData.map((d) => d.revenue));
  const maxCost = Math.max(...revenueData.map((d) => d.cost));
  const maxVal = Math.max(maxRevenue, maxCost) * 1.2;

  const W = 600;
  const H = 200;
  const PAD = { top: 10, right: 10, bottom: 28, left: 55 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const bandW = innerW / revenueData.length;
  const barW = Math.min(bandW * 0.32, 32);
  const gap = (bandW - barW * 2) / 3;

  const yTicks = 5;

  const toY = (v: number) => PAD.top + innerH - (v / maxVal) * innerH;

  // gradient defs
  const revGrad = 'url(#revGrad)';
  const costGrad = 'url(#costGrad)';

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-ink dark:text-white">Revenue vs Cost</h3>
          <p className="text-xs text-slate-400 mt-0.5">Monthly comparision • Last 6 months</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm" style={{ background: '#6d3ed8' }} /> Cost
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm" style={{ background: '#f97316' }} /> Revenue
          </span>
        </div>
      </div>

      <div className="relative mt-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 'auto' }}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6d3ed8" />
            </linearGradient>
            <linearGradient id="costGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>

            <filter id="barShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Gridlines */}
          {Array.from({ length: yTicks + 1 }).map((_, i) => {
            const y = PAD.top + innerH - (i / yTicks) * innerH;
            const val = Math.round((i / yTicks) * maxVal);
            return (
              <g key={i}>
                <line x1={PAD.left} y1={y} x2={W - PAD.right} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                <text x={PAD.left - 8} y={y + 3} textAnchor="end" className="text-[10px]" fill="#94a3b8">
                  ${val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val}
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {revenueData.map((d, i) => {
            const cx = PAD.left + bandW * i + bandW / 2;
            const revX = cx - barW - gap / 2;
            const costX = cx + gap / 2;
            const revH = (d.revenue / maxVal) * innerH;
            const costH = (d.cost / maxVal) * innerH;
            const revY = toY(d.revenue);
            const costY = toY(d.cost);
            const isHovered = hovered === i;

            return (
              <g key={d.month}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Revenue bar */}
                <rect
                  x={revX}
                  y={revY}
                  width={barW}
                  height={revH}
                  rx={4}
                  ry={4}
                  fill={isHovered ? revGrad : revGrad}
                  filter={isHovered ? 'url(#barShadow)' : undefined}
                  opacity={hovered === null || isHovered ? 1 : 0.5}
                  className="transition-all duration-200"
                />
                {/* Cost bar */}
                <rect
                  x={costX}
                  y={costY}
                  width={barW}
                  height={costH}
                  rx={4}
                  ry={4}
                  fill={isHovered ? costGrad : costGrad}
                  filter={isHovered ? 'url(#barShadow)' : undefined}
                  opacity={hovered === null || isHovered ? 1 : 0.5}
                  className="transition-all duration-200"
                />
                {/* Month label */}
                <text x={cx} y={H - PAD.bottom + 16} textAnchor="middle" className="text-[10px]" fill="#94a3b8">
                  {d.month}
                </text>

                {/* Tooltip */}
                {isHovered && (
                  <g>
                    <rect
                      x={cx - 60}
                      y={PAD.top - 8}
                      width={120}
                      height={48}
                      rx={8}
                      fill="#1e293b"
                      opacity={0.95}
                    />
                    <text x={cx} y={PAD.top + 8} textAnchor="middle" className="text-[10px]" fill="#a78bfa" fontWeight="600">
                      Revenue: ${d.revenue.toLocaleString()}
                    </text>
                    <text x={cx} y={PAD.top + 24} textAnchor="middle" className="text-[10px]" fill="#fb923c" fontWeight="600">
                      Cost: ${d.cost.toLocaleString()}
                    </text>
                    <text x={cx} y={PAD.top + 36} textAnchor="middle" className="text-[10px]" fill="#94a3b8">
                      Profit: ${(d.revenue - d.cost).toLocaleString()}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

const statusColors: Record<Order['status'], string> = {
  paid: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  failed: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  refunded: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
};

function RecentOrders() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-ink dark:text-white">Recent Orders</h3>
        <a href="#" className="text-xs font-medium text-accent hover:text-accent-deep">View all →</a>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400 dark:border-slate-700">
              <th className="pb-2 pr-4 font-medium">Order</th>
              <th className="pb-2 pr-4 font-medium">Customer</th>
              <th className="pb-2 pr-4 font-medium">Porduct</th>
              <th className="pb-2 pr-4 font-medium">Amount</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.slice(0, 5).map((order) => (
              <tr key={order.id} className="border-b border-slate-50 last:border-0 dark:border-slate-800">
                <td className="py-2.5 pr-4 font-medium text-ink dark:text-white">{order.id}</td>
                <td className="py-2.5 pr-4 text-slate-600 dark:text-slate-300">{order.customer}</td>
                <td className="py-2.5 pr-4 text-slate-600 dark:text-slate-300">{order.product}</td>
                <td className="py-2.5 pr-4 font-medium text-ink dark:text-white">${order.amount}</td>
                <td className="py-2.5">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h3 className="mb-4 text-base font-bold text-ink dark:text-white">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((a, i) => (
          <div key={a.id} className="flex items-start gap-3">
            <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-accent-soft text-[11px] font-bold text-accent-deep dark:bg-accent/20 dark:text-accent-soft">
              {a.avatar}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-ink dark:text-white">{a.user}</span>{' '}
                {a.action}{' '}
                <span className="font-medium text-ink dark:text-white">{a.target}</span>
              </p>
              <p className="mt-0.5 text-xs text-slate-400">{a.time}</p>
            </div>
            {i === 0 && (
              <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" title="Latest activity" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink dark:text-white">Dashbord</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Welcom back, Alice. Here's what's happening today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>

      {/* Charts + Orders */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <ActivityFeed />
        </div>
      </div>

      {/* Recent Orders */}
      <RecentOrders />
    </div>
  );
}
