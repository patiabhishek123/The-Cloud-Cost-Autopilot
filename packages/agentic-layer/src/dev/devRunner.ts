import dotenv from "dotenv";
dotenv.config();

import { FinOpsState } from "../state/finops.state";
import { buildCopilotWorkflow } from "../graph/workflows/copilot.workflow";
import { dashboardWorkflow } from "../graph/workflows/dashboard.workflow";

type WorkflowMode = "copilot" | "dashboard";

const query =
  "How to Connect to your Droplet with PuTTY on Windows? give me a brief response";

async function run() {
  const mode = (process.argv[2] as WorkflowMode) || "copilot";

  console.log(`🚀 Running workflow: ${mode}\n`);

  const initialState: Partial<FinOpsState> = {
    query: query,
  };

  let result;

  if (mode === "copilot") {
    const graph = buildCopilotWorkflow();
    result = await graph.invoke(initialState);
  }

  if (mode === "dashboard") {
    result = await dashboardWorkflow(initialState as FinOpsState);
  }

  console.log("✅ RESULT\n");
  // console.dir(result, { depth: null });
}

run().catch((err) => {
  console.error("❌ Runner failed:", err);
});
