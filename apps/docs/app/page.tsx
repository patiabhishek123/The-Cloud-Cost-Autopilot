import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import DashboardContent from "./dashboard/dashboardContent";

export default function Page() {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">

      {/* SIDEBAR */}
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* NAVBAR */}
        <Navbar />

        {/* DASHBOARD SCROLL AREA */}
        <main className="flex-1 overflow-y-auto">
          <DashboardContent />
        </main>

      </div>

    </div>
  );
}