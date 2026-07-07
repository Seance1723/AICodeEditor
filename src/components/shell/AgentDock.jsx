import { Bot, MessageSquare, Wrench } from "lucide-react";

const dockTabs = [
  { id: "tasks", label: "Tasks", icon: Bot },
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "tools", label: "Tools", icon: Wrench },
];

function AgentDock({ state, dispatch }) {
  return (
    <aside className="agent-dock">
      <div className="dock-header">
        <p className="panel-label">Agent Dock</p>
        <h2>Calm agent summary</h2>
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
        {state.activeDockTab === "tasks" ? (
          <>
            <div className="agent-summary"><strong>UI Builder</strong><span>Coding shell layout</span></div>
            <div className="agent-summary"><strong>QA Tester</strong><span>Waiting for Module 2 build</span></div>
            <div className="agent-summary"><strong>Security Review</strong><span>Approval model pending</span></div>
          </>
        ) : null}
        {state.activeDockTab === "chat" ? <div className="empty-line">Agent conversation arrives in Module 7.</div> : null}
        {state.activeDockTab === "tools" ? <div className="empty-line">Tool shortcuts arrive in Module 7.</div> : null}
      </div>
    </aside>
  );
}

export default AgentDock;
