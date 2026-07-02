import { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h3 className="mb-4 text-base font-bold text-ink dark:text-white">{title}</h3>
      {children}
    </div>
  );
}

function ToggleRow({ label, description, checked, onChange }: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-3 last:border-0 dark:border-slate-800">
      <div>
        <p className="text-sm font-medium text-ink dark:text-white">{label}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition-colors ${
          checked ? 'bg-accent' : 'bg-slate-300 dark:bg-slate-600'
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink dark:text-white">Settngs</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Manage your prefernces and account.</p>
      </div>

      <SettingsSection title="Appearance">
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm font-medium text-ink dark:text-white">Dark Mode</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Switch between dark and dark themes</p>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative h-6 w-11 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-accent' : 'bg-slate-300 dark:bg-slate-600'
            }`}
          >
            <span
              className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </SettingsSection>

      <SettingsSection title="Notifications">
        <ToggleRow
          label="Email notifications"
          description="Receive email alerts for important updates"
          checked={emailNotifs}
          onChange={setEmailNotifs}
        />
        <ToggleRow
          label="Push notifications"
          description="Get push notifications in your browser"
          checked={pushNotifs}
          onChange={setPushNotifs}
        />
        <ToggleRow
          label="Weekly digest"
          description="A summary of activity every Monday"
          checked={weeklyDigest}
          onChange={setWeeklyDigest}
        />
      </SettingsSection>

      <SettingsSection title="Security">
        <ToggleRow
          label="Two-factor authentication"
          description="Add an extra layer of security to your account"
          checked={twoFactor}
          onChange={setTwoFactor}
        />
        <div className="py-3">
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800">
            Change Password
          </button>
        </div>
      </SettingsSection>

      <SettingsSection title="Danger Zone">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button className="mt-3 rounded-xl border border-rose-300 bg-white px-4 py-2 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50 dark:border-rose-800 dark:bg-transparent dark:text-rose-400 dark:hover:bg-rose-900/20">
          Delete Account
        </button>
      </SettingsSection>
    </div>
  );
}
