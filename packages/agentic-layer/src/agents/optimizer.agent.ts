import { logStep } from "../utils/logger";

export async function optimizerAgent(state: any) {
  logStep("OptimizerAgent");

  // Merge results from parallel analyzers
  const issues = [
    ...(state.cpuAnalysis || []),
    ...(state.memoryAnalysis || []),
  ];

  // Guard: if no issues found
  if (!issues.length) {
    return {
      optimizations: [],
    };
  }

  const optimizations: any[] = [];

  for (const issue of issues) {
    let suggestion = "";
    let estimatedSavings = "";

    switch (issue.issue) {
      case "Low CPU utilization":
        suggestion = "Resize droplet to a smaller plan or shut it down";
        estimatedSavings = "~20–40% cost reduction";
        break;

      case "High memory usage":
        suggestion = "Upgrade droplet size to handle memory load";
        estimatedSavings = "Prevents performance bottlenecks";
        break;

      default:
        suggestion = issue.recommendation || "Investigate resource usage";
        estimatedSavings = "Unknown";
    }

    optimizations.push({
      resource: issue.resource,
      problem: issue.issue,
      action: suggestion,
      estimatedSavings,
    });
  }

  return {
    optimizations,
  };
}