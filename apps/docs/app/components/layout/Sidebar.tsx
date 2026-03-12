"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import logo from "../../assets/Icon.png";

import {
  LayoutDashboard,
  Bot,
  Server,
  Activity,
  Zap,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell
} from "lucide-react";

const mainMenu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "AI Copilot", icon: Bot, path: "/ai-copilot" },
  { name: "Infrastructure", icon: Server, path: "/infrastructure" },
  { name: "Monitoring & Logs", icon: Activity, path: "/monitoring" },
  { name: "Optimization Center", icon: Zap, path: "/optimisation-center" },
];

const accountMenu = [
  { name: "Notifications", icon: Bell, path: "/notifications" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar({ scheduledCount = 0 }: any) {

  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen overflow-y-auto bg-white border-r border-[#E2E8F0] flex flex-col transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >

      <div className="flex items-center justify-between p-4 border-b border-[#E2E8F0]">

        {!collapsed && (
          <div className="flex items-center gap-3">

            <div className="w-8 h-8 bg-[#0069FF] rounded-md flex items-center justify-center">
              <Image
                src={logo}
                alt="Gradient AI Logo"
                width={18}
                height={18}
              />
            </div>

            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-slate-800">
                Gradient AI
              </p>

              <p className="text-[11px] text-slate-400 tracking-wide font-semibold">
                COST AUTOPILOT
              </p>
            </div>

          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-slate-100"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

      </div>

      <nav className="flex-1 pt-4">

        {mainMenu.map((item) => {

          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-[16px] leading-6 font-medium transition
              ${
                active
                  ? "bg-blue-50 text-[#0069FF]"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} strokeWidth={2} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}

        {!collapsed && (
          <p className="text-[11px] font-medium text-slate-400 px-4 mt-6 mb-2">
            ACCOUNT
          </p>
        )}

        {accountMenu.map((item) => {

          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-[16px] leading-6 font-medium transition
              ${
                active
                  ? "bg-blue-50 text-[#0069FF]"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} strokeWidth={2} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}

      </nav>

      <div className="border-t border-[#E2E8F0] p-4 relative">

        
        {scheduledCount > 0 && (
          <div className="absolute top-3 left-8 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {scheduledCount}
          </div>
        )}

        {!collapsed && (
          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-semibold">
              A
            </div>

            <div className="text-[14px]">
              <p className="text-slate-700 font-medium">
                Alex Rivera
              </p>

              <p className="text-slate-400 text-[11px]">
                Pro Plan
              </p>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}