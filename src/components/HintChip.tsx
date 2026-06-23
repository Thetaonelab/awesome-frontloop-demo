import { useEffect, useState } from 'react';

const DISMISS_KEY = 'orbit_frontloop_hint_dismissed';

/**
 * A small, dismissible nudge — the only overt hint on the page. It points at the
 * Frontloop inspector (the floating ⋞ button) without turning the page into a
 * tutorial. Sits bottom-left so it never covers the inspector at bottom-right.
 */
export default function HintChip() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;
    const t = setTimeout(() => setShow(true), 1600);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, '1');
    setShow(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-xs animate-[fadeIn_240ms_ease-out]">
      <div className="flex items-start gap-3 rounded-2xl border border-accent/20 bg-white/95 p-4 shadow-soft backdrop-blur">
        <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-accent text-white font-mono text-base font-bold">
          ⋞
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">Make it yours</p>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
            Point at anything on this page and describe a change — try fixing the{' '}
            <span className="font-semibold text-accent-deep">Submit</span> button's label.
          </p>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="ml-1 flex-shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
