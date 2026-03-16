"use client";

import { useEffect, useState } from "react";
import { getInfraStatus } from "../lib/api/dashboard";

export default function InfraStatus() {

  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await getInfraStatus();
      setStatus(data);
    }
    load();
  }, []);

  if (!status) return null;

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

      <h3 className="font-semibold text-[#0F172A] mb-4">
        Infrastructure Status
      </h3>

      <div className="flex items-center justify-center h-[200px] text-[#94A3B8]">
        Donut Chart
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <span className="text-[#64748B]">Active</span>
        <span className="text-[#0F172A] font-medium">
          {status.active}
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-[#64748B]">Idle</span>
        <span className="text-[#0F172A] font-medium">
          {status.idle}
        </span>
      </div>

    </div>
  );
}