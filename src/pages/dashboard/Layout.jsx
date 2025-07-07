import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ArrowRightLeft,
  Banknote,
  FileText,
  FileBarChart2,
  User2,
  Ticket,
  HandCoins,
  Settings,
  Smartphone,
  LogOut
} from 'lucide-react';

const SidebarLink = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-cyan-100 ${
        isActive ? 'bg-cyan-100 text-cyan-700' : 'text-gray-700'
      }`
    }
  >
    <Icon size={18} />
    <span className="whitespace-nowrap">{label}</span>
  </NavLink>
);

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-md z-40 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        } hidden md:flex flex-col`}
      >
        <div className="px-4 py-5">
          <h1 className="text-xl font-bold text-cyan-600">
            {sidebarOpen ? 'Upyogu' : 'UP'}
          </h1>
        </div>
        <nav className="flex-1 space-y-1 px-2">
            <SidebarLink to="/dashboard" icon={LayoutDashboard} label={sidebarOpen && 'Dashboard'} />
            <SidebarLink to="/dashboard/manage" icon={ArrowRightLeft} label={sidebarOpen && 'Manage'} />
            <SidebarLink to="/dashboard/chargeback" icon={Banknote} label={sidebarOpen && 'ChargeBack'} />
            <SidebarLink to="/dashboard/refund-transactions" icon={FileText} label={sidebarOpen && 'Refund Transactions'} />
            <SidebarLink to="/dashboard/pay-profile" icon={User2} label={sidebarOpen && 'Pay Profile'} />
            <SidebarLink to="/dashboard/support-ticket" icon={Ticket} label={sidebarOpen && 'Support Ticket'} />
            <SidebarLink to="/dashboard/settlement-reports" icon={HandCoins} label={sidebarOpen && 'Settlement Reports'} />
            <SidebarLink to="/dashboard/reports" icon={FileBarChart2} label={sidebarOpen && 'Reports'} />
            <SidebarLink to="/dashboard/settings" icon={Settings} label={sidebarOpen && 'Settings'} />
            <SidebarLink to="/dashboard/booking-ticket" icon={Ticket} label={sidebarOpen && 'Booking Ticket'} />
            <SidebarLink to="/dashboard/mobile-app" icon={Smartphone} label={sidebarOpen && 'Mobile App'} />
        </nav>
        <div className="px-4 pb-5 mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-100 px-3 py-2 rounded-lg w-full"
          >
            <LogOut size={18} /> {sidebarOpen && 'Logout'}
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div className={`flex-1 min-h-screen flex flex-col md:ml-${sidebarOpen ? '64' : '16'}`}>
        {/* Fixed header */}
        <header className="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white shadow z-30 flex items-center justify-between px-4">
          <button className="text-gray-600 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <h2 className="text-lg font-semibold text-cyan-600">Dashboard</h2>
          <span className="text-sm font-medium text-gray-700 hidden sm:inline">Rajat Yadav</span>
        </header>

        {/* Page Content */}
        <main className="mt-16 p-6 bg-gray-50 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
