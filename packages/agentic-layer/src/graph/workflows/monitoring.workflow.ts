import { metricsAgent } from "../../agents/metrics.agent";
import { logStep } from "../../utils/logger";
import { FinOpsState } from "../../state/finops.state";

export async function monitoringWorkflow(
  state: FinOpsState,
): Promise<FinOpsState> {

  const metricsState = await metricsAgent(state);

  logStep("MonitoringLogs");

  console.log("Monitoring metrics:", metricsState.metrics);

  return {
    ...state,
    ...metricsState,
  };
}