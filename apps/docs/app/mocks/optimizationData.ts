export const optimizationReports = [
  {
    id: 1,
    icon: "cloud",
    resourceId: "lb-6231-prod",
    title: "prod-load-balancer",
    issue:
      "Unused for 30 consecutive days. No active traffic routes detected.",
    recommendation:
      "Safe to delete resource. Archive configuration before removal.",
    savings: "$150.00/mo",
    confidence: "98% (High)",
  },
  {
    id: 2,
    icon: "cpu",
    resourceId: "inst-4492-worker",
    title: "worker-node-cluster-a",
    issue:
      "Over-provisioned. CPU utilization average < 5% over last 14 days.",
    recommendation:
      "Downsize from c5.4xlarge to c5.large.",
    savings: "$840.00/mo",
    confidence: "92% (Medium-High)",
  },
  {
    id: 3,
    icon: "database",
    resourceId: "db-shared-991",
    title: "staging-db-cluster",
    issue:
      "High storage fragmentation and unoptimized snapshots (800GB+).",
    recommendation:
      "Consolidate snapshots and upgrade to Tier 3 storage pricing.",
    savings: "$215.00/mo",
    confidence: "85% (Medium)",
  },
];