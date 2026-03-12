"use client";

import { useState } from "react";
import { knowledgeBase } from "../data/knowledgeBase";

export function useCopilotAI() {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm Gradient AI Copilot. I can help you analyze cloud costs and optimize infrastructure."
    }
  ]);

  const findBestMatch = (input: string) => {

    const text = input.toLowerCase();

    for (const intent of knowledgeBase) {

      const matched = intent.keywords.some((keyword) =>
        text.includes(keyword)
      );

      if (matched) return intent;

    }

    return null;
  };

  const generateResponse = (input: string) => {

    const intent = findBestMatch(input);

    if (intent) return intent.response;

    return "I’m not completely sure what you mean, but I can help analyze cloud costs, detect waste, or optimize infrastructure. Try asking about idle resources, cost reports, or optimizations.";
  };

  const sendMessage = (text: string) => {

    const userMsg = {
      role: "user",
      content: text
    };

    const aiMsg = {
      role: "assistant",
      content: generateResponse(text)
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
  };

  return { messages, sendMessage };

}