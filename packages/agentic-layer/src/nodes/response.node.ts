import { FinOpsState } from "../state/finops.state";
import { generateText } from "../utils/llm";
import { logStep } from "../utils/logger";

export async function ResponseNode(state: FinOpsState): Promise<FinOpsState> {
  logStep("ResponseNode");

  const prompt = `
User Question:
${state.query}

${state.promptContext}

Provide a clear and helpful answer to the user.
`;

  const response = await generateText(prompt);

  state.response = response ?? "";

  return state;
}
