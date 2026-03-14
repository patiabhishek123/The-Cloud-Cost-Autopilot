import dotenv from "dotenv";
dotenv.config();

import { buildCopilotWorkflow } from "../graph/workflows/copilot.workflow";
import { dashboardWorkflow } from "../graph/workflows/dashboard.workflow";
// import { optimizationWorkflow } from "../graph/workflows/optimization.workflow";
// import { monitoringWorkflow } from "../graph/workflows/monitoring.workflow";

async function run() {

  const mode = process.argv[2] || "copilot";

  let result;

  if (mode === "dashboard") {
    console.log("➡️ Running Dashboard Workflow");

    result = await dashboardWorkflow({
      query: "give me the overview of my current state of the system",
    });

  } else {
    console.log("➡️ Running Copilot Workflow");

    const graph = buildCopilotWorkflow();

    result = await graph.invoke({
      query: "give me the overview of my current state of the system",
    });
  }

  console.log("\nRESULT:\n", result);
}

run();