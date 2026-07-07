import { ExternalLink, Monitor, RefreshCw, Smartphone, Tablet } from "lucide-react";

const deviceMeta = {
  desktop: { label: "Desktop", icon: Monitor },
  tablet: { label: "Tablet", icon: Tablet },
  mobile: { label: "Mobile", icon: Smartphone },
};

function PreviewWorkspace({ state, dispatch }) {
  const activeDevice = deviceMeta[state.previewDevice] ?? deviceMeta.desktop;
  const DeviceIcon = activeDevice.icon;

  return (
    <main className="workspace-panel workspace-panel--preview full-preview-panel">
      <section className="preview-workspace">
        <header className="preview-workspace-header">
          <div>
            <p className="panel-label">Preview mode</p>
            <h2>Full visual preview</h2>
            <div className="branch-label"><DeviceIcon size={14} /><span>{activeDevice.label} canvas</span></div>
          </div>
          <button type="button" className="quiet-action" onClick={() => dispatch({ type: "REFRESH_PREVIEW" })}>
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
        </header>

        <div className={`preview-device-frame preview-device-frame--${state.previewDevice}`}>
          <div className="preview-browser">
            <div className="preview-browser-bar">
              <span />
              <span />
              <span />
              <p>tri-studio.local/preview</p>
              <ExternalLink size={15} />
            </div>
            <div className="preview-browser-body-full">
              <section className="preview-product-shell">
                <nav>
                  <strong>Tri Studio</strong>
                  <div><span /> <span /> <span /></div>
                </nav>
                <main>
                  <p className="panel-label">AI-native code editor</p>
                  <h3>Build with Chat, Code, and Preview in one calm workspace.</h3>
                  <div className="preview-grid-mock">
                    <article><strong>Chat</strong><span>Plan and gather context</span></article>
                    <article><strong>Code</strong><span>Monaco editor plus agents</span></article>
                    <article><strong>Preview</strong><span>Review visual output</span></article>
                  </div>
                </main>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PreviewWorkspace;