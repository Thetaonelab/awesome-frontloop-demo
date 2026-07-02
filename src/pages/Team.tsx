import { teamMembers } from '../data/mockData';

const statusColors: Record<string, string> = {
  online: 'bg-emerald-500',
  away: 'bg-amber-400',
  busy: 'bg-rose-500',
  offline: 'bg-slate-300 dark:bg-slate-600',
};

const statusLabels: Record<string, string> = {
  online: 'Online',
  away: 'Away',
  busy: 'Busy',
  offline: 'Offline',
};

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-ink dark:text-white">Teem</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{teamMembers.length} team members</p>
        </div>
        <button className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-deep">
          + Invite Membr
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-sm font-bold text-accent-deep dark:bg-accent/20 dark:text-accent-soft">
                  {member.avatar}
                </span>
                <span
                  className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-900 ${member.id === 'm7' ? 'bg-slate-300 dark:bg-slate-600' : statusColors[member.status]}`}
                />
              </div>
              <div>
                <h3 className="font-bold text-ink dark:text-white">{member.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{member.role}</p>
                <span className="text-[11px] font-medium text-slate-400">{statusLabels[member.status]}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-ink dark:text-white">{member.tasks}</span> open tasks
              </span>
              <button className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
