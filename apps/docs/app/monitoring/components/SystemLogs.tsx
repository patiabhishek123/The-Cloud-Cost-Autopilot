export default function SystemLogs() {
  return (
    <div className="bg-[#0F172A] text-green-400 text-sm rounded-xl p-5 mt-6 font-mono">

      <p>[INFO] Successfully connected to DigitalOcean API endpoint...</p>

      <p>[INFO] Analyzing current resource utilization for cluster: prod-01</p>

      <p>[WARN] Peak load approaching memory limit (92%)</p>

      <p>[INFO] Executing cleanup policy: older than 6 months</p>

    </div>
  );
}