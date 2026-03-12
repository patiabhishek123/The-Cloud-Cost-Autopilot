"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip
} from "recharts";

const data24h = [
  { time: "00:00", events: 20 },
  { time: "04:00", events: 40 },
  { time: "08:00", events: 80 },
  { time: "12:00", events: 20 },
  { time: "16:00", events: 70 },
  { time: "20:00", events: 35 },
  { time: "23:59", events: 90 },
];

const data7d = [
  { time: "Mon", events: 120 },
  { time: "Tue", events: 95 },
  { time: "Wed", events: 160 },
  { time: "Thu", events: 140 },
  { time: "Fri", events: 200 },
  { time: "Sat", events: 180 },
  { time: "Sun", events: 210 },
];

const data30d = [
  { time: "W1", events: 400 },
  { time: "W2", events: 500 },
  { time: "W3", events: 350 },
  { time: "W4", events: 600 },
];

export default function MonitoringChart() {

  const [range, setRange] = useState("24h");

  const getData = () => {
    if (range === "7d") return data7d;
    if (range === "30d") return data30d;
    return data24h;
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

      <div className="flex justify-between mb-4">

        <div>
          <p className="text-xs text-slate-400">
            EVENT FREQUENCY
          </p>

          <h2 className="text-2xl font-semibold">
            124 events
            <span className="text-green-500 text-sm ml-2">
              +12%
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
        <LineChart data={getData()}>
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