import { StateSchema } from "@langchain/langgraph";
import * as z from "zod";

export const State = new StateSchema({
  query: z.string().optional(),

  infrastructure: z.any().optional(),

  metrics: z.any().optional(),

  analysis: z.any().optional(),

  optimizations: z.any().optional(),

  recommendations: z.any().optional(),

  ragContext: z.string().optional(),

  promptContext: z.string().optional(),

  insights: z.string().optional(),

  response: z.string().optional(),

  selectedTools: z.array(z.string()).optional(),
});
