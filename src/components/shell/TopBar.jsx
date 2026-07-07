import { Bot, Code2, Eye, MessageSquare, Settings, ShieldCheck, Sparkles } from "lucide-react";

const modes = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "code", label: "Code", icon: Code2 },
  { id: "preview", label: "Preview", icon: Eye },
];

function TopBar({ state, dispatch }) {
  return (
    <header className="top-bar">
      <div className="brand-mark" aria-hidden="true">
        <Sparkles size={20} />
      </div>
      <div className="brand-copy">
        <strong>Tri Studio</strong>
        <span>AI-native code editor</span>
      </div>

      <nav className="mode-switcher" aria-label="Workspace modes">
        {modes.map(({ id, label, icon: Icon }) => (
          <button
            className={id === state.currentView ? "is-active" : ""}
            type="button"
            key={id}
            onClick={() => dispatch({ type: "SET_VIEW", view: id })}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <button
        className="status-pill"
        type="button"
        onClick={() => dispatch({ type: "OPEN_AGENT_MODAL" })}
      >
        <Bot size={16} />
        <span>3 agents running</span>
      </button>
      <button
        className="status-pill status-pill--safe"
        type="button"
        onClick={() => dispatch({ type: "SHOW_TOAST", message: "Safe approval mode: agents ask before file writes or shell actions." })}
      >
        <ShieldCheck size={16} />
        <span>Safe approval</span>
      </button>
      <button
        className={state.currentView === "settings" ? "icon-button is-active" : "icon-button"}
        type="button"
        aria-label="Settings"
        title="Settings"
        onClick={() => dispatch({ type: "OPEN_SETTINGS" })}
      >
        <Settings size={18} />
      </button>
    </header>
  );
}

export default TopBar;