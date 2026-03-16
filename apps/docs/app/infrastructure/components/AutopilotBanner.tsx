"use client";

import { useEffect, useState } from "react";
import { getAutopilotSummary } from "../../lib/api/infrastructure";

export default function AutopilotBanner() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const res = await getAutopilotSummary();
      setData(res);
    }
    load();
  }, []);

  if (!data) return null;

  return (
    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 flex justify-between items-center">

      <div>

        <h3 className="font-semibold text-lg">
          Save ${data.savings} this month with AI Autopilot
        </h3>

        <p className="text-sm text-slate-600 mt-1 max-w-xl">
          Our AI has identified {data.servers} Servers and {data.databases} Managed Databases
          that are currently over-provisioned.
        </p>

      </div>

      <div className="flex gap-3">

        <button className="bg-white border px-4 py-2 rounded-md text-sm">
          View Recommendations
        </button>

        <button className="bg-[#0069FF] text-white px-4 py-2 rounded-md text-sm">
          Enable Autopilot
        </button>

      </div>

    </div>
  );
}