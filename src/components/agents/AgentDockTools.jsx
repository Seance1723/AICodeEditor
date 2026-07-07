import { mockTools } from "../../data/mockTools.js";

function AgentDockTools({ dispatch }) {
  return (
    <div className="tool-shortcut-list">
      {mockTools.map(({ id, name, detail, icon: Icon }) => (
        <button
          className="tool-shortcut"
          type="button"
          key={id}
          onClick={() => dispatch({ type: "SHOW_TOAST", message: `${name} is planned for a later integration.` })}
        >
          <Icon size={16} />
          <span>{name}</span>
          <small>{detail}</small>
        </button>
      ))}
    </div>
  );
}

export default AgentDockTools;