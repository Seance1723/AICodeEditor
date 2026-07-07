import { Monitor, RefreshCw } from "lucide-react";
import ChatSidePanel from "../chat/ChatSidePanel.jsx";
import CodeSidePanel from "../code/CodeSidePanel.jsx";

function SidePanel({ state, dispatch }) {
  if (state.currentView === "chat") {
    return <ChatSidePanel state={state} dispatch={dispatch} />;
  }

  if (state.currentView === "preview") {
    return (
      <aside className="side-panel">
        <p className="panel-label">Preview</p>
        <h1>Preview settings</h1>
        <div className="panel-stack">
          <div className="mini-list-item is-active">
            <Monitor size={16} />
            <span>Desktop</span>
          </div>
          <button className="quiet-action" type="button" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Preview refresh arrives in Module 8." })}>
            <RefreshCw size={16} />
            <span>Refresh preview</span>
          </button>
        </div>
      </aside>
    );
  }

  return <CodeSidePanel state={state} dispatch={dispatch} />;
}

export default SidePanel;