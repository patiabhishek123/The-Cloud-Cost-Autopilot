import { FinOpsState } from "../state/finops.state";

export async function RouterNode(
  state: FinOpsState,
): Promise<Partial<FinOpsState>> {
  const tools = state.selectedTools ?? [];

  return {
    selectedTools: tools,
  };
}
