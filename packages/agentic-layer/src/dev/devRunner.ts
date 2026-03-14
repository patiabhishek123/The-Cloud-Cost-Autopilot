import dotenv from "dotenv";
dotenv.config();

import { buildCopilotWorkflow } from "../graph/workflows/copilot.workflow";

const query = " How to Add SSH Keys to New or Existing Droplets??";

async function run() {
  const graph = buildCopilotWorkflow();

  const result = await graph.invoke({
    query: query,

  });

  console.log(result.response);
}

run();