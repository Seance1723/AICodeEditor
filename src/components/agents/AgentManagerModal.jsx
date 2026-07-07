import { X } from "lucide-react";
import { managerAgents } from "../../data/mockAgents.js";
import AgentCard from "./AgentCard.jsx";

function AgentManagerModal({ dispatch }) {
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          dispatch({ type: "CLOSE_AGENT_MODAL" });
        }
      }}
    >
      <section className="agent-manager-modal" role="dialog" aria-modal="true" aria-labelledby="agent-manager-title">
        <header className="modal-header">
          <div>
            <p className="panel-label">Agent Manager</p>
            <h2 id="agent-manager-title">Parallel agent activity</h2>
          </div>
          <button className="icon-button" type="button" aria-label="Close Agent Manager" onClick={() => dispatch({ type: "CLOSE_AGENT_MODAL" })}>
            <X size={18} />
          </button>
        </header>
        <div className="manager-grid">
          {managerAgents.map((agent) => (
            <article className="manager-agent-card" key={agent.id}>
              <div className="manager-card-meta">
                <span className={`agent-status-dot agent-status-dot--${agent.status}`} />
                <div>
                  <strong>{agent.name}</strong>
                  <span>{agent.workspace}</span>
                </div>
              </div>
              <p>{agent.description}</p>
              <AgentCard
                agent={agent}
                compact
                onAction={() => dispatch({ type: "SHOW_TOAST", message: `${agent.name} action is simulated.` })}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AgentManagerModal;