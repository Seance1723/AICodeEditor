import { useEffect, useReducer } from "react";
import TopBar from "./components/shell/TopBar.jsx";
import ActivityRail from "./components/shell/ActivityRail.jsx";
import SidePanel from "./components/shell/SidePanel.jsx";
import Workspace from "./components/shell/Workspace.jsx";
import AgentDock from "./components/shell/AgentDock.jsx";
import StatusBar from "./components/shell/StatusBar.jsx";
import Toast from "./components/common/Toast.jsx";
import AgentManagerModal from "./components/agents/AgentManagerModal.jsx";
import { createInitialEditorValues, getMockFile, mockFiles } from "./data/mockFiles.js";
import { initialChatMessages } from "./data/mockMessages.js";

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
  chatMessages: initialChatMessages,
  terminalLogs: [],
  editorValues: createInitialEditorValues(),
  toast: null,
};

function addUnique(items, item) {
  return items.includes(item) ? items : [...items, item];
}

function removeItem(items, item) {
  return items.filter((value) => value !== item);
}

function createTerminalLog(message, type = "default") {
  return {
    id: `log-${Date.now()}`,
    time: new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date()),
    message,
    type,
  };
}

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
    case "SET_BOTTOM_TAB":
      return { ...state, activeBottomTab: action.tab };
    case "OPEN_AGENT_MODAL":
      return { ...state, agentModalOpen: true };
    case "CLOSE_AGENT_MODAL":
      return { ...state, agentModalOpen: false };
    case "SET_WORKSPACE":
      return {
        ...state,
        workspaceName: action.name,
        workspaceStatus: action.status,
        terminalLogs: [...state.terminalLogs, createTerminalLog(action.status, "success")],
        toast: { id: Date.now(), message: action.status },
      };
    case "CREATE_PROJECT":
      return {
        ...state,
        workspaceName: state.projectTitle,
        workspaceStatus: `Project created: ${state.projectTitle}`,
        terminalLogs: [...state.terminalLogs, createTerminalLog(`Project created: ${state.projectTitle}`, "success")],
        toast: { id: Date.now(), message: `Project created: ${state.projectTitle}` },
      };
    case "OPEN_FILE":
      return {
        ...state,
        selectedFileId: action.fileId,
        openFileIds: addUnique(state.openFileIds, action.fileId),
        currentView: "code",
      };
    case "SET_SELECTED_FILE":
      return {
        ...state,
        selectedFileId: action.fileId,
        openFileIds: addUnique(state.openFileIds, action.fileId),
      };
    case "CLOSE_FILE": {
      const nextOpenFiles = removeItem(state.openFileIds, action.fileId);
      const fallbackFileId = nextOpenFiles.at(-1) ?? mockFiles[0].id;
      return {
        ...state,
        openFileIds: nextOpenFiles.length > 0 ? nextOpenFiles : [fallbackFileId],
        selectedFileId: state.selectedFileId === action.fileId ? fallbackFileId : state.selectedFileId,
      };
    }
    case "UPDATE_EDITOR_VALUE": {
      const original = getMockFile(action.fileId).value;
      const isDirty = action.value !== original;
      return {
        ...state,
        editorValues: {
          ...state.editorValues,
          [action.fileId]: action.value,
        },
        dirtyFileIds: isDirty ? addUnique(state.dirtyFileIds, action.fileId) : removeItem(state.dirtyFileIds, action.fileId),
      };
    }
    case "ADD_CHAT_UPLOADS":
      return {
        ...state,
        chatUploads: [...state.chatUploads, ...action.uploads],
        toast: { id: Date.now(), message: action.toast ?? `${action.uploads.length} file${action.uploads.length === 1 ? "" : "s"} added to Chat.` },
      };
    case "ADD_CHAT_MESSAGE":
      return {
        ...state,
        chatMessages: [
          ...state.chatMessages,
          {
            id: `chat-${Date.now()}`,
            role: "user",
            author: "You",
            text: action.text,
            time: new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit" }).format(new Date()),
          },
        ],
      };
    case "ADD_CODE_UPLOADS":
      return {
        ...state,
        codeUploads: [...state.codeUploads, ...action.uploads],
        workspaceStatus: `${action.uploads.length} code file${action.uploads.length === 1 ? "" : "s"} selected for prototype workspace`,
        terminalLogs: [...state.terminalLogs, createTerminalLog(`${action.uploads.length} code file${action.uploads.length === 1 ? "" : "s"} uploaded to code context.`, "success")],
        toast: { id: Date.now(), message: `${action.uploads.length} code file${action.uploads.length === 1 ? "" : "s"} selected.` },
      };
    case "ADD_TERMINAL_LOG":
      return {
        ...state,
        terminalLogs: [...state.terminalLogs, createTerminalLog(action.message, action.logType ?? "default")],
      };
    case "TOGGLE_PREVIEW":
      return { ...state, previewHidden: !state.previewHidden };
    case "RESET_EDITOR_VALUE": {
      const file = getMockFile(action.fileId);
      return {
        ...state,
        editorValues: {
          ...state.editorValues,
          [file.id]: file.value,
        },
        dirtyFileIds: removeItem(state.dirtyFileIds, file.id),
        toast: { id: Date.now(), message: `${file.name} reset to mock content.` },
      };
    }
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
      {state.agentModalOpen ? <AgentManagerModal dispatch={dispatch} /> : null}
      <Toast toast={state.toast} />
    </div>
  );
}

export default App;