import { optimizationReports } from "../../mocks/optimizationData";

export async function getOptimizationReports() {

  await new Promise((resolve) => setTimeout(resolve, 300));

  return optimizationReports;
}

export async function getOptimizationSummary() {

  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    monthlySavings: 4250,
    opportunities: 12,
    reduction: 18
  };
}

export async function getOptimizationStats() {

  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    resourcesAnalyzed: 1248,
    optimizationsApplied: 42,
    yearlySavings: 28490.5
  };
}