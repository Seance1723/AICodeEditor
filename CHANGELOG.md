# Changelog

All notable changes to the Tri Studio app and project documents will be recorded here.

## [Unreleased]

### Added

- Completed Module 13 Shared Settings Components with reusable Settings content, section header, cards, rows, toggle rows, segmented controls, number/text/select fields, status and risk badges, inline confirmation, and light-mode settings component styling.
- Updated Settings workspace content to render selected section rows through the shared component primitives, including immediate-control previews, drawer-row previews, badges, and reset inline confirmation.
- Completed Module 12 Settings Navigation and Search with centralized settings section data, grouped General/AI/Execution/Security/Workspace navigation, selected section state, settings search input, section filtering by group/label/description/row labels, empty search state, keyboard navigation, and selected-section preview content.
- Completed Module 11 Settings Shell Integration with `settings` app state, previous main-view tracking, activity rail and topbar Settings entry points, full-page Settings workspace rendering, Settings side navigation placeholder, hidden Agent Dock in Settings, Settings-aware status bar text, and Code-mode rail restoration from Settings.
- Analyzed the Settings layout plan and extended the implementation roadmap with Modules 11-19 for Settings shell integration, navigation/search, shared components, drawer behavior, General settings, AI settings, Execution settings, Security/Workspace settings, and Settings QA.
- Added detailed Settings tasks to `TASKLIST.md` covering full-page system workspace behavior, mock settings state, immediate-save controls, drawer-save flows, write-only secrets, extension/MCP mock UI, accessibility, and responsive verification.
- Updated project memory with the Settings source plan, durable Settings placement rules, drawer rules, save behavior, and secret-handling constraints.
- Completed Module 10 QA and Build Verification using production build, local HTTP check, source hygiene scans, and static workflow coverage checks for Chat, Code, Monaco, uploads, preview toggle, agent simulation, bottom tabs, Agent Dock, Agent Manager, and Preview device switching.
- Completed Module 9 Styling and Responsive Behavior with stable shell grids, Monaco/container sizing polish, focus-visible states, hover/active consistency, empty-state polish, scroll behavior, and responsive side-panel/dock collapse rules.
- Added responsive breakpoints for desktop, medium, tablet, and narrow mobile layouts across Chat, Code, Preview, Agent Dock, modals, bottom panel, and Monaco editor areas.
- Completed Module 8 Preview Mode with `PreviewSidePanel` and `PreviewWorkspace` components.
- Added Desktop, Tablet, and Mobile preview device controls, refresh preview action, reducer-backed preview device state, and full mock browser preview canvas.
- Completed Module 7 Agent Dock and Agent Manager with reusable `AgentCard`, Tasks/Chat/Tools dock views, progress bars, tool shortcuts, and `AgentManagerModal`.
- Added mock agent and tool data, top-bar Agent Manager opening, and modal close behavior from both close button and backdrop.
- Completed Module 6 Code Workspace and Preview with `CodeWorkspace`, `InlineAgentPrompt`, `InlinePreview`, and `BottomPanel` components.
- Added code header with branch label, current task strip, View Plan action, Pause and Approve controls, simulated Run Agents timed terminal logs, inline agent prompt, inline preview mock browser, and bottom panel tabs for Terminal, Problems, Agent Log, and Approvals.
- Added reducer support for bottom panel tab switching and terminal log appends.
- Completed Module 5 Code Side Panel and Workspace Files with `CodeSidePanel`, `ProjectActions`, `FileTree`, and `ChangedFilesList` components.
- Added Create Project simulation, local folder selection with `webkitdirectory`, folder-name inference, code upload metadata handling, uploaded code file rendering, and dirty-file change listing.
- Added workspace and terminal-log reducer actions for project creation, folder selection, and code upload events.
- Completed Module 4 Chat Mode with `ChatSidePanel`, `ChatWorkspace`, `ChatThread`, `ChatComposer`, and shared `UploadList` components.
- Added mock chat sessions/messages and reducer-backed chat uploads, composer attachments, message sending, and empty-message validation toast.
- Added file upload utilities for converting selected `FileList` values into prototype upload metadata.
- Completed Module 3 Monaco Editor Core with Monaco mounted in Code mode, editor tabs, editor toolbar, custom light theme, mock file models, language mapping, reducer-backed editor values, and dirty file tracking.
- Added `src/data/mockFiles.js`, editor helpers under `src/editor`, and code editor components under `src/components/code`.
- Added a prototype inline preview toggle around the Monaco editor to verify automatic layout behavior before the richer Module 6 preview implementation.
- Completed Module 2 editor shell with `TopBar`, `ActivityRail`, `SidePanel`, `Workspace`, `AgentDock`, `StatusBar`, and `Toast` components.
- Added `useReducer` app state for Chat, Code, and Preview mode switching.
- Added shell placeholder content for Chat, Code, and Preview workspaces while preserving the rule that Chat never shows preview and Agent Dock appears only in Code mode.
- Completed Module 1 project foundation with Vite, React, Monaco dependencies, lucide icons, Sass, and an initial light-mode app shell placeholder.
- Added `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, and SCSS partials under `src/styles`.
- Added `.gitignore` for dependency, build, and local environment outputs.
- Organized runtime dependencies and dev dependencies in `package.json`.
- Created Monaco-based module implementation plan in `IMPLEMENTATION_PLAN.md`.
- Created persistent task tracking in `TASKLIST.md`.
- Created project changelog in `CHANGELOG.md`.
- Created project memory and operating instructions in `PROJECT_MEMORY.md`.

### Changed

- Adapted the original React implementation direction to use Monaco Editor as the base code editing surface from the first prototype instead of a mock code block.

### Notes

- Module 13 verification: `npm run build` passes.
- Module 12 verification: `npm run build` passes.
- Module 11 verification: `npm run build` passes.
- Settings roadmap source: `C:\Users\Tanvi\Downloads\tri-studio-settings-layout-plan.md`. This documentation-only update did not require a production build.
- Module 10 verification: `npm run build` passes, local dev server returned HTTP 200, source scans found no `console.*`, `debugger`, inline SVG, emoji, or dark-mode markers in `src`, and static workflow checks passed.
- Module 10 limitation: browser-console inspection could not be completed because the in-app browser surface reported `Browser is not available: iab`.
- Module 9 verification: `npm run build` passes, local dev server returned HTTP 200, and source scans found no inline SVG/emoji or dark-mode markers in `src`.
- Module 8 verification: `npm run build` passes.
- Module 7 verification: `npm run build` passes.
- Module 6 verification: `npm run build` passes.
- Module 5 verification: `npm run build` passes and local dev server returned HTTP 200.
- Module 4 verification: `npm run build` passes and local dev server returned HTTP 200.
- In-app browser smoke testing was unavailable because the browser surface reported `Browser is not available: iab`.
- Module 3 verification: `npm run build` passes and local dev server returned HTTP 200.
- Module 2 verification: `npm run build` passes and local dev server returned HTTP 200.
- `npm run build` passes.
- `npm run dev -- --port 5173` serves the app at `http://127.0.0.1:5173`.
- Starting the Vite dev server required elevated execution because sandboxed startup hit a Vite dependency spawn `EPERM`.
- `npm install` reported 2 audit findings: 1 low and 1 moderate.

## Changelog Rules

- Add an entry whenever app code, project structure, documentation, dependencies, or behavior changes.
- Keep newest entries at the top under `[Unreleased]` until a release/version tag exists.
- Reference task IDs or module names when possible.
- Include verification notes such as build/test results when relevant.



