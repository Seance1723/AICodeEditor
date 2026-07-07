function StatusBar({ state }) {
  const viewLabel = state.currentView === "settings" ? "Settings" : state.currentView;
  const workspaceStatus = state.currentView === "settings" ? "Settings open" : state.workspaceStatus;
  const syncStatus = state.currentView === "settings" ? "Config synced" : "Monaco ready";

  return (
    <footer className="status-bar">
      <span>{workspaceStatus}</span>
      <span>View: {viewLabel}</span>
      <span>{syncStatus}</span>
      <span>Safe approval</span>
    </footer>
  );
}

export default StatusBar;