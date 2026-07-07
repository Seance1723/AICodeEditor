# Tri Studio Monaco-Based Module Implementation Plan

Last updated: 2026-07-07

## Purpose

Build Tri Studio as a light-mode AI-native code editor UI in React, using Monaco Editor as the core editing surface from the first implementation pass. The first version remains a frontend prototype: it simulates projects, files, agents, terminal logs, approvals, and preview behavior without real filesystem writes, terminal execution, AI agent execution, or backend services.

This plan adapts the original Tri Studio React plan so the code workspace is centered on Monaco instead of a mock code block.

## Product Principles

- Chat is for thinking, planning, and upload context.
- Code is for building inside a real editor-like shell.
- Preview is for reviewing visual output without code distraction.
- Agents stay visible but calm: summarized in the right dock, expanded in the Agent Manager.
- Monaco is the base editor layer; custom behavior is added around it rather than replacing it with static code rendering.
- Every implementation change must update `TASKLIST.md` and `CHANGELOG.md`.
- Project assumptions, decisions, and operating instructions must be preserved in `PROJECT_MEMORY.md`.

## Target Stack

- Vite
- React
- SCSS
- `lucide-react`
- `@monaco-editor/react`
- `monaco-editor`

Do not add Redux, Zustand, backend services, real shell execution, or real file writes in the first prototype.

## Proposed Folder Structure

```txt
AICodeEditor/
|-- package.json
|-- index.html
|-- vite.config.js
|-- IMPLEMENTATION_PLAN.md
|-- TASKLIST.md
|-- CHANGELOG.md
|-- PROJECT_MEMORY.md
`-- src/
    |-- main.jsx
    |-- App.jsx
    |-- styles/
    |   |-- main.scss
    |   |-- _tokens.scss
    |   |-- _layout.scss
    |   |-- _components.scss
    |   |-- _editor.scss
    |   `-- _responsive.scss
    |-- data/
    |   |-- mockAgents.js
    |   |-- mockFiles.js
    |   |-- mockMessages.js
    |   `-- mockTools.js
    |-- editor/
    |   |-- monacoConfig.js
    |   |-- monacoTheme.js
    |   |-- editorModels.js
    |   `-- languageUtils.js
    |-- utils/
    |   |-- fileUtils.js
    |   |-- timeUtils.js
    |   `-- idUtils.js
    `-- components/
        |-- shell/
        |-- chat/
        |-- code/
        |-- preview/
        |-- agents/
        `-- common/
```

## State Model

Use `useReducer` in `App.jsx` for the prototype.

```js
const initialState = {
  currentView: "chat",
  activeRail: "files",
  activeSideTab: "files",
  activeDockTab: "tasks",
  activeBottomTab: "terminal",
  workspaceName: "No folder selected",
  workspaceStatus: "No folder selected",
  projectTitle: "tri-agent-app",
  selectedFileId: "app",
  openFileIds: ["app"],
  dirtyFileIds: [],
  previewHidden: false,
  previewDevice: "desktop",
  agentModalOpen: false,
  permissionMode: "safe-approval",
  chatUploads: [],
  codeUploads: [],
  chatMessages: [],
  terminalLogs: [],
  editorValues: {},
  toast: null
};
```

Core actions:

- `SET_VIEW`
- `SET_RAIL`
- `SET_SIDE_TAB`
- `SET_DOCK_TAB`
- `SET_BOTTOM_TAB`
- `SET_WORKSPACE`
- `CREATE_PROJECT`
- `OPEN_FILE`
- `CLOSE_FILE`
- `SET_SELECTED_FILE`
- `UPDATE_EDITOR_VALUE`
- `MARK_FILE_DIRTY`
- `CLEAR_FILE_DIRTY`
- `TOGGLE_PREVIEW`
- `SET_PREVIEW_DEVICE`
- `OPEN_AGENT_MODAL`
- `CLOSE_AGENT_MODAL`
- `ADD_CHAT_UPLOADS`
- `ADD_CODE_UPLOADS`
- `ADD_CHAT_MESSAGE`
- `ADD_TERMINAL_LOG`
- `SHOW_TOAST`
- `CLEAR_TOAST`

## Module Plan

### Module 1: Project Foundation

Goal: Create the React app foundation and documentation workflow.

Scope:

- Initialize Vite React project.
- Install `@monaco-editor/react`, `monaco-editor`, `lucide-react`, and `sass`.
- Add SCSS partials and light-mode design tokens.
- Add project documentation files: implementation plan, tasklist, changelog, and memory.
- Confirm `npm run dev` and `npm run build` scripts exist.

Acceptance:

- App renders in the browser.
- Build command passes.
- Documentation workflow is present and maintained.

### Module 2: Editor Shell

Goal: Build the familiar code editor frame.

Components:

- `TopBar`
- `ActivityRail`
- `SidePanel`
- `Workspace`
- `AgentDock`
- `StatusBar`
- `Toast`

Behavior:

- Chat, Code, and Preview modes switch cleanly.
- Agent Dock appears only in Code mode.
- Preview is hidden in Chat mode.
- Side panel content changes by mode.

Acceptance:

- Layout follows `Top Bar | Activity Rail | Side Panel | Workspace | Agent Dock | Status Bar`.
- Chat opens by default.
- No dark theme styles appear.

### Module 3: Monaco Editor Core

Goal: Replace the mock code renderer with Monaco as the base editor.

Components and files:

- `MonacoCodeEditor.jsx`
- `EditorTabs.jsx`
- `EditorToolbar.jsx`
- `src/editor/monacoConfig.js`
- `src/editor/monacoTheme.js`
- `src/editor/editorModels.js`
- `src/editor/languageUtils.js`

Behavior:

- Load Monaco with a custom light theme.
- Map file extension or mock language to Monaco language IDs.
- Switch Monaco content when a file is selected.
- Store edited values in reducer state.
- Track dirty files locally.
- Keep editor read/write in prototype state only; do not write to disk.
- Configure editor options for a polished app shell:
  - minimap disabled by default
  - word wrap enabled or user-toggleable
  - smooth scrolling
  - automatic layout
  - readable font size
  - light theme only

Acceptance:

- File tree selection changes Monaco model/content.
- Editing text updates app state.
- Dirty state appears in tabs/file labels.
- Monaco resizes correctly with preview hidden or visible.

### Module 4: Chat Mode

Goal: Build a focused planning/chat workspace.

Components:

- `ChatSidePanel`
- `ChatWorkspace`
- `ChatThread`
- `ChatComposer`
- `UploadList`

Behavior:

- Show chat sessions.
- Upload files to chat context.
- Attach composer files.
- Send messages into the thread.
- Empty messages show toast.
- Preview and Agent Dock remain hidden.

Acceptance:

- Chat mode never shows editor preview.
- Upload lists render selected files.
- Message send behavior works.

### Module 5: Code Side Panel and Workspace Files

Goal: Provide project/file controls around Monaco.

Components:

- `CodeSidePanel`
- `ProjectActions`
- `FileTree`
- `UploadList`
- `ChangedFilesList`

Behavior:

- Create project simulation updates workspace state.
- Local folder picker infers folder name from `webkitRelativePath`.
- Code upload stores file metadata and can create mock editor entries.
- Files, Agents, and Changes side tabs switch correctly.
- File selection opens the file in Monaco.

Acceptance:

- Folder and upload flows update UI state.
- File tree drives selected Monaco content.
- Changed files reflect dirty editor state.

### Module 6: Code Workspace and Preview

Goal: Build the main coding surface with Monaco and optional inline preview.

Components:

- `CodeWorkspace`
- `MonacoCodeEditor`
- `EditorTabs`
- `InlineAgentPrompt`
- `InlinePreview`
- `BottomPanel`

Behavior:

- Run Agents appends simulated terminal logs over time.
- Toggle Preview hides/shows inline preview.
- View Plan appends a log and toast.
- Bottom panel tabs switch among Terminal, Problems, Agent Log, and Approvals.
- Monaco gets the maximum useful space when inline preview is hidden.

Acceptance:

- Code mode feels like a simple editor.
- Monaco remains usable with and without inline preview.
- Terminal simulation and bottom tabs work.

### Module 7: Agent Dock and Agent Manager

Goal: Show parallel-agent activity without overwhelming the editor.

Components:

- `AgentDock`
- `AgentDockTasks`
- `AgentDockChat`
- `AgentDockTools`
- `AgentCard`
- `AgentManagerModal`

Behavior:

- Dock tabs: Tasks, Chat, Tools.
- Compact agent cards show status, summary, progress, and action.
- Top bar agent pill opens Agent Manager.
- Modal closes via close button or backdrop.

Acceptance:

- Agent Dock appears only in Code mode.
- Agent Manager opens and closes correctly.
- Agents are summarized, not presented as a large board by default.

### Module 8: Preview Mode

Goal: Provide a full preview workspace separate from code.

Components:

- `PreviewSidePanel`
- `PreviewWorkspace`

Behavior:

- Preview settings show Desktop, Tablet, and Mobile device options.
- Refresh action shows toast.
- Large browser preview mockup renders.
- Code editor and Agent Dock are hidden.

Acceptance:

- Preview mode is visually focused on output.
- Device controls switch active state.

### Module 9: Styling and Responsive Behavior

Goal: Polish the UI for review.

Scope:

- Light-mode-only SCSS tokens.
- Stable grid dimensions.
- Hover, focus, active, disabled, and empty states.
- Responsive collapse rules for side panel and dock.
- Monaco container sizing with `min-height: 0` and `automaticLayout`.

Acceptance:

- No overlapping controls.
- No dark panels.
- Buttons and tabs have clear feedback.
- Desktop layout is stable.
- Smaller widths remain usable.

### Module 10: QA and Build Verification

Goal: Verify the prototype before handoff.

Scope:

- Run `npm run build`.
- Manually test workspace switching.
- Test file selection, editing, dirty state, upload flows, preview toggle, bottom tabs, dock tabs, and modal behavior.
- Check browser console for errors.
- Update `TASKLIST.md` and `CHANGELOG.md` with final status.

Acceptance:

- Build passes.
- No console errors during core interactions.
- QA checklist is current.

## Monaco Design Notes

- Use Monaco as the code editor base from the first code implementation.
- Keep Monaco isolated behind `MonacoCodeEditor` so future features can add decorations, diagnostics, diff view, AI inline suggestions, and formatting without rewriting workspace layout.
- Do not enable real filesystem persistence in the first pass.
- Do not use Monaco dark themes in the first pass.
- Use custom theme tokens that match Tri Studio light mode.
- Treat uploaded files as in-memory documents until a later real filesystem module is approved.

## Future Enhancements

Do not build these in the first prototype unless explicitly requested:

- Real filesystem access through Electron, Tauri, or File System Access API.
- Real terminal bridge.
- Real preview iframe connected to a local dev server.
- Real agent orchestration.
- Git integration.
- Monaco diff editor.
- Monaco diagnostics and Problems integration.
- Checkpoints and rollback.
- MCP tools.
- Project persistence.
- Command palette.
- Keyboard shortcuts.
- Model/provider settings.

