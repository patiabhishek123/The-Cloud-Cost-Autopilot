import { infrastructureAgent } from "../../agents/infrastructure.agent"
import { metricsAgent } from "../../agents/metric.agent"
import { FinOpsState } from "../../state/finops.state"

export async function infrastructureWorkflow(
  state: FinOpsState
): Promise<FinOpsState> {

  let newState = state

  newState = await infrastructureAgent(newState)

  newState = await metricsAgent(newState)

  return newState
}