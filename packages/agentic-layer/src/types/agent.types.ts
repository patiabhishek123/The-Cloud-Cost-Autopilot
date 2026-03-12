import { WorkflowState } from "../memory/workflowState";

export interface Agent {
  name: string;

  run(state: WorkflowState): Promise<WorkflowState>;
}
