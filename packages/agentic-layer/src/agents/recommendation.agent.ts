import { logStep } from "../utils/logger";

export async function recommendationAgent(state: any) {
  logStep("RecommendationAgent");

  const optimizations = state.optimizations || [];

  const recommendations = optimizations.map((opt: any) => ({
    title: opt.action,
    resource: opt.resource,
    problem: opt.problem,
    estimatedSavings: opt.estimatedSavings,
  }));

  return {
    recommendations,
  };
}