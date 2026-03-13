import { FinOpsState } from "../state/finops.state";
import { generateText } from "../utils/llm";
import { logStep } from "../utils/logger";

export async function PlannerNode(state: FinOpsState): Promise<FinOpsState> {
  logStep("Planner Node");

  const prompt = `
User question:

${state.query}

Available tools:

- infrastructure
- metrics
- analyzer
- optimizer

Return JSON array of tools needed.
`;

  const plan = await generateText(prompt);

  state.analysis = plan;

  return state;
}
