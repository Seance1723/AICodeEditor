import { useRef, useState } from "react";
import { ArrowLeft, ChevronRight, Search } from "lucide-react";
import { filterSettingsGroups, flattenSettingsGroups, getSettingsSection } from "../../data/settingsSections.js";
import InlineConfirm from "./InlineConfirm.jsx";
import SegmentedControl from "./SegmentedControl.jsx";
import SettingsCard from "./SettingsCard.jsx";
import SettingsContent from "./SettingsContent.jsx";
import SettingsDrawer from "./SettingsDrawer.jsx";
import SettingsRow from "./SettingsRow.jsx";
import SettingsSectionHeader from "./SettingsSectionHeader.jsx";
import ToggleRow from "./ToggleRow.jsx";
import { RiskBadge, SettingsBadge } from "./SettingsBadge.jsx";
import { NumberField, SelectField, TextField } from "./SettingsFields.jsx";

const immediateRows = new Set([
  "Theme",
  "Density",
  "Font size",
  "Reduce motion",
  "Monaco font size",
  "Font family",
  "Tab size",
  "Word wrap",
  "Minimap",
  "Enable telemetry",
  "Send crash reports",
  "Long-term memory",
]);

const wideDrawerRows = new Set([
  "Compatibility dashboard",
  "Knowledge base",
  "MCP servers",
  "Plugin audit log",
  "Token usage",
  "Tool permissions",
  "VS Code Marketplace",
]);

function getRowSummary(row) {
  if (row.includes("key") || row.includes("secret") || row.includes("Provider secret")) return "Stored securely";
  if (row.includes("permissions") || row.includes("Approval") || row.includes("MCP")) return "Approval gated";
  if (row.includes("Token") || row.includes("Cost") || row.includes("Quota")) return "Usage limits";
  return "Configure";
}

function getRowBadges(row) {
  if (immediateRows.has(row)) return <SettingsBadge tone="info">Applies immediately</SettingsBadge>;
  if (row.includes("key") || row.includes("secret") || row.includes("Provider secret")) return <SettingsBadge tone="success">Stored securely</SettingsBadge>;
  if (row.includes("permissions") || row.includes("Approval") || row.includes("MCP")) return <RiskBadge level="approval">Approval required</RiskBadge>;
  return <SettingsBadge>Requires Save</SettingsBadge>;
}

function getDrawerBadge(row) {
  if (row.includes("key") || row.includes("secret") || row.includes("Provider secret")) return { label: "Stored securely", tone: "success" };
  if (row.includes("permissions") || row.includes("Approval") || row.includes("MCP")) return { label: "Approval required", tone: "warning" };
  return { label: "Requires Save", tone: "neutral" };
}

function SettingsWorkspace({ state, dispatch }) {
  const selectedSection = getSettingsSection(state.activeSettingsSection);
  const filteredSections = flattenSettingsGroups(filterSettingsGroups(state.settingsSearchQuery));
  const drawerTriggerRef = useRef(null);
  const [drawer, setDrawer] = useState(null);
  const [theme, setTheme] = useState("light");
  const [density, setDensity] = useState("default");
  const [fontSize, setFontSize] = useState(14);
  const [fontFamily, setFontFamily] = useState("JetBrains Mono");
  const [toggles, setToggles] = useState({
    crashReports: false,
    longTermMemory: false,
    minimap: false,
    reduceMotion: false,
    telemetry: false,
    wordWrap: true,
  });
  const [roleModel, setRoleModel] = useState("frontend");

  const closeDrawer = () => {
    setDrawer(null);
    window.setTimeout(() => drawerTriggerRef.current?.focus(), 0);
  };

  const openDrawer = (row, event) => {
    const badge = getDrawerBadge(row);
    drawerTriggerRef.current = event.currentTarget;
    setDrawer({
      id: `${selectedSection.id}-${row}`,
      title: row,
      sectionLabel: `${selectedSection.groupLabel} / ${selectedSection.label}`,
      description: `${row} settings for ${selectedSection.label}.`,
      summary: getRowSummary(row),
      size: wideDrawerRows.has(row) ? "wide" : "standard",
      badgeLabel: badge.label,
      riskTone: badge.tone,
      defaultLimit: row.includes("Token") || row.includes("Cost") ? 8 : 4,
      mode: row.includes("Approval") || row.includes("permissions") ? "approval" : "standard",
    });
  };

  const saveDrawer = (draft) => {
    dispatch({ type: "SHOW_TOAST", message: `${drawer.title} saved for this prototype.` });
    return draft;
  };

  const renderRow = (row) => {
    if (row === "Theme") {
      return (
        <SettingsRow title={row} description="Interface theme preference." badges={getRowBadges(row)} key={row}>
          <SegmentedControl
            label="Theme"
            value={theme}
            onChange={setTheme}
            options={[
              { label: "Light", value: "light" },
              { label: "System", value: "system" },
            ]}
          />
        </SettingsRow>
      );
    }

    if (row === "Density") {
      return (
        <SettingsRow title={row} description="Spacing preference for the editor shell." badges={getRowBadges(row)} key={row}>
          <SegmentedControl
            label="Density"
            value={density}
            onChange={setDensity}
            options={[
              { label: "Compact", value: "compact" },
              { label: "Default", value: "default" },
              { label: "Comfort", value: "comfort" },
            ]}
          />
        </SettingsRow>
      );
    }

    if (row === "Monaco font size" || row === "Font size" || row === "Tab size") {
      return (
        <SettingsRow title={row} description="Numeric editor preference." badges={getRowBadges(row)} key={row}>
          <NumberField label={row} value={fontSize} min={10} max={24} onChange={setFontSize} />
        </SettingsRow>
      );
    }

    if (row === "Font family") {
      return (
        <SettingsRow title={row} description="Editor font stack." badges={getRowBadges(row)} key={row}>
          <TextField label="Font family" value={fontFamily} onChange={setFontFamily} />
        </SettingsRow>
      );
    }

    if (row === "Word wrap" || row === "Minimap" || row === "Reduce motion" || row === "Enable telemetry" || row === "Send crash reports" || row === "Long-term memory") {
      const toggleKeyByRow = {
        "Enable telemetry": "telemetry",
        "Long-term memory": "longTermMemory",
        "Minimap": "minimap",
        "Reduce motion": "reduceMotion",
        "Send crash reports": "crashReports",
        "Word wrap": "wordWrap",
      };
      const toggleKey = toggleKeyByRow[row];
      return (
        <ToggleRow
          title={row}
          description="Immediate preference toggle."
          checked={toggles[toggleKey]}
          onChange={(checked) => setToggles((current) => ({ ...current, [toggleKey]: checked }))}
          badges={getRowBadges(row)}
          key={row}
        />
      );
    }

    if (row === "Role assignment") {
      return (
        <SettingsRow title={row} description="Default model routing role." badges={getRowBadges(row)} key={row}>
          <SelectField
            label="Role"
            value={roleModel}
            onChange={setRoleModel}
            options={[
              { label: "Frontend", value: "frontend" },
              { label: "Backend", value: "backend" },
              { label: "QA", value: "qa" },
            ]}
          />
        </SettingsRow>
      );
    }

    return (
      <SettingsRow
        title={row}
        description={`${selectedSection.label} setting.`}
        summary={getRowSummary(row)}
        badges={getRowBadges(row)}
        key={row}
        onClick={(event) => openDrawer(row, event)}
      />
    );
  };

  return (
    <main className="workspace-panel workspace-panel--settings">
      <section className="settings-workspace">
        <SettingsSectionHeader
          eyebrow={`Settings / ${selectedSection.groupLabel} / ${selectedSection.label}`}
          title={selectedSection.label}
          description={selectedSection.description}
          status="Saved"
          actions={(
            <>
              <InlineConfirm
                label="Reset section"
                confirmLabel="Reset"
                onConfirm={() => dispatch({ type: "SHOW_TOAST", message: `${selectedSection.label} reset to defaults.` })}
              />
              <button
                className="quiet-action"
                type="button"
                onClick={() => dispatch({ type: "SET_VIEW", view: state.previousMainView })}
              >
                <ArrowLeft size={16} />
                <span>Back to {state.previousMainView}</span>
              </button>
            </>
          )}
        />

        <SettingsContent>
          {state.settingsSearchQuery ? (
            <SettingsCard title={`Search results for "${state.settingsSearchQuery}"`} description={`${filteredSections.length} matching section${filteredSections.length === 1 ? "" : "s"}`}>
              <div className="settings-results-header" aria-hidden="true">
                <Search size={17} />
              </div>
              <div className="settings-result-list">
                {filteredSections.length > 0 ? (
                  filteredSections.map((section) => (
                    <button
                      className={section.id === state.activeSettingsSection ? "settings-result is-active" : "settings-result"}
                      type="button"
                      key={section.id}
                      onClick={() => dispatch({ type: "SET_SETTINGS_SECTION", sectionId: section.id })}
                    >
                      <span>{section.groupLabel}</span>
                      <ChevronRight size={14} />
                      <strong>{section.label}</strong>
                    </button>
                  ))
                ) : (
                  <p className="empty-line">No settings match the current search.</p>
                )}
              </div>
            </SettingsCard>
          ) : null}

          <SettingsCard title={`${selectedSection.label} controls`} description={`${selectedSection.rows.length} planned setting${selectedSection.rows.length === 1 ? "" : "s"}.`}>
            {selectedSection.rows.map(renderRow)}
          </SettingsCard>
        </SettingsContent>
      </section>
      {drawer ? <SettingsDrawer key={drawer.id} drawer={drawer} onClose={closeDrawer} onSave={saveDrawer} /> : null}
    </main>
  );
}

export default SettingsWorkspace;