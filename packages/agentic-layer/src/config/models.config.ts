import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export const gradient = new OpenAI({
  apiKey: process.env.GRADIENT_API_KEY!,
  baseURL: "https://inference.do-ai.run/v1",
  timeout: 30000,
  maxRetries: 3,
});

export const MODEL = process.env.GRADIENT_MODEL || "alibaba-qwen3-32b";
