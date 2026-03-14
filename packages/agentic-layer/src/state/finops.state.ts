import { Annotation } from "@langchain/langgraph";

export const FinOpsStateAnnotation = Annotation.Root({
  query: Annotation<string>(),
  retrievalQuery: Annotation<string>(),

  selectedTools: Annotation<string[]>({
    reducer: (left, right) => right ?? left ?? [],
    default: () => [],
  }),
  infrastructure: Annotation<{
    droplets?: any[];
    volumes?: any[];
    loadBalancers?: any[];
  }>(),

  metrics: Annotation<any[]>(),

  analysis: Annotation<any[]>({
    reducer: (l, r) => [...(l ?? []), ...(r ?? [])],
    default: () => [],
  }),

  optimizations: Annotation<any[]>({
    reducer: (l, r) => [...(l ?? []), ...(r ?? [])],
    default: () => [],
  }),

  ragContext: Annotation<string>(),
  promptContext: Annotation<string>(),
  insights: Annotation<string>(),
  response: Annotation<string>(),
});

export type FinOpsState = typeof FinOpsStateAnnotation.State;
