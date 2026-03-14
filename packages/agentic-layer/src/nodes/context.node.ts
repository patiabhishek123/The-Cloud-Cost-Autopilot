// prepare the structure for the final llm response ( copilot page)
import { FinOpsState } from "../state/finops.state";
import { logStep } from "../utils/logger";

export async function ContextNode(state: FinOpsState) {
  const infra = state.infrastructure || {};
  const metrics = state.metrics?.slice(0, 5) || [];
  const analysis = state.analysis?.slice(0, 5) || [];
  const optimizations = state.optimizations?.slice(0, 5) || [];

  const context = `
You are a FinOps cloud optimization assistant.

User Question:
${state.query}

--------------------------------

Infrastructure Snapshot:
${JSON.stringify(infra, null, 2)}

--------------------------------

Usage Metrics:
${metrics.length ? JSON.stringify(metrics, null, 2) : "No metrics available"}

--------------------------------

Detected Inefficiencies:
${analysis.length ? JSON.stringify(analysis, null, 2) : "None detected"}

--------------------------------

Optimization Strategies:
${optimizations.length ? JSON.stringify(optimizations, null, 2) : "No optimizations identified"}

--------------------------------

DigitalOcean Documentation:
${state.ragContext || "No reference context available"}

`;

  return { promptContext: context };
}