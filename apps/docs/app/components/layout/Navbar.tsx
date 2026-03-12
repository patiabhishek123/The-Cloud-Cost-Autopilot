"use client";

import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-[#E2E8F0] bg-white px-8 flex items-center justify-between">

      <div className="flex items-center gap-3">

        <h1 className="text-[18px] font-semibold tracking-tight text-slate-800">
          Cloud Dashboard
        </h1>

        <span className="text-[11px] font-semibold bg-green-100 text-green-600 px-2 py-1 rounded-full">
          LIVE UPDATES
        </span>

      </div>


      <div className="flex items-center gap-4">

      
        <div className="flex items-center gap-2 w-[320px] bg-slate-100 rounded-lg px-3 py-2">

          <Search size={16} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search resources..."
            className="bg-transparent outline-none text-sm w-full text-slate-600 placeholder-slate-400"
          />

        </div>

        {/* CONNECT BUTTON */}
        <button className="bg-[#0069FF] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          + Connect Cloud
        </button>

      </div>

    </header>
  );
}