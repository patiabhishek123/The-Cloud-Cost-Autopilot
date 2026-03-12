"use client";

export default function CopilotSidebar({
  sessions,
  createSession,
  setActiveSession,
}: any) {

  return (
    <div className="w-[280px] border-r border-[#E2E8F0] bg-white p-4">

      <button
        onClick={createSession}
        className="w-full bg-slate-100 rounded-lg py-2 text-sm mb-4"
      >
        + New Chat
      </button>

      <p className="text-xs text-slate-400 mb-3">
        RECENT CHATS
      </p>

      <div className="space-y-2">

        {sessions.map((chat: any) => (

          <div
            key={chat.id}
            onClick={() => setActiveSession(chat.id)}
            className="text-sm p-3 rounded-md hover:bg-slate-100 cursor-pointer"
          >
            {chat.title}
          </div>

        ))}

      </div>

    </div>
  );
}