# Tri Studio Tasklist

Last updated: 2026-07-07

Rule: every new modification must add or update relevant tasks here before or during the change, and the result must be reflected in `CHANGELOG.md`.

## Backlog Status Key

- `[ ]` Not started
- `[~]` In progress
- `[x]` Done
- `[!]` Blocked

## Documentation and Project Memory

- [x] Create Monaco-based module implementation plan.
- [x] Create persistent tasklist.
- [x] Create changelog.
- [x] Create project memory file.
- [x] Analyze settings layout plan and extend the module roadmap.
- [ ] Keep tasklist updated for every new modification.
- [ ] Keep changelog updated for every completed app/documentation change.
- [ ] Update project memory when a durable decision, instruction, or assumption changes.

## Module 1: Project Foundation

- [x] Initialize Vite React project in this workspace.
- [x] Install `@monaco-editor/react`.
- [x] Install `monaco-editor`.
- [x] Install `lucide-react`.
- [x] Install `sass`.
- [x] Add `src/main.jsx`.
- [x] Add `src/App.jsx`.
- [x] Add SCSS partial structure under `src/styles`.
- [x] Add light-mode design tokens.
- [x] Add initial app shell placeholder.
- [x] Add `.gitignore` for dependency, build, and local environment outputs.
- [x] Verify `npm run dev` starts.
- [x] Verify `npm run build` passes.

## Module 2: Editor Shell

- [x] Build `TopBar`.
- [x] Build `ActivityRail`.
- [x] Build `SidePanel`.
- [x] Build `Workspace`.
- [x] Build `AgentDock`.
- [x] Build `StatusBar`.
- [x] Build `Toast`.
- [x] Implement Chat, Code, Preview view switching.
- [x] Hide Agent Dock outside Code mode.
- [x] Ensure Preview never appears in Chat mode.

## Module 3: Monaco Editor Core

- [x] Add `src/editor/monacoConfig.js`.
- [x] Add `src/editor/monacoTheme.js`.
- [x] Add `src/editor/editorModels.js`.
- [x] Add `src/editor/languageUtils.js`.
- [x] Build `MonacoCodeEditor`.
- [x] Build `EditorTabs`.
- [x] Build `EditorToolbar`.
- [x] Register custom light Monaco theme.
- [x] Map mock file languages to Monaco language IDs.
- [x] Wire selected file state to Monaco content.
- [x] Store editor changes in reducer state.
- [x] Track dirty file state.
- [x] Ensure Monaco uses automatic layout.
- [x] Confirm Monaco remains usable when inline preview is toggled.

## Module 4: Chat Mode

- [x] Build `ChatSidePanel`.
- [x] Build `ChatWorkspace`.
- [x] Build `ChatThread`.
- [x] Build `ChatComposer`.
- [x] Build shared `UploadList`.
- [x] Add chat sessions list.
- [x] Add chat upload handling.
- [x] Add composer attachment handling.
- [x] Add send message behavior.
- [x] Add empty message validation toast.
- [x] Add `No preview in Chat` UI.

## Module 5: Code Side Panel and Workspace Files

- [x] Build `CodeSidePanel`.
- [x] Build `ProjectActions`.
- [x] Build `FileTree`.
- [x] Build `ChangedFilesList`.
- [x] Add Create Project simulation.
- [x] Add local folder picker using `webkitdirectory`.
- [x] Infer workspace name from selected folder.
- [x] Add code upload handling.
- [x] Add Files, Agents, and Changes side tabs.
- [x] Wire file tree selection to Monaco.
- [x] Show uploaded code files.
- [x] Show dirty/changed files.

## Module 6: Code Workspace and Preview

- [x] Build `CodeWorkspace`.
- [x] Build `InlineAgentPrompt`.
- [x] Build `InlinePreview`.
- [x] Build `BottomPanel`.
- [x] Add code header with project title and branch.
- [x] Add Run Agents button.
- [x] Add Toggle Preview button.
- [x] Add Current Task strip.
- [x] Add View Plan action.
- [x] Add timed terminal log simulation.
- [x] Add Terminal, Problems, Agent Log, and Approvals tabs.

## Module 7: Agent Dock and Agent Manager

- [x] Build `AgentCard`.
- [x] Build `AgentDockTasks`.
- [x] Build `AgentDockChat`.
- [x] Build `AgentDockTools`.
- [x] Build `AgentManagerModal`.
- [x] Add Tasks, Chat, and Tools dock tabs.
- [x] Add compact agent cards.
- [x] Add progress bars.
- [x] Open Agent Manager from top bar pill.
- [x] Close Agent Manager from close button.
- [x] Close Agent Manager from backdrop.

## Module 8: Preview Mode

- [x] Build `PreviewSidePanel`.
- [x] Build `PreviewWorkspace`.
- [x] Add Desktop device state.
- [x] Add Tablet device state.
- [x] Add Mobile device state.
- [x] Add Refresh Preview action.
- [x] Add full browser preview mockup.
- [x] Hide code editor in Preview mode.
- [x] Hide Agent Dock in Preview mode.

## Module 9: Styling and Responsive Behavior

- [x] Add stable shell grid styles.
- [x] Add Monaco container sizing styles.
- [x] Add hover states.
- [x] Add focus states.
- [x] Add active states.
- [x] Add empty states.
- [x] Add responsive side panel behavior.
- [x] Add responsive dock behavior.
- [x] Verify text does not overlap at desktop widths.
- [x] Verify smaller widths remain usable.
- [x] Confirm no emoji icons are used.
- [x] Confirm all app icons come from `lucide-react`.
- [x] Confirm no dark mode styles exist.

## Module 10: QA and Build Verification

- [x] Run production build.
- [x] Test Chat mode default load.
- [x] Test Chat message sending.
- [x] Test Chat uploads.
- [x] Test Code mode layout.
- [x] Test Monaco file switching.
- [x] Test Monaco editing and dirty state.
- [x] Test folder picker.
- [x] Test code uploads.
- [x] Test inline preview toggle.
- [x] Test Run Agents log simulation.
- [x] Test bottom panel tabs.
- [x] Test Agent Dock tabs.
- [x] Test Agent Manager modal.
- [x] Test Preview mode device switching.
- [!] Check browser console for errors. Blocked: in-app browser surface is unavailable in this session (`Browser is not available: iab`).
- [x] Update changelog with QA result.

## Module 11: Settings Shell Integration

- [ ] Add `settings` to app view state.
- [ ] Track `previousMainView` for Chat, Code, and Preview return behavior.
- [ ] Wire the activity rail gear to open Settings.
- [ ] Make the gear active while Settings is open.
- [ ] Hide Agent Dock while Settings is open.
- [ ] Replace the normal side panel with settings navigation in Settings view.
- [ ] Render Settings full-page in the main workspace area.
- [ ] Ensure Chat, Code, and Preview top switcher actions exit Settings.
- [ ] Add Settings-specific status bar text.

## Module 12: Settings Navigation and Search

- [ ] Create centralized settings section data.
- [ ] Build `SettingsSidebar`.
- [ ] Build `SettingsSearch`.
- [ ] Render grouped navigation for General, AI, Execution, Security, and Workspace.
- [ ] Add selected section state.
- [ ] Add search filtering by group, section label, description, and row labels.
- [ ] Add search empty state.
- [ ] Add keyboard navigation with Arrow Up, Arrow Down, Home, and End.

## Module 13: Shared Settings Components

- [ ] Build `SettingsWorkspace`.
- [ ] Build `SettingsContent`.
- [ ] Build `SettingsSectionHeader`.
- [ ] Build `SettingsCard`.
- [ ] Build `SettingsRow`.
- [ ] Build `ToggleRow`.
- [ ] Build `SegmentedControl`.
- [ ] Build number, text, and select field primitives.
- [ ] Build shared status/risk badges.
- [ ] Build `InlineConfirm`.
- [ ] Add light-mode settings styles consistent with the editor shell.

## Module 14: Settings Drawer System

- [ ] Build `SettingsDrawer`.
- [ ] Support standard drawer width.
- [ ] Support wide drawer width for table-heavy settings.
- [ ] Add overlay click close.
- [ ] Add Escape close.
- [ ] Add close button behavior.
- [ ] Focus the first field when drawer opens.
- [ ] Return focus to the triggering row when drawer closes.
- [ ] Add draft state and dirty tracking.
- [ ] Add dirty drawer discard confirmation.
- [ ] Add sticky Cancel and Save footer.

## Module 15: General Settings

- [ ] Build Appearance settings section.
- [ ] Add theme segmented control.
- [ ] Add density segmented control.
- [ ] Add interface font size segmented control.
- [ ] Add reduce motion toggle.
- [ ] Build Notifications drawer.
- [ ] Build Editor settings section.
- [ ] Add Monaco font size control.
- [ ] Add Monaco font family control.
- [ ] Add tab size control.
- [ ] Add word wrap toggle.
- [ ] Add minimap toggle.
- [ ] Build Privacy settings section.
- [ ] Add telemetry toggle defaulting off.
- [ ] Add crash reports toggle defaulting off.
- [ ] Add immediate-save labels and save status feedback.

## Module 16: AI Settings

- [ ] Build Model Providers settings section.
- [ ] Add provider catalog with 16 supported providers.
- [ ] Add provider connection rows.
- [ ] Add mock API key save and remove actions.
- [ ] Ensure stored API keys are never displayed after save.
- [ ] Add role assignment controls.
- [ ] Add quota and cost table with empty state.
- [ ] Build Add Model drawer.
- [ ] Build Fallback Chains drawer.
- [ ] Build Cost Caps drawer.
- [ ] Build Token Usage drawer.
- [ ] Build Agents settings section.
- [ ] Build Agent Types drawer.
- [ ] Build System Prompts drawer.
- [ ] Build Tool Permissions wide drawer.
- [ ] Build Token Budgets drawer.

## Module 17: Execution Settings

- [ ] Build Tasks & Execution settings section.
- [ ] Build Parallelism drawer.
- [ ] Build Deadlines & Timeouts drawer.
- [ ] Build Approval Gates drawer.
- [ ] Build Quality Gating drawer.
- [ ] Build Retry Policy drawer.
- [ ] Build Tools & Memory settings section.
- [ ] Build Network Allowlist drawer.
- [ ] Build Tool Registry drawer.
- [ ] Add long-term memory toggle.
- [ ] Build Retention Period drawer.
- [ ] Build Knowledge Base wide drawer.
- [ ] Add approval and risk labeling where relevant.

## Module 18: Security and Workspace Settings

- [ ] Build Secrets & Privacy settings section.
- [ ] Add storage backend row.
- [ ] Add provider secret status rows.
- [ ] Build Add or Rotate Secret drawer.
- [ ] Add delete secret inline confirm.
- [ ] Build Data Retention drawer.
- [ ] Build Extensions settings section.
- [ ] Add suggested TRI plugin mock rows.
- [ ] Add VS Code Marketplace search mock.
- [ ] Add compatibility dashboard row.
- [ ] Add installed VS Code extensions list.
- [ ] Add installed TRI plugins list.
- [ ] Build Plugin Audit Log drawer.
- [ ] Build MCP Servers drawer.
- [ ] Build Onboarding settings section.
- [ ] Add Re-run Onboarding action.

## Module 19: Settings QA, Accessibility, and Polish

- [ ] Run production build.
- [ ] Test Settings open and exit behavior.
- [ ] Test settings sidebar search.
- [ ] Test settings keyboard navigation.
- [ ] Test all settings sections render.
- [ ] Test all drawer open, cancel, save, and close paths.
- [ ] Test dirty drawer discard confirmation.
- [ ] Test inline destructive confirmations.
- [ ] Test immediate-save versus drawer-save labels.
- [ ] Test secret rows never display stored values.
- [ ] Test responsive settings layout.
- [ ] Test reduced-motion handling.
- [ ] Check browser console if the in-app browser surface is available.
- [ ] Update changelog with Settings QA results.

## Later Enhancements

- [ ] Add real filesystem integration after prototype approval.
- [ ] Add Monaco diff editor.
- [ ] Add Problems panel from Monaco diagnostics.
- [ ] Add real terminal bridge.
- [ ] Add real preview iframe.
- [ ] Add real agent orchestration.
- [ ] Add Git integration.
- [ ] Add command palette.
- [ ] Add keyboard shortcuts.
- [ ] Add project persistence.



