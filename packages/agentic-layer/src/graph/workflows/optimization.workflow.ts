import { infrastructureAgent } from "../../agents/infrastructure.agent";
import { metricsAgent } from "../../agents/metrics.agent";
import { analyzerAgent } from "../../agents/analyzer.agent";
import { optimizerAgent } from "../../agents/optimizer.agent";
import { recommendationAgent } from "../../agents/recommendation.agent";
import { FinOpsState } from "../../state/finops.state";

export async function optimizationWorkflow(
  state: FinOpsState,
): Promise<FinOpsState> {

  const infraState = await infrastructureAgent(state);

  const metricsState = await metricsAgent({
    ...state,
    ...infraState,
  });

  const analyzedState = await analyzerAgent({
    ...state,
    ...infraState,
    ...metricsState,
  });

  const optimizedState = await optimizerAgent({
    ...state,
    ...infraState,
    ...metricsState,
    ...analyzedState,
  });

  const recommendationState = await recommendationAgent({
    ...state,
    ...optimizedState,
  });

  return {
    ...state,
    ...infraState,
    ...metricsState,
    ...analyzedState,
    ...optimizedState,
    ...recommendationState,
  };
}