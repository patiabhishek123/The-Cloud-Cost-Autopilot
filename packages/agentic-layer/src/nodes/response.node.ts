import { streamText } from "../utils/llm";
import { logStep } from "../utils/logger";
import { FinOpsState } from "../state/finops.state";
import { copilotPrompt } from "../prompts/copilot.prompt";

export async function ResponseNode(
  state: FinOpsState,
): Promise<Partial<FinOpsState>> {
  logStep("ResponseNode");

  const prompt = copilotPrompt(state);

  const stream = await streamText(prompt);

  let finalText = "";

  for await (const chunk of stream) {
    const token = chunk.choices?.[0]?.delta?.content || "";
    process.stdout.write(token); // streaming to terminal
    finalText += token;
  }
  
  return {
    response: finalText,
  };
}
