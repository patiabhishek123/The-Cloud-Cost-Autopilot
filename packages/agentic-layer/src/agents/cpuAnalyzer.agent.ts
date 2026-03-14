import { logStep } from "../utils/logger";

export async function cpuAnalyzerAgent(state: any) {
  logStep("CPUAnalyzerAgent");

  const metrics = state.metrics || [];
  const issues: any[] = [];

  for (const m of metrics) {
    if ((m.cpuUsage ?? 0) < 10) {
      issues.push({
        resource: m.name || m.id,
        issue: "Low CPU utilization",
        recommendation: "Resize droplet or shut it down",
      });
    }
  }

  return {
    cpuAnalysis: issues,
  };
}