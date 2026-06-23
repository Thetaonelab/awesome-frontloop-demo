type Feature = {
  icon: JSX.Element;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="11" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="18" width="7" height="3" rx="1.5" />
      </svg>
    ),
    title: 'Flexible boards',
    body: 'Drag tasks across columns, group by anything, and see the week at a glance.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 3h9l5 5v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M14 3v5h5M8 13h8M8 17h6" />
      </svg>
    ),
    title: 'Docs that link',
    body: 'Write notes that connect to the work, so context never gets lost again.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),
    title: 'Automations',
    body: 'Set simple rules and let repetitive steps happen on there own.',
  },
];

function FeatureCard({ icon, title, body }: Feature) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/30">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
        <span className="h-5 w-5">{icon}</span>
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </article>
  );
}

export default function Features() {
  return (
    <section id="features" className="container-page py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink">Everything in one place</h2>
        <p className="mt-3 text-slate-600">
          Stop hopping between tools. Orbit keeps your plans, your writing, and your busywork
          together.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
