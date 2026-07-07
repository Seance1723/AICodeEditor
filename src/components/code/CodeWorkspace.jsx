import { GitBranch, PanelRightClose, PanelRightOpen, Pause, Play, ShieldCheck } from "lucide-react";
import { mockFiles } from "../../data/mockFiles.js";
import { getEditorValue, getOpenFiles, isFileDirty } from "../../editor/editorModels.js";
import BottomPanel from "./BottomPanel.jsx";
import EditorTabs from "./EditorTabs.jsx";
import EditorToolbar from "./EditorToolbar.jsx";
import InlineAgentPrompt from "./InlineAgentPrompt.jsx";
import InlinePreview from "./InlinePreview.jsx";
import MonacoCodeEditor from "./MonacoCodeEditor.jsx";

const agentRunSteps = [
  { delay: 0, message: "UI Builder started editing App.jsx.", type: "success" },
  { delay: 600, message: "QA Tester started checking Chat to Code to Preview transitions.", type: "default" },
  { delay: 1200, message: "Security Review waiting for final diff.", type: "warning" },
  { delay: 1900, message: "Agent change requires approval before writing to local folder.", type: "warning" },
  { delay: 2700, message: "Approval panel ready. Review changed files.", type: "success" },
];

function CodeWorkspace({ state, dispatch }) {
  const selectedFile = mockFiles.find((file) => file.id === state.selectedFileId) ?? mockFiles[0];
  const openFiles = getOpenFiles(state, mockFiles);
  const selectedValue = getEditorValue(state, selectedFile);

  const runAgents = () => {
    dispatch({ type: "SHOW_TOAST", message: "Simulated agents started." });
    agentRunSteps.forEach((step) => {
      window.setTimeout(() => {
        dispatch({ type: "ADD_TERMINAL_LOG", message: step.message, logType: step.type });
      }, step.delay);
    });
  };

  const viewPlan = () => {
    dispatch({ type: "SET_BOTTOM_TAB", tab: "logs" });
    dispatch({ type: "ADD_TERMINAL_LOG", message: "Plan viewed: current task is to complete the Code workspace and preview module.", logType: "success" });
    dispatch({ type: "SHOW_TOAST", message: "Plan view recorded in Agent Log." });
  };

  return (
    <main className="workspace-panel workspace-panel--code">
      <section className="code-workspace-shell">
        <div className="workspace-header code-header">
          <div>
            <p className="panel-label">Code mode</p>
            <h2>{state.projectTitle}</h2>
            <div className="branch-label"><GitBranch size={14} /><span>main</span></div>
          </div>
          <div className="header-actions">
            <button type="button" className="quiet-action" onClick={runAgents}>
              <Play size={16} />
              <span>Run agents</span>
            </button>
            <button type="button" className="quiet-action" onClick={() => dispatch({ type: "TOGGLE_PREVIEW" })}>
              {state.previewHidden ? <PanelRightOpen size={16} /> : <PanelRightClose size={16} />}
              <span>{state.previewHidden ? "Show preview" : "Hide preview"}</span>
            </button>
          </div>
        </div>

        <div className="current-task-strip">
          <div>
            <strong>Current task</strong>
            <span>Build the Code workspace with Monaco, simulated agents, preview, and bottom panel.</span>
          </div>
          <button type="button" onClick={viewPlan}>View plan</button>
          <button type="button" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Agent workflow paused in simulation." })}><Pause size={15} /><span>Pause</span></button>
          <button type="button" onClick={() => dispatch({ type: "SHOW_TOAST", message: "Approval recorded for simulated workflow." })}><ShieldCheck size={15} /><span>Approve</span></button>
        </div>

        <div className={state.previewHidden ? "code-editor-grid is-editor-only" : "code-editor-grid"}>
          <div className="editor-column">
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
            <InlineAgentPrompt dispatch={dispatch} />
          </div>
          {state.previewHidden ? null : <InlinePreview dispatch={dispatch} />}
        </div>

        <BottomPanel state={state} dispatch={dispatch} />
      </section>
    </main>
  );
}

export default CodeWorkspace;