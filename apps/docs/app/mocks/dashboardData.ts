export const dashboardStats = {
  totalCost: 14200,
  potentialSavings: 2450,
  idleResources: 12,
  optimizations: 8,
};

export const costSources = [
  { name: "DB-Prod-Primary", cost: 4230 },
  { name: "k8s-cluster-main", cost: 3120 },
  { name: "asset-storage-s3", cost: 1640 },
];

export const costTrend = [
  { date: "May 1", cost: 420 },
  { date: "May 2", cost: 480 },
  { date: "May 3", cost: 390 },
  { date: "May 4", cost: 510 },
  { date: "May 5", cost: 460 },
];

export const infraStatus = {
  active: 112,
  idle: 12,
};

export const aiRecommendations = [
  {
    id: 1,
    title: "Resize DB-Prod-1",
    savings: 120,
  },
];

export const savingsForecast = {
  currentCost: 14200,
  optimizedCost: 11700,
};