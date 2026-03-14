import "dotenv/config";
import OpenAI from "openai";

export const llm = new OpenAI({
  apiKey: process.env.GRADIENT_API_KEY,
  baseURL: "https://inference.do-ai.run/v1",
});

/**
 * Normal completion (non-streaming)
 */
export async function generateText(prompt: string): Promise<string> {
  const completion = await llm.chat.completions.create({
    model: "alibaba-qwen3-32b",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices?.[0]?.message?.content ?? "";
}

/**
 * Streaming completion (used only for Copilot responses)
 */
export async function streamText(prompt: string) {
  const stream = await llm.chat.completions.create({
    model: "alibaba-qwen3-32b",
    messages: [{ role: "user", content: prompt }],
    stream: true,
  });

  return stream;
}
