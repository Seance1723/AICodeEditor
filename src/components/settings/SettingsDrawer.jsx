import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { SettingsBadge } from "./SettingsBadge.jsx";

function SettingsDrawer({ drawer, onClose, onSave }) {
  const firstFieldRef = useRef(null);
  const [draft, setDraft] = useState(() => ({
    enabled: true,
    limit: drawer.defaultLimit ?? 4,
    mode: drawer.mode ?? "standard",
    notes: drawer.description,
    value: drawer.summary,
  }));
  const [dirty, setDirty] = useState(false);
  const [confirmDiscard, setConfirmDiscard] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        requestClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const updateDraft = (key, value) => {
    setDraft((current) => ({ ...current, [key]: value }));
    setDirty(true);
    setConfirmDiscard(false);
  };

  const requestClose = () => {
    if (dirty) {
      setConfirmDiscard(true);
      return;
    }

    onClose();
  };

  const handleSave = () => {
    onSave(draft);
    setDirty(false);
    onClose();
  };

  const drawerClass = drawer.size === "wide" ? "settings-drawer settings-drawer--wide" : "settings-drawer";

  return (
    <div className="settings-drawer-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && requestClose()}>
      <aside className={drawerClass} role="dialog" aria-modal="true" aria-labelledby="settings-drawer-title">
        <header className="settings-drawer-header">
          <div>
            <p className="panel-label">{drawer.sectionLabel}</p>
            <h3 id="settings-drawer-title">{drawer.title}</h3>
            <span>{drawer.description}</span>
          </div>
          <button className="icon-button" type="button" aria-label="Close drawer" onClick={requestClose}>
            <X size={18} />
          </button>
        </header>

        <div className="settings-drawer-body">
          <div className="settings-drawer-note">
            <SettingsBadge tone={drawer.riskTone}>{drawer.badgeLabel}</SettingsBadge>
            <span>{drawer.size === "wide" ? "Wide drawer for table-heavy settings." : "Standard drawer for focused settings."}</span>
          </div>

          <label className="settings-drawer-field">
            <span>Summary value</span>
            <input ref={firstFieldRef} type="text" value={draft.value} onChange={(event) => updateDraft("value", event.target.value)} />
          </label>

          <label className="settings-drawer-field">
            <span>Mode</span>
            <select value={draft.mode} onChange={(event) => updateDraft("mode", event.target.value)}>
              <option value="standard">Standard</option>
              <option value="strict">Strict</option>
              <option value="approval">Approval gated</option>
            </select>
          </label>

          <label className="settings-drawer-field settings-drawer-field--number">
            <span>Limit</span>
            <input type="number" min="1" max="32" value={draft.limit} onChange={(event) => updateDraft("limit", Number(event.target.value))} />
          </label>

          <label className="settings-drawer-check">
            <input type="checkbox" checked={draft.enabled} onChange={(event) => updateDraft("enabled", event.target.checked)} />
            <span>Enabled for this prototype workspace</span>
          </label>

          <label className="settings-drawer-field settings-drawer-field--wide">
            <span>Notes</span>
            <textarea value={draft.notes} onChange={(event) => updateDraft("notes", event.target.value)} />
          </label>
        </div>

        <footer className="settings-drawer-footer">
          {confirmDiscard ? (
            <div className="settings-drawer-discard">
              <strong>Discard changes?</strong>
              <span>Unsaved drawer edits will be lost.</span>
              <button type="button" onClick={() => setConfirmDiscard(false)}>Keep editing</button>
              <button className="is-danger" type="button" onClick={onClose}>Discard</button>
            </div>
          ) : (
            <>
              <span className={dirty ? "settings-drawer-dirty is-dirty" : "settings-drawer-dirty"}>{dirty ? "Unsaved changes" : "No changes"}</span>
              <button type="button" onClick={requestClose}>Cancel</button>
              <button className="settings-drawer-save" type="button" onClick={handleSave} disabled={!dirty}>Save</button>
            </>
          )}
        </footer>
      </aside>
    </div>
  );
}

export default SettingsDrawer;