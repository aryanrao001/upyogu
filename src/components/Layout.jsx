import React, { useState } from "react";
import {
  Menu, User, Settings, LogOut, LifeBuoy, Building, Receipt, FileText, CreditCard
} from "lucide-react";

const SidebarItem = ({ icon: Icon, text, isOpen }) => (
  <div className="flex items-center space-x-3 text-sm py-3 px-3 rounded-xl hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-200 cursor-pointer">
    <Icon size={20} className="shrink-0" />
    {isOpen && <span className="whitespace-nowrap">{text}</span>}
  </div>
);

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 font-sans">
      {/* Sidebar */}
      <div
        className={`bg-white border-r border-gray-200 transition-all duration-300 shadow-sm ${
          sidebarOpen ? "w-48" : "w-16"
        } hidden md:flex flex-col px-3 py-6`}
      >
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-xl font-bold text-indigo-600 tracking-wide">
            {sidebarOpen ? "Pay जी" : "🅿"}
          </h1>
          {sidebarOpen && (
            <button onClick={() => setSidebarOpen(false)} className="md:hidden">
              <Menu size={18} />
            </button>
          )}
        </div>

        <SidebarItem icon={User} text="Dashboard" isOpen={sidebarOpen} />
        <SidebarItem icon={Building} text="Manage" isOpen={sidebarOpen} />
        <SidebarItem icon={CreditCard} text="ChargeBack" isOpen={sidebarOpen} />
        <SidebarItem icon={Receipt} text="Refunds" isOpen={sidebarOpen} />
        <SidebarItem icon={FileText} text="Reports" isOpen={sidebarOpen} />
        <SidebarItem icon={LifeBuoy} text="Support" isOpen={sidebarOpen} />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex justify-between items-center border-b-2 border-gray-200 bg-white px-4 py-3">
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu size={22} />
            </button>
            <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 hover:bg-indigo-100 p-2 rounded-full transition">
              <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="rounded-full border w-8 h-8"
              />
              <span className="text-sm font-medium hidden sm:block text-gray-700">
                webloxic
              </span>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
              <div className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <User size={16} /> <span>Profile</span>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <Settings size={16} /> <span>Settings</span>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <LifeBuoy size={16} /> <span>Support</span>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center gap-2 cursor-pointer">
                <LogOut size={16} /> <span>Logout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-6 bg-gradient-to-bl from-white to-purple-50 flex-1 rounded-lg">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
