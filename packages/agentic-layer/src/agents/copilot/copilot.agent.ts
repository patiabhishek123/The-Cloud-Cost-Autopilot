import { generateJSON } from "../../utils/llm";
import { PlanSchema } from "../../types/plan.types";

export class CopilotAgent {
  async plan(query: string) {
    const systemPrompt = `
You are a FinOps AI planner.

Convert the user query into an execution plan.

Available agents:
data_agent
analyzer_agent
optimizer_agent
executor_agent

Return JSON only in this format:

{
  "intent": "COST_ANALYSIS",
  "steps": ["data_agent","analyzer_agent","optimizer_agent"]
}
`;

    try {
      const result = await generateJSON(systemPrompt, query);

      return PlanSchema.parse(result);
    } catch (error) {
      console.log("⚠️ Copilot fallback triggered");

      return {
        intent: "COST_ANALYSIS",
        steps: ["data_agent", "analyzer_agent", "optimizer_agent"],
      };
    }
  }
}
