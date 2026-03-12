"use client";

import { useState, useEffect } from "react";
import EventFilters from "./EventFilters";
import EventItem from "./EventItem";

type Event = {
  id: number;
  type: string;
  title: string;
  description?: string;
  savings?: string;
  time: string;
};

const initialEvents: Event[] = [
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

export default function EventTimeline() {

  const [events, setEvents] = useState<Event[]>(initialEvents);

  const [filters, setFilters] = useState({
    type: "",
    search: "",
  });

  /* LIVE EVENT SIMULATION */

  useEffect(() => {
    const interval = setInterval(() => {

      const newEvent: Event = {
        id: Date.now(),
        type: "AI ACTION",
        title: "Auto optimization triggered",
        savings: "$12/mo",
        time: "just now",
      };

      setEvents((prev) => [newEvent, ...prev]);

    }, 20000);

    return () => clearInterval(interval);
  }, []);

  /* FILTER LOGIC */

  const filteredEvents = events.filter((event) => {

    if (filters.type && event.type !== filters.type)
      return false;

    if (
      filters.search &&
      !event.title.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;

    return true;
  });

  return (
    <div className="mt-6">

      {/* FILTER BAR */}
      <EventFilters
        filters={filters}
        setFilters={setFilters}
      />

      {/* EVENT LIST */}
      <div className="space-y-4 mt-6">

        {filteredEvents.length === 0 && (
          <p className="text-sm text-gray-400">
            No events found
          </p>
        )}

        {filteredEvents.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}

      </div>

    </div>
  );
}