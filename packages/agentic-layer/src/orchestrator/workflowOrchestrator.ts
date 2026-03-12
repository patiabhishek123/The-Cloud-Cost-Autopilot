import { WorkflowState } from "../memory/workflowState";
import { CopilotAgent } from "../agents/copilot/copilot.agent";
import { DataAgent } from "../agents/data/data.agent";
import { AnalyzerAgent } from "../agents/analyzer-agent/analyzer.agent";
import { OptimizerAgent } from "../agents/optimizer/optimizer.agent";
import { ExecutorAgent } from "../agents/executor/executor.agent";

type AgentKey =
  | "data_agent"
  | "analyzer_agent"
  | "optimizer_agent"
  | "executor_agent";

export class WorkflowOrchestrator {
  private copilot = new CopilotAgent();

  private agents: Record<AgentKey, any> = {
    data_agent: new DataAgent(),
    analyzer_agent: new AnalyzerAgent(),
    optimizer_agent: new OptimizerAgent(),
    executor_agent: new ExecutorAgent(),
  };

  async run(query: string) {
    const plan = await this.copilot.plan(query);

    console.log("Execution Plan:", plan);

    let state: WorkflowState = {
      userQuery: query,
    };

    for (const step of plan.steps as AgentKey[]) {
      const agent = this.agents[step];

      if (!agent) {
        console.warn("Unknown agent step:", step);
        continue;
      }

      state = await agent.run(state);
    }

    return state;
  }
}
