import { infrastructureWorkflow } from "./infrastructure.workflow"
import { monitoringWorkflow } from "./monitoring.workflow"
import { FinOpsState } from "../../state/finops.state"

export async function dashboardWorkflow(
  state: FinOpsState
): Promise<FinOpsState> {

  let newState = state

  newState = await infrastructureWorkflow(newState)

  newState = await monitoringWorkflow(newState)

  return newState
}