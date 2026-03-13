import axios from "axios";
import { logStep } from "../utils/logger";
import "dotenv/config"

const DO_API = "https://api.digitalocean.com/v2";

const headers = {
  Authorization: `Bearer ${process.env.DO_API_TOKEN}`,
  "Content-Type": "application/json",
};

async function fetchDroplets() {
  const res = await axios.get(`${DO_API}/droplets`, { headers });
  return res.data.droplets || [];
}

async function fetchVolumes() {
  const res = await axios.get(`${DO_API}/volumes`, { headers });
  return res.data.volumes || [];
}

async function fetchLoadBalancers() {
  const res = await axios.get(`${DO_API}/load_balancers`, { headers });
  return res.data.load_balancers || [];
}

export async function infrastructureAgent(state: any) {
  logStep("InfrastructureAgent");

  try {
    const [droplets, volumes, loadBalancers] = await Promise.allSettled([
      fetchDroplets(),
      fetchVolumes(),
      fetchLoadBalancers(),
    ]);

    return {
      infrastructure: {
        droplets: droplets.status === "fulfilled" ? droplets.value : [],
        volumes: volumes.status === "fulfilled" ? volumes.value : [],
        loadBalancers:
          loadBalancers.status === "fulfilled" ? loadBalancers.value : [],
      },
    };
  } catch (error) {
    console.error("Infrastructure Agent Error:", error);

    return {
      infrastructure: {
        droplets: [],
        volumes: [],
        loadBalancers: [],
      },
    };
  }
}
