"use client";

import { useState } from "react";

export default function InfrastructureFilters() {

  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");

  return (
    <div className="flex items-center justify-between mb-6">

      <div className="flex gap-4">

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-[#E2E8F0] px-3 py-2 rounded-md text-sm bg-white"
        >
          <option>All</option>
          <option>Running</option>
          <option>Idle</option>
          <option>Healthy</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-[#E2E8F0] px-3 py-2 rounded-md text-sm bg-white"
        >
          <option>All</option>
          <option>Server</option>
          <option>Database</option>
          <option>Load Balancer</option>
        </select>

      </div>


      <div className="text-sm text-slate-500 flex gap-4">

        <span>
          🟢 24 Healthy
        </span>

        <span>
          🟡 2 Idle
        </span>

        <span className="font-medium text-slate-700">
          Total Monthly: $2,482
        </span>

      </div>

    </div>
  );
}