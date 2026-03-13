import { RAG_CONFIG } from "../config/rag.config";

export async function retrieveContext(query: string){
     const mockDocs = [
       "If droplet CPU usage remains below 20% for extended periods, consider resizing to a smaller instance.",
       "Unused load balancers can generate unnecessary cost.",
       "Block storage volumes should be deleted if unattached.",
     ];
     return mockDocs.slice(0, RAG_CONFIG.TOP_K_RESULTS).join("\n\n");
}