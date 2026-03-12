export default function EventItem({ event }: any) {

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">

      <div className="flex justify-between">

        <div>

          <span className="text-xs bg-slate-100 px-2 py-1 rounded">
            {event.type}
          </span>

          <p className="font-medium mt-2 text-slate-800">
            {event.title}
          </p>

          {event.description && (
            <p className="text-sm text-slate-500 mt-1">
              {event.description}
            </p>
          )}

          {event.savings && (
            <p className="text-green-500 text-sm mt-2">
              Savings: {event.savings}
            </p>
          )}

        </div>

        <span className="text-xs text-slate-400">
          {event.time}
        </span>

      </div>

    </div>
  );
}