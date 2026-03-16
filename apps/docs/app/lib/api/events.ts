import { events, eventFrequency, systemLogs } from "../../monitoring/data/mockEvents";

export async function getEvents() {

  await new Promise((r) => setTimeout(r, 300));

  return events;
}

export async function getEventFrequency(range: string) {

  await new Promise((r) => setTimeout(r, 300));

  return {
    totalEvents: 124,
    growth: 12,
    data: eventFrequency[range as keyof typeof eventFrequency]
  };
}

export async function getSystemLogs() {

  await new Promise((r) => setTimeout(r, 300));

  return systemLogs;
}