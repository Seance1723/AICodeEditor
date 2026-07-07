import { Eye } from "lucide-react";
import ChatWorkspace from "../chat/ChatWorkspace.jsx";
import CodeWorkspace from "../code/CodeWorkspace.jsx";

function Workspace({ state, dispatch }) {
  if (state.currentView === "chat") {
    return <ChatWorkspace state={state} dispatch={dispatch} />;
  }

  if (state.currentView === "preview") {
    return (
      <main className="workspace-panel workspace-panel--preview">
        <section className="preview-stage">
          <div className="preview-toolbar">
            <div>
              <p className="panel-label">Preview mode</p>
              <h2>Full visual preview</h2>
            </div>
            <button type="button" className="quiet-action" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Preview refresh arrives in Module 8." })}>
              <Eye size={16} />
              <span>Refresh</span>
            </button>
          </div>
          <div className="mock-browser">
            <div className="mock-browser-bar"><span /><span /><span /></div>
            <div className="mock-browser-body">Preview canvas placeholder</div>
          </div>
        </section>
      </main>
    );
  }

  return <CodeWorkspace state={state} dispatch={dispatch} />;
}

export default Workspace;