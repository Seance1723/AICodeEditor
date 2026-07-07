import { Bot, FolderTree, GitBranch, Search, Settings, Wrench } from "lucide-react";

const railItems = [
  { id: "files", label: "Files", icon: FolderTree },
  { id: "search", label: "Search", icon: Search },
  { id: "git", label: "Source Control", icon: GitBranch },
  { id: "agents", label: "Agents", icon: Bot },
  { id: "tools", label: "Tools", icon: Wrench },
];

function ActivityRail({ state, dispatch }) {
  const handleClick = (item) => {
    if (state.currentView === "settings") {
      dispatch({ type: "SET_RAIL", rail: item.id, label: item.label });
      return;
    }

    if (state.currentView !== "code") {
      dispatch({ type: "SHOW_TOAST", message: `${item.label} opens from Code mode.` });
      return;
    }

    dispatch({ type: "SET_RAIL", rail: item.id, label: item.label });
  };

  return (
    <aside className="activity-rail" aria-label="Primary navigation">
      <div className="rail-group">
        {railItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              className={item.id === state.activeRail && state.currentView !== "settings" ? "is-active" : ""}
              type="button"
              aria-label={item.label}
              title={item.label}
              key={item.id}
              onClick={() => handleClick(item)}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>
      <button
        className={state.currentView === "settings" ? "rail-account is-active" : "rail-account"}
        type="button"
        aria-label="Settings"
        title="Settings"
        onClick={() => dispatch({ type: "OPEN_SETTINGS" })}
      >
        <Settings size={20} />
      </button>
    </aside>
  );
}

export default ActivityRail;