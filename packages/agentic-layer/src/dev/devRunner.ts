import { WorkflowOrchestrator } from "../orchestrator/workflowOrchestrator";

async function run() {
  const orchestrator = new WorkflowOrchestrator();

  const result = await orchestrator.run(
    "Analyze my DigitalOcean infrastructure for cost inefficiencies",
  );

  console.log("\nFinal Result:\n");
  console.log(JSON.stringify(result, null, 2));
}

run();
