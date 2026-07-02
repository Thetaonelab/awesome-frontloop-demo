import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { TopBar } from './TopBar';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-ink dark:bg-slate-950 dark:text-white">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:pl-64">
        <TopBar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
