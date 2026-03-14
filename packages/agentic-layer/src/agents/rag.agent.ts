import { retrieveFromKB } from "../rag/retriever";
import { formatDocs } from "../rag/formatter";
import { FinOpsState } from "../state/finops.state";

export async function RAGAgent(state: FinOpsState) {
  const query = state.retrievalQuery || state.query;

  if (!query) return {};

  const kbResponse = await retrieveFromKB(query);

  const ragContext = formatDocs(kbResponse);

  console.log("retrieved from KB:", ragContext);

  return {
    ragContext,
  };
}
