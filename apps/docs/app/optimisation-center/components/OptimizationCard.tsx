"use client";

import { Cloud, Cpu, Database } from "lucide-react";

interface OptimizationCardProps {
  data: any;
  onApply: () => void;
  onSchedule: () => void;
}

export default function OptimizationCard({
  data,
  onApply,
  onSchedule,
}: OptimizationCardProps) {

  const iconMap: any = {
    cloud: <Cloud size={20} color="#2563EB" />,
    cpu: <Cpu size={20} color="#9333EA" />,
    database: <Database size={20} color="#F97316" />,
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition">

      {/* TOP SECTION */}
      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
            {iconMap[data.icon]}
          </div>

          <div>
            <p className="text-xs text-[#94A3B8]">
              Resource ID: {data.resourceId}
            </p>

            <h3 className="font-semibold text-[#0F172A] text-[16px]">
              {data.title}
            </h3>
          </div>

        </div>

        {/* SAVINGS */}
        <div className="text-right">
          <p className="text-xs text-[#94A3B8]">
            ESTIMATED SAVINGS
          </p>

          <p className="text-green-600 font-semibold text-[16px]">
            {data.savings}
          </p>
        </div>

      </div>


      {/* ISSUE + RECOMMENDATION */}
      <div className="grid grid-cols-2 gap-6 mt-5 text-sm">

        <div>
          <p className="text-[#64748B] font-medium mb-1">
            Detected Issue
          </p>

          <p className="text-[#334155] leading-relaxed">
            {data.issue}
          </p>
        </div>

        <div>
          <p className="text-[#64748B] font-medium mb-1">
            AI Recommendation
          </p>

          <p className="text-[#334155] leading-relaxed">
            {data.recommendation}
          </p>
        </div>

      </div>


      {/* FOOTER */}
      <div className="flex justify-between items-center mt-6">

        <p className="text-xs text-[#94A3B8]">
          Confidence: {data.confidence}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">

          {/* IGNORE */}
          <button
            disabled
            className="text-sm text-[#64748B] opacity-50 cursor-not-allowed"
          >
            Ignore
          </button>

          {/* SCHEDULE */}
          <button
            onClick={onSchedule}
            className="text-sm border border-[#E2E8F0] px-3 py-1.5 rounded-md hover:bg-slate-50 transition"
          >
            Schedule for Later
          </button>

          {/* APPLY */}
          <button
            onClick={onApply}
            className="text-sm bg-[#0069FF] text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
          >
            Apply Now
          </button>

        </div>

      </div>

    </div>
  );
}