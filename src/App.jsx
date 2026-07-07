import { Bot, Code2, Eye, FolderTree, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

const modes = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "code", label: "Code", icon: Code2 },
  { id: "preview", label: "Preview", icon: Eye },
];

function App() {
  const activeMode = "chat";

  return (
    <div className="app-shell" data-mode={activeMode}>
      <header className="top-bar">
        <div className="brand-mark" aria-hidden="true">
          <Sparkles size={20} />
        </div>
        <div className="brand-copy">
          <strong>Tri Studio</strong>
          <span>AI-native code editor</span>
        </div>
        <nav className="mode-switcher" aria-label="Workspace modes">
          {modes.map(({ id, label, icon: Icon }) => (
            <button className={id === activeMode ? "is-active" : ""} type="button" key={id}>
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <button className="status-pill" type="button">
          <Bot size={16} />
          <span>3 agents running</span>
        </button>
        <button className="status-pill status-pill--safe" type="button">
          <ShieldCheck size={16} />
          <span>Safe approval</span>
        </button>
      </header>

      <aside className="activity-rail" aria-label="Primary navigation">
        <button className="is-active" type="button" aria-label="Files">
          <FolderTree size={20} />
        </button>
        <button type="button" aria-label="Agents">
          <Bot size={20} />
        </button>
      </aside>

      <aside className="side-panel">
        <p className="panel-label">Module 1</p>
        <h1>Project foundation</h1>
        <p>
          Vite, React, SCSS, lucide-react, and Monaco dependencies are being prepared for the editor shell.
        </p>
      </aside>

      <main className="workspace-panel">
        <section className="workspace-empty">
          <p className="panel-label">Ready for Module 2</p>
          <h2>Light-mode editor shell placeholder</h2>
          <p>
            This first screen confirms the app foundation is alive. The full Chat, Code, Preview shell and Monaco editor modules will build on this structure.
          </p>
        </section>
      </main>

      <aside className="agent-dock agent-dock--placeholder">
        <p className="panel-label">Agent Dock</p>
        <h2>Hidden outside Code mode</h2>
        <p>The first complete shell will show this dock only when Code mode is active.</p>
      </aside>

      <footer className="status-bar">
        <span>No folder selected</span>
        <span>Monaco base planned</span>
        <span>Light mode</span>
      </footer>
    </div>
  );
}

export default App;
