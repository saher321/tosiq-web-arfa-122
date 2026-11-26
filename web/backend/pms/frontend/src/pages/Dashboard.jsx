import React from 'react'
import { useAuth } from '../store/useAuth'
import WebLayout from '../layouts/WebLayout'
import {
  Users,
  FolderKanban,
  CheckSquare,
  Clock,
} from "lucide-react";

  const stats = [
    { title: "Total Customers", value: "1,248", change: "+12.5%", icon: Users, color: "bg-blue-100 text-blue-600" },
    { title: "Active Projects", value: "24", change: "+8.2%", icon: FolderKanban, color: "bg-purple-100 text-purple-600" },
    { title: "Completed Tasks", value: "856", change: "+18.4%", icon: CheckSquare, color: "bg-green-100 text-green-600" },
    { title: "Pending Tasks", value: "32", change: "-4.3%", icon: Clock, color: "bg-orange-100 text-orange-600" },
  ];

const Dashboard = () => {
  const user = useAuth(state => state.user)
  return (
    <WebLayout>
    
        {/* Welcome Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white mb-8 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <p className="text-blue-100 text-sm mb-2">Thursday, November 26, 2026</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Manage your work smarter.
            </h2>
            <p className="text-blue-100 text-sm mb-5">
              Keep track of your customers, projects and tasks all in one place.
            </p>
            <button className="bg-white text-blue-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition">
              Explore Dashboard
            </button>
          </div>
          <div className="absolute -right-10 -top-20 w-72 h-72 bg-white/10 rounded-full" />
          <div className="absolute right-24 -bottom-36 w-72 h-72 bg-white/10 rounded-full" />
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-9">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon size={22} />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-5">{stat.title}</p>
              <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
            </div>
          ))}
        </section>

       
    </WebLayout>
  )
}

export default Dashboard