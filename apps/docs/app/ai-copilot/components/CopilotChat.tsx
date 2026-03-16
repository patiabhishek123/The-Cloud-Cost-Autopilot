"use client";

import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import CopilotHeader from "./CopilotHeader";

export default function CopilotChat() {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "I can analyze cloud costs, detect idle resources, and recommend optimizations.",
    },
  ]);

  const sendMessage = (text: string) => {

    const userMessage = {
      role: "user",
      content: text,
    };

    const aiMessage = {
      role: "assistant",
      content:
        "Analyzing your cloud infrastructure... I found potential optimization opportunities.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
  };

  return (
    <div className="flex flex-col flex-1">

      <CopilotHeader />

      {/* MESSAGES */}

      <div className="flex-1 overflow-y-auto p-6">

        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            role={msg.role}
            content={msg.content}
          />
        ))}

      </div>

      {/* INPUT */}

      <ChatInput sendMessage={sendMessage} />

    </div>
  );
}