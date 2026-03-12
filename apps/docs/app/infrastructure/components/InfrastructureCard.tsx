"use client";

import { Server, Database, Network } from "lucide-react";

export default function InfrastructureCard({ data }: any) {

  const iconMap: any = {
    server: <Server size={18} color="#2563EB" />,
    database: <Database size={18} color="#7C3AED" />,
    loadbalancer: <Network size={18} color="#0EA5E9" />,
  };

  const borderStyle = data.inefficient
    ? "border-orange-400"
    : data.status === "healthy"
    ? "border-yellow-400"
    : "border-[#E2E8F0]";

  return (
    <div
      className={`bg-white border ${borderStyle} rounded-xl p-5 shadow-sm hover:shadow-md transition`}
    >

      <div className="flex justify-between items-center mb-3">

        <div className="flex items-center gap-3">

          <div className="w-9 h-9 bg-slate-100 rounded-md flex items-center justify-center">
            {iconMap[data.type]}
          </div>

          <div>

            <p className="font-semibold text-[14px] text-slate-800">
              {data.name}
            </p>

            <p className="text-xs text-green-500">
              ● {data.status.toUpperCase()}
            </p>

          </div>

        </div>

        {data.inefficient && (
          <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
            INEFFICIENT
          </span>
        )}

      </div>


      
      {data.cpu !== undefined && (
        <div className="grid grid-cols-2 gap-4 mt-3">

          <div className="bg-slate-50 rounded-md p-2">

            <p className="text-xs text-slate-500 mb-1">
              CPU LOAD
            </p>

            <p className="text-sm font-semibold">
              {data.cpu}%
            </p>

            <div className="h-1 bg-slate-200 rounded mt-1">
              <div
                className="h-1 bg-blue-500 rounded transition-all"
                style={{ width: `${data.cpu}%` }}
              />
            </div>

          </div>

          <div className="bg-slate-50 rounded-md p-2">

            <p className="text-xs text-slate-500 mb-1">
              MEMORY
            </p>

            <p className="text-sm font-semibold">
              {data.memory}%
            </p>

            <div className="h-1 bg-slate-200 rounded mt-1">
              <div
                className="h-1 bg-indigo-500 rounded transition-all"
                style={{ width: `${data.memory}%` }}
              />
            </div>

          </div>

        </div>
      )}


      {data.connections && (
        <div className="mt-4">

          <p className="text-xs text-slate-500">
            ACTIVE CONNECTIONS
          </p>

          <p className="text-sm font-semibold">
            {data.connections}
          </p>

        </div>
      )}


      <div className="flex justify-between items-center mt-4 text-sm">

        <p className="text-slate-500">
          {data.traffic} Traffic
        </p>

        <p className="font-semibold text-slate-700">
          ${data.price}/mo
        </p>

      </div>

    </div>
  );
}