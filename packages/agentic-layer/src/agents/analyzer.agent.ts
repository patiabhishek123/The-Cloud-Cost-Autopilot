import { logStep } from "../utils/logger";

export async function analyzerAgent(state: any) {
  logStep("AnalyzerAgent");

  const metrics = state.metrics || [];

  const issues: any[] = [];

  for (const m of metrics) {
    if (m.cpuUsage < 10) {
      issues.push({
        resource: m.name || m.id,
        issue: "Low CPU utilization",
        recommendation: "Resize or shut down this droplet",
      });
    }
  }

  return {
    analysis: issues,
  };
}
