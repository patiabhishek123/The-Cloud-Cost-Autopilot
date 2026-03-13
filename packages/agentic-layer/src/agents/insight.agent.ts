import { FinOpsState } from "../state/finops.state"

export async function insightAgent(
  state: FinOpsState
): Promise<FinOpsState> {

  const analysis = state.analysis || []

  let insights = ""

  for (const item of analysis) {

    insights += `Resource ${item.resource} has ${item.issue}. `
    insights += `Recommendation: ${item.recommendation}. `
    insights += `This could reduce unnecessary cloud costs.\n\n`
  }

  if (!insights) {
    insights = "No major inefficiencies detected in infrastructure."
  }

  return {
    ...state,
    insights
  }
}