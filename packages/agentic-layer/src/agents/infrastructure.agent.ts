import axios from "axios"
import { FinOpsState } from "../state/finops.state"

const DO_API = "https://api.digitalocean.com/v2"

const headers = {
  Authorization: `Bearer ${process.env.DO_API_TOKEN}`,
  "Content-Type": "application/json"
}

/**
 * Fetch droplets
 */
async function fetchDroplets() {
  const res = await axios.get(`${DO_API}/droplets`, { headers })
  return res.data.droplets || []
}

/**
 * Fetch volumes
 */
async function fetchVolumes() {
  const res = await axios.get(`${DO_API}/volumes`, { headers })
  return res.data.volumes || []
}

/**
 * Fetch load balancers
 */
async function fetchLoadBalancers() {
  const res = await axios.get(`${DO_API}/load_balancers`, { headers })
  return res.data.load_balancers || []
}

/**
 * Infrastructure Agent
 * Fetch all infrastructure resources
 */
export async function infrastructureAgent(
  state: FinOpsState
): Promise<FinOpsState> {

  try {

    const [droplets, volumes, loadBalancers] = await Promise.all([
      fetchDroplets(),
      fetchVolumes(),
      fetchLoadBalancers()
    ])

    return {
      ...state,
      infrastructure: {
        droplets,
        volumes,
        loadBalancers
      }
    }

  } catch (error) {

    console.error("Infrastructure Agent Error:", error)

    return {
      ...state,
      infrastructure: {
        droplets: [],
        volumes: [],
        loadBalancers: []
      }
    }
  }
}