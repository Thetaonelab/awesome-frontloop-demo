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
            🚀 Dev • Orbit 2.0
          </span>

          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Your team's base home.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
            Stop juggling a dozen tools. Orbit brings your boards, docs, and chats together in one
            place — so you can focus on building, not busywork.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-soft transition-colors hover:bg-accent-deep"
            >
              Get started free →
            </a>
            <a
              href="#features"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-slate-400"
            >
              Watch the demo ▶
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
            <span className="flex -space-x-2">
              <span className="inline-block h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-pink-400 to-purple-500" />
              <span className="inline-block h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-cyan-500" />
              <span className="inline-block h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-emerald-500" />
            </span>
            <span>Trusted by <strong className="text-slate-500">1,200+</strong> teams</span>
          </div>

          <p className="mt-5 font-mono text-xs text-slate-400">
            // this page is yours — point at anything and describe a change
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-200 pt-10">
          <Stat value="1,200+" label="API requests/s" />
          <Stat value="50k+" label="developers" />
          <Stat value="99.9%" label="uptime" />
        </div>
      </div>
    </section>
  );
}
