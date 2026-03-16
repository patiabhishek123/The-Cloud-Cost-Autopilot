"use client";

import { useEffect, useState } from "react";

import StatCard from "./StatCard";
import CostChart from "./CostChart";
import InfraStatus from "./InfraStatus";
import CostSources from "./CostSources";
import AIRecommendations from "./AIRecommendations";
import SavingsForecast from "./SavingsForecast";

import { getDashboardStats } from "../lib/api/dashboard";

export default function DashboardContent() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function loadStats() {
      const data = await getDashboardStats();
      setStats(data);
    }

    loadStats();
  }, []);

  if (!stats) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 space-y-6">

      {/* STAT CARDS */}
      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Total Monthly Cost"
          value={`$${stats.totalCost}`}
          growth="+2.4%"
          color="#1E5EFF"
        />

        <StatCard
          title="Potential Savings"
          value={`$${stats.potentialSavings}`}
          growth="+15.2%"
          color="#16A34A"
        />

        <StatCard
          title="Idle Resources"
          value={stats.idleResources}
          growth="Last 24h"
          color="#F97316"
        />

        <StatCard
          title="Optimizations"
          value={stats.optimizations}
          growth="8 Actionable"
          color="#9333EA"
        />

      </div>

      {/* CHART ROW */}
      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">
          <CostChart />
        </div>

        <InfraStatus />

      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-3 gap-6">

        <CostSources />

        <AIRecommendations />

        <SavingsForecast />

      </div>

    </div>
  );
}