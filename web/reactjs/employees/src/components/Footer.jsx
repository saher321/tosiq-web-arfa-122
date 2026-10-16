import React from "react";
import { Layers, House, Users, ArrowUp } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
              <Layers size={19} strokeWidth={1.8} />
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-900">
              Workspace
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-5">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900"
            >
              <House size={16} />
              Home
            </Link>

            <Link
              to="/employees"
              className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900"
            >
              <Users size={16} />
              Employees
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-3 border-t border-zinc-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Workspace. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className="flex w-fit items-center gap-2 text-xs font-medium text-zinc-500 transition hover:text-zinc-900"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
