"use client";

type Filters = {
  type: string;
  search: string;
};

export default function EventFilters({
  filters,
  setFilters,
}: {
  filters?: Filters;
  setFilters?: React.Dispatch<React.SetStateAction<Filters>>;
}) {

  const safeFilters = filters || { type: "", search: "" };

  const update = (field: keyof Filters, value: string) => {
    if (!setFilters) return;

    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex justify-between items-center mt-6">

      {/* DROPDOWN */}
      <div className="relative">

        <select
          value={safeFilters.type}
          onChange={(e) => update("type", e.target.value)}
          className="appearance-none border border-[#E2E8F0] rounded-lg px-4 py-2 pr-8 text-sm bg-white"
        >
          <option value="">All Events</option>
          <option value="AI ACTION">AI Action</option>
          <option value="INFRASTRUCTURE">Infrastructure</option>
          <option value="COST MANAGEMENT">Cost Management</option>
        </select>

        {/* Custom arrow */}
        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          ▼
        </span>

      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search events..."
        value={safeFilters.search}
        onChange={(e) => update("search", e.target.value)}
        className="border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm w-[220px]"
      />

    </div>
  );
}