import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import MonitoringChart from "./components/MonitoringChart";
import EventFilters from "./components/EventFilters";
import EventTimeline from "./components/EventTimeline";
import SystemLogs from "./components/SystemLogs";

export default function MonitoringPage() {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar />

        <main className="flex-1 overflow-y-auto p-8">

          <h1 className="text-2xl font-semibold">
            Monitoring & Logs
          </h1>

          <p className="text-slate-500 mb-6">
            Real-time timeline of AI cost optimization and infrastructure events.
          </p>

          <MonitoringChart />

          <EventTimeline />

          <SystemLogs />

        </main>

      </div>

    </div>
  );
}