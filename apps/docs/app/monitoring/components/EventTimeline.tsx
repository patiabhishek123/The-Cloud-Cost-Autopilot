"use client";

import { useState, useEffect } from "react";
import EventFilters from "./EventFilters";
import EventItem from "./EventItem";

import { getEvents } from "../../lib/api/events";

type Event = {
  id: number;
  type: string;
  title: string;
  description?: string;
  savings?: string;
  time: string;
};

export default function EventTimeline() {

  const [events, setEvents] = useState<Event[]>([]);
  const [filters, setFilters] = useState({
    type: "",
    search: "",
  });

  const [loading, setLoading] = useState(true);

  /* FETCH EVENTS */

  useEffect(() => {

    async function loadEvents() {

      const data = await getEvents();

      setEvents(data);
      setLoading(false);

    }

    loadEvents();

  }, []);

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

  if (loading) {
    return <p className="text-sm text-gray-400">Loading events...</p>;
  }

  return (
    <div className="mt-6">

      <EventFilters
        filters={filters}
        setFilters={setFilters}
      />

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