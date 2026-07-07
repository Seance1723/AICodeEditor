function SettingsSectionHeader({ eyebrow, title, description, status, actions }) {
  return (
    <header className="settings-workspace-header settings-section-header">
      <div>
        <p className="panel-label">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="settings-section-header-actions">
        {status ? <span className="settings-save-status">{status}</span> : null}
        {actions}
      </div>
    </header>
  );
}

export default SettingsSectionHeader;