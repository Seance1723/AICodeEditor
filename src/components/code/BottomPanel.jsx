import { AlertCircle, CheckCircle2, FileWarning, ScrollText, TerminalSquare } from "lucide-react";

const bottomTabs = [
  { id: "terminal", label: "Terminal", icon: TerminalSquare },
  { id: "problems", label: "Problems", icon: AlertCircle },
  { id: "logs", label: "Agent Log", icon: ScrollText },
  { id: "approvals", label: "Approvals", icon: FileWarning },
];

function BottomPanel({ state, dispatch }) {
  return (
    <section className="bottom-panel">
      <div className="bottom-panel-tabs" role="tablist" aria-label="Bottom panel tabs">
        {bottomTabs.map(({ id, label, icon: Icon }) => (
          <button
            className={state.activeBottomTab === id ? "is-active" : ""}
            type="button"
            role="tab"
            key={id}
            onClick={() => dispatch({ type: "SET_BOTTOM_TAB", tab: id })}
          >
            <Icon size={15} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="bottom-panel-body">
        {state.activeBottomTab === "terminal" ? (
          state.terminalLogs.length ? (
            <div className="terminal-log-list">
              {state.terminalLogs.map((log) => (
                <div className={`terminal-log terminal-log--${log.type ?? "default"}`} key={log.id}>
                  <span>{log.time}</span>
                  <p>{log.message}</p>
                </div>
              ))}
            </div>
          ) : <div className="empty-line">No terminal output yet.</div>
        ) : null}

        {state.activeBottomTab === "problems" ? (
          <div className="status-row"><CheckCircle2 size={16} /><span>No problems detected in the prototype workspace.</span></div>
        ) : null}

        {state.activeBottomTab === "logs" ? (
          <div className="terminal-log-list">
            {(state.terminalLogs.length ? state.terminalLogs : [{ id: "agent-empty", time: "--:--:--", message: "Agent activity will appear after Run agents.", type: "default" }]).map((log) => (
              <div className={`terminal-log terminal-log--${log.type ?? "default"}`} key={log.id}>
                <span>{log.time}</span>
                <p>{log.message}</p>
              </div>
            ))}
          </div>
        ) : null}

        {state.activeBottomTab === "approvals" ? (
          <div className="approval-card">
            <FileWarning size={17} />
            <div>
              <strong>Safe approval mode</strong>
              <p>Agent writes and shell actions remain simulated until explicit approval flows are implemented.</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default BottomPanel;