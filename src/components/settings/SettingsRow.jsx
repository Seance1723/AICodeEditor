import { ChevronRight } from "lucide-react";

function SettingsRow({ title, description, summary, badges, children, onClick, danger = false }) {
  const isInteractive = typeof onClick === "function";
  const Component = isInteractive ? "button" : "div";

  return (
    <Component
      className={danger ? "settings-row settings-row--danger" : "settings-row"}
      type={isInteractive ? "button" : undefined}
      onClick={onClick}
    >
      <div className="settings-row-main">
        <div className="settings-row-title-line">
          <strong>{title}</strong>
          {badges ? <div className="settings-row-badges">{badges}</div> : null}
        </div>
        {description ? <span>{description}</span> : null}
      </div>
      <div className="settings-row-control">
        {summary ? <span className="settings-row-summary">{summary}</span> : null}
        {children}
        {isInteractive ? <ChevronRight size={16} /> : null}
      </div>
    </Component>
  );
}

export default SettingsRow;