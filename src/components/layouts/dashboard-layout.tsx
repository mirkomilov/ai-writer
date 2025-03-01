import Navbar from '../dashboard/navbar';
import Sidebar from '../dashboard/sidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
