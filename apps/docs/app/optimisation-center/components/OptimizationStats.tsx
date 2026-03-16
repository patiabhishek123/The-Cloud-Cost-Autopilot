"use client";

import { useEffect, useState } from "react";
import { getOptimizationStats } from "../../lib/api/optimizations";

export default function OptimizationStats() {

  const [stats, setStats] = useState<any>(null);

  useEffect(() => {

    async function load() {

      const res = await getOptimizationStats();
      setStats(res);

    }

    load();

  }, []);

  if (!stats) return null;

  return (
    <div className="grid grid-cols-3 gap-6">

      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <p className="text-sm text-[#64748B]">
          Total Resources Analyzed
        </p>
        <h2 className="text-xl font-semibold mt-2">
          {stats.resourcesAnalyzed}
        </h2>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <p className="text-sm text-[#64748B]">
          Optimizations Applied (MTD)
        </p>
        <h2 className="text-xl font-semibold mt-2">
          {stats.optimizationsApplied}
        </h2>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <p className="text-sm text-[#64748B]">
          Total Savings (YTD)
        </p>
        <h2 className="text-xl font-semibold text-[#0069FF] mt-2">
          ${stats.yearlySavings}
        </h2>
      </div>

    </div>
  );
}