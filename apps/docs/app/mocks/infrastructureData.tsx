export const infrastructureResources = [
  {
    id: 1,
    name: "web-srv-01",
    status: "running",
    type: "server",
    cpu: 12,
    memory: 45,
    traffic: "1.2 GB",
    price: 45
  },
  {
    id: 2,
    name: "prod-db-replica-01",
    status: "healthy",
    type: "database",
    cpu: 2,
    memory: 8,
    traffic: "120 MB",
    price: 120
  },
  {
    id: 3,
    name: "primary-balancer",
    status: "active",
    type: "loadbalancer",
    connections: "4.2k peak",
    traffic: "8.4 TB",
    price: 20
  },
  {
    id: 4,
    name: "worker-node-04",
    status: "running",
    type: "server",
    cpu: 5,
    memory: 10,
    traffic: "200 MB",
    price: 80,
    inefficient: true
  },
  {
    id: 5,
    name: "main-db-cluster",
    status: "healthy",
    type: "database",
    cpu: 82,
    memory: 68,
    traffic: "12.8 GB",
    price: 450
  },
  {
    id: 6,
    name: "monitoring-app",
    status: "running",
    type: "server",
    cpu: 22,
    memory: 31,
    traffic: "3.5 GB",
    price: 15
  }
];