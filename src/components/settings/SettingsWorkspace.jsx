import { ArrowLeft, ChevronRight, Search } from "lucide-react";
import { filterSettingsGroups, flattenSettingsGroups, getSettingsSection } from "../../data/settingsSections.js";

function SettingsWorkspace({ state, dispatch }) {
  const selectedSection = getSettingsSection(state.activeSettingsSection);
  const filteredSections = flattenSettingsGroups(filterSettingsGroups(state.settingsSearchQuery));

  return (
    <main className="workspace-panel workspace-panel--settings">
      <section className="settings-workspace">
        <header className="settings-workspace-header">
          <div>
            <p className="panel-label">Settings / {selectedSection.groupLabel} / {selectedSection.label}</p>
            <h2>{selectedSection.label}</h2>
            <p>{selectedSection.description}</p>
          </div>
          <button
            className="quiet-action"
            type="button"
            onClick={() => dispatch({ type: "SET_VIEW", view: state.previousMainView })}
          >
            <ArrowLeft size={16} />
            <span>Back to {state.previousMainView}</span>
          </button>
        </header>

        <div className="settings-content-preview">
          {state.settingsSearchQuery ? (
            <section className="settings-search-results" aria-label="Settings search results">
              <div className="settings-results-header">
                <Search size={17} />
                <div>
                  <strong>Search results for "{state.settingsSearchQuery}"</strong>
                  <span>{filteredSections.length} matching section{filteredSections.length === 1 ? "" : "s"}</span>
                </div>
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
            </section>
          ) : null}

          <section className="settings-section-preview" aria-label={`${selectedSection.label} settings preview`}>
            <div className="settings-section-summary">
              <span>{selectedSection.groupLabel}</span>
              <strong>{selectedSection.rows.length} planned setting{selectedSection.rows.length === 1 ? "" : "s"}</strong>
            </div>
            <div className="settings-row-preview-list">
              {selectedSection.rows.map((row) => (
                <article className="settings-row-preview" key={row}>
                  <div>
                    <strong>{row}</strong>
                    <span>{selectedSection.label} configuration row</span>
                  </div>
                  <ChevronRight size={16} />
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default SettingsWorkspace;