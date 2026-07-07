# Project Memory

Last updated: 2026-07-07

## Project Identity

Project name: Tri Studio

Product type: Light-mode AI-native code editor UI.

Workspace: `C:\xampp\htdocs\AICodeEditor`

Source plan analyzed: `C:\Users\Tanvi\Downloads\tri-studio-react-implementation-plan.md`

## Current Goal

Prepare and then build a React/Vite frontend prototype for Tri Studio. The prototype must use Monaco Editor as the base code editor and modify/customize it for the Tri Studio experience.

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

## Product Modes

### Chat

- Used for conversation, planning, and file upload.
- Must hide preview.
- Must hide Agent Dock.

### Code

- Used for project/file selection, Monaco editing, inline preview, bottom panel, and simulated agents.
- Must show Agent Dock.
- Must support optional inline preview.

### Preview

- Used for full visual preview.
- Must hide code editor.
- Must hide Agent Dock.

## Core Architecture Decisions

- Monaco replaces the original mock code editor from the first implementation pass.
- Monaco should be wrapped in `MonacoCodeEditor` so future features can add decorations, diagnostics, diff view, and AI inline actions cleanly.
- File contents are stored in reducer state for the prototype.
- Uploaded/local files are represented as metadata and in-memory editor values only.
- Dirty file state is tracked in app state, not written to disk.
- Agent actions are simulated through timed logs and UI state.
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

## Open Questions

- Should the first implementation use npm, pnpm, or another package manager?
- Should the future real-app target be browser-only, Electron, Tauri, or another desktop shell?
- Should Monaco load via `@monaco-editor/react` defaults or a custom worker setup once the app grows?

## Current Status

- Planning artifacts have been created.
- React/Vite app has not yet been initialized.
- No runtime verification has been performed because there is no app code yet.
