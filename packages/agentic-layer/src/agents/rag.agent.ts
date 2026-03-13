import { retrieveContext } from "../rag/retriever";
import { logAgent } from "../utils/logger";

export async function RAGAgent(state: any) {
  logAgent("RAGAgent");

  const query = state.query || "";

  const context = await retrieveContext(query);

  return {
    ragContext: context,
  };
}
