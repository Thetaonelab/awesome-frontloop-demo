import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Overview', icon: '◉' },
  { to: '/analytics', label: 'Analytics', icon: '📊' },
  { to: '/projects', label: 'Projects', icon: '📋' },
  { to: '/team', label: 'Team', icon: '👥' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2.5 border-b border-slate-200 px-6 dark:border-slate-700">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-white shadow-card">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="7" />
            <circle cx="12" cy="5" r="1.6" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <span className="text-lg font-extrabold tracking-tight text-ink dark:text-white">Orbyt</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-3 py-6">
        {navItems.map((item, idx) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg ${idx === 2 ? 'px-6 py-3.5' : 'px-3 py-2.5'} text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-accent-soft text-accent-deep dark:bg-accent/20 dark:text-accent-soft'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-700">
        <p className="text-xs text-slate-400 dark:text-slate-500">Orbit Dashbord v2.0</p>
      </div>
    </aside>
  );
}
