import { StateGraph, START, END } from "@langchain/langgraph";

import { State } from "../state";

import { PlannerNode } from "../../nodes/planner.node";
import { RouterNode } from "../../nodes/router.node";
import { ContextNode } from "../../nodes/context.node";
import { ResponseNode } from "../../nodes/response.node";
import { QueryRewriteNode } from "../../nodes/queryRewriter.node";
import { RAGAgent } from "../../agents/rag.agent";
import { infrastructureAgent } from "../../agents/infrastructure.agent";
import { metricsAgent } from "../../agents/metrics.agent";
import { analyzerAgent } from "../../agents/analyzer.agent";
import { optimizerAgent } from "../../agents/optimizer.agent";

export function buildCopilotWorkflow() {
  const graph = new StateGraph(State);

  graph
    .addNode("planner", PlannerNode)
    .addNode("router", RouterNode)
    .addNode("queryRewriter", QueryRewriteNode)
    .addNode("ragAgent", RAGAgent)

    .addNode("infraAgent", infrastructureAgent)
    .addNode("metricsAgent", metricsAgent)
    .addNode("analysisAgent", analyzerAgent)
    .addNode("optimizerAgent", optimizerAgent)

    .addNode("contextNode", ContextNode)
    .addNode("responseNode", ResponseNode)

    .addEdge(START, "planner")
    .addEdge("planner", "queryRewriter")
    .addEdge("queryRewriter","router")
    .addEdge("router", "ragAgent")

    .addEdge("ragAgent", "infraAgent")
    .addEdge("ragAgent", "metricsAgent")
    .addEdge("ragAgent", "analysisAgent")
    .addEdge("ragAgent", "optimizerAgent")

    .addEdge("infraAgent", "contextNode")
    .addEdge("metricsAgent", "contextNode")
    .addEdge("analysisAgent", "contextNode")
    .addEdge("optimizerAgent", "contextNode")

    .addEdge("contextNode", "responseNode")
    .addEdge("responseNode", END);

  return graph.compile();
}
