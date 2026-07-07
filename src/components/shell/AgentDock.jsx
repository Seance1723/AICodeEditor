import { Bot, MessageSquare, Wrench } from "lucide-react";
import AgentDockChat from "../agents/AgentDockChat.jsx";
import AgentDockTasks from "../agents/AgentDockTasks.jsx";
import AgentDockTools from "../agents/AgentDockTools.jsx";

const dockTabs = [
  { id: "tasks", label: "Tasks", icon: Bot },
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "tools", label: "Tools", icon: Wrench },
];

function AgentDock({ state, dispatch }) {
  return (
    <aside className="agent-dock">
      <div className="dock-header">
        <div>
          <p className="panel-label">Agent Dock</p>
          <h2>Calm agent summary</h2>
        </div>
        <button className="quiet-action quiet-action--compact" type="button" onClick={() => dispatch({ type: "OPEN_AGENT_MODAL" })}>
          Manage
        </button>
      </div>
      <div className="segmented-tabs" role="tablist" aria-label="Agent dock tabs">
        {dockTabs.map(({ id, label, icon: Icon }) => (
          <button
            className={id === state.activeDockTab ? "is-active" : ""}
            type="button"
            role="tab"
            key={id}
            onClick={() => dispatch({ type: "SET_DOCK_TAB", tab: id })}
          >
            <Icon size={14} />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="panel-stack">
        {state.activeDockTab === "tasks" ? <AgentDockTasks dispatch={dispatch} /> : null}
        {state.activeDockTab === "chat" ? <AgentDockChat dispatch={dispatch} /> : null}
        {state.activeDockTab === "tools" ? <AgentDockTools dispatch={dispatch} /> : null}
      </div>
    </aside>
  );
}

export default AgentDock;