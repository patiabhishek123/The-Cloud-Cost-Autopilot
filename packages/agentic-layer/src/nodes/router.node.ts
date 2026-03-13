import { FinOpsState } from "../state/finops.state";

export async function RouterNode(state: FinOpsState): Promise<FinOpsState> {
  try {
    const plan = JSON.parse(state.analysis || "{}");

    return {
      ...state,
      selectedTools: plan.tools || [],
    };
  } catch {
    return {
      ...state,
      selectedTools: ["infra", "metrics", "analysis"],
    };
  }
}
