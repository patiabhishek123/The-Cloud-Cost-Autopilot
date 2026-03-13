import { infrastructureWorkflow } from "./infrastructure.workflow";
import { monitoringWorkflow } from "./monitoring.workflow";
import { FinOpsState } from "../../state/finops.state";

export async function dashboardWorkflow(
  state: FinOpsState,
): Promise<FinOpsState> {
  const infraState = await infrastructureWorkflow(state);

  const monitoringState = await monitoringWorkflow(infraState);

  return monitoringState;
}
