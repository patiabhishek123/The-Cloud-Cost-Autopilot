"use client";

import { useEffect, useState } from "react";
import { getOptimizationSummary } from "../../lib/api/optimizations";

export default function OptimizationHero() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    async function load() {
      const res = await getOptimizationSummary();
      setData(res);
    }

    load();

  }, []);

  if (!data) return null;

  return (
    <div className="bg-gradient-to-r from-[#1E5EFF] to-[#2563EB] rounded-xl p-8 text-white">

      <p className="text-sm opacity-80">
        TOTAL POTENTIAL SAVINGS
      </p>

      <h1 className="text-3xl font-bold mt-2">
        ${data.monthlySavings}
        <span className="text-sm font-medium"> / month</span>
      </h1>

      <p className="mt-4 text-sm opacity-90 max-w-xl">
        Our AI has detected {data.opportunities} new opportunities to optimize your infrastructure.
        Applying all recommendations could reduce your cloud bill by {data.reduction}% this month.
      </p>

      <div className="flex gap-4 mt-6">

        <button className="bg-white text-[#1E5EFF] px-5 py-2 rounded-lg font-medium">
          Apply All Optimizations
        </button>

        <button className="border border-white px-5 py-2 rounded-lg">
          View Full Report
        </button>

      </div>

    </div>
  );
}