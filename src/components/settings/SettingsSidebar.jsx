import { Bot, Monitor, Palette, Puzzle, ShieldCheck, SlidersHorizontal } from "lucide-react";

const settingsGroups = [
  {
    label: "General",
    items: [
      { label: "Appearance", icon: Palette },
      { label: "Editor", icon: Monitor },
      { label: "Privacy", icon: ShieldCheck },
    ],
  },
  {
    label: "AI",
    items: [
      { label: "Model Providers", icon: Bot },
      { label: "Agents", icon: SlidersHorizontal },
    ],
  },
  {
    label: "Workspace",
    items: [
      { label: "Extensions", icon: Puzzle },
    ],
  },
];

function SettingsSidebar({ state, dispatch }) {
  return (
    <aside className="side-panel settings-sidebar">
      <p className="panel-label">System workspace</p>
      <h1>Settings</h1>
      <p>Configure Tri Studio without leaving the editor shell.</p>

      <div className="settings-sidebar-note">
        <span>Previous view</span>
        <strong>{state.previousMainView}</strong>
      </div>

      <div className="settings-nav-preview" aria-label="Settings sections preview">
        {settingsGroups.map((group) => (
          <section key={group.label}>
            <p className="panel-label">{group.label}</p>
            <div className="panel-stack">
              {group.items.map(({ label, icon: Icon }, index) => (
                <button
                  className={index === 0 && group.label === "General" ? "mini-list-item is-active" : "mini-list-item"}
                  type="button"
                  key={label}
                  onClick={() => dispatch({ type: "SHOW_TOAST", message: `${label} settings arrive in the next settings modules.` })}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}

export default SettingsSidebar;