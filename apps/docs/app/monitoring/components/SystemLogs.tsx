"use client";

import { useState, useEffect } from "react";
import { getSystemLogs } from "../../lib/api/events";

export default function SystemLogs() {

  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadLogs() {

      const data = await getSystemLogs();

      setLogs(data);
      setLoading(false);

    }

    loadLogs();

  }, []);

  if (loading) {
    return (
      <div className="bg-[#0F172A] text-green-400 text-sm rounded-xl p-5 mt-6 font-mono">
        Loading logs...
      </div>
    );
  }

  return (
    <div className="bg-[#0F172A] text-green-400 text-sm rounded-xl p-5 mt-6 font-mono space-y-1">

      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}

    </div>
  );
}