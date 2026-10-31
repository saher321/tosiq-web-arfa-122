import React from 'react'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-[#186049]/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 py-6 sm:flex-row">

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Center Text */}
        <p className="flex items-center gap-1.5 text-sm text-gray-500">
          Made with
          <Heart
            size={15}
            className="fill-[#186049] text-[#186049]"
          />
          <span className="font-semibold text-[#186049]">
            with passion
          </span>
        </p>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 rounded-full bg-[#186049]/10 px-4 py-2 text-sm font-medium text-[#186049] transition-all hover:bg-[#186049] hover:text-white"
        >
          Back to top
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  )
}

export default Footer