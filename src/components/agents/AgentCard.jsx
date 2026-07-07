function AgentCard({ agent, compact = false, onAction }) {
  return (
    <article className={compact ? "agent-card agent-card--compact" : "agent-card"}>
      <div className="agent-card-header">
        <span className={`agent-status-dot agent-status-dot--${agent.status}`} />
        <div>
          <strong>{agent.name}</strong>
          <span>{agent.label}</span>
        </div>
      </div>
      <p>{agent.description}</p>
      <div className="agent-progress" aria-label={`${agent.name} progress ${agent.progress}%`}>
        <span style={{ width: `${agent.progress}%` }} />
      </div>
      <div className="agent-card-footer">
        <small>{agent.progress}%</small>
        <button type="button" onClick={() => onAction?.(agent)}>{agent.actionLabel}</button>
      </div>
    </article>
  );
}

export default AgentCard;