export const knowledgeBase = [
  {
    intent: "cost_waste",
    keywords: [
      "waste",
      "spending",
      "cost leak",
      "unused resources",
      "money",
      "bill",
      "cloud cost",
      "how much",
      "overspending"
    ],
    response:
      "You are currently wasting approximately $2,100 per month due to idle droplets, oversized databases, and unused storage snapshots.",
    suggestions: [
      "Show idle droplets",
      "Optimize my infrastructure",
      "Show weekly cost report"
    ]
  },

  {
    intent: "idle_resources",
    keywords: [
      "idle",
      "droplets",
      "unused",
      "inactive",
      "not used",
      "idle servers"
    ],
    response:
      "I found 4 droplets that have been idle for more than 72 hours. Shutting them down would save $480 per month.",
  },

  {
    intent: "optimization",
    keywords: [
      "optimize",
      "optimization",
      "improve cost",
      "reduce bill",
      "save money",
      "cost reduction"
    ],
    response:
      "There are 3 optimization opportunities: resizing 2 database replicas, shutting down idle droplets, and cleaning unused storage snapshots.",
  },

  {
    intent: "report",
    keywords: [
      "report",
      "analysis",
      "weekly",
      "monthly",
      "trend",
      "cost trend"
    ],
    response:
      "Your cloud spending increased by 12% this week due to increased database workload and storage growth.",
  },

  {
    intent: "infrastructure",
    keywords: [
      "servers",
      "infrastructure",
      "machines",
      "instances",
      "resources"
    ],
    response:
      "You currently have 12 active compute instances, 3 managed databases, and 2 load balancers running in production.",
  },

  {
    intent: "help",
    keywords: [
      "help",
      "what can you do",
      "capabilities",
      "assist",
      "features"
    ],
    response:
      "I can analyze your cloud costs, detect wasted resources, recommend optimizations, and generate cost reports.",
  }
];