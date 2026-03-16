"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip
} from "recharts";

import { getEventFrequency } from "../../lib/api/events";

export default function MonitoringChart() {

  const [range, setRange] = useState("24h");
  const [data, setData] = useState<any[]>([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [growth, setGrowth] = useState(0);

  useEffect(() => {

    async function loadData() {

      const res = await getEventFrequency(range);

      setData(res.data);
      setTotalEvents(res.totalEvents);
      setGrowth(res.growth);

    }

    loadData();

  }, [range]);

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

      <div className="flex justify-between mb-4">

        <div>
          <p className="text-xs text-slate-400">
            EVENT FREQUENCY
          </p>

          <h2 className="text-2xl font-semibold">
            {totalEvents} events
            <span className="text-green-500 text-sm ml-2">
              +{growth}%
            </span>
          </h2>
        </div>

        <div className="flex gap-2">

          {["24h", "7d", "30d"].map((r) => (

            <button
              key={r}
              onClick={() => setRange(r)}
              className={`text-xs px-3 py-1 rounded ${
                range === r
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100"
              }`}
            >
              {r}
            </button>

          ))}

        </div>

      </div>

      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="events"
            stroke="#2563EB"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}