// common interface used by agents

import { FinOpsState } from "../state/finops.state";

export type AgentNode = (
  state: FinOpsState
)=> Promise<FinOpsState>


