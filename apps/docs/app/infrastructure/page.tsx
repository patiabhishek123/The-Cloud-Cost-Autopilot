"use client";

import { useState, useEffect } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import InfrastructureCard from "./components/InfrastructureCard";

import { infrastructureResources } from "../mocks/infrastructureData";

export default function InfrastructurePage() {

  const [resources, setResources] = useState(infrastructureResources);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  
  useEffect(() => {

    const interval = setInterval(() => {

      setResources((prev) =>
        prev.map((r) => {

          if (r.cpu === undefined) return r;

          const cpuChange = Math.floor(Math.random() * 8 - 4);
          const memChange = Math.floor(Math.random() * 8 - 4);

          return {
            ...r,
            cpu: Math.max(1, Math.min(100, r.cpu + cpuChange)),
            memory: Math.max(1, Math.min(100, r.memory + memChange)),
          };

        })
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);


  const filteredResources = resources.filter((resource) => {

    const matchesSearch =
      resource.name.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || resource.status === statusFilter;

    const matchesType =
      typeFilter === "all" || resource.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;

  });

  const healthyCount = resources.filter(
    (r) => r.status === "healthy"
  ).length;

  const idleCount = resources.filter(
    (r) => r.inefficient
  ).length;

  const totalMonthly = resources.reduce(
    (sum, r) => sum + r.price,
    0
  );

  return (
    <div className="flex h-screen bg-[#F8FAFC]">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar />

        <main className="p-8 overflow-y-auto">

        
          <div className="flex justify-between items-center mb-6">

            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold">
                Infrastructure
              </h1>

              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                ACTIVE PLAN
              </span>
            </div>

            <div className="flex items-center gap-4">

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources..."
                className="bg-slate-100 px-3 py-2 rounded-md text-sm"
              />

              <button className="bg-[#0069FF] text-white px-4 py-2 rounded-md text-sm">
                + New Resource
              </button>

            </div>

          </div>

          <div className="flex justify-between items-center mb-6">

            <div className="flex gap-4">

              <select
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border px-3 py-2 rounded-md text-sm"
              >
                <option value="all">Status: All</option>
                <option value="running">Running</option>
                <option value="healthy">Healthy</option>
                <option value="active">Active</option>
              </select>

              <select
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border px-3 py-2 rounded-md text-sm"
              >
                <option value="all">Resource Type: All</option>
                <option value="server">Server</option>
                <option value="database">Database</option>
                <option value="loadbalancer">Load Balancer</option>
              </select>

            </div>

            <div className="flex items-center gap-5 text-sm">

              <span className="text-green-600">
                ● {healthyCount} Healthy
              </span>

              <span className="text-yellow-500">
                ● {idleCount} Idle
              </span>

              <span className="font-medium">
                Total Monthly: ${totalMonthly}
              </span>

            </div>

          </div>

        
          <div className="grid grid-cols-3 gap-6">

            {filteredResources.map((resource) => (
              <InfrastructureCard
                key={resource.id}
                data={resource}
              />
            ))}

          </div>

        </main>

      </div>

    </div>
  );
}