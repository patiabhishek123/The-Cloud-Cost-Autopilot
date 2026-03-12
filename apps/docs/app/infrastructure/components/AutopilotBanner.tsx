export default function AutopilotBanner() {
  return (
    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 flex justify-between items-center">

      <div>

        <h3 className="font-semibold text-lg">
          Save $342 this month with AI Autopilot
        </h3>

        <p className="text-sm text-slate-600 mt-1 max-w-xl">
          Our AI has identified 4 Droplets and 1 Managed Database
          that are currently over-provisioned.
        </p>

      </div>

      <div className="flex gap-3">

        <button className="bg-white border px-4 py-2 rounded-md text-sm">
          View Recommendations
        </button>

        <button className="bg-[#0069FF] text-white px-4 py-2 rounded-md text-sm">
          Enable Autopilot
        </button>

      </div>

    </div>
  );
}