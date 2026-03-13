import { logStep } from "../utils/logger";

export async function optimizerAgent(state: any) {
  logStep("OptimizerAgent");

  const issues = state.analysis || [];

  const optimizations: any[] = [];

  for (const issue of issues) {
    let suggestion = "";
    let estimatedSavings = "";

    switch (issue.issue) {
      case "Low CPU utilization":
        suggestion = "Resize droplet to a smaller plan or shut it down";
        estimatedSavings = "~20-40% cost reduction";
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
