import { Bot, Circle, FileCode2, FolderOpen, Monitor, RefreshCw, Upload } from "lucide-react";
import ChatSidePanel from "../chat/ChatSidePanel.jsx";
import { mockFiles } from "../../data/mockFiles.js";

const codeTabs = [
  { id: "files", label: "Files" },
  { id: "agents", label: "Agents" },
  { id: "changes", label: "Changes" },
];

function SidePanel({ state, dispatch }) {
  if (state.currentView === "chat") {
    return <ChatSidePanel state={state} dispatch={dispatch} />;
  }

  if (state.currentView === "preview") {
    return (
      <aside className="side-panel">
        <p className="panel-label">Preview</p>
        <h1>Preview settings</h1>
        <div className="panel-stack">
          <div className="mini-list-item is-active">
            <Monitor size={16} />
            <span>Desktop</span>
          </div>
          <button className="quiet-action" type="button" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Preview refresh arrives in Module 8." })}>
            <RefreshCw size={16} />
            <span>Refresh preview</span>
          </button>
        </div>
      </aside>
    );
  }

  const dirtyFiles = mockFiles.filter((file) => state.dirtyFileIds.includes(file.id));

  return (
    <aside className="side-panel">
      <p className="panel-label">Workspace</p>
      <h1>{state.workspaceName}</h1>
      <div className="panel-actions">
        <button className="quiet-action" type="button" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Project creation arrives in Module 5." })}>
          <FolderOpen size={16} />
          <span>Create project</span>
        </button>
        <button className="quiet-action" type="button" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Code uploads arrive in Module 5." })}>
          <Upload size={16} />
          <span>Upload to code</span>
        </button>
      </div>
      <div className="segmented-tabs" role="tablist" aria-label="Code side panel tabs">
        {codeTabs.map((tab) => (
          <button
            className={tab.id === state.activeSideTab ? "is-active" : ""}
            type="button"
            role="tab"
            key={tab.id}
            onClick={() => dispatch({ type: "SET_SIDE_TAB", tab: tab.id })}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="panel-stack">
        {state.activeSideTab === "files" ? (
          mockFiles.map((file) => (
            <button
              className={file.id === state.selectedFileId ? "mini-list-item is-active" : "mini-list-item"}
              type="button"
              key={file.id}
              onClick={() => dispatch({ type: "OPEN_FILE", fileId: file.id })}
            >
              <FileCode2 size={16} />
              <span>{file.path}</span>
              {state.dirtyFileIds.includes(file.id) ? <Circle className="dirty-indicator" size={8} fill="currentColor" /> : null}
            </button>
          ))
        ) : null}
        {state.activeSideTab === "agents" ? (
          <>
            <div className="mini-list-item is-active"><Bot size={16} /><span>UI Builder ready</span></div>
            <div className="mini-list-item"><Bot size={16} /><span>QA Tester waiting</span></div>
          </>
        ) : null}
        {state.activeSideTab === "changes" ? (
          dirtyFiles.length > 0 ? dirtyFiles.map((file) => (
            <button
              className="mini-list-item"
              type="button"
              key={file.id}
              onClick={() => dispatch({ type: "OPEN_FILE", fileId: file.id })}
            >
              <Circle className="dirty-indicator" size={8} fill="currentColor" />
              <span>{file.path}</span>
            </button>
          )) : <div className="empty-line">No changed files yet.</div>
        ) : null}
      </div>
    </aside>
  );
}

export default SidePanel;