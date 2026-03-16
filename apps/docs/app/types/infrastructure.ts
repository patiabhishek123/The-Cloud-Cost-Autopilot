export type InfrastructureResource = {
  id: number;
  name: string;
  status: "running" | "healthy" | "active";
  type: "server" | "database" | "loadbalancer";
  cpu?: number;
  memory?: number;
  connections?: string;
  traffic: string;
  price: number;
  inefficient?: boolean;
};