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

- [ ] Run production build.
- [ ] Test Chat mode default load.
- [ ] Test Chat message sending.
- [ ] Test Chat uploads.
- [ ] Test Code mode layout.
- [ ] Test Monaco file switching.
- [ ] Test Monaco editing and dirty state.
- [ ] Test folder picker.
- [ ] Test code uploads.
- [ ] Test inline preview toggle.
- [ ] Test Run Agents log simulation.
- [ ] Test bottom panel tabs.
- [ ] Test Agent Dock tabs.
- [ ] Test Agent Manager modal.
- [ ] Test Preview mode device switching.
- [ ] Check browser console for errors.
- [ ] Update changelog with QA result.

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



