import { Eye, PanelRightClose, PanelRightOpen, Play, TerminalSquare } from "lucide-react";
import ChatWorkspace from "../chat/ChatWorkspace.jsx";
import EditorTabs from "../code/EditorTabs.jsx";
import EditorToolbar from "../code/EditorToolbar.jsx";
import MonacoCodeEditor from "../code/MonacoCodeEditor.jsx";
import { mockFiles } from "../../data/mockFiles.js";
import { getEditorValue, getOpenFiles, isFileDirty } from "../../editor/editorModels.js";

function Workspace({ state, dispatch }) {
  if (state.currentView === "chat") {
    return <ChatWorkspace state={state} dispatch={dispatch} />;
  }

  if (state.currentView === "preview") {
    return (
      <main className="workspace-panel workspace-panel--preview">
        <section className="preview-stage">
          <div className="preview-toolbar">
            <div>
              <p className="panel-label">Preview mode</p>
              <h2>Full visual preview</h2>
            </div>
            <button type="button" className="quiet-action" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Preview refresh arrives in Module 8." })}>
              <Eye size={16} />
              <span>Refresh</span>
            </button>
          </div>
          <div className="mock-browser">
            <div className="mock-browser-bar"><span /><span /><span /></div>
            <div className="mock-browser-body">Preview canvas placeholder</div>
          </div>
        </section>
      </main>
    );
  }

  const selectedFile = mockFiles.find((file) => file.id === state.selectedFileId) ?? mockFiles[0];
  const openFiles = getOpenFiles(state, mockFiles);
  const selectedValue = getEditorValue(state, selectedFile);

  return (
    <main className="workspace-panel workspace-panel--code">
      <section className="code-workspace-shell">
        <div className="workspace-header">
          <div>
            <p className="panel-label">Code mode</p>
            <h2>{state.projectTitle}</h2>
          </div>
          <div className="header-actions">
            <button type="button" className="quiet-action" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Agent simulation arrives in Module 6." })}>
              <Play size={16} />
              <span>Run agents</span>
            </button>
            <button type="button" className="quiet-action" onClick={() => dispatch({ type: "TOGGLE_PREVIEW" })}>
              {state.previewHidden ? <PanelRightOpen size={16} /> : <PanelRightClose size={16} />}
              <span>{state.previewHidden ? "Show preview" : "Hide preview"}</span>
            </button>
          </div>
        </div>

        <div className={state.previewHidden ? "code-editor-grid is-editor-only" : "code-editor-grid"}>
          <div className="editor-frame">
          <EditorTabs
            files={openFiles}
            selectedFileId={state.selectedFileId}
            dirtyFileIds={state.dirtyFileIds}
            dispatch={dispatch}
          />
          <EditorToolbar file={selectedFile} isDirty={isFileDirty(state, selectedFile)} dispatch={dispatch} />
          <MonacoCodeEditor
            file={selectedFile}
            value={selectedValue}
            onChange={(value) => dispatch({ type: "UPDATE_EDITOR_VALUE", fileId: selectedFile.id, value })}
          />
          </div>
          {state.previewHidden ? null : (
            <aside className="inline-preview-placeholder">
              <p className="panel-label">Inline Preview</p>
              <div className="preview-card-mini">Preview placeholder</div>
            </aside>
          )}
        </div>

        <div className="bottom-panel-shell">
          <TerminalSquare size={16} />
          <span>Bottom panel placeholder: Terminal, Problems, Agent Log, Approvals.</span>
        </div>
      </section>
    </main>
  );
}

export default Workspace;