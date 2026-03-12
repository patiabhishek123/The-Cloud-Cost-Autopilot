"use client";

import StatCard from "./StatCard";
import CostChart from "./CostChart";
import InfraStatus from "./InfraStatus";
import CostSources from "./CostSources";
import AIRecommendations from "./AIRecommendations";
import SavingsForecast from "./SavingsForecast";

export default function DashboardContent() {
  return (
    <div className="p-8 space-y-6">

      
      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Total Monthly Cost"
          value="$14,200"
          growth="+2.4%"
          color="#1E5EFF"
        />

        <StatCard
          title="Potential Savings"
          value="$2,450"
          growth="+15.2%"
          color="#16A34A"
        />

        <StatCard
          title="Idle Resources"
          value="12"
          growth="Last 24h"
          color="#F97316"
        />

        <StatCard
          title="Optimizations"
          value="8"
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