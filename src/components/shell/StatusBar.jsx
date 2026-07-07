function StatusBar({ state }) {
  return (
    <footer className="status-bar">
      <span>{state.workspaceStatus}</span>
      <span>View: {state.currentView}</span>
      <span>Monaco base planned</span>
      <span>Safe approval</span>
    </footer>
  );
}

export default StatusBar;
