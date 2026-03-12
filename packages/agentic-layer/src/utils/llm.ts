import { gradient, MODEL } from "../config/models.config";


export async function generateJSON(systemPrompt: string, userPrompt: string) {
  try {
    const response = await gradient.chat.completions.create({
      model: MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
    });

    const text = response.choices[0].message.content || "{}";

    return JSON.parse(text);
  } catch (err) {
    console.error("LLM Error:", err);

    return {};
  }
}