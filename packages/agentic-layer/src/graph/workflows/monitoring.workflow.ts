import { analyzerAgent } from "../../agents/analyzer.agent"
import { insightAgent } from "../../agents/insight.agent"
import { FinOpsState } from "../../state/finops.state"

export async function monitoringWorkflow(
  state: FinOpsState
): Promise<FinOpsState> {

  let newState = state

  newState = await analyzerAgent(newState)

  newState = await insightAgent(newState)

  return newState
}