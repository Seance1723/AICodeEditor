# Project Memory

Last updated: 2026-07-07

## Project Identity

Project name: Tri Studio

Product type: Light-mode AI-native code editor UI.

Workspace: `C:\xampp\htdocs\AICodeEditor`

Source plan analyzed: `C:\Users\Tanvi\Downloads\tri-studio-react-implementation-plan.md`
Settings layout plan analyzed: `C:\Users\Tanvi\Downloads\tri-studio-settings-layout-plan.md`

## Current Goal

Continue building the React/Vite frontend prototype for Tri Studio. The completed base shell uses Monaco Editor as the code editor, and the next planned modules add Settings as a full-page system workspace.

## Durable Instructions

- Use Monaco Editor as the base editing surface.
- Use React functional components and hooks.
- Use `useReducer` in `App.jsx` for prototype-level global state.
- Use SCSS for styling.
- Use `lucide-react` for all icons.
- Keep the UI light mode only.
- Do not use emoji icons.
- Do not add real backend services in the first prototype.
- Do not implement real filesystem writes in the first prototype.
- Do not implement real terminal execution in the first prototype.
- Do not implement real AI agent execution in the first prototype.
- Simulate project creation, uploads, terminal logs, agent actions, approvals, and preview behavior with React state.
- Every new modification must update `TASKLIST.md`.
- Every completed app or documentation change must update `CHANGELOG.md`.
- Update this file when project assumptions, instructions, architecture decisions, or durable context changes.
- Settings is a system workspace, not a fourth primary Chat/Code/Preview mode.
- Settings must open full-page in the main workspace area from the activity rail gear and future command/menu hooks.
- Settings must keep TopBar, ActivityRail, and StatusBar visible.
- Settings must replace the normal side panel with settings navigation and hide Agent Dock.
- Settings must remember the previous Chat, Code, or Preview view and return predictably when closed.
- Settings controls must distinguish immediate-save rows from drawer-save rows.
- Settings drawers must support standard and wide sizes, dirty draft protection, Escape close, overlay close, focus restoration, and sticky Cancel/Save footer.
- Secrets are write-only: never display stored API key values, never log key values, and clear typed secret fields after mock save.
- Settings implementation remains mock/prototype-only until backend persistence, keychain storage, extension installation, MCP control, and real agent execution are explicitly approved.
## Product Modes

### Chat

- Used for conversation, planning, and file upload.
- Must hide preview.
- Must hide Agent Dock.
- Module 4 implements Chat with `ChatSidePanel`, `ChatWorkspace`, `ChatThread`, `ChatComposer`, and shared `UploadList`.
- Chat uploads and composer attachments are stored as metadata in `chatUploads`; they do not read or write file contents.

### Code

- Used for project/file selection, Monaco editing, inline preview, bottom panel, and simulated agents.
- Must show Agent Dock.
- Must support optional inline preview.
- Module 5 implements the Code side panel with project actions, folder picker, code upload metadata, mock file tree, agent mini-list, and changed files list.
- Module 6 implements the Code workspace with `CodeWorkspace`, `InlineAgentPrompt`, `InlinePreview`, and `BottomPanel`.
- Run Agents is simulated with timed `ADD_TERMINAL_LOG` dispatches; no real agent execution or shell commands occur.
- Bottom panel tabs are controlled by `activeBottomTab` and support Terminal, Problems, Agent Log, and Approvals.
- Local folder selection infers the workspace name from the first selected file `webkitRelativePath`.
- Code uploads are stored as metadata in `codeUploads`; they do not read or write file contents.

### Preview

- Used for full visual preview.
- Must hide code editor.
- Must hide Agent Dock.
- Module 8 implements `PreviewSidePanel` and `PreviewWorkspace` with Desktop, Tablet, and Mobile device controls.
- Preview refresh is simulated through reducer toast state; no real iframe or dev-server preview integration yet.

### Settings

- Used for system configuration, not primary project work.
- Must open as a full-page system workspace rather than a top switcher tab.
- Must preserve the editor shell orientation with TopBar, ActivityRail, and StatusBar visible.
- Must hide Agent Dock and use a SettingsSidebar in place of the normal side panel.
- Navigation groups are General, AI, Execution, Security, and Workspace.
- Sections are Appearance, Editor, Privacy, Model Providers, Agents, Tasks & Execution, Tools & Memory, Secrets & Privacy, Extensions, and Onboarding.
- Settings state is prototype/mock state in the next modules; real persistence and OS keychain integration are later enhancements.
- Module 11 implements Settings shell integration with `currentView: "settings"`, `previousMainView`, gear/topbar entry points, hidden Agent Dock, SettingsSidebar placeholder, SettingsWorkspace placeholder, and Settings status bar copy.
- While Settings is open, clicking Files, Search, Git, Agents, or Tools in the activity rail returns to Code mode and activates the matching rail/sidebar state.
- Module 12 implements Settings navigation and search with centralized section data in `src/data/settingsSections.js`, reducer state for `activeSettingsSection` and `settingsSearchQuery`, `SettingsSearch`, grouped sidebar navigation, keyboard movement, empty search state, and selected-section preview content.
- Settings search filters by group label, section label, section description, and planned row labels.

## Core Architecture Decisions

- `App.jsx` now owns prototype state with `useReducer` and passes state/actions into shell components.
- Shell components live under `src/components/shell`; shared toast lives under `src/components/common`.
- `AgentDock` is rendered only when `currentView === "code"`.
- `Workspace` enforces mode separation: Chat shows planning content without preview, Code shows editor-shell placeholders, Preview shows a full preview placeholder.
- Monaco replaces the original mock code editor from the first implementation pass.
- Monaco is wrapped in `src/components/code/MonacoCodeEditor.jsx` so future features can add decorations, diagnostics, diff view, and AI inline actions cleanly.
- Monaco uses a custom `tri-studio-light` theme from `src/editor/monacoTheme.js` and default editor options from `src/editor/monacoConfig.js`.
- File contents are stored in reducer state for the prototype.
- Mock file metadata and initial content live in `src/data/mockFiles.js`.
- `dirtyFileIds` is updated by comparing reducer editor values against mock source content.
- The Code workspace has an early inline preview toggle to verify Monaco automatic layout; Module 6 will replace this with the full preview card behavior.
- Uploaded/local files are represented as metadata and in-memory editor values only.
- Dirty file state is tracked in app state, not written to disk.
- Agent actions are simulated through timed logs and UI state.
- Module 7 implements compact Agent Dock tabs and a deeper `AgentManagerModal`; all actions remain simulated and do not execute real tools.
- Preview is mocked until real dev-server/iframe integration is approved.

## Documentation Workflow

Before or during every implementation change:

1. Add or update the relevant task in `TASKLIST.md`.
2. Make the app or document change.
3. Record the completed change in `CHANGELOG.md`.
4. Update `PROJECT_MEMORY.md` if the change creates a durable decision or instruction.

## Initial Module Order

1. Project foundation
2. Editor shell
3. Monaco editor core
4. Chat mode
5. Code side panel and workspace files
6. Code workspace and inline preview
7. Agent Dock and Agent Manager
8. Preview mode
9. Styling and responsive behavior
10. QA and build verification
11. Settings shell integration
12. Settings navigation and search
13. Shared settings components
14. Settings drawer system
15. General settings
16. AI settings
17. Execution settings
18. Security and workspace settings
19. Settings QA, accessibility, and polish

## Open Questions

- Should the first implementation use npm, pnpm, or another package manager?
- Should the future real-app target be browser-only, Electron, Tauri, or another desktop shell?
- Should Monaco load via `@monaco-editor/react` defaults or a custom worker setup once the app grows?

## Current Status

- Planning artifacts have been created.
- React/Vite app has been initialized.
- Module 1 dependencies are installed: React, Vite, `@monaco-editor/react`, `monaco-editor`, `lucide-react`, and `sass`.
- Initial light-mode shell placeholder exists in `src/App.jsx`.
- SCSS partial structure exists under `src/styles`.
- `npm run build` passes.
- Dev server verified at `http://127.0.0.1:5173`.
- Module 2 editor shell is complete with mode switching, conditional Agent Dock, side-panel switching, status bar, and toast feedback.
- Module 3 Monaco Editor Core is complete with file tabs, Monaco editing, language mapping, custom light theme, reducer-backed editor values, and dirty state.
- Module 4 Chat Mode is complete with sessions, upload metadata, seeded messages, message sending, empty-message validation, and the `No preview in Chat` card.
- Module 5 Code Side Panel is complete with `CodeSidePanel`, `ProjectActions`, `FileTree`, `ChangedFilesList`, Create Project simulation, folder selection, code uploads, and dirty-file display.
- Module 6 Code Workspace is complete with header, branch label, current task strip, View Plan, Run Agents simulation, inline agent prompt, inline preview, and bottom panel tabs.
- Module 7 Agent Dock and Agent Manager is complete with reusable agent cards, dock Tasks/Chat/Tools views, progress bars, tool shortcuts, and modal close via button/backdrop.
- Module 8 Preview Mode is complete with dedicated side panel/workspace, device switching, refresh action, full mock browser preview, and preserved hiding of code editor/Agent Dock.
- Module 9 Styling and Responsive Behavior is complete with responsive shell grids, focus-visible states, stable Monaco sizing, side-panel/dock collapse rules, no inline SVG/emoji usage, and no dark-mode markers in source styles.
- Module 10 QA and Build Verification is complete except browser-console inspection, which is blocked because the in-app browser surface is unavailable in this session. Production build, local HTTP, source hygiene, and static workflow coverage checks pass.
- Settings layout planning is complete: Modules 11-19 now cover Settings shell integration, navigation/search, shared settings components, drawer system, General settings, AI settings, Execution settings, Security/Workspace settings, and Settings QA.
- Module 11 Settings Shell Integration is complete and `npm run build` passes.
- Module 12 Settings Navigation and Search is complete and `npm run build` passes.
- In this sandbox, `npm run dev` may require elevated execution because Vite startup can hit a dependency spawn `EPERM`.

