
import React from "react";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  Bell,
  Search,
  Menu,
} from "lucide-react";
import { NavLink } from "react-router";

const WebLayout = ({children}) => {
  const menuItems = [
    { name: "Dashboard", url: "/", icon: LayoutDashboard},
    { name: "Customers", url: "/customers", icon: Users },
    { name: "Projects", url: "/projects", icon: FolderKanban },
    { name: "Tasks", url: "/task", icon: CheckSquare },
  ];

  

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 md:flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r border-slate-200 px-5 py-7">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-blue-600 text-white rounded-xl p-2">
            <LayoutDashboard size={23} />
          </div>
          <h1 className="text-xl font-bold tracking-tight">WorkSpace</h1>
        </div>

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
          Menu
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.url}
              className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    }`
                }
            >
              <item.icon size={19} />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          

          <div className="flex items-center gap-3 pt-5">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Admin"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">John Admin</p>
              <p className="text-xs text-slate-400">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 px-5 py-6 md:px-8 lg:px-10">

        {/* Header */}
        <header className="flex items-center justify-between mb-9">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg bg-white border">
              <Menu size={21} />
            </button>
            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="text-sm text-slate-400 mt-1">
                Welcome back, John! Here's your overview.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent outline-none text-sm ml-2 w-36 lg:w-48"
              />
            </div>
            <button className="relative p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-100">
              <Bell size={19} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Profile"
              className="w-10 h-10 rounded-full md:hidden"
            />
          </div>
        </header>

        {/* main content */}
        {children}

        <footer className="text-center text-xs text-slate-400 py-8">
          © 2026 WorkSpace. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default WebLayout;
