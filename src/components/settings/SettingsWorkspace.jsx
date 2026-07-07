import { ArrowLeft, CheckCircle2, PanelLeft, ShieldCheck } from "lucide-react";

function SettingsWorkspace({ state, dispatch }) {
  return (
    <main className="workspace-panel workspace-panel--settings">
      <section className="settings-workspace">
        <header className="settings-workspace-header">
          <div>
            <p className="panel-label">Settings</p>
            <h2>System configuration</h2>
            <p>Settings now opens as a full-page workspace while the editor shell stays visible.</p>
          </div>
          <button
            className="quiet-action"
            type="button"
            onClick={() => dispatch({ type: "SET_VIEW", view: state.previousMainView })}
          >
            <ArrowLeft size={16} />
            <span>Back to {state.previousMainView}</span>
          </button>
        </header>

        <div className="settings-shell-preview" aria-label="Settings shell integration status">
          <article>
            <PanelLeft size={22} />
            <div>
              <strong>Navigation replaces the side panel</strong>
              <span>The normal project, chat, or preview side panel is swapped for Settings navigation.</span>
            </div>
          </article>
          <article>
            <ShieldCheck size={22} />
            <div>
              <strong>Agent Dock hidden</strong>
              <span>Settings has room for larger controls and avoids mixing configuration with agent activity.</span>
            </div>
          </article>
          <article>
            <CheckCircle2 size={22} />
            <div>
              <strong>Shell orientation preserved</strong>
              <span>Topbar, activity rail, and status bar stay in place while Settings owns the main workspace.</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default SettingsWorkspace;