import { useEffect, useReducer } from "react";
import TopBar from "./components/shell/TopBar.jsx";
import ActivityRail from "./components/shell/ActivityRail.jsx";
import SidePanel from "./components/shell/SidePanel.jsx";
import Workspace from "./components/shell/Workspace.jsx";
import AgentDock from "./components/shell/AgentDock.jsx";
import StatusBar from "./components/shell/StatusBar.jsx";
import Toast from "./components/common/Toast.jsx";

const initialState = {
  currentView: "chat",
  activeRail: "files",
  activeSideTab: "files",
  activeDockTab: "tasks",
  activeBottomTab: "terminal",
  workspaceName: "No folder selected",
  workspaceStatus: "No folder selected",
  projectTitle: "tri-agent-app",
  selectedFileId: "app",
  openFileIds: ["app"],
  dirtyFileIds: [],
  previewHidden: false,
  previewDevice: "desktop",
  agentModalOpen: false,
  permissionMode: "safe-approval",
  chatUploads: [],
  codeUploads: [],
  chatMessages: [],
  terminalLogs: [],
  editorValues: {},
  toast: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_VIEW":
      return {
        ...state,
        currentView: action.view,
        activeRail: action.view === "code" ? state.activeRail : "files",
        toast: action.view === "chat" ? { id: Date.now(), message: "Chat mode keeps preview hidden." } : null,
      };
    case "SET_RAIL":
      return {
        ...state,
        activeRail: action.rail,
        activeSideTab: action.rail === "agents" ? "agents" : action.rail === "git" ? "changes" : state.activeSideTab,
      };
    case "SET_SIDE_TAB":
      return { ...state, activeSideTab: action.tab };
    case "SET_DOCK_TAB":
      return { ...state, activeDockTab: action.tab };
    case "SHOW_TOAST":
      return { ...state, toast: { id: Date.now(), message: action.message } };
    case "CLEAR_TOAST":
      return { ...state, toast: null };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.toast) return undefined;
    const timer = window.setTimeout(() => dispatch({ type: "CLEAR_TOAST" }), 2600);
    return () => window.clearTimeout(timer);
  }, [state.toast]);

  return (
    <div className="app-shell" data-mode={state.currentView}>
      <TopBar state={state} dispatch={dispatch} />
      <ActivityRail state={state} dispatch={dispatch} />
      <SidePanel state={state} dispatch={dispatch} />
      <Workspace state={state} dispatch={dispatch} />
      {state.currentView === "code" ? <AgentDock state={state} dispatch={dispatch} /> : null}
      <StatusBar state={state} />
      <Toast toast={state.toast} />
    </div>
  );
}

export default App;
