"use client";

import { useState } from "react";

export function useChatStore() {

  const [sessions, setSessions] = useState<any[]>([]);
  const [activeSession, setActiveSession] = useState<string | null>(null);

  const createSession = () => {

    const id = crypto.randomUUID();   // ✅ FIX

    const newSession = {
      id,
      title: "New Chat",
      messages: []
    };

    setSessions((prev) => [newSession, ...prev]);
    setActiveSession(id);

    return id;
  };

  const addMessage = (sessionId: string, message: any) => {

    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? { ...session, messages: [...session.messages, message] }
          : session
      )
    );
  };

  const updateTitle = (sessionId: string, title: string) => {

    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? { ...session, title }
          : session
      )
    );
  };

  return {
    sessions,
    activeSession,
    setActiveSession,
    createSession,
    addMessage,
    updateTitle
  };
}