export default function InfrastructureHeader() {
  return (
    <div className="flex items-center justify-between mb-6">

      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-slate-800">
          Infrastructure
        </h1>

        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          ACTIVE PLAN
        </span>
      </div>

      <div className="flex items-center gap-4">

        <input
          placeholder="Search resources..."
          className="bg-slate-100 px-3 py-2 rounded-md text-sm w-[220px]"
        />

        <button className="bg-[#0069FF] text-white px-4 py-2 rounded-lg text-sm">
          + New Resource
        </button>

      </div>

    </div>
  );
}