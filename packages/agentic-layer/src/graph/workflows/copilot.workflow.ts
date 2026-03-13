import { StateGraph } from "@langchain/langgraph";

import { FinOpsState } from "../../state/finops.state";
import { PlannerNode } from "../../nodes/planner.node";

import { RAGAgent } from "../../agents/rag.agent";

import { ContextNode } from "../../nodes/context.node";
import { ResponseNode } from "../../nodes/response.node";

import { InfrastructureAgent } from "../../agents/infrastructure.agent";
import { MetricsAgent } from "../../agents/metrics.agent";
import { AnalyzerAgent } from "../../agents/analyzer.agent";
import { OptimizerAgent } from "../../agents/optimizer.agent";

export function buildCopilotWorkflow(){
    const graph = new stateGraph<FinOpsState>();

    
}