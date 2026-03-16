export const events = [
  {
    id: 1,
    type: "AI ACTION",
    title: "Droplet worker-1 shut down by AI Copilot",
    savings: "$20/mo",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "INFRASTRUCTURE",
    title: "Scaling event: db-main capacity increased",
    description: "Horizontal scaling triggered by CPU threshold (85%)",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "COST MANAGEMENT",
    title: "Snapshot old-backup-2023 deleted",
    savings: "$5/mo",
    time: "3 hours ago",
  },
];

export const eventFrequency = {
  "24h": [
    { time: "00:00", events: 20 },
    { time: "04:00", events: 40 },
    { time: "08:00", events: 80 },
    { time: "12:00", events: 20 },
    { time: "16:00", events: 70 },
    { time: "20:00", events: 35 },
    { time: "23:59", events: 90 }
  ],

  "7d": [
    { time: "Mon", events: 120 },
    { time: "Tue", events: 95 },
    { time: "Wed", events: 160 },
    { time: "Thu", events: 140 },
    { time: "Fri", events: 200 },
    { time: "Sat", events: 180 },
    { time: "Sun", events: 210 }
  ],

  "30d": [
    { time: "W1", events: 400 },
    { time: "W2", events: 500 },
    { time: "W3", events: 350 },
    { time: "W4", events: 600 }
  ]
};

export const systemLogs = [
  "[INFO] Successfully connected to DigitalOcean API endpoint...",
  "[INFO] Analyzing current resource utilization for cluster: prod-01",
  "[WARN] Peak load approaching memory limit (92%)",
  "[INFO] Executing cleanup policy: older than 6 months"
];