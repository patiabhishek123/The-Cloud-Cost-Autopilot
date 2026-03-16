"use client";

import { useEffect, useState } from "react";
import { getAIRecommendations } from "../lib/api/dashboard";

export default function AIRecommendations() {

  const [recs, setRecs] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getAIRecommendations();
      setRecs(data);
    }
    load();
  }, []);

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

      <h3 className="font-semibold text-[#0F172A] mb-4">
        AI Recommendations
      </h3>

      {recs.map((item) => (
        <div key={item.id} className="border border-[#E2E8F0] rounded-lg p-4">

          <p className="text-sm font-medium text-[#0F172A]">
            {item.title}
          </p>

          <p className="text-xs text-[#64748B] mt-1">
            Potential savings: ${item.savings}/month
          </p>

          <div className="flex gap-2 mt-3">

            <button className="text-xs bg-[#0069FF] text-white px-3 py-1 rounded">
              Apply Now
            </button>

            <button className="text-xs border border-[#E2E8F0] px-3 py-1 rounded">
              Details
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}