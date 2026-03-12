import { WorkflowState } from "../../memory/workflowState";
import { Agent } from "../../types/agent.types";

export class OptimizerAgent implements Agent {
  name = "optimizer_agent";

  async run(state: WorkflowState): Promise<WorkflowState> {
    console.log("Generating optimization suggestions...");

    const idle = state.analysis?.idleDroplets || [];

    state.recommendations = idle.map((d: any) => ({
      resource: d.id,
      action: "resize_or_shutdown",
      estimatedSavings: "$20/month",
    }));

    return state;
  }
}
