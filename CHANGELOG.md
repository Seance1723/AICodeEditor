# Changelog

All notable changes to the Tri Studio app and project documents will be recorded here.

## [Unreleased]

### Added

- Created Monaco-based module implementation plan in `IMPLEMENTATION_PLAN.md`.
- Created persistent task tracking in `TASKLIST.md`.
- Created project changelog in `CHANGELOG.md`.
- Created project memory and operating instructions in `PROJECT_MEMORY.md`.

### Changed

- Adapted the original React implementation direction to use Monaco Editor as the base code editing surface from the first prototype instead of a mock code block.

### Notes

- The workspace currently contains planning documentation only. The React/Vite application has not been initialized yet.

## Changelog Rules

- Add an entry whenever app code, project structure, documentation, dependencies, or behavior changes.
- Keep newest entries at the top under `[Unreleased]` until a release/version tag exists.
- Reference task IDs or module names when possible.
- Include verification notes such as build/test results when relevant.
