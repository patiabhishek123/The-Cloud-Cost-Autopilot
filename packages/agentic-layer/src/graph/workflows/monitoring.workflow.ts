import { analyzerAgent } from "../../agents/analyzer.agent";
import { insightAgent } from "../../agents/insight.agent";
import { FinOpsState } from "../../state/finops.state";

export async function monitoringWorkflow(
  state: FinOpsState,
): Promise<FinOpsState> {
  const analyzedState = await analyzerAgent(state);

  const insightState = await insightAgent(analyzedState);

  return insightState;
}
