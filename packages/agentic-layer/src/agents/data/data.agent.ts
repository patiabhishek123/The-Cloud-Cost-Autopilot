import { WorkflowState } from "../../memory/workflowState";
import { Agent } from "../../types/agent.types";

export class DataAgent implements Agent {
  name = "data_agent";

  async run(state: WorkflowState): Promise<WorkflowState> {
    console.log("Fetching infrastructure data...");

    // mock data for day 1
    state.infrastructureData = {
      droplets: [
        { id: "d1", cpu: 2, memory: 4, usage: 5 },
        { id: "d2", cpu: 4, memory: 8, usage: 70 },
      ],
      volumes: [{ id: "v1", attached: false }],
    };

    return state;
  }
}
