"use client";

type Props = {
  statusFilter: string;
  typeFilter: string;
  setStatusFilter: (v: string) => void;
  setTypeFilter: (v: string) => void;
  healthyCount: number;
  idleCount: number;
  totalMonthly: number;
};

export default function InfrastructureFilters({
  statusFilter,
  typeFilter,
  setStatusFilter,
  setTypeFilter,
  healthyCount,
  idleCount,
  totalMonthly,
}: Props) {

  return (
    <div className="flex items-center justify-between mb-6">

      <div className="flex gap-4">

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-[#E2E8F0] px-3 py-2 rounded-md text-sm bg-white"
        >
          <option value="all">Status: All</option>
          <option value="running">Running</option>
          <option value="healthy">Healthy</option>
          <option value="active">Active</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border border-[#E2E8F0] px-3 py-2 rounded-md text-sm bg-white"
        >
          <option value="all">Resource Type: All</option>
          <option value="server">Server</option>
          <option value="database">Database</option>
          <option value="loadbalancer">Load Balancer</option>
        </select>

      </div>

      <div className="text-sm text-slate-500 flex gap-4">

        <span className="text-green-600">
          ● {healthyCount} Healthy
        </span>

        <span className="text-yellow-500">
          ● {idleCount} Idle
        </span>

        <span className="font-medium text-slate-700">
          Total Monthly: ${totalMonthly}
        </span>

      </div>

    </div>
  );
}