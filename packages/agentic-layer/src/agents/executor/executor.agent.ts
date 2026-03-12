import { WorkflowState } from "../../memory/workflowState";
import { Agent } from "../../types/agent.types";

export class ExecutorAgent implements Agent {
  name = "executor_agent";

  async run(state: WorkflowState): Promise<WorkflowState> {
    console.log("Execution requires user confirmation.");

    state.executionResult = "pending_user_confirmation";

    return state;
  }
}
