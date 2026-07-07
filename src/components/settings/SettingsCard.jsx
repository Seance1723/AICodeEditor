function SettingsCard({ title, description, children }) {
  return (
    <section className="settings-card">
      {(title || description) ? (
        <header className="settings-card-header">
          {title ? <h3>{title}</h3> : null}
          {description ? <p>{description}</p> : null}
        </header>
      ) : null}
      <div className="settings-card-body">{children}</div>
    </section>
  );
}

export default SettingsCard;