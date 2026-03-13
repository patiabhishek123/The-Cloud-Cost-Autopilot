import { FinOpsState } from "../state/finops.state"

export async function metricsAgent(
  state: FinOpsState
): Promise<FinOpsState> {

  const droplets = state.infrastructure?.droplets || []

  let totalDroplets = droplets.length
  let idleDroplets = 0
  let estimatedMonthlyCost = 0

  for (const droplet of droplets) {

    const cpuUsage = Math.floor(Math.random() * 60)

    if (cpuUsage < 10) {
      idleDroplets++
    }

    estimatedMonthlyCost += 20
  }

  return {
    ...state,
    metrics: {
      totalDroplets,
      idleDroplets,
      estimatedMonthlyCost
    }
  }
}