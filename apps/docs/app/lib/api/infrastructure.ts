import { infrastructureResources } from "../../mocks/infrastructureData";

export async function getInfrastructureResources() {

  await new Promise((resolve) => setTimeout(resolve, 300));

  return infrastructureResources;
}

export async function getAutopilotSummary() {

  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    savings: 342,
    affectedResources: 5,
    servers: 4,
    databases: 1
  };
}


// get single resource
export async function getInfrastructureResource(id: number) {

  await new Promise((resolve) => setTimeout(resolve, 300));

  return infrastructureResources.find((r) => r.id === id);
}


// create resource
export async function createInfrastructureResource(resource: any) {

  await new Promise((resolve) => setTimeout(resolve, 300));

  const newResource = {
    id: infrastructureResources.length + 1,
    status: "running",
    cpu: 0,
    memory: 0,
    traffic: "0 MB",
    price: 0,
    ...resource
  };

  infrastructureResources.push(newResource);

  return newResource;
}


// delete resource
export async function deleteInfrastructureResource(id: number) {

  await new Promise((resolve) => setTimeout(resolve, 300));

  const index = infrastructureResources.findIndex((r) => r.id === id);

  if (index !== -1) {
    infrastructureResources.splice(index, 1);
  }

  return { success: true };
}