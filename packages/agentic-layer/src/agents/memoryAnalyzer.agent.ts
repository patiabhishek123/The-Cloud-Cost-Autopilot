import { logStep } from "../utils/logger";

export async function memoryAnalyzerAgent(state: any) {
  logStep("MemoryAnalyzerAgent");

  const metrics = state.metrics || [];
  const issues: any[] = [];

  for (const m of metrics) {
    if ((m.memoryUsage ?? 0) > 80) {
      issues.push({
        resource: m.name || m.id,
        issue: "High memory usage",
        recommendation: "Upgrade droplet size",
      });
    }
  }

  return {
    memoryAnalysis: issues,
  };
}