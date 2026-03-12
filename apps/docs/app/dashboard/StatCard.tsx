type Props = {
  title: string;
  value: string | number;
  growth: string;
  color: string;
};

export default function StatCard({
  title,
  value,
  growth,
  color,
}: Props) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">

      <div className="flex justify-between items-center">
        <p className="text-sm text-[#64748B]">{title}</p>

        <span
          className="text-xs font-medium"
          style={{ color }}
        >
          {growth}
        </span>
      </div>

      <h2
        className="text-2xl font-semibold mt-2"
        style={{ color }}
      >
        {value}
      </h2>

    </div>
  );
}