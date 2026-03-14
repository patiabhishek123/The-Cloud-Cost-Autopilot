import dotenv from "dotenv";
dotenv.config();

import { buildCopilotWorkflow } from "../graph/workflows/copilot.workflow";

async function run() {

  const mode = process.argv[2] || "copilot";

  let result;

  if (mode === "dashboard") {
    console.log("➡️ Running Dashboard Workflow");

  const result = await graph.invoke({
    query: "give me the overview of my current state of the system",
  });

  console.log(result);
}

run();