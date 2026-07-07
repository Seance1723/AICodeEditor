import { Bot } from "lucide-react";
import UploadList from "../common/UploadList.jsx";
import ChangedFilesList from "./ChangedFilesList.jsx";
import FileTree from "./FileTree.jsx";
import ProjectActions from "./ProjectActions.jsx";

const codeTabs = [
  { id: "files", label: "Files" },
  { id: "agents", label: "Agents" },
  { id: "changes", label: "Changes" },
];

function CodeSidePanel({ state, dispatch }) {
  return (
    <aside className="side-panel code-side-panel">
      <p className="panel-label">Workspace</p>
      <h1>{state.workspaceName}</h1>
      <p>{state.workspaceStatus}</p>

      <ProjectActions dispatch={dispatch} />

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
          <>
            <FileTree state={state} dispatch={dispatch} />
            <section className="side-section">
              <p className="panel-label">Uploaded code files</p>
              <UploadList files={state.codeUploads} emptyText="No code uploads yet." />
            </section>
          </>
        ) : null}

        {state.activeSideTab === "agents" ? (
          <>
            <div className="mini-list-item is-active"><Bot size={16} /><span>UI Builder ready</span></div>
            <div className="mini-list-item"><Bot size={16} /><span>QA Tester waiting</span></div>
            <div className="mini-list-item"><Bot size={16} /><span>Security Review queued</span></div>
          </>
        ) : null}

        {state.activeSideTab === "changes" ? <ChangedFilesList state={state} dispatch={dispatch} /> : null}
      </div>
    </aside>
  );
}

export default CodeSidePanel;