import { ExternalLink, RefreshCw } from "lucide-react";

function InlinePreview({ dispatch }) {
  return (
    <aside className="inline-preview">
      <div className="inline-preview-header">
        <div>
          <p className="panel-label">Inline Preview</p>
          <strong>Local app mock</strong>
        </div>
        <button className="icon-button icon-button--small" type="button" aria-label="Refresh inline preview" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Inline preview refresh is simulated for now." })}>
          <RefreshCw size={15} />
        </button>
      </div>
      <div className="inline-browser">
        <div className="inline-browser-bar">
          <span />
          <span />
          <span />
          <p>localhost:5173</p>
          <ExternalLink size={14} />
        </div>
        <div className="inline-browser-body">
          <section>
            <p className="panel-label">Tri Studio</p>
            <h3>Preview canvas</h3>
            <p>Module 6 keeps this as a mock browser surface. Real iframe preview comes later.</p>
          </section>
        </div>
      </div>
    </aside>
  );
}

export default InlinePreview;