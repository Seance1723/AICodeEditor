import { Code2, Eye, MessageSquare, Play, TerminalSquare } from "lucide-react";

function Workspace({ state, dispatch }) {
  if (state.currentView === "chat") {
    return (
      <main className="workspace-panel workspace-panel--chat">
        <section className="workspace-card workspace-card--wide">
          <p className="panel-label">Chat mode</p>
          <h2>Think, plan, and gather files</h2>
          <p>
            Chat mode is intentionally focused on conversation. Preview stays hidden here so planning and uploaded context do not compete with the editor.
          </p>
          <div className="info-strip">
            <MessageSquare size={18} />
            <span>No preview in Chat mode.</span>
          </div>
        </section>
      </main>
    );
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

  return (
    <main className="workspace-panel workspace-panel--code">
      <section className="code-workspace-shell">
        <div className="workspace-header">
          <div>
            <p className="panel-label">Code mode</p>
            <h2>{state.projectTitle}</h2>
          </div>
          <div className="header-actions">
            <button type="button" className="quiet-action" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Agent simulation arrives in Module 6." })}>
              <Play size={16} />
              <span>Run agents</span>
            </button>
            <button type="button" className="quiet-action" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Monaco editor arrives in Module 3." })}>
              <Code2 size={16} />
              <span>Editor base</span>
            </button>
          </div>
        </div>
        <div className="editor-placeholder">
          <Code2 size={28} />
          <div>
            <h3>Monaco editor surface</h3>
            <p>Module 3 will mount Monaco here and wire file selection into editor models.</p>
          </div>
        </div>
        <div className="bottom-panel-shell">
          <TerminalSquare size={16} />
          <span>Bottom panel placeholder: Terminal, Problems, Agent Log, Approvals.</span>
        </div>
      </section>
    </main>
  );
}

export default Workspace;
