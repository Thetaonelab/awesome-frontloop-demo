export default function Footer() {
  const groups: { title: string; links: string[] }[] = [
    { title: 'Product', links: ['Boards', 'Docs', 'Automations', 'Pricing'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers'] },
    { title: 'Resources', links: ['Help center', 'Community', 'Status'] },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="7" />
                <circle cx="12" cy="5" r="1.6" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="font-extrabold tracking-tight text-ink">Orbit</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-500">
            Your team's calm home base for plans, docs, and the busywork in between.
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-sm font-semibold text-ink">{g.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {g.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-ink">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        © 2026 Orbit. A Frontloop demo app — change anything you like.
      </div>
    </footer>
  );
}
