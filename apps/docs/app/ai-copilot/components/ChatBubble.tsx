export default function ChatBubble({ role, content }: any) {

  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-5`}>

      <div
        className={`max-w-md px-4 py-3 rounded-xl text-sm shadow-sm
        ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white border border-gray-200"
        }`}
      >
        {content}
      </div>

    </div>
  );
}