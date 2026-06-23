function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold tracking-tight text-ink">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="aurora pointer-events-none absolute inset-0 -z-10" />
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            New • Orbit 2.0
          </span>

          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Your team's home base.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
            Boards, docs, and automations in one calm workspace. Plan the week, write things
            down, and let the busywork run itself.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* A deliberately weak label — a great first thing to change with Frontloop. */}
            <a
              href="#"
              className="rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-soft transition-colors hover:bg-accent-deep"
            >
              Submit
            </a>
            <a
              href="#features"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-slate-400"
            >
              Learn more
            </a>
          </div>

          <p className="mt-5 font-mono text-xs text-slate-400">
            // this page is yours — point at anything and describe a change
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-200 pt-10">
          <Stat value="1,234" label="teams onboard" />
          <Stat value="50k+" label="boards created" />
          <Stat value="99.9%" label="uptime" />
        </div>
      </div>
    </section>
  );
}
