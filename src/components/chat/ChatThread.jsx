import { Bot, UserRound } from "lucide-react";

function ChatThread({ messages }) {
  return (
    <div className="chat-thread" aria-label="Chat thread">
      {messages.map((message) => {
        const isUser = message.role === "user";
        const Icon = isUser ? UserRound : Bot;

        return (
          <article className={isUser ? "chat-message is-user" : "chat-message"} key={message.id}>
            <div className="chat-avatar" aria-hidden="true">
              <Icon size={16} />
            </div>
            <div className="chat-bubble">
              <div className="chat-meta">
                <strong>{message.author}</strong>
                <span>{message.time}</span>
              </div>
              <p>{message.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ChatThread;