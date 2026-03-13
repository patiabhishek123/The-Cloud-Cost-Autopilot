import { buildCopilotWorkflow } from "../graph/workflows/copilot.workflow";

async function run() {
  const graph = buildCopilotWorkflow();

  const result = await graph.invoke({
    query: "how many droplets are running ?",
  });

  console.log(result);
}

run();
