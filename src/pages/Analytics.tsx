import { revenueData } from '../data/mockData';

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 200;
  const h = 60;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 10) - 5;
    return `${x},${y}`;
  });
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-12 w-full" preserveAspectRatio="none">
      <path d={pathD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const kpis = [
  { label: 'Page Views', value: '142,389', change: 12.3, data: revenueData.map((d) => d.revenue * 3), color: '#6d3ed8' },
  { label: 'Unique Visitors', value: '38,401', change: 8.1, data: revenueData.map((d) => d.cost * 2.2), color: '#ec4899' },
  { label: 'Bounce Rate', value: '34.2%', change: -2.4, data: [35, 34, 33, 35, 34, 34], color: '#f97316' },
  { label: 'Avg Session', value: '4m 12s', change: 5.7, data: [3.5, 3.8, 4.0, 3.9, 4.1, 4.2].map((v) => v * 1000), color: '#14b8a6' },
];

const browsers = [
  { name: 'Chrome', share: 58, color: '#22c55e' },
  { name: 'Firefox', share: 18, color: '#f97316' },
  { name: 'Safari', share: 11, color: '#3b82f6' },
  { name: 'Edge', share: 7, color: '#6d3ed8' },
  { name: 'Other', share: 3, color: '#94a3b8' },
];

const pages = [
  { page: '/dashboard', views: 12480, bounce: '28%', avgTime: '3m 45s' },
  { page: '/projects', views: 8940, bounce: '32%', avgTime: '4m 12s' },
  { page: '/analytics', views: 5620, bounce: '22%', avgTime: '5m 30s' },
  { page: '/settings', views: 3410, bounce: '45%', avgTime: '1m 50s' },
  { page: '/team', views: 2890, bounce: '35%', avgTime: '2m 15s' },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink dark:text-white">Analitics</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Traffic, engagment, and audience insigths.</p>
      </div>

      {/* KPI sparkline cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{kpi.label}</p>
              <span
                className={`text-[11px] font-semibold ${
                  kpi.change >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {kpi.change >= 0 ? '↑' : '↓'} {Math.abs(kpi.change)}%
              </span>
            </div>
            <p className="mt-2 text-2xl font-extrabold text-ink dark:text-white">{kpi.value}</p>
            <Sparkline data={kpi.data} color={kpi.color} />
          </div>
        ))}
      </div>

      {/* Browser share */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="mb-4 text-base font-bold text-ink dark:text-white">Browser Breakdwn</h3>
          <div className="space-y-3">
            {browsers.map((b) => (
              <div key={b.name} className="flex items-center gap-3">
                <span className="w-16 text-sm text-slate-600 dark:text-slate-300">{b.name}</span>
                <div className="flex-1 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: `${b.share}%`, background: b.color }}
                  />
                </div>
                <span className="w-10 text-right text-sm font-medium text-ink dark:text-white">{b.share}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="mb-4 text-base font-bold text-ink dark:text-white">Top Pages</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400 dark:border-slate-700">
                  <th className="pb-2 pr-4 font-medium">Page</th>
                  <th className="pb-2 pr-4 font-medium">Views</th>
                  <th className="pb-2 pr-4 font-medium">Bounce</th>
                  <th className="pb-2 font-medium">Avg Time</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((p) => (
                  <tr key={p.page} className="border-b border-slate-50 last:border-0 dark:border-slate-800">
                    <td className="py-2.5 pr-4 font-mono text-xs text-accent">{p.page}</td>
                    <td className="py-2.5 pr-4 font-medium text-ink dark:text-white">{p.views.toLocaleString()}</td>
                    <td className="py-2.5 pr-4 text-slate-600 dark:text-slate-300">{p.bounce}</td>
                    <td className="py-2.5 text-slate-600 dark:text-slate-300">{p.avgTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
