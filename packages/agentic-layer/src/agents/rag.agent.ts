import { FinOpsState } from "../state/finops.state";

const KB_URL = "https://kbaas.do-ai.run/retrieve";

/**
 * Simple in-memory cache
 */
const ragCache = new Map<string, string>();

export async function RAGAgent(
  state: FinOpsState,
): Promise<Partial<FinOpsState>> {
  if (!state.query) {
    return {};
  }

  /**
   * Check cache first
   */
  if (ragCache.has(state.query)) {
    return { ragContext: ragCache.get(state.query) };
  }

  try {
    const response = await fetch(KB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DO_API_KEY}`,
      },
      body: JSON.stringify({
        knowledge_base_uuid: process.env.DO_KB_UUID,
        query: state.query,
        top_k: 3,
      }),
    });

    if (!response.ok) {
      console.error("RAG retrieval failed:", response.status);
      return {};
    }

    const data = await response.json();

    /**
     * Support both response formats
     */
    const docs = data.documents || data.results || [];

    if (!docs.length) {
      return {};
    }

    const ragContext = docs
      .map((doc: any, i: number) => {
        const content = doc.content || doc.text || "";
        return `DOC ${i + 1}:\n${content.slice(0, 1000)}`;
      })
      .join("\n\n");

    /**
     * Cache result
     */
    ragCache.set(state.query, ragContext);

    return {
      ragContext,
    };
  } catch (error) {
    console.error("RAGAgent error:", error);

    return {};
  }
}
