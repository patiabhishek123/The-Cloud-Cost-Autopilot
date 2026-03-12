"use client";

import { useState } from "react";

export default function ChatInput({ sendMessage }: any) {

  const [input, setInput] = useState("");

  const submit = () => {

    if (!input.trim()) return;

    sendMessage(input);
    setInput("");

  };

  return (
    <div className="border-t p-4 bg-white">

      <div className="flex gap-3 bg-slate-100 rounded-full px-4 py-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Gradient AI about your cloud costs..."
          className="flex-1 bg-transparent outline-none text-sm"
        />

        <button
          onClick={submit}
          className="bg-blue-600 text-white w-8 h-8 rounded-full"
        >
          ↑
        </button>

      </div>

    </div>
  );
}