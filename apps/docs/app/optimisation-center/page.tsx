"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import OptimizationCard from "./components/OptimizationCard";

import { getOptimizationReports } from "../lib/api/optimizations";

export default function OptimizationCenterPage() {

  const [reports, setReports] = useState<any[]>([]);
  const [scheduledCount, setScheduledCount] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadReports() {

      const data = await getOptimizationReports();

      setReports(data);
      setLoading(false);

    }

    loadReports();

  }, []);

  const handleApply = (id: number) => {
    setReports((prev) => prev.filter((r) => r.id !== id));
  };

  const handleSchedule = () => {
    setScheduledCount((prev) => prev + 1);
  };

  if (loading) {
    return <div className="p-8">Loading optimizations...</div>;
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC]">

      <Sidebar scheduledCount={scheduledCount} />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar />

        <main className="flex-1 overflow-y-auto p-8 space-y-6">

          {/* HERO */}
          <div className="bg-gradient-to-r from-[#1E5EFF] to-[#2563EB] rounded-xl p-8 text-white">

            <p className="text-sm opacity-80">
              TOTAL POTENTIAL SAVINGS
            </p>

            <h1 className="text-3xl font-bold mt-2">
              $4,250.00 <span className="text-sm font-medium">/ month</span>
            </h1>

            <p className="mt-4 text-sm opacity-90 max-w-xl">
              Our AI has detected {reports.length} new opportunities to optimize your infrastructure.
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


          {/* REPORT LIST */}
          <div className="space-y-6">

            {reports.map((report) => (

              <OptimizationCard
                key={report.id}
                data={report}
                onApply={() => handleApply(report.id)}
                onSchedule={handleSchedule}
              />

            ))}

          </div>

        </main>

      </div>

    </div>
  );
}