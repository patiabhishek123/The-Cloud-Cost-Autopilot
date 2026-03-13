import { logStep } from "../utils/logger";

export async function insightAgent(state: any) {
  logStep("InsightAgent");

  const analysis = state.analysis || [];

  let insights = "";

  for (const item of analysis) {
    insights += `Resource ${item.resource} has ${item.issue}. `;
    insights += `Recommendation: ${item.recommendation}. `;
    insights += `This could reduce unnecessary cloud costs.\n\n`;
  }

  if (!insights) {
    insights = "No major inefficiencies detected in infrastructure.";
  }

  return {
    insights,
  };
}
