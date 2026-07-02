import { projects } from '../data/mockData';

function ProjectCard({ name, description, progress, members, color, due, id }: typeof projects[number]) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-xl text-lg font-bold text-white"
            style={{ background: color }}
          >
            {name.charAt(0)}
          </span>
          <div>
            <h3 className="font-bold text-ink dark:text-white">{name}</h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{due}</p>
          </div>
        </div>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          {members} {members === 1 ? 'member' : 'members'}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Progress</span>
          <span className="font-semibold text-ink dark:text-white">{progress}%</span>
        </div>
        <div className="mt-1.5 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${id === 'p4' ? 48 : progress}%`,
              background: id === 'p4' ? '#94a3b8' : color,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-ink dark:text-white">Projcts</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{projects.length} active projcts</p>
        </div>
        <button className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-deep">
          + New Project
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
