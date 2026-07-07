import { Bot, Compass, Inbox, KeyRound, Monitor, Palette, Puzzle, ShieldCheck, SlidersHorizontal, Timer, Wrench } from "lucide-react";
import { filterSettingsGroups, flattenSettingsGroups } from "../../data/settingsSections.js";
import SettingsSearch from "./SettingsSearch.jsx";

const iconMap = {
  bot: Bot,
  compass: Compass,
  key: KeyRound,
  monitor: Monitor,
  palette: Palette,
  puzzle: Puzzle,
  shield: ShieldCheck,
  sliders: SlidersHorizontal,
  timer: Timer,
  wrench: Wrench,
};

function SettingsSidebar({ state, dispatch }) {
  const filteredGroups = filterSettingsGroups(state.settingsSearchQuery);
  const visibleSections = flattenSettingsGroups(filteredGroups);

  const selectSection = (sectionId) => {
    dispatch({ type: "SET_SETTINGS_SECTION", sectionId });
  };

  const handleSearchChange = (query) => {
    const nextVisibleSections = flattenSettingsGroups(filterSettingsGroups(query));
    dispatch({
      type: "SET_SETTINGS_SEARCH",
      query,
      firstSectionId: nextVisibleSections[0]?.id,
    });
  };

  const handleNavKeyDown = (event) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key) || visibleSections.length === 0) return;

    event.preventDefault();
    const currentIndex = visibleSections.findIndex((section) => section.id === state.activeSettingsSection);
    let nextIndex = currentIndex < 0 ? 0 : currentIndex;

    if (event.key === "ArrowDown") nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % visibleSections.length;
    if (event.key === "ArrowUp") nextIndex = currentIndex < 0 ? visibleSections.length - 1 : (currentIndex - 1 + visibleSections.length) % visibleSections.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = visibleSections.length - 1;

    selectSection(visibleSections[nextIndex].id);
  };

  return (
    <aside className="side-panel settings-sidebar">
      <p className="panel-label">System workspace</p>
      <h1>Settings</h1>
      <p>Configure Tri Studio without leaving the editor shell.</p>

      <SettingsSearch
        value={state.settingsSearchQuery}
        onChange={handleSearchChange}
        onClear={() => handleSearchChange("")}
      />

      <nav className="settings-nav-preview" aria-label="Settings sections" tabIndex={0} onKeyDown={handleNavKeyDown}>
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <section key={group.id} className="settings-nav-section">
              <p className="panel-label">{group.label}</p>
              <div className="panel-stack">
                {group.sections.map((section) => {
                  const Icon = iconMap[section.icon] ?? SlidersHorizontal;
                  const isActive = section.id === state.activeSettingsSection;

                  return (
                    <button
                      className={isActive ? "mini-list-item settings-nav-item is-active" : "mini-list-item settings-nav-item"}
                      type="button"
                      key={section.id}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => selectSection(section.id)}
                    >
                      <Icon size={16} />
                      <span>{section.label}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))
        ) : (
          <div className="settings-empty-search">
            <Inbox size={18} />
            <span>No matching settings</span>
          </div>
        )}
      </nav>
    </aside>
  );
}

export default SettingsSidebar;