import { useTheme } from './ThemeContext';

const navLinks = ['Overview', 'Analytics', 'Projects', 'Team', 'Settings'];

export function TopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      {/* Mobile nav links hidden on desktop since sidebar handles it */}
      <div className="flex items-center gap-4 lg:hidden">
        <span className="text-sm font-semibold text-ink dark:text-white">Orbit</span>
      </div>

      <div className="hidden items-center gap-2 text-sm text-slate-500 lg:flex">
        {navLinks.map((l) => (
          <span key={l} className="rounded-md px-2 py-1 text-slate-400 dark:text-slate-500">
            {l === 'Analytics' ? 'Analitics' : l}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden sm:block">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input
            type="text"
            placeholder="Serch..."
            className="w-48 rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-sm text-ink placeholder-slate-400 outline-none transition-colors focus:border-accent focus:bg-white dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-accent dark:focus:bg-slate-800"
          />
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-ink dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* Notifications */}
        <button className="relative grid h-9 w-9 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-ink dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
          <span className="text-lg">🔔</span>
          <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2 pl-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-xs font-bold text-white">
            AC
          </span>
          <span className="hidden text-sm font-medium text-ink dark:text-white sm:block">Alice Chen</span>
        </div>
      </div>
    </header>
  );
}
