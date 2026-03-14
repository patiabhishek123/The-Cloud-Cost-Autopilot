export interface FinOpsState {
  // user query
  query?: string;

  retrievalQuery?:string
  
  // infrastructure snapshot
  infrastructure?: {
    droplets?: any[];
    volumes?: any[];
    loadBalancers?: any[];
  };
  //tools
  selectedTools?: string[];

  // computed metrics
  metrics?: any;

  // inefficiency detection
  analysis?: any;
  // optimization strategies
  optimizations?: any;

  // formatted UI recommendations
  recommendations?: any;

  // RAG retrieved context
  ragContext?: string;

  // final compiled prompt context
  promptContext?: string;

  // AI generated insights
  insights?: string;

  // final copilot response
  response?: string;
}

export const initialState: FinOpsState = {};
