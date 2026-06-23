function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 no-underline">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-white shadow-card">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="5" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="text-lg font-extrabold tracking-tight text-ink">Orbit</span>
    </a>
  );
}

export default function Nav() {
  const links = ['Product', 'Features', 'Pricing', 'Docs'];
  return (
    <header id="top" className="sticky top-0 z-30 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="transition-colors hover:text-ink">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm font-medium text-slate-600 hover:text-ink sm:block">
            Log in
          </a>
          <a
            href="#"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-card transition-colors hover:bg-accent-deep"
          >
            Start free
          </a>
        </div>
      </nav>
    </header>
  );
}
