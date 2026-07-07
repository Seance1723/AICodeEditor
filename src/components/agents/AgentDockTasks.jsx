import { mockAgents } from "../../data/mockAgents.js";
import AgentCard from "./AgentCard.jsx";

function AgentDockTasks({ dispatch }) {
  return (
    <div className="agent-card-list">
      {mockAgents.map((agent) => (
        <AgentCard
          agent={agent}
          compact
          key={agent.id}
          onAction={() => dispatch({ type: "SHOW_TOAST", message: `${agent.name}: ${agent.description}` })}
        />
      ))}
    </div>
  );
}

export default AgentDockTasks;