"use client";

import Sidebar from "../components/layout/Sidebar";
import CopilotSidebar from "./components/CopilotSidebar";
import CopilotHeader from "./components/CopilotHeader";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

import { useChatStore } from "./store/chatStore";

export default function AICopilotPage() {

  const {
    sessions,
    activeSession,
    setActiveSession,
    createSession,
    addMessage,
    updateTitle
  } = useChatStore();

  const activeChat = sessions.find((s) => s.id === activeSession);

  const sendMessage = async (text: string) => {

    let sessionId = activeSession;

    if (!sessionId) {
      sessionId = createSession();
    }

    addMessage(sessionId, {
      role: "user",
      content: text
    });

    try {

      const res = await fetch("/api/copilot/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text
        })
      });

      const data = await res.json();

      addMessage(sessionId, {
        role: "assistant",
        content: data.reply
      });

      updateTitle(sessionId, text.slice(0, 30));

    } catch {

      addMessage(sessionId, {
        role: "assistant",
        content: "AI service unavailable."
      });

    }

  };

  return (
    <div className="flex h-screen bg-[#F8FAFC]">

      <Sidebar />

      <CopilotSidebar
        sessions={sessions}
        createSession={createSession}
        setActiveSession={setActiveSession}
      />

      <div className="flex-1 flex flex-col">

        <CopilotHeader />

        {/* CHAT AREA */}

        <div className="flex-1 overflow-y-auto px-10 py-8">

          <div className="max-w-3xl mx-auto space-y-6">

            {activeChat?.messages.map((msg: any, i: number) => (
              <ChatMessage key={i} {...msg} />
            ))}

          </div>

        </div>

        {/* INPUT */}

        <ChatInput sendMessage={sendMessage} />

      </div>

    </div>
  );
}