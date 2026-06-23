function Column({ title, count, items, tone }: { title: string; count: number; items: string[]; tone: string }) {
  return (
    <div className="flex-1 rounded-xl bg-slate-50 p-3">
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</span>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${tone}`}>{count}</span>
      </div>
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it} className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm">
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="container-page py-20">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
          {/* Copy + actions */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-deep">Live preview</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
              See your week come together
            </h2>
            <p className="mt-4 text-slate-600">
              A board for every project, updated in real time as your team moves work forward.
              No setup, no clutter — just momentum.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {/* These two compete: the muted one is arguably the real primary action. */}
              <a
                href="#"
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-400"
              >
                Get the app
              </a>
              <a
                href="#"
                className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-200"
              >
                Maybe later
              </a>
            </div>
          </div>

          {/* Mock board */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-card">
            <div className="mb-3 flex items-center gap-1.5 px-1">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ml-2 text-xs text-slate-400">orbit / sprint-24</span>
            </div>
            <div className="flex gap-3">
              <Column title="To do" count={3} tone="bg-slate-200 text-slate-600" items={['Design empty states', 'Write changelog', 'Fix nav on mobile']} />
              <Column title="Doing" count={2} tone="bg-accent-soft text-accent-deep" items={['Onboarding flow', 'Billing page']} />
              <Column title="Done" count={1} tone="bg-emerald-100 text-emerald-700" items={['Dark mode']} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
