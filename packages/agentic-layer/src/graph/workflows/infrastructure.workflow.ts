import { infrastructureAgent } from "../../agents/infrastructure.agent";
import { metricsAgent } from "../../agents/metrics.agent";
import { FinOpsState } from "../../state/finops.state";

export async function infrastructureWorkflow(
  state: FinOpsState,
): Promise<FinOpsState> {

  const infraState = await infrastructureAgent(state);

  const metricsState = await metricsAgent({
    ...state,
    ...infraState,
  });

  return {
    ...state,
    ...infraState,
    ...metricsState,
  };
}