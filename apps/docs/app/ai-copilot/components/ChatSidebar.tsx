export default function ChatSidebar() {

  const chats = [
    "Optimize Droplets",
    "Cost Report Analysis",
    "Database Scaling",
    "Infrastructure Audit",
  ];

  return (
    <div className="w-64 border-r bg-white p-4">

      <button className="w-full bg-gray-100 py-2 rounded-lg mb-4">
        + New Chat
      </button>

      <p className="text-xs text-gray-400 mb-2">
        RECENT CHATS
      </p>

      {chats.map((chat) => (
        <div
          key={chat}
          className="text-sm p-2 rounded hover:bg-gray-100"
        >
          {chat}
        </div>
      ))}

    </div>
  );
}