# DigitalOcean FinOps Optimization Rules

## Droplets

Droplets with CPU utilization consistently below 20% are often overprovisioned.

Recommendation:
Resize to a smaller droplet plan.

Example:
s-4vcpu-8gb → s-2vcpu-4gb

Savings can range from 25–50%.

---

## Idle Instances

Droplets with CPU usage below 5% are likely idle.

Recommendation:
Shutdown unused instances.

---

## Block Storage Volumes

Unattached volumes continue to incur storage charges.

Recommendation:
Delete unattached volumes.

---

## Load Balancers

Unused load balancers still incur hourly charges.

Recommendation:
Delete unused load balancers.

---

## Monitoring Best Practices

Monitor CPU, memory, and disk usage.

Resize infrastructure periodically based on usage patterns.