export default function OptimizationStats() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <p className="text-sm text-[#64748B]">
          Total Resources Analyzed
        </p>
        <h2 className="text-xl font-semibold mt-2">
          1,248
        </h2>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <p className="text-sm text-[#64748B]">
          Optimizations Applied (MTD)
        </p>
        <h2 className="text-xl font-semibold mt-2">
          42
        </h2>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <p className="text-sm text-[#64748B]">
          Total Savings (YTD)
        </p>
        <h2 className="text-xl font-semibold text-[#0069FF] mt-2">
          $28,490.50
        </h2>
      </div>

    </div>
  );
}