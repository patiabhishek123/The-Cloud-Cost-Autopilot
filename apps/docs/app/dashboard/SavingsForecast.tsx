"use client";

import { useEffect, useState } from "react";
import { getSavingsForecast } from "../lib/api/dashboard";

export default function SavingsForecast() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const res = await getSavingsForecast();
      setData(res);
    }
    load();
  }, []);

  if (!data) return null;

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

      <h3 className="font-semibold text-[#0F172A] mb-4">
        Savings Forecast
      </h3>

      <div className="flex items-end gap-4 h-[150px]">

        <div className="bg-[#94A3B8] w-12 h-[70px] rounded"></div>

        <div className="bg-[#1E5EFF] w-12 h-[110px] rounded"></div>

      </div>

      <div className="flex justify-between text-xs text-[#64748B] mt-3">
        <span>${data.currentCost}</span>
        <span>${data.optimizedCost}</span>
      </div>

    </div>
  );
}