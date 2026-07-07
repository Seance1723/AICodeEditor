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

- [ ] Build `CodeSidePanel`.
- [ ] Build `ProjectActions`.
- [ ] Build `FileTree`.
- [ ] Build `ChangedFilesList`.
- [ ] Add Create Project simulation.
- [ ] Add local folder picker using `webkitdirectory`.
- [ ] Infer workspace name from selected folder.
- [ ] Add code upload handling.
- [ ] Add Files, Agents, and Changes side tabs.
- [ ] Wire file tree selection to Monaco.
- [ ] Show uploaded code files.
- [ ] Show dirty/changed files.

## Module 6: Code Workspace and Preview

- [ ] Build `CodeWorkspace`.
- [ ] Build `InlineAgentPrompt`.
- [ ] Build `InlinePreview`.
- [ ] Build `BottomPanel`.
- [ ] Add code header with project title and branch.
- [ ] Add Run Agents button.
- [ ] Add Toggle Preview button.
- [ ] Add Current Task strip.
- [ ] Add View Plan action.
- [ ] Add timed terminal log simulation.
- [ ] Add Terminal, Problems, Agent Log, and Approvals tabs.

## Module 7: Agent Dock and Agent Manager

- [ ] Build `AgentCard`.
- [ ] Build `AgentDockTasks`.
- [ ] Build `AgentDockChat`.
- [ ] Build `AgentDockTools`.
- [ ] Build `AgentManagerModal`.
- [ ] Add Tasks, Chat, and Tools dock tabs.
- [ ] Add compact agent cards.
- [ ] Add progress bars.
- [ ] Open Agent Manager from top bar pill.
- [ ] Close Agent Manager from close button.
- [ ] Close Agent Manager from backdrop.

## Module 8: Preview Mode

- [ ] Build `PreviewSidePanel`.
- [ ] Build `PreviewWorkspace`.
- [ ] Add Desktop device state.
- [ ] Add Tablet device state.
- [ ] Add Mobile device state.
- [ ] Add Refresh Preview action.
- [ ] Add full browser preview mockup.
- [ ] Hide code editor in Preview mode.
- [ ] Hide Agent Dock in Preview mode.

## Module 9: Styling and Responsive Behavior

- [ ] Add stable shell grid styles.
- [ ] Add Monaco container sizing styles.
- [ ] Add hover states.
- [ ] Add focus states.
- [ ] Add active states.
- [ ] Add empty states.
- [ ] Add responsive side panel behavior.
- [ ] Add responsive dock behavior.
- [ ] Verify text does not overlap at desktop widths.
- [ ] Verify smaller widths remain usable.
- [ ] Confirm no emoji icons are used.
- [ ] Confirm all app icons come from `lucide-react`.
- [ ] Confirm no dark mode styles exist.

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



