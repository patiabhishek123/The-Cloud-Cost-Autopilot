import { runCopilotWorkflow } from "../graph/workflows/copilot.workflow";

async function run() {
  const result = await runCopilotWorkflow({
    query: "How can I reduce my droplet costs?",
  });

  console.log("\nRESULT:\n");

  console.log(result);
}

run();
