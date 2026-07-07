const badgeClassByTone = {
  neutral: "settings-badge",
  info: "settings-badge settings-badge--info",
  success: "settings-badge settings-badge--success",
  warning: "settings-badge settings-badge--warning",
  danger: "settings-badge settings-badge--danger",
};

const riskClassByLevel = {
  safe: "settings-badge settings-badge--success",
  low: "settings-badge settings-badge--info",
  high: "settings-badge settings-badge--warning",
  blocked: "settings-badge settings-badge--danger",
  approval: "settings-badge settings-badge--warning",
};

function SettingsBadge({ children, tone = "neutral" }) {
  return <span className={badgeClassByTone[tone] ?? badgeClassByTone.neutral}>{children}</span>;
}

function RiskBadge({ level = "safe", children }) {
  return <span className={riskClassByLevel[level] ?? riskClassByLevel.safe}>{children}</span>;
}

export { RiskBadge, SettingsBadge };