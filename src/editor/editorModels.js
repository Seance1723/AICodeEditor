export function getEditorValue(state, file) {
  return state.editorValues[file.id] ?? file.value ?? "";
}

export function isFileDirty(state, file) {
  return state.dirtyFileIds.includes(file.id);
}

export function getOpenFiles(state, files) {
  return state.openFileIds
    .map((id) => files.find((file) => file.id === id))
    .filter(Boolean);
}