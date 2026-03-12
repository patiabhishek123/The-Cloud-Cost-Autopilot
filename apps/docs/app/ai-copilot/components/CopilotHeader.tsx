export default function CopilotHeader() {

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white">

      <div className="flex items-center gap-3">

        <h2 className="font-semibold text-lg">
          AI Copilot
        </h2>

        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          LIVE
        </span>

      </div>

      <div className="flex items-center gap-4">

        <button className="text-sm bg-slate-100 px-3 py-1 rounded-md">
          AWS-Production-01
        </button>

      </div>

    </div>
  );
}