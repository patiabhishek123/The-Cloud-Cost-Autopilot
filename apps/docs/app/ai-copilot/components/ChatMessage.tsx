export default function ChatMessage({ role, content }: any) {

  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>

      <div
        className={`max-w-md px-4 py-3 rounded-xl text-sm
        ${
          isUser
            ? "bg-gray-100"
            : "bg-white border border-gray-200"
        }`}
      >
        {content}
      </div>

    </div>
  );
}