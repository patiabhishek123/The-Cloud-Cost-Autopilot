import { WorkflowState } from "../../memory/workflowState";
import { Agent } from "../../types/agent.types";

export class AnalyzerAgent implements Agent {
  name = "analyzer_agent";

  async run(state: WorkflowState): Promise<WorkflowState> {
    console.log("Analyzing infrastructure...");

    const droplets = state.infrastructureData?.droplets || [];

    const idle = droplets.filter((d: any) => d.usage < 10);

    state.analysis = {
      idleDroplets: idle,
    };

    return state;
  }
}
