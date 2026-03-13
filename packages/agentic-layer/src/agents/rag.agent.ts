import { FinOpsState } from "../state/finops.state";
import { retrieveContext } from "../rag/retriever";
import { logAgent } from "../utils/logger";


export async function RAGAgent(
    state: FinOpsState
): Promise<FinOpsState>{
    
    logAgent("RAGAgent")

    const query  = state.query || ""

    const context = await retrieveContext(query)

    state.ragContext = context

    return state
}