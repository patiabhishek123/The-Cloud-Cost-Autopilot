import { logStep } from "../utils/logger";

export async function metricsAgent(state: any) {
  logStep("MetricsAgent");

  const droplets = state.infrastructure?.droplets || [];

  const metrics = droplets.map((droplet: any) => ({
    id: droplet.id,
    name: droplet.name,
    cpuUsage: Math.floor(Math.random() * 60),
    memoryUsage: Math.floor(Math.random() * 70),
  }));

  return {
    metrics,
  };
}
