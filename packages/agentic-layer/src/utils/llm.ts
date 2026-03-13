import OpenAI from "openai"
import "dotenv/config"

export const llm = new OpenAI({
  apiKey: process.env.GRADIENT_API_KEY,
  baseURL: "https://inference.do-ai.run/v1",
});

export async function generateText(prompt: string) {

  const completion = await llm.chat.completions.create({
    model: "alibaba-qwen3-32b",
    messages: [
      { role: "user", content: prompt }
    ]
  })

  return completion.choices[0].message.content ?? ""
}