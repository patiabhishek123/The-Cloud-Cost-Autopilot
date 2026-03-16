export default function ChatMessage({ role, content }: any) {

  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>

      <div
        className={`max-w-md px-4 py-3 rounded-xl text-sm shadow-sm
        ${
          isUser
            ? "bg-slate-200"
            : "bg-white border border-[#E2E8F0]"
        }`}
      >
        {content}
      </div>

    </div>
  );
}