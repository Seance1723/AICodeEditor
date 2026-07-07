# Changelog

All notable changes to the Tri Studio app and project documents will be recorded here.

## [Unreleased]

### Added

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

- `npm run build` passes.
- `npm run dev -- --port 5173` serves the app at `http://127.0.0.1:5173`.
- Starting the Vite dev server required elevated execution because sandboxed startup hit a Vite dependency spawn `EPERM`.
- `npm install` reported 2 audit findings: 1 low and 1 moderate.

## Changelog Rules

- Add an entry whenever app code, project structure, documentation, dependencies, or behavior changes.
- Keep newest entries at the top under `[Unreleased]` until a release/version tag exists.
- Reference task IDs or module names when possible.
- Include verification notes such as build/test results when relevant.



