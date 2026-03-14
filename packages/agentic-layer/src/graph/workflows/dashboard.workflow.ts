import { infrastructureWorkflow } from "./infrastructure.workflow";
import { metricsAgent } from "../../agents/metrics.agent";
import { cpuAnalyzerAgent } from "../../agents/cpuAnalyzer.agent";
import { memoryAnalyzerAgent } from "../../agents/memoryAnalyzer.agent";
import { insightAgent } from "../../agents/insight.agent";
import { FinOpsState } from "../../state/finops.state";

export async function dashboardWorkflow(
  state: FinOpsState,
): Promise<FinOpsState> {

  // Step 1: get infrastructure
  const infraState = await infrastructureWorkflow(state);

  // Step 2: get metrics
  const metricsState = await metricsAgent({
    ...state,
    ...infraState,
  });

  // Step 3: run analyzers in parallel
  const analyzerResults = await Promise.all([
    cpuAnalyzerAgent({
      ...state,
      ...infraState,
      ...metricsState,
    }),
    memoryAnalyzerAgent({
      ...state,
      ...infraState,
      ...metricsState,
    }),
  ]);

  const combinedAnalysis = analyzerResults.flatMap(
    (result: any) => result.analysis || []
  );

  // Step 4: generate insights
  const insightState = await insightAgent({
    ...state,
    ...infraState,
    ...metricsState,
    analysis: combinedAnalysis,
  });

  return {
    ...state,
    ...infraState,
    ...metricsState,
    ...insightState,
  };
}