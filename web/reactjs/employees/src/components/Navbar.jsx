
import { NavLink } from "react-router";
import { House, Users, Layers } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/", icon: House },
    { name: "Employees", path: "/employees", icon: Users },
  ];

  return (
    <nav className="my-5 w-fit mx-auto">
      <div className="flex items-center gap-1 rounded-2xl border border-zinc-200 bg-white/90 p-1.5 shadow-lg shadow-zinc-200/40 backdrop-blur-md">
        {links.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
              }`
            }
          >
            <Icon size={17} strokeWidth={1.8} />
            <span>{name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
