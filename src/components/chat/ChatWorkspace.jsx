import { MessageSquareOff } from "lucide-react";
import ChatComposer from "./ChatComposer.jsx";
import ChatThread from "./ChatThread.jsx";

function ChatWorkspace({ state, dispatch }) {
  return (
    <main className="workspace-panel workspace-panel--chat chat-workspace-panel">
      <section className="chat-workspace">
        <header className="chat-hero">
          <div>
            <p className="panel-label">Chat mode</p>
            <h2>Think, plan, and gather files</h2>
            <p>Use Chat for project context, decisions, and attached references before moving into Code.</p>
          </div>
          <div className="no-preview-card">
            <MessageSquareOff size={18} />
            <span>No preview in Chat</span>
          </div>
        </header>
        <ChatThread messages={state.chatMessages} />
        <ChatComposer dispatch={dispatch} />
      </section>
    </main>
  );
}

export default ChatWorkspace;