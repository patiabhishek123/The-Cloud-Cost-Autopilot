import { costSources } from "../mocks/dashboardData";

export default function CostSources() {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-[#0F172A]">
          Top Cost Sources
        </h3>

        <button className="text-sm text-[#1E5EFF]">
          View All
        </button>
      </div>

      <div className="space-y-3">

        {costSources.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-sm"
          >
            <span className="text-[#334155]">
              {item.name}
            </span>

            <span className="font-medium text-[#0F172A]">
              {item.cost}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}