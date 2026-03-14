import { logStep } from "../utils/logger";

export async function metricsAgent(state: any) {
  logStep("MetricsAgent");

  const droplets = state.infrastructure?.droplets || [];

  const metrics = droplets.map((droplet: any) => ({
    id: droplet.id,
    name: droplet.name,

    cpuUsage: droplet.vcpus === 1 ? 8 : 35,
    memoryUsage: droplet.memory < 2048 ? 20 : 55,
  }));

  return {
    metrics
  };
}
