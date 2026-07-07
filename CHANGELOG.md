# Changelog

All notable changes to the Tri Studio app and project documents will be recorded here.

## [Unreleased]

### Added

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



