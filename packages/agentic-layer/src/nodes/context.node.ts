// prepare the structure for the final llm response ( copilot page)

import { FinOpsState } from "../state/finops.state";
import { logStep } from "../utils/logger";

export async function ContextNode(state: FinOpsState): Promise<FinOpsState> {
  logStep("ContextNode");

  const infrastructure = JSON.stringify(state.infrastructure ?? {}, null, 2);
  const metrics = JSON.stringify(state.metrics ?? {}, null, 2);
  const analysis = JSON.stringify(state.analysis ?? {}, null, 2);
  const optimizations = JSON.stringify(state.optimizations ?? {}, null, 2);

  const promptContext = `
You are a FinOps cloud optimization assistant.

Infrastructure Snapshot:
${infrastructure}

Usage Metrics:
${metrics}

Detected Inefficiencies:
${analysis}

Optimization Strategies:
${optimizations}

Reference Documentation:
${state.ragContext ?? ""}
`;

  state.promptContext = promptContext;

  return state;
}
