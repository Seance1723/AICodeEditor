import { Bot, SendHorizontal } from "lucide-react";

function AgentDockChat({ dispatch }) {
  return (
    <div className="agent-dock-chat">
      <div className="agent-chat-thread">
        <article>
          <Bot size={16} />
          <p>UI Builder is ready to explain the current Monaco workspace changes.</p>
        </article>
        <article>
          <Bot size={16} />
          <p>QA Tester is watching transitions and bottom-panel state.</p>
        </article>
      </div>
      <form
        className="agent-chat-input"
        onSubmit={(event) => {
          event.preventDefault();
          const input = event.currentTarget.elements.namedItem("agentDockMessage");
          const value = input.value.trim();
          if (!value) {
            dispatch({ type: "SHOW_TOAST", message: "Type an agent message before sending." });
            return;
          }
          dispatch({ type: "ADD_TERMINAL_LOG", message: `Agent dock message sent: ${value}`, logType: "success" });
          dispatch({ type: "SHOW_TOAST", message: "Agent message recorded in the simulated log." });
          input.value = "";
        }}
      >
        <input name="agentDockMessage" type="text" placeholder="Message selected agent..." />
        <button type="submit" aria-label="Send agent message"><SendHorizontal size={16} /></button>
      </form>
    </div>
  );
}

export default AgentDockChat;