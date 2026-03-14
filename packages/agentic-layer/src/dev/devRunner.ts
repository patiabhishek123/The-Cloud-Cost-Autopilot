import { buildCopilotWorkflow } from "../graph/workflows/copilot.workflow";

async function run() {
  const graph = buildCopilotWorkflow();

  const result = await graph.invoke({
    query: "give me the overview of my current state of the system ",
  });

  console.log(result);
}

run();
