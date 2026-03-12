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

  const generateAIResponse = (text: string) => {

    const input = text.toLowerCase();

    if (input.includes("waste"))
      return "You are currently wasting $2,100 per month on idle resources.";

    if (input.includes("optimize"))
      return "I found 3 optimization opportunities that could save $480/mo.";

    if (input.includes("report"))
      return "Your weekly cloud cost increased by 12% due to database scaling.";

    return "I can analyze cloud costs, detect idle resources, and recommend optimizations.";
  };

  const sendMessage = (text: string) => {

    let sessionId = activeSession;

    if (!sessionId) {
      sessionId = createSession();
    }

    addMessage(sessionId, {
      role: "user",
      content: text
    });

    addMessage(sessionId, {
      role: "assistant",
      content: generateAIResponse(text)
    });

    updateTitle(sessionId, text.slice(0, 30));
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

        <div className="flex-1 overflow-y-auto p-6">

          {activeChat?.messages.map((msg: any, i: number) => (
            <ChatMessage key={i} {...msg} />
          ))}

        </div>

        <ChatInput sendMessage={sendMessage} />

      </div>

    </div>
  );
}