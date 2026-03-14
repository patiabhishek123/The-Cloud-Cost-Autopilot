import { FinOpsState } from "../state/finops.state";
import { generateText } from "../utils/llm";
import { logStep } from "../utils/logger";
export async function QueryRewriteNode(
  state: FinOpsState,
): Promise<Partial<FinOpsState>> {
  if (!state.query) return {};

  logStep("QueryRewriteNode");
  const prompt = `
Rewrite the following user question into a search query for retrieving
relevant DigitalOcean documentation.

Focus on:
- infrastructure management
- droplets
- scaling
- pricing
- optimization
- cloud resource management

note: Return ONLY the query text.

User question:
${state.query}

Search query:
`;

  const rewritten = await generateText(prompt);
    console.log("Rewritten query:", rewritten);
  return {
    retrievalQuery: rewritten.trim(),
  };
}
