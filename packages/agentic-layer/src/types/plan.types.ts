import { z } from "zod";

export const PlanSchema = z.object({
  intent: z.string(),

  steps: z.array(
    z.enum([
      "data_agent",
      "analyzer_agent",
      "optimizer_agent",
      "executor_agent",
    ]),
  ),
});

export type ExecutionPlan = z.infer<typeof PlanSchema>;
