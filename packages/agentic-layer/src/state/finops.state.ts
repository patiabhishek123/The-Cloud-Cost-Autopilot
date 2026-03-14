export interface FinOpsState {
  // user query
  query?: string;

  // infrastructure snapshot
  infrastructure?: {
    droplets?: any[];
    volumes?: any[];
    loadBalancers?: any[];
  }>(),

  metrics: Annotation<any[]>(),

  // 🔧 Merge multiple writes to analysis
  analysis: Annotation<any[]>({
    reducer: (left, right) => {
      const l = left ?? [];
      const r = right ?? [];
      return [...l, ...r];
    },
    default: () => [],
  }),

  // (optional) same idea for optimizations
  optimizations: Annotation<any[]>({
    reducer: (left, right) => {
      const l = left ?? [];
      const r = right ?? [];
      return [...l, ...r];
    },
    default: () => [],
  }),

  ragContext: Annotation<string>(),
  promptContext: Annotation<string>(),
  insights: Annotation<string>(),
  response: Annotation<string>(),
});