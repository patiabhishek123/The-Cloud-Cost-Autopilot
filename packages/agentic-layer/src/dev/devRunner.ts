import { WorkflowOrchestrator } from "../orchestrator/workflowOrchestrator";

async function run() {
  const orchestrator = new WorkflowOrchestrator();

  const result = await orchestrator.run(
    "Find ways to reduce my DigitalOcean infrastructure costs",
  );

  console.log("\nFinal Result:\n");
  console.log(JSON.stringify(result, null, 2));
}

run();
