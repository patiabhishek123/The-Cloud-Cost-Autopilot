import { FinOpsState } from "../state/finops.state"

export async function analyzerAgent(
  state: FinOpsState
): Promise<FinOpsState> {

  const droplets = state.infrastructure?.droplets || []

  const issues: any[] = []

  for (const droplet of droplets) {

    const cpuUsage = Math.floor(Math.random() * 60)

    if (cpuUsage < 10) {

      issues.push({
        resource: droplet.name,
        issue: "Low CPU utilization",
        recommendation: "Resize or shut down this droplet"
      })
    }
  }

  return {
    ...state,
    analysis: issues
  }
}