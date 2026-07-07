import { Monitor, RefreshCw, Smartphone, Tablet } from "lucide-react";

const devices = [
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "tablet", label: "Tablet", icon: Tablet },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

function PreviewSidePanel({ state, dispatch }) {
  return (
    <aside className="side-panel preview-side-panel">
      <p className="panel-label">Preview</p>
      <h1>Preview settings</h1>
      <p>Review the mock visual output without code or agent dock distraction.</p>

      <div className="preview-device-list" role="radiogroup" aria-label="Preview device">
        {devices.map(({ id, label, icon: Icon }) => (
          <button
            className={state.previewDevice === id ? "preview-device is-active" : "preview-device"}
            type="button"
            role="radio"
            aria-checked={state.previewDevice === id}
            key={id}
            onClick={() => dispatch({ type: "SET_PREVIEW_DEVICE", device: id })}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <button className="quiet-action preview-refresh-action" type="button" onClick={() => dispatch({ type: "REFRESH_PREVIEW" })}>
        <RefreshCw size={16} />
        <span>Refresh preview</span>
      </button>

      <section className="side-section preview-settings-list">
        <p className="panel-label">Settings</p>
        <div className="mini-list-item is-active"><Monitor size={16} /><span>Light mode canvas</span></div>
        <div className="mini-list-item"><RefreshCw size={16} /><span>Static mock refresh</span></div>
      </section>
    </aside>
  );
}

export default PreviewSidePanel;