export default function SavingsForecast() {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

      <h3 className="font-semibold text-[#0F172A] mb-4">
        Savings Forecast
      </h3>

      <div className="flex items-end gap-4 h-[150px]">

        <div className="bg-[#94A3B8] w-12 h-[70px] rounded"></div>

        <div className="bg-[#1E5EFF] w-12 h-[110px] rounded"></div>

      </div>

      <div className="flex justify-between text-xs text-[#64748B] mt-3">
        <span>$14.2k</span>
        <span>$11.7k</span>
      </div>

    </div>
  );
}